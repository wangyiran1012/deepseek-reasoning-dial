import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { JSDOM } from 'jsdom';
import { mountModelControls, mountIsolatedModelControls } from '../src/controls.js';

const dom = new JSDOM('<div id="test"></div><div id="separate"></div>');
const doc = dom.window.document;
const levels = [{id:'off',name:'Off'},{id:'low',name:'Low'},{id:'high',name:'High'},{id:'max',name:'Max'}];
const models = [{id:'flash',name:'Flash',reasoning:{efforts:levels,defaultEffort:'high'}},{id:'pro',name:'Pro',reasoning:{efforts:levels,defaultEffort:'high'}}];
const listeners = new Set();
let snapshot = {status:'ready',current:{provider:'demo',model:'flash',reasoningEffort:'high'},groups:[{id:'demo',models}]};
let failNext = false;
const calls = [];
const adapter = {
  getSnapshot:()=>snapshot,
  subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn);},
  load:async()=>snapshot,
  select:async selection=>{
    calls.push(selection);
    if(failNext){failNext=false;return{ok:false};}
    snapshot={...snapshot,current:selection};
    for(const fn of listeners)fn();
    return{ok:true};
  }
};
const settle=()=>new Promise(resolve=>setTimeout(resolve,0));
const root=doc.getElementById('test');
const view=mountModelControls(root,adapter,{initialOpen:'combined',showTicks:true});
assert.equal(root.querySelector('.dcc-popover').hidden,false);
assert.equal(root.querySelector('.dcc-model-section'),null);
assert.equal(root.querySelectorAll('.dcc-trigger').length,1);
assert.equal(root.querySelector('.dcc-panel-model').textContent.includes('Flash'),true);
assert.equal(root.querySelector('[data-lucide="zap"]'),null);
assert.equal(root.querySelector('.dcc-lightning'),null);
assert.equal(root.querySelector('.dcc-current-effort').textContent,'高');
console.log('Single combined trigger opens the reference effort panel.');

let range=root.querySelector('.dcc-range');
const stableFill=root.querySelector('.dcc-fill');
const visibilityChanges=[];
const placementObserver=new dom.window.MutationObserver(records=>visibilityChanges.push(...records));
placementObserver.observe(root.querySelector('.dcc-popover'),{attributes:true,attributeFilter:['hidden']});
range.value='1.25';range.dispatchEvent(new dom.window.Event('input'));
assert.equal(root.querySelector('.dcc-value').textContent,'低');
assert.equal(range.step,'1');
assert.equal(Number(root.querySelector('.dcc-slider-wrap').style.getPropertyValue('--dcc-fraction')),1/3);
range.value='1.75';range.dispatchEvent(new dom.window.Event('input'));
assert.equal(root.querySelector('.dcc-value').textContent,'高');
assert.equal(Number(root.querySelector('.dcc-slider-wrap').style.getPropertyValue('--dcc-fraction')),2/3);
assert.equal(calls.length,0);
range.dispatchEvent(new dom.window.Event('pointercancel'));
range.value='3';range.dispatchEvent(new dom.window.Event('input'));
assert.equal(root.querySelector('.dcc-value').textContent,'最高');
assert.equal(calls.length,0);
range.dispatchEvent(new dom.window.Event('change'));
await settle();
assert.equal(calls.length,1);
assert.equal(root.querySelector('.dcc-range'),range);
assert.equal(root.querySelector('.dcc-fill'),stableFill);
assert.equal(visibilityChanges.length,0);
placementObserver.disconnect();
assert.equal(snapshot.current.reasoningEffort,'max');
assert.equal(root.dataset.dccMax,'true');
assert.equal(root.querySelectorAll('.dcc-particle').length,64);
assert.equal(root.querySelector('.dcc-particles').parentElement.className,'dcc-fill');
assert.ok([...root.querySelectorAll('.dcc-particle')].every(p=>parseFloat(p.style.getPropertyValue('--dcc-drift'))<0));
console.log('Dragging previews locally and commits once.');
assert.equal(root.querySelector('.dcc-reset'),null);
const thumb=root.querySelector('.dcc-thumb');
thumb.getBoundingClientRect=()=>({left:100,top:100,width:30,height:30,right:130,bottom:130});
range.dispatchEvent(new dom.window.MouseEvent('pointermove',{clientX:115,clientY:115,bubbles:true}));
assert.equal(root.querySelector('.dcc-slider-wrap').dataset.dccThumbHover,'true');
range.dispatchEvent(new dom.window.MouseEvent('pointermove',{clientX:130,clientY:130,bubbles:true}));
assert.equal(root.querySelector('.dcc-slider-wrap').dataset.dccThumbHover,'false');
range.dispatchEvent(new dom.window.MouseEvent('pointermove',{clientX:115,clientY:115,bubbles:true}));
range.dispatchEvent(new dom.window.Event('pointerleave'));
assert.equal(root.querySelector('.dcc-slider-wrap').dataset.dccThumbHover,'false');
console.log('Only the circular thumb hit area triggers hover enlargement; reset is absent.');

