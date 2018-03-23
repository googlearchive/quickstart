define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/platform/browser/exceptions', 'packages/angular/core.template'], function(dart_sdk, reflector, exceptions, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__platform__browser__exceptions = exceptions.src__platform__browser__exceptions;
  const core$46template = core.core$46template;
  const _root = Object.create(null);
  const src__platform__browser__exceptions$46template = Object.create(_root);
  let VoidToBrowserExceptionHandler = () => (VoidToBrowserExceptionHandler = dart.constFn(dart.fnType(src__platform__browser__exceptions.BrowserExceptionHandler, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__browser__exceptions$46template, {
    /*src__platform__browser__exceptions$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__browser__exceptions$46template.initReflector = function() {
    if (dart.test(src__platform__browser__exceptions$46template._visited)) {
      return;
    }
    src__platform__browser__exceptions$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__platform__browser__exceptions.BrowserExceptionHandler), dart.fn(() => new src__platform__browser__exceptions.BrowserExceptionHandler.new(), VoidToBrowserExceptionHandler()));
    core$46template.initReflector();
  };
  dart.fn(src__platform__browser__exceptions$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/browser/exceptions.template.ddc", {
    "package:angular/src/platform/browser/exceptions.template.dart": src__platform__browser__exceptions$46template
  }, '{"version":3,"sourceRoot":"","sources":["exceptions.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAYI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAO,kCAAe,CAAC,yEAAuB,EAAE,cAAM,IAAI,8DAAuB;AACjF,IAAM,6BAAa;EACrB","file":"exceptions.template.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__exceptions$46template: src__platform__browser__exceptions$46template
  };
});

//# sourceMappingURL=exceptions.template.ddc.js.map
