define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection_util.template', 'packages/angular/src/core/change_detection/change_detector_ref.template', 'packages/angular/src/core/change_detection/constants.template', 'packages/angular/src/core/change_detection/differs/default_iterable_differ.template', 'packages/angular/src/core/change_detection/differs/default_keyvalue_differ.template', 'packages/angular/src/core/change_detection/pipe_transform.template'], function(dart_sdk, change_detection_util, change_detector_ref, constants, default_iterable_differ, default_keyvalue_differ, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__change_detection_util$46template = change_detection_util.src__core__change_detection__change_detection_util$46template;
  const src__core__change_detection__change_detector_ref$46template = change_detector_ref.src__core__change_detection__change_detector_ref$46template;
  const src__core__change_detection__constants$46template = constants.src__core__change_detection__constants$46template;
  const src__core__change_detection__differs__default_iterable_differ$46template = default_iterable_differ.src__core__change_detection__differs__default_iterable_differ$46template;
  const src__core__change_detection__differs__default_keyvalue_differ$46template = default_keyvalue_differ.src__core__change_detection__differs__default_keyvalue_differ$46template;
  const src__core__change_detection__pipe_transform$46template = pipe_transform.src__core__change_detection__pipe_transform$46template;
  const _root = Object.create(null);
  const src__core__change_detection__change_detection$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__change_detection__change_detection$46template, {
    /*src__core__change_detection__change_detection$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__change_detection__change_detection$46template.initReflector = function() {
    if (dart.test(src__core__change_detection__change_detection$46template._visited)) {
      return;
    }
    src__core__change_detection__change_detection$46template._visited = true;
    src__core__change_detection__change_detection_util$46template.initReflector();
    src__core__change_detection__change_detector_ref$46template.initReflector();
    src__core__change_detection__constants$46template.initReflector();
    src__core__change_detection__differs__default_iterable_differ$46template.initReflector();
    src__core__change_detection__differs__default_keyvalue_differ$46template.initReflector();
    src__core__change_detection__pipe_transform$46template.initReflector();
  };
  dart.fn(src__core__change_detection__change_detection$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/change_detection/change_detection.template.ddc", {
    "package:angular/src/core/change_detection/change_detection.template.dart": src__core__change_detection__change_detection$46template
  }, '{"version":3,"sourceRoot":"","sources":["change_detection.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAcI,iEAAQ;YAAG;;;;;AAEb,kBAAI,iEAAQ,GAAE;AACZ;;AAEF,wEAAW;AAEX,IAAM,2EAAa;AACnB,IAAM,yEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,sFAAa;AACnB,IAAM,sFAAa;AACnB,IAAM,oEAAa;EACrB","file":"change_detection.template.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__change_detection$46template: src__core__change_detection__change_detection$46template
  };
});

//# sourceMappingURL=change_detection.template.ddc.js.map
