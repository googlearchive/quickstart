define(['dart_sdk', 'packages/angular/src/core/metadata.template'], function(dart_sdk, metadata) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata$46template = metadata.src__core__metadata$46template;
  const _root = Object.create(null);
  const src__core__linker__query_list$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__linker__query_list$46template, {
    /*src__core__linker__query_list$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__query_list$46template.initReflector = function() {
    if (dart.test(src__core__linker__query_list$46template._visited)) {
      return;
    }
    src__core__linker__query_list$46template._visited = true;
    src__core__metadata$46template.initReflector();
  };
  dart.fn(src__core__linker__query_list$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/linker/query_list.template.ddc", {
    "package:angular/src/core/linker/query_list.template.dart": src__core__linker__query_list$46template
  }, '{"version":3,"sourceRoot":"","sources":["query_list.template.dart"],"names":[],"mappings":";;;;;;;;;;MAYI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,4CAAa;EACrB","file":"query_list.template.ddc.js"}');
  // Exports:
  return {
    src__core__linker__query_list$46template: src__core__linker__query_list$46template
  };
});

//# sourceMappingURL=query_list.template.ddc.js.map
