define(['dart_sdk', 'packages/angular/src/runtime.template'], function(dart_sdk, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__core__di__opaque_token$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__di__opaque_token$46template, {
    /*src__core__di__opaque_token$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__di__opaque_token$46template.initReflector = function() {
    if (dart.test(src__core__di__opaque_token$46template._visited)) {
      return;
    }
    src__core__di__opaque_token$46template._visited = true;
    src__runtime$46template.initReflector();
  };
  dart.fn(src__core__di__opaque_token$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/di/opaque_token.template.ddc", {
    "package:angular/src/core/di/opaque_token.template.dart": src__core__di__opaque_token$46template
  }, '{"version":3,"sourceRoot":"","sources":["opaque_token.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,qCAAa;EACrB","file":"opaque_token.template.ddc.js"}');
  // Exports:
  return {
    src__core__di__opaque_token$46template: src__core__di__opaque_token$46template
  };
});

//# sourceMappingURL=opaque_token.template.ddc.js.map
