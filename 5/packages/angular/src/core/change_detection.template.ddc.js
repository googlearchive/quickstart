define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/change_detection/component_state.template', 'packages/angular/src/core/change_detection/differs/default_iterable_differ.template'], function(dart_sdk, change_detection, component_state, default_iterable_differ) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__change_detection$46template = change_detection.src__core__change_detection__change_detection$46template;
  const src__core__change_detection__component_state$46template = component_state.src__core__change_detection__component_state$46template;
  const src__core__change_detection__differs__default_iterable_differ$46template = default_iterable_differ.src__core__change_detection__differs__default_iterable_differ$46template;
  const _root = Object.create(null);
  const src__core__change_detection$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__change_detection$46template, {
    /*src__core__change_detection$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__change_detection$46template.initReflector = function() {
    if (dart.test(src__core__change_detection$46template._visited)) {
      return;
    }
    src__core__change_detection$46template._visited = true;
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__change_detection__component_state$46template.initReflector();
    src__core__change_detection__differs__default_iterable_differ$46template.initReflector();
  };
  dart.fn(src__core__change_detection$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/change_detection.template.ddc", {
    "package:angular/src/core/change_detection.template.dart": src__core__change_detection$46template
  }, '{"version":3,"sourceRoot":"","sources":["change_detection.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAWI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,qEAAa;AACnB,IAAM,sFAAa;EACrB","file":"change_detection.template.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection$46template: src__core__change_detection$46template
  };
});

//# sourceMappingURL=change_detection.template.ddc.js.map
