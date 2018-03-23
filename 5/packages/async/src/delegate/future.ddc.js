define(['dart_sdk', 'packages/async/src/typed/future'], function(dart_sdk, future) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__typed__future = future.src__typed__future;
  const _root = Object.create(null);
  const src__delegate__future = Object.create(_root);
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  const _future = Symbol('_future');
  const _is_DelegatingFuture_default = Symbol('_is_DelegatingFuture_default');
  src__delegate__future.DelegatingFuture$ = dart.generic(T => {
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class DelegatingFuture extends core.Object {
      static typed(T, future) {
        return async.Future$(T).is(future) ? future : new (src__typed__future.TypeSafeFuture$(T)).new(future);
      }
      asStream() {
        return this[_future].asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this[_future].catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this[_future].then(S, onValue, {onError: onError});
      }
      whenComplete(action) {
        return this[_future].whenComplete(action);
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return this[_future].timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
    }
    (DelegatingFuture.new = function(future) {
      this[_future] = future;
    }).prototype = DelegatingFuture.prototype;
    DelegatingFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(DelegatingFuture);
    DelegatingFuture.prototype[_is_DelegatingFuture_default] = true;
    DelegatingFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(DelegatingFuture, () => ({
      __proto__: dart.getMethods(DelegatingFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: ObjectTobool()}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      whenComplete: dart.fnType(async.Future$(T), [VoidTodynamic()]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: VoidTodynamic()})
    }));
    dart.setStaticMethodSignature(DelegatingFuture, () => ({typed: dart.gFnType(T => [async.Future$(T), [async.Future]])}));
    dart.setFieldSignature(DelegatingFuture, () => ({
      __proto__: dart.getFields(DelegatingFuture.__proto__),
      [_future]: dart.finalFieldType(FutureOfT())
    }));
    return DelegatingFuture;
  });
  src__delegate__future.DelegatingFuture = src__delegate__future.DelegatingFuture$();
  dart.addTypeTests(src__delegate__future.DelegatingFuture, _is_DelegatingFuture_default);
  dart.trackLibraries("packages/async/src/delegate/future.ddc", {
    "package:async/src/delegate/future.dart": src__delegate__future
  }, '{"version":3,"sourceRoot":"","sources":["future.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;sBAqB4B,MAAa;mCACnC,MAAM,IAAgB,MAAM,GAAG,IAAI,2CAAiB,CAAC,MAAM;MAAC;;cAExC,cAAO,SAAS;MAAE;iBAErB,OAAgB;YAAQ;cACzC,cAAO,WAAW,CAAC,OAAO,SAAQ,IAAI;MAAC;cAEzB,OAA4B;YAAY;cACtD,cAAO,KAAK,IAAC,OAAO,YAAW,OAAO;MAAC;mBAEpB,MAAQ;cAAK,cAAO,aAAa,CAAC,MAAM;MAAC;cAE9C,SAAkB;YAAG;cACnC,cAAO,QAAQ,CAAC,SAAS,yCAAa,SAAS;MAAC;;qCAtB9B,MAAO;MAAP,aAAO,GAAP,MAAO;IAAC","file":"future.ddc.js"}');
  // Exports:
  return {
    src__delegate__future: src__delegate__future
  };
});

//# sourceMappingURL=future.ddc.js.map
