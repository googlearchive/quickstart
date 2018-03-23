define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__async_memoizer = Object.create(_root);
  const _completer = Symbol('_completer');
  const _is_AsyncMemoizer_default = Symbol('_is_AsyncMemoizer_default');
  src__async_memoizer.AsyncMemoizer$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class AsyncMemoizer extends core.Object {
      get future() {
        return this[_completer].future;
      }
      get hasRun() {
        return this[_completer].isCompleted;
      }
      runOnce(computation) {
        VoidToFutureOrOfT()._check(computation);
        if (!dart.test(this.hasRun)) this[_completer].complete(FutureOfT().sync(computation));
        return this.future;
      }
    }
    (AsyncMemoizer.new = function() {
      this[_completer] = CompleterOfT().new();
    }).prototype = AsyncMemoizer.prototype;
    dart.addTypeTests(AsyncMemoizer);
    AsyncMemoizer.prototype[_is_AsyncMemoizer_default] = true;
    dart.setMethodSignature(AsyncMemoizer, () => ({
      __proto__: dart.getMethods(AsyncMemoizer.__proto__),
      runOnce: dart.fnType(async.Future$(T), [core.Object])
    }));
    dart.setGetterSignature(AsyncMemoizer, () => ({
      __proto__: dart.getGetters(AsyncMemoizer.__proto__),
      future: dart.fnType(async.Future$(T), []),
      hasRun: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(AsyncMemoizer, () => ({
      __proto__: dart.getFields(AsyncMemoizer.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfT())
    }));
    return AsyncMemoizer;
  });
  src__async_memoizer.AsyncMemoizer = src__async_memoizer.AsyncMemoizer$();
  dart.addTypeTests(src__async_memoizer.AsyncMemoizer, _is_AsyncMemoizer_default);
  dart.trackLibraries("packages/async/src/async_memoizer.ddc", {
    "package:async/src/async_memoizer.dart": src__async_memoizer
  }, '{"version":3,"sourceRoot":"","sources":["async_memoizer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;cAgC0B,iBAAU,OAAO;;;cAItB,iBAAU,YAAY;;cAKvB,WAAyB;mCAAb;AAC5B,uBAAK,WAAM,GAAE,gBAAU,SAAS,CAAC,AAAI,gBAAW,CAAC,WAAW;AAC5D,cAAO,YAAM;MACf;;;MAXM,gBAAU,GAAG,AAAI,kBAAY;IAYrC","file":"async_memoizer.ddc.js"}');
  // Exports:
  return {
    src__async_memoizer: src__async_memoizer
  };
});

//# sourceMappingURL=async_memoizer.ddc.js.map
