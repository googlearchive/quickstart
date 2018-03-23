define(['dart_sdk', 'packages/async/src/delegate/stream_subscription'], function(dart_sdk, stream_subscription) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__delegate__stream_subscription = stream_subscription.src__delegate__stream_subscription;
  const _root = Object.create(null);
  const src__subscription_stream = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  const _source = Symbol('_source');
  const _is_SubscriptionStream_default = Symbol('_is_SubscriptionStream_default');
  src__subscription_stream.SubscriptionStream$ = dart.generic(T => {
    let _CancelOnErrorSubscriptionWrapperOfT = () => (_CancelOnErrorSubscriptionWrapperOfT = dart.constFn(src__subscription_stream._CancelOnErrorSubscriptionWrapper$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class SubscriptionStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_source] == null) {
          dart.throw(new core.StateError.new("Stream has already been listened to."));
        }
        cancelOnError = true === cancelOnError;
        let subscription = this[_source];
        this[_source] = null;
        let result = dart.test(cancelOnError) ? new (_CancelOnErrorSubscriptionWrapperOfT()).new(subscription) : subscription;
        result.onData(onData);
        result.onError(onError);
        result.onDone(onDone);
        subscription.resume();
        return result;
      }
    }
    (SubscriptionStream.new = function(subscription) {
      this[_source] = subscription;
      SubscriptionStream.__proto__.new.call(this);
      this[_source].pause();
      this[_source].onData(null);
      this[_source].onError(null);
      this[_source].onDone(null);
    }).prototype = SubscriptionStream.prototype;
    dart.addTypeTests(SubscriptionStream);
    SubscriptionStream.prototype[_is_SubscriptionStream_default] = true;
    dart.setMethodSignature(SubscriptionStream, () => ({
      __proto__: dart.getMethods(SubscriptionStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [TTovoid()], {onError: core.Function, onDone: VoidTovoid(), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(SubscriptionStream, () => ({
      __proto__: dart.getFields(SubscriptionStream.__proto__),
      [_source]: dart.fieldType(StreamSubscriptionOfT())
    }));
    return SubscriptionStream;
  });
  src__subscription_stream.SubscriptionStream = src__subscription_stream.SubscriptionStream$();
  dart.addTypeTests(src__subscription_stream.SubscriptionStream, _is_SubscriptionStream_default);
  const _is__CancelOnErrorSubscriptionWrapper_default = Symbol('_is__CancelOnErrorSubscriptionWrapper_default');
  src__subscription_stream._CancelOnErrorSubscriptionWrapper$ = dart.generic(T => {
    class _CancelOnErrorSubscriptionWrapper extends src__delegate__stream_subscription.DelegatingStreamSubscription$(T) {
      onError(handleError) {
        super.onError(dart.fn((error, stackTrace) => {
          let cancelFuture = super.cancel();
          if (cancelFuture != null) {
            cancelFuture.whenComplete(dart.fn(() => {
              if (dynamicAnddynamicTodynamic().is(handleError)) {
                dart.dcall(handleError, error, stackTrace);
              } else {
                dart.dcall(handleError, error);
              }
            }, VoidToNull()));
          } else {
            if (dynamicAnddynamicTodynamic().is(handleError)) {
              dart.dcall(handleError, error, stackTrace);
            } else {
              dart.dcall(handleError, error);
            }
          }
        }, dynamicAndStackTraceToNull()));
      }
    }
    (_CancelOnErrorSubscriptionWrapper.new = function(subscription) {
      _CancelOnErrorSubscriptionWrapper.__proto__.new.call(this, subscription);
    }).prototype = _CancelOnErrorSubscriptionWrapper.prototype;
    dart.addTypeTests(_CancelOnErrorSubscriptionWrapper);
    _CancelOnErrorSubscriptionWrapper.prototype[_is__CancelOnErrorSubscriptionWrapper_default] = true;
    return _CancelOnErrorSubscriptionWrapper;
  });
  src__subscription_stream._CancelOnErrorSubscriptionWrapper = src__subscription_stream._CancelOnErrorSubscriptionWrapper$();
  dart.addTypeTests(src__subscription_stream._CancelOnErrorSubscriptionWrapper, _is__CancelOnErrorSubscriptionWrapper_default);
  dart.trackLibraries("packages/async/src/subscription_stream.ddc", {
    "package:async/src/subscription_stream.dart": src__subscription_stream
  }, '{"version":3,"sourceRoot":"","sources":["subscription_stream.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;aAwC+B,MAAoB;YACnC;YAAc;YAAe;AACzC,YAAI,aAAO,IAAI,MAAM;AACnB,qBAAM,IAAI,mBAAU,CAAC;;AAEvB,qBAAa,GAAI,SAAQ,aAAa;AACtC,YAAI,eAAe,aAAO;AAC1B,qBAAO,GAAG;AAEV,YAAI,mBAAS,aAAa,IACpB,IAAI,4CAAoC,CAAC,YAAY,IACrD,YAAY;AAClB,cAAM,OAAO,CAAC,MAAM;AACpB,cAAM,QAAQ,CAAC,OAAO;AACtB,cAAM,OAAO,CAAC,MAAM;AACpB,oBAAY,OAAO;AACnB,cAAO,OAAM;MACf;;uCA1BmB,YAAkC;MAC/C,aAAO,GAAG,YAAY;;AAC1B,mBAAO,MAAM;AAEb,mBAAO,OAAO,CAAC;AACf,mBAAO,QAAQ,CAAC;AAChB,mBAAO,OAAO,CAAC;IACjB;;;;;;;;;;;;;;;;;;cAiCa,WAAoB;AAE/B,qBAAa,CAAC,SAAC,KAAK,EAAE,UAAqB;AACzC,cAAI,eAAe,YAAY;AAC/B,cAAI,YAAY,IAAI,MAAM;AAExB,wBAAY,aAAa,CAAC;AACxB,kDAAI,WAAW,GAAwB;AACrC,sCAAW,EAAC,KAAK,EAAE,UAAU;qBACxB;AACL,sCAAW,EAAC,KAAK;;;iBAGhB;AACL,gDAAI,WAAW,GAAwB;AACrC,oCAAW,EAAC,KAAK,EAAE,UAAU;mBACxB;AACL,oCAAW,EAAC,KAAK;;;;MAIzB;;sDAxBkC,YAAkC;AAC9D,iEAAM,YAAY;IAAC","file":"subscription_stream.ddc.js"}');
  // Exports:
  return {
    src__subscription_stream: src__subscription_stream
  };
});

//# sourceMappingURL=subscription_stream.ddc.js.map
