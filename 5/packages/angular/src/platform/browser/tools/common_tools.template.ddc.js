define(['dart_sdk', 'packages/angular/src/core/application_ref.template', 'packages/angular/src/core/linker/app_view.template'], function(dart_sdk, application_ref, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_ref$46template = application_ref.src__core__application_ref$46template;
  const src__core__linker__component_factory$46template = app_view.src__core__linker__component_factory$46template;
  const _root = Object.create(null);
  const src__platform__browser__tools__common_tools$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__browser__tools__common_tools$46template, {
    /*src__platform__browser__tools__common_tools$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__browser__tools__common_tools$46template.initReflector = function() {
    if (dart.test(src__platform__browser__tools__common_tools$46template._visited)) {
      return;
    }
    src__platform__browser__tools__common_tools$46template._visited = true;
    src__core__application_ref$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
  };
  dart.fn(src__platform__browser__tools__common_tools$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/browser/tools/common_tools.template.ddc", {
    "package:angular/src/platform/browser/tools/common_tools.template.dart": src__platform__browser__tools__common_tools$46template
  }, '{"version":3,"sourceRoot":"","sources":["common_tools.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,+DAAQ;YAAG;;;;;AAEb,kBAAI,+DAAQ,GAAE;AACZ;;AAEF,sEAAW;AAEX,IAAM,mDAAa;AACnB,IAAM,6DAAa;EACrB","file":"common_tools.template.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__tools__common_tools$46template: src__platform__browser__tools__common_tools$46template
  };
});

//# sourceMappingURL=common_tools.template.ddc.js.map
