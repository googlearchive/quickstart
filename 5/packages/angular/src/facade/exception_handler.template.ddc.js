define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__facade__exception_handler$46template = Object.create(_root);
  const src__facade__exceptions$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__facade__exception_handler$46template, {
    /*src__facade__exception_handler$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__facade__exception_handler$46template.initReflector = function() {
    if (dart.test(src__facade__exception_handler$46template._visited)) {
      return;
    }
    src__facade__exception_handler$46template._visited = true;
    src__facade__exceptions$46template.initReflector();
  };
  dart.fn(src__facade__exception_handler$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__facade__exceptions$46template, {
    /*src__facade__exceptions$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__facade__exceptions$46template.initReflector = function() {
    if (dart.test(src__facade__exceptions$46template._visited)) {
      return;
    }
    src__facade__exceptions$46template._visited = true;
    src__facade__exception_handler$46template.initReflector();
    src__facade__exception_handler$46template.initReflector();
  };
  dart.fn(src__facade__exceptions$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/facade/exception_handler.template.ddc", {
    "package:angular/src/facade/exception_handler.template.dart": src__facade__exception_handler$46template,
    "package:angular/src/facade/exceptions.template.dart": src__facade__exceptions$46template
  }, '{"version":3,"sourceRoot":"","sources":["exception_handler.template.dart","exceptions.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,gDAAa;EACrB;;;MCRI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,uDAAa;AACnB,IAAM,uDAAa;EACrB","file":"exception_handler.template.ddc.js"}');
  // Exports:
  return {
    src__facade__exception_handler$46template: src__facade__exception_handler$46template,
    src__facade__exceptions$46template: src__facade__exceptions$46template
  };
});

//# sourceMappingURL=exception_handler.template.ddc.js.map
