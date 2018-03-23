define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__typed__stream_subscription = Object.create(_root);
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _subscription = Symbol('_subscription');
  const _is_TypeSafeStreamSubscription_default = Symbol('_is_TypeSafeStreamSubscription_default');
  src__typed__stream_subscription.TypeSafeStreamSubscription$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class TypeSafeStreamSubscription extends core.Object {
      get isPaused() {
        return this[_subscription].isPaused;
      }
      onData(handleData) {
        this[_subscription].onData(dart.fn(data => handleData(T.as(data)), dynamicTovoid()));
      }
      onError(handleError) {
        this[_subscription].onError(handleError);
      }
      onDone(handleDone) {
        this[_subscription].onDone(handleDone);
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        this[_subscription].pause(resumeFuture);
      }
      resume() {
        this[_subscription].resume();
      }
      cancel() {
        return this[_subscription].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_subscription].asFuture(E, futureValue);
      }
    }
    (TypeSafeStreamSubscription.new = function(subscription) {
      this[_subscription] = subscription;
    }).prototype = TypeSafeStreamSubscription.prototype;
    TypeSafeStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(TypeSafeStreamSubscription);
    TypeSafeStreamSubscription.prototype[_is_TypeSafeStreamSubscription_default] = true;
    TypeSafeStreamSubscription[dart.implements] = () => [StreamSubscriptionOfT()];
    dart.setMethodSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getMethods(TypeSafeStreamSubscription.__proto__),
      onData: dart.fnType(dart.void, [TTovoid()]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [VoidTovoid()]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getGetters(TypeSafeStreamSubscription.__proto__),
      isPaused: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(TypeSafeStreamSubscription, () => ({
      __proto__: dart.getFields(TypeSafeStreamSubscription.__proto__),
      [_subscription]: dart.finalFieldType(async.StreamSubscription)
    }));
    return TypeSafeStreamSubscription;
  });
  src__typed__stream_subscription.TypeSafeStreamSubscription = src__typed__stream_subscription.TypeSafeStreamSubscription$();
  dart.addTypeTests(src__typed__stream_subscription.TypeSafeStreamSubscription, _is_TypeSafeStreamSubscription_default);
  dart.trackLibraries("packages/async/src/typed/stream_subscription.ddc", {
    "package:async/src/typed/stream_subscription.dart": src__typed__stream_subscription
  }, '{"version":3,"sourceRoot":"","sources":["stream_subscription.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;cASuB,oBAAa,SAAS;;aAI/B,UAAuB;AACjC,2BAAa,OAAO,CAAC,QAAC,IAAI,IAAK,UAAU,MAAC,IAAI;MAChD;cAEa,WAAoB;AAC/B,2BAAa,QAAQ,CAAC,WAAW;MACnC;aAEY,UAAiB;AAC3B,2BAAa,OAAO,CAAC,UAAU;MACjC;YAEY,YAAmB;qCAAZ;AACjB,2BAAa,MAAM,CAAC,YAAY;MAClC;;AAGE,2BAAa,OAAO;MACtB;;cAEmB,oBAAa,OAAO;MAAE;kBAElB,WAAa;oCAAX;cAAiB,oBAAa,SAAS,IAAC,WAAW;MAAC;;+CAxB7C,YAAa;MAAb,mBAAa,GAAb,YAAa;IAAC","file":"stream_subscription.ddc.js"}');
  // Exports:
  return {
    src__typed__stream_subscription: src__typed__stream_subscription
  };
});

//# sourceMappingURL=stream_subscription.ddc.js.map
