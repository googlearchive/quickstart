define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/core/linker/component_resolver', 'packages/angular/src/core/linker/app_view.template', 'packages/angular/src/core/di.template', 'packages/angular/src/di/reflector.template'], function(dart_sdk, reflector, component_resolver, app_view, di, reflector$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__core__linker__component_resolver = component_resolver.src__core__linker__component_resolver;
  const src__core__linker__component_factory$46template = app_view.src__core__linker__component_factory$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__di__reflector$46template = reflector$.src__di__reflector$46template;
  const _root = Object.create(null);
  const src__core__linker__component_resolver$46template = Object.create(_root);
  let VoidToComponentResolver = () => (VoidToComponentResolver = dart.constFn(dart.fnType(src__core__linker__component_resolver.ComponentResolver, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__linker__component_resolver$46template, {
    /*src__core__linker__component_resolver$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__component_resolver$46template.initReflector = function() {
    if (dart.test(src__core__linker__component_resolver$46template._visited)) {
      return;
    }
    src__core__linker__component_resolver$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__core__linker__component_resolver.ComponentResolver), dart.fn(() => src__core__linker__component_resolver.ComponentResolver.new(), VoidToComponentResolver()));
    src__core__linker__component_factory$46template.initReflector();
    src__core__di$46template.initReflector();
    src__di__reflector$46template.initReflector();
  };
  dart.fn(src__core__linker__component_resolver$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/linker/component_resolver.template.ddc", {
    "package:angular/src/core/linker/component_resolver.template.dart": src__core__linker__component_resolver$46template
  }, '{"version":3,"sourceRoot":"","sources":["component_resolver.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAgBI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAO,kCAAe,CAAC,sEAAiB,EAAE,cAAM,AAAI,2DAAiB;AACrE,IAAM,6DAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,2CAAa;EACrB","file":"component_resolver.template.ddc.js"}');
  // Exports:
  return {
    src__core__linker__component_resolver$46template: src__core__linker__component_resolver$46template
  };
});

//# sourceMappingURL=component_resolver.template.ddc.js.map
