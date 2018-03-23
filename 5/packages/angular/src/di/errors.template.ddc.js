define(['dart_sdk', 'packages/angular/src/runtime.template'], function(dart_sdk, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__di__errors$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__di__errors$46template, {
    /*src__di__errors$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__errors$46template.initReflector = function() {
    if (dart.test(src__di__errors$46template._visited)) {
      return;
    }
    src__di__errors$46template._visited = true;
    src__runtime$46template.initReflector();
  };
  dart.fn(src__di__errors$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/di/errors.template.ddc", {
    "package:angular/src/di/errors.template.dart": src__di__errors$46template
  }, '{"version":3,"sourceRoot":"","sources":["errors.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,mCAAQ;YAAG;;;;;AAEb,kBAAI,mCAAQ,GAAE;AACZ;;AAEF,0CAAW;AAEX,IAAM,qCAAa;EACrB","file":"errors.template.ddc.js"}');
  // Exports:
  return {
    src__di__errors$46template: src__di__errors$46template
  };
});

//# sourceMappingURL=errors.template.ddc.js.map
