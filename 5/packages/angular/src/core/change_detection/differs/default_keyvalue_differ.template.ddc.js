define(['dart_sdk', 'packages/angular/src/facade/exception_handler.template'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const _root = Object.create(null);
  const src__core__change_detection__differs__default_keyvalue_differ$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__change_detection__differs__default_keyvalue_differ$46template, {
    /*src__core__change_detection__differs__default_keyvalue_differ$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__change_detection__differs__default_keyvalue_differ$46template.initReflector = function() {
    if (dart.test(src__core__change_detection__differs__default_keyvalue_differ$46template._visited)) {
      return;
    }
    src__core__change_detection__differs__default_keyvalue_differ$46template._visited = true;
    src__facade__exceptions$46template.initReflector();
  };
  dart.fn(src__core__change_detection__differs__default_keyvalue_differ$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/change_detection/differs/default_keyvalue_differ.template.ddc", {
    "package:angular/src/core/change_detection/differs/default_keyvalue_differ.template.dart": src__core__change_detection__differs__default_keyvalue_differ$46template
  }, '{"version":3,"sourceRoot":"","sources":["default_keyvalue_differ.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,iFAAQ;YAAG;;;;;AAEb,kBAAI,iFAAQ,GAAE;AACZ;;AAEF,wFAAW;AAEX,IAAM,gDAAa;EACrB","file":"default_keyvalue_differ.template.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__differs__default_keyvalue_differ$46template: src__core__change_detection__differs__default_keyvalue_differ$46template
  };
});

//# sourceMappingURL=default_keyvalue_differ.template.ddc.js.map
