define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__typed__future = Object.create(_root);
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  const _future = Symbol('_future');
  const _is_TypeSafeFuture_default = Symbol('_is_TypeSafeFuture_default');
  src__typed__future.TypeSafeFuture$ = dart.generic(T => {
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    let TypeSafeFutureOfT = () => (TypeSafeFutureOfT = dart.constFn(src__typed__future.TypeSafeFuture$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TTodynamic = () => (TTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T])))();
    class TypeSafeFuture extends core.Object {
      asStream() {
        return this[_future].then(T, dart.fn(value => T.as(value), dynamicToT())).asStream();
      }
      catchError(onError, opts) {
        return async.async(T, (function* catchError() {
          let test = opts && 'test' in opts ? opts.test : null;
          return new (TypeSafeFutureOfT()).new(this[_future].catchError(onError, {test: test}));
        }).bind(this));
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this[_future].then(S, dart.fn(value => async.FutureOr$(S)._check(onValue(T.as(value))), dart.fnType(async.FutureOr$(S), [dart.dynamic])), {onError: onError});
      }
      whenComplete(action) {
        return new (TypeSafeFutureOfT()).new(this[_future].whenComplete(action));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return new (TypeSafeFutureOfT()).new(this[_future].timeout(timeLimit, {onTimeout: onTimeout}));
      }
    }
    (TypeSafeFuture.new = function(future) {
      this[_future] = future;
    }).prototype = TypeSafeFuture.prototype;
    TypeSafeFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(TypeSafeFuture);
    TypeSafeFuture.prototype[_is_TypeSafeFuture_default] = true;
    TypeSafeFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(TypeSafeFuture, () => ({
      __proto__: dart.getMethods(TypeSafeFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: ObjectTobool()}),
      then: dart.gFnType(S => [async.Future$(S), [TTodynamic()], {onError: core.Function}]),
      whenComplete: dart.fnType(async.Future$(T), [VoidTodynamic()]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: VoidTodynamic()})
    }));
    dart.setFieldSignature(TypeSafeFuture, () => ({
      __proto__: dart.getFields(TypeSafeFuture.__proto__),
      [_future]: dart.finalFieldType(async.Future)
    }));
    return TypeSafeFuture;
  });
  src__typed__future.TypeSafeFuture = src__typed__future.TypeSafeFuture$();
  dart.addTypeTests(src__typed__future.TypeSafeFuture, _is_TypeSafeFuture_default);
  dart.trackLibraries("packages/async/src/typed/future.ddc", {
    "package:async/src/typed/future.dart": src__typed__future
  }, '{"version":3,"sourceRoot":"","sources":["future.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;cAW0B,cAAO,KAAK,IAAC,QAAC,KAAK,SAAK,KAAK,0BAAe;MAAE;iBAEjD,OAAgB;AAA6B;cAArB;gBACzC,KAAI,yBAAiB,CAAC,aAAO,WAAW,CAAC,OAAO,SAAQ,IAAI;QAAE;;cAEhD,OAAwB;YAAY;cAClD,cAAO,KAAK,IAAC,QAAC,KAAK,8BAAK,OAAO,MAAC,KAAK,iEAAiB,OAAO;MAAC;mBAE3C,MAAQ;cAC3B,KAAI,yBAAiB,CAAC,aAAO,aAAa,CAAC,MAAM;MAAE;cAErC,SAAkB;YAAG;cACnC,KAAI,yBAAiB,CAAC,aAAO,QAAQ,CAAC,SAAS,cAAa,SAAS;MAAE;;mCAdvD,MAAO;MAAP,aAAO,GAAP,MAAO;IAAC","file":"future.ddc.js"}');
  // Exports:
  return {
    src__typed__future: src__typed__future
  };
});

//# sourceMappingURL=future.ddc.js.map
