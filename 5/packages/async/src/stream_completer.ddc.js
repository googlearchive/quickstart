define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__stream_completer = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _stream = Symbol('_stream');
  const _isSourceStreamSet = Symbol('_isSourceStreamSet');
  const _setSourceStream = Symbol('_setSourceStream');
  const _setEmpty = Symbol('_setEmpty');
  const _is_StreamCompleter_default = Symbol('_is_StreamCompleter_default');
  src__stream_completer.StreamCompleter$ = dart.generic(T => {
    let _CompleterStreamOfT = () => (_CompleterStreamOfT = dart.constFn(src__stream_completer._CompleterStream$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class StreamCompleter extends core.Object {
      static fromFuture(T, streamFuture) {
        let completer = new (src__stream_completer.StreamCompleter$(T)).new();
        streamFuture.then(dart.void, dart.bind(completer, 'setSourceStream'), {onError: dart.bind(completer, 'setError')});
        return completer.stream;
      }
      get stream() {
        return this[_stream];
      }
      setSourceStream(sourceStream) {
        StreamOfT()._check(sourceStream);
        if (dart.test(this[_stream][_isSourceStreamSet])) {
          dart.throw(new core.StateError.new("Source stream already set"));
        }
        this[_stream][_setSourceStream](sourceStream);
      }
      setEmpty() {
        if (dart.test(this[_stream][_isSourceStreamSet])) {
          dart.throw(new core.StateError.new("Source stream already set"));
        }
        this[_stream][_setEmpty]();
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.setSourceStream(StreamOfT().fromFuture(FutureOfT().error(error, stackTrace)));
      }
    }
    (StreamCompleter.new = function() {
      this[_stream] = new (_CompleterStreamOfT()).new();
    }).prototype = StreamCompleter.prototype;
    dart.addTypeTests(StreamCompleter);
    StreamCompleter.prototype[_is_StreamCompleter_default] = true;
    dart.setMethodSignature(StreamCompleter, () => ({
      __proto__: dart.getMethods(StreamCompleter.__proto__),
      setSourceStream: dart.fnType(dart.void, [core.Object]),
      setEmpty: dart.fnType(dart.void, []),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setStaticMethodSignature(StreamCompleter, () => ({fromFuture: dart.gFnType(T => [async.Stream$(T), [async.Future$(async.Stream$(T))]])}));
    dart.setGetterSignature(StreamCompleter, () => ({
      __proto__: dart.getGetters(StreamCompleter.__proto__),
      stream: dart.fnType(async.Stream$(T), [])
    }));
    dart.setFieldSignature(StreamCompleter, () => ({
      __proto__: dart.getFields(StreamCompleter.__proto__),
      [_stream]: dart.finalFieldType(_CompleterStreamOfT())
    }));
    return StreamCompleter;
  });
  src__stream_completer.StreamCompleter = src__stream_completer.StreamCompleter$();
  dart.addTypeTests(src__stream_completer.StreamCompleter, _is_StreamCompleter_default);
  const _controller = Symbol('_controller');
  const _sourceStream = Symbol('_sourceStream');
  const _createController = Symbol('_createController');
  const _linkStreamToController = Symbol('_linkStreamToController');
  const _is__CompleterStream_default = Symbol('_is__CompleterStream_default');
  src__stream_completer._CompleterStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let TTodynamic = () => (TTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T])))();
    class _CompleterStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_controller] == null) {
          if (this[_sourceStream] != null && !dart.test(this[_sourceStream].isBroadcast)) {
            return this[_sourceStream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
          }
          this[_createController]();
          if (this[_sourceStream] != null) {
            this[_linkStreamToController]();
          }
        }
        return this[_controller].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get [_isSourceStreamSet]() {
        return this[_sourceStream] != null;
      }
      [_setSourceStream](sourceStream) {
        StreamOfT()._check(sourceStream);
        if (!(this[_sourceStream] == null)) dart.assertFailed();
        this[_sourceStream] = sourceStream;
        if (this[_controller] != null) {
          this[_linkStreamToController]();
        }
      }
      [_linkStreamToController]() {
        if (!(this[_controller] != null)) dart.assertFailed();
        if (!(this[_sourceStream] != null)) dart.assertFailed();
        this[_controller].addStream(this[_sourceStream], {cancelOnError: false}).whenComplete(dart.bind(this[_controller], 'close'));
      }
      [_setEmpty]() {
        if (!(this[_sourceStream] == null)) dart.assertFailed();
        if (this[_controller] == null) {
          this[_createController]();
        }
        this[_sourceStream] = this[_controller].stream;
        this[_controller].close();
      }
      [_createController]() {
        if (!(this[_controller] == null)) dart.assertFailed();
        this[_controller] = StreamControllerOfT().new({sync: true});
      }
    }
    (_CompleterStream.new = function() {
      this[_controller] = null;
      this[_sourceStream] = null;
      _CompleterStream.__proto__.new.call(this);
    }).prototype = _CompleterStream.prototype;
    dart.addTypeTests(_CompleterStream);
    _CompleterStream.prototype[_is__CompleterStream_default] = true;
    dart.setMethodSignature(_CompleterStream, () => ({
      __proto__: dart.getMethods(_CompleterStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [TTodynamic()], {onError: core.Function, onDone: VoidTovoid(), cancelOnError: core.bool}),
      [_setSourceStream]: dart.fnType(dart.void, [core.Object]),
      [_linkStreamToController]: dart.fnType(dart.void, []),
      [_setEmpty]: dart.fnType(dart.void, []),
      [_createController]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_CompleterStream, () => ({
      __proto__: dart.getGetters(_CompleterStream.__proto__),
      [_isSourceStreamSet]: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(_CompleterStream, () => ({
      __proto__: dart.getFields(_CompleterStream.__proto__),
      [_controller]: dart.fieldType(StreamControllerOfT()),
      [_sourceStream]: dart.fieldType(StreamOfT())
    }));
    return _CompleterStream;
  });
  src__stream_completer._CompleterStream = src__stream_completer._CompleterStream$();
  dart.addTypeTests(src__stream_completer._CompleterStream, _is__CompleterStream_default);
  dart.trackLibraries("packages/async/src/stream_completer.ddc", {
    "package:async/src/stream_completer.dart": src__stream_completer
  }, '{"version":3,"sourceRoot":"","sources":["stream_completer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;2BAoCiC,YAA8B;AAC3D,YAAI,YAAY,IAAI,+CAAkB;AACtC,oBAAY,KAAK,sBAAC,SAAS,0CAA2B,SAAS;AAC/D,cAAO,UAAS,OAAO;MACzB;;cAWwB,cAAO;;sBAwBV,YAAsB;2BAAZ;AAC7B,sBAAI,aAAO,oBAAmB,GAAE;AAC9B,qBAAM,IAAI,mBAAU,CAAC;;AAEvB,qBAAO,kBAAiB,CAAC,YAAY;MACvC;;AAOE,sBAAI,aAAO,oBAAmB,GAAE;AAC9B,qBAAM,IAAI,mBAAU,CAAC;;AAEvB,qBAAO,WAAU;MACnB;eAQc,KAAK,EAAG,UAAqB;mCAAV;AAC/B,4BAAe,CAAC,AAAI,sBAAiB,CAAC,AAAI,iBAAY,CAAC,KAAK,EAAE,UAAU;MAC1E;;;MA3EM,aAAO,GAAG,IAAI,2BAAmB;IA4EzC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;aAgB+B,MAAc;YAC7B;YAAc;YAAe;AACzC,YAAI,iBAAW,IAAI,MAAM;AACvB,cAAI,mBAAa,IAAI,mBAAS,mBAAa,YAAY,GAAE;AAGvD,kBAAO,oBAAa,OAAO,CAAC,MAAM,YACrB,OAAO,UAAU,MAAM,iBAAiB,aAAa;;AAEpE,iCAAiB;AACjB,cAAI,mBAAa,IAAI,MAAM;AACzB,yCAAuB;;;AAG3B,cAAO,kBAAW,OAAO,OAAO,CAAC,MAAM,YAC1B,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;;cAK+B,oBAAa,IAAI;MAAI;yBAQ9B,YAAsB;2BAAZ;AAC9B,cAAO,mBAAa,IAAI;AACxB,2BAAa,GAAG,YAAY;AAC5B,YAAI,iBAAW,IAAI,MAAM;AAEvB,uCAAuB;;MAE3B;;AAIE,cAAO,iBAAW,IAAI;AACtB,cAAO,mBAAa,IAAI;AACxB,yBAAW,UACG,CAAC,mBAAa,kBAAiB,oBAC5B,WAAC,iBAAW;MAC/B;;AAOE,cAAO,mBAAa,IAAI;AACxB,YAAI,iBAAW,IAAI,MAAM;AACvB,iCAAiB;;AAEnB,2BAAa,GAAG,iBAAW,OAAO;AAClC,yBAAW,MAAM;MACnB;;AAIE,cAAO,iBAAW,IAAI;AACtB,yBAAW,GAAG,AAAI,yBAAmB,QAAO;MAC9C;;;MAxEoB,iBAAW;MAMrB,mBAAa;;IAmEzB","file":"stream_completer.ddc.js"}');
  // Exports:
  return {
    src__stream_completer: src__stream_completer
  };
});

//# sourceMappingURL=stream_completer.ddc.js.map
