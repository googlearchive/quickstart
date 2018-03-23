define(['dart_sdk', 'packages/angular/di.template'], function(dart_sdk, di) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const di$46template = di.di$46template;
  const _root = Object.create(null);
  const src__common__pipes__json_pipe$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__pipes__json_pipe$46template, {
    /*src__common__pipes__json_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__pipes__json_pipe$46template.initReflector = function() {
    if (dart.test(src__common__pipes__json_pipe$46template._visited)) {
      return;
    }
    src__common__pipes__json_pipe$46template._visited = true;
    di$46template.initReflector();
  };
  dart.fn(src__common__pipes__json_pipe$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/pipes/json_pipe.template.ddc", {
    "package:angular/src/common/pipes/json_pipe.template.dart": src__common__pipes__json_pipe$46template
  }, '{"version":3,"sourceRoot":"","sources":["json_pipe.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,iDAAQ;YAAG;;;;;AAEb,kBAAI,iDAAQ,GAAE;AACZ;;AAEF,wDAAW;AAEX,IAAM,2BAAa;EACrB","file":"json_pipe.template.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__json_pipe$46template: src__common__pipes__json_pipe$46template
  };
});

//# sourceMappingURL=json_pipe.template.ddc.js.map
