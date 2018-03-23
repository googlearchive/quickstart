define(['dart_sdk', 'packages/angular/src/core/application_tokens.template', 'packages/angular/src/core/change_detection.template', 'packages/angular/src/core/di.template', 'packages/angular/src/core/metadata.template', 'packages/angular/src/core/render.template', 'packages/angular/src/core/zone.template', 'packages/angular/src/facade/facade.template'], function(dart_sdk, application_tokens, change_detection, di, metadata, render, zone, facade) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_tokens$46template = application_tokens.src__core__application_tokens$46template;
  const src__core__change_detection$46template = change_detection.src__core__change_detection$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__metadata$46template = metadata.src__core__metadata$46template;
  const src__core__render$46template = render.src__core__render$46template;
  const src__core__zone$46template = zone.src__core__zone$46template;
  const src__facade__facade$46template = facade.src__facade__facade$46template;
  const _root = Object.create(null);
  const core$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(core$46template, {
    /*core$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  core$46template.initReflector = function() {
    if (dart.test(core$46template._visited)) {
      return;
    }
    core$46template._visited = true;
    src__core__application_tokens$46template.initReflector();
    src__core__change_detection$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__metadata$46template.initReflector();
    src__core__render$46template.initReflector();
    src__core__zone$46template.initReflector();
    src__facade__facade$46template.initReflector();
  };
  dart.fn(core$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/core.template.ddc", {
    "package:angular/core.template.dart": core$46template
  }, '{"version":3,"sourceRoot":"","sources":["core.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAeI,wBAAQ;YAAG;;;;;AAEb,kBAAI,wBAAQ,GAAE;AACZ;;AAEF,+BAAW;AAEX,IAAM,sDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,4CAAa;EACrB","file":"core.template.ddc.js"}');
  // Exports:
  return {
    core$46template: core$46template
  };
});

//# sourceMappingURL=core.template.ddc.js.map
