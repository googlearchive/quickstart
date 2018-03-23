define(['dart_sdk', 'packages/angular/src/core/testability/testability.template'], function(dart_sdk, testability) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__testability__testability$46template = testability.src__core__testability__testability$46template;
  const _root = Object.create(null);
  const src__platform__browser__testability$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__browser__testability$46template, {
    /*src__platform__browser__testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__browser__testability$46template.initReflector = function() {
    if (dart.test(src__platform__browser__testability$46template._visited)) {
      return;
    }
    src__platform__browser__testability$46template._visited = true;
    src__core__testability__testability$46template.initReflector();
  };
  dart.fn(src__platform__browser__testability$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/browser/testability.template.ddc", {
    "package:angular/src/platform/browser/testability.template.dart": src__platform__browser__testability$46template
  }, '{"version":3,"sourceRoot":"","sources":["testability.template.dart"],"names":[],"mappings":";;;;;;;;;;MAaI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAM,4DAAa;EACrB","file":"testability.template.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__testability$46template: src__platform__browser__testability$46template
  };
});

//# sourceMappingURL=testability.template.ddc.js.map
