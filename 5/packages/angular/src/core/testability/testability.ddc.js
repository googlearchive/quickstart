define(['dart_sdk', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const src__core__testability__testability = Object.create(_root);
  const $isNotEmpty = dartx.isNotEmpty;
  const $removeLast = dartx.removeLast;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $toList = dartx.toList;
  const $values = dartx.values;
  const $keys = dartx.keys;
  let JSArrayOfFunction = () => (JSArrayOfFunction = dart.constFn(_interceptors.JSArray$(core.Function)))();
  let ObjectToNull = () => (ObjectToNull = dart.constFn(dart.fnType(core.Null, [core.Object])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfFunction = () => (ListOfFunction = dart.constFn(core.List$(core.Function)))();
  let LinkedMapOfdynamic$Testability = () => (LinkedMapOfdynamic$Testability = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, src__core__testability__testability.Testability)))();
  let MapOfdynamic$Testability = () => (MapOfdynamic$Testability = dart.constFn(core.Map$(dart.dynamic, src__core__testability__testability.Testability)))();
  const _ngZone = Symbol('_ngZone');
  const _pendingCount = Symbol('_pendingCount');
  const _isZoneStable = Symbol('_isZoneStable');
  const _didWork = Symbol('_didWork');
  const _callbacks = Symbol('_callbacks');
  const _watchAngularEvents = Symbol('_watchAngularEvents');
  const _runCallbacksIfReady = Symbol('_runCallbacksIfReady');
  src__core__testability__testability.Testability = class Testability extends core.Object {
    [_watchAngularEvents]() {
      this[_ngZone].onTurnStart.listen(dart.fn(_ => {
        this[_didWork] = true;
        this[_isZoneStable] = false;
      }, ObjectToNull()));
      this[_ngZone].runOutsideAngular(dart.fn(() => {
        this[_ngZone].onTurnDone.listen(dart.fn(_ => {
          src__core__zone__ng_zone.NgZone.assertNotInAngularZone();
          async.scheduleMicrotask(dart.fn(() => {
            this[_isZoneStable] = true;
            this[_runCallbacksIfReady]();
          }, VoidToNull()));
        }, ObjectToNull()));
      }, VoidToNull()));
    }
    increasePendingRequestCount() {
      this[_pendingCount] = dart.notNull(this[_pendingCount]) + 1;
      this[_didWork] = true;
      return this[_pendingCount];
    }
    decreasePendingRequestCount() {
      this[_pendingCount] = dart.notNull(this[_pendingCount]) - 1;
      if (!(dart.notNull(this[_pendingCount]) >= 0)) dart.assertFailed();
      this[_runCallbacksIfReady]();
      return this[_pendingCount];
    }
    isStable() {
      return dart.test(this[_isZoneStable]) && this[_pendingCount] === 0 && !dart.test(this[_ngZone].hasPendingMacrotasks);
    }
    [_runCallbacksIfReady]() {
      if (dart.test(this.isStable())) {
        async.scheduleMicrotask(dart.fn(() => {
          while (dart.test(this[_callbacks][$isNotEmpty])) {
            dart.dcall(this[_callbacks][$removeLast](), this[_didWork]);
          }
          this[_didWork] = false;
        }, VoidToNull()));
      } else {
        this[_didWork] = true;
      }
    }
    whenStable(callback) {
      this[_callbacks][$add](callback);
      this[_runCallbacksIfReady]();
    }
    getPendingRequestCount() {
      return this[_pendingCount];
    }
    findBindings(using, provider, exactMatch) {
      return [];
    }
    findProviders(using, provider, exactMatch) {
      return [];
    }
  };
  (src__core__testability__testability.Testability.new = function(ngZone) {
    this[_pendingCount] = 0;
    this[_isZoneStable] = true;
    this[_didWork] = false;
    this[_callbacks] = JSArrayOfFunction().of([]);
    this[_ngZone] = ngZone;
    this[_watchAngularEvents]();
  }).prototype = src__core__testability__testability.Testability.prototype;
  dart.addTypeTests(src__core__testability__testability.Testability);
  dart.setMethodSignature(src__core__testability__testability.Testability, () => ({
    __proto__: dart.getMethods(src__core__testability__testability.Testability.__proto__),
    [_watchAngularEvents]: dart.fnType(dart.void, []),
    increasePendingRequestCount: dart.fnType(core.num, []),
    decreasePendingRequestCount: dart.fnType(core.num, []),
    isStable: dart.fnType(core.bool, []),
    [_runCallbacksIfReady]: dart.fnType(dart.void, []),
    whenStable: dart.fnType(dart.void, [core.Function]),
    getPendingRequestCount: dart.fnType(core.num, []),
    findBindings: dart.fnType(core.List, [dart.dynamic, core.String, core.bool]),
    findProviders: dart.fnType(core.List, [dart.dynamic, core.String, core.bool])
  }));
  dart.setFieldSignature(src__core__testability__testability.Testability, () => ({
    __proto__: dart.getFields(src__core__testability__testability.Testability.__proto__),
    [_ngZone]: dart.fieldType(src__core__zone__ng_zone.NgZone),
    [_pendingCount]: dart.fieldType(core.num),
    [_isZoneStable]: dart.fieldType(core.bool),
    [_didWork]: dart.fieldType(core.bool),
    [_callbacks]: dart.finalFieldType(ListOfFunction())
  }));
  const _applications = Symbol('_applications');
  const _testabilityGetter = Symbol('_testabilityGetter');
  src__core__testability__testability.TestabilityRegistry = class TestabilityRegistry extends core.Object {
    setTestabilityGetter(getter) {
      this[_testabilityGetter] = getter;
      getter.addToWindow(this);
    }
    registerApplication(token, testability) {
      this[_applications][$_set](token, testability);
    }
    getTestability(elem) {
      return this[_applications][$_get](elem);
    }
    getAllTestabilities() {
      return this[_applications][$values][$toList]();
    }
    getAllRootElements() {
      return this[_applications][$keys][$toList]();
    }
    findTestabilityInTree(elem, findInAncestors) {
      if (findInAncestors === void 0) findInAncestors = true;
      return this[_testabilityGetter].findTestabilityInTree(this, elem, findInAncestors);
    }
  };
  (src__core__testability__testability.TestabilityRegistry.new = function() {
    this[_applications] = new (LinkedMapOfdynamic$Testability()).new();
    this[_testabilityGetter] = new src__core__testability__testability._NoopGetTestability.new();
  }).prototype = src__core__testability__testability.TestabilityRegistry.prototype;
  dart.addTypeTests(src__core__testability__testability.TestabilityRegistry);
  dart.setMethodSignature(src__core__testability__testability.TestabilityRegistry, () => ({
    __proto__: dart.getMethods(src__core__testability__testability.TestabilityRegistry.__proto__),
    setTestabilityGetter: dart.fnType(dart.void, [src__core__testability__testability.GetTestability]),
    registerApplication: dart.fnType(dart.void, [dart.dynamic, src__core__testability__testability.Testability]),
    getTestability: dart.fnType(src__core__testability__testability.Testability, [dart.dynamic]),
    getAllTestabilities: dart.fnType(core.List$(src__core__testability__testability.Testability), []),
    getAllRootElements: dart.fnType(core.List, []),
    findTestabilityInTree: dart.fnType(src__core__testability__testability.Testability, [dart.dynamic], [core.bool])
  }));
  dart.setFieldSignature(src__core__testability__testability.TestabilityRegistry, () => ({
    __proto__: dart.getFields(src__core__testability__testability.TestabilityRegistry.__proto__),
    [_applications]: dart.finalFieldType(MapOfdynamic$Testability()),
    [_testabilityGetter]: dart.fieldType(src__core__testability__testability.GetTestability)
  }));
  src__core__testability__testability.GetTestability = class GetTestability extends core.Object {};
  (src__core__testability__testability.GetTestability.new = function() {
  }).prototype = src__core__testability__testability.GetTestability.prototype;
  dart.addTypeTests(src__core__testability__testability.GetTestability);
  src__core__testability__testability._NoopGetTestability = class _NoopGetTestability extends core.Object {
    addToWindow(registry) {}
    findTestabilityInTree(registry, elem, findInAncestors) {
      return null;
    }
  };
  (src__core__testability__testability._NoopGetTestability.new = function() {
  }).prototype = src__core__testability__testability._NoopGetTestability.prototype;
  dart.addTypeTests(src__core__testability__testability._NoopGetTestability);
  src__core__testability__testability._NoopGetTestability[dart.implements] = () => [src__core__testability__testability.GetTestability];
  dart.setMethodSignature(src__core__testability__testability._NoopGetTestability, () => ({
    __proto__: dart.getMethods(src__core__testability__testability._NoopGetTestability.__proto__),
    addToWindow: dart.fnType(dart.void, [src__core__testability__testability.TestabilityRegistry]),
    findTestabilityInTree: dart.fnType(src__core__testability__testability.Testability, [src__core__testability__testability.TestabilityRegistry, dart.dynamic, core.bool])
  }));
  dart.trackLibraries("packages/angular/src/core/testability/testability.ddc", {
    "package:angular/src/core/testability/testability.dart": src__core__testability__testability
  }, '{"version":3,"sourceRoot":"","sources":["testability.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0BI,mBAAO,YAAY,OAAO,CAAC,QAAC,CAAC;AAC3B,sBAAQ,GAAG;AACX,2BAAa,GAAG;;AAElB,mBAAO,kBAAkB,CAAC;AACxB,qBAAO,WAAW,OAAO,CAAC,QAAC,CAAC;AAC1B,yCAAM,uBAAuB;AAC7B,iCAAiB,CAAC;AAChB,+BAAa,GAAG;AAChB,sCAAoB;;;;IAI5B;;AAGE,yBAAa,GA1CjB,aA0CI,mBAAa,IAAI;AACjB,oBAAQ,GAAG;AACX,YAAO,oBAAa;IACtB;;AAGE,yBAAa,GAhDjB,aAgDI,mBAAa,IAAI;AAEjB,YAAqB,aAAd,mBAAa,KAAI;AACxB,gCAAoB;AACpB,YAAO,oBAAa;IACtB;;AAGE,YAA2C,WAApC,mBAAa,KAAI,mBAAa,KAAI,gBAAM,aAAO,qBAAqB;IAC7E;;AAGE,oBAAI,aAAQ,KAAI;AAEd,+BAAiB,CAAC;AAChB,2BAAO,gBAAU,aAAW,GAAE;AAC5B,uBAAC,gBAAU,aAAW,IAAI,cAAQ;;AAEpC,wBAAQ,GAAG;;aAER;AAEL,sBAAQ,GAAG;;IAEf;eAEgB,QAAiB;AAC/B,sBAAU,MAAI,CAAC,QAAQ;AACvB,gCAAoB;IACtB;;AAGE,YAAO,oBAAa;IACtB;iBAE2B,KAAa,EAAE,QAAe,EAAE,UAAe;AAExE,YAAO;IACT;kBAE4B,KAAa,EAAE,QAAe,EAAE,UAAe;AAEzE,YAAO;IACT;;kEAtEiB,MAAO;IATpB,mBAAa,GAAG;IACf,mBAAa,GAAG;IAKhB,cAAQ,GAAG;IAEK,gBAAU,GAAG;IACjB,aAAO,GAAP,MAAO;AACtB,6BAAmB;EACrB;;;;;;;;;;;;;;;;;;;;;;;;;yBA+E0B,MAAqB;AAC7C,8BAAuB,GAAG,MAAM;AAChC,YAAM,YAAY,CAAC;IACrB;wBAEyB,KAAa,EAAE,WAAuB;AAC7D,yBAAa,QAAC,KAAK,EAAI,WAAW;IACpC;mBAE2B,IAAY;AACrC,YAAO,oBAAa,QAAC,IAAI;IAC3B;;YAE2C,oBAAa,SAAO,SAAO;IAAE;;YAElC,oBAAa,OAAK,SAAO;IAAE;0BAE/B,IAAY,EACzC,eAA2B;sCAAtB,kBAAkB;AAC1B,YAAO,yBAAkB,sBAAsB,CAC3C,MAAM,IAAI,EAAE,eAAe;IACjC;;;IA1BM,mBAAa,GAAG;IACP,wBAAkB,GAAG,IAAI,2DAAmB;EA0B7D;;;;;;;;;;;;;;;;;;EAQA;;;gBAGmB,QAA4B,GAAG;0BAE5C,QAA4B,EAAE,IAAY,EAAE,eAAoB;AAClE,YAAO;IACT;;;EAE2B","file":"testability.ddc.js"}');
  // Exports:
  return {
    src__core__testability__testability: src__core__testability__testability
  };
});

//# sourceMappingURL=testability.ddc.js.map
