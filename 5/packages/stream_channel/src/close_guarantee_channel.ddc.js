define(['dart_sdk', 'packages/async/src/single_subscription_transformer', 'packages/async/src/stream_sink_transformer', 'packages/async/src/delegate/stream', 'packages/async/src/delegate/stream_sink', 'packages/async/src/stream_completer', 'packages/async/src/stream_sink_completer', 'packages/async/src/null_stream_sink', 'packages/async/src/subscription_stream', 'packages/stack_trace/src/chain', 'packages/async/src/typed_stream_transformer', 'packages/async/src/async_memoizer'], function(dart_sdk, single_subscription_transformer, stream_sink_transformer, stream, stream_sink, stream_completer, stream_sink_completer, null_stream_sink, subscription_stream, chain, typed_stream_transformer, async_memoizer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const isolate = dart_sdk.isolate;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__single_subscription_transformer = single_subscription_transformer.src__single_subscription_transformer;
  const src__stream_sink_transformer = stream_sink_transformer.src__stream_sink_transformer;
  const src__delegate__stream = stream.src__delegate__stream;
  const src__delegate__stream_sink = stream_sink.src__delegate__stream_sink;
  const src__stream_completer = stream_completer.src__stream_completer;
  const src__stream_sink_completer = stream_sink_completer.src__stream_sink_completer;
  const src__null_stream_sink = null_stream_sink.src__null_stream_sink;
  const src__subscription_stream = subscription_stream.src__subscription_stream;
  const src__trace = chain.src__trace;
  const src__typed_stream_transformer = typed_stream_transformer.src__typed_stream_transformer;
  const src__async_memoizer = async_memoizer.src__async_memoizer;
  const _root = Object.create(null);
  const src__guarantee_channel = Object.create(_root);
  const src__close_guarantee_channel = Object.create(_root);
  const src__stream_channel_controller = Object.create(_root);
  const src__stream_channel_completer = Object.create(_root);
  const src__isolate_channel = Object.create(_root);
  const src__multi_channel = Object.create(_root);
  const src__transformer__typed = Object.create(_root);
  const src__stream_channel_transformer = Object.create(_root);
  const src__json_document_transformer = Object.create(_root);
  const src__delegating_stream_channel = Object.create(_root);
  const src__disconnector = Object.create(_root);
  const stream_channel = Object.create(_root);
  const $_set = dartx._set;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureOfStreamChannel = () => (FutureOfStreamChannel = dart.constFn(async.Future$(stream_channel.StreamChannel)))();
  let dynamicToNull$ = () => (dynamicToNull$ = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfint$StreamChannelController = () => (IdentityMapOfint$StreamChannelController = dart.constFn(_js_helper.IdentityMap$(core.int, src__stream_channel_controller.StreamChannelController)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid$ = () => (VoidTovoid$ = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToStreamChannelController = () => (VoidToStreamChannelController = dart.constFn(dart.fnType(src__stream_channel_controller.StreamChannelController, [])))();
  let dynamicToNull$0 = () => (dynamicToNull$0 = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let MapOfint$StreamChannelController = () => (MapOfint$StreamChannelController = dart.constFn(core.Map$(core.int, src__stream_channel_controller.StreamChannelController)))();
  let SetOfint = () => (SetOfint = dart.constFn(core.Set$(core.int)))();
  let ObjectAndObjectTodynamic = () => (ObjectAndObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object, core.Object])))();
  let StreamChannelOfString = () => (StreamChannelOfString = dart.constFn(stream_channel.StreamChannel$(core.String)))();
  let dynamicAndEventSinkToNull = () => (dynamicAndEventSinkToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, async.EventSink])))();
  let StreamChannelTransformerOfObject$String = () => (StreamChannelTransformerOfObject$String = dart.constFn(src__stream_channel_transformer.StreamChannelTransformer$(core.Object, core.String)))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let dynamicToNull$1 = () => (dynamicToNull$1 = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicToNull$2 = () => (dynamicToNull$2 = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const _sink = Symbol('_sink');
  const _streamController = Symbol('_streamController');
  const _subscription = Symbol('_subscription');
  const _disconnected = Symbol('_disconnected');
  const _onStreamDisconnected = Symbol('_onStreamDisconnected');
  const _onSinkDisconnected = Symbol('_onSinkDisconnected');
  const _is_StreamChannelMixin_default = Symbol('_is_StreamChannelMixin_default');
  stream_channel.StreamChannelMixin$ = dart.generic(T => {
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    let StreamSinkTransformerOfT$T = () => (StreamSinkTransformerOfT$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(T, T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTToStreamOfT = () => (StreamOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [StreamOfT()])))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let StreamSinkOfTToStreamSinkOfT = () => (StreamSinkOfTToStreamSinkOfT = dart.constFn(dart.fnType(StreamSinkOfT(), [StreamSinkOfT()])))();
    class StreamChannelMixin extends core.Object {
      pipe(other) {
        StreamChannelOfT()._check(other);
        this.stream.pipe(other.sink);
        other.stream.pipe(this.sink);
      }
      transform(S, transformer) {
        src__stream_channel_transformer.StreamChannelTransformer$(S, T)._check(transformer);
        return transformer.bind(this);
      }
      transformStream(transformer) {
        StreamTransformerOfT$T()._check(transformer);
        return this.changeStream(dart.bind(transformer, 'bind'));
      }
      transformSink(transformer) {
        StreamSinkTransformerOfT$T()._check(transformer);
        return this.changeSink(dart.bind(transformer, 'bind'));
      }
      changeStream(change) {
        StreamOfTToStreamOfT()._check(change);
        return StreamChannelOfT().withCloseGuarantee(change(this.stream), this.sink);
      }
      changeSink(change) {
        StreamSinkOfTToStreamSinkOfT()._check(change);
        return StreamChannelOfT().withCloseGuarantee(this.stream, change(this.sink));
      }
      cast(S) {
        return stream_channel.StreamChannel$(S).new(src__delegate__stream.DelegatingStream.typed(S, this.stream), src__delegate__stream_sink.DelegatingStreamSink.typed(S, this.sink));
      }
    }
    (StreamChannelMixin.new = function() {
    }).prototype = StreamChannelMixin.prototype;
    dart.addTypeTests(StreamChannelMixin);
    StreamChannelMixin.prototype[_is_StreamChannelMixin_default] = true;
    StreamChannelMixin[dart.implements] = () => [StreamChannelOfT()];
    dart.setMethodSignature(StreamChannelMixin, () => ({
      __proto__: dart.getMethods(StreamChannelMixin.__proto__),
      pipe: dart.fnType(dart.void, [core.Object]),
      transform: dart.gFnType(S => [stream_channel.StreamChannel$(S), [core.Object]]),
      transformStream: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      transformSink: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      changeStream: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      changeSink: dart.fnType(stream_channel.StreamChannel$(T), [core.Object]),
      cast: dart.gFnType(S => [stream_channel.StreamChannel$(S), []])
    }));
    return StreamChannelMixin;
  });
  stream_channel.StreamChannelMixin = stream_channel.StreamChannelMixin$();
  dart.addTypeTests(stream_channel.StreamChannelMixin, _is_StreamChannelMixin_default);
  const _is_GuaranteeChannel_default = Symbol('_is_GuaranteeChannel_default');
  src__guarantee_channel.GuaranteeChannel$ = dart.generic(T => {
    let _GuaranteeSinkOfT = () => (_GuaranteeSinkOfT = dart.constFn(src__guarantee_channel._GuaranteeSink$(T)))();
    let SingleSubscriptionTransformerOfT$T = () => (SingleSubscriptionTransformerOfT$T = dart.constFn(src__single_subscription_transformer.SingleSubscriptionTransformer$(T, T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class GuaranteeChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_streamController].stream;
      }
      get sink() {
        return this[_sink];
      }
      [_onSinkDisconnected]() {
        this[_disconnected] = true;
        if (this[_subscription] != null) this[_subscription].cancel();
        this[_streamController].close();
      }
    }
    (GuaranteeChannel.new = function(innerStream, innerSink, opts) {
      let allowSinkErrors = opts && 'allowSinkErrors' in opts ? opts.allowSinkErrors : true;
      this[_sink] = null;
      this[_streamController] = null;
      this[_subscription] = null;
      this[_disconnected] = false;
      this[_sink] = new (_GuaranteeSinkOfT()).new(innerSink, this, {allowErrors: allowSinkErrors});
      if (dart.test(innerStream.isBroadcast)) {
        innerStream = innerStream.transform(T, dart.const(new (SingleSubscriptionTransformerOfT$T()).new()));
      }
      this[_streamController] = StreamControllerOfT().new({onListen: dart.fn(() => {
          if (dart.test(this[_disconnected])) return;
          this[_subscription] = innerStream.listen(dart.bind(this[_streamController], 'add'), {onError: dart.bind(this[_streamController], 'addError'), onDone: dart.fn(() => {
              this[_sink][_onStreamDisconnected]();
              this[_streamController].close();
            }, VoidToNull())});
        }, VoidToNull()), sync: true});
    }).prototype = GuaranteeChannel.prototype;
    dart.addTypeTests(GuaranteeChannel);
    GuaranteeChannel.prototype[_is_GuaranteeChannel_default] = true;
    dart.setMethodSignature(GuaranteeChannel, () => ({
      __proto__: dart.getMethods(GuaranteeChannel.__proto__),
      [_onSinkDisconnected]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(GuaranteeChannel, () => ({
      __proto__: dart.getGetters(GuaranteeChannel.__proto__),
      stream: dart.fnType(async.Stream$(T), []),
      sink: dart.fnType(async.StreamSink$(T), [])
    }));
    dart.setFieldSignature(GuaranteeChannel, () => ({
      __proto__: dart.getFields(GuaranteeChannel.__proto__),
      [_sink]: dart.fieldType(_GuaranteeSinkOfT()),
      [_streamController]: dart.fieldType(StreamControllerOfT()),
      [_subscription]: dart.fieldType(StreamSubscriptionOfT()),
      [_disconnected]: dart.fieldType(core.bool)
    }));
    return GuaranteeChannel;
  });
  src__guarantee_channel.GuaranteeChannel = src__guarantee_channel.GuaranteeChannel$();
  dart.addTypeTests(src__guarantee_channel.GuaranteeChannel, _is_GuaranteeChannel_default);
  const _inner = Symbol('_inner');
  const _channel = Symbol('_channel');
  const _allowErrors = Symbol('_allowErrors');
  const _doneCompleter = Symbol('_doneCompleter');
  const _closed = Symbol('_closed');
  const _addStreamSubscription = Symbol('_addStreamSubscription');
  const _addStreamCompleter = Symbol('_addStreamCompleter');
  const _inAddStream = Symbol('_inAddStream');
  const _addError = Symbol('_addError');
  const _is__GuaranteeSink_default = Symbol('_is__GuaranteeSink_default');
  src__guarantee_channel._GuaranteeSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let GuaranteeChannelOfT = () => (GuaranteeChannelOfT = dart.constFn(src__guarantee_channel.GuaranteeChannel$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class _GuaranteeSink extends core.Object {
      get done() {
        return this[_doneCompleter].future;
      }
      get [_inAddStream]() {
        return this[_addStreamSubscription] != null;
      }
      add(data) {
        T._check(data);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_disconnected])) return;
        this[_inner].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_disconnected])) return;
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_allowErrors])) {
          this[_inner].addError(error, stackTrace);
          return;
        }
        this[_doneCompleter].completeError(error, stackTrace);
        this[_onStreamDisconnected]();
        this[_channel][_onSinkDisconnected]();
        this[_inner].close().catchError(dart.fn(_ => {
        }, dynamicToNull()));
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("Cannot add stream after closing."));
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot add stream while adding stream."));
        }
        if (dart.test(this[_disconnected])) return async.Future.value();
        this[_addStreamCompleter] = async.Completer.sync();
        this[_addStreamSubscription] = stream.listen(dart.bind(this[_inner], 'add'), {onError: dart.bind(this, _addError), onDone: dart.bind(this[_addStreamCompleter], 'complete')});
        return this[_addStreamCompleter].future.then(dart.dynamic, dart.fn(_ => {
          this[_addStreamCompleter] = null;
          this[_addStreamSubscription] = null;
        }, dynamicToNull()));
      }
      close() {
        if (dart.test(this[_inAddStream])) {
          dart.throw(new core.StateError.new("Cannot close sink while adding stream."));
        }
        if (dart.test(this[_closed])) return this.done;
        this[_closed] = true;
        if (!dart.test(this[_disconnected])) {
          this[_channel][_onSinkDisconnected]();
          this[_doneCompleter].complete(this[_inner].close());
        }
        return this.done;
      }
      [_onStreamDisconnected]() {
        this[_disconnected] = true;
        if (!dart.test(this[_doneCompleter].isCompleted)) this[_doneCompleter].complete();
        if (!dart.test(this[_inAddStream])) return;
        this[_addStreamCompleter].complete(this[_addStreamSubscription].cancel());
        this[_addStreamCompleter] = null;
        this[_addStreamSubscription] = null;
      }
    }
    (_GuaranteeSink.new = function(inner, channel, opts) {
      let allowErrors = opts && 'allowErrors' in opts ? opts.allowErrors : true;
      this[_doneCompleter] = async.Completer.new();
      this[_disconnected] = false;
      this[_closed] = false;
      this[_addStreamSubscription] = null;
      this[_addStreamCompleter] = null;
      this[_inner] = inner;
      this[_channel] = channel;
      this[_allowErrors] = allowErrors;
    }).prototype = _GuaranteeSink.prototype;
    dart.addTypeTests(_GuaranteeSink);
    _GuaranteeSink.prototype[_is__GuaranteeSink_default] = true;
    _GuaranteeSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(_GuaranteeSink, () => ({
      __proto__: dart.getMethods(_GuaranteeSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, []),
      [_onStreamDisconnected]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_GuaranteeSink, () => ({
      __proto__: dart.getGetters(_GuaranteeSink.__proto__),
      done: dart.fnType(async.Future, []),
      [_inAddStream]: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(_GuaranteeSink, () => ({
      __proto__: dart.getFields(_GuaranteeSink.__proto__),
      [_inner]: dart.finalFieldType(StreamSinkOfT()),
      [_channel]: dart.finalFieldType(GuaranteeChannelOfT()),
      [_doneCompleter]: dart.finalFieldType(async.Completer),
      [_disconnected]: dart.fieldType(core.bool),
      [_closed]: dart.fieldType(core.bool),
      [_addStreamSubscription]: dart.fieldType(StreamSubscriptionOfT()),
      [_addStreamCompleter]: dart.fieldType(async.Completer),
      [_allowErrors]: dart.finalFieldType(core.bool)
    }));
    return _GuaranteeSink;
  });
  src__guarantee_channel._GuaranteeSink = src__guarantee_channel._GuaranteeSink$();
  dart.addTypeTests(src__guarantee_channel._GuaranteeSink, _is__GuaranteeSink_default);
  const _stream = Symbol('_stream');
  const _sink$ = Symbol('_sink');
  const _disconnected$ = Symbol('_disconnected');
  const _subscription$ = Symbol('_subscription');
  const _is_CloseGuaranteeChannel_default = Symbol('_is_CloseGuaranteeChannel_default');
  src__close_guarantee_channel.CloseGuaranteeChannel$ = dart.generic(T => {
    let _CloseGuaranteeSinkOfT = () => (_CloseGuaranteeSinkOfT = dart.constFn(src__close_guarantee_channel._CloseGuaranteeSink$(T)))();
    let _CloseGuaranteeStreamOfT = () => (_CloseGuaranteeStreamOfT = dart.constFn(src__close_guarantee_channel._CloseGuaranteeStream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class CloseGuaranteeChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_stream];
      }
      get sink() {
        return this[_sink$];
      }
      get [_subscription$]() {
        return this[_subscription];
      }
      set [_subscription$](value) {
        this[_subscription] = StreamSubscriptionOfT()._check(value);
      }
    }
    (CloseGuaranteeChannel.new = function(innerStream, innerSink) {
      this[_stream] = null;
      this[_sink$] = null;
      this[_subscription] = null;
      this[_disconnected$] = false;
      this[_sink$] = new (_CloseGuaranteeSinkOfT()).new(innerSink, this);
      this[_stream] = new (_CloseGuaranteeStreamOfT()).new(innerStream, this);
    }).prototype = CloseGuaranteeChannel.prototype;
    dart.addTypeTests(CloseGuaranteeChannel);
    CloseGuaranteeChannel.prototype[_is_CloseGuaranteeChannel_default] = true;
    const _subscription = Symbol("CloseGuaranteeChannel._subscription");
    dart.setGetterSignature(CloseGuaranteeChannel, () => ({
      __proto__: dart.getGetters(CloseGuaranteeChannel.__proto__),
      stream: dart.fnType(async.Stream$(T), []),
      sink: dart.fnType(async.StreamSink$(T), [])
    }));
    dart.setFieldSignature(CloseGuaranteeChannel, () => ({
      __proto__: dart.getFields(CloseGuaranteeChannel.__proto__),
      [_stream]: dart.fieldType(_CloseGuaranteeStreamOfT()),
      [_sink$]: dart.fieldType(_CloseGuaranteeSinkOfT()),
      [_subscription$]: dart.fieldType(StreamSubscriptionOfT()),
      [_disconnected$]: dart.fieldType(core.bool)
    }));
    return CloseGuaranteeChannel;
  });
  src__close_guarantee_channel.CloseGuaranteeChannel = src__close_guarantee_channel.CloseGuaranteeChannel$();
  dart.addTypeTests(src__close_guarantee_channel.CloseGuaranteeChannel, _is_CloseGuaranteeChannel_default);
  const _inner$ = Symbol('_inner');
  const _channel$ = Symbol('_channel');
  const _is__CloseGuaranteeStream_default = Symbol('_is__CloseGuaranteeStream_default');
  src__close_guarantee_channel._CloseGuaranteeStream$ = dart.generic(T => {
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let CloseGuaranteeChannelOfT = () => (CloseGuaranteeChannelOfT = dart.constFn(src__close_guarantee_channel.CloseGuaranteeChannel$(T)))();
    class _CloseGuaranteeStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_channel$][_disconnected$])) {
          onData = null;
          onError = null;
        }
        let subscription = this[_inner$].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
        if (!dart.test(this[_channel$][_disconnected$])) {
          this[_channel$][_subscription$] = subscription;
        }
        return subscription;
      }
    }
    (_CloseGuaranteeStream.new = function(inner, channel) {
      this[_inner$] = inner;
      this[_channel$] = channel;
      _CloseGuaranteeStream.__proto__.new.call(this);
    }).prototype = _CloseGuaranteeStream.prototype;
    dart.addTypeTests(_CloseGuaranteeStream);
    _CloseGuaranteeStream.prototype[_is__CloseGuaranteeStream_default] = true;
    dart.setMethodSignature(_CloseGuaranteeStream, () => ({
      __proto__: dart.getMethods(_CloseGuaranteeStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [TTovoid()], {onError: core.Function, onDone: VoidTovoid(), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(_CloseGuaranteeStream, () => ({
      __proto__: dart.getFields(_CloseGuaranteeStream.__proto__),
      [_inner$]: dart.finalFieldType(StreamOfT()),
      [_channel$]: dart.finalFieldType(CloseGuaranteeChannelOfT())
    }));
    return _CloseGuaranteeStream;
  });
  src__close_guarantee_channel._CloseGuaranteeStream = src__close_guarantee_channel._CloseGuaranteeStream$();
  dart.addTypeTests(src__close_guarantee_channel._CloseGuaranteeStream, _is__CloseGuaranteeStream_default);
  const _is__CloseGuaranteeSink_default = Symbol('_is__CloseGuaranteeSink_default');
  src__close_guarantee_channel._CloseGuaranteeSink$ = dart.generic(T => {
    let CloseGuaranteeChannelOfT = () => (CloseGuaranteeChannelOfT = dart.constFn(src__close_guarantee_channel.CloseGuaranteeChannel$(T)))();
    class _CloseGuaranteeSink extends src__delegate__stream_sink.DelegatingStreamSink$(T) {
      close() {
        let done = super.close();
        this[_channel$][_disconnected$] = true;
        if (this[_channel$][_subscription$] != null) {
          this[_channel$][_subscription$].onData(null);
          this[_channel$][_subscription$].onError(null);
        }
        return done;
      }
    }
    (_CloseGuaranteeSink.new = function(inner, channel) {
      this[_channel$] = channel;
      _CloseGuaranteeSink.__proto__.new.call(this, inner);
    }).prototype = _CloseGuaranteeSink.prototype;
    dart.addTypeTests(_CloseGuaranteeSink);
    _CloseGuaranteeSink.prototype[_is__CloseGuaranteeSink_default] = true;
    dart.setFieldSignature(_CloseGuaranteeSink, () => ({
      __proto__: dart.getFields(_CloseGuaranteeSink.__proto__),
      [_channel$]: dart.finalFieldType(CloseGuaranteeChannelOfT())
    }));
    return _CloseGuaranteeSink;
  });
  src__close_guarantee_channel._CloseGuaranteeSink = src__close_guarantee_channel._CloseGuaranteeSink$();
  dart.addTypeTests(src__close_guarantee_channel._CloseGuaranteeSink, _is__CloseGuaranteeSink_default);
  const _local = Symbol('_local');
  const _foreign = Symbol('_foreign');
  const _is_StreamChannelController_default = Symbol('_is_StreamChannelController_default');
  src__stream_channel_controller.StreamChannelController$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class StreamChannelController extends core.Object {
      get local() {
        return this[_local];
      }
      get foreign() {
        return this[_foreign];
      }
    }
    (StreamChannelController.new = function(opts) {
      let allowForeignErrors = opts && 'allowForeignErrors' in opts ? opts.allowForeignErrors : true;
      let sync = opts && 'sync' in opts ? opts.sync : false;
      this[_local] = null;
      this[_foreign] = null;
      let localToForeignController = StreamControllerOfT().new({sync: sync});
      let foreignToLocalController = StreamControllerOfT().new({sync: sync});
      this[_local] = StreamChannelOfT().withGuarantees(foreignToLocalController.stream, localToForeignController.sink);
      this[_foreign] = StreamChannelOfT().withGuarantees(localToForeignController.stream, foreignToLocalController.sink, {allowSinkErrors: allowForeignErrors});
    }).prototype = StreamChannelController.prototype;
    dart.addTypeTests(StreamChannelController);
    StreamChannelController.prototype[_is_StreamChannelController_default] = true;
    dart.setGetterSignature(StreamChannelController, () => ({
      __proto__: dart.getGetters(StreamChannelController.__proto__),
      local: dart.fnType(stream_channel.StreamChannel$(T), []),
      foreign: dart.fnType(stream_channel.StreamChannel$(T), [])
    }));
    dart.setFieldSignature(StreamChannelController, () => ({
      __proto__: dart.getFields(StreamChannelController.__proto__),
      [_local]: dart.fieldType(StreamChannelOfT()),
      [_foreign]: dart.fieldType(StreamChannelOfT())
    }));
    return StreamChannelController;
  });
  src__stream_channel_controller.StreamChannelController = src__stream_channel_controller.StreamChannelController$();
  dart.addTypeTests(src__stream_channel_controller.StreamChannelController, _is_StreamChannelController_default);
  const _streamCompleter = Symbol('_streamCompleter');
  const _sinkCompleter = Symbol('_sinkCompleter');
  const _channel$0 = Symbol('_channel');
  const _set = Symbol('_set');
  const _is_StreamChannelCompleter_default = Symbol('_is_StreamChannelCompleter_default');
  src__stream_channel_completer.StreamChannelCompleter$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(src__stream_completer.StreamCompleter$(T)))();
    let StreamSinkCompleterOfT = () => (StreamSinkCompleterOfT = dart.constFn(src__stream_sink_completer.StreamSinkCompleter$(T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    class StreamChannelCompleter extends core.Object {
      get channel() {
        return this[_channel$0];
      }
      static fromFuture(channelFuture) {
        let completer = new src__stream_channel_completer.StreamChannelCompleter.new();
        channelFuture.then(dart.void, dart.bind(completer, 'setChannel'), {onError: dart.bind(completer, 'setError')});
        return completer.channel;
      }
      setChannel(channel) {
        StreamChannelOfT()._check(channel);
        if (dart.test(this[_set])) dart.throw(new core.StateError.new("The channel has already been set."));
        this[_set] = true;
        this[_streamCompleter].setSourceStream(channel.stream);
        this[_sinkCompleter].setDestinationSink(channel.sink);
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_set])) dart.throw(new core.StateError.new("The channel has already been set."));
        this[_set] = true;
        this[_streamCompleter].setError(error, stackTrace);
        this[_sinkCompleter].setDestinationSink(new (NullStreamSinkOfT()).new());
      }
    }
    (StreamChannelCompleter.new = function() {
      this[_streamCompleter] = new (StreamCompleterOfT()).new();
      this[_sinkCompleter] = new (StreamSinkCompleterOfT()).new();
      this[_channel$0] = null;
      this[_set] = false;
      this[_channel$0] = StreamChannelOfT().new(this[_streamCompleter].stream, this[_sinkCompleter].sink);
    }).prototype = StreamChannelCompleter.prototype;
    dart.addTypeTests(StreamChannelCompleter);
    StreamChannelCompleter.prototype[_is_StreamChannelCompleter_default] = true;
    dart.setMethodSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getMethods(StreamChannelCompleter.__proto__),
      setChannel: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [dart.dynamic], [core.StackTrace])
    }));
    dart.setStaticMethodSignature(StreamChannelCompleter, () => ({fromFuture: dart.fnType(stream_channel.StreamChannel, [FutureOfStreamChannel()])}));
    dart.setGetterSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getGetters(StreamChannelCompleter.__proto__),
      channel: dart.fnType(stream_channel.StreamChannel$(T), [])
    }));
    dart.setFieldSignature(StreamChannelCompleter, () => ({
      __proto__: dart.getFields(StreamChannelCompleter.__proto__),
      [_streamCompleter]: dart.finalFieldType(StreamCompleterOfT()),
      [_sinkCompleter]: dart.finalFieldType(StreamSinkCompleterOfT()),
      [_channel$0]: dart.fieldType(StreamChannelOfT()),
      [_set]: dart.fieldType(core.bool)
    }));
    return StreamChannelCompleter;
  });
  src__stream_channel_completer.StreamChannelCompleter = src__stream_channel_completer.StreamChannelCompleter$();
  dart.addTypeTests(src__stream_channel_completer.StreamChannelCompleter, _is_StreamChannelCompleter_default);
  const _is_IsolateChannel_default = Symbol('_is_IsolateChannel_default');
  src__isolate_channel.IsolateChannel$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(src__stream_completer.StreamCompleter$(T)))();
    let StreamSinkCompleterOfT = () => (StreamSinkCompleterOfT = dart.constFn(src__stream_sink_completer.StreamSinkCompleter$(T)))();
    let IsolateChannelOfT = () => (IsolateChannelOfT = dart.constFn(src__isolate_channel.IsolateChannel$(T)))();
    let StreamChannelControllerOfT = () => (StreamChannelControllerOfT = dart.constFn(src__stream_channel_controller.StreamChannelController$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    let NullStreamSinkOfT = () => (NullStreamSinkOfT = dart.constFn(src__null_stream_sink.NullStreamSink$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class IsolateChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[stream$];
      }
      set stream(value) {
        super.stream = value;
      }
      get sink() {
        return this[sink$];
      }
      set sink(value) {
        super.sink = value;
      }
      static connectReceive(receivePort) {
        let streamCompleter = new (StreamCompleterOfT()).new();
        let sinkCompleter = new (StreamSinkCompleterOfT()).new();
        let channel = new (IsolateChannelOfT()).__(streamCompleter.stream, sinkCompleter.sink);
        let subscription = null;
        subscription = receivePort.listen(dart.fn(message => {
          if (isolate.SendPort.is(message)) {
            let controller = new (StreamChannelControllerOfT()).new({allowForeignErrors: false, sync: true});
            new src__subscription_stream.SubscriptionStream.new(async.StreamSubscription._check(subscription)).pipe(controller.local.sink);
            controller.local.stream.listen(dart.fn(data => message.send(data), TTovoid()), {onDone: dart.bind(receivePort, 'close')});
            streamCompleter.setSourceStream(controller.foreign.stream);
            sinkCompleter.setDestinationSink(controller.foreign.sink);
            return;
          }
          streamCompleter.setError(new core.StateError.new(dart.str`Unexpected Isolate response "${message}".`), src__trace.Trace.current());
          sinkCompleter.setDestinationSink(new (NullStreamSinkOfT()).new());
          dart.dsend(subscription, 'cancel');
        }, dynamicToNull$()));
        return channel;
      }
      static connectSend(sendPort) {
        let receivePort = isolate.ReceivePort.new();
        sendPort.send(receivePort.sendPort);
        return IsolateChannelOfT().new(receivePort, sendPort);
      }
      static new(receivePort, sendPort) {
        let controller = new (StreamChannelControllerOfT()).new({allowForeignErrors: false, sync: true});
        receivePort.pipe(controller.local.sink);
        controller.local.stream.listen(dart.fn(data => sendPort.send(data), TTovoid()), {onDone: dart.bind(receivePort, 'close')});
        return new (IsolateChannelOfT()).__(controller.foreign.stream, controller.foreign.sink);
      }
    }
    (IsolateChannel.__ = function(stream, sink) {
      this[stream$] = stream;
      this[sink$] = sink;
    }).prototype = IsolateChannel.prototype;
    dart.addTypeTests(IsolateChannel);
    IsolateChannel.prototype[_is_IsolateChannel_default] = true;
    const stream$ = Symbol("IsolateChannel.stream");
    const sink$ = Symbol("IsolateChannel.sink");
    dart.setFieldSignature(IsolateChannel, () => ({
      __proto__: dart.getFields(IsolateChannel.__proto__),
      stream: dart.finalFieldType(StreamOfT()),
      sink: dart.finalFieldType(StreamSinkOfT())
    }));
    return IsolateChannel;
  });
  src__isolate_channel.IsolateChannel = src__isolate_channel.IsolateChannel$();
  dart.addTypeTests(src__isolate_channel.IsolateChannel, _is_IsolateChannel_default);
  src__multi_channel.MultiChannel = class MultiChannel extends core.Object {
    static new(inner) {
      return new src__multi_channel._MultiChannel.new(inner);
    }
  };
  (src__multi_channel.MultiChannel[dart.mixinNew] = function() {
  }).prototype = src__multi_channel.MultiChannel.prototype;
  dart.addTypeTests(src__multi_channel.MultiChannel);
  src__multi_channel.MultiChannel[dart.implements] = () => [stream_channel.StreamChannel];
  const _inner$0 = Symbol('_inner');
  const _innerStreamSubscription = Symbol('_innerStreamSubscription');
  const _mainController = Symbol('_mainController');
  const _controllers = Symbol('_controllers');
  const _pendingIds = Symbol('_pendingIds');
  const _closedIds = Symbol('_closedIds');
  const _nextId = Symbol('_nextId');
  const _closeChannel = Symbol('_closeChannel');
  const _closeInnerChannel = Symbol('_closeInnerChannel');
  src__multi_channel._MultiChannel = class _MultiChannel extends stream_channel.StreamChannelMixin {
    get stream() {
      return this[_mainController].foreign.stream;
    }
    get sink() {
      return this[_mainController].foreign.sink;
    }
    virtualChannel(id) {
      if (id === void 0) id = null;
      let inputId = null;
      let outputId = null;
      if (id != null) {
        inputId = id;
        outputId = dart.notNull(core.int.as(id)) + 1;
      } else {
        inputId = dart.notNull(this[_nextId]) + 1;
        outputId = this[_nextId];
        this[_nextId] = dart.notNull(this[_nextId]) + 2;
      }
      if (this[_inner$0] == null) {
        return new src__multi_channel.VirtualChannel.__(this, inputId, async.Stream.empty(), new src__null_stream_sink.NullStreamSink.new());
      }
      let controller = null;
      if (dart.test(this[_pendingIds].remove(inputId))) {
        controller = this[_controllers][$_get](inputId);
      } else if (dart.test(this[_controllers][$containsKey](inputId)) || dart.test(this[_closedIds].contains(inputId))) {
        dart.throw(new core.ArgumentError.new(dart.str`A virtual channel with id ${id} already exists.`));
      } else {
        controller = new src__stream_channel_controller.StreamChannelController.new({sync: true});
        this[_controllers][$_set](core.int._check(inputId), controller);
      }
      controller.local.stream.listen(dart.fn(message => this[_inner$0].sink.add([outputId, message]), dynamicTovoid()), {onDone: dart.fn(() => this[_closeChannel](core.int._check(inputId), core.int._check(outputId)), VoidTovoid$())});
      return new src__multi_channel.VirtualChannel.__(this, outputId, controller.foreign.stream, controller.foreign.sink);
    }
    [_closeChannel](inputId, outputId) {
      this[_closedIds].add(inputId);
      let controller = this[_controllers][$remove](inputId);
      controller.local.sink.close();
      if (this[_inner$0] == null) return;
      this[_inner$0].sink.add(JSArrayOfint().of([outputId]));
      if (dart.test(this[_controllers][$isEmpty])) this[_closeInnerChannel]();
    }
    [_closeInnerChannel]() {
      this[_inner$0].sink.close();
      this[_innerStreamSubscription].cancel();
      this[_inner$0] = null;
      for (let controller of core.List.from(this[_controllers][$values])) {
        dart.dsend(dart.dload(dart.dload(controller, 'local'), 'sink'), 'close');
      }
      this[_controllers][$clear]();
    }
  };
  (src__multi_channel._MultiChannel.new = function(inner) {
    this[_innerStreamSubscription] = null;
    this[_mainController] = new src__stream_channel_controller.StreamChannelController.new({sync: true});
    this[_controllers] = new (IdentityMapOfint$StreamChannelController()).new();
    this[_pendingIds] = new (_IdentityHashSetOfint()).new();
    this[_closedIds] = new (_IdentityHashSetOfint()).new();
    this[_nextId] = 1;
    this[_inner$0] = inner;
    this[_controllers][$_set](0, this[_mainController]);
    this[_mainController].local.stream.listen(dart.fn(message => this[_inner$0].sink.add([0, message]), dynamicTovoid()), {onDone: dart.fn(() => this[_closeChannel](0, 0), VoidTovoid$())});
    this[_innerStreamSubscription] = this[_inner$0].stream.listen(dart.fn(message => {
      let id = dart.dindex(message, 0);
      if (dart.test(this[_closedIds].contains(id))) return;
      let controller = this[_controllers][$putIfAbsent](core.int._check(id), dart.fn(() => {
        this[_pendingIds].add(core.int._check(id));
        return new src__stream_channel_controller.StreamChannelController.new({sync: true});
      }, VoidToStreamChannelController()));
      if (dart.dtest(dart.dsend(dart.dload(message, 'length'), '>', 1))) {
        controller.local.sink.add(dart.dindex(message, 1));
      } else {
        controller.local.sink.close();
      }
    }, dynamicToNull$0()), {onDone: dart.bind(this, _closeInnerChannel), onError: dart.bind(this[_mainController].local.sink, 'addError')});
  }).prototype = src__multi_channel._MultiChannel.prototype;
  dart.addTypeTests(src__multi_channel._MultiChannel);
  src__multi_channel._MultiChannel[dart.implements] = () => [src__multi_channel.MultiChannel];
  dart.setMethodSignature(src__multi_channel._MultiChannel, () => ({
    __proto__: dart.getMethods(src__multi_channel._MultiChannel.__proto__),
    virtualChannel: dart.fnType(src__multi_channel.VirtualChannel, [], [dart.dynamic]),
    [_closeChannel]: dart.fnType(dart.void, [core.int, core.int]),
    [_closeInnerChannel]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__multi_channel._MultiChannel, () => ({
    __proto__: dart.getGetters(src__multi_channel._MultiChannel.__proto__),
    stream: dart.fnType(async.Stream, []),
    sink: dart.fnType(async.StreamSink, [])
  }));
  dart.setFieldSignature(src__multi_channel._MultiChannel, () => ({
    __proto__: dart.getFields(src__multi_channel._MultiChannel.__proto__),
    [_inner$0]: dart.fieldType(stream_channel.StreamChannel),
    [_innerStreamSubscription]: dart.fieldType(async.StreamSubscription),
    [_mainController]: dart.finalFieldType(src__stream_channel_controller.StreamChannelController),
    [_controllers]: dart.finalFieldType(MapOfint$StreamChannelController()),
    [_pendingIds]: dart.finalFieldType(SetOfint()),
    [_closedIds]: dart.finalFieldType(SetOfint()),
    [_nextId]: dart.fieldType(core.int)
  }));
  const _parent = Symbol('_parent');
  src__multi_channel.VirtualChannel = class VirtualChannel extends stream_channel.StreamChannelMixin {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
    get sink() {
      return this[sink$];
    }
    set sink(value) {
      super.sink = value;
    }
    virtualChannel(id) {
      if (id === void 0) id = null;
      return this[_parent].virtualChannel(id);
    }
  };
  (src__multi_channel.VirtualChannel.__ = function(parent, id, stream, sink) {
    this[_parent] = parent;
    this[id$] = id;
    this[stream$] = stream;
    this[sink$] = sink;
  }).prototype = src__multi_channel.VirtualChannel.prototype;
  dart.addTypeTests(src__multi_channel.VirtualChannel);
  const id$ = Symbol("VirtualChannel.id");
  const stream$ = Symbol("VirtualChannel.stream");
  const sink$ = Symbol("VirtualChannel.sink");
  src__multi_channel.VirtualChannel[dart.implements] = () => [src__multi_channel.MultiChannel];
  dart.setMethodSignature(src__multi_channel.VirtualChannel, () => ({
    __proto__: dart.getMethods(src__multi_channel.VirtualChannel.__proto__),
    virtualChannel: dart.fnType(src__multi_channel.VirtualChannel, [], [dart.dynamic])
  }));
  dart.setFieldSignature(src__multi_channel.VirtualChannel, () => ({
    __proto__: dart.getFields(src__multi_channel.VirtualChannel.__proto__),
    [_parent]: dart.finalFieldType(src__multi_channel.MultiChannel),
    id: dart.finalFieldType(dart.dynamic),
    stream: dart.finalFieldType(async.Stream),
    sink: dart.finalFieldType(async.StreamSink)
  }));
  const _inner$1 = Symbol('_inner');
  const _is_TypeSafeStreamChannelTransformer_default = Symbol('_is_TypeSafeStreamChannelTransformer_default');
  src__transformer__typed.TypeSafeStreamChannelTransformer$ = dart.generic((S, T) => {
    let StreamChannelTransformerOfS$T = () => (StreamChannelTransformerOfS$T = dart.constFn(src__stream_channel_transformer.StreamChannelTransformer$(S, T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class TypeSafeStreamChannelTransformer extends core.Object {
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return this[_inner$1].bind(channel).cast(S);
      }
    }
    (TypeSafeStreamChannelTransformer.new = function(inner) {
      this[_inner$1] = inner;
    }).prototype = TypeSafeStreamChannelTransformer.prototype;
    dart.addTypeTests(TypeSafeStreamChannelTransformer);
    TypeSafeStreamChannelTransformer.prototype[_is_TypeSafeStreamChannelTransformer_default] = true;
    TypeSafeStreamChannelTransformer[dart.implements] = () => [StreamChannelTransformerOfS$T()];
    dart.setMethodSignature(TypeSafeStreamChannelTransformer, () => ({
      __proto__: dart.getMethods(TypeSafeStreamChannelTransformer.__proto__),
      bind: dart.fnType(stream_channel.StreamChannel$(S), [core.Object])
    }));
    dart.setFieldSignature(TypeSafeStreamChannelTransformer, () => ({
      __proto__: dart.getFields(TypeSafeStreamChannelTransformer.__proto__),
      [_inner$1]: dart.finalFieldType(src__stream_channel_transformer.StreamChannelTransformer)
    }));
    return TypeSafeStreamChannelTransformer;
  });
  src__transformer__typed.TypeSafeStreamChannelTransformer = src__transformer__typed.TypeSafeStreamChannelTransformer$();
  dart.addTypeTests(src__transformer__typed.TypeSafeStreamChannelTransformer, _is_TypeSafeStreamChannelTransformer_default);
  const _streamTransformer = Symbol('_streamTransformer');
  const _sinkTransformer = Symbol('_sinkTransformer');
  const _is_StreamChannelTransformer_default = Symbol('_is_StreamChannelTransformer_default');
  src__stream_channel_transformer.StreamChannelTransformer$ = dart.generic((S, T) => {
    let StreamChannelOfS = () => (StreamChannelOfS = dart.constFn(stream_channel.StreamChannel$(S)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    let StreamSinkTransformerOfS$T = () => (StreamSinkTransformerOfS$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(S, T)))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class StreamChannelTransformer extends core.Object {
      static typed(S, T, transformer) {
        return src__stream_channel_transformer.StreamChannelTransformer$(S, T).is(transformer) ? transformer : new (src__transformer__typed.TypeSafeStreamChannelTransformer$(S, T)).new(transformer);
      }
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return StreamChannelOfS().withCloseGuarantee(channel.stream.transform(S, this[_streamTransformer]), this[_sinkTransformer].bind(channel.sink));
      }
    }
    (StreamChannelTransformer.new = function(streamTransformer, sinkTransformer) {
      this[_streamTransformer] = streamTransformer;
      this[_sinkTransformer] = sinkTransformer;
    }).prototype = StreamChannelTransformer.prototype;
    (StreamChannelTransformer.fromCodec = function(codec) {
      StreamChannelTransformer.new.call(this, src__typed_stream_transformer.typedStreamTransformer(T, S, codec.decoder), src__stream_sink_transformer.StreamSinkTransformer.typed(S, T, src__stream_sink_transformer.StreamSinkTransformer.fromStreamTransformer(codec.encoder)));
    }).prototype = StreamChannelTransformer.prototype;
    dart.addTypeTests(StreamChannelTransformer);
    StreamChannelTransformer.prototype[_is_StreamChannelTransformer_default] = true;
    dart.setMethodSignature(StreamChannelTransformer, () => ({
      __proto__: dart.getMethods(StreamChannelTransformer.__proto__),
      bind: dart.fnType(stream_channel.StreamChannel$(S), [core.Object])
    }));
    dart.setStaticMethodSignature(StreamChannelTransformer, () => ({typed: dart.gFnType((S, T) => [src__stream_channel_transformer.StreamChannelTransformer$(S, T), [src__stream_channel_transformer.StreamChannelTransformer]])}));
    dart.setFieldSignature(StreamChannelTransformer, () => ({
      __proto__: dart.getFields(StreamChannelTransformer.__proto__),
      [_streamTransformer]: dart.finalFieldType(StreamTransformerOfT$S()),
      [_sinkTransformer]: dart.finalFieldType(StreamSinkTransformerOfS$T())
    }));
    return StreamChannelTransformer;
  });
  src__stream_channel_transformer.StreamChannelTransformer = src__stream_channel_transformer.StreamChannelTransformer$();
  dart.addTypeTests(src__stream_channel_transformer.StreamChannelTransformer, _is_StreamChannelTransformer_default);
  dart.defineLazy(src__json_document_transformer, {
    /*src__json_document_transformer.jsonDocument*/get jsonDocument() {
      return new src__json_document_transformer.JsonDocumentTransformer.new();
    }
  });
  const _codec = Symbol('_codec');
  src__json_document_transformer.JsonDocumentTransformer = class JsonDocumentTransformer extends core.Object {
    bind(channel) {
      StreamChannelOfString()._check(channel);
      let stream = channel.stream.map(dart.dynamic, dart.bind(this[_codec], 'decode'));
      let sink = src__stream_sink_transformer.StreamSinkTransformer.fromHandlers({handleData: dart.fn((data, sink) => {
          sink.add(this[_codec].encode(data));
        }, dynamicAndEventSinkToNull())}).bind(channel.sink);
      return stream_channel.StreamChannel.withCloseGuarantee(stream, sink);
    }
  };
  (src__json_document_transformer.JsonDocumentTransformer.new = function(opts) {
    let reviver = opts && 'reviver' in opts ? opts.reviver : null;
    let toEncodable = opts && 'toEncodable' in opts ? opts.toEncodable : null;
    this[_codec] = new convert.JsonCodec.new({reviver: ObjectAndObjectTodynamic()._check(reviver), toEncodable: toEncodable});
  }).prototype = src__json_document_transformer.JsonDocumentTransformer.prototype;
  (src__json_document_transformer.JsonDocumentTransformer.__ = function(codec) {
    this[_codec] = codec;
  }).prototype = src__json_document_transformer.JsonDocumentTransformer.prototype;
  dart.addTypeTests(src__json_document_transformer.JsonDocumentTransformer);
  src__json_document_transformer.JsonDocumentTransformer[dart.implements] = () => [StreamChannelTransformerOfObject$String()];
  dart.setMethodSignature(src__json_document_transformer.JsonDocumentTransformer, () => ({
    __proto__: dart.getMethods(src__json_document_transformer.JsonDocumentTransformer.__proto__),
    bind: dart.fnType(stream_channel.StreamChannel, [core.Object])
  }));
  dart.setFieldSignature(src__json_document_transformer.JsonDocumentTransformer, () => ({
    __proto__: dart.getFields(src__json_document_transformer.JsonDocumentTransformer.__proto__),
    [_codec]: dart.finalFieldType(convert.JsonCodec)
  }));
  const _inner$2 = Symbol('_inner');
  const _is_DelegatingStreamChannel_default = Symbol('_is_DelegatingStreamChannel_default');
  src__delegating_stream_channel.DelegatingStreamChannel$ = dart.generic(T => {
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    class DelegatingStreamChannel extends stream_channel.StreamChannelMixin$(T) {
      get stream() {
        return this[_inner$2].stream;
      }
      get sink() {
        return this[_inner$2].sink;
      }
    }
    (DelegatingStreamChannel.new = function(inner) {
      this[_inner$2] = inner;
    }).prototype = DelegatingStreamChannel.prototype;
    dart.addTypeTests(DelegatingStreamChannel);
    DelegatingStreamChannel.prototype[_is_DelegatingStreamChannel_default] = true;
    dart.setGetterSignature(DelegatingStreamChannel, () => ({
      __proto__: dart.getGetters(DelegatingStreamChannel.__proto__),
      stream: dart.fnType(async.Stream$(T), []),
      sink: dart.fnType(async.StreamSink$(T), [])
    }));
    dart.setFieldSignature(DelegatingStreamChannel, () => ({
      __proto__: dart.getFields(DelegatingStreamChannel.__proto__),
      [_inner$2]: dart.finalFieldType(StreamChannelOfT())
    }));
    return DelegatingStreamChannel;
  });
  src__delegating_stream_channel.DelegatingStreamChannel = src__delegating_stream_channel.DelegatingStreamChannel$();
  dart.addTypeTests(src__delegating_stream_channel.DelegatingStreamChannel, _is_DelegatingStreamChannel_default);
  const _sinks = Symbol('_sinks');
  const _disconnectMemo = Symbol('_disconnectMemo');
  const _disconnect = Symbol('_disconnect');
  const _is_Disconnector_default = Symbol('_is_Disconnector_default');
  src__disconnector.Disconnector$ = dart.generic(T => {
    let _DisconnectorSinkOfT = () => (_DisconnectorSinkOfT = dart.constFn(src__disconnector._DisconnectorSink$(T)))();
    let JSArrayOf_DisconnectorSinkOfT = () => (JSArrayOf_DisconnectorSinkOfT = dart.constFn(_interceptors.JSArray$(_DisconnectorSinkOfT())))();
    let _DisconnectorSinkOfTToFuture = () => (_DisconnectorSinkOfTToFuture = dart.constFn(dart.fnType(async.Future, [_DisconnectorSinkOfT()])))();
    let StreamChannelOfT = () => (StreamChannelOfT = dart.constFn(stream_channel.StreamChannel$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let StreamSinkOfTTo_DisconnectorSinkOfT = () => (StreamSinkOfTTo_DisconnectorSinkOfT = dart.constFn(dart.fnType(_DisconnectorSinkOfT(), [StreamSinkOfT()])))();
    let StreamChannelTransformerOfT$T = () => (StreamChannelTransformerOfT$T = dart.constFn(src__stream_channel_transformer.StreamChannelTransformer$(T, T)))();
    let ListOf_DisconnectorSinkOfT = () => (ListOf_DisconnectorSinkOfT = dart.constFn(core.List$(_DisconnectorSinkOfT())))();
    class Disconnector extends core.Object {
      get isDisconnected() {
        return this[_disconnectMemo].hasRun;
      }
      disconnect() {
        return this[_disconnectMemo].runOnce(dart.fn(() => {
          let futures = this[_sinks][$map](async.Future, dart.fn(sink => sink[_disconnect](), _DisconnectorSinkOfTToFuture()))[$toList]();
          this[_sinks][$clear]();
          return async.Future.wait(dart.dynamic, futures, {eagerError: true});
        }, VoidToFutureOfList()));
      }
      bind(channel) {
        StreamChannelOfT()._check(channel);
        return channel.changeSink(dart.fn(innerSink => {
          let sink = new (_DisconnectorSinkOfT()).new(innerSink);
          if (dart.test(this.isDisconnected)) {
            sink[_disconnect]().catchError(dart.fn(_ => {
            }, dynamicToNull$1()));
          } else {
            this[_sinks][$add](sink);
          }
          return sink;
        }, StreamSinkOfTTo_DisconnectorSinkOfT()));
      }
    }
    (Disconnector.new = function() {
      this[_sinks] = JSArrayOf_DisconnectorSinkOfT().of([]);
      this[_disconnectMemo] = new src__async_memoizer.AsyncMemoizer.new();
    }).prototype = Disconnector.prototype;
    dart.addTypeTests(Disconnector);
    Disconnector.prototype[_is_Disconnector_default] = true;
    Disconnector[dart.implements] = () => [StreamChannelTransformerOfT$T()];
    dart.setMethodSignature(Disconnector, () => ({
      __proto__: dart.getMethods(Disconnector.__proto__),
      disconnect: dart.fnType(async.Future, []),
      bind: dart.fnType(stream_channel.StreamChannel$(T), [core.Object])
    }));
    dart.setGetterSignature(Disconnector, () => ({
      __proto__: dart.getGetters(Disconnector.__proto__),
      isDisconnected: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(Disconnector, () => ({
      __proto__: dart.getFields(Disconnector.__proto__),
      [_sinks]: dart.finalFieldType(ListOf_DisconnectorSinkOfT()),
      [_disconnectMemo]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return Disconnector;
  });
  src__disconnector.Disconnector = src__disconnector.Disconnector$();
  dart.addTypeTests(src__disconnector.Disconnector, _is_Disconnector_default);
  const _inner$3 = Symbol('_inner');
  const _isDisconnected = Symbol('_isDisconnected');
  const _closed$ = Symbol('_closed');
  const _addStreamSubscription$ = Symbol('_addStreamSubscription');
  const _addStreamCompleter$ = Symbol('_addStreamCompleter');
  const _inAddStream$ = Symbol('_inAddStream');
  const _is__DisconnectorSink_default = Symbol('_is__DisconnectorSink_default');
  src__disconnector._DisconnectorSink$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class _DisconnectorSink extends core.Object {
      get done() {
        return this[_inner$3].done;
      }
      get [_inAddStream$]() {
        return this[_addStreamSubscription$] != null;
      }
      add(data) {
        T._check(data);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return;
        this[_inner$3].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add event after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add event while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return;
        this[_inner$3].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed$])) dart.throw(new core.StateError.new("Cannot add stream after closing."));
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot add stream while adding stream."));
        }
        if (dart.test(this[_isDisconnected])) return async.Future.value();
        this[_addStreamCompleter$] = async.Completer.sync();
        this[_addStreamSubscription$] = stream.listen(dart.bind(this[_inner$3], 'add'), {onError: dart.bind(this[_inner$3], 'addError'), onDone: dart.bind(this[_addStreamCompleter$], 'complete')});
        return this[_addStreamCompleter$].future.then(dart.dynamic, dart.fn(_ => {
          this[_addStreamCompleter$] = null;
          this[_addStreamSubscription$] = null;
        }, dynamicToNull$2()));
      }
      close() {
        if (dart.test(this[_inAddStream$])) {
          dart.throw(new core.StateError.new("Cannot close sink while adding stream."));
        }
        this[_closed$] = true;
        return this[_inner$3].close();
      }
      [_disconnect]() {
        this[_isDisconnected] = true;
        let future = this[_inner$3].close();
        if (dart.test(this[_inAddStream$])) {
          this[_addStreamCompleter$].complete(this[_addStreamSubscription$].cancel());
          this[_addStreamCompleter$] = null;
          this[_addStreamSubscription$] = null;
        }
        return future;
      }
    }
    (_DisconnectorSink.new = function(inner) {
      this[_isDisconnected] = false;
      this[_closed$] = false;
      this[_addStreamSubscription$] = null;
      this[_addStreamCompleter$] = null;
      this[_inner$3] = inner;
    }).prototype = _DisconnectorSink.prototype;
    dart.addTypeTests(_DisconnectorSink);
    _DisconnectorSink.prototype[_is__DisconnectorSink_default] = true;
    _DisconnectorSink[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(_DisconnectorSink, () => ({
      __proto__: dart.getMethods(_DisconnectorSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, []),
      [_disconnect]: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_DisconnectorSink, () => ({
      __proto__: dart.getGetters(_DisconnectorSink.__proto__),
      done: dart.fnType(async.Future, []),
      [_inAddStream$]: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(_DisconnectorSink, () => ({
      __proto__: dart.getFields(_DisconnectorSink.__proto__),
      [_inner$3]: dart.finalFieldType(StreamSinkOfT()),
      [_isDisconnected]: dart.fieldType(core.bool),
      [_closed$]: dart.fieldType(core.bool),
      [_addStreamSubscription$]: dart.fieldType(StreamSubscriptionOfT()),
      [_addStreamCompleter$]: dart.fieldType(async.Completer)
    }));
    return _DisconnectorSink;
  });
  src__disconnector._DisconnectorSink = src__disconnector._DisconnectorSink$();
  dart.addTypeTests(src__disconnector._DisconnectorSink, _is__DisconnectorSink_default);
  const _is_StreamChannel_default = Symbol('_is_StreamChannel_default');
  stream_channel.StreamChannel$ = dart.generic(T => {
    let _StreamChannelOfT = () => (_StreamChannelOfT = dart.constFn(stream_channel._StreamChannel$(T)))();
    let GuaranteeChannelOfT = () => (GuaranteeChannelOfT = dart.constFn(src__guarantee_channel.GuaranteeChannel$(T)))();
    let CloseGuaranteeChannelOfT = () => (CloseGuaranteeChannelOfT = dart.constFn(src__close_guarantee_channel.CloseGuaranteeChannel$(T)))();
    class StreamChannel extends core.Object {
      static new(stream, sink) {
        return new (_StreamChannelOfT()).new(stream, sink);
      }
      static withGuarantees(stream, sink, opts) {
        let allowSinkErrors = opts && 'allowSinkErrors' in opts ? opts.allowSinkErrors : true;
        return new (GuaranteeChannelOfT()).new(stream, sink, {allowSinkErrors: allowSinkErrors});
      }
      static withCloseGuarantee(stream, sink) {
        return new (CloseGuaranteeChannelOfT()).new(stream, sink);
      }
    }
    (StreamChannel[dart.mixinNew] = function() {
    }).prototype = StreamChannel.prototype;
    dart.addTypeTests(StreamChannel);
    StreamChannel.prototype[_is_StreamChannel_default] = true;
    return StreamChannel;
  });
  stream_channel.StreamChannel = stream_channel.StreamChannel$();
  dart.addTypeTests(stream_channel.StreamChannel, _is_StreamChannel_default);
  const _is__StreamChannel_default = Symbol('_is__StreamChannel_default');
  stream_channel._StreamChannel$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _StreamChannel extends stream_channel.StreamChannelMixin$(T) {}
    (_StreamChannel.new = function(stream, sink) {
      this.stream = stream;
      this.sink = sink;
    }).prototype = _StreamChannel.prototype;
    dart.addTypeTests(_StreamChannel);
    _StreamChannel.prototype[_is__StreamChannel_default] = true;
    dart.setFieldSignature(_StreamChannel, () => ({
      __proto__: dart.getFields(_StreamChannel.__proto__),
      stream: dart.finalFieldType(StreamOfT()),
      sink: dart.finalFieldType(StreamSinkOfT())
    }));
    return _StreamChannel;
  });
  stream_channel._StreamChannel = stream_channel._StreamChannel$();
  dart.addTypeTests(stream_channel._StreamChannel, _is__StreamChannel_default);
  dart.trackLibraries("packages/stream_channel/src/close_guarantee_channel.ddc", {
    "package:stream_channel/src/guarantee_channel.dart": src__guarantee_channel,
    "package:stream_channel/src/close_guarantee_channel.dart": src__close_guarantee_channel,
    "package:stream_channel/src/stream_channel_controller.dart": src__stream_channel_controller,
    "package:stream_channel/src/stream_channel_completer.dart": src__stream_channel_completer,
    "package:stream_channel/src/isolate_channel.dart": src__isolate_channel,
    "package:stream_channel/src/multi_channel.dart": src__multi_channel,
    "package:stream_channel/src/transformer/typed.dart": src__transformer__typed,
    "package:stream_channel/src/stream_channel_transformer.dart": src__stream_channel_transformer,
    "package:stream_channel/src/json_document_transformer.dart": src__json_document_transformer,
    "package:stream_channel/src/delegating_stream_channel.dart": src__delegating_stream_channel,
    "package:stream_channel/src/disconnector.dart": src__disconnector,
    "package:stream_channel/stream_channel.dart": stream_channel
  }, '{"version":3,"sourceRoot":"","sources":["../stream_channel.dart","guarantee_channel.dart","close_guarantee_channel.dart","stream_channel_controller.dart","stream_channel_completer.dart","isolate_channel.dart","multi_channel.dart","transformer/typed.dart","stream_channel_transformer.dart","json_document_transformer.dart","delegating_stream_channel.dart","disconnector.dart"],"names":[],"mappings":"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","file":"close_guarantee_channel.ddc.js"}');
  // Exports:
  return {
    src__guarantee_channel: src__guarantee_channel,
    src__close_guarantee_channel: src__close_guarantee_channel,
    src__stream_channel_controller: src__stream_channel_controller,
    src__stream_channel_completer: src__stream_channel_completer,
    src__isolate_channel: src__isolate_channel,
    src__multi_channel: src__multi_channel,
    src__transformer__typed: src__transformer__typed,
    src__stream_channel_transformer: src__stream_channel_transformer,
    src__json_document_transformer: src__json_document_transformer,
    src__delegating_stream_channel: src__delegating_stream_channel,
    src__disconnector: src__disconnector,
    stream_channel: stream_channel
  };
});

//# sourceMappingURL=close_guarantee_channel.ddc.js.map
