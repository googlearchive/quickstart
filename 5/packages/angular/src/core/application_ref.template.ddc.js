define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/di/injector/empty', 'packages/angular/src/facade/exception_handler.template', 'packages/angular/src/platform/dom/shared_styles_host.template', 'packages/angular/src/core/application_tokens.template', 'packages/angular/src/core/change_detection/change_detector_ref.template', 'packages/angular/src/core/change_detection/constants.template', 'packages/angular/src/core/di.template', 'packages/angular/src/core/linker/app_view.template', 'packages/angular/src/core/linker/app_view_utils.template', 'packages/angular/src/core/linker/component_resolver.template', 'packages/angular/src/runtime.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/core/testability/testability.template', 'packages/angular/src/core/zone/ng_zone.template'], function(dart_sdk, reflector, application_ref, ng_zone, empty, exception_handler, shared_styles_host, application_tokens, change_detector_ref, constants, di, app_view, app_view_utils, component_resolver, runtime, api, testability, ng_zone$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const src__platform__dom__shared_styles_host$46template = shared_styles_host.src__platform__dom__shared_styles_host$46template;
  const src__core__application_tokens$46template = application_tokens.src__core__application_tokens$46template;
  const src__core__change_detection__change_detector_ref$46template = change_detector_ref.src__core__change_detection__change_detector_ref$46template;
  const src__core__change_detection__constants$46template = constants.src__core__change_detection__constants$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__linker__app_view$46template = app_view.src__core__linker__app_view$46template;
  const src__core__linker__component_factory$46template = app_view.src__core__linker__component_factory$46template;
  const src__core__linker__view_ref$46template = app_view.src__core__linker__view_ref$46template;
  const src__core__linker__app_view_utils$46template = app_view_utils.src__core__linker__app_view_utils$46template;
  const src__core__linker__component_resolver$46template = component_resolver.src__core__linker__component_resolver$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__core__testability__testability$46template = testability.src__core__testability__testability$46template;
  const src__core__zone__ng_zone$46template = ng_zone$.src__core__zone__ng_zone$46template;
  const _root = Object.create(null);
  const src__core__application_ref$46template = Object.create(_root);
  let VoidToPlatformRefImpl = () => (VoidToPlatformRefImpl = dart.constFn(dart.fnType(src__core__application_ref.PlatformRefImpl, [])))();
  let PlatformRefImplAndNgZoneAndInjectorToApplicationRefImpl = () => (PlatformRefImplAndNgZoneAndInjectorToApplicationRefImpl = dart.constFn(dart.fnType(src__core__application_ref.ApplicationRefImpl, [src__core__application_ref.PlatformRefImpl, src__core__zone__ng_zone.NgZone, src__di__injector__injector.Injector])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__application_ref$46template, {
    /*src__core__application_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  src__core__application_ref$46template.initReflector = function() {
    if (dart.test(src__core__application_ref$46template._visited)) {
      return;
    }
    src__core__application_ref$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__core__application_ref.PlatformRefImpl), dart.fn(() => new src__core__application_ref.PlatformRefImpl.new(), VoidToPlatformRefImpl()));
    src__di__reflector.registerFactory(dart.wrapType(src__core__application_ref.ApplicationRefImpl), dart.fn((p0, p1, p2) => new src__core__application_ref.ApplicationRefImpl.new(p0, p1, p2), PlatformRefImplAndNgZoneAndInjectorToApplicationRefImpl()));
    src__di__reflector.registerDependencies(dart.wrapType(src__core__application_ref.ApplicationRefImpl), const$2 || (const$2 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__core__application_ref.PlatformRefImpl)], core.Object)), const$0 || (const$0 = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object)), const$1 || (const$1 = dart.constList([dart.wrapType(src__di__injector__injector.Injector)], core.Object))], ListOfObject())));
    src__facade__exceptions$46template.initReflector();
    src__platform__dom__shared_styles_host$46template.initReflector();
    src__core__application_tokens$46template.initReflector();
    src__core__change_detection__change_detector_ref$46template.initReflector();
    src__core__change_detection__constants$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__component_resolver$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__core__testability__testability$46template.initReflector();
    src__core__zone__ng_zone$46template.initReflector();
  };
  dart.fn(src__core__application_ref$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/application_ref.template.ddc", {
    "package:angular/src/core/application_ref.template.dart": src__core__application_ref$46template
  }, '{"version":3,"sourceRoot":"","sources":["application_ref.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA6CI,8CAAQ;YAAG;;;;;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAO,kCAAe,CAAC,yDAAe,EAAE,cAAM,IAAI,8CAAe;AACjE,IAAO,kCAAe,CAAC,4DAAkB,EAAE,SAAC,EAAsB,EAAE,EAAa,EAAE,EAAe,KAAK,IAAI,iDAAkB,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE;AACxI,IAAO,uCAAoB,CAAC,4DAAkB,EAAE,sCAC9C,oCAAW,yDAAe,kBAC1B,sCAAW,8CAAM,kBACjB,sCAAW,mDAAQ;AAErB,IAAM,gDAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,yEAAa;AACnB,IAAM,+DAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,8DAAa;AACnB,IAAO,oDAAa;AACpB,IAAO,qCAAa;AACpB,IAAO,+CAAa;AACpB,IAAO,4DAAa;AACpB,IAAO,iDAAa;EACtB","file":"application_ref.template.ddc.js"}');
  // Exports:
  return {
    src__core__application_ref$46template: src__core__application_ref$46template
  };
});

//# sourceMappingURL=application_ref.template.ddc.js.map
