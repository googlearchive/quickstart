define(['dart_sdk', 'packages/angular/core.template', 'packages/angular/src/core/linker.template', 'packages/angular/src/core/linker/app_view_utils.template', 'packages/angular/src/runtime.template'], function(dart_sdk, core, linker, app_view_utils, runtime) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$46template = core.core$46template;
  const src__core__linker$46template = linker.src__core__linker$46template;
  const src__core__linker__app_view_utils$46template = app_view_utils.src__core__linker__app_view_utils$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__common__directives__ng_if$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__directives__ng_if$46template, {
    /*src__common__directives__ng_if$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__directives__ng_if$46template.initReflector = function() {
    if (dart.test(src__common__directives__ng_if$46template._visited)) {
      return;
    }
    src__common__directives__ng_if$46template._visited = true;
    core$46template.initReflector();
    src__core__linker$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.fn(src__common__directives__ng_if$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/directives/ng_if.template.ddc", {
    "package:angular/src/common/directives/ng_if.template.dart": src__common__directives__ng_if$46template
  }, '{"version":3,"sourceRoot":"","sources":["ng_if.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAgBI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,qCAAa;EACrB","file":"ng_if.template.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_if$46template: src__common__directives__ng_if$46template
  };
});

//# sourceMappingURL=ng_if.template.ddc.js.map
