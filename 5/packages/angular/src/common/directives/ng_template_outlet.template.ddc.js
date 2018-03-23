define(['dart_sdk', 'packages/angular/core.template', 'packages/angular/src/core/linker.template'], function(dart_sdk, core, linker) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$46template = core.core$46template;
  const src__core__linker$46template = linker.src__core__linker$46template;
  const _root = Object.create(null);
  const src__common__directives__ng_template_outlet$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__directives__ng_template_outlet$46template, {
    /*src__common__directives__ng_template_outlet$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__directives__ng_template_outlet$46template.initReflector = function() {
    if (dart.test(src__common__directives__ng_template_outlet$46template._visited)) {
      return;
    }
    src__common__directives__ng_template_outlet$46template._visited = true;
    core$46template.initReflector();
    src__core__linker$46template.initReflector();
  };
  dart.fn(src__common__directives__ng_template_outlet$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/directives/ng_template_outlet.template.ddc", {
    "package:angular/src/common/directives/ng_template_outlet.template.dart": src__common__directives__ng_template_outlet$46template
  }, '{"version":3,"sourceRoot":"","sources":["ng_template_outlet.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAYI,+DAAQ;YAAG;;;;;AAEb,kBAAI,+DAAQ,GAAE;AACZ;;AAEF,sEAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,0CAAa;EACrB","file":"ng_template_outlet.template.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_template_outlet$46template: src__common__directives__ng_template_outlet$46template
  };
});

//# sourceMappingURL=ng_template_outlet.template.ddc.js.map
