define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/security', 'packages/angular/src/platform/dom/events/event_manager', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/core/di/decorators', 'packages/angular/src/core/linker/exceptions.template', 'packages/angular/di.template', 'packages/angular/src/core/application_tokens.template', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/metadata/view.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/core/security.template', 'packages/angular/src/platform/dom/events/event_manager.template'], function(dart_sdk, reflector, app_view_utils, security, event_manager, opaque_token, decorators, exceptions, di, application_tokens, change_detection, view, api, security$, event_manager$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__security = security.src__core__security;
  const src__platform__dom__events__event_manager = event_manager.src__platform__dom__events__event_manager;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const src__core__linker__exceptions$46template = exceptions.src__core__linker__exceptions$46template;
  const di$46template = di.di$46template;
  const src__core__application_tokens$46template = application_tokens.src__core__application_tokens$46template;
  const src__core__change_detection__change_detection$46template = change_detection.src__core__change_detection__change_detection$46template;
  const src__core__metadata__view$46template = view.src__core__metadata__view$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__core__security$46template = security$.src__core__security$46template;
  const src__platform__dom__events__event_manager$46template = event_manager$.src__platform__dom__events__event_manager$46template;
  const _root = Object.create(null);
  const src__core__linker__app_view_utils$46template = Object.create(_root);
  let StringAndSanitizationServiceAndEventManagerToAppViewUtils = () => (StringAndSanitizationServiceAndEventManagerToAppViewUtils = dart.constFn(dart.fnType(src__core__linker__app_view_utils.AppViewUtils, [core.String, src__core__security.SanitizationService, src__platform__dom__events__event_manager.EventManager])))();
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__linker__app_view_utils$46template, {
    /*src__core__linker__app_view_utils$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  src__core__linker__app_view_utils$46template.initReflector = function() {
    if (dart.test(src__core__linker__app_view_utils$46template._visited)) {
      return;
    }
    src__core__linker__app_view_utils$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__core__linker__app_view_utils.AppViewUtils), dart.fn((p0, p1, p2) => new src__core__linker__app_view_utils.AppViewUtils.new(p0, p1, p2), StringAndSanitizationServiceAndEventManagerToAppViewUtils()));
    src__di__reflector.registerDependencies(dart.wrapType(src__core__linker__app_view_utils.AppViewUtils), const$4 || (const$4 = dart.constList([const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__core__di__decorators.Inject.new(const$ || (const$ = dart.const(new (OpaqueTokenOfString()).new('APP_ID'))))))], core.Object)), const$2 || (const$2 = dart.constList([dart.wrapType(src__core__security.SanitizationService)], core.Object)), const$3 || (const$3 = dart.constList([dart.wrapType(src__platform__dom__events__event_manager.EventManager)], core.Object))], ListOfObject())));
    src__core__linker__exceptions$46template.initReflector();
    di$46template.initReflector();
    src__core__application_tokens$46template.initReflector();
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__metadata__view$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__core__security$46template.initReflector();
    src__core__security$46template.initReflector();
    src__platform__dom__events__event_manager$46template.initReflector();
  };
  dart.fn(src__core__linker__app_view_utils$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/linker/app_view_utils.template.ddc", {
    "package:angular/src/core/linker/app_view_utils.template.dart": src__core__linker__app_view_utils$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_view_utils.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;MA8BI,qDAAQ;YAAG;;;;;;;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAO,kCAAe,CAAC,6DAAY,EAAE,SAAC,EAAS,EAAE,EAA0B,EAAE,EAAmB,KAAK,IAAI,kDAAY,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE;AAChI,IAAO,uCAAoB,CAAC,6DAAY,EAAE,sCACxC,sCAAO,qCAAM,oCAAa,CAAC,mCAAM,2BAAuB,CAAC,gCACzD,sCAAW,sDAAmB,kBAC9B,sCAAW,qEAAY;AAEzB,IAAM,sDAAa;AACnB,IAAM,2BAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,sEAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,kEAAa;EACrB","file":"app_view_utils.template.ddc.js"}');
  // Exports:
  return {
    src__core__linker__app_view_utils$46template: src__core__linker__app_view_utils$46template
  };
});

//# sourceMappingURL=app_view_utils.template.ddc.js.map
