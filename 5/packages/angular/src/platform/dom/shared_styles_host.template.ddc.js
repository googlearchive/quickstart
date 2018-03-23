define(['dart_sdk', 'packages/angular/src/core/render/api.template'], function(dart_sdk, api) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const _root = Object.create(null);
  const src__platform__dom__shared_styles_host$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__dom__shared_styles_host$46template, {
    /*src__platform__dom__shared_styles_host$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__dom__shared_styles_host$46template.initReflector = function() {
    if (dart.test(src__platform__dom__shared_styles_host$46template._visited)) {
      return;
    }
    src__platform__dom__shared_styles_host$46template._visited = true;
    src__core__render__api$46template.initReflector();
  };
  dart.fn(src__platform__dom__shared_styles_host$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/dom/shared_styles_host.template.ddc", {
    "package:angular/src/platform/dom/shared_styles_host.template.dart": src__platform__dom__shared_styles_host$46template
  }, '{"version":3,"sourceRoot":"","sources":["shared_styles_host.template.dart"],"names":[],"mappings":";;;;;;;;;;MAWI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAM,+CAAa;EACrB","file":"shared_styles_host.template.ddc.js"}');
  // Exports:
  return {
    src__platform__dom__shared_styles_host$46template: src__platform__dom__shared_styles_host$46template
  };
});

//# sourceMappingURL=shared_styles_host.template.ddc.js.map
