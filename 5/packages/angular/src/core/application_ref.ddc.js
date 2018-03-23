define(['dart_sdk', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/facade/exception_handler', 'packages/angular/src/core/render/api', 'packages/angular/src/platform/dom/shared_styles_host', 'packages/angular/src/di/injector/empty', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/linker/component_resolver', 'packages/angular/src/core/application_tokens', 'packages/angular/src/core/change_detection/change_detector_ref', 'packages/angular/src/core/testability/testability', 'packages/angular/src/core/change_detection/constants'], function(dart_sdk, optimizations, ng_zone, exception_handler, api, shared_styles_host, empty, app_view_utils, app_view, component_resolver, application_tokens, change_detector_ref, testability, constants) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__facade__exceptions = exception_handler.src__facade__exceptions;
  const src__facade__exception_handler = exception_handler.src__facade__exception_handler;
  const src__core__render__api = api.src__core__render__api;
  const src__platform__dom__shared_styles_host = shared_styles_host.src__platform__dom__shared_styles_host;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_ref = app_view.src__core__linker__view_ref;
  const src__core__linker__component_resolver = component_resolver.src__core__linker__component_resolver;
  const src__core__application_tokens = application_tokens.src__core__application_tokens;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const src__core__testability__testability = testability.src__core__testability__testability;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const _root = Object.create(null);
  const src__core__application_ref = Object.create(_root);
  const $add = dartx.add;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $removeAt = dartx.removeAt;
  const $isEmpty = dartx.isEmpty;
  const $replaceWith = dartx.replaceWith;
  const $append = dartx.append;
  const $contains = dartx.contains;
  const $toList = dartx.toList;
  const $map = dartx.map;
  let VoidToNgZone = () => (VoidToNgZone = dart.constFn(dart.fnType(src__core__zone__ng_zone.NgZone, [])))();
  let InjectorToPlatformRefImpl = () => (InjectorToPlatformRefImpl = dart.constFn(dart.fnType(src__core__application_ref.PlatformRefImpl, [src__di__injector__injector.Injector])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToPlatformRef = () => (VoidToPlatformRef = dart.constFn(dart.fnType(src__core__application_ref.PlatformRef, [])))();
  let InjectorAndComponentFactoryOfTToComponentRefOfT = () => (InjectorAndComponentFactoryOfTToComponentRefOfT = dart.constFn(dart.gFnType(T => [src__core__linker__component_factory.ComponentRef$(T), [src__di__injector__injector.Injector, src__core__linker__component_factory.ComponentFactory$(T)]])))();
  let FutureOfComponentRef = () => (FutureOfComponentRef = dart.constFn(async.Future$(src__core__linker__component_factory.ComponentRef)))();
  let VoidToFutureOfComponentRef = () => (VoidToFutureOfComponentRef = dart.constFn(dart.fnType(FutureOfComponentRef(), [])))();
  let InjectorAndTypeToFutureOfComponentRefOfT = () => (InjectorAndTypeToFutureOfComponentRefOfT = dart.constFn(dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [src__di__injector__injector.Injector, core.Type]])))();
  let JSArrayOfApplicationRef = () => (JSArrayOfApplicationRef = dart.constFn(_interceptors.JSArray$(src__core__application_ref.ApplicationRef)))();
  let JSArrayOfFunction = () => (JSArrayOfFunction = dart.constFn(_interceptors.JSArray$(core.Function)))();
  let JSArrayOfAppView = () => (JSArrayOfAppView = dart.constFn(_interceptors.JSArray$(src__core__linker__app_view.AppView)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let AppViewAndElementTovoid = () => (AppViewAndElementTovoid = dart.constFn(dart.fnType(dart.void, [src__core__linker__app_view.AppView, html.Element])))();
  let JSArrayOfAppViewAndElementTovoid = () => (JSArrayOfAppViewAndElementTovoid = dart.constFn(_interceptors.JSArray$(AppViewAndElementTovoid())))();
  let ListOfApplicationRef = () => (ListOfApplicationRef = dart.constFn(core.List$(src__core__application_ref.ApplicationRef)))();
  let ListOfFunction = () => (ListOfFunction = dart.constFn(core.List$(core.Function)))();
  let ListOfAppView = () => (ListOfAppView = dart.constFn(core.List$(src__core__linker__app_view.AppView)))();
  let ListOfElement = () => (ListOfElement = dart.constFn(core.List$(html.Element)))();
  let ListOfAppViewAndElementTovoid = () => (ListOfAppViewAndElementTovoid = dart.constFn(core.List$(AppViewAndElementTovoid())))();
  let JSArrayOfComponentRef = () => (JSArrayOfComponentRef = dart.constFn(_interceptors.JSArray$(src__core__linker__component_factory.ComponentRef)))();
  let JSArrayOfComponentFactory = () => (JSArrayOfComponentFactory = dart.constFn(_interceptors.JSArray$(src__core__linker__component_factory.ComponentFactory)))();
  let JSArrayOfChangeDetectorRef = () => (JSArrayOfChangeDetectorRef = dart.constFn(_interceptors.JSArray$(src__core__change_detection__change_detector_ref.ChangeDetectorRef)))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let ListToNull = () => (ListToNull = dart.constFn(dart.fnType(core.Null, [core.List])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let NgZoneErrorToNull = () => (NgZoneErrorToNull = dart.constFn(dart.fnType(core.Null, [src__core__zone__ng_zone.NgZoneError])))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let VoidToNull$ = () => (VoidToNull$ = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidToNull$0 = () => (VoidToNull$0 = dart.constFn(dart.fnType(core.Null, [])))();
  let ComponentFactoryToType = () => (ComponentFactoryToType = dart.constFn(dart.fnType(core.Type, [src__core__linker__component_factory.ComponentFactory])))();
  let ComponentRefOfNull = () => (ComponentRefOfNull = dart.constFn(src__core__linker__component_factory.ComponentRef$(core.Null)))();
  let ComponentRefOfNullTovoid = () => (ComponentRefOfNullTovoid = dart.constFn(dart.fnType(dart.void, [ComponentRefOfNull()])))();
  let ListOfComponentRef = () => (ListOfComponentRef = dart.constFn(core.List$(src__core__linker__component_factory.ComponentRef)))();
  let ListOfComponentFactory = () => (ListOfComponentFactory = dart.constFn(core.List$(src__core__linker__component_factory.ComponentFactory)))();
  let ListOfChangeDetectorRef = () => (ListOfChangeDetectorRef = dart.constFn(core.List$(src__core__change_detection__change_detector_ref.ChangeDetectorRef)))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  src__core__application_ref.createNgZone = function() {
    return new src__core__zone__ng_zone.NgZone.new({enableLongStackTrace: src__runtime__optimizations.isDevMode});
  };
  dart.fn(src__core__application_ref.createNgZone, VoidToNgZone());
  dart.defineLazy(src__core__application_ref, {
    /*src__core__application_ref._platform*/get _platform() {
      return null;
    },
    set _platform(_) {},
    /*src__core__application_ref._inPlatformCreate*/get _inPlatformCreate() {
      return false;
    },
    set _inPlatformCreate(_) {}
  });
  src__core__application_ref.createPlatform = function(injector) {
    if (dart.test(src__runtime__optimizations.isDevMode)) {
      if (dart.test(src__core__application_ref._inPlatformCreate)) {
        dart.throw(new src__facade__exceptions.BaseException.new('Already creating a platform...'));
      }
      if (src__core__application_ref._platform != null && !dart.test(src__core__application_ref._platform.disposed)) {
        dart.throw(new src__facade__exceptions.BaseException.new('There can be only one platform. Destroy the ' + 'previous one to create a new one.'));
      }
    }
    src__core__application_ref._inPlatformCreate = true;
    let t = src__core__render__api.sharedStylesHost;
    t == null ? src__core__render__api.sharedStylesHost = new src__platform__dom__shared_styles_host.DomSharedStylesHost.new(html.document) : t;
    try {
      src__core__application_ref._platform = src__core__application_ref.PlatformRefImpl.as(injector.get(dart.wrapType(src__core__application_ref.PlatformRef)));
      src__core__application_ref._platform.init(injector);
    } finally {
      src__core__application_ref._inPlatformCreate = false;
    }
    return src__core__application_ref._platform;
  };
  dart.lazyFn(src__core__application_ref.createPlatform, () => InjectorToPlatformRefImpl());
  src__core__application_ref.disposePlatform = function() {
    if (src__core__application_ref._platform != null && !dart.test(src__core__application_ref._platform.disposed)) {
      src__core__application_ref._platform.dispose();
    }
  };
  dart.fn(src__core__application_ref.disposePlatform, VoidTovoid());
  src__core__application_ref.getPlatform = function() {
    return src__core__application_ref._platform != null && !dart.test(src__core__application_ref._platform.disposed) ? src__core__application_ref._platform : null;
  };
  dart.lazyFn(src__core__application_ref.getPlatform, () => VoidToPlatformRef());
  src__core__application_ref.coreBootstrap = function(T, injector, componentFactory) {
    src__core__linker__app_view_utils.appViewUtils = src__core__linker__app_view_utils.AppViewUtils._check(injector.get(dart.wrapType(src__core__linker__app_view_utils.AppViewUtils)));
    let appRef = src__core__application_ref.ApplicationRef._check(injector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
    return appRef.bootstrap(T, componentFactory);
  };
  dart.fn(src__core__application_ref.coreBootstrap, InjectorAndComponentFactoryOfTToComponentRefOfT());
  src__core__application_ref.coreLoadAndBootstrap = function(T, injector, componentType) {
    return async.async(src__core__linker__component_factory.ComponentRef$(T), function* coreLoadAndBootstrap() {
      src__core__linker__app_view_utils.appViewUtils = src__core__linker__app_view_utils.AppViewUtils._check(injector.get(dart.wrapType(src__core__linker__app_view_utils.AppViewUtils)));
      let appRef = src__core__application_ref.ApplicationRef._check(injector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
      return async.FutureOr$(src__core__linker__component_factory.ComponentRef$(T))._check(yield appRef.run(src__core__linker__component_factory.ComponentRef, dart.fn(() => async.async(src__core__linker__component_factory.ComponentRef, function*() {
        let componentResolver = src__core__linker__component_resolver.ComponentResolver._check(injector.get(dart.wrapType(src__core__linker__component_resolver.ComponentResolver)));
        let factory = (yield componentResolver.resolveComponent(componentType));
        yield appRef.waitForAsyncInitializers();
        return appRef.bootstrap(dart.dynamic, factory);
      }), VoidToFutureOfComponentRef())));
    });
  };
  dart.fn(src__core__application_ref.coreLoadAndBootstrap, InjectorAndTypeToFutureOfComponentRefOfT());
  src__core__application_ref.PlatformRef = class PlatformRef extends core.Object {};
  (src__core__application_ref.PlatformRef.new = function() {
  }).prototype = src__core__application_ref.PlatformRef.prototype;
  dart.addTypeTests(src__core__application_ref.PlatformRef);
  src__core__application_ref.ViewUpdateCallback = dart.typedef('ViewUpdateCallback', () => dart.fnType(dart.void, [src__core__linker__app_view.AppView, html.Element]));
  const _applications = Symbol('_applications');
  const _disposeListeners = Symbol('_disposeListeners');
  const _disposed = Symbol('_disposed');
  const _injector = Symbol('_injector');
  const _rafScheduled = Symbol('_rafScheduled');
  const _targetViews = Symbol('_targetViews');
  const _targetElements = Symbol('_targetElements');
  const _viewUpdateCallbacks = Symbol('_viewUpdateCallbacks');
  const _applicationDisposed = Symbol('_applicationDisposed');
  const _onAnimationFrame = Symbol('_onAnimationFrame');
  src__core__application_ref.PlatformRefImpl = class PlatformRefImpl extends src__core__application_ref.PlatformRef {
    init(injector) {
      if (dart.test(src__runtime__optimizations.isDevMode) && !dart.test(src__core__application_ref._inPlatformCreate)) {
        dart.throw(new src__facade__exceptions.BaseException.new('Platforms have to be initialized via `createPlatform`!'));
      }
      this[_injector] = injector;
      let initializers = core.List._check(injector.get(src__core__application_tokens.PLATFORM_INITIALIZER, null));
      if (initializers == null) return;
      for (let initializer of initializers) {
        dart.dcall(initializer);
      }
    }
    registerDisposeListener(dispose) {
      this[_disposeListeners][$add](dispose);
    }
    get injector() {
      return this[_injector];
    }
    get disposed() {
      return this[_disposed];
    }
    addApplication(appRef) {
      this[_applications][$add](appRef);
    }
    dispose() {
      for (let app of this[_applications]) {
        app.dispose();
      }
      this[_applications][$clear]();
      for (let dispose of this[_disposeListeners]) {
        dart.dcall(dispose);
      }
      this[_disposeListeners][$clear]();
      this[_disposed] = true;
    }
    [_applicationDisposed](app) {
      this[_applications][$remove](app);
    }
    scheduleViewUpdate(callback, view, el) {
      if (this[_targetViews] == null) {
        this[_targetViews] = JSArrayOfAppView().of([]);
        this[_targetElements] = JSArrayOfElement().of([]);
        this[_viewUpdateCallbacks] = JSArrayOfAppViewAndElementTovoid().of([]);
      }
      this[_targetViews][$add](view);
      this[_targetElements][$add](el);
      this[_viewUpdateCallbacks][$add](callback);
      if (this[_rafScheduled] === false) {
        this[_rafScheduled] = true;
        async.scheduleMicrotask(dart.bind(this, _onAnimationFrame));
      }
    }
    [_onAnimationFrame]() {
      let i = 0;
      try {
        while (i < dart.notNull(this[_targetViews][$length])) {
          this[_viewUpdateCallbacks][$_get](i)(this[_targetViews][$_get](i), this[_targetElements][$_get](i));
          ++i;
        }
      } catch (e) {
        let s = dart.stackTrace(e);
        let exceptionHandler = src__facade__exception_handler.ExceptionHandler._check(this[_injector].get(dart.wrapType(src__facade__exception_handler.ExceptionHandler)));
        exceptionHandler == null ? null : exceptionHandler.call(e, s);
        this[_viewUpdateCallbacks][$removeAt](i);
        this[_targetViews][$removeAt](i);
        this[_targetElements][$removeAt](i);
      }
      this[_targetViews][$clear]();
      this[_targetElements][$clear]();
      this[_viewUpdateCallbacks][$clear]();
      this[_rafScheduled] = false;
    }
  };
  (src__core__application_ref.PlatformRefImpl.new = function() {
    this[_applications] = JSArrayOfApplicationRef().of([]);
    this[_disposeListeners] = JSArrayOfFunction().of([]);
    this[_disposed] = false;
    this[_injector] = null;
    this[_rafScheduled] = false;
    this[_targetViews] = null;
    this[_targetElements] = null;
    this[_viewUpdateCallbacks] = null;
  }).prototype = src__core__application_ref.PlatformRefImpl.prototype;
  dart.addTypeTests(src__core__application_ref.PlatformRefImpl);
  dart.setMethodSignature(src__core__application_ref.PlatformRefImpl, () => ({
    __proto__: dart.getMethods(src__core__application_ref.PlatformRefImpl.__proto__),
    init: dart.fnType(dart.void, [src__di__injector__injector.Injector]),
    registerDisposeListener: dart.fnType(dart.void, [VoidTovoid()]),
    addApplication: dart.fnType(dart.void, [src__core__application_ref.ApplicationRef]),
    dispose: dart.fnType(dart.void, []),
    [_applicationDisposed]: dart.fnType(dart.void, [src__core__application_ref.ApplicationRef]),
    scheduleViewUpdate: dart.fnType(dart.void, [AppViewAndElementTovoid(), src__core__linker__app_view.AppView, html.Element]),
    [_onAnimationFrame]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__application_ref.PlatformRefImpl, () => ({
    __proto__: dart.getGetters(src__core__application_ref.PlatformRefImpl.__proto__),
    injector: dart.fnType(src__di__injector__injector.Injector, []),
    disposed: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__core__application_ref.PlatformRefImpl, () => ({
    __proto__: dart.getFields(src__core__application_ref.PlatformRefImpl.__proto__),
    [_applications]: dart.finalFieldType(ListOfApplicationRef()),
    [_disposeListeners]: dart.finalFieldType(ListOfFunction()),
    [_disposed]: dart.fieldType(core.bool),
    [_injector]: dart.fieldType(src__di__injector__injector.Injector),
    [_rafScheduled]: dart.fieldType(core.bool),
    [_targetViews]: dart.fieldType(ListOfAppView()),
    [_targetElements]: dart.fieldType(ListOfElement()),
    [_viewUpdateCallbacks]: dart.fieldType(ListOfAppViewAndElementTovoid())
  }));
  src__core__application_ref.ApplicationRef = class ApplicationRef extends core.Object {};
  (src__core__application_ref.ApplicationRef.new = function() {
  }).prototype = src__core__application_ref.ApplicationRef.prototype;
  dart.addTypeTests(src__core__application_ref.ApplicationRef);
  const _platform = Symbol('_platform');
  const _zone = Symbol('_zone');
  const _bootstrapListeners = Symbol('_bootstrapListeners');
  const _rootComponents = Symbol('_rootComponents');
  const _rootComponentFactories = Symbol('_rootComponentFactories');
  const _changeDetectorRefs = Symbol('_changeDetectorRefs');
  const _streamSubscriptions = Symbol('_streamSubscriptions');
  const _runningTick = Symbol('_runningTick');
  const _enforceNoNewChanges = Symbol('_enforceNoNewChanges');
  const _exceptionHandler = Symbol('_exceptionHandler');
  const _asyncInitDonePromise = Symbol('_asyncInitDonePromise');
  const _asyncInitDone = Symbol('_asyncInitDone');
  let const$;
  const _unloadComponent = Symbol('_unloadComponent');
  const _loadComponent = Symbol('_loadComponent');
  const _runTick = Symbol('_runTick');
  const _runTickGuarded = Symbol('_runTickGuarded');
  src__core__application_ref.ApplicationRefImpl = class ApplicationRefImpl extends src__core__application_ref.ApplicationRef {
    registerBootstrapListener(listener) {
      this[_bootstrapListeners][$add](listener);
    }
    registerDisposeListener(dispose) {
      this[_disposeListeners][$add](dispose);
    }
    registerChangeDetector(changeDetector) {
      this[_changeDetectorRefs][$add](changeDetector);
    }
    unregisterChangeDetector(changeDetector) {
      this[_changeDetectorRefs][$remove](changeDetector);
    }
    waitForAsyncInitializers() {
      return this[_asyncInitDonePromise];
    }
    run(R, callback) {
      let zone = src__core__zone__ng_zone.NgZone._check(this.injector.get(dart.wrapType(src__core__zone__ng_zone.NgZone)));
      let result = null;
      let completer = async.Completer$(R).new();
      zone.run(core.Null, dart.fn(() => {
        try {
          result = callback();
          if (async.Future.is(result)) {
            dart.dsend(result, 'then', dart.fn(ref => {
              completer.complete(async.FutureOr$(R)._check(ref));
            }, dynamicToNull()), {onError: dart.fn((err, stackTrace) => {
                completer.completeError(err, core.StackTrace._check(stackTrace));
                this[_exceptionHandler].call(err, stackTrace);
              }, dynamicAnddynamicToNull())});
          }
        } catch (e) {
          let e_stack = dart.stackTrace(e);
          this[_exceptionHandler].call(e, e_stack);
          dart.rethrow(e);
        }
      }, VoidToNull$()));
      return async.Future.is(result) ? completer.future : result;
    }
    bootstrap(T, componentFactory, parent) {
      if (parent === void 0) parent = null;
      if (dart.test(src__runtime__optimizations.isDevMode) && !dart.test(this[_asyncInitDone])) {
        dart.throw(new src__facade__exceptions.BaseException.new('Cannot bootstrap as there are still asynchronous initializers ' + 'running. Wait for them using waitForAsyncInitializers().'));
      }
      return src__core__linker__component_factory.ComponentRef$(T)._check(this.run(src__core__linker__component_factory.ComponentRef$(T), dart.fn(() => {
        this[_rootComponentFactories][$add](componentFactory);
        let compRef = componentFactory.create(parent != null ? parent : this[_injector], const$ || (const$ = dart.constList([], core.List)));
        let existingElement = html.document.querySelector(componentFactory.selector);
        let replacement = null;
        if (existingElement != null) {
          let newElement = compRef.location;
          if (newElement.id == null || newElement.id[$isEmpty]) {
            newElement.id = existingElement.id;
          }
          existingElement[$replaceWith](newElement);
          replacement = newElement;
        } else {
          if (!(compRef.location != null)) dart.assertFailed(dart.str`Could not locate node with selector ${componentFactory.selector}`);
          html.document.body[$append](compRef.location);
        }
        compRef.onDestroy(dart.fn(() => {
          this[_unloadComponent](compRef);
          replacement == null ? null : replacement[$remove]();
        }, VoidToNull$0()));
        let testability = compRef.injector.get(dart.wrapType(src__core__testability__testability.Testability), null);
        if (testability != null) {
          dart.dsend(compRef.injector.get(dart.wrapType(src__core__testability__testability.TestabilityRegistry)), 'registerApplication', compRef.location, testability);
        }
        this[_loadComponent](compRef);
        return compRef;
      }, dart.fnType(src__core__linker__component_factory.ComponentRef$(T), []))));
    }
    [_loadComponent](componentRef) {
      this[_changeDetectorRefs][$add](componentRef.changeDetectorRef);
      this.tick();
      this[_rootComponents][$add](componentRef);
      for (let listener of this[_bootstrapListeners]) {
        dart.dcall(listener, componentRef);
      }
    }
    [_unloadComponent](componentRef) {
      if (!dart.test(this[_rootComponents][$contains](componentRef))) {
        return;
      }
      this.unregisterChangeDetector(componentRef.changeDetectorRef);
      this[_rootComponents][$remove](componentRef);
    }
    get injector() {
      return this[_injector];
    }
    get zone() {
      return this[_zone];
    }
    tick() {
      src__core__linker__app_view_utils.AppViewUtils.resetChangeDetection();
      if (dart.test(src__runtime__optimizations.isDevMode) && dart.test(this[_runningTick])) {
        dart.throw(new src__facade__exceptions.BaseException.new('ApplicationRef.tick is called recursively'));
      }
      try {
        this[_runTick]();
      } catch (e) {
        let s = dart.stackTrace(e);
        if (!dart.test(this[_runTickGuarded]())) {
          this[_exceptionHandler].call(e, s, 'Tick');
        }
        dart.rethrow(e);
      } finally {
        this[_runningTick] = false;
        src__core__linker__app_view.lastGuardedView = null;
      }
    }
    [_runTick]() {
      this[_runningTick] = true;
      for (let c = 0; c < dart.notNull(this[_changeDetectorRefs][$length]); c++) {
        this[_changeDetectorRefs][$_get](c).detectChanges();
      }
      if (dart.test(this[_enforceNoNewChanges])) {
        for (let c = 0; c < dart.notNull(this[_changeDetectorRefs][$length]); c++) {
          this[_changeDetectorRefs][$_get](c).checkNoChanges();
        }
      }
    }
    [_runTickGuarded]() {
      this[_runningTick] = true;
      for (let c = 0; c < dart.notNull(this[_changeDetectorRefs][$length]); c++) {
        let cdRef = this[_changeDetectorRefs][$_get](c);
        if (src__core__linker__view_ref.ViewRefImpl.is(cdRef)) {
          src__core__linker__app_view.lastGuardedView = cdRef.appView;
          cdRef.appView.detectChanges();
        }
      }
      let l = src__core__linker__app_view.lastGuardedView;
      l == null ? null : l.cdState = src__core__change_detection__constants.ChangeDetectorState.Errored;
      if (src__core__linker__app_view.caughtException != null) {
        this[_exceptionHandler].call(src__core__linker__app_view.caughtException, src__core__linker__app_view.caughtStack);
        src__core__linker__app_view.caughtException = src__core__linker__app_view.caughtStack = null;
        return true;
      }
      return false;
    }
    dispose() {
      for (let ref of this[_rootComponents]) {
        ref.destroy();
      }
      for (let dispose of this[_disposeListeners]) {
        dart.dcall(dispose);
      }
      this[_disposeListeners][$clear]();
      for (let subscription of this[_streamSubscriptions]) {
        subscription.cancel();
      }
      this[_streamSubscriptions][$clear]();
      this[_platform][_applicationDisposed](this);
    }
    get componentTypes() {
      return this[_rootComponentFactories][$map](core.Type, dart.fn(factory => factory.componentType, ComponentFactoryToType()))[$toList]();
    }
    get componentFactories() {
      return this[_rootComponentFactories];
    }
  };
  (src__core__application_ref.ApplicationRefImpl.new = function(platform, zone$, injector) {
    this[_bootstrapListeners] = JSArrayOfFunction().of([]);
    this[_disposeListeners] = JSArrayOfFunction().of([]);
    this[_rootComponents] = JSArrayOfComponentRef().of([]);
    this[_rootComponentFactories] = JSArrayOfComponentFactory().of([]);
    this[_changeDetectorRefs] = JSArrayOfChangeDetectorRef().of([]);
    this[_streamSubscriptions] = JSArrayOfStreamSubscription().of([]);
    this[_runningTick] = false;
    this[_enforceNoNewChanges] = false;
    this[_exceptionHandler] = null;
    this[_asyncInitDonePromise] = null;
    this[_asyncInitDone] = null;
    this[_platform] = platform;
    this[_zone] = zone$;
    this[_injector] = injector;
    let zone = src__core__zone__ng_zone.NgZone._check(this[_injector].get(dart.wrapType(src__core__zone__ng_zone.NgZone)));
    this[_enforceNoNewChanges] = src__runtime__optimizations.isDevMode;
    zone.run(core.Null, dart.fn(() => {
      this[_exceptionHandler] = src__facade__exception_handler.ExceptionHandler._check(this[_injector].get(dart.wrapType(src__facade__exception_handler.ExceptionHandler)));
    }, VoidToNull()));
    this[_asyncInitDonePromise] = FutureOfbool()._check(this.run(core.bool, dart.fn(() => {
      let initializers = ListOfFunction()._check(this[_injector].get(src__core__application_tokens.APP_INITIALIZER, null));
      let asyncInitResults = JSArrayOfFuture().of([]);
      let asyncInitDonePromise = null;
      if (initializers != null) {
        let initializerCount = initializers[$length];
        for (let i = 0; i < dart.notNull(initializerCount); i++) {
          let initResult = dart.dcall(initializers[$_get](i));
          if (async.Future.is(initResult)) {
            asyncInitResults[$add](initResult);
          }
        }
      }
      if (dart.notNull(asyncInitResults[$length]) > 0) {
        asyncInitDonePromise = async.Future.wait(dart.dynamic, asyncInitResults).then(core.bool, dart.fn(_ => {
          this[_asyncInitDone] = true;
        }, ListToNull()));
        this[_asyncInitDone] = false;
      } else {
        this[_asyncInitDone] = true;
        asyncInitDonePromise = FutureOfbool().value(true);
      }
      return asyncInitDonePromise;
    }, VoidToFutureOfbool())));
    this[_streamSubscriptions][$add](this[_zone].onError.listen(dart.fn(error => {
      this[_exceptionHandler].call(error.error, error.stackTrace);
    }, NgZoneErrorToNull())));
    this[_streamSubscriptions][$add](this[_zone].onMicrotaskEmpty.listen(dart.fn(_ => {
      this[_zone].runGuarded(dart.fn(() => {
        this.tick();
      }, VoidToNull()));
    }, ObjectToNull())));
  }).prototype = src__core__application_ref.ApplicationRefImpl.prototype;
  dart.addTypeTests(src__core__application_ref.ApplicationRefImpl);
  dart.setMethodSignature(src__core__application_ref.ApplicationRefImpl, () => ({
    __proto__: dart.getMethods(src__core__application_ref.ApplicationRefImpl.__proto__),
    registerBootstrapListener: dart.fnType(dart.void, [ComponentRefOfNullTovoid()]),
    registerDisposeListener: dart.fnType(dart.void, [VoidTovoid()]),
    registerChangeDetector: dart.fnType(dart.void, [src__core__change_detection__change_detector_ref.ChangeDetectorRef]),
    unregisterChangeDetector: dart.fnType(dart.void, [src__core__change_detection__change_detector_ref.ChangeDetectorRef]),
    waitForAsyncInitializers: dart.fnType(async.Future, []),
    run: dart.gFnType(R => [dart.dynamic, [dart.fnType(async.FutureOr$(R), [])]]),
    bootstrap: dart.gFnType(T => [src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory$(T)], [src__di__injector__injector.Injector]]),
    [_loadComponent]: dart.fnType(dart.void, [src__core__linker__component_factory.ComponentRef]),
    [_unloadComponent]: dart.fnType(dart.void, [src__core__linker__component_factory.ComponentRef]),
    tick: dart.fnType(dart.void, []),
    [_runTick]: dart.fnType(dart.void, []),
    [_runTickGuarded]: dart.fnType(core.bool, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__application_ref.ApplicationRefImpl, () => ({
    __proto__: dart.getGetters(src__core__application_ref.ApplicationRefImpl.__proto__),
    injector: dart.fnType(src__di__injector__injector.Injector, []),
    zone: dart.fnType(src__core__zone__ng_zone.NgZone, []),
    componentTypes: dart.fnType(core.List$(core.Type), []),
    componentFactories: dart.fnType(core.List$(src__core__linker__component_factory.ComponentFactory), [])
  }));
  dart.setFieldSignature(src__core__application_ref.ApplicationRefImpl, () => ({
    __proto__: dart.getFields(src__core__application_ref.ApplicationRefImpl.__proto__),
    [_platform]: dart.finalFieldType(src__core__application_ref.PlatformRefImpl),
    [_zone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone),
    [_injector]: dart.finalFieldType(src__di__injector__injector.Injector),
    [_bootstrapListeners]: dart.finalFieldType(ListOfFunction()),
    [_disposeListeners]: dart.finalFieldType(ListOfFunction()),
    [_rootComponents]: dart.finalFieldType(ListOfComponentRef()),
    [_rootComponentFactories]: dart.finalFieldType(ListOfComponentFactory()),
    [_changeDetectorRefs]: dart.finalFieldType(ListOfChangeDetectorRef()),
    [_streamSubscriptions]: dart.finalFieldType(ListOfStreamSubscription()),
    [_runningTick]: dart.fieldType(core.bool),
    [_enforceNoNewChanges]: dart.fieldType(core.bool),
    [_exceptionHandler]: dart.fieldType(src__facade__exception_handler.ExceptionHandler),
    [_asyncInitDonePromise]: dart.fieldType(FutureOfbool()),
    [_asyncInitDone]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular/src/core/application_ref.ddc", {
    "package:angular/src/core/application_ref.dart": src__core__application_ref
  }, '{"version":3,"sourceRoot":"","sources":["application_ref.dart"],"names":[],"mappings":"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","file":"application_ref.ddc.js"}');
  // Exports:
  return {
    src__core__application_ref: src__core__application_ref
  };
});

//# sourceMappingURL=application_ref.ddc.js.map
