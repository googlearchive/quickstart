define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__delegate__stream_sink = Object.create(_root);
  const _sink = Symbol('_sink');
  const _is_DelegatingStreamSink_default = Symbol('_is_DelegatingStreamSink_default');
  src__delegate__stream_sink.DelegatingStreamSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class DelegatingStreamSink extends core.Object {
      get done() {
        return this[_sink].done;
      }
      static typed(T, sink) {
        return async.StreamSink$(T).is(sink) ? sink : new (src__delegate__stream_sink.DelegatingStreamSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        return this[_sink].addStream(stream);
      }
      close() {
        return this[_sink].close();
      }
    }
    (DelegatingStreamSink.new = function(sink) {
      this[_sink] = sink;
    }).prototype = DelegatingStreamSink.prototype;
    (DelegatingStreamSink.__ = function(sink) {
      this[_sink] = sink;
    }).prototype = DelegatingStreamSink.prototype;
    dart.addTypeTests(DelegatingStreamSink);
    DelegatingStreamSink.prototype[_is_DelegatingStreamSink_default] = true;
    DelegatingStreamSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getMethods(DelegatingStreamSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setStaticMethodSignature(DelegatingStreamSink, () => ({typed: dart.gFnType(T => [async.StreamSink$(T), [async.StreamSink]])}));
    dart.setGetterSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getGetters(DelegatingStreamSink.__proto__),
      done: dart.fnType(async.Future, [])
    }));
    dart.setFieldSignature(DelegatingStreamSink, () => ({
      __proto__: dart.getFields(DelegatingStreamSink.__proto__),
      [_sink]: dart.finalFieldType(async.StreamSink)
    }));
    return DelegatingStreamSink;
  });
  src__delegate__stream_sink.DelegatingStreamSink = src__delegate__stream_sink.DelegatingStreamSink$();
  dart.addTypeTests(src__delegate__stream_sink.DelegatingStreamSink, _is_DelegatingStreamSink_default);
  dart.trackLibraries("packages/async/src/delegate/stream_sink.ddc", {
    "package:async/src/delegate/stream_sink.dart": src__delegate__stream_sink
  }, '{"version":3,"sourceRoot":"","sources":["stream_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;cAaqB,YAAK,KAAK;;sBAaC,IAAe;uCACzC,IAAI,IAAoB,IAAI,GAAG,IAAI,wDAAsB,CAAC,IAAI;MAAC;UAE1D,IAAM;iBAAJ;AACT,mBAAK,IAAI,CAAC,IAAI;MAChB;eAEc,KAAK,EAAG,UAAqB;mCAAV;AAC/B,mBAAK,SAAS,CAAC,KAAK,EAAE,UAAU;MAClC;gBAEiB,MAAgB;2BAAN;cAAW,YAAK,UAAU,CAAC,MAAM;MAAC;;cAE3C,YAAK,MAAM;MAAE;;yCAvBV,IAAkB;MAAI,WAAK,GAAG,IAAI;;wCAE3B,IAAK;MAAL,WAAK,GAAL,IAAK;IAAC","file":"stream_sink.ddc.js"}');
  // Exports:
  return {
    src__delegate__stream_sink: src__delegate__stream_sink
  };
});

//# sourceMappingURL=stream_sink.ddc.js.map
