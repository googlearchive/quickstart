define(['dart_sdk', 'packages/angular/src/facade/exception_handler.template'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exception_handler$46template = exception_handler.src__facade__exception_handler$46template;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const _root = Object.create(null);
  const src__facade__facade$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__facade__facade$46template, {
    /*src__facade__facade$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__facade__facade$46template.initReflector = function() {
    if (dart.test(src__facade__facade$46template._visited)) {
      return;
    }
    src__facade__facade$46template._visited = true;
    src__facade__exception_handler$46template.initReflector();
    src__facade__exceptions$46template.initReflector();
  };
  dart.fn(src__facade__facade$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/facade/facade.template.ddc", {
    "package:angular/src/facade/facade.template.dart": src__facade__facade$46template
  }, '{"version":3,"sourceRoot":"","sources":["facade.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAUI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,uDAAa;AACnB,IAAM,gDAAa;EACrB","file":"facade.template.ddc.js"}');
  // Exports:
  return {
    src__facade__facade$46template: src__facade__facade$46template
  };
});

//# sourceMappingURL=facade.template.ddc.js.map
