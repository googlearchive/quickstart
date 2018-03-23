define(['dart_sdk', 'packages/angular/src/core/application_ref.template', 'packages/angular/src/core/di.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/core/zone/ng_zone.template'], function(dart_sdk, application_ref, di, api, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_ref$46template = application_ref.src__core__application_ref$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__core__zone__ng_zone$46template = ng_zone.src__core__zone__ng_zone$46template;
  const _root = Object.create(null);
  const src__debug__by$46template = Object.create(_root);
  const src__debug__debug_node$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__debug__by$46template, {
    /*src__debug__by$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__debug__by$46template.initReflector = function() {
    if (dart.test(src__debug__by$46template._visited)) {
      return;
    }
    src__debug__by$46template._visited = true;
    src__debug__debug_node$46template.initReflector();
  };
  dart.fn(src__debug__by$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__debug__debug_node$46template, {
    /*src__debug__debug_node$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__debug__debug_node$46template.initReflector = function() {
    if (dart.test(src__debug__debug_node$46template._visited)) {
      return;
    }
    src__debug__debug_node$46template._visited = true;
    src__debug__by$46template.initReflector();
    src__core__application_ref$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__core__zone__ng_zone$46template.initReflector();
  };
  dart.fn(src__debug__debug_node$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/debug/by.template.ddc", {
    "package:angular/src/debug/by.template.dart": src__debug__by$46template,
    "package:angular/src/debug/debug_node.template.dart": src__debug__debug_node$46template
  }, '{"version":3,"sourceRoot":"","sources":["by.template.dart","debug_node.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAWI,kCAAQ;YAAG;;;;;AAEb,kBAAI,kCAAQ,GAAE;AACZ;;AAEF,yCAAW;AAEX,IAAM,+CAAa;EACrB;;;MCFI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,uCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,iDAAa;EACrB","file":"by.template.ddc.js"}');
  // Exports:
  return {
    src__debug__by$46template: src__debug__by$46template,
    src__debug__debug_node$46template: src__debug__debug_node$46template
  };
});

//# sourceMappingURL=by.template.ddc.js.map
