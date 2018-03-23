define(['dart_sdk', 'packages/angular_test/src/frontend/bed.template', 'packages/angular_test/src/frontend/stabilizer.template'], function(dart_sdk, bed, stabilizer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__frontend__bed$46template = bed.src__frontend__bed$46template;
  const src__frontend__fixture$46template = bed.src__frontend__fixture$46template;
  const src__frontend__stabilizer$46template = stabilizer.src__frontend__stabilizer$46template;
  const _root = Object.create(null);
  const src__frontend$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__frontend$46template, {
    /*src__frontend$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__frontend$46template.initReflector = function() {
    if (dart.test(src__frontend$46template._visited)) {
      return;
    }
    src__frontend$46template._visited = true;
    src__frontend__bed$46template.initReflector();
    src__frontend__fixture$46template.initReflector();
    src__frontend__stabilizer$46template.initReflector();
  };
  dart.fn(src__frontend$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_test/src/frontend.template.ddc", {
    "package:angular_test/src/frontend.template.dart": src__frontend$46template
  }, '{"version":3,"sourceRoot":"","sources":["frontend.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAWI,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAM,2CAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,kDAAa;EACrB","file":"frontend.template.ddc.js"}');
  // Exports:
  return {
    src__frontend$46template: src__frontend$46template
  };
});

//# sourceMappingURL=frontend.template.ddc.js.map
