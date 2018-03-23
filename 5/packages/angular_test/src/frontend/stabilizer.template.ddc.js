define(['dart_sdk', 'packages/angular_test/src/errors.template', 'packages/angular/di.template'], function(dart_sdk, errors, di) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__errors$46template = errors.src__errors$46template;
  const di$46template = di.di$46template;
  const _root = Object.create(null);
  const src__frontend__stabilizer$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__frontend__stabilizer$46template, {
    /*src__frontend__stabilizer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__frontend__stabilizer$46template.initReflector = function() {
    if (dart.test(src__frontend__stabilizer$46template._visited)) {
      return;
    }
    src__frontend__stabilizer$46template._visited = true;
    src__errors$46template.initReflector();
    di$46template.initReflector();
  };
  dart.fn(src__frontend__stabilizer$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_test/src/frontend/stabilizer.template.ddc", {
    "package:angular_test/src/frontend/stabilizer.template.dart": src__frontend__stabilizer$46template
  }, '{"version":3,"sourceRoot":"","sources":["stabilizer.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAM,oCAAa;AACnB,IAAM,2BAAa;EACrB","file":"stabilizer.template.ddc.js"}');
  // Exports:
  return {
    src__frontend__stabilizer$46template: src__frontend__stabilizer$46template
  };
});

//# sourceMappingURL=stabilizer.template.ddc.js.map
