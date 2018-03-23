define(['dart_sdk', 'packages/async/src/delegate/stream', 'packages/async/src/stream_completer'], function(dart_sdk, stream, stream_completer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__delegate__stream = stream.src__delegate__stream;
  const src__stream_completer = stream_completer.src__stream_completer;
  const _root = Object.create(null);
  const src__lazy_stream = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _callback = Symbol('_callback');
  const _is_LazyStream_default = Symbol('_is_LazyStream_default');
  src__lazy_stream.LazyStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let FutureOfStreamOfT = () => (FutureOfStreamOfT = dart.constFn(async.Future$(StreamOfT())))();
    let StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let FutureOrOfStreamOfT = () => (FutureOrOfStreamOfT = dart.constFn(async.FutureOr$(StreamOfT())))();
    let VoidToFutureOrOfStreamOfT = () => (VoidToFutureOrOfStreamOfT = dart.constFn(dart.fnType(FutureOrOfStreamOfT(), [])))();
    class LazyStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_callback] == null) {
          dart.throw(new core.StateError.new("Stream has already been listened to."));
        }
        let callback = this[_callback];
        this[_callback] = null;
        let result = callback();
        let stream = null;
        if (FutureOfStreamOfT().is(result)) {
          stream = src__stream_completer.StreamCompleter.fromFuture(T, result.then(StreamOfT(), dart.fn(stream => src__delegate__stream.DelegatingStream.typed(T, stream), StreamOfTToStreamOfT())));
        } else {
          stream = src__delegate__stream.DelegatingStream.typed(T, async.Stream.as(result));
        }
        return stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (LazyStream.new = function(callback) {
      this[_callback] = callback;
      LazyStream.__proto__.new.call(this);
      if (this[_callback] == null) dart.throw(new core.ArgumentError.notNull('callback'));
    }).prototype = LazyStream.prototype;
    dart.addTypeTests(LazyStream);
    LazyStream.prototype[_is_LazyStream_default] = true;
    dart.setMethodSignature(LazyStream, () => ({
      __proto__: dart.getMethods(LazyStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [TTovoid()], {onError: core.Function, onDone: VoidTovoid(), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(LazyStream, () => ({
      __proto__: dart.getFields(LazyStream.__proto__),
      [_callback]: dart.fieldType(VoidToFutureOrOfStreamOfT())
    }));
    return LazyStream;
  });
  src__lazy_stream.LazyStream = src__lazy_stream.LazyStream$();
  dart.addTypeTests(src__lazy_stream.LazyStream, _is_LazyStream_default);
  dart.trackLibraries("packages/async/src/lazy_stream.ddc", {
    "package:async/src/lazy_stream.dart": src__lazy_stream
  }, '{"version":3,"sourceRoot":"","sources":["lazy_stream.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;aA2B+B,MAAoB;YACnC;YAAc;YAAe;AACzC,YAAI,eAAS,IAAI,MAAM;AACrB,qBAAM,IAAI,mBAAU,CAAC;;AAKvB,YAAI,WAAW,eAAS;AACxB,uBAAS,GAAG;AACZ,YAAI,SAAS,QAAQ;AAErB,YAAU;AACV,mCAAI,MAAM,GAAuB;AAC/B,gBAAM,GAAG,qCAAe,WAAW,IAAC,MAAM,KAAK,cAAC,QAAC,MAAM,IAC9C,sCAAgB,MAAM,IAAI,MAAM;eAEpC;AACL,gBAAM,GAAG,sCAAgB,MAAM,oBAAI,MAAM;;AAG3C,cAAO,OAAM,OAAO,CAAC,MAAM,YACd,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;;+BA5BW,QAA8B;MAAI,eAAS,GAAG,QAAQ;;AAE/D,UAAI,eAAS,IAAI,MAAM,WAAM,IAAI,0BAAqB,CAAC;IACzD","file":"lazy_stream.ddc.js"}');
  // Exports:
  return {
    src__lazy_stream: src__lazy_stream
  };
});

//# sourceMappingURL=lazy_stream.ddc.js.map
