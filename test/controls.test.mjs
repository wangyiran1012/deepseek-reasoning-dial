import assert from 'node:assert/strict';

import { JSDOM } from 'jsdom';
import { mountModelControls } from '../src/controls.js';

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
range.value='3';range.dispatchEvent(new dom.window.Event('input'));
assert.equal(root.querySelector('.dcc-value').textContent,'最高');
assert.equal(calls.length,0);
range.dispatchEvent(new dom.window.Event('change'));
await settle();
assert.equal(calls.length,1);
assert.equal(snapshot.current.reasoningEffort,'max');
assert.equal(root.dataset.dccMax,'true');
assert.equal(root.querySelectorAll('.dcc-particle').length,26);
assert.equal(root.querySelector('.dcc-particles').parentElement.className,'dcc-fill');
console.log('Dragging previews locally and commits once.');

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

root.querySelector('.dcc-reset').click();
await settle();
assert.equal(snapshot.current.reasoningEffort,'high');
assert.equal(root.dataset.dccMax,'false');
console.log('Reset restores the model default and stops highest-level effects.');

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

