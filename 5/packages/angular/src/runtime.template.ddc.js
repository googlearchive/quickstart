define(['dart_sdk', 'packages/angular/src/runtime/optimizations.template'], function(dart_sdk, optimizations) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations$46template = optimizations.src__runtime__optimizations$46template;
  const _root = Object.create(null);
  const src__runtime$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__runtime$46template, {
    /*src__runtime$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__runtime$46template.initReflector = function() {
    if (dart.test(src__runtime$46template._visited)) {
      return;
    }
    src__runtime$46template._visited = true;
    src__runtime__optimizations$46template.initReflector();
  };
  dart.fn(src__runtime$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/runtime.template.ddc", {
    "package:angular/src/runtime.template.dart": src__runtime$46template
  }, '{"version":3,"sourceRoot":"","sources":["runtime.template.dart"],"names":[],"mappings":";;;;;;;;;;MASI,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAM,oDAAa;EACrB","file":"runtime.template.ddc.js"}');
  // Exports:
  return {
    src__runtime$46template: src__runtime$46template
  };
});

//# sourceMappingURL=runtime.template.ddc.js.map
