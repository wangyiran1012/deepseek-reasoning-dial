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
