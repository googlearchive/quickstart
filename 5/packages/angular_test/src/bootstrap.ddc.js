define(['dart_sdk', 'packages/angular/experimental', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/platform/bootstrap', 'packages/angular/src/di/injector/empty', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/render/api', 'packages/angular/src/platform/dom/shared_styles_host', 'packages/angular/src/core/change_detection/constants'], function(dart_sdk, experimental, modules, bootstrap, empty, application_ref, ng_zone, app_view, api, shared_styles_host, constants) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const experimental$ = experimental.experimental;
  const src__bootstrap__modules = modules.src__bootstrap__modules;
  const src__platform__bootstrap = bootstrap.src__platform__bootstrap;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__di__injector__runtime = empty.src__di__injector__runtime;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__view_ref = app_view.src__core__linker__view_ref;
  const src__core__render__api = api.src__core__render__api;
  const src__platform__dom__shared_styles_host = shared_styles_host.src__platform__dom__shared_styles_host;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const _root = Object.create(null);
  const src__bootstrap = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $append = dartx.append;
  const $join = dartx.join;
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ListToInjector = () => (ListToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [core.List])))();
  let NgZoneErrorToNull = () => (NgZoneErrorToNull = dart.constFn(dart.fnType(core.Null, [src__core__zone__ng_zone.NgZoneError])))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let ComponentFactoryOfEAndElementAndFn__ToFutureOfComponentRefOfE = () => (ComponentFactoryOfEAndElementAndFn__ToFutureOfComponentRefOfE = dart.constFn(dart.gFnType(E => [async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [src__core__linker__component_factory.ComponentFactory$(E), html.Element, __ToInjector()], {beforeChangeDetection: dart.fnType(dart.void, [E]), addProviders: core.List}])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ApplicationRefImplAndComponentFactoryOfEAndElement__ToFutureOfComponentRefOfE = () => (ApplicationRefImplAndComponentFactoryOfEAndElement__ToFutureOfComponentRefOfE = dart.constFn(dart.gFnType(E => [async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [src__core__application_ref.ApplicationRefImpl, src__core__linker__component_factory.ComponentFactory$(E), html.Element, src__di__injector__injector.Injector], {beforeChangeDetection: dart.fnType(dart.void, [E])}])))();
  src__bootstrap.createTestInjector = function(providers) {
    let appInjector = null;
    if (dart.test(providers[$isEmpty])) {
      appInjector = experimental$.rootMinimalInjector();
    } else {
      appInjector = src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([src__bootstrap__modules.bootstrapLegacyModule, providers]), src__di__injector__hierarchical.HierarchicalInjector._check(src__platform__bootstrap.browserStaticPlatform().injector));
    }
    experimental$.initAngular(appInjector);
    return appInjector;
  };
  dart.fn(src__bootstrap.createTestInjector, ListToInjector());
  let const$;
  src__bootstrap.bootstrapForTest = function(E, componentFactory, hostElement, rootInjector, opts) {
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    let addProviders = opts && 'addProviders' in opts ? opts.addProviders : const$ || (const$ = dart.constList([], dart.dynamic));
    if (componentFactory == null) {
      dart.throw(new core.ArgumentError.notNull('componentFactory'));
    }
    if (hostElement == null) {
      dart.throw(new core.ArgumentError.notNull('hostElement'));
    }
    if (rootInjector == null) {
      dart.throw(new core.ArgumentError.notNull('rootInjector'));
    }
    let appInjector = rootInjector(src__bootstrap.createTestInjector(addProviders));
    let appRef = src__core__application_ref.ApplicationRefImpl._check(appInjector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
    let caughtError = null;
    let ngZone = src__core__zone__ng_zone.NgZone._check(appInjector.get(dart.wrapType(src__core__zone__ng_zone.NgZone)));
    let onErrorSub = ngZone.onError.listen(dart.fn(e => {
      caughtError = e;
    }, NgZoneErrorToNull()));
    return async.Future$(src__core__linker__component_factory.ComponentRef$(E))._check(appRef.run(src__core__linker__component_factory.ComponentRef$(E), dart.fn(() => src__bootstrap._runAndLoadComponent(E, appRef, componentFactory, hostElement, appInjector, {beforeChangeDetection: beforeChangeDetection}).then(src__core__linker__component_factory.ComponentRef$(E), dart.fn(componentRef => async.async(src__core__linker__component_factory.ComponentRef$(E), function*() {
      hostElement[$append](componentRef.location);
      yield ngZone.onTurnDone.first;
      yield async.Future.value();
      onErrorSub.cancel();
      if (caughtError != null) {
        return async.Future$(src__core__linker__component_factory.ComponentRef$(E)).error(caughtError.error, core.StackTrace.fromString(caughtError.stackTrace[$join]('\n')));
      }
      return componentRef;
    }), dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), [src__core__linker__component_factory.ComponentRef$(E)]))), dart.fnType(async.Future$(src__core__linker__component_factory.ComponentRef$(E)), []))));
  };
  dart.fn(src__bootstrap.bootstrapForTest, ComponentFactoryOfEAndElementAndFn__ToFutureOfComponentRefOfE());
  src__bootstrap._runAndLoadComponent = function(E, appRef, componentFactory, hostElement, appInjector, opts) {
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    let t = src__core__render__api.sharedStylesHost;
    t == null ? src__core__render__api.sharedStylesHost = new src__platform__dom__shared_styles_host.DomSharedStylesHost.new(html.document) : t;
    let componentRef = componentFactory.create(appInjector);
    let cdMode = src__core__linker__view_ref.ViewRefImpl.as(componentRef.hostView).appView.cdMode;
    if (!dart.test(src__core__change_detection__constants.isDefaultChangeDetectionStrategy(cdMode)) && cdMode !== src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways) {
      dart.throw(new core.UnsupportedError.new('The root component in an Angular test or application must use the ' + 'default form of change detection (ChangeDetectionStrategy.Default). ' + dart.str`Instead got ${src__core__linker__view_ref.ViewRefImpl.as(componentRef.hostView).appView.cdMode} ` + dart.str`on component ${dart.wrapType(E)}.`));
    }
    if (beforeChangeDetection != null) {
      beforeChangeDetection(componentRef.instance);
    }
    hostElement[$append](componentRef.location);
    appRef.registerChangeDetector(componentRef.changeDetectorRef);
    componentRef.onDestroy(dart.fn(() => {
      appRef.unregisterChangeDetector(componentRef.changeDetectorRef);
    }, VoidToNull()));
    appRef.tick();
    return async.Future$(src__core__linker__component_factory.ComponentRef$(E)).value(componentRef);
  };
  dart.fn(src__bootstrap._runAndLoadComponent, ApplicationRefImplAndComponentFactoryOfEAndElement__ToFutureOfComponentRefOfE());
  dart.trackLibraries("packages/angular_test/src/bootstrap.ddc", {
    "package:angular_test/src/bootstrap.dart": src__bootstrap
  }, '{"version":3,"sourceRoot":"","sources":["bootstrap.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+CAgB4B,SAAuB;AACjD,QAAS;AACT,kBAAI,SAAS,UAAQ,GAAE;AACrB,iBAAW,GAAG,iCAAmB;WAC5B;AACL,iBAAW,GAAG,6CAAkB,iBAAiB,CAAC,sBAChD,6CAAqB,EACrB,SAAS,gEACR,8CAAqB,WAAW;;AAErC,6BAAW,CAAC,WAAW;AACvB,UAAO,YAAW;EACpB;;;gDAWE,gBAAoC,EACpC,WAAmB,EACnB,YAA4B;QACvB;QACA,oEAAc;AAEnB,QAAI,gBAAgB,IAAI,MAAM;AAC5B,iBAAM,IAAI,0BAAqB,CAAC;;AAElC,QAAI,WAAW,IAAI,MAAM;AACvB,iBAAM,IAAI,0BAAqB,CAAC;;AAElC,QAAI,YAAY,IAAI,MAAM;AACxB,iBAAM,IAAI,0BAAqB,CAAC;;AAGlC,QAAM,cAAc,YAAY,CAAC,iCAAkB,CAAC,YAAY;AAChE,QAAyB,8DAAS,WAAW,IAAI,CAAC,wDAAc;AAChE,QAAY;AACZ,QAAa,gDAAS,WAAW,IAAI,CAAC,8CAAM;AAC5C,QAAM,aAAa,MAAM,QAAQ,OAAO,CAAC,QAAC,CAAC;AACzC,iBAAW,GAAG,CAAC;;AAIjB,uFAAO,MAAM,IAAI,wDAAkB,cAC1B,mCAAoB,IACzB,MAAM,EACN,gBAAgB,EAChB,WAAW,EACX,WAAW,0BACY,qBAAqB,OACxC,wDAAC,QAAC,YAA4B;AAGlC,iBAAW,SAAO,CAAC,YAAY,SAAS;AACxC,YAAM,MAAM,WAAW,MAAM;AAQ7B,YAAM,AAAI,kBAAY;AACtB,gBAAU,OAAO;AACjB,UAAI,WAAW,IAAI,MAAM;AACvB,cAAO,AAAI,2EAAY,CACrB,WAAW,MAAM,EACjB,AAAI,0BAAqB,CAAC,WAAW,WAAW,OAAK,CAAC;;AAG1D,YAAO,aAAY;IACrB;EAEJ;;oDAGE,MAAyB,EACzB,gBAAoC,EACpC,WAAmB,EACnB,WAAoB;QACf;AAGL,mDAAgB;0DAAK,IAAI,8DAAmB,CAAC,aAAQ;AACrD,QAAM,eAAe,gBAAgB,OAAO,CAAC,WAAW;AACxD,QAAM,oDAAU,YAAY,SAAS,SAAwB,OAAO;AACpE,mBAAK,uEAAgC,CAAC,MAAM,MACxC,MAAM,KAAI,8DAAuB,YAAY,EAAE;AACjD,iBAAM,IAAI,yBAAgB,CACtB,uEACA,yEACA,kEAAgB,YAAY,SAAS,SAAwB,OAAO,MACpE,wBAAe,gBAAC;;AAEtB,QAAI,qBAAqB,IAAI,MAAM;AACjC,2BAAqB,CAAC,YAAY,SAAS;;AAE7C,eAAW,SAAO,CAAC,YAAY,SAAS;AACxC,UAAM,uBAAuB,CAAC,YAAY,kBAAkB;AAC5D,gBAAY,UAAU,CAAC;AACrB,YAAM,yBAAyB,CAAC,YAAY,kBAAkB;;AAEhE,UAAM,KAAK;AACX,UAAO,AAAI,2EAAY,CAAC,YAAY;EACtC","file":"bootstrap.ddc.js"}');
  // Exports:
  return {
    src__bootstrap: src__bootstrap
  };
});

//# sourceMappingURL=bootstrap.ddc.js.map
