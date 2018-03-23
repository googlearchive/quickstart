define(['dart_sdk', 'packages/angular/core.template', 'packages/angular/src/core/di/decorators.template', 'packages/angular/src/core/linker.template'], function(dart_sdk, core, decorators, linker) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$46template = core.core$46template;
  const src__core__di__decorators$46template = decorators.src__core__di__decorators$46template;
  const src__core__linker$46template = linker.src__core__linker$46template;
  const _root = Object.create(null);
  const src__common__directives__ng_switch$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__directives__ng_switch$46template, {
    /*src__common__directives__ng_switch$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__directives__ng_switch$46template.initReflector = function() {
    if (dart.test(src__common__directives__ng_switch$46template._visited)) {
      return;
    }
    src__common__directives__ng_switch$46template._visited = true;
    core$46template.initReflector();
    src__core__di__decorators$46template.initReflector();
    src__core__linker$46template.initReflector();
  };
  dart.fn(src__common__directives__ng_switch$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/directives/ng_switch.template.ddc", {
    "package:angular/src/common/directives/ng_switch.template.dart": src__common__directives__ng_switch$46template
  }, '{"version":3,"sourceRoot":"","sources":["ng_switch.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,0CAAa;EACrB","file":"ng_switch.template.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_switch$46template: src__common__directives__ng_switch$46template
  };
});

//# sourceMappingURL=ng_switch.template.ddc.js.map
