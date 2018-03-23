define(['dart_sdk', 'packages/angular/src/runtime/optimizations'], function(dart_sdk, optimizations) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const _root = Object.create(null);
  const src__di__reflector = Object.create(_root);
  const $_set = dartx._set;
  const $_get = dartx._get;
  let LinkedMapOfObject$dynamic = () => (LinkedMapOfObject$dynamic = dart.constFn(_js_helper.LinkedMap$(core.Object, dart.dynamic)))();
  let ObjectToType = () => (ObjectToType = dart.constFn(dart.fnType(core.Type, [core.Object])))();
  let TypeAnddynamicTovoid = () => (TypeAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [core.Type, dart.dynamic])))();
  let TypeTodynamic = () => (TypeTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Type])))();
  let LinkedMapOfObject$Function = () => (LinkedMapOfObject$Function = dart.constFn(_js_helper.LinkedMap$(core.Object, core.Function)))();
  let ObjectAndFunctionTovoid = () => (ObjectAndFunctionTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.Function])))();
  let TypeToFunction = () => (TypeToFunction = dart.constFn(dart.fnType(core.Function, [core.Type])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ListOfListOfObject = () => (ListOfListOfObject = dart.constFn(core.List$(ListOfObject())))();
  let LinkedMapOfObject$ListOfListOfObject = () => (LinkedMapOfObject$ListOfListOfObject = dart.constFn(_js_helper.LinkedMap$(core.Object, ListOfListOfObject())))();
  let ObjectAndListOfListOfObjectTovoid = () => (ObjectAndListOfListOfObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, ListOfListOfObject()])))();
  let ObjectToListOfObject = () => (ObjectToListOfObject = dart.constFn(dart.fnType(ListOfObject(), [core.Object])))();
  dart.defineLazy(src__di__reflector, {
    /*src__di__reflector._components*/get _components() {
      return new (LinkedMapOfObject$dynamic()).new();
    },
    /*src__di__reflector.runtimeTypeProvider*/get runtimeTypeProvider() {
      return src__di__reflector._nullTypeProvider;
    },
    set runtimeTypeProvider(_) {}
  });
  src__di__reflector._nullTypeProvider = function(_) {
    if (!false) dart.assertFailed('' + 'This feature is no longer supported in AngularDart due to ' + 'the effects it has on code-size for highly optimized/size sensitive ' + 'applications.');
    dart.throw(new core.UnsupportedError.new(''));
  };
  dart.fn(src__di__reflector._nullTypeProvider, ObjectToType());
  src__di__reflector.registerComponent = function(type, component) {
    src__di__reflector._components[$_set](type, component);
  };
  dart.fn(src__di__reflector.registerComponent, TypeAnddynamicTovoid());
  src__di__reflector.getComponent = function(type) {
    let component = src__di__reflector._components[$_get](type);
    if (dart.test(src__runtime__optimizations.isDevMode) && component == null) {
      dart.throw(new core.StateError.new(dart.str`Could not find a component factory for ${type}.`));
    }
    return component;
  };
  dart.fn(src__di__reflector.getComponent, TypeTodynamic());
  dart.defineLazy(src__di__reflector, {
    /*src__di__reflector._factories*/get _factories() {
      return new (LinkedMapOfObject$Function()).new();
    }
  });
  src__di__reflector.registerFactory = function(typeOrFunc, factory) {
    src__di__reflector._factories[$_set](typeOrFunc, factory);
  };
  dart.fn(src__di__reflector.registerFactory, ObjectAndFunctionTovoid());
  src__di__reflector.getFactory = function(type) {
    let factory = src__di__reflector._factories[$_get](type);
    if (dart.test(src__runtime__optimizations.isDevMode) && factory == null) {
      dart.throw(new core.StateError.new(dart.str`Could not find a factory for ${type}.`));
    }
    return factory;
  };
  dart.fn(src__di__reflector.getFactory, TypeToFunction());
  dart.defineLazy(src__di__reflector, {
    /*src__di__reflector._dependencies*/get _dependencies() {
      return new (LinkedMapOfObject$ListOfListOfObject()).new();
    }
  });
  src__di__reflector.registerDependencies = function(invokable, dependencies) {
    src__di__reflector._dependencies[$_set](invokable, dependencies);
  };
  dart.fn(src__di__reflector.registerDependencies, ObjectAndListOfListOfObjectTovoid());
  let const$;
  src__di__reflector.getDependencies = function(object) {
    let l = src__di__reflector._dependencies[$_get](object);
    return l != null ? l : const$ || (const$ = dart.constList([], ListOfObject()));
  };
  dart.fn(src__di__reflector.getDependencies, ObjectToListOfObject());
  dart.trackLibraries("packages/angular/src/di/reflector.ddc", {
    "package:angular/src/di/reflector.dart": src__di__reflector
  }, '{"version":3,"sourceRoot":"","sources":["reflector.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;MAoBM,8BAAW;YAAG;;MAKW,sCAAmB;YAAG,qCAAiB;;;;kDAE/C,CAAQ;AAE7B,SACI,yBACA,KACA,+DACA,yEACA;AACJ,eAAM,IAAI,yBAAgB,CAAC;EAC7B;;kDAMuB,IAAS,EAAE,SAAsC;AACtE,kCAAW,QAAC,IAAI,EAAI,SAAS;EAC/B;;6CAG0C,IAAS;AACjD,QAAM,YAAY,8BAAW,QAAC,IAAI;AAClC,kBAAI,qCAAS,KAAI,SAAS,IAAI,MAAM;AAClC,iBAAM,IAAI,mBAAU,CAAC,kDAAyC,IAAI;;AAEpE,UAAO,UAAS;EAClB;;;MAEM,6BAAU;YAAG;;;gDAME,UAAiB,EAAE,OAAgB;AACtD,iCAAU,QAAC,UAAU,EAAI,OAAO;EAClC;;2CAGoB,IAAS;AAC3B,QAAM,UAAU,6BAAU,QAAC,IAAI;AAC/B,kBAAI,qCAAS,KAAI,OAAO,IAAI,MAAM;AAChC,iBAAM,IAAI,mBAAU,CAAC,wCAA+B,IAAI;;AAE1D,UAAO,QAAO;EAChB;;;MAEM,gCAAa;YAAG;;;qDAaI,SAAgB,EAAE,YAA+B;AACzE,oCAAa,QAAC,SAAS,EAAI,YAAY;EACzC;;;gDAG6B,MAAa;AACxC,YAAO,gCAAa,QAAC,MAAM;2BAAK;EAClC","file":"reflector.ddc.js"}');
  // Exports:
  return {
    src__di__reflector: src__di__reflector
  };
});

//# sourceMappingURL=reflector.ddc.js.map
