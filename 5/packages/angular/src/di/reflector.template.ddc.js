define(['dart_sdk', 'packages/angular/src/core/di/decorators.template', 'packages/angular/src/core/di/opaque_token.template', 'packages/angular/src/runtime.template'], function(dart_sdk, decorators, opaque_token, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__decorators$46template = decorators.src__core__di__decorators$46template;
  const src__core__di__opaque_token$46template = opaque_token.src__core__di__opaque_token$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__di__reflector$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__di__reflector$46template, {
    /*src__di__reflector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__reflector$46template.initReflector = function() {
    if (dart.test(src__di__reflector$46template._visited)) {
      return;
    }
    src__di__reflector$46template._visited = true;
    src__core__di__decorators$46template.initReflector();
    src__core__di__opaque_token$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.fn(src__di__reflector$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/di/reflector.template.ddc", {
    "package:angular/src/di/reflector.template.dart": src__di__reflector$46template
  }, '{"version":3,"sourceRoot":"","sources":["reflector.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAYI,sCAAQ;YAAG;;;;;AAEb,kBAAI,sCAAQ,GAAE;AACZ;;AAEF,6CAAW;AAEX,IAAM,kDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,qCAAa;EACrB","file":"reflector.template.ddc.js"}');
  // Exports:
  return {
    src__di__reflector$46template: src__di__reflector$46template
  };
});

//# sourceMappingURL=reflector.template.ddc.js.map
