define(['dart_sdk', 'packages/angular/src/core/change_detection/differs/default_iterable_differ.template', 'packages/angular/src/core/linker.template', 'packages/angular/core.template'], function(dart_sdk, default_iterable_differ, linker, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__differs__default_iterable_differ$46template = default_iterable_differ.src__core__change_detection__differs__default_iterable_differ$46template;
  const src__core__linker$46template = linker.src__core__linker$46template;
  const core$46template = core.core$46template;
  const _root = Object.create(null);
  const src__common__directives__ng_for$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__directives__ng_for$46template, {
    /*src__common__directives__ng_for$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__directives__ng_for$46template.initReflector = function() {
    if (dart.test(src__common__directives__ng_for$46template._visited)) {
      return;
    }
    src__common__directives__ng_for$46template._visited = true;
    src__core__change_detection__differs__default_iterable_differ$46template.initReflector();
    src__core__linker$46template.initReflector();
    core$46template.initReflector();
  };
  dart.fn(src__common__directives__ng_for$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/directives/ng_for.template.ddc", {
    "package:angular/src/common/directives/ng_for.template.dart": src__common__directives__ng_for$46template
  }, '{"version":3,"sourceRoot":"","sources":["ng_for.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,sFAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,6BAAa;EACrB","file":"ng_for.template.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_for$46template: src__common__directives__ng_for$46template
  };
});

//# sourceMappingURL=ng_for.template.ddc.js.map
