define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform.template', 'packages/angular/src/core/di.template', 'packages/angular/src/core/metadata.template', 'packages/angular/src/core/zone/ng_zone.template', 'packages/angular/src/facade/facade.template'], function(dart_sdk, pipe_transform, di, metadata, ng_zone, facade) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__pipe_transform$46template = pipe_transform.src__core__change_detection__pipe_transform$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__metadata$46template = metadata.src__core__metadata$46template;
  const src__core__zone__ng_zone$46template = ng_zone.src__core__zone__ng_zone$46template;
  const src__facade__facade$46template = facade.src__facade__facade$46template;
  const _root = Object.create(null);
  const di$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(di$46template, {
    /*di$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  di$46template.initReflector = function() {
    if (dart.test(di$46template._visited)) {
      return;
    }
    di$46template._visited = true;
    src__core__change_detection__pipe_transform$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__metadata$46template.initReflector();
    src__core__metadata$46template.initReflector();
    src__core__zone__ng_zone$46template.initReflector();
    src__facade__facade$46template.initReflector();
  };
  dart.fn(di$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/di.template.ddc", {
    "package:angular/di.template.dart": di$46template
  }, '{"version":3,"sourceRoot":"","sources":["di.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAcI,sBAAQ;YAAG;;;;;AAEb,kBAAI,sBAAQ,GAAE;AACZ;;AAEF,6BAAW;AAEX,IAAM,oEAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,4CAAa;EACrB","file":"di.template.ddc.js"}');
  // Exports:
  return {
    di$46template: di$46template
  };
});

//# sourceMappingURL=di.template.ddc.js.map
