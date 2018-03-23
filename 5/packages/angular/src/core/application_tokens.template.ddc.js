define(['dart_sdk', 'packages/angular/src/core/di.template'], function(dart_sdk, di) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di$46template = di.src__core__di$46template;
  const _root = Object.create(null);
  const src__core__application_tokens$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__application_tokens$46template, {
    /*src__core__application_tokens$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__application_tokens$46template.initReflector = function() {
    if (dart.test(src__core__application_tokens$46template._visited)) {
      return;
    }
    src__core__application_tokens$46template._visited = true;
    src__core__di$46template.initReflector();
  };
  dart.fn(src__core__application_tokens$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/application_tokens.template.ddc", {
    "package:angular/src/core/application_tokens.template.dart": src__core__application_tokens$46template
  }, '{"version":3,"sourceRoot":"","sources":["application_tokens.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,sCAAa;EACrB","file":"application_tokens.template.ddc.js"}');
  // Exports:
  return {
    src__core__application_tokens$46template: src__core__application_tokens$46template
  };
});

//# sourceMappingURL=application_tokens.template.ddc.js.map
