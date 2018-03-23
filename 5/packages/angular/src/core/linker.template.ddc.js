define(['dart_sdk', 'packages/angular/src/core/linker/app_view.template', 'packages/angular/src/core/linker/component_resolver.template', 'packages/angular/src/core/linker/dynamic_component_loader.template', 'packages/angular/src/core/linker/element_ref.template', 'packages/angular/src/core/linker/exceptions.template', 'packages/angular/src/core/linker/query_list.template'], function(dart_sdk, app_view, component_resolver, dynamic_component_loader, element_ref, exceptions, query_list) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__component_factory$46template = app_view.src__core__linker__component_factory$46template;
  const src__core__linker__component_loader$46template = app_view.src__core__linker__component_loader$46template;
  const src__core__linker__template_ref$46template = app_view.src__core__linker__template_ref$46template;
  const src__core__linker__view_container_ref$46template = app_view.src__core__linker__view_container_ref$46template;
  const src__core__linker__view_ref$46template = app_view.src__core__linker__view_ref$46template;
  const src__core__linker__component_resolver$46template = component_resolver.src__core__linker__component_resolver$46template;
  const src__core__linker__dynamic_component_loader$46template = dynamic_component_loader.src__core__linker__dynamic_component_loader$46template;
  const src__core__linker__element_ref$46template = element_ref.src__core__linker__element_ref$46template;
  const src__core__linker__exceptions$46template = exceptions.src__core__linker__exceptions$46template;
  const src__core__linker__query_list$46template = query_list.src__core__linker__query_list$46template;
  const _root = Object.create(null);
  const src__core__linker$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__linker$46template, {
    /*src__core__linker$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker$46template.initReflector = function() {
    if (dart.test(src__core__linker$46template._visited)) {
      return;
    }
    src__core__linker$46template._visited = true;
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__component_loader$46template.initReflector();
    src__core__linker__component_resolver$46template.initReflector();
    src__core__linker__dynamic_component_loader$46template.initReflector();
    src__core__linker__element_ref$46template.initReflector();
    src__core__linker__exceptions$46template.initReflector();
    src__core__linker__query_list$46template.initReflector();
    src__core__linker__template_ref$46template.initReflector();
    src__core__linker__view_container_ref$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
  };
  dart.fn(src__core__linker$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/linker.template.ddc", {
    "package:angular/src/core/linker.template.dart": src__core__linker$46template
  }, '{"version":3,"sourceRoot":"","sources":["linker.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAkBI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,6DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,oEAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,oDAAa;EACrB","file":"linker.template.ddc.js"}');
  // Exports:
  return {
    src__core__linker$46template: src__core__linker$46template
  };
});

//# sourceMappingURL=linker.template.ddc.js.map
