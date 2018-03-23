define(['dart_sdk', 'packages/stack_trace/src/chain'], function(dart_sdk, chain) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__chain = chain.src__chain;
  const src__trace = chain.src__trace;
  const _root = Object.create(null);
  const src__core__zone__ng_zone = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $remove = dartx.remove;
  const $isNotEmpty = dartx.isNotEmpty;
  const $add = dartx.add;
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamControllerOfNgZoneError = () => (StreamControllerOfNgZoneError = dart.constFn(async.StreamController$(src__core__zone__ng_zone.NgZoneError)))();
  let JSArrayOfTimer = () => (JSArrayOfTimer = dart.constFn(_interceptors.JSArray$(async.Timer)))();
  let VoidToZone = () => (VoidToZone = dart.constFn(dart.fnType(async.Zone, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let TraceToString = () => (TraceToString = dart.constFn(dart.fnType(core.String, [src__trace.Trace])))();
  let ZoneAndZoneDelegateAndZone__Tovoid = () => (ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.Object, core.StackTrace])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let ListOfTimer = () => (ListOfTimer = dart.constFn(core.List$(async.Timer)))();
  dart.defineLazy(src__core__zone__ng_zone, {
    /*src__core__zone__ng_zone.onEnterAndonLeaveInsideParentRun*/get onEnterAndonLeaveInsideParentRun() {
      return false;
    },
    set onEnterAndonLeaveInsideParentRun(_) {}
  });
  const _onTurnStart = Symbol('_onTurnStart');
  const _onMicrotaskEmpty = Symbol('_onMicrotaskEmpty');
  const _onTurnDone = Symbol('_onTurnDone');
  const _onError = Symbol('_onError');
  const _outerZone = Symbol('_outerZone');
  const _innerZone = Symbol('_innerZone');
  const _hasPendingMicrotasks = Symbol('_hasPendingMicrotasks');
  const _hasPendingMacrotasks = Symbol('_hasPendingMacrotasks');
  const _isStable = Symbol('_isStable');
  const _nesting = Symbol('_nesting');
  const _isRunning = Symbol('_isRunning');
  const _disposed = Symbol('_disposed');
  const _pendingMicrotasks = Symbol('_pendingMicrotasks');
  const _pendingTimers = Symbol('_pendingTimers');
  const _createInnerZone = Symbol('_createInnerZone');
  const _onErrorWithLongStackTrace = Symbol('_onErrorWithLongStackTrace');
  const _onErrorWithoutLongStackTrace = Symbol('_onErrorWithoutLongStackTrace');
  const _scheduleMicrotask = Symbol('_scheduleMicrotask');
  const _runInside = Symbol('_runInside');
  const _runUnaryInside = Symbol('_runUnaryInside');
  const _runBinaryInside = Symbol('_runBinaryInside');
  const _createTimer = Symbol('_createTimer');
  const _run = Symbol('_run');
  const _runUnary = Symbol('_runUnary');
  const _runBinary = Symbol('_runBinary');
  const _setMicrotask = Symbol('_setMicrotask');
  const _onLeave = Symbol('_onLeave');
  const _onEnter = Symbol('_onEnter');
  const _checkStable = Symbol('_checkStable');
  const _setMacrotask = Symbol('_setMacrotask');
  src__core__zone__ng_zone.NgZone = class NgZone extends core.Object {
    static isInAngularZone() {
      return dart.equals(async.Zone.current._get('isAngularZone'), true);
    }
    static assertInAngularZone() {
      if (!dart.test(src__core__zone__ng_zone.NgZone.isInAngularZone())) {
        dart.throw(core.Exception.new("Expected to be in Angular Zone, but it is not!"));
      }
    }
    static assertNotInAngularZone() {
      if (dart.test(src__core__zone__ng_zone.NgZone.isInAngularZone())) {
        dart.throw(core.Exception.new("Expected to not be in Angular Zone, but it is!"));
      }
    }
    get inInnerZone() {
      return dart.equals(async.Zone.current, this[_innerZone]);
    }
    get inOuterZone() {
      return dart.equals(async.Zone.current, this[_outerZone]);
    }
    [_createInnerZone](zone, opts) {
      let handleUncaughtError = opts && 'handleUncaughtError' in opts ? opts.handleUncaughtError : null;
      if (dart.test(src__core__zone__ng_zone.onEnterAndonLeaveInsideParentRun)) {
        return zone.fork({specification: async.ZoneSpecification.new({scheduleMicrotask: dart.bind(this, _scheduleMicrotask), run: dart.bind(this, _runInside), runUnary: dart.bind(this, _runUnaryInside), runBinary: dart.bind(this, _runBinaryInside), handleUncaughtError: handleUncaughtError, createTimer: dart.bind(this, _createTimer)}), zoneValues: new _js_helper.LinkedMap.from(['isAngularZone', true])});
      }
      return zone.fork({specification: async.ZoneSpecification.new({scheduleMicrotask: dart.bind(this, _scheduleMicrotask), run: dart.bind(this, _run), runUnary: dart.bind(this, _runUnary), runBinary: dart.bind(this, _runBinary), handleUncaughtError: handleUncaughtError, createTimer: dart.bind(this, _createTimer)}), zoneValues: new _js_helper.LinkedMap.from(['isAngularZone', true])});
    }
    [_scheduleMicrotask](self, parent, zone, fn) {
      if (this[_pendingMicrotasks] === 0) {
        this[_setMicrotask](true);
      }
      this[_pendingMicrotasks] = dart.notNull(this[_pendingMicrotasks]) + 1;
      let safeMicrotask = () => {
        try {
          fn();
        } finally {
          this[_pendingMicrotasks] = dart.notNull(this[_pendingMicrotasks]) - 1;
          if (this[_pendingMicrotasks] === 0) {
            this[_setMicrotask](false);
          }
        }
      };
      dart.fn(safeMicrotask, VoidToNull());
      parent.scheduleMicrotask(zone, safeMicrotask);
    }
    [_run](R, self, parent, zone, fn) {
      try {
        this[_onEnter]();
        return parent.run(R, zone, fn);
      } finally {
        this[_onLeave]();
      }
    }
    [_runUnary](R, T, self, parent, zone, fn, arg) {
      try {
        this[_onEnter]();
        return parent.runUnary(R, T, zone, fn, arg);
      } finally {
        this[_onLeave]();
      }
    }
    [_runBinary](R, T1, T2, self, parent, zone, fn, arg1, arg2) {
      try {
        this[_onEnter]();
        return parent.runBinary(R, T1, T2, zone, fn, arg1, arg2);
      } finally {
        this[_onLeave]();
      }
    }
    [_runInside](R, self, parent, zone, fn) {
      return parent.run(R, zone, dart.fn(() => {
        try {
          this[_onEnter]();
          return fn();
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(R, [])));
    }
    [_runUnaryInside](R, T, self, parent, zone, fn, arg) {
      return parent.runUnary(R, T, zone, dart.fn(arg => {
        try {
          this[_onEnter]();
          return fn(arg);
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(R, [T])), arg);
    }
    [_runBinaryInside](R, T1, T2, self, parent, zone, fn, arg1, arg2) {
      return parent.runBinary(R, T1, T2, zone, dart.fn((arg1, arg2) => {
        try {
          this[_onEnter]();
          return fn(arg1, arg2);
        } finally {
          this[_onLeave]();
        }
      }, dart.fnType(R, [T1, T2])), arg1, arg2);
    }
    [_onEnter]() {
      this[_nesting] = dart.notNull(this[_nesting]) + 1;
      if (dart.test(this[_isStable])) {
        this[_isStable] = false;
        this[_isRunning] = true;
        this[_onTurnStart].add(null);
      }
    }
    [_onLeave]() {
      this[_nesting] = dart.notNull(this[_nesting]) - 1;
      this[_checkStable]();
    }
    [_onErrorWithLongStackTrace](error, chain) {
      let traces = chain.terse.traces[$map](core.String, dart.fn(t => dart.toString(t), TraceToString()))[$toList]();
      this[_onError].add(new src__core__zone__ng_zone.NgZoneError.new(error, traces));
    }
    [_onErrorWithoutLongStackTrace](self, parent, zone, error, trace) {
      this[_onError].add(new src__core__zone__ng_zone.NgZoneError.new(error, [dart.toString(trace)]));
    }
    [_createTimer](self, parent, zone, duration, fn) {
      let wrappedTimer = null;
      let cb = () => {
        try {
          fn();
        } finally {
          this[_pendingTimers][$remove](wrappedTimer);
          this[_setMacrotask](this[_pendingTimers][$isNotEmpty]);
        }
      };
      dart.fn(cb, VoidToNull());
      let timer = parent.createTimer(zone, duration, cb);
      wrappedTimer = new src__core__zone__ng_zone.WrappedTimer.new(timer);
      wrappedTimer.addOnCancelCb(dart.fn(() => {
        this[_pendingTimers][$remove](wrappedTimer);
        this[_setMacrotask](this[_pendingTimers][$isNotEmpty]);
      }, VoidToNull()));
      this[_pendingTimers][$add](wrappedTimer);
      this[_setMacrotask](true);
      return wrappedTimer;
    }
    [_setMicrotask](hasMicrotasks) {
      this[_hasPendingMicrotasks] = hasMicrotasks;
      this[_checkStable]();
    }
    [_setMacrotask](hasMacrotasks) {
      this[_hasPendingMacrotasks] = hasMacrotasks;
    }
    [_checkStable]() {
      if (this[_nesting] === 0) {
        if (!dart.test(this[_hasPendingMicrotasks]) && !dart.test(this[_isStable])) {
          try {
            this[_nesting] = dart.notNull(this[_nesting]) + 1;
            this[_isRunning] = false;
            if (!dart.test(this[_disposed])) this[_onMicrotaskEmpty].add(null);
          } finally {
            this[_nesting] = dart.notNull(this[_nesting]) - 1;
            if (!dart.test(this[_hasPendingMicrotasks])) {
              try {
                this.runOutsideAngular(dart.fn(() => {
                  if (!dart.test(this[_disposed])) {
                    this[_onTurnDone].add(null);
                  }
                }, VoidToNull()));
              } finally {
                this[_isStable] = true;
              }
            }
          }
        }
      }
    }
    get hasPendingMicrotasks() {
      return this[_hasPendingMicrotasks];
    }
    get hasPendingMacrotasks() {
      return this[_hasPendingMacrotasks];
    }
    run(R, fn) {
      return this[_innerZone].run(R, fn);
    }
    runGuarded(fn) {
      return this[_innerZone].runGuarded(fn);
    }
    runOutsideAngular(fn) {
      return this[_outerZone].run(dart.dynamic, fn);
    }
    get isRunning() {
      return this[_isRunning];
    }
    get onError() {
      return this[_onError].stream;
    }
    get onMicrotaskEmpty() {
      return this[_onMicrotaskEmpty].stream;
    }
    get onTurnStart() {
      return this[_onTurnStart].stream;
    }
    get onTurnDone() {
      return this[_onTurnDone].stream;
    }
    get onEventDone() {
      return this[_onMicrotaskEmpty].stream;
    }
    dispose() {
      this[_disposed] = true;
    }
  };
  (src__core__zone__ng_zone.NgZone.new = function(opts) {
    let enableLongStackTrace = opts && 'enableLongStackTrace' in opts ? opts.enableLongStackTrace : false;
    this[_onTurnStart] = StreamControllerOfNull().broadcast({sync: true});
    this[_onMicrotaskEmpty] = StreamControllerOfNull().broadcast({sync: true});
    this[_onTurnDone] = StreamControllerOfNull().broadcast({sync: true});
    this[_onError] = StreamControllerOfNgZoneError().broadcast({sync: true});
    this[_outerZone] = null;
    this[_innerZone] = null;
    this[_hasPendingMicrotasks] = false;
    this[_hasPendingMacrotasks] = false;
    this[_isStable] = true;
    this[_nesting] = 0;
    this[_isRunning] = false;
    this[_disposed] = false;
    this[_pendingMicrotasks] = 0;
    this[_pendingTimers] = JSArrayOfTimer().of([]);
    this[_outerZone] = async.Zone.current;
    if (dart.test(enableLongStackTrace)) {
      this[_innerZone] = src__chain.Chain.capture(async.Zone, dart.fn(() => this[_createInnerZone](async.Zone.current), VoidToZone()), {onError: dart.bind(this, _onErrorWithLongStackTrace)});
    } else {
      this[_innerZone] = this[_createInnerZone](async.Zone.current, {handleUncaughtError: dart.bind(this, _onErrorWithoutLongStackTrace)});
    }
  }).prototype = src__core__zone__ng_zone.NgZone.prototype;
  dart.addTypeTests(src__core__zone__ng_zone.NgZone);
  dart.setMethodSignature(src__core__zone__ng_zone.NgZone, () => ({
    __proto__: dart.getMethods(src__core__zone__ng_zone.NgZone.__proto__),
    [_createInnerZone]: dart.fnType(async.Zone, [async.Zone], {handleUncaughtError: ZoneAndZoneDelegateAndZone__Tovoid()}),
    [_scheduleMicrotask]: dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, VoidTovoid()]),
    [_run]: dart.gFnType(R => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [])]]),
    [_runUnary]: dart.gFnType((R, T) => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T]), T]]),
    [_runBinary]: dart.gFnType((R, T1, T2) => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T1, T2]), T1, T2]]),
    [_runInside]: dart.gFnType(R => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [])]]),
    [_runUnaryInside]: dart.gFnType((R, T) => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T]), T]]),
    [_runBinaryInside]: dart.gFnType((R, T1, T2) => [R, [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T1, T2]), T1, T2]]),
    [_onEnter]: dart.fnType(dart.void, []),
    [_onLeave]: dart.fnType(dart.void, []),
    [_onErrorWithLongStackTrace]: dart.fnType(dart.void, [dart.dynamic, src__chain.Chain]),
    [_onErrorWithoutLongStackTrace]: dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, dart.dynamic, core.StackTrace]),
    [_createTimer]: dart.fnType(async.Timer, [async.Zone, async.ZoneDelegate, async.Zone, core.Duration, VoidTodynamic()]),
    [_setMicrotask]: dart.fnType(dart.void, [core.bool]),
    [_setMacrotask]: dart.fnType(dart.void, [core.bool]),
    [_checkStable]: dart.fnType(dart.void, []),
    run: dart.gFnType(R => [R, [dart.fnType(R, [])]]),
    runGuarded: dart.fnType(dart.void, [VoidTovoid()]),
    runOutsideAngular: dart.fnType(dart.dynamic, [VoidTodynamic()]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(src__core__zone__ng_zone.NgZone, () => ({
    isInAngularZone: dart.fnType(core.bool, []),
    assertInAngularZone: dart.fnType(dart.void, []),
    assertNotInAngularZone: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__zone__ng_zone.NgZone, () => ({
    __proto__: dart.getGetters(src__core__zone__ng_zone.NgZone.__proto__),
    inInnerZone: dart.fnType(core.bool, []),
    inOuterZone: dart.fnType(core.bool, []),
    hasPendingMicrotasks: dart.fnType(core.bool, []),
    hasPendingMacrotasks: dart.fnType(core.bool, []),
    isRunning: dart.fnType(core.bool, []),
    onError: dart.fnType(async.Stream$(src__core__zone__ng_zone.NgZoneError), []),
    onMicrotaskEmpty: dart.fnType(async.Stream$(core.Null), []),
    onTurnStart: dart.fnType(async.Stream$(core.Null), []),
    onTurnDone: dart.fnType(async.Stream$(core.Null), []),
    onEventDone: dart.fnType(async.Stream$(core.Null), [])
  }));
  dart.setFieldSignature(src__core__zone__ng_zone.NgZone, () => ({
    __proto__: dart.getFields(src__core__zone__ng_zone.NgZone.__proto__),
    [_onTurnStart]: dart.finalFieldType(StreamControllerOfNull()),
    [_onMicrotaskEmpty]: dart.finalFieldType(StreamControllerOfNull()),
    [_onTurnDone]: dart.finalFieldType(StreamControllerOfNull()),
    [_onError]: dart.finalFieldType(StreamControllerOfNgZoneError()),
    [_outerZone]: dart.fieldType(async.Zone),
    [_innerZone]: dart.fieldType(async.Zone),
    [_hasPendingMicrotasks]: dart.fieldType(core.bool),
    [_hasPendingMacrotasks]: dart.fieldType(core.bool),
    [_isStable]: dart.fieldType(core.bool),
    [_nesting]: dart.fieldType(core.int),
    [_isRunning]: dart.fieldType(core.bool),
    [_disposed]: dart.fieldType(core.bool),
    [_pendingMicrotasks]: dart.fieldType(core.int),
    [_pendingTimers]: dart.finalFieldType(ListOfTimer())
  }));
  const _timer = Symbol('_timer');
  const _onCancelCb = Symbol('_onCancelCb');
  src__core__zone__ng_zone.WrappedTimer = class WrappedTimer extends core.Object {
    addOnCancelCb(onCancelCb) {
      if (this[_onCancelCb] != null) {
        dart.throw(new core.StateError.new("On cancel cb already registered"));
      }
      this[_onCancelCb] = onCancelCb;
    }
    cancel() {
      if (this[_onCancelCb] != null) {
        this[_onCancelCb]();
      }
      this[_timer].cancel();
    }
    get isActive() {
      return this[_timer].isActive;
    }
    get tick() {
      dart.throw(new core.UnimplementedError.new("tick"));
    }
  };
  (src__core__zone__ng_zone.WrappedTimer.new = function(timer) {
    this[_timer] = null;
    this[_onCancelCb] = null;
    this[_timer] = timer;
  }).prototype = src__core__zone__ng_zone.WrappedTimer.prototype;
  dart.addTypeTests(src__core__zone__ng_zone.WrappedTimer);
  src__core__zone__ng_zone.WrappedTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(src__core__zone__ng_zone.WrappedTimer, () => ({
    __proto__: dart.getMethods(src__core__zone__ng_zone.WrappedTimer.__proto__),
    addOnCancelCb: dart.fnType(dart.void, [VoidTovoid()]),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__zone__ng_zone.WrappedTimer, () => ({
    __proto__: dart.getGetters(src__core__zone__ng_zone.WrappedTimer.__proto__),
    isActive: dart.fnType(core.bool, []),
    tick: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__core__zone__ng_zone.WrappedTimer, () => ({
    __proto__: dart.getFields(src__core__zone__ng_zone.WrappedTimer.__proto__),
    [_timer]: dart.fieldType(async.Timer),
    [_onCancelCb]: dart.fieldType(VoidTovoid())
  }));
  src__core__zone__ng_zone.NgZoneError = class NgZoneError extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
  };
  (src__core__zone__ng_zone.NgZoneError.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
  }).prototype = src__core__zone__ng_zone.NgZoneError.prototype;
  dart.addTypeTests(src__core__zone__ng_zone.NgZoneError);
  const error$ = Symbol("NgZoneError.error");
  const stackTrace$ = Symbol("NgZoneError.stackTrace");
  dart.setFieldSignature(src__core__zone__ng_zone.NgZoneError, () => ({
    __proto__: dart.getFields(src__core__zone__ng_zone.NgZoneError.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stackTrace: dart.finalFieldType(core.List)
  }));
  dart.trackLibraries("packages/angular/src/core/zone/ng_zone.ddc", {
    "package:angular/src/core/zone/ng_zone.dart": src__core__zone__ng_zone
  }, '{"version":3,"sourceRoot":"","sources":["ng_zone.dart"],"names":[],"mappings":"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","file":"ng_zone.ddc.js"}');
  // Exports:
  return {
    src__core__zone__ng_zone: src__core__zone__ng_zone
  };
});

//# sourceMappingURL=ng_zone.ddc.js.map
