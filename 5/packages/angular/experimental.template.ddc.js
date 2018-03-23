define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/runtime.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/application_ref.template', 'packages/angular/src/core/linker.template', 'packages/angular/src/core/linker/app_view.template', 'packages/angular/src/core/linker/app_view_utils.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/di/injector/empty.template', 'packages/angular/src/di/reflector.template', 'packages/angular/src/platform/bootstrap.template', 'packages/angular/src/platform/dom/shared_styles_host.template'], function(dart_sdk, angular, runtime, modules, application_ref, linker, app_view, app_view_utils, api, empty, reflector, bootstrap, shared_styles_host) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__bootstrap__modules$46template = modules.src__bootstrap__modules$46template;
  const src__core__application_ref$46template = application_ref.src__core__application_ref$46template;
  const src__core__linker$46template = linker.src__core__linker$46template;
  const src__core__linker__app_view$46template = app_view.src__core__linker__app_view$46template;
  const src__core__linker__app_view_utils$46template = app_view_utils.src__core__linker__app_view_utils$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__di__injector__injector$46template = empty.src__di__injector__injector$46template;
  const src__di__reflector$46template = reflector.src__di__reflector$46template;
  const src__platform__bootstrap$46template = bootstrap.src__platform__bootstrap$46template;
  const src__platform__dom__shared_styles_host$46template = shared_styles_host.src__platform__dom__shared_styles_host$46template;
  const _root = Object.create(null);
  const experimental$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(experimental$46template, {
    /*experimental$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  experimental$46template.initReflector = function() {
    if (dart.test(experimental$46template._visited)) {
      return;
    }
    experimental$46template._visited = true;
    angular$46template.initReflector();
    src__runtime$46template.initReflector();
    src__bootstrap__modules$46template.initReflector();
    src__bootstrap__modules$46template.initReflector();
    src__core__application_ref$46template.initReflector();
    src__core__linker$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__di__reflector$46template.initReflector();
    src__platform__bootstrap$46template.initReflector();
    src__platform__dom__shared_styles_host$46template.initReflector();
  };
  dart.fn(experimental$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/experimental.template.ddc", {
    "package:angular/experimental.template.dart": experimental$46template
  }, '{"version":3,"sourceRoot":"","sources":["experimental.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAoCI,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,oDAAa;AACnB,IAAO,2CAAa;AACpB,IAAO,iDAAa;AACpB,IAAO,+DAAa;EACtB","file":"experimental.template.ddc.js"}');
  // Exports:
  return {
    experimental$46template: experimental$46template
  };
});

//# sourceMappingURL=experimental.template.ddc.js.map
