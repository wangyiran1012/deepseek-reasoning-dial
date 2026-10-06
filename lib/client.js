window.__ModuleLoader__.load({id:"dsh-codex-controls",factory:(require)=>{const React=require('react');const exports={};const CONTROLS_CSS=".dcc-surface,.dcc-controls{color-scheme:inherit;--dcc-text:var(--dsw-alias-label-primary,light-dark(#252527,#f3f3f4));--dcc-sub:var(--dsw-alias-label-secondary,light-dark(#737377,#aaaab0));--dcc-bg:light-dark(#f9f9fa,#242426);--dcc-panel:light-dark(#f7f7f8,#303033);--dcc-border:light-dark(#dedee2,#49494d);--dcc-hover:light-dark(#eaeaec,#3c3c40);--dcc-accent:light-dark(#0078f0,#0085ff);--dcc-track:light-dark(#d8d8dc,#636367);--dcc-thumb:#fff;--dcc-shadow:light-dark(#00000016,#00000055);font-family:Inter,\"Segoe UI\",\"Microsoft YaHei\",sans-serif;color:var(--dcc-text);font-size:14px;line-height:1.45}\n.dcc-controls{position:relative;display:inline-flex;min-width:0;max-width:100%;--dcc-pop-radius:22px}\n.dcc-controls *{box-sizing:border-box}\n.dcc-controls button{font:inherit;color:inherit}\n.dcc-toolbar{display:flex;align-items:center;min-width:0;max-width:100%}\n.dcc-trigger{border:0;background:transparent;display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:8px;min-height:32px;white-space:nowrap;min-width:0;max-width:100%}\n.dcc-trigger:hover,.dcc-trigger[aria-expanded=true]{background:var(--dcc-hover)}\n.dcc-trigger:disabled{opacity:.6}\n.dcc-model-label{min-width:0;max-width:200px;overflow:hidden;text-overflow:ellipsis}\n.dcc-current-effort{flex:none}\n.dcc-icon{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;flex:none;font-style:normal;line-height:1}\n.dcc-icon svg{width:100%;height:100%}\n.dcc-trigger>.dcc-icon{width:14px;height:14px;margin-left:2px;color:var(--dcc-sub)}\n.dcc-popover{position:absolute;bottom:calc(100% + 12px);left:0;width:330px;max-width:calc(100vw - 48px);background:var(--dcc-panel);border:1px solid var(--dcc-border);border-radius:var(--dcc-pop-radius);box-shadow:0 8px 28px var(--dcc-shadow);padding:16px 18px 12px;z-index:20;color:var(--dcc-text)}\n.dcc-popover[hidden]{display:none}\n.dcc-effort-head{position:relative;display:flex;align-items:center;justify-content:center;min-height:32px;padding:0 42px}\n.dcc-value{font-size:21px;font-weight:500;color:var(--dcc-accent);text-align:center}\n.dcc-reset{position:absolute;right:0;top:0;border:0;background:transparent;border-radius:50%;width:32px;height:32px;display:grid;place-items:center;padding:6px}\n.dcc-reset .dcc-icon{width:20px;height:20px;font-size:26px}\n.dcc-reset:hover,.dcc-panel-model:hover,.dcc-back:hover{background:var(--dcc-hover)}\n.dcc-reset:disabled{opacity:.4}\n.dcc-panel-model{display:flex;align-items:center;justify-content:center;gap:3px;max-width:100%;margin:2px auto 18px;border:0;background:transparent;border-radius:7px;padding:4px 8px;font-size:16px!important;font-weight:500!important;min-height:31px}\n.dcc-panel-model>span{overflow-wrap:anywhere;min-width:0}\n.dcc-panel-model>.dcc-icon{width:17px;height:17px}\n.dcc-effort-body{padding:0}\n.dcc-slider-wrap{position:relative;height:38px;--dcc-progress:0%;--dcc-thumb-size:38px}\n.dcc-track,.dcc-fill{position:absolute;top:3px;height:32px;border-radius:20px;left:0;right:0;background:var(--dcc-track)}\n.dcc-fill{right:auto;width:calc(var(--dcc-thumb-size)/2 + (100% - var(--dcc-thumb-size))*var(--dcc-fraction,0));background:var(--dcc-accent);overflow:hidden}\n.dcc-dots{position:absolute;inset:0 calc(var(--dcc-thumb-size)/2);display:flex;align-items:center;justify-content:space-between;pointer-events:none}\n.dcc-dot{width:5px;height:5px;border-radius:50%;background:light-dark(#96969b,#b8b8bd);flex:none}\n.dcc-dot.is-passed{background:#ffffff62}\n.dcc-thumb{position:absolute;top:0;left:calc((100% - var(--dcc-thumb-size))*var(--dcc-fraction,0));width:var(--dcc-thumb-size);height:var(--dcc-thumb-size);border-radius:50%;background:var(--dcc-thumb);box-shadow:0 1px 4px var(--dcc-shadow);pointer-events:none;z-index:3}\n.dcc-range{position:absolute;left:0;top:-3px;width:100%;height:44px;margin:0;opacity:0;cursor:ew-resize;appearance:auto;z-index:5}\n.dcc-slider-wrap:focus-within{outline:2px solid var(--dcc-accent);outline-offset:5px;border-radius:24px}\n.dcc-ticks{display:flex;justify-content:space-between;gap:0;margin:4px 0 -3px;padding:0 4px}\n.dcc-tick{border:0;background:transparent;padding:5px 2px;min-height:27px;min-width:27px;color:var(--dcc-sub)!important;border-radius:5px;text-align:center;white-space:nowrap;font-size:11px!important}\n.dcc-tick[aria-pressed=true]{color:var(--dcc-accent)!important;font-weight:500}\n.dcc-tick:hover{background:var(--dcc-hover)}\n.dcc-back{display:flex;align-items:center;gap:6px;border:0;background:transparent;padding:6px 2px;margin:0 0 10px;border-radius:7px;font-weight:500!important}\n.dcc-group-label{font-size:11px;color:var(--dcc-sub);padding:5px 8px 3px}\n.dcc-model-row{display:flex;gap:10px;align-items:center;justify-content:space-between;width:100%;text-align:left;border:0;background:transparent;border-radius:10px;padding:10px 8px;min-height:56px}\n.dcc-model-row:hover,.dcc-model-row[aria-checked=true]{background:var(--dcc-hover)}\n.dcc-model-copy{display:flex;flex-direction:column;gap:2px;min-width:0}\n.dcc-model-name{font-weight:500;font-size:14px;overflow-wrap:anywhere}\n.dcc-model-desc{font-size:12px;color:var(--dcc-sub);overflow-wrap:anywhere}\n.dcc-check{color:var(--dcc-accent);font-size:16px;width:17px;flex:none;text-align:center}\n.dcc-empty{padding:0 4px 9px;color:var(--dcc-sub);font-size:12px}\n.dcc-error{margin:10px 0 2px;font-size:12px;color:light-dark(#a73636,#f6a0a0)}\n.dcc-error[hidden]{display:none}\n.dcc-controls[data-dcc-max=true]{--dcc-accent:light-dark(#8a37e8,#b15bff)}\n.dcc-controls[data-dcc-max=true] .dcc-fill{background:linear-gradient(105deg,light-dark(#643cf0,#7447fa) 0%,light-dark(#9436e9,#a441f0) 46%,light-dark(#b23cd9,#bd51ef) 70%,light-dark(#8030e5,#943be8) 100%);background-size:230% 100%}\n.dcc-particles{position:absolute;inset:0;pointer-events:none;border-radius:inherit;z-index:2;overflow:hidden;display:none}\n.dcc-particle{position:absolute;left:var(--dcc-px);top:var(--dcc-py);width:var(--dcc-size);height:var(--dcc-size);background:light-dark(#f3dcff,#f9edff);border-radius:50%;box-shadow:0 0 4px #ead1ffb0;opacity:0}\n.dcc-controls[data-dcc-max=true][data-dcc-particles=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-particles{display:block}\n.dcc-controls[data-dcc-max=true][data-dcc-particles=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-particle{animation:dcc-particle-rise var(--dcc-duration) linear var(--dcc-delay) infinite}\n.dcc-controls[data-dcc-max=true][data-dcc-shimmer=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-fill{animation:dcc-shimmer 3.2s ease-in-out infinite}\n@keyframes dcc-particle-rise{0%{opacity:0;transform:translate(-12px,0) scale(.6)}20%{opacity:.85}75%{opacity:.65}100%{opacity:0;transform:translate(var(--dcc-drift),var(--dcc-rise)) scale(.4)}}\n@keyframes dcc-shimmer{0%,100%{background-position:0% 0}50%{background-position:100% 0}}\n@media(prefers-reduced-motion:reduce){.dcc-controls .dcc-fill,.dcc-controls .dcc-particle{animation:none!important}.dcc-controls .dcc-particles{display:none!important}}\n@media(pointer:coarse){.dcc-trigger,.dcc-tick,.dcc-back,.dcc-panel-model{min-height:44px}.dcc-reset{width:44px;height:44px}.dcc-effort-head{min-height:44px;padding:0 44px}.dcc-slider-wrap{height:44px}.dcc-track,.dcc-fill{top:6px}.dcc-thumb{top:3px}.dcc-range{top:0}.dcc-tick{min-width:40px}}\n@media(max-width:420px){.dcc-popover{width:290px;max-width:calc(100vw - 44px);padding:14px 16px 12px}.dcc-model-label{max-width:165px}.dcc-trigger{padding:6px}.dcc-panel-model{font-size:15px!important}}\n.dcc-popover{transform:scale(.75);transform-origin:left bottom}\n";
const EFFORT_LABELS = {off:'关闭',minimal:'最小',low:'低',medium:'中',high:'高',xhigh:'极高',max:'最高'};

function mountModelControls(root, adapter, options = {}) {
  const doc = root.ownerDocument;
  const ui = {open:options.initialOpen ? 'combined' : null,draft:undefined,busy:false,locked:!!options.locked,error:'',lastModel:undefined};
  let disposed = false;
  let knownSnapshot = adapter.getSnapshot();
  const memory = new Map();
  root.classList.add('dcc-controls');
  root.setAttribute('aria-label', root.getAttribute('aria-label') || '模型与推理强度');
  root.dataset.dccShimmer = String(options.shimmer !== false);
  root.dataset.dccParticles = String(options.particles !== false);
  root.dataset.dccMotionActive = String(!doc.hidden);

  function element(tag, classes, text) {
    const node = doc.createElement(tag);
    if (classes) node.className = classes;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function button(classes, label) {
    const node = element('button', classes + ' cursor-interaction', label);
    node.type = 'button';
    return node;
  }
  function icon(name, fallback) {
    const node = element('i', 'dcc-icon');
    node.setAttribute('data-lucide', name);
    node.setAttribute('aria-hidden', 'true');
    if (!doc.defaultView?.lucide) node.textContent = fallback;
    return node;
  }
  const toolbar = element('div', 'dcc-toolbar');
  const modelButton = button('dcc-trigger dcc-model-trigger', '');
  const modelLabel = element('span', 'dcc-model-label');
  const effortLabel = element('span', 'dcc-current-effort');
  modelButton.append(modelLabel, effortLabel, icon('chevron-down','⌄'));
  modelButton.setAttribute('aria-haspopup', 'dialog');
  modelButton.dataset.dccFocus = 'model-trigger';
  toolbar.append(modelButton);
  const popover = element('div', 'dcc-popover');
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-label', '模型与推理强度设置');
  const live = element('span', 'dcc-live');
  live.setAttribute('aria-live', 'polite');
  live.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)';
  root.append(toolbar, popover, live);

  function selectionInfo() {
    const snapshot = knownSnapshot || {};
    const current = snapshot.current;
    const groups = Array.isArray(snapshot.groups) ? snapshot.groups : [];
    const group = groups.find(g => g.id === current?.provider);
    const model = group?.models?.find(m => m.id === current?.model);
    const levels = Array.isArray(model?.reasoning?.efforts) ? model.reasoning.efforts : [];
    const chosen = current?.reasoningEffort ?? model?.reasoning?.defaultEffort;
    const value = ui.draft ?? chosen;
    const index = levels.findIndex(e => e.id === value);
    return {snapshot,current,groups,model,levels,value,index,chosen};
  }
  function labelFor(value, levels) {
    return EFFORT_LABELS[value] || levels.find(e => e.id === value)?.name || value || '默认';
  }
  function refreshEffort() {
    const info = selectionInfo();
    const valueLabel = labelFor(info.value, info.levels);
    const pct = info.index < 0 || info.levels.length < 2 ? 0 : info.index / (info.levels.length - 1) * 100;
    root.dataset.dccMax = String(info.levels.length > 1 && info.index === info.levels.length - 1);
    for (const valueNode of popover.querySelectorAll('[data-dcc-value]')) valueNode.textContent = valueLabel;
    for (const track of popover.querySelectorAll('.dcc-slider-wrap')) {
      track.style.setProperty('--dcc-progress', pct + '%');
      track.style.setProperty('--dcc-fraction', String(pct / 100));
    }
    for (const range of popover.querySelectorAll('.dcc-range')) {
      range.value = Math.max(0, info.index);
      range.setAttribute('aria-valuetext', info.index < 0 ? '默认' : valueLabel);
      range.disabled = ui.busy || ui.locked;
    }
    for (const tick of popover.querySelectorAll('.dcc-tick')) {
      tick.setAttribute('aria-pressed', String(tick.dataset.effort === info.value));
      tick.disabled = ui.busy || ui.locked;
    }
    for (const [index, dot] of Array.from(popover.querySelectorAll('.dcc-dot')).entries()) dot.classList.toggle('is-passed', index <= info.index);
  }
  async function save(selection, keepOpen = true) {
    if (ui.busy || ui.locked || disposed) return false;
    ui.busy = true;
    ui.error = '';
    render();
    try {
      const result = await adapter.select(selection);
      if (result === false || result?.ok === false) throw new Error('rejected');
      if (disposed) return false;
      knownSnapshot = adapter.getSnapshot();
      if (selection.reasoningEffort !== undefined) memory.set(selection.provider + '/' + selection.model, selection.reasoningEffort);
      if (!keepOpen) ui.open = null;
      const info = selectionInfo();
      live.textContent = (info.model?.name || info.current?.model || '模型') + '，推理强度' + labelFor(info.chosen,info.levels);
      options.onSelection?.(selection);
      return true;
    } catch {
      if (!disposed) ui.error = '切换失败，请重试。';
      return false;
    } finally {
      if (!disposed) {ui.busy = false;ui.draft = undefined;knownSnapshot = adapter.getSnapshot();render();}
    }
  }
  function modelsSection(info) {
    const section = element('section', 'dcc-model-section');
    const back = button('dcc-back','');
    back.append(icon('chevron-left','‹'),element('span','','选择模型'));
    back.dataset.dccFocus = 'model-back';
    back.addEventListener('click',()=>{ui.open='combined';render();popover.querySelector('.dcc-panel-model')?.focus();});
    section.append(back);
    if (!info.groups.length) section.append(element('div','dcc-empty',info.snapshot.status === 'loading' ? '正在加载模型…' : '暂无可用模型'));
    for (const group of info.groups) {
      if (info.groups.length > 1) section.append(element('div','dcc-group-label',group.name || group.id));
      for (const model of group.models || []) {
        const row = button('dcc-model-row','');
        row.setAttribute('role','radio');
        const selected = info.current?.provider === group.id && info.current?.model === model.id;
        row.setAttribute('aria-checked',String(selected));
        row.disabled = ui.busy || ui.locked;
        row.dataset.dccFocus = 'model-' + group.id + '-' + model.id;
        const copy = element('span','dcc-model-copy');
        copy.append(element('span','dcc-model-name',model.name || model.id));
        if (model.description) copy.append(element('span','dcc-model-desc',model.description));
        row.append(copy,element('span','dcc-check',selected?'✓':''));
        row.addEventListener('click', () => {
          const available = model.reasoning?.efforts || [];
          const prior = memory.get(group.id + '/' + model.id) ?? info.chosen;
          const effort = available.some(e=>e.id===prior) ? prior : model.reasoning?.defaultEffort;
          const selection = {provider:group.id,model:model.id};
          if (effort !== undefined) selection.reasoningEffort = effort;
          void save(selection).then(ok=>{if(ok&&!disposed){ui.open='combined';render();popover.querySelector('.dcc-panel-model')?.focus();}});
        });
        section.append(row);
      }
    }
    section.setAttribute('role','radiogroup');
    section.setAttribute('aria-label','可用模型');
    return section;
  }
  function effortSection(info) {
    const section = element('section','dcc-effort-section');
    const head = element('div','dcc-effort-head');
    const badge = element('span','dcc-value');
    badge.dataset.dccValue = '';
    const reset = button('dcc-reset','');
    reset.append(icon('rotate-ccw','↶'));
    reset.setAttribute('aria-label','恢复默认推理强度');
    reset.dataset.dccFocus = 'effort-reset';
    const defaultEffort = info.model?.reasoning?.defaultEffort;
    reset.disabled = ui.busy || ui.locked || !info.current || !info.levels.some(e=>e.id===defaultEffort);
    reset.addEventListener('click',()=>{ui.draft=undefined;void save({...info.current,reasoningEffort:defaultEffort});});
    head.append(badge,reset);
    const modelLink = button('dcc-panel-model','');
    modelLink.append(element('span','',info.model?.name || info.current?.model || '选择模型'),icon('chevron-right','›'));
    modelLink.dataset.dccFocus = 'panel-model';
    modelLink.setAttribute('aria-label','切换模型');
    modelLink.disabled=ui.busy || ui.locked;
    modelLink.addEventListener('click',()=>{ui.open='model';ui.draft=undefined;render();popover.querySelector('.dcc-back')?.focus();});
    section.append(head,modelLink);
    if (info.levels.length < 2) {
      section.append(element('div','dcc-empty',info.levels.length ? '当前模型只提供一个推理档位。' : '当前模型未提供可调节的推理档位。'));
      return section;
    }
    const body = element('div','dcc-effort-body');
    const wrap = element('div','dcc-slider-wrap');
    const dots = element('div','dcc-dots');
    const ticks = element('div','dcc-ticks');
    ticks.style.setProperty('--dcc-count',String(info.levels.length));
    for (const level of info.levels) {
      dots.append(element('span','dcc-dot'));
      const tick = button('dcc-tick',labelFor(level.id,info.levels));
      tick.dataset.effort = level.id;
      tick.dataset.dccFocus = 'effort-' + level.id;
      tick.addEventListener('click',()=>{ui.draft=level.id;void save({...info.current,reasoningEffort:level.id});});
      ticks.append(tick);
    }
    const range = element('input','dcc-range');
    range.type = 'range';range.min = '0';range.max = String(info.levels.length - 1);range.step = '1';
    range.setAttribute('aria-label','推理强度');
    range.dataset.dccFocus = 'effort-range';
    range.addEventListener('input',()=>{ui.draft=info.levels[Number(range.value)].id;refreshEffort();});
    range.addEventListener('change',()=>{void save({...info.current,reasoningEffort:info.levels[Number(range.value)].id});});
    range.addEventListener('pointercancel',()=>{ui.draft=undefined;refreshEffort();});
    const particles = element('div','dcc-particles');
    particles.setAttribute('aria-hidden','true');
    for(let i=0;i<26;i++) {
      const particle=element('span','dcc-particle');
      particle.style.setProperty('--dcc-px',((i*37)%97+1)+'%');
      particle.style.setProperty('--dcc-py',((i*19)%66+17)+'%');
      particle.style.setProperty('--dcc-drift',(14+(i*11)%38)+'px');
      particle.style.setProperty('--dcc-rise',((i*7)%13-6)+'px');
      particle.style.setProperty('--dcc-duration',(2+(i%7)*.24)+'s');
      particle.style.setProperty('--dcc-delay',(-i*.21)+'s');
      particle.style.setProperty('--dcc-size',(i%5===0?3:2)+'px');
      particles.append(particle);
    }
    const fill = element('div','dcc-fill');
    fill.append(particles);
    wrap.append(element('div','dcc-track'),fill,dots,element('span','dcc-thumb'),range);
    body.append(wrap);
    if(options.showTicks)body.append(ticks);
    section.append(body);
    return section;
  }
  function render() {
    if (disposed) return;
    const focused = root.contains(doc.activeElement) ? doc.activeElement?.dataset?.dccFocus : undefined;
    let info = selectionInfo();
    const key = info.current ? info.current.provider + '/' + info.current.model : undefined;
    if (key !== ui.lastModel) {ui.draft=undefined;ui.lastModel=key;info=selectionInfo();}
    modelLabel.textContent = info.model?.name || info.current?.model || '选择模型';
    modelButton.setAttribute('aria-label','模型与推理强度：' + modelLabel.textContent+'，'+labelFor(info.chosen,info.levels));
    modelButton.dataset.tooltip=modelButton.getAttribute('aria-label');
    effortLabel.textContent = labelFor(info.chosen,info.levels);
    modelButton.disabled = ui.busy || ui.locked;
    modelButton.setAttribute('aria-expanded',String(ui.open==='combined'||ui.open==='model'));
    root.dataset.dccPane=ui.open || 'closed';
    popover.hidden = ui.open === null;
    popover.replaceChildren();
    if (ui.open==='model') popover.append(modelsSection(info));
    if (ui.open==='combined') popover.append(effortSection(info));
    const error = element('div','dcc-error',ui.error);
    error.setAttribute('role','alert');error.hidden=!ui.error;popover.append(error);
    refreshEffort();
    doc.defaultView?.lucide?.createIcons({attrs:{width:16,height:16}});
    if (focused) Array.from(root.querySelectorAll('[data-dcc-focus]')).find(n=>n.dataset.dccFocus===focused)?.focus({preventScroll:true});
  }
  function open() {
    if(ui.locked)return;
    ui.open = ui.open ? null : 'combined';
    ui.draft=undefined;ui.error='';render();
    if (ui.open) void adapter.load?.();
  }
  modelButton.addEventListener('click',open);
  function outside(event) {
    if(root.closest('[data-variant]')?.hidden)return;
    if(options.outsideBoundary&&!options.outsideBoundary.contains(event.target))return;
    if(ui.open&&!root.contains(event.target)){ui.open=null;ui.draft=undefined;render();}
  }
  function escape(event) {if(event.key==='Escape'&&ui.open&&root.contains(doc.activeElement)){ui.open=null;ui.draft=undefined;render();modelButton.focus();}}
  doc.addEventListener('pointerdown',outside);
  function visibility(){root.dataset.dccMotionActive=String(!doc.hidden);}
  doc.addEventListener('visibilitychange',visibility);
  root.addEventListener('keydown',escape);
  const stop = adapter.subscribe(()=>{knownSnapshot=adapter.getSnapshot();render();});
  render();
  void adapter.load?.();
  return {render,setLocked(value){ui.locked=!!value;if(ui.locked){ui.open=null;ui.draft=undefined;}render();},setShimmer(value){root.dataset.dccShimmer=String(value);},setParticles(value){root.dataset.dccParticles=String(value);},dispose(){disposed=true;stop?.();doc.removeEventListener('pointerdown',outside);doc.removeEventListener('visibilitychange',visibility);root.removeEventListener('keydown',escape);root.replaceChildren();}};
}

const inject = ['slots', 'modelDirectories', 'sessions'];
function apply(ctx) {
  const tagId = 'dsh-codex-controls-css';
  ctx.effect(() => {
    let tag = document.getElementById(tagId);
    if (!tag) {
      tag = document.createElement('style');
      tag.id = tagId;
      tag.textContent = CONTROLS_CSS;
      document.head.appendChild(tag);
    }
    return () => tag.remove();
  });
  function Controls({ controller, available, locked }) {
    const root = React.useRef(null);
    const activeView = React.useRef(null);
    React.useEffect(() => {
      if (!root.current || !controller || !available) return;
      const view = mountModelControls(root.current, {
        getSnapshot: () => controller.store.getSnapshot(),
        subscribe: listener => controller.store.subscribe(listener),
        select: selection => controller.select(selection),
        load: () => controller.load().catch(() => undefined)
      }, {shimmer:true,particles:true,locked});
      activeView.current = view;
      return () => {activeView.current = null;view.dispose();};
    }, [controller,available]);
    React.useEffect(() => {activeView.current?.setLocked(locked);}, [locked,controller,available]);
    if(!available)return null;
    return React.createElement('div', {ref:root,'data-codex-controls':''});
  }
  ctx.slots.inject('conversation.input.model', () => ctx.slots.register({
    name:'conversation.input.model',
    priority:-100,
    inject: sessionId => ({controller:ctx.modelDirectories.directoryFor(sessionId),available:ctx.sessions.subagentAddress(sessionId) === undefined})
  }, Controls));
}
exports.inject = inject;
exports.apply = apply;

return exports;}});
