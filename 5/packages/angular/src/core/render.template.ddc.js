define(['dart_sdk', 'packages/angular/src/core/render/api.template'], function(dart_sdk, api) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const _root = Object.create(null);
  const src__core__render$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__render$46template, {
    /*src__core__render$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__render$46template.initReflector = function() {
    if (dart.test(src__core__render$46template._visited)) {
      return;
    }
    src__core__render$46template._visited = true;
    src__core__render__api$46template.initReflector();
  };
  dart.fn(src__core__render$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/render.template.ddc", {
    "package:angular/src/core/render.template.dart": src__core__render$46template
  }, '{"version":3,"sourceRoot":"","sources":["render.template.dart"],"names":[],"mappings":";;;;;;;;;;MASI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,+CAAa;EACrB","file":"render.template.ddc.js"}');
  // Exports:
  return {
    src__core__render$46template: src__core__render$46template
  };
});

//# sourceMappingURL=render.template.ddc.js.map
