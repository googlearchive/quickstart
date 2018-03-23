define(['dart_sdk', 'packages/angular/src/di/injector/empty', 'packages/angular/src/platform/browser/exceptions', 'packages/angular/src/security/dom_sanitization_service', 'packages/angular/src/security/dom_sanitization_service_impl', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/core/security', 'packages/angular/src/platform/dom/events/event_manager', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/facade/exception_handler', 'packages/angular/src/core/testability/testability', 'packages/angular/src/core/application_ref.template', 'packages/angular/src/core/application_tokens.template', 'packages/angular/src/core/di.template', 'packages/angular/src/core/linker/app_view_utils.template', 'packages/angular/src/core/linker/app_view.template', 'packages/angular/src/core/linker/component_resolver.template', 'packages/angular/src/core/linker/dynamic_component_loader.template', 'packages/angular/src/core/testability/testability.template', 'packages/angular/src/core/zone.template', 'packages/angular/src/di/providers.template', 'packages/angular/src/facade/exception_handler.template', 'packages/angular/src/platform/browser/exceptions.template', 'packages/angular/src/platform/dom/events/dom_events.template', 'packages/angular/src/platform/dom/events/event_manager.template', 'packages/angular/src/platform/dom/events/key_events.template', 'packages/angular/src/runtime.template', 'packages/angular/src/security/dom_sanitization_service.template', 'packages/angular/src/security/dom_sanitization_service_impl.template', 'packages/angular/src/di/providers', 'packages/angular/src/platform/dom/events/dom_events', 'packages/angular/src/platform/dom/events/key_events', 'packages/angular/src/core/application_tokens', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/linker/component_resolver', 'packages/angular/src/core/linker/dynamic_component_loader'], function(dart_sdk, empty, exceptions, dom_sanitization_service, dom_sanitization_service_impl, application_ref, ng_zone, opaque_token, security, event_manager, app_view_utils, app_view, exception_handler, testability, application_ref$, application_tokens, di, app_view_utils$, app_view$, component_resolver, dynamic_component_loader, testability$, zone, providers, exception_handler$, exceptions$, dom_events, event_manager$, key_events, runtime, dom_sanitization_service$, dom_sanitization_service_impl$, providers$, dom_events$, key_events$, application_tokens$, optimizations, component_resolver$, dynamic_component_loader$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__platform__browser__exceptions = exceptions.src__platform__browser__exceptions;
  const src__security__dom_sanitization_service = dom_sanitization_service.src__security__dom_sanitization_service;
  const src__security__dom_sanitization_service_impl = dom_sanitization_service_impl.src__security__dom_sanitization_service_impl;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__core__security = security.src__core__security;
  const src__platform__dom__events__event_manager = event_manager.src__platform__dom__events__event_manager;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const src__facade__exception_handler = exception_handler.src__facade__exception_handler;
  const src__core__testability__testability = testability.src__core__testability__testability;
  const src__core__application_ref$46template = application_ref$.src__core__application_ref$46template;
  const src__core__application_tokens$46template = application_tokens.src__core__application_tokens$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__linker__app_view_utils$46template = app_view_utils$.src__core__linker__app_view_utils$46template;
  const src__core__linker__component_loader$46template = app_view$.src__core__linker__component_loader$46template;
  const src__core__linker__component_resolver$46template = component_resolver.src__core__linker__component_resolver$46template;
  const src__core__linker__dynamic_component_loader$46template = dynamic_component_loader.src__core__linker__dynamic_component_loader$46template;
  const src__core__testability__testability$46template = testability$.src__core__testability__testability$46template;
  const src__core__zone$46template = zone.src__core__zone$46template;
  const src__di__providers$46template = providers.src__di__providers$46template;
  const src__facade__exception_handler$46template = exception_handler$.src__facade__exception_handler$46template;
  const src__platform__browser__exceptions$46template = exceptions$.src__platform__browser__exceptions$46template;
  const src__platform__dom__events__dom_events$46template = dom_events.src__platform__dom__events__dom_events$46template;
  const src__platform__dom__events__event_manager$46template = event_manager$.src__platform__dom__events__event_manager$46template;
  const src__platform__dom__events__key_events$46template = key_events.src__platform__dom__events__key_events$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__security__dom_sanitization_service$46template = dom_sanitization_service$.src__security__dom_sanitization_service$46template;
  const src__security__dom_sanitization_service_impl$46template = dom_sanitization_service_impl$.src__security__dom_sanitization_service_impl$46template;
  const src__di__providers = providers$.src__di__providers;
  const src__platform__dom__events__dom_events = dom_events$.src__platform__dom__events__dom_events;
  const src__platform__dom__events__key_events = key_events$.src__platform__dom__events__key_events;
  const src__core__application_tokens = application_tokens$.src__core__application_tokens;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__linker__component_resolver = component_resolver$.src__core__linker__component_resolver;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader$.src__core__linker__dynamic_component_loader;
  const _root = Object.create(null);
  const src__bootstrap__modules$46template = Object.create(_root);
  const src__bootstrap__modules = Object.create(_root);
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let OpaqueTokenOfString = () => (OpaqueTokenOfString = dart.constFn(src__core__di__opaque_token.OpaqueToken$(core.String)))();
  let ListOfEventManagerPlugin = () => (ListOfEventManagerPlugin = dart.constFn(core.List$(src__platform__dom__events__event_manager.EventManagerPlugin)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfEventManagerPlugin = () => (JSArrayOfEventManagerPlugin = dart.constFn(_interceptors.JSArray$(src__platform__dom__events__event_manager.EventManagerPlugin)))();
  let VoidToListOfEventManagerPlugin = () => (VoidToListOfEventManagerPlugin = dart.constFn(dart.fnType(ListOfEventManagerPlugin(), [])))();
  let VoidToHtmlDocument = () => (VoidToHtmlDocument = dart.constFn(dart.fnType(html.HtmlDocument, [])))();
  let VoidToNgZone = () => (VoidToNgZone = dart.constFn(dart.fnType(src__core__zone__ng_zone.NgZone, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  src__bootstrap__modules$46template.minimalApp$Injector = function(parent) {
    if (parent === void 0) parent = null;
    return new src__bootstrap__modules$46template._Injector$minimalApp.__(parent);
  };
  dart.fn(src__bootstrap__modules$46template.minimalApp$Injector, __ToInjector());
  const _field0 = Symbol('_field0');
  const _field2 = Symbol('_field2');
  const _field3 = Symbol('_field3');
  const _field4 = Symbol('_field4');
  const _field5 = Symbol('_field5');
  const _field6 = Symbol('_field6');
  const _field7 = Symbol('_field7');
  const _field9 = Symbol('_field9');
  const _field10 = Symbol('_field10');
  const _getBrowserExceptionHandler$0 = Symbol('_getBrowserExceptionHandler$0');
  const _getExisting$1 = Symbol('_getExisting$1');
  const _getDomSanitizationServiceImpl$2 = Symbol('_getDomSanitizationServiceImpl$2');
  const _getApplicationRefImpl$3 = Symbol('_getApplicationRefImpl$3');
  const _getdynamic$4 = Symbol('_getdynamic$4');
  const _getdynamic$5 = Symbol('_getdynamic$5');
  let const$;
  const _getAppViewUtils$6 = Symbol('_getAppViewUtils$6');
  const _getComponentLoader$7 = Symbol('_getComponentLoader$7');
  const _getdynamic$8 = Symbol('_getdynamic$8');
  let const$0;
  const _getEventManager$9 = Symbol('_getEventManager$9');
  const _getdynamic$10 = Symbol('_getdynamic$10');
  const _getInjector$11 = Symbol('_getInjector$11');
  let const$1;
  let const$2;
  src__bootstrap__modules$46template._Injector$minimalApp = class _Injector$minimalApp extends src__di__injector__hierarchical.HierarchicalInjector {
    [_getBrowserExceptionHandler$0]() {
      let t = this[_field0];
      return t == null ? this[_field0] = new src__platform__browser__exceptions.BrowserExceptionHandler.new() : t;
    }
    [_getExisting$1]() {
      return this.inject(dart.dynamic, dart.wrapType(src__security__dom_sanitization_service.DomSanitizationService));
    }
    [_getDomSanitizationServiceImpl$2]() {
      let t = this[_field2];
      return t == null ? this[_field2] = new src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl.new() : t;
    }
    [_getApplicationRefImpl$3]() {
      let t = this[_field3];
      return t == null ? this[_field3] = new src__core__application_ref.ApplicationRefImpl.new(this.inject(src__core__application_ref.PlatformRefImpl, dart.wrapType(src__core__application_ref.PlatformRefImpl)), this.inject(src__core__zone__ng_zone.NgZone, dart.wrapType(src__core__zone__ng_zone.NgZone)), this.inject(src__di__injector__injector.Injector, dart.wrapType(src__di__injector__injector.Injector))) : t;
    }
    [_getdynamic$4]() {
      let t = this[_field4];
      return t == null ? this[_field4] = src__bootstrap__modules.createNgZone() : t;
    }
    [_getdynamic$5]() {
      let t = this[_field5];
      return t == null ? this[_field5] = src__bootstrap__modules.createRandomAppId() : t;
    }
    [_getAppViewUtils$6]() {
      let t = this[_field6];
      return t == null ? this[_field6] = new src__core__linker__app_view_utils.AppViewUtils.new(this.inject(core.String, const$ || (const$ = dart.const(new (OpaqueTokenOfString()).new('APP_ID')))), this.inject(src__core__security.SanitizationService, dart.wrapType(src__core__security.SanitizationService)), this.inject(src__platform__dom__events__event_manager.EventManager, dart.wrapType(src__platform__dom__events__event_manager.EventManager))) : t;
    }
    [_getComponentLoader$7]() {
      let t = this[_field7];
      return t == null ? this[_field7] = new src__core__linker__component_loader.ComponentLoader.new() : t;
    }
    [_getdynamic$8]() {
      return null;
    }
    [_getEventManager$9]() {
      let t = this[_field9];
      return t == null ? this[_field9] = new src__platform__dom__events__event_manager.EventManager.new(this.inject(ListOfEventManagerPlugin(), const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('EventManagerPlugins')))), this.inject(src__core__zone__ng_zone.NgZone, dart.wrapType(src__core__zone__ng_zone.NgZone))) : t;
    }
    [_getdynamic$10]() {
      let t = this[_field10];
      return t == null ? this[_field10] = src__bootstrap__modules.createEventPlugins() : t;
    }
    [_getInjector$11]() {
      return this;
    }
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (token === dart.wrapType(src__facade__exception_handler.ExceptionHandler)) {
        return this[_getBrowserExceptionHandler$0]();
      }
      if (token === dart.wrapType(src__core__security.SanitizationService)) {
        return this[_getExisting$1]();
      }
      if (token === dart.wrapType(src__security__dom_sanitization_service.DomSanitizationService)) {
        return this[_getDomSanitizationServiceImpl$2]();
      }
      if (token === dart.wrapType(src__core__application_ref.ApplicationRef)) {
        return this[_getApplicationRefImpl$3]();
      }
      if (token === dart.wrapType(src__core__zone__ng_zone.NgZone)) {
        return this[_getdynamic$4]();
      }
      if (token === (const$1 || (const$1 = dart.const(new (OpaqueTokenOfString()).new('APP_ID'))))) {
        return this[_getdynamic$5]();
      }
      if (token === dart.wrapType(src__core__linker__app_view_utils.AppViewUtils)) {
        return this[_getAppViewUtils$6]();
      }
      if (token === dart.wrapType(src__core__linker__component_loader.ComponentLoader)) {
        return this[_getComponentLoader$7]();
      }
      if (token === dart.wrapType(src__core__testability__testability.Testability)) {
        return this[_getdynamic$8]();
      }
      if (token === dart.wrapType(src__platform__dom__events__event_manager.EventManager)) {
        return this[_getEventManager$9]();
      }
      if (token === (const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('EventManagerPlugins'))))) {
        return this[_getdynamic$10]();
      }
      if (token === dart.wrapType(src__di__injector__injector.Injector)) {
        return this[_getInjector$11]();
      }
      return orElse;
    }
  };
  (src__bootstrap__modules$46template._Injector$minimalApp.__ = function(parent) {
    if (parent === void 0) parent = null;
    this[_field0] = null;
    this[_field2] = null;
    this[_field3] = null;
    this[_field4] = null;
    this[_field5] = null;
    this[_field6] = null;
    this[_field7] = null;
    this[_field9] = null;
    this[_field10] = null;
    src__bootstrap__modules$46template._Injector$minimalApp.__proto__.new.call(this, src__di__injector__hierarchical.HierarchicalInjector._check(parent));
  }).prototype = src__bootstrap__modules$46template._Injector$minimalApp.prototype;
  dart.addTypeTests(src__bootstrap__modules$46template._Injector$minimalApp);
  dart.setMethodSignature(src__bootstrap__modules$46template._Injector$minimalApp, () => ({
    __proto__: dart.getMethods(src__bootstrap__modules$46template._Injector$minimalApp.__proto__),
    [_getBrowserExceptionHandler$0]: dart.fnType(src__platform__browser__exceptions.BrowserExceptionHandler, []),
    [_getExisting$1]: dart.fnType(dart.dynamic, []),
    [_getDomSanitizationServiceImpl$2]: dart.fnType(src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl, []),
    [_getApplicationRefImpl$3]: dart.fnType(src__core__application_ref.ApplicationRefImpl, []),
    [_getdynamic$4]: dart.fnType(dart.dynamic, []),
    [_getdynamic$5]: dart.fnType(dart.dynamic, []),
    [_getAppViewUtils$6]: dart.fnType(src__core__linker__app_view_utils.AppViewUtils, []),
    [_getComponentLoader$7]: dart.fnType(src__core__linker__component_loader.ComponentLoader, []),
    [_getdynamic$8]: dart.fnType(dart.dynamic, []),
    [_getEventManager$9]: dart.fnType(src__platform__dom__events__event_manager.EventManager, []),
    [_getdynamic$10]: dart.fnType(dart.dynamic, []),
    [_getInjector$11]: dart.fnType(src__di__injector__injector.Injector, []),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(src__bootstrap__modules$46template._Injector$minimalApp, () => ({
    __proto__: dart.getFields(src__bootstrap__modules$46template._Injector$minimalApp.__proto__),
    [_field0]: dart.fieldType(src__platform__browser__exceptions.BrowserExceptionHandler),
    [_field2]: dart.fieldType(src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl),
    [_field3]: dart.fieldType(src__core__application_ref.ApplicationRefImpl),
    [_field4]: dart.fieldType(dart.dynamic),
    [_field5]: dart.fieldType(dart.dynamic),
    [_field6]: dart.fieldType(src__core__linker__app_view_utils.AppViewUtils),
    [_field7]: dart.fieldType(src__core__linker__component_loader.ComponentLoader),
    [_field9]: dart.fieldType(src__platform__dom__events__event_manager.EventManager),
    [_field10]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__bootstrap__modules$46template, {
    /*src__bootstrap__modules$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__bootstrap__modules$46template.initReflector = function() {
    if (dart.test(src__bootstrap__modules$46template._visited)) {
      return;
    }
    src__bootstrap__modules$46template._visited = true;
    src__bootstrap__modules$46template.initReflector();
    src__core__application_ref$46template.initReflector();
    src__core__application_tokens$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__linker__component_loader$46template.initReflector();
    src__core__linker__component_resolver$46template.initReflector();
    src__core__linker__dynamic_component_loader$46template.initReflector();
    src__core__testability__testability$46template.initReflector();
    src__core__zone$46template.initReflector();
    src__di__providers$46template.initReflector();
    src__facade__exception_handler$46template.initReflector();
    src__platform__browser__exceptions$46template.initReflector();
    src__platform__dom__events__dom_events$46template.initReflector();
    src__platform__dom__events__event_manager$46template.initReflector();
    src__platform__dom__events__key_events$46template.initReflector();
    src__runtime$46template.initReflector();
    src__security__dom_sanitization_service$46template.initReflector();
    src__security__dom_sanitization_service_impl$46template.initReflector();
  };
  dart.fn(src__bootstrap__modules$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__bootstrap__modules, {
    /*src__bootstrap__modules.eventPluginModule*/get eventPluginModule() {
      return dart.constList([dart.const(src__di__providers.Provider.new(dart.wrapType(src__platform__dom__events__event_manager.EventManager))), dart.const(src__di__providers.Provider.new(src__platform__dom__events__event_manager.EVENT_MANAGER_PLUGINS, {useFactory: src__bootstrap__modules.createEventPlugins, deps: dart.constList([], core.Object)}))], core.Object);
    }
  });
  src__bootstrap__modules.createEventPlugins = function() {
    return JSArrayOfEventManagerPlugin().of([new src__platform__dom__events__dom_events.DomEventsPlugin.new(), new src__platform__dom__events__key_events.KeyEventsPlugin.new()]);
  };
  dart.fn(src__bootstrap__modules.createEventPlugins, VoidToListOfEventManagerPlugin());
  dart.defineLazy(src__bootstrap__modules, {
    /*src__bootstrap__modules.bootstrapMinimalModule*/get bootstrapMinimalModule() {
      return dart.constList([src__bootstrap__modules.eventPluginModule, dart.const(src__di__providers.Provider.new(dart.wrapType(src__facade__exception_handler.ExceptionHandler), {useClass: dart.wrapType(src__platform__browser__exceptions.BrowserExceptionHandler)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__security.SanitizationService), {useExisting: dart.wrapType(src__security__dom_sanitization_service.DomSanitizationService)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__security__dom_sanitization_service.DomSanitizationService), {useClass: dart.wrapType(src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__application_ref.ApplicationRef), {useClass: dart.wrapType(src__core__application_ref.ApplicationRefImpl)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__zone__ng_zone.NgZone), {useFactory: src__bootstrap__modules.createNgZone, deps: dart.constList([], core.Object)})), dart.const(src__di__providers.Provider.new(src__core__application_tokens.APP_ID, {useFactory: src__bootstrap__modules.createRandomAppId, deps: dart.constList([], core.Object)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__linker__app_view_utils.AppViewUtils))), dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__linker__component_loader.ComponentLoader))), dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__testability__testability.Testability), {useValue: null}))], core.Object);
    },
    /*src__bootstrap__modules.minimalApp*/get minimalApp() {
      return src__bootstrap__modules$46template.minimalApp$Injector;
    }
  });
  src__bootstrap__modules.getDocument = function() {
    return html.document;
  };
  dart.fn(src__bootstrap__modules.getDocument, VoidToHtmlDocument());
  src__bootstrap__modules.createNgZone = function() {
    return new src__core__zone__ng_zone.NgZone.new({enableLongStackTrace: src__runtime__optimizations.isDevMode});
  };
  dart.fn(src__bootstrap__modules.createNgZone, VoidToNgZone());
  src__bootstrap__modules.createRandomAppId = function() {
    let random = math.Random.new();
    function char() {
      return core.String.fromCharCode(97 + dart.notNull(random.nextInt(26)));
    }
    dart.fn(char, VoidToString());
    return dart.str`${char()}${char()}${char()}`;
  };
  dart.fn(src__bootstrap__modules.createRandomAppId, VoidToString());
  dart.defineLazy(src__bootstrap__modules, {
    /*src__bootstrap__modules.bootstrapLegacyModule*/get bootstrapLegacyModule() {
      return dart.constList([src__bootstrap__modules.bootstrapMinimalModule, dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__linker__component_resolver.ComponentResolver), {useClass: dart.wrapType(src__core__linker__component_resolver.ComponentResolver)})), dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader))), dart.const(src__di__providers.Provider.new(dart.wrapType(src__core__testability__testability.Testability), {useClass: dart.wrapType(src__core__testability__testability.Testability)}))], core.Object);
    }
  });
  dart.trackLibraries("packages/angular/src/bootstrap/modules.ddc", {
    "package:angular/src/bootstrap/modules.template.dart": src__bootstrap__modules$46template,
    "package:angular/src/bootstrap/modules.dart": src__bootstrap__modules
  }, '{"version":3,"sourceRoot":"","sources":["modules.template.dart","modules.dart"],"names":[],"mappings":"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","file":"modules.ddc.js"}');
  // Exports:
  return {
    src__bootstrap__modules$46template: src__bootstrap__modules$46template,
    src__bootstrap__modules: src__bootstrap__modules
  };
});

//# sourceMappingURL=modules.ddc.js.map
