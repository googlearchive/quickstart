define(['dart_sdk', 'packages/async/src/result/capture_sink', 'packages/async/src/delegate/future'], function(dart_sdk, capture_sink, future) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__result__result = capture_sink.src__result__result;
  const src__delegate__future = future.src__delegate__future;
  const _root = Object.create(null);
  const src__result__future = Object.create(_root);
  const _result = Symbol('_result');
  const _is_ResultFuture_default = Symbol('_is_ResultFuture_default');
  src__result__future.ResultFuture$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let ResultOfTToNull = () => (ResultOfTToNull = dart.constFn(dart.fnType(core.Null, [ResultOfT()])))();
    class ResultFuture extends src__delegate__future.DelegatingFuture$(T) {
      get isComplete() {
        return this.result != null;
      }
      get result() {
        return this[_result];
      }
    }
    (ResultFuture.new = function(future) {
      this[_result] = null;
      ResultFuture.__proto__.new.call(this, future);
      src__result__result.Result.capture(T, future).then(core.Null, dart.fn(result => {
        this[_result] = result;
      }, ResultOfTToNull()));
    }).prototype = ResultFuture.prototype;
    dart.addTypeTests(ResultFuture);
    ResultFuture.prototype[_is_ResultFuture_default] = true;
    dart.setGetterSignature(ResultFuture, () => ({
      __proto__: dart.getGetters(ResultFuture.__proto__),
      isComplete: dart.fnType(core.bool, []),
      result: dart.fnType(src__result__result.Result$(T), [])
    }));
    dart.setFieldSignature(ResultFuture, () => ({
      __proto__: dart.getFields(ResultFuture.__proto__),
      [_result]: dart.fieldType(ResultOfT())
    }));
    return ResultFuture;
  });
  src__result__future.ResultFuture = src__result__future.ResultFuture$();
  dart.addTypeTests(src__result__future.ResultFuture, _is_ResultFuture_default);
  dart.trackLibraries("packages/async/src/result/future.ddc", {
    "package:async/src/result/future.dart": src__result__future
  }, '{"version":3,"sourceRoot":"","sources":["future.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;cAayB,YAAM,IAAI;MAAI;;cAKb,cAAO;;;iCAGlB,MAAgB;MAFnB,aAAO;AAEgB,4CAAM,MAAM;AAC3C,gCAAM,QAAQ,IAAC,MAAM,MAAM,YAAC,QAAC,MAAM;AACjC,qBAAO,GAAG,MAAM;;IAEpB","file":"future.ddc.js"}');
  // Exports:
  return {
    src__result__future: src__result__future
  };
});

//# sourceMappingURL=future.ddc.js.map
