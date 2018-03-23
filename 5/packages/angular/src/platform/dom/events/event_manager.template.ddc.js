define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/platform/dom/events/event_manager', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/core/di/decorators', 'packages/angular/src/core/di.template', 'packages/angular/src/core/zone/ng_zone.template', 'packages/angular/src/facade/exception_handler.template'], function(dart_sdk, reflector, event_manager, ng_zone, opaque_token, decorators, di, ng_zone$, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__platform__dom__events__event_manager = event_manager.src__platform__dom__events__event_manager;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__zone__ng_zone$46template = ng_zone$.src__core__zone__ng_zone$46template;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const _root = Object.create(null);
  const src__platform__dom__events__event_manager$46template = Object.create(_root);
  let ListOfEventManagerPlugin = () => (ListOfEventManagerPlugin = dart.constFn(core.List$(src__platform__dom__events__event_manager.EventManagerPlugin)))();
  let ListOfEventManagerPluginAndNgZoneToEventManager = () => (ListOfEventManagerPluginAndNgZoneToEventManager = dart.constFn(dart.fnType(src__platform__dom__events__event_manager.EventManager, [ListOfEventManagerPlugin(), src__core__zone__ng_zone.NgZone])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__dom__events__event_manager$46template, {
    /*src__platform__dom__events__event_manager$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  src__platform__dom__events__event_manager$46template.initReflector = function() {
    if (dart.test(src__platform__dom__events__event_manager$46template._visited)) {
      return;
    }
    src__platform__dom__events__event_manager$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__platform__dom__events__event_manager.EventManager), dart.fn((p0, p1) => new src__platform__dom__events__event_manager.EventManager.new(p0, p1), ListOfEventManagerPluginAndNgZoneToEventManager()));
    src__di__reflector.registerDependencies(dart.wrapType(src__platform__dom__events__event_manager.EventManager), const$3 || (const$3 = dart.constList([const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__core__di__decorators.Inject.new(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new('EventManagerPlugins'))))))], core.Object)), const$2 || (const$2 = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object))], ListOfObject())));
    src__core__di$46template.initReflector();
    src__core__zone__ng_zone$46template.initReflector();
    src__facade__exceptions$46template.initReflector();
  };
  dart.fn(src__platform__dom__events__event_manager$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/dom/events/event_manager.template.ddc", {
    "package:angular/src/platform/dom/events/event_manager.template.dart": src__platform__dom__events__event_manager$46template
  }, '{"version":3,"sourceRoot":"","sources":["event_manager.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAkBI,6DAAQ;YAAG;;;;;;;;;;AAEb,kBAAI,6DAAQ,GAAE;AACZ;;AAEF,oEAAW;AAEX,IAAO,kCAAe,CAAC,qEAAY,EAAE,SAAC,EAA+B,EAAE,EAAa,KAAK,IAAI,0DAAY,CAAC,EAAE,EAAE,EAAE;AAChH,IAAO,uCAAoB,CAAC,qEAAY,EAAE,sCACxC,sCAAO,qCAAM,oCAAa,CAAC,mCAAM,2CAAwB,CAAC,6CAC1D,sCAAW,8CAAM;AAEnB,IAAM,sCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,gDAAa;EACrB","file":"event_manager.template.ddc.js"}');
  // Exports:
  return {
    src__platform__dom__events__event_manager$46template: src__platform__dom__events__event_manager$46template
  };
});

//# sourceMappingURL=event_manager.template.ddc.js.map
