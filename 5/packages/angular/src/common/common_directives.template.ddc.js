define(['dart_sdk', 'packages/angular/src/common/directives.template'], function(dart_sdk, directives) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__directives$46template = directives.src__common__directives$46template;
  const _root = Object.create(null);
  const src__common__common_directives$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__common_directives$46template, {
    /*src__common__common_directives$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__common_directives$46template.initReflector = function() {
    if (dart.test(src__common__common_directives$46template._visited)) {
      return;
    }
    src__common__common_directives$46template._visited = true;
    src__common__directives$46template.initReflector();
  };
  dart.fn(src__common__common_directives$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/common_directives.template.ddc", {
    "package:angular/src/common/common_directives.template.dart": src__common__common_directives$46template
  }, '{"version":3,"sourceRoot":"","sources":["common_directives.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,gDAAa;EACrB","file":"common_directives.template.ddc.js"}');
  // Exports:
  return {
    src__common__common_directives$46template: src__common__common_directives$46template
  };
});

//# sourceMappingURL=common_directives.template.ddc.js.map
