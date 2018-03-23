define(['dart_sdk', 'packages/async/src/null_stream_sink'], function(dart_sdk, null_stream_sink) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__null_stream_sink = null_stream_sink.src__null_stream_sink;
  const _root = Object.create(null);
  const src__stream_sink_completer = Object.create(_root);
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const _sink = Symbol('_sink');
  const _destinationSink = Symbol('_destinationSink');
  const _setDestinationSink = Symbol('_setDestinationSink');
  const _is_StreamSinkCompleter_default = Symbol('_is_StreamSinkCompleter_default');
  src__stream_sink_completer.StreamSinkCompleter$ = dart.generic(T => {
    let _CompleterSinkOfT = () => (_CompleterSinkOfT = dart.constFn(src__stream_sink_completer._CompleterSink$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    class StreamSinkCompleter extends core.Object {
      get sink() {
        return this[sink];
      }
      set sink(value) {
        super.sink = value;
      }
      get [_sink]() {
        return _CompleterSinkOfT()._check(this.sink);
      }
      static fromFuture(T, sinkFuture) {
        let completer = new (src__stream_sink_completer.StreamSinkCompleter$(T)).new();
        sinkFuture.then(dart.void, dart.bind(completer, 'setDestinationSink'), {onError: dart.bind(completer, 'setError')});
        return completer.sink;
      }
      setDestinationSink(destinationSink) {
        StreamSinkOfT()._check(destinationSink);
        if (this[_sink][_destinationSink] != null) {
          dart.throw(new core.StateError.new("Destination sink already set"));
        }
        this[_sink][_setDestinationSink](destinationSink);
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.setDestinationSink(new (NullStreamSinkOfT()).error(error, stackTrace));
      }
    }
    (StreamSinkCompleter.new = function() {
      this[sink] = new (_CompleterSinkOfT()).new();
    }).prototype = StreamSinkCompleter.prototype;
    dart.addTypeTests(StreamSinkCompleter);
    StreamSinkCompleter.prototype[_is_StreamSinkCompleter_default] = true;
    const sink = Symbol("StreamSinkCompleter.sink");
    dart.setMethodSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getMethods(StreamSinkCompleter.__proto__),
      setDestinationSink: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setStaticMethodSignature(StreamSinkCompleter, () => ({fromFuture: dart.gFnType(T => [async.StreamSink$(T), [async.Future$(async.StreamSink$(T))]])}));
    dart.setGetterSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getGetters(StreamSinkCompleter.__proto__),
      [_sink]: dart.fnType(src__stream_sink_completer._CompleterSink$(T), [])
    }));
    dart.setFieldSignature(StreamSinkCompleter, () => ({
      __proto__: dart.getFields(StreamSinkCompleter.__proto__),
      sink: dart.finalFieldType(StreamSinkOfT())
    }));
    return StreamSinkCompleter;
  });
  src__stream_sink_completer.StreamSinkCompleter = src__stream_sink_completer.StreamSinkCompleter$();
  dart.addTypeTests(src__stream_sink_completer.StreamSinkCompleter, _is_StreamSinkCompleter_default);
  const _controller = Symbol('_controller');
  const _doneCompleter = Symbol('_doneCompleter');
  const _canSendDirectly = Symbol('_canSendDirectly');
  const _ensureController = Symbol('_ensureController');
  const _is__CompleterSink_default = Symbol('_is__CompleterSink_default');
  src__stream_sink_completer._CompleterSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _CompleterSink extends core.Object {
      get [_canSendDirectly]() {
        return this[_controller] == null && this[_destinationSink] != null;
      }
      get done() {
        if (this[_doneCompleter] != null) return this[_doneCompleter].future;
        if (this[_destinationSink] == null) {
          this[_doneCompleter] = async.Completer.sync();
          return this[_doneCompleter].future;
        }
        return this[_destinationSink].done;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].add(event);
        } else {
          this[_ensureController]();
          this[_controller].add(event);
        }
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].addError(error, stackTrace);
        } else {
          this[_ensureController]();
          this[_controller].addError(error, stackTrace);
        }
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_canSendDirectly])) return this[_destinationSink].addStream(stream);
        this[_ensureController]();
        return this[_controller].addStream(stream, {cancelOnError: false});
      }
      close() {
        if (dart.test(this[_canSendDirectly])) {
          this[_destinationSink].close();
        } else {
          this[_ensureController]();
          this[_controller].close();
        }
        return this.done;
      }
      [_ensureController]() {
        if (this[_controller] == null) this[_controller] = StreamControllerOfT().new({sync: true});
      }
      [_setDestinationSink](sink) {
        StreamSinkOfT()._check(sink);
        if (!(this[_destinationSink] == null)) dart.assertFailed();
        this[_destinationSink] = sink;
        if (this[_controller] != null) {
          sink.addStream(this[_controller].stream).whenComplete(dart.bind(sink, 'close')).catchError(dart.fn(_ => {
          }, dynamicToNull()));
        }
        if (this[_doneCompleter] != null) {
          this[_doneCompleter].complete(sink.done);
        }
      }
    }
    (_CompleterSink.new = function() {
      this[_controller] = null;
      this[_doneCompleter] = null;
      this[_destinationSink] = null;
    }).prototype = _CompleterSink.prototype;
    dart.addTypeTests(_CompleterSink);
    _CompleterSink.prototype[_is__CompleterSink_default] = true;
    _CompleterSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(_CompleterSink, () => ({
      __proto__: dart.getMethods(_CompleterSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, []),
      [_ensureController]: dart.fnType(dart.void, []),
      [_setDestinationSink]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(_CompleterSink, () => ({
      __proto__: dart.getGetters(_CompleterSink.__proto__),
      [_canSendDirectly]: dart.fnType(core.bool, []),
      done: dart.fnType(async.Future, [])
    }));
    dart.setFieldSignature(_CompleterSink, () => ({
      __proto__: dart.getFields(_CompleterSink.__proto__),
      [_controller]: dart.fieldType(StreamControllerOfT()),
      [_doneCompleter]: dart.fieldType(async.Completer),
      [_destinationSink]: dart.fieldType(StreamSinkOfT())
    }));
    return _CompleterSink;
  });
  src__stream_sink_completer._CompleterSink = src__stream_sink_completer._CompleterSink$();
  dart.addTypeTests(src__stream_sink_completer._CompleterSink, _is__CompleterSink_default);
  dart.trackLibraries("packages/async/src/stream_sink_completer.ddc", {
    "package:async/src/stream_sink_completer.dart": src__stream_sink_completer
  }, '{"version":3,"sourceRoot":"","sources":["stream_sink_completer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MA0BsB;;;;;;;0CAGW,SAAI;;2BASA,UAAgC;AACjE,YAAI,YAAY,IAAI,wDAAsB;AAC1C,kBAAU,KAAK,sBAAC,SAAS,6CAA8B,SAAS;AAChE,cAAO,UAAS,KAAK;MACvB;yBAiBwB,eAA6B;+BAAf;AACpC,YAAI,WAAK,kBAAiB,IAAI,MAAM;AAClC,qBAAM,IAAI,mBAAU,CAAC;;AAEvB,mBAAK,qBAAoB,CAAC,eAAe;MAC3C;eAQc,KAAK,EAAG,UAAqB;mCAAV;AAC/B,+BAAkB,CAAC,IAAI,2BAAoB,CAAC,KAAK,EAAE,UAAU;MAC/D;;;MAhDoB,UAAI,GAAG,IAAI,yBAAiB;IAiDlD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAuB+B,AAAoB,kBAAT,IAAI,QAAQ,sBAAgB,IAAI;MAAI;;AAG1E,YAAI,oBAAc,IAAI,MAAM,MAAO,qBAAc,OAAO;AACxD,YAAI,sBAAgB,IAAI,MAAM;AAC5B,8BAAc,GAAG,AAAI,oBAAc;AACnC,gBAAO,qBAAc,OAAO;;AAE9B,cAAO,uBAAgB,KAAK;MAC9B;UAES,KAAO;iBAAL;AACT,sBAAI,sBAAgB,GAAE;AACpB,gCAAgB,IAAI,CAAC,KAAK;eACrB;AACL,iCAAiB;AACjB,2BAAW,IAAI,CAAC,KAAK;;MAEzB;eAEc,KAAK,EAAG,UAAqB;mCAAV;AAC/B,sBAAI,sBAAgB,GAAE;AACpB,gCAAgB,SAAS,CAAC,KAAK,EAAE,UAAU;eACtC;AACL,iCAAiB;AACjB,2BAAW,SAAS,CAAC,KAAK,EAAE,UAAU;;MAE1C;gBAEiB,MAAgB;2BAAN;AACzB,sBAAI,sBAAgB,GAAE,MAAO,uBAAgB,UAAU,CAAC,MAAM;AAE9D,+BAAiB;AACjB,cAAO,kBAAW,UAAU,CAAC,MAAM,kBAAiB;MACtD;;AAGE,sBAAI,sBAAgB,GAAE;AACpB,gCAAgB,MAAM;eACjB;AACL,iCAAiB;AACjB,2BAAW,MAAM;;AAEnB,cAAO,UAAI;MACb;;AAIE,YAAI,iBAAW,IAAI,MAAM,iBAAW,GAAG,AAAI,yBAAgB,QAAO;MACpE;4BAQyB,IAAkB;+BAAJ;AACrC,cAAO,sBAAgB,IAAI;AAC3B,8BAAgB,GAAG,IAAI;AAIvB,YAAI,iBAAW,IAAI,MAAM;AAGvB,cAAI,UACU,CAAC,iBAAW,OAAO,cAChB,WAAC,IAAI,sBACP,CAAC,QAAC,CAAC;;;AAKpB,YAAI,oBAAc,IAAI,MAAM;AAC1B,8BAAc,SAAS,CAAC,IAAI,KAAK;;MAErC;;;MA5FoB,iBAAW;MAMrB,oBAAc;MAKV,sBAAgB;IAkFhC","file":"stream_sink_completer.ddc.js"}');
  // Exports:
  return {
    src__stream_sink_completer: src__stream_sink_completer
  };
});

//# sourceMappingURL=stream_sink_completer.ddc.js.map
