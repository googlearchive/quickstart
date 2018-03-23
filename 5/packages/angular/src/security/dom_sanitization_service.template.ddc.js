define(['dart_sdk', 'packages/angular/src/core/security.template'], function(dart_sdk, security) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__security$46template = security.src__core__security$46template;
  const _root = Object.create(null);
  const src__security__dom_sanitization_service$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__security__dom_sanitization_service$46template, {
    /*src__security__dom_sanitization_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__security__dom_sanitization_service$46template.initReflector = function() {
    if (dart.test(src__security__dom_sanitization_service$46template._visited)) {
      return;
    }
    src__security__dom_sanitization_service$46template._visited = true;
    src__core__security$46template.initReflector();
    src__core__security$46template.initReflector();
  };
  dart.fn(src__security__dom_sanitization_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/security/dom_sanitization_service.template.ddc", {
    "package:angular/src/security/dom_sanitization_service.template.dart": src__security__dom_sanitization_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["dom_sanitization_service.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,2DAAQ;YAAG;;;;;AAEb,kBAAI,2DAAQ,GAAE;AACZ;;AAEF,kEAAW;AAEX,IAAM,4CAAa;AACnB,IAAM,4CAAa;EACrB","file":"dom_sanitization_service.template.ddc.js"}');
  // Exports:
  return {
    src__security__dom_sanitization_service$46template: src__security__dom_sanitization_service$46template
  };
});

//# sourceMappingURL=dom_sanitization_service.template.ddc.js.map
