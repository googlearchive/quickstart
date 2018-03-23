define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/experimental.template', 'packages/angular/src/core/application_ref.template', 'packages/angular/src/core/change_detection/constants.template', 'packages/angular/src/core/linker/app_view.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/platform/dom/shared_styles_host.template'], function(dart_sdk, angular, experimental, application_ref, constants, app_view, api, shared_styles_host) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const experimental$46template = experimental.experimental$46template;
  const src__core__application_ref$46template = application_ref.src__core__application_ref$46template;
  const src__core__change_detection__constants$46template = constants.src__core__change_detection__constants$46template;
  const src__core__linker__view_ref$46template = app_view.src__core__linker__view_ref$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__platform__dom__shared_styles_host$46template = shared_styles_host.src__platform__dom__shared_styles_host$46template;
  const _root = Object.create(null);
  const src__bootstrap$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__bootstrap$46template, {
    /*src__bootstrap$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__bootstrap$46template.initReflector = function() {
    if (dart.test(src__bootstrap$46template._visited)) {
      return;
    }
    src__bootstrap$46template._visited = true;
    angular$46template.initReflector();
    experimental$46template.initReflector();
    src__core__application_ref$46template.initReflector();
    src__core__change_detection__constants$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__platform__dom__shared_styles_host$46template.initReflector();
  };
  dart.fn(src__bootstrap$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_test/src/bootstrap.template.ddc", {
    "package:angular_test/src/bootstrap.template.dart": src__bootstrap$46template
  }, '{"version":3,"sourceRoot":"","sources":["bootstrap.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAwBI,kCAAQ;YAAG;;;;;AAEb,kBAAI,kCAAQ,GAAE;AACZ;;AAEF,yCAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,+DAAa;EACrB","file":"bootstrap.template.ddc.js"}');
  // Exports:
  return {
    src__bootstrap$46template: src__bootstrap$46template
  };
});

//# sourceMappingURL=bootstrap.template.ddc.js.map
