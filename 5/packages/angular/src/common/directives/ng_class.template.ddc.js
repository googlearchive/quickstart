define(['dart_sdk', 'packages/angular/core.template', 'packages/angular/src/core/change_detection/differs/default_iterable_differ.template', 'packages/angular/src/core/change_detection/differs/default_keyvalue_differ.template'], function(dart_sdk, core, default_iterable_differ, default_keyvalue_differ) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$46template = core.core$46template;
  const src__core__change_detection__differs__default_iterable_differ$46template = default_iterable_differ.src__core__change_detection__differs__default_iterable_differ$46template;
  const src__core__change_detection__differs__default_keyvalue_differ$46template = default_keyvalue_differ.src__core__change_detection__differs__default_keyvalue_differ$46template;
  const _root = Object.create(null);
  const src__common__directives__ng_class$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__directives__ng_class$46template, {
    /*src__common__directives__ng_class$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__directives__ng_class$46template.initReflector = function() {
    if (dart.test(src__common__directives__ng_class$46template._visited)) {
      return;
    }
    src__common__directives__ng_class$46template._visited = true;
    core$46template.initReflector();
    src__core__change_detection__differs__default_iterable_differ$46template.initReflector();
    src__core__change_detection__differs__default_keyvalue_differ$46template.initReflector();
  };
  dart.fn(src__common__directives__ng_class$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/directives/ng_class.template.ddc", {
    "package:angular/src/common/directives/ng_class.template.dart": src__common__directives__ng_class$46template
  }, '{"version":3,"sourceRoot":"","sources":["ng_class.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAeI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,sFAAa;AACnB,IAAM,sFAAa;EACrB","file":"ng_class.template.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_class$46template: src__common__directives__ng_class$46template
  };
});

//# sourceMappingURL=ng_class.template.ddc.js.map
