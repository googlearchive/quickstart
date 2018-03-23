define(['dart_sdk', 'packages/async/src/typed/stream_subscription'], function(dart_sdk, stream_subscription) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__typed__stream_subscription = stream_subscription.src__typed__stream_subscription;
  const _root = Object.create(null);
  const src__delegate__stream_subscription = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _source = Symbol('_source');
  const _is_DelegatingStreamSubscription_default = Symbol('_is_DelegatingStreamSubscription_default');
  src__delegate__stream_subscription.DelegatingStreamSubscription$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class DelegatingStreamSubscription extends core.Object {
      static typed(T, subscription) {
        return async.StreamSubscription$(T).is(subscription) ? subscription : new (src__typed__stream_subscription.TypeSafeStreamSubscription$(T)).new(subscription);
      }
      onData(handleData) {
        this[_source].onData(handleData);
      }
      onError(handleError) {
        this[_source].onError(handleError);
      }
      onDone(handleDone) {
        this[_source].onDone(handleDone);
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        this[_source].pause(resumeFuture);
      }
      resume() {
        this[_source].resume();
      }
      cancel() {
        return this[_source].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_source].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source].isPaused;
      }
    }
    (DelegatingStreamSubscription.new = function(sourceSubscription) {
      this[_source] = sourceSubscription;
    }).prototype = DelegatingStreamSubscription.prototype;
    DelegatingStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(DelegatingStreamSubscription);
    DelegatingStreamSubscription.prototype[_is_DelegatingStreamSubscription_default] = true;
    DelegatingStreamSubscription[dart.implements] = () => [StreamSubscriptionOfT()];
    dart.setMethodSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getMethods(DelegatingStreamSubscription.__proto__),
      onData: dart.fnType(dart.void, [TTovoid()]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [VoidTovoid()]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setStaticMethodSignature(DelegatingStreamSubscription, () => ({typed: dart.gFnType(T => [async.StreamSubscription$(T), [async.StreamSubscription]])}));
    dart.setGetterSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getGetters(DelegatingStreamSubscription.__proto__),
      isPaused: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(DelegatingStreamSubscription, () => ({
      __proto__: dart.getFields(DelegatingStreamSubscription.__proto__),
      [_source]: dart.finalFieldType(StreamSubscriptionOfT())
    }));
    return DelegatingStreamSubscription;
  });
  src__delegate__stream_subscription.DelegatingStreamSubscription = src__delegate__stream_subscription.DelegatingStreamSubscription$();
  dart.addTypeTests(src__delegate__stream_subscription.DelegatingStreamSubscription, _is_DelegatingStreamSubscription_default);
  dart.trackLibraries("packages/async/src/delegate/stream_subscription.ddc", {
    "package:async/src/delegate/stream_subscription.dart": src__delegate__stream_subscription
  }, '{"version":3,"sourceRoot":"","sources":["stream_subscription.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;sBAyBwC,YAA+B;+CACjE,YAAY,IACN,YAAY,GACZ,IAAI,oEAA6B,CAAC,YAAY;MAAC;aAE7C,UAAuB;AACjC,qBAAO,OAAO,CAAC,UAAU;MAC3B;cAEa,WAAoB;AAC/B,qBAAO,QAAQ,CAAC,WAAW;MAC7B;aAEY,UAAiB;AAC3B,qBAAO,OAAO,CAAC,UAAU;MAC3B;YAEY,YAAmB;qCAAZ;AACjB,qBAAO,MAAM,CAAC,YAAY;MAC5B;;AAGE,qBAAO,OAAO;MAChB;;cAEmB,cAAO,OAAO;MAAE;kBAEZ,WAAa;oCAAX;cAAiB,cAAO,SAAS,IAAC,WAAW;MAAC;;cAElD,cAAO,SAAS;;;iDAvCR,kBAAwC;MAC/D,aAAO,GAAG,kBAAkB","file":"stream_subscription.ddc.js"}');
  // Exports:
  return {
    src__delegate__stream_subscription: src__delegate__stream_subscription
  };
});

//# sourceMappingURL=stream_subscription.ddc.js.map
