define(['dart_sdk', 'packages/angular_test/src/frontend.template', 'packages/angular_test/src/matchers.template'], function(dart_sdk, frontend, matchers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__frontend$46template = frontend.src__frontend$46template;
  const src__matchers$46template = matchers.src__matchers$46template;
  const _root = Object.create(null);
  const angular_test$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(angular_test$46template, {
    /*angular_test$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  angular_test$46template.initReflector = function() {
    if (dart.test(angular_test$46template._visited)) {
      return;
    }
    angular_test$46template._visited = true;
    src__frontend$46template.initReflector();
    src__matchers$46template.initReflector();
  };
  dart.fn(angular_test$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_test/angular_test.template.ddc", {
    "package:angular_test/angular_test.template.dart": angular_test$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_test.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAUI,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAM,sCAAa;AACnB,IAAM,sCAAa;EACrB","file":"angular_test.template.ddc.js"}');
  // Exports:
  return {
    angular_test$46template: angular_test$46template
  };
});

//# sourceMappingURL=angular_test.template.ddc.js.map
