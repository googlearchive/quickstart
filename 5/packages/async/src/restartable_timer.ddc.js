define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__restartable_timer = Object.create(_root);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  const _duration = Symbol('_duration');
  const _callback = Symbol('_callback');
  const _timer = Symbol('_timer');
  src__restartable_timer.RestartableTimer = class RestartableTimer extends core.Object {
    get isActive() {
      return this[_timer].isActive;
    }
    reset() {
      this[_timer].cancel();
      this[_timer] = async.Timer.new(this[_duration], this[_callback]);
    }
    cancel() {
      this[_timer].cancel();
    }
    get tick() {
      dart.throw(new core.UnimplementedError.new("tick"));
    }
  };
  (src__restartable_timer.RestartableTimer.new = function(duration, callback) {
    this[_timer] = null;
    this[_duration] = duration;
    this[_callback] = callback;
    this[_timer] = async.Timer.new(this[_duration], this[_callback]);
  }).prototype = src__restartable_timer.RestartableTimer.prototype;
  dart.addTypeTests(src__restartable_timer.RestartableTimer);
  src__restartable_timer.RestartableTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getMethods(src__restartable_timer.RestartableTimer.__proto__),
    reset: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getGetters(src__restartable_timer.RestartableTimer.__proto__),
    isActive: dart.fnType(core.bool, []),
    tick: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__restartable_timer.RestartableTimer, () => ({
    __proto__: dart.getFields(src__restartable_timer.RestartableTimer.__proto__),
    [_duration]: dart.finalFieldType(core.Duration),
    [_callback]: dart.finalFieldType(VoidTodynamic()),
    [_timer]: dart.fieldType(async.Timer)
  }));
  dart.trackLibraries("packages/async/src/restartable_timer.ddc", {
    "package:async/src/restartable_timer.dart": src__restartable_timer
  }, '{"version":3,"sourceRoot":"","sources":["restartable_timer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;YA+BuB,aAAM,SAAS;;;AAOlC,kBAAM,OAAO;AACb,kBAAM,GAAG,AAAI,eAAK,CAAC,eAAS,EAAE,eAAS;IACzC;;AAGE,kBAAM,OAAO;IACf;;AAOE,iBAAM,IAAI,2BAAkB,CAAC;IAC/B;;0DAzBsB,QAAS,EAAO,QAAS;IANzC,YAAM;IAMU,eAAS,GAAT,QAAS;IAAO,eAAS,GAAT,QAAS;AAC7C,gBAAM,GAAG,AAAI,eAAK,CAAC,eAAS,EAAE,eAAS;EACzC","file":"restartable_timer.ddc.js"}');
  // Exports:
  return {
    src__restartable_timer: src__restartable_timer
  };
});

//# sourceMappingURL=restartable_timer.ddc.js.map
