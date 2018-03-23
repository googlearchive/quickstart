define(['dart_sdk', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/di/providers', 'packages/angular/src/di/reflector', 'packages/angular/src/di/errors', 'packages/angular/src/core/di/decorators', 'packages/angular/src/di/module'], function(dart_sdk, optimizations, opaque_token, providers, reflector, errors, decorators, module) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__di__providers = providers.src__di__providers;
  const src__di__reflector = reflector.src__di__reflector;
  const src__di__errors = errors.src__di__errors;
  const src__core__di__decorators = decorators.src__core__di__decorators;
  const src__di__module = module.src__di__module;
  const _root = Object.create(null);
  const src__di__injector__runtime = Object.create(_root);
  const src__di__injector__map = Object.create(_root);
  const src__di__injector__empty = Object.create(_root);
  const src__di__injector__hierarchical = Object.create(_root);
  const src__di__injector__injector = Object.create(_root);
  const $values = dartx.values;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $length = dartx.length;
  const $add = dartx.add;
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ProviderTobool = () => (ProviderTobool = dart.constFn(dart.fnType(core.bool, [src__di__providers.Provider])))();
  let ProviderOfObject = () => (ProviderOfObject = dart.constFn(src__di__providers.Provider$(core.Object)))();
  let MapOfObject$ProviderOfObject = () => (MapOfObject$ProviderOfObject = dart.constFn(core.Map$(core.Object, ProviderOfObject())))();
  let ListOfProviderOfObject = () => (ListOfProviderOfObject = dart.constFn(core.List$(ProviderOfObject())))();
  let MapOfdynamic$ProviderOfObject = () => (MapOfdynamic$ProviderOfObject = dart.constFn(core.Map$(dart.dynamic, ProviderOfObject())))();
  let IterableOfProviderOfObject = () => (IterableOfProviderOfObject = dart.constFn(core.Iterable$(ProviderOfObject())))();
  let IterableOfProviderOfObjectTovoid = () => (IterableOfProviderOfObjectTovoid = dart.constFn(dart.fnType(dart.void, [IterableOfProviderOfObject()])))();
  let IdentityMapOfObject$ProviderOfObject = () => (IdentityMapOfObject$ProviderOfObject = dart.constFn(_js_helper.IdentityMap$(core.Object, ProviderOfObject())))();
  let JSArrayOfProviderOfObject = () => (JSArrayOfProviderOfObject = dart.constFn(_interceptors.JSArray$(ProviderOfObject())))();
  let ListOfObject__To_FlatProviders = () => (ListOfObject__To_FlatProviders = dart.constFn(dart.fnType(src__di__injector__runtime._FlatProviders, [ListOfObject()], [MapOfObject$ProviderOfObject(), ListOfProviderOfObject()])))();
  let MapOfObject$Object = () => (MapOfObject$Object = dart.constFn(core.Map$(core.Object, core.Object)))();
  let InjectorAndObjectToNull = () => (InjectorAndObjectToNull = dart.constFn(dart.fnType(core.Null, [src__di__injector__injector.Injector, core.Object])))();
  let const$;
  src__di__injector__runtime.ReflectiveInjector = class ReflectiveInjector extends core.Object {
    static resolveAndCreate(providersOrLists, parent) {
      if (parent === void 0) parent = const$ || (const$ = dart.const(new src__di__injector__empty.EmptyInjector.new()));
      let flatProviders = src__di__injector__runtime._flattenProviders(providersOrLists);
      if (dart.test(src__runtime__optimizations.isDevMode)) {
        src__di__injector__runtime._assertProviders(flatProviders.providers[$values]);
        src__di__injector__runtime._assertProviders(flatProviders.multiProviders);
      }
      return new src__di__injector__runtime._RuntimeInjector.new(flatProviders.providers, flatProviders.multiProviders, parent);
    }
  };
  (src__di__injector__runtime.ReflectiveInjector.new = function() {
  }).prototype = src__di__injector__runtime.ReflectiveInjector.prototype;
  dart.addTypeTests(src__di__injector__runtime.ReflectiveInjector);
  src__di__injector__runtime.ReflectiveInjector[dart.implements] = () => [src__di__injector__hierarchical.HierarchicalInjector];
  dart.setStaticMethodSignature(src__di__injector__runtime.ReflectiveInjector, () => ({resolveAndCreate: dart.fnType(src__di__injector__runtime.ReflectiveInjector, [ListOfObject()], [src__di__injector__hierarchical.HierarchicalInjector])}));
  src__di__injector__runtime._isMultiProvider = function(p) {
    return p.multi === true || src__core__di__opaque_token.MultiToken.is(p.token);
  };
  dart.fn(src__di__injector__runtime._isMultiProvider, ProviderTobool());
  const _providers = Symbol('_providers');
  const _multiProviders = Symbol('_multiProviders');
  const _instances = Symbol('_instances');
  const _resolveMulti = Symbol('_resolveMulti');
  const _resolveMeta = Symbol('_resolveMeta');
  const _resolveArgs = Symbol('_resolveArgs');
  let const$0;
  src__di__injector__injector.Injector = class Injector extends core.Object {
    static empty(parent) {
      return new src__di__injector__empty.EmptyInjector.new(parent);
    }
    static map(providers, parent) {
      return new src__di__injector__map.MapInjector.new(providers, parent);
    }
    get(token, notFoundValue) {
      if (notFoundValue === void 0) notFoundValue = src__di__injector__injector.throwIfNotFound;
      src__di__errors.debugInjectorEnter(token);
      let result = this.injectOptional(token, notFoundValue);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      src__di__errors.debugInjectorLeave(token);
      return result;
    }
  };
  (src__di__injector__injector.Injector.new = function() {
  }).prototype = src__di__injector__injector.Injector.prototype;
  dart.addTypeTests(src__di__injector__injector.Injector);
  dart.setMethodSignature(src__di__injector__injector.Injector, () => ({
    __proto__: dart.getMethods(src__di__injector__injector.Injector.__proto__),
    get: dart.fnType(dart.dynamic, [core.Object], [core.Object])
  }));
  src__di__injector__hierarchical.HierarchicalInjector = class HierarchicalInjector extends src__di__injector__injector.Injector {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    inject(T, token) {
      src__di__errors.debugInjectorEnter(token);
      let result = this.injectOptional(token);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      src__di__errors.debugInjectorLeave(token);
      return src__runtime__optimizations.unsafeCast(T, result);
    }
    injectOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      src__di__errors.debugInjectorEnter(token);
      let result = this.injectFromSelfOptional(token, orElse);
      if (core.identical(result, orElse)) {
        result = this.injectFromAncestryOptional(token, orElse);
      }
      src__di__errors.debugInjectorLeave(token);
      return result;
    }
    injectFromSelf(T, token) {
      let result = this.injectFromSelfOptional(token);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      return src__runtime__optimizations.unsafeCast(T, result);
    }
    injectFromParent(T, token) {
      let result = this.injectFromParentOptional(token);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      return src__runtime__optimizations.unsafeCast(T, result);
    }
    injectFromParentOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return this.parent.injectFromSelfOptional(token, orElse);
    }
    injectFromAncestry(T, token) {
      let result = this.injectFromAncestryOptional(token);
      if (result === src__di__injector__injector.throwIfNotFound) {
        return src__di__injector__injector.throwsNotFound(this, token);
      }
      return src__runtime__optimizations.unsafeCast(T, result);
    }
    injectFromAncestryOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return this.parent.injectOptional(token, orElse);
    }
  };
  (src__di__injector__hierarchical.HierarchicalInjector.new = function(parent) {
    if (parent === void 0) parent = null;
    this[parent$] = src__di__injector__hierarchical.HierarchicalInjector._check((() => {
      let l = parent;
      return l != null ? l : const$0 || (const$0 = dart.const(src__di__injector__injector.Injector.empty()));
    })());
    src__di__injector__hierarchical.HierarchicalInjector.__proto__.new.call(this);
  }).prototype = src__di__injector__hierarchical.HierarchicalInjector.prototype;
  (src__di__injector__hierarchical.HierarchicalInjector.maybeEmpty = function(parent) {
    if (parent === void 0) parent = null;
    this[parent$] = parent;
    src__di__injector__hierarchical.HierarchicalInjector.__proto__.new.call(this);
  }).prototype = src__di__injector__hierarchical.HierarchicalInjector.prototype;
  dart.addTypeTests(src__di__injector__hierarchical.HierarchicalInjector);
  const parent$ = Symbol("HierarchicalInjector.parent");
  dart.setMethodSignature(src__di__injector__hierarchical.HierarchicalInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__hierarchical.HierarchicalInjector.__proto__),
    inject: dart.gFnType(T => [T, [core.Object]]),
    injectOptional: dart.fnType(core.Object, [core.Object], [core.Object]),
    injectFromSelf: dart.gFnType(T => [T, [core.Object]]),
    injectFromParent: dart.gFnType(T => [T, [core.Object]]),
    injectFromParentOptional: dart.fnType(core.Object, [core.Object], [core.Object]),
    injectFromAncestry: dart.gFnType(T => [T, [core.Object]]),
    injectFromAncestryOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(src__di__injector__hierarchical.HierarchicalInjector, () => ({
    __proto__: dart.getFields(src__di__injector__hierarchical.HierarchicalInjector.__proto__),
    parent: dart.finalFieldType(src__di__injector__hierarchical.HierarchicalInjector)
  }));
  src__di__injector__runtime._RuntimeInjector = class _RuntimeInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      let instance = this[_instances][$_get](token);
      if (instance == null && !dart.test(this[_instances][$containsKey](instance))) {
        let provider = this[_providers][$_get](token);
        if (provider == null) {
          return orElse;
        }
        if (dart.test(src__di__injector__runtime._isMultiProvider(provider))) {
          return this[_instances][$_set](provider.token, this[_resolveMulti](provider));
        }
        this[_instances][$_set](token, instance = src__di__providers.buildAtRuntime(provider, this));
      }
      return instance;
    }
    resolveAndCreateChild(providersOrLists) {
      return src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(providersOrLists, this);
    }
    resolveAndInstantiate(providerOrType) {
      let provider = src__di__providers.Provider.is(providerOrType) ? providerOrType : src__di__providers.Provider.new(providerOrType, {useClass: src__runtime__optimizations.unsafeCast(core.Type, providerOrType)});
      return src__di__providers.buildAtRuntime(provider, this);
    }
    [_resolveArgs](token, deps) {
      if (deps === void 0) deps = null;
      let t = deps;
      t == null ? deps = src__di__reflector.getDependencies(token) : t;
      let resolved = core.List.new(deps[$length]);
      for (let i = 0, l = resolved[$length]; i < dart.notNull(l); i++) {
        let dep = deps[$_get](i);
        let result = null;
        if (core.List.is(dep)) {
          result = this[_resolveMeta](dep);
        } else {
          src__di__errors.debugInjectorEnter(dep);
          result = this.inject(core.Object, dep);
          src__di__errors.debugInjectorLeave(dep);
        }
        if (result === src__di__injector__injector.throwIfNotFound) {
          return src__di__injector__injector.throwsNotFound(this, dep);
        }
        resolved[$_set](i, result);
      }
      return resolved;
    }
    [_resolveMulti](provider) {
      let results = src__di__providers.listOfMulti(core.Object, provider);
      for (let other of this[_multiProviders]) {
        if (core.identical(other.token, provider.token)) {
          results[$add](src__di__providers.buildAtRuntime(other, this));
        }
      }
      return results;
    }
    [_resolveMeta](metadata) {
      let token = null;
      let isOptional = false;
      let isSkipSelf = false;
      let isSelf = false;
      let isHost = false;
      for (let n = 0, l = metadata[$length]; n < dart.notNull(l); n++) {
        let annotation = metadata[$_get](n);
        if (src__core__di__decorators.Inject.is(annotation)) {
          token = annotation.token;
        } else if (src__core__di__decorators.Optional.is(annotation)) {
          isOptional = true;
        } else if (src__core__di__decorators.SkipSelf.is(annotation)) {
          isSkipSelf = true;
        } else if (src__core__di__decorators.Self.is(annotation)) {
          isSelf = true;
        } else if (src__core__di__decorators.Host.is(annotation)) {
          isHost = true;
        } else {
          token = annotation;
        }
      }
      let result = null;
      src__di__errors.debugInjectorEnter(token);
      let orElse = isOptional ? null : src__di__injector__injector.throwIfNotFound;
      if (isSkipSelf) {
        result = this.injectFromAncestryOptional(token, orElse);
      } else if (isSelf) {
        result = this.injectFromSelfOptional(token, orElse);
      } else if (isHost) {
        result = this.injectFromParentOptional(token, orElse);
      } else {
        result = this.injectOptional(token, orElse);
      }
      if (result === src__di__injector__injector.throwIfNotFound) {
        src__di__injector__injector.throwsNotFound(this, token);
      }
      src__di__errors.debugInjectorLeave(token);
      return result;
    }
    useClass(clazz, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let factory = src__di__reflector.getFactory(clazz);
      return core.Function.apply(factory, this[_resolveArgs](clazz, deps));
    }
    useExisting(to) {
      return this.inject(core.Object, to);
    }
    useFactory(factory, opts) {
      let deps = opts && 'deps' in opts ? opts.deps : null;
      return core.Function.apply(factory, this[_resolveArgs](factory, deps));
    }
    useValue(value) {
      return value;
    }
  };
  (src__di__injector__runtime._RuntimeInjector.new = function(providers, multiProviders, parent) {
    this[_instances] = new _js_helper.IdentityMap.new();
    this[_providers] = providers;
    this[_multiProviders] = multiProviders;
    src__di__injector__runtime._RuntimeInjector.__proto__.new.call(this, parent);
    if (!(parent != null)) dart.assertFailed('A parent injector is always required.');
    this[_instances][$_set](dart.wrapType(src__di__injector__injector.Injector), this);
  }).prototype = src__di__injector__runtime._RuntimeInjector.prototype;
  dart.addTypeTests(src__di__injector__runtime._RuntimeInjector);
  src__di__injector__runtime._RuntimeInjector[dart.implements] = () => [src__di__injector__runtime.ReflectiveInjector, src__di__providers.RuntimeInjectorBuilder];
  dart.setMethodSignature(src__di__injector__runtime._RuntimeInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__runtime._RuntimeInjector.__proto__),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object]),
    resolveAndCreateChild: dart.fnType(src__di__injector__runtime.ReflectiveInjector, [ListOfObject()]),
    resolveAndInstantiate: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_resolveArgs]: dart.fnType(core.List$(core.Object), [core.Object], [ListOfObject()]),
    [_resolveMulti]: dart.fnType(core.List$(core.Object), [ProviderOfObject()]),
    [_resolveMeta]: dart.fnType(core.Object, [ListOfObject()]),
    useClass: dart.fnType(core.Object, [core.Type], {deps: ListOfObject()}),
    useExisting: dart.fnType(core.Object, [core.Object]),
    useFactory: dart.fnType(core.Object, [core.Function], {deps: ListOfObject()}),
    useValue: dart.fnType(core.Object, [core.Object])
  }));
  dart.setFieldSignature(src__di__injector__runtime._RuntimeInjector, () => ({
    __proto__: dart.getFields(src__di__injector__runtime._RuntimeInjector.__proto__),
    [_instances]: dart.finalFieldType(core.Map),
    [_providers]: dart.finalFieldType(MapOfObject$ProviderOfObject()),
    [_multiProviders]: dart.finalFieldType(ListOfProviderOfObject())
  }));
  src__di__injector__runtime._FlatProviders = class _FlatProviders extends core.Object {};
  (src__di__injector__runtime._FlatProviders.new = function(providers, multiProviders) {
    this.providers = providers;
    this.multiProviders = multiProviders;
  }).prototype = src__di__injector__runtime._FlatProviders.prototype;
  dart.addTypeTests(src__di__injector__runtime._FlatProviders);
  dart.setFieldSignature(src__di__injector__runtime._FlatProviders, () => ({
    __proto__: dart.getFields(src__di__injector__runtime._FlatProviders.__proto__),
    providers: dart.finalFieldType(MapOfdynamic$ProviderOfObject()),
    multiProviders: dart.finalFieldType(ListOfProviderOfObject())
  }));
  src__di__injector__runtime._assertProviders = function(providers) {
    for (let provider of providers) {
      if (provider.deps != null) {
        continue;
      }
      if (provider.useClass != null) {
        src__di__reflector.getFactory(provider.useClass);
      } else if (provider.useFactory != null) {
        src__di__reflector.getDependencies(provider.useFactory);
      } else if (dart.equals(provider.useFactory, "__noValueProvided__") && provider.useExisting == null && core.Type.is(provider.token)) {
        src__di__reflector.getFactory(src__runtime__optimizations.unsafeCast(core.Type, provider.token));
      }
    }
  };
  dart.fn(src__di__injector__runtime._assertProviders, IterableOfProviderOfObjectTovoid());
  src__di__injector__runtime._flattenProviders = function(providersOrLists, allProviders, multiProviders) {
    if (allProviders === void 0) allProviders = null;
    if (multiProviders === void 0) multiProviders = null;
    let t = allProviders;
    t == null ? allProviders = new (IdentityMapOfObject$ProviderOfObject()).new() : t;
    let t$ = multiProviders;
    t$ == null ? multiProviders = JSArrayOfProviderOfObject().of([]) : t$;
    for (let i = 0, len = providersOrLists[$length]; i < dart.notNull(len); i++) {
      let item = providersOrLists[$_get](i);
      if (core.List.is(item)) {
        src__di__injector__runtime._flattenProviders(item, allProviders, multiProviders);
      } else if (src__di__providers.Provider.is(item)) {
        if (dart.test(src__di__injector__runtime._isMultiProvider(item))) {
          multiProviders[$add](item);
        }
        allProviders[$_set](item.token, item);
      } else if (core.Type.is(item)) {
        allProviders[$_set](item, ProviderOfObject().new(item, {useClass: item}));
      } else if (src__di__module.Module.is(item)) {
        let providers = src__di__module.internalModuleToList(item);
        src__di__injector__runtime._flattenProviders(providers, allProviders, multiProviders);
      } else {
        if (!false) dart.assertFailed(dart.str`Unsupported: ${item}`);
      }
    }
    return new src__di__injector__runtime._FlatProviders.new(allProviders, multiProviders);
  };
  dart.fn(src__di__injector__runtime._flattenProviders, ListOfObject__To_FlatProviders());
  let const$1;
  const _providers$ = Symbol('_providers');
  src__di__injector__map.MapInjector = class MapInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      let result = this[_providers$][$_get](token);
      if (result == null) {
        if (token === dart.wrapType(src__di__injector__injector.Injector)) {
          return this;
        }
        result = orElse;
      }
      return result;
    }
  };
  (src__di__injector__map.MapInjector.new = function(providers, parent) {
    if (parent === void 0) parent = const$1 || (const$1 = dart.const(new src__di__injector__empty.EmptyInjector.new()));
    this[_providers$] = providers;
    src__di__injector__map.MapInjector.__proto__.new.call(this, parent);
  }).prototype = src__di__injector__map.MapInjector.prototype;
  dart.addTypeTests(src__di__injector__map.MapInjector);
  dart.setMethodSignature(src__di__injector__map.MapInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__map.MapInjector.__proto__),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.setFieldSignature(src__di__injector__map.MapInjector, () => ({
    __proto__: dart.getFields(src__di__injector__map.MapInjector.__proto__),
    [_providers$]: dart.finalFieldType(MapOfObject$Object())
  }));
  src__di__injector__empty.EmptyInjector = class EmptyInjector extends src__di__injector__hierarchical.HierarchicalInjector {
    injectFromSelfOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      return token === dart.wrapType(src__di__injector__injector.Injector) ? this : orElse;
    }
    injectFromParentOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (this.parent == null) {
        return orElse;
      }
      return this.parent.injectFromSelfOptional(token, orElse);
    }
    injectFromAncestryOptional(token, orElse) {
      if (orElse === void 0) orElse = src__di__injector__injector.throwIfNotFound;
      if (this.parent == null) {
        return orElse;
      }
      return this.parent.injectOptional(token, orElse);
    }
  };
  (src__di__injector__empty.EmptyInjector.new = function(parent) {
    if (parent === void 0) parent = null;
    src__di__injector__empty.EmptyInjector.__proto__.maybeEmpty.call(this, parent);
  }).prototype = src__di__injector__empty.EmptyInjector.prototype;
  dart.addTypeTests(src__di__injector__empty.EmptyInjector);
  dart.setMethodSignature(src__di__injector__empty.EmptyInjector, () => ({
    __proto__: dart.getMethods(src__di__injector__empty.EmptyInjector.__proto__),
    injectFromSelfOptional: dart.fnType(core.Object, [core.Object], [core.Object])
  }));
  dart.defineLazy(src__di__injector__injector, {
    /*src__di__injector__injector.throwIfNotFound*/get throwIfNotFound() {
      return dart.const(new core.Object.new());
    }
  });
  src__di__injector__injector.throwsNotFound = function(injector, token) {
    dart.throw(src__di__errors.noProviderError(token));
  };
  dart.fn(src__di__injector__injector.throwsNotFound, InjectorAndObjectToNull());
  src__di__injector__injector.InjectorFactory = dart.typedef('InjectorFactory', () => dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector]));
  const _providersOrModules = Symbol('_providersOrModules');
  src__di__injector__injector.GenerateInjector = class GenerateInjector extends core.Object {
    static fromModules(modules) {
      return new src__di__injector__injector.GenerateInjector.new(modules);
    }
  };
  (src__di__injector__injector.GenerateInjector.new = function(providersOrModules) {
    this[_providersOrModules] = providersOrModules;
  }).prototype = src__di__injector__injector.GenerateInjector.prototype;
  dart.addTypeTests(src__di__injector__injector.GenerateInjector);
  dart.setFieldSignature(src__di__injector__injector.GenerateInjector, () => ({
    __proto__: dart.getFields(src__di__injector__injector.GenerateInjector.__proto__),
    [_providersOrModules]: dart.finalFieldType(ListOfObject())
  }));
  dart.trackLibraries("packages/angular/src/di/injector/empty.ddc", {
    "package:angular/src/di/injector/runtime.dart": src__di__injector__runtime,
    "package:angular/src/di/injector/map.dart": src__di__injector__map,
    "package:angular/src/di/injector/empty.dart": src__di__injector__empty,
    "package:angular/src/di/injector/hierarchical.dart": src__di__injector__hierarchical,
    "package:angular/src/di/injector/injector.dart": src__di__injector__injector
  }, '{"version":3,"sourceRoot":"","sources":["runtime.dart","injector.dart","hierarchical.dart","map.dart","empty.dart"],"names":[],"mappings":"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","file":"empty.ddc.js"}');
  // Exports:
  return {
    src__di__injector__runtime: src__di__injector__runtime,
    src__di__injector__map: src__di__injector__map,
    src__di__injector__empty: src__di__injector__empty,
    src__di__injector__hierarchical: src__di__injector__hierarchical,
    src__di__injector__injector: src__di__injector__injector
  };
});

//# sourceMappingURL=empty.ddc.js.map
