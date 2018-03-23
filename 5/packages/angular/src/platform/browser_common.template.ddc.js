define(['dart_sdk', 'packages/angular/src/core/testability/testability.template', 'packages/angular/src/platform/browser/testability.template'], function(dart_sdk, testability, testability$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__testability__testability$46template = testability.src__core__testability__testability$46template;
  const src__platform__browser__testability$46template = testability$.src__platform__browser__testability$46template;
  const _root = Object.create(null);
  const src__platform__browser_common$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__browser_common$46template, {
    /*src__platform__browser_common$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__browser_common$46template.initReflector = function() {
    if (dart.test(src__platform__browser_common$46template._visited)) {
      return;
    }
    src__platform__browser_common$46template._visited = true;
    src__core__testability__testability$46template.initReflector();
    src__platform__browser__testability$46template.initReflector();
  };
  dart.fn(src__platform__browser_common$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/browser_common.template.ddc", {
    "package:angular/src/platform/browser_common.template.dart": src__platform__browser_common$46template
  }, '{"version":3,"sourceRoot":"","sources":["browser_common.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAYI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,4DAAa;AACnB,IAAM,4DAAa;EACrB","file":"browser_common.template.ddc.js"}');
  // Exports:
  return {
    src__platform__browser_common$46template: src__platform__browser_common$46template
  };
});

//# sourceMappingURL=browser_common.template.ddc.js.map
