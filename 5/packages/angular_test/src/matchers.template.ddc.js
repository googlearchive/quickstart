define(['dart_sdk', 'packages/angular_test/src/matchers/throws_in_angular.template'], function(dart_sdk, throws_in_angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__matchers__throws_in_angular$46template = throws_in_angular.src__matchers__throws_in_angular$46template;
  const _root = Object.create(null);
  const src__matchers$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__matchers$46template, {
    /*src__matchers$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__matchers$46template.initReflector = function() {
    if (dart.test(src__matchers$46template._visited)) {
      return;
    }
    src__matchers$46template._visited = true;
    src__matchers__throws_in_angular$46template.initReflector();
  };
  dart.fn(src__matchers$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_test/src/matchers.template.ddc", {
    "package:angular_test/src/matchers.template.dart": src__matchers$46template
  }, '{"version":3,"sourceRoot":"","sources":["matchers.template.dart"],"names":[],"mappings":";;;;;;;;;;MASI,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAM,yDAAa;EACrB","file":"matchers.template.ddc.js"}');
  // Exports:
  return {
    src__matchers$46template: src__matchers$46template
  };
});

//# sourceMappingURL=matchers.template.ddc.js.map