root.querySelector('.dcc-panel-model').click();
assert.equal(root.dataset.dccPane,'model');
assert.equal(root.querySelector('[role="radio"]').getAttribute('aria-checked'),'true');
root.querySelectorAll('[role="radio"]')[1].click();
await settle();
assert.equal(snapshot.current.model,'pro');
assert.equal(snapshot.current.reasoningEffort,'max');
assert.equal(root.querySelector('.dcc-model-label').textContent,'Pro');
assert.equal(root.dataset.dccPane,'combined');
console.log('Model switch retains a supported effort.');

failNext=true;
root.querySelector('[data-effort="low"]').click();
await settle();
assert.equal(snapshot.current.reasoningEffort,'max');
assert.equal(root.querySelector('.dcc-value').textContent,'最高');
assert.equal(root.querySelector('.dcc-error').hidden,false);
console.log('Rejected selections revert to the authoritative value.');

range=root.querySelector('.dcc-range');
const beforeCancel=calls.length;
range.value='1';range.dispatchEvent(new dom.window.Event('input'));
range.dispatchEvent(new dom.window.Event('pointercancel'));
assert.equal(root.querySelector('.dcc-value').textContent,'最高');
assert.equal(calls.length,beforeCancel);
console.log('Cancelling a drag discards its preview.');

const separate=doc.getElementById('separate');
const separateView=mountModelControls(separate,adapter,{initialOpen:'combined'});
assert.equal(separate.querySelector('.dcc-model-section'),null);
separate.querySelector('.dcc-panel-model').click();
assert.ok(separate.querySelector('.dcc-model-section'));
assert.equal(separate.querySelector('.dcc-effort-section'),null);
separate.querySelector('.dcc-model-trigger').focus();
separate.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
assert.equal(separate.querySelector('.dcc-popover').hidden,true);
console.log('Model subpane and Escape work.');

range=root.querySelector('.dcc-range');range.value='2';
range.dispatchEvent(new dom.window.Event('input'));range.dispatchEvent(new dom.window.Event('change'));
await settle();
assert.equal(snapshot.current.reasoningEffort,'high');
assert.equal(root.dataset.dccMax,'false');
console.log('Lowering effort stops highest-level effects.');
const keyboardRange=root.querySelector('.dcc-range');
const keyboardCalls=calls.length;
keyboardRange.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'ArrowLeft',bubbles:true,cancelable:true}));
await settle();
assert.equal(snapshot.current.reasoningEffort,'low');
assert.equal(calls.length,keyboardCalls+1);
keyboardRange.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'End',bubbles:true,cancelable:true}));
await settle();
assert.equal(snapshot.current.reasoningEffort,'max');
keyboardRange.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Home',bubbles:true,cancelable:true}));
await settle();
assert.equal(snapshot.current.reasoningEffort,'off');
assert.equal(root.querySelector('.dcc-range'),keyboardRange);
console.log('Keyboard uses four real effort levels and keeps animated elements stable.');

snapshot={...snapshot,current:{provider:'demo',model:'pro',reasoningEffort:'high'},groups:[{id:'demo',models:[{id:'pro',name:'Pro',reasoning:{efforts:levels.slice(0,3),defaultEffort:'low'}}]}]};
for(const fn of listeners)fn();
assert.equal(root.dataset.dccMax,'true');
range=root.querySelector('.dcc-range');
range.value='1';range.dispatchEvent(new dom.window.Event('input'));
assert.equal(root.dataset.dccMax,'false');
range.dispatchEvent(new dom.window.Event('pointercancel'));
assert.equal(root.dataset.dccMax,'true');
root.querySelector('.dcc-model-trigger').click();
assert.equal(root.dataset.dccPane,'closed');
root.querySelector('.dcc-model-trigger').click();
assert.equal(root.dataset.dccPane,'combined');
console.log('Effects use the highest supported level even when its id is high.');

