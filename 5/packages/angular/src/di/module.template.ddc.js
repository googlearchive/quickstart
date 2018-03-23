define(['dart_sdk', 'packages/angular/src/di/providers.template'], function(dart_sdk, providers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__providers$46template = providers.src__di__providers$46template;
  const _root = Object.create(null);
  const src__di__module$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__di__module$46template, {
    /*src__di__module$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__module$46template.initReflector = function() {
    if (dart.test(src__di__module$46template._visited)) {
      return;
    }
    src__di__module$46template._visited = true;
    src__di__providers$46template.initReflector();
  };
  dart.fn(src__di__module$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/di/module.template.ddc", {
    "package:angular/src/di/module.template.dart": src__di__module$46template
  }, '{"version":3,"sourceRoot":"","sources":["module.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,mCAAQ;YAAG;;;;;AAEb,kBAAI,mCAAQ,GAAE;AACZ;;AAEF,0CAAW;AAEX,IAAM,2CAAa;EACrB","file":"module.template.ddc.js"}');
  // Exports:
  return {
    src__di__module$46template: src__di__module$46template
  };
});

//# sourceMappingURL=module.template.ddc.js.map
