define(['dart_sdk', 'packages/angular/src/platform/browser/tools/common_tools.template', 'packages/angular/src/core/linker/app_view.template'], function(dart_sdk, common_tools, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__platform__browser__tools__common_tools$46template = common_tools.src__platform__browser__tools__common_tools$46template;
  const src__core__linker__component_factory$46template = app_view.src__core__linker__component_factory$46template;
  const _root = Object.create(null);
  const src__platform__browser__tools__tools$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__browser__tools__tools$46template, {
    /*src__platform__browser__tools__tools$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__browser__tools__tools$46template.initReflector = function() {
    if (dart.test(src__platform__browser__tools__tools$46template._visited)) {
      return;
    }
    src__platform__browser__tools__tools$46template._visited = true;
    src__platform__browser__tools__common_tools$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
  };
  dart.fn(src__platform__browser__tools__tools$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/browser/tools/tools.template.ddc", {
    "package:angular/src/platform/browser/tools/tools.template.dart": src__platform__browser__tools__tools$46template
  }, '{"version":3,"sourceRoot":"","sources":["tools.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,oEAAa;AACnB,IAAM,6DAAa;EACrB","file":"tools.template.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__tools__tools$46template: src__platform__browser__tools__tools$46template
  };
});

//# sourceMappingURL=tools.template.ddc.js.map