view.setLocked(true);
assert.equal(root.querySelector('.dcc-model-trigger').disabled,true);
assert.equal(root.querySelector('.dcc-popover').hidden,true);
root.querySelector('.dcc-model-trigger').click();
assert.equal(root.querySelector('.dcc-popover').hidden,true);
view.setLocked(false);
root.querySelector('.dcc-model-trigger').click();
assert.equal(root.querySelector('.dcc-popover').hidden,false);
console.log('Host locking closes the panel and prevents changes during a task.');

snapshot={...snapshot,groups:[{id:'demo',models:[{id:'pro',name:'Pro'}]}]};
for(const fn of listeners)fn();
assert.equal(root.querySelector('.dcc-range'),null);
assert.match(root.querySelector('.dcc-empty').textContent,/未提供/);
view.dispose();separateView.dispose();
assert.equal(listeners.size,0);
assert.equal(root.children.length,0);
console.log('Models without levels and cleanup work.');

const isolatedHost=doc.createElement('div');
const peerToolbar=doc.createElement('div');
const peerButton=doc.createElement('button');
const peerLabel=doc.createElement('span');peerLabel.textContent='工作区内修改';peerLabel.style.fontSize='12px';peerLabel.style.fontFamily='Arial';
peerButton.append(peerLabel);peerButton.getClientRects=()=>[{width:90,height:28}];
peerToolbar.append(peerButton,isolatedHost);doc.body.append(peerToolbar);
let isolatedSnapshot={status:'ready',current:{provider:'demo',model:'flash',reasoningEffort:'high'},groups:[{id:'demo',models}]};
const isolatedListeners=new Set();
const sharedCSS=readFileSync(new URL('../src/controls.css',import.meta.url),'utf8');
const isolatedView=mountIsolatedModelControls(isolatedHost,{
  getSnapshot:()=>isolatedSnapshot,
  subscribe:fn=>{isolatedListeners.add(fn);return()=>isolatedListeners.delete(fn);},
  select:async selection=>{isolatedSnapshot={...isolatedSnapshot,current:selection};for(const fn of isolatedListeners)fn();return{ok:true};}
},{styles:sharedCSS,initialOpen:true});
const shadow=isolatedHost.shadowRoot;
assert.equal(shadow.querySelector('style').textContent,sharedCSS);
assert.equal(shadow.querySelector('.dcc-controls').style.getPropertyValue('--dcc-ui-font-size'),'12px');
assert.equal(shadow.querySelector('.dcc-controls').style.getPropertyValue('--dcc-ui-font-family'),'Arial');
peerLabel.style.fontSize='13px';isolatedView.syncTypography();
assert.equal(shadow.querySelector('.dcc-controls').style.getPropertyValue('--dcc-ui-font-size'),'13px');
assert.equal(shadow.querySelector('.dcc-reset'),null);
assert.equal(shadow.querySelectorAll('.dcc-particle').length,64);
const isolatedRange=shadow.querySelector('.dcc-range');
isolatedRange.dispatchEvent(new dom.window.MouseEvent('pointerdown',{bubbles:true,composed:true}));
assert.equal(shadow.querySelector('.dcc-popover').hidden,false);
isolatedRange.focus();
isolatedRange.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'End',bubbles:true,cancelable:true,composed:true}));
await settle();
assert.equal(isolatedSnapshot.current.reasoningEffort,'max');
assert.equal(shadow.activeElement,isolatedRange);
isolatedRange.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Escape',bubbles:true,composed:true}));
assert.equal(shadow.querySelector('.dcc-popover').hidden,true);
assert.equal(shadow.querySelector('.dcc-controls').style.getPropertyValue('--dcc-ui-font-size'),'13px');
assert.equal(shadow.activeElement,shadow.querySelector('.dcc-trigger'));
shadow.querySelector('.dcc-trigger').click();
doc.body.dispatchEvent(new dom.window.MouseEvent('pointerdown',{bubbles:true,composed:true}));
assert.equal(shadow.querySelector('.dcc-popover').hidden,true);
isolatedView.dispose();
assert.equal(shadow.children.length,0);
assert.equal(isolatedListeners.size,0);
console.log('Composer typography matches in open and closed states; isolated focus, pointer events, and cleanup work.');

