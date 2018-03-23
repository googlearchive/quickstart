define(['dart_sdk', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/debug/debug_app_view', 'packages/angular/src/debug/by', 'packages/angular/src/core/application_ref', 'packages/angular_test/src/frontend/stabilizer', 'packages/angular/src/di/injector/empty', 'packages/angular_test/src/errors/generic_type_missing', 'packages/angular_test/src/errors/test_already_running', 'packages/angular_test/src/bootstrap', 'packages/angular/experimental', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, app_view, debug_app_view, by, application_ref, stabilizer, empty, generic_type_missing, test_already_running, bootstrap, experimental, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_ref = app_view.src__core__linker__view_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__debug__debug_app_view = debug_app_view.src__debug__debug_app_view;
  const src__debug__debug_node = by.src__debug__debug_node;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__frontend__stabilizer = stabilizer.src__frontend__stabilizer;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__di__injector__hierarchical = empty.src__di__injector__hierarchical;
  const src__errors__generic_type_missing = generic_type_missing.src__errors__generic_type_missing;
  const src__errors__test_already_running = test_already_running.src__errors__test_already_running;
  const src__bootstrap = bootstrap.src__bootstrap;
  const experimental$ = experimental.experimental;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const src__frontend__fixture = Object.create(_root);
  const src__frontend__bed = Object.create(_root);
  const $remove = dartx.remove;
  const $parent = dartx.parent;
  const $map = dartx.map;
  const $text = dartx.text;
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  const $append = dartx.append;
  const $isEmpty = dartx.isEmpty;
  let NgTestFixtureAndObjectToT = () => (NgTestFixtureAndObjectToT = dart.constFn(dart.gFnType(T => [T, [src__frontend__fixture.NgTestFixture, core.Object]])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let DebugElementTobool = () => (DebugElementTobool = dart.constFn(dart.fnType(core.bool, [src__debug__debug_node.DebugElement])))();
  let DebugElementTobool$ = () => (DebugElementTobool$ = dart.constFn(dart.fnType(core.bool, [src__debug__debug_node.DebugElement])))();
  let IterableOfEAndIterableOfEToListOfE = () => (IterableOfEAndIterableOfEToListOfE = dart.constFn(dart.gFnType(E => [core.List$(E), [core.Iterable$(E), core.Iterable$(E)]])))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let NgTestBedOfTAndType__ToFutureOfNgTestFixtureOfT = () => (NgTestBedOfTAndType__ToFutureOfNgTestFixtureOfT = dart.constFn(dart.gFnType(T => [async.Future$(src__frontend__fixture.NgTestFixture$(T)), [src__frontend__bed.NgTestBed$(T), core.Type], {beforeChangeDetection: dart.fnType(dart.void, [T])}])))();
  let __ToNgTestBedOfT = () => (__ToNgTestBedOfT = dart.constFn(dart.gFnType(T => [src__frontend__bed.NgTestBed$(T), [], {host: html.Element, watchAngularLifecycle: core.bool}])))();
  let InjectorToNgTestStabilizer = () => (InjectorToNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector])))();
  let __ToInjector = () => (__ToInjector = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FnToNgTestStabilizer = () => (FnToNgTestStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [InjectorToNgTestStabilizer()])))();
  let __ToInjector$ = () => (__ToInjector$ = dart.constFn(dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector])))();
  let IterableOfObject = () => (IterableOfObject = dart.constFn(core.Iterable$(core.Object)))();
  let IterableOfInjectorToNgTestStabilizer = () => (IterableOfInjectorToNgTestStabilizer = dart.constFn(core.Iterable$(InjectorToNgTestStabilizer())))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ListOfInjectorToNgTestStabilizer = () => (ListOfInjectorToNgTestStabilizer = dart.constFn(core.List$(InjectorToNgTestStabilizer())))();
  let InjectorToNgZoneStabilizer = () => (InjectorToNgZoneStabilizer = dart.constFn(dart.fnType(src__frontend__stabilizer.NgZoneStabilizer, [src__di__injector__injector.Injector])))();
  let JSArrayOfInjectorToNgTestStabilizer = () => (JSArrayOfInjectorToNgTestStabilizer = dart.constFn(_interceptors.JSArray$(InjectorToNgTestStabilizer())))();
  const _rootComponentRef = Symbol('_rootComponentRef');
  src__frontend__fixture.injectFromFixture = function(T, fixture, tokenOrType) {
    return T._check(fixture[_rootComponentRef].injector.get(tokenOrType));
  };
  dart.lazyFn(src__frontend__fixture.injectFromFixture, () => NgTestFixtureAndObjectToT());
  const _applicationRef = Symbol('_applicationRef');
  const _testStabilizer = Symbol('_testStabilizer');
  const _isDebugMode = Symbol('_isDebugMode');
  const _debugElement = Symbol('_debugElement');
  const _is_NgTestFixture_default = Symbol('_is_NgTestFixture_default');
  src__frontend__fixture.NgTestFixture$ = dart.generic(T => {
    let NgTestFixtureOfT = () => (NgTestFixtureOfT = dart.constFn(src__frontend__fixture.NgTestFixture$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let TTovoid$ = () => (TTovoid$ = dart.constFn(dart.fnType(dart.void, [T])))();
    let TTovoid$0 = () => (TTovoid$0 = dart.constFn(dart.fnType(dart.void, [T])))();
    class NgTestFixture extends core.Object {
      static new(applicationRef, rootComponentRef, testStabilizer) {
        return new (NgTestFixtureOfT()).__(applicationRef, rootComponentRef, testStabilizer);
      }
      get [_isDebugMode]() {
        return src__debug__debug_app_view.DebugAppView.is(src__core__linker__view_ref.ViewRefImpl.as(this[_rootComponentRef].hostView).appView);
      }
      get [_debugElement]() {
        if (dart.test(this[_isDebugMode])) {
          let node = src__debug__debug_node.getDebugNode(this[_rootComponentRef].location);
          if (src__debug__debug_node.DebugElement.is(node)) {
            return node;
          }
          dart.throw(new core.StateError.new('Root is not an element'));
        }
        dart.throw(new core.UnsupportedError.new('Cannot utilize in codegen release mode'));
      }
      dispose() {
        return async.async(core.Null, (function* dispose() {
          yield this.update();
          this[_rootComponentRef].destroy();
          this[_rootComponentRef].location[$parent][$remove]();
          this[_applicationRef].dispose();
          src__frontend__bed.activeTest = null;
        }).bind(this));
      }
      query(E, test, run) {
        let t = this[_debugElement].query(test);
        let instance = t == null ? null : t.componentInstance;
        return this.update(dart.fn(_ => run(E._check(instance)), TTovoid()));
      }
      queryAll(E, test, run) {
        return this.update(dart.fn(_ => run(this[_debugElement].queryAll(test)[$map](E, dart.fn(e => E._check(e.componentInstance), dart.fnType(E, [src__debug__debug_node.DebugElement])))), TTovoid$()));
      }
      get rootElement() {
        return this[_rootComponentRef].location;
      }
      update(run) {
        if (run === void 0) run = null;
        return this[_testStabilizer].stabilize({run: dart.fn(() => {
            if (run != null) {
              FutureOfNull().sync(dart.fn(() => {
                run(T._check(this[_rootComponentRef].instance));
              }, VoidToNull()));
            }
          }, VoidToNull())});
      }
      get text() {
        return this.rootElement[$text];
      }
      get assertOnlyInstance() {
        return T._check(this[_rootComponentRef].instance);
      }
    }
    (NgTestFixture.__ = function(applicationRef, rootComponentRef, testStabilizer) {
      this[_applicationRef] = applicationRef;
      this[_rootComponentRef] = rootComponentRef;
      this[_testStabilizer] = testStabilizer;
    }).prototype = NgTestFixture.prototype;
    dart.addTypeTests(NgTestFixture);
    NgTestFixture.prototype[_is_NgTestFixture_default] = true;
    dart.setMethodSignature(NgTestFixture, () => ({
      __proto__: dart.getMethods(NgTestFixture.__proto__),
      dispose: dart.fnType(async.Future$(core.Null), []),
      query: dart.gFnType(E => [async.Future$(core.Null), [DebugElementTobool(), dart.fnType(dart.void, [E])]]),
      queryAll: dart.gFnType(E => [async.Future$(core.Null), [DebugElementTobool$(), dart.fnType(dart.void, [core.Iterable$(E)])]]),
      update: dart.fnType(async.Future$(core.Null), [], [TTovoid$0()])
    }));
    dart.setGetterSignature(NgTestFixture, () => ({
      __proto__: dart.getGetters(NgTestFixture.__proto__),
      [_isDebugMode]: dart.fnType(core.bool, []),
      [_debugElement]: dart.fnType(src__debug__debug_node.DebugElement, []),
      rootElement: dart.fnType(html.Element, []),
      text: dart.fnType(core.String, []),
      assertOnlyInstance: dart.fnType(T, [])
    }));
    dart.setFieldSignature(NgTestFixture, () => ({
      __proto__: dart.getFields(NgTestFixture.__proto__),
      [_applicationRef]: dart.finalFieldType(src__core__application_ref.ApplicationRef),
      [_rootComponentRef]: dart.finalFieldType(src__core__linker__component_factory.ComponentRef),
      [_testStabilizer]: dart.finalFieldType(src__frontend__stabilizer.NgTestStabilizer)
    }));
    return NgTestFixture;
  });
  src__frontend__fixture.NgTestFixture = src__frontend__fixture.NgTestFixture$();
  dart.addTypeTests(src__frontend__fixture.NgTestFixture, _is_NgTestFixture_default);
  dart.defineLazy(src__frontend__bed, {
    /*src__frontend__bed.activeTest*/get activeTest() {
      return null;
    },
    set activeTest(_) {}
  });
  src__frontend__bed._concat = function(E, a, b) {
    let _ = a[$toList]();
    _[$addAll](b);
    return _;
  };
  dart.fn(src__frontend__bed._concat, IterableOfEAndIterableOfEToListOfE());
  src__frontend__bed.disposeAnyRunningTest = function() {
    return async.async(core.Null, function* disposeAnyRunningTest() {
      let t = src__frontend__bed.activeTest;
      return t == null ? null : t.dispose();
    });
  };
  dart.fn(src__frontend__bed.disposeAnyRunningTest, VoidToFutureOfNull());
  const _createDynamic = Symbol('_createDynamic');
  src__frontend__bed.createDynamicFixture = function(T, bed, type, opts) {
    let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
    return bed[_createDynamic](type, {beforeChangeDetection: beforeChangeDetection});
  };
  dart.lazyFn(src__frontend__bed.createDynamicFixture, () => NgTestBedOfTAndType__ToFutureOfNgTestFixtureOfT());
  src__frontend__bed.createDynamicTestBed = function(T, opts) {
    let host = opts && 'host' in opts ? opts.host : null;
    let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
    return src__frontend__bed.NgTestBed$(T)._allowDynamicType({host: host, watchAngularLifecycle: watchAngularLifecycle});
  };
  dart.lazyFn(src__frontend__bed.createDynamicTestBed, () => __ToNgTestBedOfT());
  const _host = Symbol('_host');
  const _providers = Symbol('_providers');
  const _stabilizers = Symbol('_stabilizers');
  const _rootInjector = Symbol('_rootInjector');
  const _componentFactory = Symbol('_componentFactory');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  const _usesComponentFactory = Symbol('_usesComponentFactory');
  const _is_NgTestBed_default = Symbol('_is_NgTestBed_default');
  src__frontend__bed.NgTestBed$ = dart.generic(T => {
    let NgTestBedOfT = () => (NgTestBedOfT = dart.constFn(src__frontend__bed.NgTestBed$(T)))();
    let NgTestFixtureOfT = () => (NgTestFixtureOfT = dart.constFn(src__frontend__fixture.NgTestFixture$(T)))();
    let FutureOfNgTestFixtureOfT = () => (FutureOfNgTestFixtureOfT = dart.constFn(async.Future$(NgTestFixtureOfT())))();
    let ComponentRefOfT = () => (ComponentRefOfT = dart.constFn(src__core__linker__component_factory.ComponentRef$(T)))();
    let ComponentRefOfTToFutureOfNgTestFixtureOfT = () => (ComponentRefOfTToFutureOfNgTestFixtureOfT = dart.constFn(dart.fnType(FutureOfNgTestFixtureOfT(), [ComponentRefOfT()])))();
    let VoidToFutureOfNgTestFixtureOfT = () => (VoidToFutureOfNgTestFixtureOfT = dart.constFn(dart.fnType(FutureOfNgTestFixtureOfT(), [])))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let ComponentFactoryOfT = () => (ComponentFactoryOfT = dart.constFn(src__core__linker__component_factory.ComponentFactory$(T)))();
    class NgTestBed extends core.Object {
      static _defaultHost() {
        let host = html.Element.tag('ng-test-bed');
        html.document.body[$append](host);
        return host;
      }
      static _defaultRootInjector(parent) {
        if (parent === void 0) parent = null;
        return src__di__injector__injector.Injector.empty(src__di__injector__hierarchical.HierarchicalInjector._check(parent));
      }
      static forComponent(T, component, opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : dart.tagStatic(src__frontend__bed.NgTestBed, '_defaultRootInjector');
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        if (dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic))) {
          dart.throw(new src__errors__generic_type_missing.GenericTypeMissingError.new());
        }
        if (component == null) {
          dart.throw(new core.ArgumentError.notNull('component'));
        }
        return new (src__frontend__bed.NgTestBed$(T))._useComponentFactory({component: component, rootInjector: rootInjector, host: host, watchAngularLifecycle: watchAngularLifecycle});
      }
      static new(opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        if (dart.equals(dart.wrapType(T), dart.wrapType(dart.dynamic))) {
          dart.throw(new src__errors__generic_type_missing.GenericTypeMissingError.new());
        }
        return NgTestBedOfT()._allowDynamicType({host: host, watchAngularLifecycle: watchAngularLifecycle});
      }
      static _allowDynamicType(opts) {
        let host = opts && 'host' in opts ? opts.host : null;
        let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : true;
        return new (NgTestBedOfT()).__({host: host, providers: const$1 || (const$1 = dart.constList([], core.Object)), stabilizers: dart.test(watchAngularLifecycle) ? src__frontend__bed.NgTestBed._lifecycleStabilizers : const$2 || (const$2 = dart.constList([], InjectorToNgTestStabilizer()))});
      }
      get [_usesComponentFactory]() {
        return this[_componentFactory] != null;
      }
      addProviders(providers) {
        if (dart.test(this[_usesComponentFactory])) {
          dart.throw(new core.UnsupportedError.new('Use "addInjector" instead'));
        }
        return this.fork(T, {providers: src__frontend__bed._concat(core.Object, this[_providers], providers)});
      }
      addInjector(factory) {
        return this.fork(T, {rootInjector: dart.fn(parent => {
            if (parent === void 0) parent = null;
            return this[_rootInjector](factory(parent));
          }, __ToInjector())});
      }
      addStabilizers(stabilizers) {
        return this.fork(T, {stabilizers: src__frontend__bed._concat(InjectorToNgTestStabilizer(), this[_stabilizers], stabilizers)});
      }
      create(opts) {
        let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
        return this[_createDynamic](dart.wrapType(T), {beforeChangeDetection: beforeChangeDetection});
      }
      [_createDynamic](type, opts) {
        let beforeChangeDetection = opts && 'beforeChangeDetection' in opts ? opts.beforeChangeDetection : null;
        function _checkForActiveTest() {
          if (src__frontend__bed.activeTest != null) {
            dart.throw(new src__errors__test_already_running.TestAlreadyRunningError.new());
          }
        }
        dart.fn(_checkForActiveTest, VoidTovoid());
        _checkForActiveTest();
        return FutureOfNgTestFixtureOfT().sync(dart.fn(() => {
          _checkForActiveTest();
          return src__bootstrap.bootstrapForTest(T, this[_componentFactory] != null ? this[_componentFactory] : experimental$.typeToFactory(T, dart.wrapType(T)), this[_host] != null ? this[_host] : src__frontend__bed.NgTestBed._defaultHost(), this[_rootInjector], {beforeChangeDetection: beforeChangeDetection, addProviders: dart.test(this[_providers][$isEmpty]) ? dart.test(this[_usesComponentFactory]) ? this[_providers] : [[]] : this[_providers]}).then(NgTestFixtureOfT(), dart.fn(componentRef => async.async(NgTestFixtureOfT(), (function*() {
            _checkForActiveTest();
            let allStabilizers = src__frontend__stabilizer.NgTestStabilizer.all(this[_stabilizers][$map](src__frontend__stabilizer.NgTestStabilizer, dart.fn(s => s(componentRef.injector), FnToNgTestStabilizer())));
            yield allStabilizers.stabilize();
            let testFixture = NgTestFixtureOfT().new(src__core__application_ref.ApplicationRef._check(componentRef.injector.get(dart.wrapType(src__core__application_ref.ApplicationRef))), componentRef, allStabilizers);
            src__frontend__bed.activeTest = testFixture;
            return testFixture;
          }).bind(this)), ComponentRefOfTToFutureOfNgTestFixtureOfT()));
        }, VoidToFutureOfNgTestFixtureOfT()));
      }
      fork(E, opts) {
        dart.checkTypeBound(E, T, 'E');
        let host = opts && 'host' in opts ? opts.host : null;
        let component = opts && 'component' in opts ? opts.component : null;
        let providers = opts && 'providers' in opts ? opts.providers : null;
        let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
        let stabilizers = opts && 'stabilizers' in opts ? opts.stabilizers : null;
        return new (src__frontend__bed.NgTestBed$(E)).__({host: host != null ? host : this[_host], providers: providers != null ? providers : this[_providers], stabilizers: stabilizers != null ? stabilizers : this[_stabilizers], rootInjector: rootInjector != null ? rootInjector : this[_rootInjector], component: src__core__linker__component_factory.ComponentFactory$(E)._check(component != null ? component : this[_componentFactory])});
      }
      setComponent(E, component) {
        dart.checkTypeBound(E, T, 'E');
        return this.fork(E, {component: component});
      }
      setHost(host) {
        return this.fork(T, {host: host});
      }
    }
    (NgTestBed.__ = function(opts) {
      let host = opts && 'host' in opts ? opts.host : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let stabilizers = opts && 'stabilizers' in opts ? opts.stabilizers : null;
      let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
      let component = opts && 'component' in opts ? opts.component : null;
      this[_host] = host;
      this[_providers] = providers[$toList]();
      this[_stabilizers] = stabilizers[$toList]();
      let l = rootInjector;
      this[_rootInjector] = l != null ? l : dart.tagStatic(src__frontend__bed.NgTestBed, '_defaultRootInjector');
      this[_componentFactory] = component;
    }).prototype = NgTestBed.prototype;
    (NgTestBed._useComponentFactory = function(opts) {
      let host = opts && 'host' in opts ? opts.host : null;
      let component = opts && 'component' in opts ? opts.component : null;
      let rootInjector = opts && 'rootInjector' in opts ? opts.rootInjector : null;
      let watchAngularLifecycle = opts && 'watchAngularLifecycle' in opts ? opts.watchAngularLifecycle : null;
      this[_host] = host;
      this[_providers] = const$ || (const$ = dart.constList([], core.Object));
      this[_stabilizers] = dart.test(watchAngularLifecycle) ? src__frontend__bed.NgTestBed._lifecycleStabilizers : const$0 || (const$0 = dart.constList([], InjectorToNgTestStabilizer()));
      this[_rootInjector] = rootInjector;
      this[_componentFactory] = component;
    }).prototype = NgTestBed.prototype;
    dart.addTypeTests(NgTestBed);
    NgTestBed.prototype[_is_NgTestBed_default] = true;
    dart.setMethodSignature(NgTestBed, () => ({
      __proto__: dart.getMethods(NgTestBed.__proto__),
      addProviders: dart.fnType(src__frontend__bed.NgTestBed$(T), [IterableOfObject()]),
      addInjector: dart.fnType(src__frontend__bed.NgTestBed$(T), [__ToInjector$()]),
      addStabilizers: dart.fnType(src__frontend__bed.NgTestBed$(T), [IterableOfInjectorToNgTestStabilizer()]),
      create: dart.fnType(async.Future$(src__frontend__fixture.NgTestFixture$(T)), [], {beforeChangeDetection: TTovoid()}),
      [_createDynamic]: dart.fnType(async.Future$(src__frontend__fixture.NgTestFixture$(T)), [core.Type], {beforeChangeDetection: TTovoid()}),
      fork: dart.gFnType(E => [src__frontend__bed.NgTestBed$(E), [], {host: html.Element, component: src__core__linker__component_factory.ComponentFactory$(E), providers: IterableOfObject(), rootInjector: __ToInjector$(), stabilizers: IterableOfInjectorToNgTestStabilizer()}], E => [T]),
      setComponent: dart.gFnType(E => [src__frontend__bed.NgTestBed$(E), [src__core__linker__component_factory.ComponentFactory$(E)]], E => [T]),
      setHost: dart.fnType(src__frontend__bed.NgTestBed$(T), [html.Element])
    }));
    dart.setStaticMethodSignature(NgTestBed, () => ({
      _defaultHost: dart.fnType(html.Element, []),
      _defaultRootInjector: dart.fnType(src__di__injector__injector.Injector, [], [src__di__injector__injector.Injector]),
      forComponent: dart.gFnType(T => [src__frontend__bed.NgTestBed$(T), [src__core__linker__component_factory.ComponentFactory$(T)], {host: html.Element, rootInjector: __ToInjector$(), watchAngularLifecycle: core.bool}])
    }));
    dart.setGetterSignature(NgTestBed, () => ({
      __proto__: dart.getGetters(NgTestBed.__proto__),
      [_usesComponentFactory]: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(NgTestBed, () => ({
      __proto__: dart.getFields(NgTestBed.__proto__),
      [_host]: dart.finalFieldType(html.Element),
      [_providers]: dart.finalFieldType(ListOfObject()),
      [_stabilizers]: dart.finalFieldType(ListOfInjectorToNgTestStabilizer()),
      [_componentFactory]: dart.finalFieldType(ComponentFactoryOfT()),
      [_rootInjector]: dart.finalFieldType(__ToInjector$())
    }));
    return NgTestBed;
  });
  src__frontend__bed.NgTestBed = src__frontend__bed.NgTestBed$();
  dart.defineLazy(src__frontend__bed.NgTestBed, {
    /*src__frontend__bed.NgTestBed._lifecycleStabilizers*/get _lifecycleStabilizers() {
      return JSArrayOfInjectorToNgTestStabilizer().of([dart.fn(i => new src__frontend__stabilizer.NgZoneStabilizer.new(src__core__zone__ng_zone.NgZone._check(i.get(dart.wrapType(src__core__zone__ng_zone.NgZone)))), InjectorToNgZoneStabilizer())]);
    }
  });
  dart.addTypeTests(src__frontend__bed.NgTestBed, _is_NgTestBed_default);
  dart.trackLibraries("packages/angular_test/src/frontend/bed.ddc", {
    "package:angular_test/src/frontend/fixture.dart": src__frontend__fixture,
    "package:angular_test/src/frontend/bed.dart": src__frontend__bed
  }, '{"version":3,"sourceRoot":"","sources":["fixture.dart","bed.dart"],"names":[],"mappings":"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","file":"bed.ddc.js"}');
  // Exports:
  return {
    src__frontend__fixture: src__frontend__fixture,
    src__frontend__bed: src__frontend__bed
  };
});

//# sourceMappingURL=bed.ddc.js.map
