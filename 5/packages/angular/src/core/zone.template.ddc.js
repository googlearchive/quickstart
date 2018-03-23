define(['dart_sdk', 'packages/angular/src/core/zone/ng_zone.template'], function(dart_sdk, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__zone__ng_zone$46template = ng_zone.src__core__zone__ng_zone$46template;
  const _root = Object.create(null);
  const src__core__zone$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__zone$46template, {
    /*src__core__zone$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__zone$46template.initReflector = function() {
    if (dart.test(src__core__zone$46template._visited)) {
      return;
    }
    src__core__zone$46template._visited = true;
    src__core__zone__ng_zone$46template.initReflector();
  };
  dart.fn(src__core__zone$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/zone.template.ddc", {
    "package:angular/src/core/zone.template.dart": src__core__zone$46template
  }, '{"version":3,"sourceRoot":"","sources":["zone.template.dart"],"names":[],"mappings":";;;;;;;;;;MASI,mCAAQ;YAAG;;;;;AAEb,kBAAI,mCAAQ,GAAE;AACZ;;AAEF,0CAAW;AAEX,IAAM,iDAAa;EACrB","file":"zone.template.ddc.js"}');
  // Exports:
  return {
    src__core__zone$46template: src__core__zone$46template
  };
});

//# sourceMappingURL=zone.template.ddc.js.map
