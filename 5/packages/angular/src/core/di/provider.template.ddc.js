define(['dart_sdk', 'packages/angular/src/di/providers.template'], function(dart_sdk, providers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__providers$46template = providers.src__di__providers$46template;
  const _root = Object.create(null);
  const src__core__di__provider$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__di__provider$46template, {
    /*src__core__di__provider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__di__provider$46template.initReflector = function() {
    if (dart.test(src__core__di__provider$46template._visited)) {
      return;
    }
    src__core__di__provider$46template._visited = true;
    src__di__providers$46template.initReflector();
  };
  dart.fn(src__core__di__provider$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/di/provider.template.ddc", {
    "package:angular/src/core/di/provider.template.dart": src__core__di__provider$46template
  }, '{"version":3,"sourceRoot":"","sources":["provider.template.dart"],"names":[],"mappings":";;;;;;;;;;MASI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAM,2CAAa;EACrB","file":"provider.template.ddc.js"}');
  // Exports:
  return {
    src__core__di__provider$46template: src__core__di__provider$46template
  };
});

//# sourceMappingURL=provider.template.ddc.js.map
