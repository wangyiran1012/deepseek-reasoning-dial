window.__ModuleLoader__.load({id:"dsh-codex-controls",factory:(require)=>{const React=require('react');const exports={};const CONTROLS_CSS=".dcc-surface,.dcc-controls{color-scheme:inherit;--dcc-text:light-dark(#252527,#f3f3f4);--dcc-sub:light-dark(#737377,#aaaab0);--dcc-bg:light-dark(#f9f9fa,#242426);--dcc-panel:light-dark(#f7f7f8,#303033);--dcc-border:light-dark(#dedee2,#49494d);--dcc-hover:light-dark(#eaeaec,#3c3c40);--dcc-accent:light-dark(#0078f0,#0085ff);--dcc-track:light-dark(#d8d8dc,#636367);--dcc-thumb:#fff;--dcc-shadow:light-dark(#00000016,#00000055);font-family:var(--dcc-ui-font-family,\"Segoe UI\",\"Microsoft YaHei\",sans-serif);color:var(--dcc-text);font-size:var(--dcc-ui-font-size,13px);line-height:1.5;font-weight:400;letter-spacing:normal;text-transform:none;text-align:left}\n.dcc-controls{position:relative;display:inline-flex;min-width:0;max-width:100%;--dcc-pop-radius:16px}\n.dcc-controls *{box-sizing:border-box}\n.dcc-controls button{font:inherit;color:inherit}\n.dcc-toolbar{display:flex;align-items:center;min-width:0;max-width:100%}\n.dcc-trigger{border:0;background:transparent;display:flex;align-items:center;gap:4px;padding:4px 6px;border-radius:7px;min-height:28px;white-space:nowrap;min-width:0;max-width:100%}\n.dcc-trigger:hover,.dcc-trigger[aria-expanded=true]{background:var(--dcc-hover)}\n.dcc-trigger:disabled{opacity:.6}\n.dcc-model-slot{display:grid;min-width:0;max-width:200px;text-align:left}\n.dcc-model-label,.dcc-model-sizer{grid-area:1/1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dcc-model-sizer{display:grid;visibility:hidden;pointer-events:none}\n.dcc-model-sizer>span{grid-area:1/1}\n.dcc-current-effort{flex:0 0 2em;width:2em;min-width:2em;text-align:center;white-space:nowrap}\n.dcc-icon{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;flex:none;font-style:normal;line-height:1}\n.dcc-icon svg{width:100%;height:100%}\n.dcc-trigger>.dcc-icon{width:12px;height:12px;margin-left:1px;color:var(--dcc-sub)}\n.dcc-popover{position:absolute;display:flex;flex-direction:column;bottom:calc(100% + 8px);left:0;width:248px;max-width:calc(100vw - 32px);max-height:var(--dcc-available-height,calc(100vh - 24px));overflow:hidden;background:var(--dcc-panel);border:1px solid var(--dcc-border);border-radius:var(--dcc-pop-radius);box-shadow:0 8px 28px var(--dcc-shadow);padding:10px 12px 8px;z-index:20;color:var(--dcc-text)}\n.dcc-popover[hidden]{display:none}\n.dcc-effort-head{position:relative;display:flex;align-items:center;justify-content:center;height:1.5em;padding:0}\n.dcc-value{display:block;min-width:2em;height:1.5em;line-height:1.5;font-size:inherit;font-weight:500;color:var(--dcc-accent);text-align:center}\n.dcc-panel-model:hover{background:var(--dcc-hover)}\n.dcc-panel-model{display:flex;align-items:center;justify-content:center;gap:3px;width:100%;max-width:100%;min-width:0;height:1.5em;margin:0 auto 10px;border:0;background:transparent;border-radius:6px;padding:0 6px;font-size:inherit!important;font-weight:400!important}\n.dcc-panel-model>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n.dcc-panel-model>.dcc-icon{width:12px;height:12px}\n.dcc-effort-body{padding:0}\n.dcc-slider-wrap{position:relative;height:24px;--dcc-progress:0%;--dcc-thumb-size:24px}\n.dcc-track,.dcc-fill{position:absolute;top:1px;height:22px;border-radius:13px;left:0;right:0;background:var(--dcc-track)}\n.dcc-fill{right:auto;width:calc(var(--dcc-thumb-size)/2 + (100% - var(--dcc-thumb-size))*var(--dcc-fraction,0));background:var(--dcc-accent);overflow:hidden}\n.dcc-dots{position:absolute;inset:0 calc(var(--dcc-thumb-size)/2);display:flex;align-items:center;justify-content:space-between;pointer-events:none}\n.dcc-dot{width:3px;height:3px;border-radius:50%;background:light-dark(#96969b,#b8b8bd);flex:none}\n.dcc-dot.is-passed{background:#ffffff62}\n.dcc-thumb{position:absolute;top:0;left:calc((100% - var(--dcc-thumb-size))*var(--dcc-fraction,0));width:var(--dcc-thumb-size);height:var(--dcc-thumb-size);border-radius:50%;background:var(--dcc-thumb);box-shadow:0 1px 4px var(--dcc-shadow);pointer-events:none;z-index:3}\n.dcc-range{position:absolute;left:0;top:-10px;width:100%;height:44px;margin:0;opacity:0;cursor:ew-resize;appearance:auto;z-index:5}\n.dcc-ticks{display:flex;justify-content:space-between;gap:0;margin:4px 0 -3px;padding:0 4px}\n.dcc-tick{border:0;background:transparent;padding:5px 2px;min-height:27px;min-width:27px;color:var(--dcc-sub)!important;border-radius:5px;text-align:center;white-space:nowrap;font-size:inherit!important}\n.dcc-tick[aria-pressed=true]{color:var(--dcc-accent)!important;font-weight:500}\n.dcc-tick:hover{background:var(--dcc-hover)}\n.dcc-model-section{display:flex;flex-direction:column;min-height:0}\n.dcc-model-heading{display:flex;align-items:center;flex:none;min-height:28px;padding:3px 8px;margin:0 0 6px;color:var(--dcc-sub);font:inherit;font-weight:400;cursor:default}\n.dcc-model-list{overflow-y:auto;min-height:0;max-height:280px;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--dcc-border) transparent}\n.dcc-group-label{font-size:inherit;color:var(--dcc-sub);padding:6px 8px 3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dcc-model-list>.dcc-group-label:not(:first-child){margin-top:5px;border-top:1px solid var(--dcc-border)}\n.dcc-model-row{display:flex;gap:8px;align-items:center;justify-content:space-between;width:100%;text-align:left;border:0;background:transparent;border-radius:6px;padding:6px 8px;min-height:32px}\n.dcc-model-row:hover,.dcc-model-row[aria-checked=true]{background:var(--dcc-hover)}\n.dcc-model-row:focus-visible{outline:1px solid var(--dcc-sub);outline-offset:-1px}\n.dcc-model-name{font-weight:400;font-size:inherit;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.dcc-check{color:var(--dcc-text);font-size:14px;width:16px;flex:none;text-align:center}\n.dcc-empty{padding:0 4px 9px;color:var(--dcc-sub);font-size:inherit}\n.dcc-error{margin:10px 0 2px;font-size:inherit;color:light-dark(#a73636,#f6a0a0)}\n.dcc-error[hidden]{display:none}\n.dcc-controls[data-dcc-max=true]{--dcc-accent:light-dark(#8a37e8,#b15bff)}\n.dcc-controls[data-dcc-max=true] .dcc-fill{background:linear-gradient(105deg,light-dark(#643cf0,#7447fa) 0%,light-dark(#9436e9,#a441f0) 46%,light-dark(#b23cd9,#bd51ef) 70%,light-dark(#8030e5,#943be8) 100%);background-size:230% 100%}\n.dcc-particles{position:absolute;inset:0;pointer-events:none;border-radius:inherit;z-index:2;overflow:hidden;display:none}\n.dcc-particle{position:absolute;left:var(--dcc-px);top:var(--dcc-py);width:var(--dcc-size);height:var(--dcc-size);background:light-dark(#f3dcff,#f9edff);border-radius:50%;box-shadow:0 0 4px #ead1ffb0;opacity:0}\n.dcc-controls[data-dcc-max=true][data-dcc-particles=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-particles{display:block}\n.dcc-controls[data-dcc-max=true][data-dcc-particles=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-particle{animation:dcc-particle-backflow var(--dcc-duration) linear var(--dcc-delay) infinite}\n.dcc-controls[data-dcc-max=true][data-dcc-shimmer=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-fill{animation:dcc-shimmer 3.2s ease-in-out infinite}\n@keyframes dcc-shimmer{0%,100%{background-position:0% 0}50%{background-position:100% 0}}\n@media(prefers-reduced-motion:reduce){.dcc-controls .dcc-fill,.dcc-controls .dcc-particle{animation:none!important}.dcc-controls .dcc-particles{display:none!important}}\n\n.dcc-controls{--dcc-settle:260ms;--dcc-ease:cubic-bezier(.22,1,.36,1)}\n.dcc-controls .dcc-fill{transition:width var(--dcc-settle) var(--dcc-ease),background-color 240ms ease;background:var(--dcc-accent);isolation:isolate}\n.dcc-controls .dcc-thumb{transition:left var(--dcc-settle) var(--dcc-ease),transform 160ms ease,box-shadow 160ms ease}\n.dcc-controls .dcc-dot,.dcc-controls .dcc-value,.dcc-controls .dcc-tick{transition:color 220ms ease,background-color 220ms ease}\n.dcc-controls .dcc-fill::before{content:\"\";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(105deg,light-dark(#643cf0,#7447fa) 0%,light-dark(#9436e9,#a441f0) 46%,light-dark(#b23cd9,#bd51ef) 70%,light-dark(#8030e5,#943be8) 100%);background-size:230% 100%;opacity:0;transition:opacity 240ms ease;pointer-events:none}\n.dcc-controls[data-dcc-max=true] .dcc-fill{background:var(--dcc-accent);animation:none}\n.dcc-controls[data-dcc-max=true] .dcc-fill::before{opacity:1}\n.dcc-controls[data-dcc-max=true][data-dcc-shimmer=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-fill{animation:none}\n.dcc-controls[data-dcc-max=true][data-dcc-shimmer=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-fill::before{animation:dcc-shimmer 3.2s ease-in-out infinite}\n.dcc-controls .dcc-particles{display:block;opacity:0;transition:opacity 280ms ease}\n.dcc-controls[data-dcc-max=true][data-dcc-particles=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-particles{opacity:1}\n.dcc-controls[data-dcc-particles=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-particle{animation:dcc-particle-backflow var(--dcc-duration) linear var(--dcc-delay) infinite;animation-play-state:paused}\n.dcc-controls[data-dcc-max=true][data-dcc-particles=true][data-dcc-pane=combined][data-dcc-motion-active=true] .dcc-particle{animation-play-state:running}\n@media(prefers-reduced-motion:reduce){.dcc-controls .dcc-fill,.dcc-controls .dcc-fill::before,.dcc-controls .dcc-thumb,.dcc-controls .dcc-particles,.dcc-controls .dcc-value,.dcc-controls .dcc-dot,.dcc-controls .dcc-tick{transition:none!important;animation:none!important}.dcc-controls[data-dcc-dragging=true] .dcc-thumb{transform:none}.dcc-controls .dcc-particles{display:none!important}}\n\n/* Render the reference proportions at native size; labels reserve stable space. */\n.dcc-particle::after{content:\"\";position:absolute;left:50%;top:0;width:7px;height:100%;border-radius:inherit;background:linear-gradient(to right,light-dark(#f3dcff99,#f9edff99),transparent)}\n@keyframes dcc-particle-backflow{0%{opacity:0;transform:translateX(18px) scale(.7)}18%{opacity:.8}72%{opacity:.6}100%{opacity:0;transform:translateX(var(--dcc-drift)) scale(.55)}}\n@media(max-width:420px){.dcc-model-slot{max-width:165px}.dcc-trigger{padding:4px 6px}}\n\n/* Shared, self-contained component styles for both the preview and Harness. */\n:host{display:inline-flex!important;min-width:0!important;max-width:100%!important;vertical-align:middle;color-scheme:inherit}\n.dcc-controls,.dcc-controls *{letter-spacing:normal;text-transform:none}\n.dcc-icon::before{content:\"\";width:6px;height:6px;border:solid currentColor;border-width:0 1.5px 1.5px 0;box-sizing:border-box}\n.dcc-icon[data-dcc-icon=chevron-down]::before{transform:rotate(45deg) translate(-1px,-1px)}\n.dcc-icon[data-dcc-icon=chevron-right]::before{transform:rotate(-45deg)}\n.dcc-icon[data-dcc-icon=chevron-left]::before{transform:rotate(135deg)}\n.dcc-slider-wrap,.dcc-slider-wrap:focus-within{outline:none;box-shadow:none}\n.dcc-range,.dcc-range:focus,.dcc-range:focus-visible{border:0;outline:none;box-shadow:none;background:transparent}\n.dcc-thumb{transform:scale(1);transform-origin:center}\n.dcc-slider-wrap[data-dcc-thumb-hover=true] .dcc-thumb{transform:scale(1.18)}\n.dcc-slider-wrap:has(.dcc-range:focus-visible) .dcc-thumb{box-shadow:inset 0 0 0 2px #a0a0a5,0 1px 4px var(--dcc-shadow)}\n";
const EFFORT_LABELS = {off:'关闭',minimal:'最小',low:'低',medium:'中',high:'高',xhigh:'极高',max:'最高'};

function mountIsolatedModelControls(host, adapter, options = {}) {
  const shadow = host.shadowRoot || host.attachShadow({mode:'open'});
  const style = host.ownerDocument.createElement('style');
  style.textContent = options.styles || '';
  const root = host.ownerDocument.createElement('div');
  root.setAttribute('aria-label', host.getAttribute('aria-label') || '模型与推理强度');
  shadow.replaceChildren(style, root);
  function syncTypography() {
    const view=host.ownerDocument.defaultView;
    if(!view)return;
    let sample=host.parentElement;
    // Match a nearby composer text control, without inheriting its layout rules.
    for(let parent=host.parentElement,depth=0;parent&&depth<5;parent=parent.parentElement,depth++) {
      const peer=[...parent.querySelectorAll('button')].find(button=>!host.contains(button)&&button.textContent.trim()&&button.getClientRects().length);
      if(!peer)continue;
      sample=[...peer.querySelectorAll('span')].find(span=>!span.children.length&&span.textContent.trim())||peer;
      break;
    }
    const computed=sample&&view.getComputedStyle(sample);
    const size=parseFloat(computed?.fontSize);
    root.style.setProperty('--dcc-ui-font-size',Number.isFinite(size)&&size>=10&&size<=24?size+'px':'13px');
    if(computed?.fontFamily)root.style.setProperty('--dcc-ui-font-family',computed.fontFamily);
  }
  syncTypography();
  const observer=host.ownerDocument.defaultView?.ResizeObserver;
  const typographyObserver=observer&&host.parentElement?new observer(syncTypography):null;
  typographyObserver?.observe(host.parentElement);
  host.ownerDocument.defaultView?.addEventListener('resize',syncTypography);
  const view = mountModelControls(root, adapter, options);
  return {...view,syncTypography,dispose(){typographyObserver?.disconnect();host.ownerDocument.defaultView?.removeEventListener('resize',syncTypography);view.dispose();shadow.replaceChildren();}};
}

function mountModelControls(root, adapter, options = {}) {
  const doc = root.ownerDocument;
  const ui = {open:options.initialOpen ? 'combined' : null,draft:undefined,busy:false,locked:!!options.locked,error:'',lastModel:undefined};
  let disposed = false;
  let paneSignature;
  let visualFraction;
  let popoverAnchor;
  let sizingSignature;
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
  function icon(name) {
    const node = element('i', 'dcc-icon');
    node.dataset.dccIcon = name;
    node.setAttribute('aria-hidden', 'true');
    return node;
  }
  function activeElement() {
    return root.getRootNode().activeElement || doc.activeElement;
  }
  const toolbar = element('div', 'dcc-toolbar');
  const modelButton = button('dcc-trigger dcc-model-trigger', '');
  const modelSlot = element('span', 'dcc-model-slot');
  const modelLabel = element('span', 'dcc-model-label');
  const modelSizer = element('span', 'dcc-model-sizer');
  modelSizer.setAttribute('aria-hidden', 'true');
  const effortLabel = element('span', 'dcc-current-effort');
  modelSlot.append(modelLabel, modelSizer);
  modelButton.append(modelSlot, effortLabel, icon('chevron-down','⌄'));
  modelButton.setAttribute('aria-haspopup', 'dialog');
  modelButton.dataset.dccFocus = 'model-trigger';
  toolbar.append(modelButton);
  const popover = element('div', 'dcc-popover');
  popover.hidden = true;
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
  function placePopover() {
    if (!ui.open || disposed) return;
    // Measure the toolbar without an unpositioned popup creating scrollbars.
    popover.hidden = true;
    const rootRect = root.getBoundingClientRect();
    const measuredScale = rootRect.width / root.offsetWidth || 1;
    const scale = Math.abs(measuredScale - 1) < .01 ? 1 : measuredScale;
    const viewportWidth = doc.documentElement.clientWidth || doc.defaultView?.innerWidth;
    const viewportHeight = doc.documentElement.clientHeight || doc.defaultView?.innerHeight;
    popover.hidden = false;
    if (!rootRect.width || !viewportWidth || !viewportHeight) return;
    // Retain one viewport anchor throughout an open session, including model changes.
    popoverAnchor ||= {left:rootRect.left,bottom:rootRect.top - 8 * scale};
    const bottom = Math.min(viewportHeight - 12, Math.max(12, popoverAnchor.bottom));
    popover.style.setProperty('--dcc-available-height', Math.max(0, (bottom - 12) / scale) + 'px');
    const width = popover.getBoundingClientRect().width;
    const left = Math.max(12, Math.min(popoverAnchor.left, viewportWidth - 12 - width));
    popover.style.left = (left - rootRect.left) / scale + 'px';
    popover.style.bottom = (rootRect.bottom - bottom) / scale + 'px';
  }
  function reanchorPopover() {
    popoverAnchor = undefined;
    placePopover();
  }
  function refreshEffort() {
    const info = selectionInfo();
    const valueLabel = labelFor(info.value, info.levels);
    const fraction = visualFraction ?? (info.index < 0 || info.levels.length < 2 ? 0 : info.index / (info.levels.length - 1));
    const pct = fraction * 100;
    root.dataset.dccMax = String(info.levels.length > 1 && info.index === info.levels.length - 1);
    for (const valueNode of popover.querySelectorAll('[data-dcc-value]')) {
      if(valueNode.textContent === valueLabel) continue;
      const changing = !!valueNode.textContent;
      valueNode.textContent = valueLabel;
      if(changing && !doc.hidden && !doc.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        valueNode.animate?.([{opacity:.65},{opacity:1}],{duration:160,easing:'ease-out'});
      }
    }
    for (const track of popover.querySelectorAll('.dcc-slider-wrap')) {
      if(track.style.getPropertyValue('--dcc-fraction') !== String(fraction))track.dataset.dccThumbHover='false';
      track.style.setProperty('--dcc-progress', pct + '%');
      track.style.setProperty('--dcc-fraction', String(fraction));
    }
    for (const range of popover.querySelectorAll('.dcc-range')) {
      range.value = fraction * Math.max(0, info.levels.length - 1);
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
    visualFraction = undefined;
    root.dataset.dccDragging = 'false';
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
    section.append(element('h2','dcc-model-heading','选择模型'));
    const list = element('div', 'dcc-model-list');
    list.setAttribute('role','radiogroup');
    list.setAttribute('aria-label','可用模型');
    const groups = info.groups.filter(group=>group.models?.length);
    if (!groups.length) list.append(element('div','dcc-empty',info.snapshot.status === 'loading' ? '正在加载模型…' : '暂无可用模型'));
    let firstRow;
    let selectedRow;
    for (const group of groups) {
      if (groups.length > 1) list.append(element('div','dcc-group-label',group.name || group.id));
      for (const model of group.models || []) {
        const row = button('dcc-model-row','');
        row.setAttribute('role','radio');
        const selected = info.current?.provider === group.id && info.current?.model === model.id;
        row.setAttribute('aria-checked',String(selected));
        row.tabIndex = -1;
        firstRow ||= row;
        if(selected)selectedRow=row;
        row.disabled = ui.busy || ui.locked;
        row.dataset.dccFocus = 'model-' + group.id + '-' + model.id;
        const name = model.name || model.id;
        row.title = [name,model.description].filter(Boolean).join('\n');
        row.setAttribute('aria-label',name);
        const check = element('span','dcc-check',selected?'✓':'');
        check.setAttribute('aria-hidden','true');
        row.append(element('span','dcc-model-name',name),check);
        row.addEventListener('click', () => {
          if(selected){ui.open='combined';render();popover.querySelector('.dcc-panel-model')?.focus();return;}
          const available = model.reasoning?.efforts || [];
          const prior = memory.get(group.id + '/' + model.id) ?? info.chosen;
          const effort = available.some(e=>e.id===prior) ? prior : model.reasoning?.defaultEffort;
          const selection = {provider:group.id,model:model.id};
          if (effort !== undefined) selection.reasoningEffort = effort;
          void save(selection).then(ok=>{if(ok&&!disposed){ui.open='combined';render();popover.querySelector('.dcc-panel-model')?.focus();}});
        });
        row.addEventListener('keydown',event=>{
          if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
          event.preventDefault();
          const rows=[...list.querySelectorAll('[role=radio]:not(:disabled)')];
          if(!rows.length)return;
          const current=rows.indexOf(row);
          const index=event.key==='Home'?0:event.key==='End'?rows.length-1:(current+(event.key==='ArrowDown'?1:-1)+rows.length)%rows.length;
          for(const item of rows)item.tabIndex=-1;
          rows[index].tabIndex=0;
          rows[index].focus({preventScroll:true});
          rows[index].scrollIntoView?.({block:'nearest'});
        });
        list.append(row);
      }
    }
    if(selectedRow||firstRow)(selectedRow||firstRow).tabIndex=0;
    section.append(list);
    return section;
  }
  function effortSection(info) {
    const section = element('section','dcc-effort-section');
    const head = element('div','dcc-effort-head');
    const badge = element('span','dcc-value');
    badge.dataset.dccValue = '';
    head.append(badge);
    const modelLink = button('dcc-panel-model','');
    modelLink.append(element('span','',info.model?.name || info.current?.model || '选择模型'),icon('chevron-right','›'));
    modelLink.dataset.dccFocus = 'panel-model';
    modelLink.setAttribute('aria-label','切换模型');
    modelLink.disabled=ui.busy || ui.locked;
    modelLink.addEventListener('click',()=>{
      ui.open='model';ui.draft=undefined;render();
      const row=popover.querySelector('[role=radio][tabindex="0"]');
      (row||modelButton).focus({preventScroll:true});
      row?.scrollIntoView?.({block:'nearest'});
    });
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
    const thumb = element('span','dcc-thumb');
    range.type = 'range';range.min = '0';range.max = String(info.levels.length - 1);range.step = '1';
    range.setAttribute('aria-label','推理强度');
    range.dataset.dccFocus = 'effort-range';
    function updateThumbHover(event) {
      if(event.pointerType === 'touch' || range.disabled){wrap.dataset.dccThumbHover='false';return;}
      const rect = thumb.getBoundingClientRect();
      const radius = Math.min(rect.width, rect.height) / 2;
      const distance = Math.hypot(event.clientX - rect.left - rect.width / 2, event.clientY - rect.top - rect.height / 2);
      wrap.dataset.dccThumbHover=String(radius > 0 && distance <= radius);
    }
    range.addEventListener('pointermove',updateThumbHover);
    range.addEventListener('pointerleave',()=>{wrap.dataset.dccThumbHover='false';});
    range.addEventListener('pointerdown',()=>{root.dataset.dccDragging='true';});
    range.addEventListener('input',()=>{
      const raw = Number(range.value);
      visualFraction = Math.round(raw) / (info.levels.length - 1);
      ui.draft=info.levels[Math.round(raw)].id;
      refreshEffort();
    });
    range.addEventListener('change',()=>{
      const level = info.levels[Math.round(Number(range.value))].id;
      ui.draft = level;
      void save({...info.current,reasoningEffort:level});
    });
    range.addEventListener('pointerup',()=>{root.dataset.dccDragging='false';});
    range.addEventListener('pointercancel',()=>{
      visualFraction=undefined;ui.draft=undefined;root.dataset.dccDragging='false';refreshEffort();
    });
    range.addEventListener('keydown',event=>{
      const infoNow=selectionInfo();
      let index=Math.max(0,infoNow.index);
      if(['ArrowRight','ArrowUp','PageUp'].includes(event.key))index++;
      else if(['ArrowLeft','ArrowDown','PageDown'].includes(event.key))index--;
      else if(event.key==='Home')index=0;
      else if(event.key==='End')index=info.levels.length-1;
      else return;
      event.preventDefault();
      if(ui.busy||ui.locked)return;
      const level=info.levels[Math.max(0,Math.min(info.levels.length-1,index))].id;
      ui.draft=level;
      void save({...info.current,reasoningEffort:level});
    });
    const particles = element('div','dcc-particles');
    particles.setAttribute('aria-hidden','true');
    for(let i=0;i<64;i++) {
      const particle=element('span','dcc-particle');
      particle.style.setProperty('--dcc-px',((i*37)%97+1)+'%');
      particle.style.setProperty('--dcc-py',((i*19)%66+17)+'%');
      particle.style.setProperty('--dcc-drift',(-70-(i*11)%76)+'px');
      particle.style.setProperty('--dcc-duration',(2+(i%7)*.24)+'s');
      particle.style.setProperty('--dcc-delay',(-i*.21)+'s');
      particle.style.setProperty('--dcc-size',(i%5===0?3:2)+'px');
      particles.append(particle);
    }
    const fill = element('div','dcc-fill');
    fill.append(particles);
    wrap.append(element('div','dcc-track'),fill,dots,thumb,range);
    body.append(wrap);
    if(options.showTicks)body.append(ticks);
    section.append(body);
    return section;
  }
  function render() {
    if (disposed) return;
    const focused = root.contains(activeElement()) ? activeElement()?.dataset?.dccFocus : undefined;
    let info = selectionInfo();
    const key = info.current ? info.current.provider + '/' + info.current.model : undefined;
    if (key !== ui.lastModel) {visualFraction=undefined;ui.draft=undefined;ui.lastModel=key;info=selectionInfo();}
    modelLabel.textContent = info.model?.name || info.current?.model || '选择模型';
    const names = [...new Set([...info.groups.flatMap(group=>(group.models||[]).map(model=>model.name||model.id)),modelLabel.textContent])];
    const nextSizingSignature=JSON.stringify(names);
    const sizingChanged=nextSizingSignature!==sizingSignature;
    if(sizingChanged){
      sizingSignature=nextSizingSignature;
      modelSizer.replaceChildren(...names.map(name=>element('span','',name)));
    }
    modelButton.setAttribute('aria-label','模型与推理强度：' + modelLabel.textContent+'，'+labelFor(info.chosen,info.levels));
    modelButton.dataset.tooltip=modelButton.getAttribute('aria-label');
    effortLabel.textContent = labelFor(info.chosen,info.levels);
    modelButton.disabled = ui.busy || ui.locked;
    modelButton.setAttribute('aria-expanded',String(ui.open==='combined'||ui.open==='model'));
    root.dataset.dccPane=ui.open || 'closed';
    popover.hidden = ui.open === null;
    if(!ui.open)popoverAnchor=undefined;
    const signature=JSON.stringify([ui.open,key,info.levels.map(e=>e.id),info.groups]);
    // Keep the slider and its effect layers alive across selection commits.
    const paneChanged = signature !== paneSignature;
    if(paneChanged) {
      visualFraction=undefined;
      paneSignature=signature;
      popover.replaceChildren();
      if(ui.open==='model')popover.append(modelsSection(info));
      if(ui.open==='combined')popover.append(effortSection(info));
      const error=element('div','dcc-error');error.setAttribute('role','alert');popover.append(error);
    }
    for(const control of popover.querySelectorAll('button'))control.disabled=ui.busy||ui.locked;
    const error=popover.querySelector('.dcc-error');
    error.textContent=ui.error;error.hidden=!ui.error;
    refreshEffort();
    // Effort commits keep the live slider and particle animation uninterrupted.
    if(paneChanged||sizingChanged)placePopover();
    if (focused) Array.from(root.querySelectorAll('[data-dcc-focus]')).find(n=>n.dataset.dccFocus===focused)?.focus({preventScroll:true});
  }
  function open() {
    if(ui.locked)return;
    visualFraction=undefined;root.dataset.dccDragging='false';
    ui.open = ui.open ? null : 'combined';
    ui.draft=undefined;ui.error='';render();
    if (ui.open) void adapter.load?.();
  }
  modelButton.addEventListener('click',open);
  function outside(event) {
    if(root.closest('[data-variant]')?.hidden)return;
    if(options.outsideBoundary&&!options.outsideBoundary.contains(event.target))return;
    const inside = root.contains(event.target) || event.composedPath?.().includes(root);
    if(ui.open&&!inside){ui.open=null;ui.draft=undefined;render();}
  }
  function escape(event) {if(event.key==='Escape'&&ui.open&&root.contains(activeElement())){ui.open=null;ui.draft=undefined;render();modelButton.focus();}}
  doc.addEventListener('pointerdown',outside);
  function visibility(){root.dataset.dccMotionActive=String(!doc.hidden);}
  doc.addEventListener('visibilitychange',visibility);
  doc.defaultView?.addEventListener('resize',reanchorPopover);
  doc.addEventListener('scroll',reanchorPopover,true);
  root.addEventListener('keydown',escape);
  const stop = adapter.subscribe(()=>{knownSnapshot=adapter.getSnapshot();render();});
  render();
  void adapter.load?.();
  return {render,setLocked(value){ui.locked=!!value;if(ui.locked){ui.open=null;ui.draft=undefined;}render();},setShimmer(value){root.dataset.dccShimmer=String(value);},setParticles(value){root.dataset.dccParticles=String(value);},dispose(){disposed=true;stop?.();doc.removeEventListener('pointerdown',outside);doc.removeEventListener('visibilitychange',visibility);doc.defaultView?.removeEventListener('resize',reanchorPopover);doc.removeEventListener('scroll',reanchorPopover,true);root.removeEventListener('keydown',escape);root.replaceChildren();}};
}

const inject = ['slots', 'modelDirectories', 'sessions'];
function apply(ctx) {
  const tagId = 'dsh-codex-controls-css';
  ctx.effect(() => {
    // Retire the legacy global stylesheet; each control owns its isolated CSS.
    document.getElementById(tagId)?.remove();
  });
  function Controls({ controller, available, locked }) {
    const root = React.useRef(null);
    const activeView = React.useRef(null);
    React.useEffect(() => {
      if (!root.current || !controller || !available) return;
      const view = mountIsolatedModelControls(root.current, {
        getSnapshot: () => controller.store.getSnapshot(),
        subscribe: listener => controller.store.subscribe(listener),
        select: selection => controller.select(selection),
        load: () => controller.load().catch(() => undefined)
      }, {styles:CONTROLS_CSS,shimmer:true,particles:true,locked});
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
