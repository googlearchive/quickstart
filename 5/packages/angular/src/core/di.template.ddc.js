define(['dart_sdk', 'packages/angular/src/di/errors.template', 'packages/angular/src/di/injector/empty.template', 'packages/angular/src/di/module.template', 'packages/angular/src/core/di/decorators.template', 'packages/angular/src/core/di/opaque_token.template', 'packages/angular/src/core/di/provider.template'], function(dart_sdk, errors, empty, module, decorators, opaque_token, provider) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__errors$46template = errors.src__di__errors$46template;
  const src__di__injector__injector$46template = empty.src__di__injector__injector$46template;
  const src__di__injector__runtime$46template = empty.src__di__injector__runtime$46template;
  const src__di__module$46template = module.src__di__module$46template;
  const src__core__di__decorators$46template = decorators.src__core__di__decorators$46template;
  const src__core__di__opaque_token$46template = opaque_token.src__core__di__opaque_token$46template;
  const src__core__di__provider$46template = provider.src__core__di__provider$46template;
  const _root = Object.create(null);
  const src__core__di$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__di$46template, {
    /*src__core__di$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__di$46template.initReflector = function() {
    if (dart.test(src__core__di$46template._visited)) {
      return;
    }
    src__core__di$46template._visited = true;
    src__di__errors$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__di__injector__runtime$46template.initReflector();
    src__di__module$46template.initReflector();
    src__core__di__decorators$46template.initReflector();
    src__core__di__opaque_token$46template.initReflector();
    src__core__di__provider$46template.initReflector();
  };
  dart.fn(src__core__di$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/di.template.ddc", {
    "package:angular/src/core/di.template.dart": src__core__di$46template
  }, '{"version":3,"sourceRoot":"","sources":["di.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAeI,iCAAQ;YAAG;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAM,wCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,gDAAa;EACrB","file":"di.template.ddc.js"}');
  // Exports:
  return {
    src__core__di$46template: src__core__di$46template
  };
});

//# sourceMappingURL=di.template.ddc.js.map
