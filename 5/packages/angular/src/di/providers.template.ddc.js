define(['dart_sdk', 'packages/angular/src/core/di/opaque_token.template', 'packages/angular/src/runtime.template'], function(dart_sdk, opaque_token, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token$46template = opaque_token.src__core__di__opaque_token$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__di__providers$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__di__providers$46template, {
    /*src__di__providers$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__providers$46template.initReflector = function() {
    if (dart.test(src__di__providers$46template._visited)) {
      return;
    }
    src__di__providers$46template._visited = true;
    src__core__di__opaque_token$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.fn(src__di__providers$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/di/providers.template.ddc", {
    "package:angular/src/di/providers.template.dart": src__di__providers$46template
  }, '{"version":3,"sourceRoot":"","sources":["providers.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,sCAAQ;YAAG;;;;;AAEb,kBAAI,sCAAQ,GAAE;AACZ;;AAEF,6CAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,qCAAa;EACrB","file":"providers.template.ddc.js"}');
  // Exports:
  return {
    src__di__providers$46template: src__di__providers$46template
  };
});

//# sourceMappingURL=providers.template.ddc.js.map
