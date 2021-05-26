module.exports = bud => {
  bud.use([
    require('@roots/bud-babel'), 
    require('@roots/bud-react'),
  ]);

  bud.babel.setPresetOptions('@babel/preset-react', {
    runtime: 'automatic',
    importSource: '@theme-ui/core',
  });

  bud.entry({
    app: ['app.js'],
  });

  bud.template({template: 'public/index.html'});

  bud.persist();
  
  return bud;
}
