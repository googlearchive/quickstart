define(['dart_sdk', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/linker/dynamic_component_loader', 'packages/angular/src/di/injector/empty', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/render/api', 'packages/angular/src/platform/dom/shared_styles_host', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/di/reflector', 'packages/angular/src/platform/bootstrap', 'packages/angular/src/core/linker/app_view_utils'], function(dart_sdk, application_ref, dynamic_component_loader, empty, modules, api, shared_styles_host, app_view, optimizations, reflector, bootstrap, app_view_utils) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__linker__dynamic_component_loader = dynamic_component_loader.src__core__linker__dynamic_component_loader;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__bootstrap__modules = modules.src__bootstrap__modules;
  const src__core__render__api = api.src__core__render__api;
  const src__platform__dom__shared_styles_host = shared_styles_host.src__platform__dom__shared_styles_host;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__di__reflector = reflector.src__di__reflector;
  const src__platform__bootstrap = bootstrap.src__platform__bootstrap;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const _root = Object.create(null);
  const experimental = Object.create(_root);
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let VoidToInjector = () => (VoidToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [])))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let ComponentFactoryOfT__ToComponentRefOfT = () => (ComponentFactoryOfT__ToComponentRefOfT = dart.constFn(dart.gFnType(T => [src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory$(T)], [__ToInjector()]])))();
  let ObjectToComponentFactoryOfT = () => (ObjectToComponentFactoryOfT = dart.constFn(dart.gFnType(T => [src__core__linker__component_factory.ComponentFactory$(T), [core.Object]])))();
  let InjectorToInjector = () => (InjectorToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [src__di__injector__injector.Injector])))();
  let FnToInjector = () => (FnToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [InjectorToInjector()])))();
  let InjectorTovoid = () => (InjectorTovoid = dart.constFn(dart.fnType(dart.void, [src__di__injector__injector.Injector])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  experimental._platformInjector = function() {
    let platformRef = new src__core__application_ref.PlatformRefImpl.new();
    let throwingComponentLoader = new experimental._ThrowingSlowComponentLoader.new();
    return src__di__injector__injector.Injector.map(new (LinkedMapOfObject$Object()).from([dart.wrapType(src__core__application_ref.PlatformRef), platformRef, dart.wrapType(src__core__application_ref.PlatformRefImpl), platformRef, dart.wrapType(src__core__linker__dynamic_component_loader.SlowComponentLoader), throwingComponentLoader]));
  };
  dart.fn(experimental._platformInjector, VoidToInjector());
  experimental.bootstrapFactory = function(T, factory, createAppInjector) {
    if (createAppInjector === void 0) createAppInjector = null;
    let appInjector = createAppInjector == null ? src__bootstrap__modules.minimalApp(experimental._platformInjector()) : createAppInjector(src__bootstrap__modules.minimalApp(experimental._platformInjector()));
    experimental.initAngular(appInjector);
    let t = src__core__render__api.sharedStylesHost;
    t == null ? src__core__render__api.sharedStylesHost = new src__platform__dom__shared_styles_host.DomSharedStylesHost.new(html.document) : t;
    let appRef = src__core__application_ref.ApplicationRef.as(appInjector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
    return appRef.bootstrap(T, factory, appInjector);
  };
  dart.fn(experimental.bootstrapFactory, ComponentFactoryOfT__ToComponentRefOfT());
  experimental.typeToFactory = function(T, typeOrFactory) {
    return src__core__linker__component_factory.ComponentFactory$(T).is(typeOrFactory) ? typeOrFactory : src__runtime__optimizations.unsafeCast(src__core__linker__component_factory.ComponentFactory$(T), src__di__reflector.getComponent(src__runtime__optimizations.unsafeCast(core.Type, typeOrFactory)));
  };
  dart.fn(experimental.typeToFactory, ObjectToComponentFactoryOfT());
  experimental.rootInjector = function(createAppInjector) {
    return createAppInjector(src__platform__bootstrap.browserStaticPlatform().injector);
  };
  dart.fn(experimental.rootInjector, FnToInjector());
  experimental.rootMinimalInjector = function() {
    return src__bootstrap__modules.minimalApp(experimental._platformInjector());
  };
  dart.fn(experimental.rootMinimalInjector, VoidToInjector());
  experimental.initAngular = function(injector) {
    src__core__linker__app_view_utils.appViewUtils = src__runtime__optimizations.unsafeCast(src__core__linker__app_view_utils.AppViewUtils, injector.get(dart.wrapType(src__core__linker__app_view_utils.AppViewUtils)));
  };
  dart.fn(experimental.initAngular, InjectorTovoid());
  experimental.isDomRenderDirty = function() {
    return src__core__linker__app_view.domRootRendererIsDirty;
  };
  dart.fn(experimental.isDomRenderDirty, VoidTobool());
  experimental.resetDomRenderDirty = function() {
    src__core__linker__app_view.domRootRendererIsDirty = false;
  };
  dart.fn(experimental.resetDomRenderDirty, VoidTovoid());
  experimental._ThrowingSlowComponentLoader = class _ThrowingSlowComponentLoader extends core.Object {
    load(T, type, injector) {
      dart.throw(new core.UnimplementedError.new("You are using bootstrapFactory, which no longer supports loading a component with SlowComponentLoader. Please migrate this code to use ComponentLoader instead."));
    }
    loadNextToLocation(T, type, location, injector) {
      if (injector === void 0) injector = null;
      dart.throw(new core.UnimplementedError.new("You are using bootstrapFactory, which no longer supports loading a component with SlowComponentLoader. Please migrate this code to use ComponentLoader instead."));
    }
  };
  (experimental._ThrowingSlowComponentLoader.new = function() {
  }).prototype = experimental._ThrowingSlowComponentLoader.prototype;
  dart.addTypeTests(experimental._ThrowingSlowComponentLoader);
  experimental._ThrowingSlowComponentLoader[dart.implements] = () => [src__core__linker__dynamic_component_loader.SlowComponentLoader];
  dart.setMethodSignature(experimental._ThrowingSlowComponentLoader, () => ({
    __proto__: dart.getMethods(experimental._ThrowingSlowComponentLoader.__proto__),
    load: dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [core.Type, src__di__injector__injector.Injector]]),
    loadNextToLocation: dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [core.Type, src__core__linker__view_container_ref.ViewContainerRef], [src__di__injector__injector.Injector]])
  }));
  dart.defineLazy(experimental, {
    /*experimental._slowComponentLoaderWarning*/get _slowComponentLoaderWarning() {
      return 'You are using bootstrapFactory, which no ' + 'longer supports loading a component with SlowComponentLoader. Please ' + 'migrate this code to use ComponentLoader instead.';
    }
  });
  dart.trackLibraries("packages/angular/experimental.ddc", {
    "package:angular/experimental.dart": experimental
  }, '{"version":3,"sourceRoot":"","sources":["experimental.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;QA4H2B,2BAAQ;;;;;;;;;;;;;;;;;;;AA1FjC,QAAM,cAAc,IAAI,8CAAe;AACvC,QAAM,0BAA0B,IAAI,6CAA4B;AAChE,UAAO,AAAI,yCAAY,CAAC,uCACtB,qDAAW,EAAE,WAAW,EACxB,yDAAe,EAAE,WAAW,EAC5B,8EAAmB,EAAE,uBAAuB;EAEhD;;8CAcE,OAA2B,EAC3B,iBAAiC;sCAAjB;AAEhB,QAAM,cAAc,iBAAiB,IAAI,OACnC,kCAAU,CAAC,8BAAiB,MAC5B,iBAAiB,CAAC,kCAAU,CAAC,8BAAiB;AACpD,4BAAW,CAAC,WAAW;AACvB,mDAAgB;0DAAK,IAAI,8DAAmB,CAAC,aAAQ;AACrD,QAAM,sDAAS,WAAW,IAAI,CAAC,wDAAc;AAC7C,UAAO,OAAM,UAAU,IAAC,OAAO,EAAE,WAAW;EAC9C;;2CAQqC,aAAoB;wEACrD,aAAa,IACP,aAAa,GACb,sCAAU,4DACR,AAAU,+BAAY,CAAC,sCAAU,YAAO,aAAa;EAAG;;uCAc9C,iBAA2C;AAE/D,UAAO,kBAAiB,CAAC,8CAAqB,WAAW;EAC3D;;;UAQkC,mCAAU,CAAC,8BAAiB;EAAG;;sCAUhD,QAAiB;AAChC,qDAAe,sCAAU,iDAAe,QAAQ,IAAI,CAAC,6DAAY;EACnE;;;UAU2B,AAAS,4BAAD,uBAAuB;;;;AAOxD,IAPyB,2BAAQ,0BAOC;EACpC;;;YAUkC,IAAS,EAAE,QAAiB;AAC1D,iBAAM,IAAI,2BAAkB,CAAC,iKAA2B;IAC1D;0BAII,IAAS,EAAE,QAAyB,EACnC,QAAiB;+BAAR;AACZ,iBAAM,IAAI,2BAAkB,CAAC,iKAA2B;IAC1D;;;EACF;;;;;;;;;MAEM,wCAA2B;YAAG,+CAChC,0EACA","file":"experimental.ddc.js"}');
  // Exports:
  return {
    experimental: experimental
  };
});

//# sourceMappingURL=experimental.ddc.js.map
