define(['dart_sdk', 'packages/angular/src/di/injector/empty', 'packages/angular_test/src/errors/will_never_stabilize', 'packages/angular/src/core/zone/ng_zone'], function(dart_sdk, empty, will_never_stabilize, ng_zone) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__errors__will_never_stabilize = will_never_stabilize.src__errors__will_never_stabilize;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const _root = Object.create(null);
  const src__frontend__stabilizer = Object.create(_root);
  const $toList = dartx.toList;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $any = dartx.any;
  const $join = dartx.join;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let NgTestStabilizerToFutureOfbool = () => (NgTestStabilizerToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [src__frontend__stabilizer.NgTestStabilizer])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let ListOfNgTestStabilizer = () => (ListOfNgTestStabilizer = dart.constFn(core.List$(src__frontend__stabilizer.NgTestStabilizer)))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let NgZoneErrorToNull = () => (NgZoneErrorToNull = dart.constFn(dart.fnType(core.Null, [src__core__zone__ng_zone.NgZoneError])))();
  let JSArrayOfFutureOfNull = () => (JSArrayOfFutureOfNull = dart.constFn(_interceptors.JSArray$(FutureOfNull())))();
  src__frontend__stabilizer.NgTestStabilizerFactory = dart.typedef('NgTestStabilizerFactory', () => dart.fnType(src__frontend__stabilizer.NgTestStabilizer, [src__di__injector__injector.Injector]));
  src__frontend__stabilizer.NgTestStabilizer = class NgTestStabilizer extends core.Object {
    static all(stabilizers) {
      return new src__frontend__stabilizer._DelegatingNgTestStabilizer.new(stabilizers);
    }
    update(fn) {
      if (fn === void 0) fn = null;
      return FutureOfbool().sync(dart.fn(() => {
        if (fn != null) {
          fn();
        }
        return false;
      }, VoidTobool()));
    }
    stabilize(opts) {
      return async.async(core.Null, (function* stabilize() {
        let run = opts && 'run' in opts ? opts.run : null;
        let threshold = opts && 'threshold' in opts ? opts.threshold : 100;
        if (threshold == null) {
          dart.throw(new core.ArgumentError.notNull('threshold'));
        }
        let count = 0;
        function thresholdExceeded() {
          return count++ > dart.notNull(threshold);
        }
        dart.fn(thresholdExceeded, VoidTobool());
        while (!dart.test(yield this.update(run))) {
          if (dart.test(thresholdExceeded())) {
            dart.throw(new src__errors__will_never_stabilize.WillNeverStabilizeError.new(threshold));
          }
        }
      }).bind(this));
    }
  };
  (src__frontend__stabilizer.NgTestStabilizer.new = function() {
  }).prototype = src__frontend__stabilizer.NgTestStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer.NgTestStabilizer);
  dart.setMethodSignature(src__frontend__stabilizer.NgTestStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__stabilizer.NgTestStabilizer.__proto__),
    update: dart.fnType(async.Future$(core.bool), [], [VoidTovoid()]),
    stabilize: dart.fnType(async.Future$(core.Null), [], {run: VoidTovoid(), threshold: core.int})
  }));
  const _delegates = Symbol('_delegates');
  src__frontend__stabilizer._DelegatingNgTestStabilizer = class _DelegatingNgTestStabilizer extends src__frontend__stabilizer.NgTestStabilizer {
    update(fn) {
      return async.async(core.bool, (function* update() {
        if (fn === void 0) fn = null;
        if (dart.test(this[_delegates][$isEmpty])) {
          return false;
        }
        let results = (yield async.Future.wait(core.bool, this[_delegates][$map](FutureOfbool(), dart.fn(s => s.update(fn), NgTestStabilizerToFutureOfbool()))));
        return results[$any](dart.fn(r => r, boolTobool()));
      }).bind(this));
    }
  };
  (src__frontend__stabilizer._DelegatingNgTestStabilizer.new = function(stabilizers) {
    this[_delegates] = stabilizers[$toList]({growable: false});
    src__frontend__stabilizer._DelegatingNgTestStabilizer.__proto__.new.call(this);
  }).prototype = src__frontend__stabilizer._DelegatingNgTestStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer._DelegatingNgTestStabilizer);
  dart.setFieldSignature(src__frontend__stabilizer._DelegatingNgTestStabilizer, () => ({
    __proto__: dart.getFields(src__frontend__stabilizer._DelegatingNgTestStabilizer.__proto__),
    [_delegates]: dart.finalFieldType(ListOfNgTestStabilizer())
  }));
  const _ngZone = Symbol('_ngZone');
  const _waitForZone = Symbol('_waitForZone');
  src__frontend__stabilizer.NgZoneStabilizer = class NgZoneStabilizer extends src__frontend__stabilizer.NgTestStabilizer {
    get isStable() {
      return !(dart.test(this[_ngZone].hasPendingMacrotasks) || dart.test(this[_ngZone].hasPendingMicrotasks));
    }
    update(fn) {
      if (fn === void 0) fn = null;
      return FutureOfNull().sync(dart.fn(() => this[_waitForZone](fn), VoidToFutureOfNull())).then(core.bool, dart.fn(_ => this.isStable, ObjectTobool()));
    }
    [_waitForZone](fn) {
      return async.async(core.Null, (function* _waitForZone() {
        if (fn === void 0) fn = null;
        async.scheduleMicrotask(dart.fn(() => {
          this[_ngZone].runGuarded(fn != null ? fn : dart.fn(() => async.scheduleMicrotask(dart.fn(() => {
          }, VoidToNull())), VoidTovoid()));
        }, VoidToNull()));
        let caughtError = null;
        let finishedWithoutError = false;
        yield async.Future.any(core.Null, JSArrayOfFutureOfNull().of([this[_ngZone].onTurnDone.first, this[_ngZone].onError.first.then(core.Null, dart.fn(e => {
            if (!finishedWithoutError) {
              caughtError = e;
            }
          }, NgZoneErrorToNull()))]));
        yield FutureOfNull().new(dart.fn(() => {
        }, VoidToNull()));
        if (caughtError != null) {
          return FutureOfNull().error(caughtError.error, core.StackTrace.fromString(caughtError.stackTrace[$join]('\n')));
        }
        finishedWithoutError = true;
      }).bind(this));
    }
    toString() {
      return dart.str`${dart.wrapType(src__frontend__stabilizer.NgZoneStabilizer)} {isStable: ${this.isStable}}`;
    }
  };
  (src__frontend__stabilizer.NgZoneStabilizer.new = function(ngZone) {
    this[_ngZone] = ngZone;
    src__frontend__stabilizer.NgZoneStabilizer.__proto__.new.call(this);
  }).prototype = src__frontend__stabilizer.NgZoneStabilizer.prototype;
  dart.addTypeTests(src__frontend__stabilizer.NgZoneStabilizer);
  dart.setMethodSignature(src__frontend__stabilizer.NgZoneStabilizer, () => ({
    __proto__: dart.getMethods(src__frontend__stabilizer.NgZoneStabilizer.__proto__),
    [_waitForZone]: dart.fnType(async.Future$(core.Null), [], [VoidTovoid()])
  }));
  dart.setGetterSignature(src__frontend__stabilizer.NgZoneStabilizer, () => ({
    __proto__: dart.getGetters(src__frontend__stabilizer.NgZoneStabilizer.__proto__),
    isStable: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__frontend__stabilizer.NgZoneStabilizer, () => ({
    __proto__: dart.getFields(src__frontend__stabilizer.NgZoneStabilizer.__proto__),
    [_ngZone]: dart.finalFieldType(src__core__zone__ng_zone.NgZone)
  }));
  dart.defineExtensionMethods(src__frontend__stabilizer.NgZoneStabilizer, ['toString']);
  dart.trackLibraries("packages/angular_test/src/frontend/stabilizer.ddc", {
    "package:angular_test/src/frontend/stabilizer.dart": src__frontend__stabilizer
  }, '{"version":3,"sourceRoot":"","sources":["stabilizer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;eA4CI,WAAsC;AACpC,2EADF,WAAsC;IACT;WAsBV,EAAkB;yBAAF;AACnC,YAAO,AAAI,oBAAiB,CAAC;AAC3B,YAAI,EAAE,IAAI,MAAM;AACd,YAAE;;AAEJ,cAAO;;IAEX;;AAKkE;YAA1B;YAAS,2DAAW;AAC1D,YAAI,SAAS,IAAI,MAAM;AACrB,qBAAM,IAAI,0BAAqB,CAAC;;AAElC,YAAI,QAAQ;AACZ,iBAAK;gBAAuB,AAAQ,MAAH,kBAAK,SAAS;;gBAA1C;AACL,0BAAQ,MAAM,WAAM,CAAC,GAAG,IAAG;AACzB,wBAAI,iBAAiB,KAAI;AACvB,uBAAM,IAAI,6DAAuB,CAAC,SAAS;;;MAGjD;;;;EA1CwB;;;;;;;;;WAoDH,EAAkB;AAAG;2BAAL;AACnC,sBAAI,gBAAU,UAAQ,GAAE;AACtB,gBAAO;;AAET,YAAM,WAAU,MAAM,YAAM,KAAK,YAAC,gBAAU,MAAI,iBAAC,QAAC,CAAC,IAAK,CAAC,OAAO,CAAC,EAAE;AACnE,cAAO,QAAO,MAAI,CAAC,QAAC,CAAC,IAAK,CAAC;MAC7B;;;wEAV4B,WAAsC;IAC5D,gBAAU,GAAG,WAAW,SAAO,YAAW;;EAAM;;;;;;;;;;AAoBpD,YAAO,aAAE,aAAO,qBAAqB,eAAI,aAAO,qBAAqB;IACvE;WAGqB,EAAkB;yBAAF;AACnC,YAAO,AAAI,oBAAiB,CAAC,cAAM,kBAAY,CAAC,EAAE,8BAAO,YAAC,QAAC,CAAC,IAAK,aAAQ;IAC3E;mBAE2B,EAAS;AAAG;2BAAP;AAG9B,+BAAiB,CAAC;AAChB,uBAAO,WAAW,CAAC,EAAE,WAAF,EAAE,GAAI,cAAM,uBAAiB,CAAC;;;AAInD,YAAY;AACZ,YAAI,uBAAuB;AAC3B,cAAM,YAAM,IAAI,YAAC,4BACf,aAAO,WAAW,MAAM,EACxB,aAAO,QAAQ,MAAM,KAAK,YAAC,QAAC,CAAC;AAC3B,iBAAK,oBAAoB,EAAE;AACzB,yBAAW,GAAG,CAAC;;;AAMrB,cAAM,AAAI,kBAAM,CAAC;;AAGjB,YAAI,WAAW,IAAI,MAAM;AACvB,gBAAO,AAAI,qBAAY,CACrB,WAAW,MAAM,EACjB,AAAI,0BAAqB,CAAC,WAAW,WAAW,OAAK,CAAC;;AAK1D,4BAAoB,GAAG;MACzB;;;YAGqB,YAAE,yDAAgB,eAAa,aAAQ;IAAE;;6DA/ClC,MAAO;IAAP,aAAO,GAAP,MAAO;;EAAC","file":"stabilizer.ddc.js"}');
  // Exports:
  return {
    src__frontend__stabilizer: src__frontend__stabilizer
  };
});

//# sourceMappingURL=stabilizer.ddc.js.map
