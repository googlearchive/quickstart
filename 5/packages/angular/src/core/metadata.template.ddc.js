define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/di/decorators.template', 'packages/angular/src/core/metadata/lifecycle_hooks.template', 'packages/angular/src/core/metadata/view.template'], function(dart_sdk, change_detection, decorators, lifecycle_hooks, view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__change_detection$46template = change_detection.src__core__change_detection__change_detection$46template;
  const src__core__di__decorators$46template = decorators.src__core__di__decorators$46template;
  const src__core__metadata__lifecycle_hooks$46template = lifecycle_hooks.src__core__metadata__lifecycle_hooks$46template;
  const src__core__metadata__view$46template = view.src__core__metadata__view$46template;
  const _root = Object.create(null);
  const src__core__metadata__visibility$46template = Object.create(_root);
  const src__core__metadata$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__metadata__visibility$46template, {
    /*src__core__metadata__visibility$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__metadata__visibility$46template.initReflector = function() {
    if (dart.test(src__core__metadata__visibility$46template._visited)) {
      return;
    }
    src__core__metadata__visibility$46template._visited = true;
    src__core__metadata$46template.initReflector();
  };
  dart.fn(src__core__metadata__visibility$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__core__metadata$46template, {
    /*src__core__metadata$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__metadata$46template.initReflector = function() {
    if (dart.test(src__core__metadata$46template._visited)) {
      return;
    }
    src__core__metadata$46template._visited = true;
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__di__decorators$46template.initReflector();
    src__core__metadata__lifecycle_hooks$46template.initReflector();
    src__core__metadata__view$46template.initReflector();
    src__core__metadata__view$46template.initReflector();
    src__core__metadata__visibility$46template.initReflector();
    src__core__metadata__visibility$46template.initReflector();
  };
  dart.fn(src__core__metadata$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/metadata.template.ddc", {
    "package:angular/src/core/metadata/visibility.template.dart": src__core__metadata__visibility$46template,
    "package:angular/src/core/metadata.template.dart": src__core__metadata$46template
  }, '{"version":3,"sourceRoot":"","sources":["metadata/visibility.template.dart","metadata.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAUI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,4CAAa;EACrB;;;MCCI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,wDAAa;EACrB","file":"metadata.template.ddc.js"}');
  // Exports:
  return {
    src__core__metadata__visibility$46template: src__core__metadata__visibility$46template,
    src__core__metadata$46template: src__core__metadata$46template
  };
});

//# sourceMappingURL=metadata.template.ddc.js.map
