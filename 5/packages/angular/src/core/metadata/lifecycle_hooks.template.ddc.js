define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection_util.template'], function(dart_sdk, change_detection_util) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__change_detection_util$46template = change_detection_util.src__core__change_detection__change_detection_util$46template;
  const _root = Object.create(null);
  const src__core__metadata__lifecycle_hooks$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__metadata__lifecycle_hooks$46template, {
    /*src__core__metadata__lifecycle_hooks$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__metadata__lifecycle_hooks$46template.initReflector = function() {
    if (dart.test(src__core__metadata__lifecycle_hooks$46template._visited)) {
      return;
    }
    src__core__metadata__lifecycle_hooks$46template._visited = true;
    src__core__change_detection__change_detection_util$46template.initReflector();
  };
  dart.fn(src__core__metadata__lifecycle_hooks$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/metadata/lifecycle_hooks.template.ddc", {
    "package:angular/src/core/metadata/lifecycle_hooks.template.dart": src__core__metadata__lifecycle_hooks$46template
  }, '{"version":3,"sourceRoot":"","sources":["lifecycle_hooks.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,2EAAa;EACrB","file":"lifecycle_hooks.template.ddc.js"}');
  // Exports:
  return {
    src__core__metadata__lifecycle_hooks$46template: src__core__metadata__lifecycle_hooks$46template
  };
});

//# sourceMappingURL=lifecycle_hooks.template.ddc.js.map
