define(['dart_sdk', 'packages/angular/src/facade/exception_handler.template'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const _root = Object.create(null);
  const src__core__linker__exceptions$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__linker__exceptions$46template, {
    /*src__core__linker__exceptions$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__exceptions$46template.initReflector = function() {
    if (dart.test(src__core__linker__exceptions$46template._visited)) {
      return;
    }
    src__core__linker__exceptions$46template._visited = true;
    src__facade__exceptions$46template.initReflector();
  };
  dart.fn(src__core__linker__exceptions$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/linker/exceptions.template.ddc", {
    "package:angular/src/core/linker/exceptions.template.dart": src__core__linker__exceptions$46template
  }, '{"version":3,"sourceRoot":"","sources":["exceptions.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,gDAAa;EACrB","file":"exceptions.template.ddc.js"}');
  // Exports:
  return {
    src__core__linker__exceptions$46template: src__core__linker__exceptions$46template
  };
});

//# sourceMappingURL=exceptions.template.ddc.js.map
