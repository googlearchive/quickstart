define(['dart_sdk', 'packages/angular/src/facade/lang.template'], function(dart_sdk, lang) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__lang$46template = lang.src__facade__lang$46template;
  const _root = Object.create(null);
  const src__core__change_detection__change_detection_util$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__change_detection__change_detection_util$46template, {
    /*src__core__change_detection__change_detection_util$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__change_detection__change_detection_util$46template.initReflector = function() {
    if (dart.test(src__core__change_detection__change_detection_util$46template._visited)) {
      return;
    }
    src__core__change_detection__change_detection_util$46template._visited = true;
    src__facade__lang$46template.initReflector();
  };
  dart.fn(src__core__change_detection__change_detection_util$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/change_detection/change_detection_util.template.ddc", {
    "package:angular/src/core/change_detection/change_detection_util.template.dart": src__core__change_detection__change_detection_util$46template
  }, '{"version":3,"sourceRoot":"","sources":["change_detection_util.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,sEAAQ;YAAG;;;;;AAEb,kBAAI,sEAAQ,GAAE;AACZ;;AAEF,6EAAW;AAEX,IAAM,0CAAa;EACrB","file":"change_detection_util.template.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__change_detection_util$46template: src__core__change_detection__change_detection_util$46template
  };
});

//# sourceMappingURL=change_detection_util.template.ddc.js.map
