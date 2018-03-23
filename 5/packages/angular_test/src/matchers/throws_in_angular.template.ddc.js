define(['dart_sdk', 'packages/angular/src/facade/exception_handler.template'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const _root = Object.create(null);
  const src__matchers__throws_in_angular$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__matchers__throws_in_angular$46template, {
    /*src__matchers__throws_in_angular$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__matchers__throws_in_angular$46template.initReflector = function() {
    if (dart.test(src__matchers__throws_in_angular$46template._visited)) {
      return;
    }
    src__matchers__throws_in_angular$46template._visited = true;
    src__facade__exceptions$46template.initReflector();
  };
  dart.fn(src__matchers__throws_in_angular$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_test/src/matchers/throws_in_angular.template.ddc", {
    "package:angular_test/src/matchers/throws_in_angular.template.dart": src__matchers__throws_in_angular$46template
  }, '{"version":3,"sourceRoot":"","sources":["throws_in_angular.template.dart"],"names":[],"mappings":";;;;;;;;;;MAYI,oDAAQ;YAAG;;;;;AAEb,kBAAI,oDAAQ,GAAE;AACZ;;AAEF,2DAAW;AAEX,IAAM,gDAAa;EACrB","file":"throws_in_angular.template.ddc.js"}');
  // Exports:
  return {
    src__matchers__throws_in_angular$46template: src__matchers__throws_in_angular$46template
  };
});

//# sourceMappingURL=throws_in_angular.template.ddc.js.map
