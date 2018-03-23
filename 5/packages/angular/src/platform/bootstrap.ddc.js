define(['dart_sdk', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/di/injector/empty', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/testability/testability', 'packages/angular/src/core/application_tokens', 'packages/angular/src/platform/browser_common'], function(dart_sdk, app_view, modules, empty, application_ref, testability, application_tokens, browser_common) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__bootstrap__modules = modules.src__bootstrap__modules;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__di__injector__runtime = empty.src__di__injector__runtime;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__testability__testability = testability.src__core__testability__testability;
  const src__core__application_tokens = application_tokens.src__core__application_tokens;
  const src__platform__browser_common = browser_common.src__platform__browser_common;
  const _root = Object.create(null);
  const src__platform__bootstrap = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  let Type__ToFutureOfComponentRefOfT = () => (Type__ToFutureOfComponentRefOfT = dart.constFn(dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [core.Type], [core.List]])))();
  let JSArrayOfList = () => (JSArrayOfList = dart.constFn(_interceptors.JSArray$(core.List)))();
  let Type__ToFutureOfComponentRefOfT$ = () => (Type__ToFutureOfComponentRefOfT$ = dart.constFn(dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [core.Type], [core.List, core.Function]])))();
  let VoidToHtmlDocument = () => (VoidToHtmlDocument = dart.constFn(dart.fnType(html.HtmlDocument, [])))();
  let LinkedMapOfObject$Object = () => (LinkedMapOfObject$Object = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Object)))();
  let JSArrayOfFunction = () => (JSArrayOfFunction = dart.constFn(_interceptors.JSArray$(core.Function)))();
  let VoidToPlatformRef = () => (VoidToPlatformRef = dart.constFn(dart.fnType(src__core__application_ref.PlatformRef, [])))();
  src__platform__bootstrap.bootstrap = function(T, appComponentType, customProviders) {
    if (customProviders === void 0) customProviders = null;
    return dart.throw(new core.UnsupportedError.new('Using the \'angular\' transformer is required.\n\nPlease see https://webdev.dartlang.org/angular/tutorial for setup instructions,\nand ensure your \'pubspec.yaml\' file is configured to invoke the \'angular\'\ntransformer on your application\'s entry point.'));
  };
  dart.fn(src__platform__bootstrap.bootstrap, Type__ToFutureOfComponentRefOfT());
  src__platform__bootstrap.bootstrapStatic = function(T, appComponentType, customProviders, initReflector) {
    if (customProviders === void 0) customProviders = null;
    if (initReflector === void 0) initReflector = null;
    if (initReflector != null) {
      dart.dcall(initReflector);
    }
    let appProviders = customProviders != null && dart.test(customProviders[$isNotEmpty]) ? JSArrayOfList().of([src__bootstrap__modules.bootstrapLegacyModule, customProviders]) : src__bootstrap__modules.bootstrapLegacyModule;
    let platformRef = src__platform__bootstrap.browserStaticPlatform();
    let appInjector = src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(appProviders, src__di__injector__hierarchical.HierarchicalInjector._check(platformRef.injector));
    return src__core__application_ref.coreLoadAndBootstrap(T, appInjector, appComponentType);
  };
  dart.fn(src__platform__bootstrap.bootstrapStatic, Type__ToFutureOfComponentRefOfT$());
  src__platform__bootstrap.createDocument = function() {
    return html.document;
  };
  dart.fn(src__platform__bootstrap.createDocument, VoidToHtmlDocument());
  src__platform__bootstrap.browserStaticPlatform = function() {
    let platform = src__core__application_ref.getPlatform();
    if (platform == null) {
      platform = new src__core__application_ref.PlatformRefImpl.new();
      let testabilityRegistry = new src__core__testability__testability.TestabilityRegistry.new();
      src__core__application_ref.createPlatform(src__di__injector__injector.Injector.map(new (LinkedMapOfObject$Object()).from([src__core__application_tokens.PLATFORM_INITIALIZER, JSArrayOfFunction().of([src__platform__browser_common.createInitDomAdapter(testabilityRegistry)]), dart.wrapType(src__core__application_ref.PlatformRef), platform, dart.wrapType(src__core__application_ref.PlatformRefImpl), platform, dart.wrapType(src__core__testability__testability.TestabilityRegistry), testabilityRegistry])));
    }
    return platform;
  };
  dart.fn(src__platform__bootstrap.browserStaticPlatform, VoidToPlatformRef());
  dart.trackLibraries("packages/angular/src/platform/bootstrap.ddc", {
    "package:angular/src/platform/bootstrap.dart": src__platform__bootstrap
  }, '{"version":3,"sourceRoot":"","sources":["bootstrap.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;mDAsGE,gBAAqB,EACrB,eAAoB;oCAAf;UAEH,YAAM,IAAI,yBAAgB,CAAC;EAKmB;;yDAIhD,gBAAqB,EACrB,eAAoB,EACpB,aAAsB;oCADjB;kCACI;AAET,QAAI,aAAa,IAAI,MAAM;AACzB,8BAAa;;AAEf,QAAM,eAAe,eAAe,IAAI,kBAAQ,eAAe,aAAW,IACpE,oBAAC,6CAAqB,EAAE,eAAe,KACvC,6CAAqB;AAC3B,QAAM,cAAc,8CAAqB;AACzC,QAAM,cAAc,6CAAkB,iBAAiB,CACrD,YAAY,8DAEZ,WAAW,SAAS;AAEtB,UAAO,gDAAoB,IAAI,WAAW,EAAE,gBAAgB;EAC9D;;;UAEiC,cAAQ;;;;AAGvC,QAAI,WAAW,sCAAW;AAC1B,QAAI,QAAQ,IAAI,MAAM;AACpB,cAAQ,GAAG,IAAI,8CAAe;AAC9B,UAAM,sBAAsB,IAAI,2DAAmB;AACnD,+CAAc,CAAC,AAAI,wCAAY,CAAC,uCAC9B,kDAAoB,EAAE,wBAAC,kDAAoB,CAAC,mBAAmB,KAC/D,qDAAW,EAAE,QAAQ,EACrB,yDAAe,EAAE,QAAQ,EACzB,sEAAmB,EAAE,mBAAmB;;AAG5C,UAAO,SAAQ;EACjB","file":"bootstrap.ddc.js"}');
  // Exports:
  return {
    src__platform__bootstrap: src__platform__bootstrap
  };
});

//# sourceMappingURL=bootstrap.ddc.js.map
