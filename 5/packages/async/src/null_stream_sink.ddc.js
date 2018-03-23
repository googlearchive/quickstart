define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__null_stream_sink = Object.create(_root);
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _closed = Symbol('_closed');
  const _addingStream = Symbol('_addingStream');
  const _checkEventAllowed = Symbol('_checkEventAllowed');
  const _is_NullStreamSink_default = Symbol('_is_NullStreamSink_default');
  src__null_stream_sink.NullStreamSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class NullStreamSink extends core.Object {
      get done() {
        return this[done$];
      }
      set done(value) {
        super.done = value;
      }
      add(data) {
        T._check(data);
        this[_checkEventAllowed]();
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_checkEventAllowed]();
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        this[_checkEventAllowed]();
        this[_addingStream] = true;
        let l = stream.listen(null).cancel();
        let future = l != null ? l : async.Future.value();
        return future.whenComplete(dart.fn(() => {
          this[_addingStream] = false;
        }, VoidToNull()));
      }
      [_checkEventAllowed]() {
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add to a closed sink."));
        if (dart.test(this[_addingStream])) {
          dart.throw(new core.StateError.new("Cannot add to a sink while adding a stream."));
        }
      }
      close() {
        this[_closed] = true;
        return this.done;
      }
    }
    (NullStreamSink.new = function(opts) {
      let done = opts && 'done' in opts ? opts.done : null;
      this[_closed] = false;
      this[_addingStream] = false;
      this[done$] = done != null ? done : async.Future.value();
    }).prototype = NullStreamSink.prototype;
    (NullStreamSink.error = function(error, stackTrace) {
      if (stackTrace === void 0) stackTrace = null;
      this[_closed] = false;
      this[_addingStream] = false;
      let _ = async.Future.error(error, stackTrace);
      _.catchError(dart.fn(_ => {
      }, dynamicToNull()));
      this[done$] = _;
    }).prototype = NullStreamSink.prototype;
    dart.addTypeTests(NullStreamSink);
    NullStreamSink.prototype[_is_NullStreamSink_default] = true;
    const done$ = Symbol("NullStreamSink.done");
    NullStreamSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(NullStreamSink, () => ({
      __proto__: dart.getMethods(NullStreamSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      [_checkEventAllowed]: dart.fnType(dart.void, []),
      close: dart.fnType(async.Future, [])
    }));
    dart.setFieldSignature(NullStreamSink, () => ({
      __proto__: dart.getFields(NullStreamSink.__proto__),
      done: dart.finalFieldType(async.Future),
      [_closed]: dart.fieldType(core.bool),
      [_addingStream]: dart.fieldType(core.bool)
    }));
    return NullStreamSink;
  });
  src__null_stream_sink.NullStreamSink = src__null_stream_sink.NullStreamSink$();
  dart.addTypeTests(src__null_stream_sink.NullStreamSink, _is_NullStreamSink_default);
  dart.trackLibraries("packages/async/src/null_stream_sink.ddc", {
    "package:async/src/null_stream_sink.dart": src__null_stream_sink
  }, '{"version":3,"sourceRoot":"","sources":["null_stream_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MA4Be;;;;;;UA4BJ,IAAM;iBAAJ;AACT,gCAAkB;MACpB;eAEc,KAAK,EAAG,UAAqB;mCAAV;AAC/B,gCAAkB;MACpB;gBAEiB,MAAgB;2BAAN;AACzB,gCAAkB;AAElB,2BAAa,GAAG;AAChB,gBAAa,MAAM,OAAO,CAAC,YAAY;YAAnC,yBAAyC,AAAI,kBAAY;AAC7D,cAAO,OAAM,aAAa,CAAC;AACzB,6BAAa,GAAG;;MAEpB;;AAKE,sBAAI,aAAO,GAAE,WAAM,IAAI,mBAAU,CAAC;AAClC,sBAAI,mBAAa,GAAE;AACjB,qBAAM,IAAI,mBAAU,CAAC;;MAEzB;;AAGE,qBAAO,GAAG;AACV,cAAO,UAAI;MACb;;;UA1CuB;MAbnB,aAAO,GAAG;MAOV,mBAAa,GAAG;MAMY,WAAI,GAAG,IAAI,WAAJ,IAAI,GAAI,AAAI,kBAAY;IAAE;qCAK5C,KAAK,EAAG,UAAqB;iCAAV;MAlBpC,aAAO,GAAG;MAOV,mBAAa,GAAG;cAYP,AAAI,kBAAY,CAAC,KAAK,EAAE,UAAU;mBAI1B,QAAC,CAAC;;MAJjB,WAAI;IAIkB","file":"null_stream_sink.ddc.js"}');
  // Exports:
  return {
    src__null_stream_sink: src__null_stream_sink
  };
});

//# sourceMappingURL=null_stream_sink.ddc.js.map
