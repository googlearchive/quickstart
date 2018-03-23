define(['dart_sdk', 'packages/async/src/async_memoizer'], function(dart_sdk, async_memoizer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__async_memoizer = async_memoizer.src__async_memoizer;
  const _root = Object.create(null);
  const src__stream_subscription_transformer = Object.create(_root);
  let __ToStreamTransformerOfT$T = () => (__ToStreamTransformerOfT$T = dart.constFn(dart.gFnType(T => [async.StreamTransformer$(T, T), [], {handleCancel: dart.fnType(async.Future, [async.StreamSubscription$(T)]), handlePause: dart.fnType(dart.void, [async.StreamSubscription$(T)]), handleResume: dart.fnType(dart.void, [async.StreamSubscription$(T)])}])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  src__stream_subscription_transformer._AsyncHandler$ = dart.generic(T => {
    const _AsyncHandler = dart.typedef('_AsyncHandler', () => dart.fnType(async.Future, [async.StreamSubscription$(T)]));
    return _AsyncHandler;
  });
  src__stream_subscription_transformer._AsyncHandler = src__stream_subscription_transformer._AsyncHandler$();
  src__stream_subscription_transformer._VoidHandler$ = dart.generic(T => {
    const _VoidHandler = dart.typedef('_VoidHandler', () => dart.fnType(dart.void, [async.StreamSubscription$(T)]));
    return _VoidHandler;
  });
  src__stream_subscription_transformer._VoidHandler = src__stream_subscription_transformer._VoidHandler$();
  src__stream_subscription_transformer.subscriptionTransformer = function(T, opts) {
    let handleCancel = opts && 'handleCancel' in opts ? opts.handleCancel : null;
    let handlePause = opts && 'handlePause' in opts ? opts.handlePause : null;
    let handleResume = opts && 'handleResume' in opts ? opts.handleResume : null;
    return async.StreamTransformer$(T, T).new(dart.fn((stream, cancelOnError) => new (src__stream_subscription_transformer._TransformedSubscription$(T)).new(stream.listen(null, {cancelOnError: cancelOnError}), handleCancel != null ? handleCancel : dart.fn(inner => inner.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])), handlePause != null ? handlePause : dart.fn(inner => {
      inner.pause();
    }, dart.fnType(core.Null, [async.StreamSubscription$(T)])), handleResume != null ? handleResume : dart.fn(inner => {
      inner.resume();
    }, dart.fnType(core.Null, [async.StreamSubscription$(T)]))), dart.fnType(src__stream_subscription_transformer._TransformedSubscription$(T), [async.Stream$(T), core.bool])));
  };
  dart.fn(src__stream_subscription_transformer.subscriptionTransformer, __ToStreamTransformerOfT$T());
  const _inner = Symbol('_inner');
  const _handleCancel = Symbol('_handleCancel');
  const _handlePause = Symbol('_handlePause');
  const _handleResume = Symbol('_handleResume');
  const _cancelMemoizer = Symbol('_cancelMemoizer');
  const _is__TransformedSubscription_default = Symbol('_is__TransformedSubscription_default');
  src__stream_subscription_transformer._TransformedSubscription$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let StreamSubscriptionOfTToFuture = () => (StreamSubscriptionOfTToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfT()])))();
    let StreamSubscriptionOfTTovoid = () => (StreamSubscriptionOfTTovoid = dart.constFn(dart.fnType(dart.void, [StreamSubscriptionOfT()])))();
    class _TransformedSubscription extends core.Object {
      get isPaused() {
        let t = this[_inner];
        let l = t == null ? null : t.isPaused;
        return l != null ? l : false;
      }
      onData(handleData) {
        let t = this[_inner];
        t == null ? null : t.onData(handleData);
      }
      onError(handleError) {
        let t = this[_inner];
        t == null ? null : t.onError(handleError);
      }
      onDone(handleDone) {
        let t = this[_inner];
        t == null ? null : t.onDone(handleDone);
      }
      cancel() {
        return this[_cancelMemoizer].runOnce(dart.fn(() => {
          let inner = this[_inner];
          this[_inner].onData(null);
          this[_inner].onDone(null);
          this[_inner].onError(dart.fn((_, __) => {
          }, dynamicAnddynamicToNull()));
          this[_inner] = null;
          return this[_handleCancel](inner);
        }, VoidToFuture()));
      }
      pause(resumeFuture) {
        if (resumeFuture === void 0) resumeFuture = null;
        if (dart.test(this[_cancelMemoizer].hasRun)) return;
        if (resumeFuture != null) resumeFuture.whenComplete(dart.bind(this, 'resume'));
        this[_handlePause](this[_inner]);
      }
      resume() {
        if (dart.test(this[_cancelMemoizer].hasRun)) return;
        this[_handleResume](this[_inner]);
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        let t = this[_inner];
        let l = t == null ? null : t.asFuture(E, futureValue);
        return l != null ? l : async.Completer$(E).new().future;
      }
    }
    (_TransformedSubscription.new = function(inner, handleCancel, handlePause, handleResume) {
      this[_cancelMemoizer] = new src__async_memoizer.AsyncMemoizer.new();
      this[_inner] = inner;
      this[_handleCancel] = handleCancel;
      this[_handlePause] = handlePause;
      this[_handleResume] = handleResume;
    }).prototype = _TransformedSubscription.prototype;
    _TransformedSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(_TransformedSubscription);
    _TransformedSubscription.prototype[_is__TransformedSubscription_default] = true;
    _TransformedSubscription[dart.implements] = () => [StreamSubscriptionOfT()];
    dart.setMethodSignature(_TransformedSubscription, () => ({
      __proto__: dart.getMethods(_TransformedSubscription.__proto__),
      onData: dart.fnType(dart.void, [TTovoid()]),
      onError: dart.fnType(dart.void, [core.Function]),
      onDone: dart.fnType(dart.void, [VoidTovoid()]),
      cancel: dart.fnType(async.Future, []),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]])
    }));
    dart.setGetterSignature(_TransformedSubscription, () => ({
      __proto__: dart.getGetters(_TransformedSubscription.__proto__),
      isPaused: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(_TransformedSubscription, () => ({
      __proto__: dart.getFields(_TransformedSubscription.__proto__),
      [_inner]: dart.fieldType(StreamSubscriptionOfT()),
      [_handleCancel]: dart.finalFieldType(StreamSubscriptionOfTToFuture()),
      [_handlePause]: dart.finalFieldType(StreamSubscriptionOfTTovoid()),
      [_handleResume]: dart.finalFieldType(StreamSubscriptionOfTTovoid()),
      [_cancelMemoizer]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return _TransformedSubscription;
  });
  src__stream_subscription_transformer._TransformedSubscription = src__stream_subscription_transformer._TransformedSubscription$();
  dart.addTypeTests(src__stream_subscription_transformer._TransformedSubscription, _is__TransformedSubscription_default);
  dart.trackLibraries("packages/async/src/stream_subscription_transformer.ddc", {
    "package:async/src/stream_subscription_transformer.dart": src__stream_subscription_transformer
  }, '{"version":3,"sourceRoot":"","sources":["stream_subscription_transformer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;QA8BY;QACH;QACA;AACP,UAAO,AAAI,mCAAiB,CAAC,SAAC,MAAM,EAAE,aAAa,KAC1C,IAAI,uEAAwB,CAC/B,MAAM,OAAO,CAAC,sBAAqB,aAAa,IAChD,YAAY,WAAZ,YAAY,GAAI,QAAC,KAAK,IAAK,KAAK,OAAO,gEACvC,WAAW,WAAX,WAAW,GACP,QAAC,KAAK;AACJ,WAAK,MAAM;gEAEjB,YAAY,WAAZ,YAAY,GACR,QAAC,KAAK;AACJ,WAAK,OAAO;;EAG1B;;;;;;;;;;;;;;;gBAiBuB,YAAM;;+BAAc;MAAK;aAKlC,UAAuB;AACjC,4BAAM;oCAAS,UAAU;MAC3B;cAEa,WAAoB;AAC/B,4BAAM;qCAAU,WAAW;MAC7B;aAEY,UAAiB;AAC3B,4BAAM;oCAAS,UAAU;MAC3B;;cAEmB,sBAAe,QAAQ,CAAC;AACrC,cAAI,QAAQ,YAAM;AAClB,sBAAM,OAAO,CAAC;AACd,sBAAM,OAAO,CAAC;AAGd,sBAAM,QAAQ,CAAC,SAAC,CAAC,EAAE,EAAE;;AACrB,sBAAM,GAAG;AACT,gBAAO,oBAAa,CAAC,KAAK;;MAC1B;YAGM,YAAmB;qCAAZ;AACjB,sBAAI,qBAAe,OAAO,GAAE;AAC5B,YAAI,YAAY,IAAI,MAAM,YAAY,aAAa,CAAC,yBAAM;AAC1D,0BAAY,CAAC,YAAM;MACrB;;AAGE,sBAAI,qBAAe,OAAO,GAAE;AAC5B,2BAAa,CAAC,YAAM;MACtB;kBAEuB,WAAa;oCAAX;gBACrB,YAAM;iDAAW,WAAW;+BAAK,AAAI,uBAAY,SAAS;;;6CAtCrD,KAAM,EAAO,YAAa,EAAO,WAAY,EAAO,YAAa;MAwBpE,qBAAe,GAAG,IAAI,qCAAa;MAxBhC,YAAM,GAAN,KAAM;MAAO,mBAAa,GAAb,YAAa;MAAO,kBAAY,GAAZ,WAAY;MAAO,mBAAa,GAAb,YAAa;IAAC","file":"stream_subscription_transformer.ddc.js"}');
  // Exports:
  return {
    src__stream_subscription_transformer: src__stream_subscription_transformer
  };
});

//# sourceMappingURL=stream_subscription_transformer.ddc.js.map