// Model switching must survive long names, long descriptions, failed requests,
// and a host toolbar that moves the control when its current model changes.
const modelHost=doc.createElement('div');doc.body.append(modelHost);
const longName='DeepSeek-Long-Model-Name-That-Needs-Truncation';
let modelSnapshot={status:'ready',current:{provider:'account',model:'flash',reasoningEffort:'max'},groups:[
  {id:'empty',models:[]},
  {id:'api',name:'DeepSeek',models:[{id:'pro',name:longName,description:'A long description. '.repeat(80),reasoning:{efforts:levels,defaultEffort:'high'}}]},
  {id:'account',name:'DeepSeek Account',models:[{id:'flash',name:'Flash',reasoning:{efforts:levels,defaultEffort:'high'}}]}
]};
let rejectModel=true;
const modelListeners=new Set();const modelCalls=[];
Object.defineProperty(modelHost,'offsetWidth',{value:178});
modelHost.getBoundingClientRect=()=>({left:modelSnapshot.current.model==='flash'?570:595,top:450,bottom:478,width:178,height:28});
const modelView=mountModelControls(modelHost,{
  getSnapshot:()=>modelSnapshot,
  subscribe:fn=>{modelListeners.add(fn);return()=>modelListeners.delete(fn);},
  select:async selection=>{
    modelCalls.push(selection);
    if(rejectModel){rejectModel=false;return{ok:false};}
    modelSnapshot={...modelSnapshot,current:selection};for(const fn of modelListeners)fn();return{ok:true};
  }
},{initialOpen:true});
const modelPopup=modelHost.querySelector('.dcc-popover');
modelPopup.getBoundingClientRect=()=>({width:248});modelView.render();
assert.equal(modelPopup.style.left,'0px');
assert.equal(modelPopup.style.bottom,'36px');
assert.equal(modelPopup.style.getPropertyValue('--dcc-available-height'),'430px');
const sizer=modelHost.querySelector('.dcc-model-sizer');
assert.equal(sizer.getAttribute('aria-hidden'),'true');
assert.deepEqual([...sizer.children].map(node=>node.textContent),[longName,'Flash']);
modelHost.querySelector('.dcc-panel-model').click();
let modelRows=modelHost.querySelectorAll('[role=radio]');
assert.equal(modelRows.length,2);
assert.equal(modelHost.querySelectorAll('.dcc-group-label').length,2);
assert.equal(modelHost.querySelector('.dcc-model-desc'),null);
assert.ok(modelRows[0].title.includes('A long description.'));
assert.equal(modelRows[0].getAttribute('aria-label'),longName);
assert.equal(doc.activeElement,modelRows[1]);
modelRows[1].dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true,cancelable:true}));
assert.equal(doc.activeElement,modelRows[0]);
assert.equal(modelCalls.length,0);
modelRows[0].click();await settle();
assert.equal(modelSnapshot.current.model,'flash');
assert.equal(modelHost.dataset.dccPane,'model');
assert.equal(modelHost.querySelector('.dcc-error').hidden,false);
modelHost.querySelectorAll('[role=radio]')[0].click();await settle();
assert.equal(modelSnapshot.current.model,'pro');
assert.equal(modelSnapshot.current.reasoningEffort,'max');
assert.equal(modelHost.dataset.dccPane,'combined');
assert.equal(modelPopup.style.left,'-25px');
assert.equal(modelPopup.style.bottom,'36px');
assert.equal(modelHost.querySelector('.dcc-model-sizer'),sizer);
assert.deepEqual([...sizer.children].map(node=>node.textContent),[longName,'Flash']);
modelHost.querySelector('.dcc-panel-model').click();
modelHost.querySelector('[aria-checked=true]').click();await settle();
assert.equal(modelCalls.length,2);
modelView.dispose();assert.equal(modelListeners.size,0);
console.log('Compact model list keeps its anchor across host movement, retains sizing, supports keyboard focus, and recovers from a rejected model change.');

