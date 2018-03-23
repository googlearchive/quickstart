define(['dart_sdk', 'packages/async/src/delegate/stream_sink'], function(dart_sdk, stream_sink) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__delegate__stream_sink = stream_sink.src__delegate__stream_sink;
  const _root = Object.create(null);
  const src__stream_sink_transformer__stream_transformer_wrapper = Object.create(_root);
  const src__stream_sink_transformer__typed = Object.create(_root);
  const src__stream_sink_transformer__handler_transformer = Object.create(_root);
  const src__stream_sink_transformer = Object.create(_root);
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull$ = () => (dynamicToNull$ = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let EventSinkTovoid = () => (EventSinkTovoid = dart.constFn(dart.fnType(dart.void, [async.EventSink])))();
  const _transformer = Symbol('_transformer');
  const _is_StreamTransformerWrapper_default = Symbol('_is_StreamTransformerWrapper_default');
  src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$ = dart.generic((S, T) => {
    let _StreamTransformerWrapperSinkOfS$T = () => (_StreamTransformerWrapperSinkOfS$T = dart.constFn(src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$(S, T)))();
    let StreamSinkTransformerOfS$T = () => (StreamSinkTransformerOfS$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(S, T)))();
    let StreamTransformerOfS$T = () => (StreamTransformerOfS$T = dart.constFn(async.StreamTransformer$(S, T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class StreamTransformerWrapper extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return new (_StreamTransformerWrapperSinkOfS$T()).new(this[_transformer], sink);
      }
    }
    (StreamTransformerWrapper.new = function(transformer) {
      this[_transformer] = transformer;
    }).prototype = StreamTransformerWrapper.prototype;
    dart.addTypeTests(StreamTransformerWrapper);
    StreamTransformerWrapper.prototype[_is_StreamTransformerWrapper_default] = true;
    StreamTransformerWrapper[dart.implements] = () => [StreamSinkTransformerOfS$T()];
    dart.setMethodSignature(StreamTransformerWrapper, () => ({
      __proto__: dart.getMethods(StreamTransformerWrapper.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setFieldSignature(StreamTransformerWrapper, () => ({
      __proto__: dart.getFields(StreamTransformerWrapper.__proto__),
      [_transformer]: dart.finalFieldType(StreamTransformerOfS$T())
    }));
    return StreamTransformerWrapper;
  });
  src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper = src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$();
  dart.addTypeTests(src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper, _is_StreamTransformerWrapper_default);
  const _inner = Symbol('_inner');
  const _controller = Symbol('_controller');
  const _is__StreamTransformerWrapperSink_default = Symbol('_is__StreamTransformerWrapperSink_default');
  src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$ = dart.generic((S, T) => {
    let StreamControllerOfS = () => (StreamControllerOfS = dart.constFn(async.StreamController$(S)))();
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamSinkOfS = () => (StreamSinkOfS = dart.constFn(async.StreamSink$(S)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _StreamTransformerWrapperSink extends core.Object {
      get done() {
        return this[_inner].done;
      }
      add(event) {
        S._check(event);
        this[_controller].add(event);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_controller].addError(error, stackTrace);
      }
      addStream(stream) {
        StreamOfS()._check(stream);
        return this[_controller].addStream(stream);
      }
      close() {
        this[_controller].close();
        return this[_inner].done;
      }
    }
    (_StreamTransformerWrapperSink.new = function(transformer, inner) {
      this[_controller] = StreamControllerOfS().new({sync: true});
      this[_inner] = inner;
      this[_controller].stream.transform(T, transformer).listen(dart.bind(this[_inner], 'add'), {onError: dart.bind(this[_inner], 'addError'), onDone: dart.fn(() => {
          this[_inner].close().catchError(dart.fn(_ => {
          }, dynamicToNull()));
        }, VoidToNull())});
    }).prototype = _StreamTransformerWrapperSink.prototype;
    dart.addTypeTests(_StreamTransformerWrapperSink);
    _StreamTransformerWrapperSink.prototype[_is__StreamTransformerWrapperSink_default] = true;
    _StreamTransformerWrapperSink[dart.implements] = () => [StreamSinkOfS()];
    dart.setMethodSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getMethods(_StreamTransformerWrapperSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getGetters(_StreamTransformerWrapperSink.__proto__),
      done: dart.fnType(async.Future, [])
    }));
    dart.setFieldSignature(_StreamTransformerWrapperSink, () => ({
      __proto__: dart.getFields(_StreamTransformerWrapperSink.__proto__),
      [_controller]: dart.finalFieldType(StreamControllerOfS()),
      [_inner]: dart.finalFieldType(StreamSinkOfT())
    }));
    return _StreamTransformerWrapperSink;
  });
  src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink = src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink$();
  dart.addTypeTests(src__stream_sink_transformer__stream_transformer_wrapper._StreamTransformerWrapperSink, _is__StreamTransformerWrapperSink_default);
  const _inner$ = Symbol('_inner');
  const _is_TypeSafeStreamSinkTransformer_default = Symbol('_is_TypeSafeStreamSinkTransformer_default');
  src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$ = dart.generic((S, T) => {
    let StreamSinkTransformerOfS$T = () => (StreamSinkTransformerOfS$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(S, T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class TypeSafeStreamSinkTransformer extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return src__delegate__stream_sink.DelegatingStreamSink.typed(S, this[_inner$].bind(sink));
      }
    }
    (TypeSafeStreamSinkTransformer.new = function(inner) {
      this[_inner$] = inner;
    }).prototype = TypeSafeStreamSinkTransformer.prototype;
    dart.addTypeTests(TypeSafeStreamSinkTransformer);
    TypeSafeStreamSinkTransformer.prototype[_is_TypeSafeStreamSinkTransformer_default] = true;
    TypeSafeStreamSinkTransformer[dart.implements] = () => [StreamSinkTransformerOfS$T()];
    dart.setMethodSignature(TypeSafeStreamSinkTransformer, () => ({
      __proto__: dart.getMethods(TypeSafeStreamSinkTransformer.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setFieldSignature(TypeSafeStreamSinkTransformer, () => ({
      __proto__: dart.getFields(TypeSafeStreamSinkTransformer.__proto__),
      [_inner$]: dart.finalFieldType(src__stream_sink_transformer.StreamSinkTransformer)
    }));
    return TypeSafeStreamSinkTransformer;
  });
  src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer = src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$();
  dart.addTypeTests(src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer, _is_TypeSafeStreamSinkTransformer_default);
  src__stream_sink_transformer__handler_transformer.HandleData$ = dart.generic((S, T) => {
    const HandleData = dart.typedef('HandleData', () => dart.fnType(dart.void, [S, async.EventSink$(T)]));
    return HandleData;
  });
  src__stream_sink_transformer__handler_transformer.HandleData = src__stream_sink_transformer__handler_transformer.HandleData$();
  src__stream_sink_transformer__handler_transformer.HandleError$ = dart.generic(T => {
    const HandleError = dart.typedef('HandleError', () => dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(T)]));
    return HandleError;
  });
  src__stream_sink_transformer__handler_transformer.HandleError = src__stream_sink_transformer__handler_transformer.HandleError$();
  src__stream_sink_transformer__handler_transformer.HandleDone$ = dart.generic(T => {
    const HandleDone = dart.typedef('HandleDone', () => dart.fnType(dart.void, [async.EventSink$(T)]));
    return HandleDone;
  });
  src__stream_sink_transformer__handler_transformer.HandleDone = src__stream_sink_transformer__handler_transformer.HandleDone$();
  const _handleData = Symbol('_handleData');
  const _handleError = Symbol('_handleError');
  const _handleDone = Symbol('_handleDone');
  const _is_HandlerTransformer_default = Symbol('_is_HandlerTransformer_default');
  src__stream_sink_transformer__handler_transformer.HandlerTransformer$ = dart.generic((S, T) => {
    let _HandlerSinkOfS$T = () => (_HandlerSinkOfS$T = dart.constFn(src__stream_sink_transformer__handler_transformer._HandlerSink$(S, T)))();
    let StreamSinkTransformerOfS$T = () => (StreamSinkTransformerOfS$T = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(S, T)))();
    let SAndEventSinkOfTTovoid = () => (SAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [S, EventSinkOfT()])))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let ObjectAndStackTraceAndEventSinkOfTTovoid = () => (ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfT()])))();
    let EventSinkOfTTovoid = () => (EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [EventSinkOfT()])))();
    class HandlerTransformer extends core.Object {
      bind(sink) {
        StreamSinkOfT()._check(sink);
        return new (_HandlerSinkOfS$T()).new(this, sink);
      }
    }
    (HandlerTransformer.new = function(handleData, handleError, handleDone) {
      this[_handleData] = handleData;
      this[_handleError] = handleError;
      this[_handleDone] = handleDone;
    }).prototype = HandlerTransformer.prototype;
    dart.addTypeTests(HandlerTransformer);
    HandlerTransformer.prototype[_is_HandlerTransformer_default] = true;
    HandlerTransformer[dart.implements] = () => [StreamSinkTransformerOfS$T()];
    dart.setMethodSignature(HandlerTransformer, () => ({
      __proto__: dart.getMethods(HandlerTransformer.__proto__),
      bind: dart.fnType(async.StreamSink$(S), [core.Object])
    }));
    dart.setFieldSignature(HandlerTransformer, () => ({
      __proto__: dart.getFields(HandlerTransformer.__proto__),
      [_handleData]: dart.finalFieldType(SAndEventSinkOfTTovoid()),
      [_handleError]: dart.finalFieldType(ObjectAndStackTraceAndEventSinkOfTTovoid()),
      [_handleDone]: dart.finalFieldType(EventSinkOfTTovoid())
    }));
    return HandlerTransformer;
  });
  src__stream_sink_transformer__handler_transformer.HandlerTransformer = src__stream_sink_transformer__handler_transformer.HandlerTransformer$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer.HandlerTransformer, _is_HandlerTransformer_default);
  const _transformer$ = Symbol('_transformer');
  const _inner$0 = Symbol('_inner');
  const _safeCloseInner = Symbol('_safeCloseInner');
  const _is__HandlerSink_default = Symbol('_is__HandlerSink_default');
  src__stream_sink_transformer__handler_transformer._HandlerSink$ = dart.generic((S, T) => {
    let SAndEventSinkOfTTovoid = () => (SAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [S, EventSinkOfT()])))();
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamTransformerOfS$T = () => (StreamTransformerOfS$T = dart.constFn(async.StreamTransformer$(S, T)))();
    let StreamSinkOfS = () => (StreamSinkOfS = dart.constFn(async.StreamSink$(S)))();
    let HandlerTransformerOfS$T = () => (HandlerTransformerOfS$T = dart.constFn(src__stream_sink_transformer__handler_transformer.HandlerTransformer$(S, T)))();
    let _SafeCloseSinkOfT = () => (_SafeCloseSinkOfT = dart.constFn(src__stream_sink_transformer__handler_transformer._SafeCloseSink$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let ObjectAndStackTraceAndEventSinkOfTTovoid = () => (ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, EventSinkOfT()])))();
    let EventSinkOfTTovoid = () => (EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [EventSinkOfT()])))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    class _HandlerSink extends core.Object {
      get done() {
        return this[_inner$0].done;
      }
      add(event) {
        S._check(event);
        if (SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData]) == null) {
          this[_inner$0].add(T.as(event));
        } else {
          SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData])(event, this[_safeCloseInner]);
        }
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError]) == null) {
          this[_inner$0].addError(error, stackTrace);
        } else {
          ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError])(error, stackTrace, this[_safeCloseInner]);
        }
      }
      addStream(stream) {
        StreamOfS()._check(stream);
        return this[_inner$0].addStream(stream.transform(T, StreamTransformerOfS$T().fromHandlers({handleData: SAndEventSinkOfTTovoid()._check(this[_transformer$][_handleData]), handleError: ObjectAndStackTraceAndEventSinkOfTTovoid()._check(this[_transformer$][_handleError]), handleDone: src__stream_sink_transformer__handler_transformer._closeSink})));
      }
      close() {
        if (EventSinkOfTTovoid()._check(this[_transformer$][_handleDone]) == null) return this[_inner$0].close();
        EventSinkOfTTovoid()._check(this[_transformer$][_handleDone])(this[_safeCloseInner]);
        return this[_inner$0].done;
      }
    }
    (_HandlerSink.new = function(transformer, inner) {
      this[_transformer$] = transformer;
      this[_inner$0] = inner;
      this[_safeCloseInner] = new (_SafeCloseSinkOfT()).new(inner);
    }).prototype = _HandlerSink.prototype;
    dart.addTypeTests(_HandlerSink);
    _HandlerSink.prototype[_is__HandlerSink_default] = true;
    _HandlerSink[dart.implements] = () => [StreamSinkOfS()];
    dart.setMethodSignature(_HandlerSink, () => ({
      __proto__: dart.getMethods(_HandlerSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(_HandlerSink, () => ({
      __proto__: dart.getGetters(_HandlerSink.__proto__),
      done: dart.fnType(async.Future, [])
    }));
    dart.setFieldSignature(_HandlerSink, () => ({
      __proto__: dart.getFields(_HandlerSink.__proto__),
      [_transformer$]: dart.finalFieldType(HandlerTransformerOfS$T()),
      [_inner$0]: dart.finalFieldType(StreamSinkOfT()),
      [_safeCloseInner]: dart.finalFieldType(StreamSinkOfT())
    }));
    return _HandlerSink;
  });
  src__stream_sink_transformer__handler_transformer._HandlerSink = src__stream_sink_transformer__handler_transformer._HandlerSink$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer._HandlerSink, _is__HandlerSink_default);
  const _is__SafeCloseSink_default = Symbol('_is__SafeCloseSink_default');
  src__stream_sink_transformer__handler_transformer._SafeCloseSink$ = dart.generic(T => {
    class _SafeCloseSink extends src__delegate__stream_sink.DelegatingStreamSink$(T) {
      close() {
        return super.close().catchError(dart.fn(_ => {
        }, dynamicToNull$()));
      }
    }
    (_SafeCloseSink.new = function(inner) {
      _SafeCloseSink.__proto__.new.call(this, inner);
    }).prototype = _SafeCloseSink.prototype;
    dart.addTypeTests(_SafeCloseSink);
    _SafeCloseSink.prototype[_is__SafeCloseSink_default] = true;
    return _SafeCloseSink;
  });
  src__stream_sink_transformer__handler_transformer._SafeCloseSink = src__stream_sink_transformer__handler_transformer._SafeCloseSink$();
  dart.addTypeTests(src__stream_sink_transformer__handler_transformer._SafeCloseSink, _is__SafeCloseSink_default);
  src__stream_sink_transformer__handler_transformer._closeSink = function(sink) {
    sink.close();
  };
  dart.fn(src__stream_sink_transformer__handler_transformer._closeSink, EventSinkTovoid());
  const _is_StreamSinkTransformer_default = Symbol('_is_StreamSinkTransformer_default');
  src__stream_sink_transformer.StreamSinkTransformer$ = dart.generic((S, T) => {
    let StreamTransformerWrapperOfS$T = () => (StreamTransformerWrapperOfS$T = dart.constFn(src__stream_sink_transformer__stream_transformer_wrapper.StreamTransformerWrapper$(S, T)))();
    let HandlerTransformerOfS$T = () => (HandlerTransformerOfS$T = dart.constFn(src__stream_sink_transformer__handler_transformer.HandlerTransformer$(S, T)))();
    class StreamSinkTransformer extends core.Object {
      static fromStreamTransformer(transformer) {
        return new (StreamTransformerWrapperOfS$T()).new(transformer);
      }
      static fromHandlers(opts) {
        let handleData = opts && 'handleData' in opts ? opts.handleData : null;
        let handleError = opts && 'handleError' in opts ? opts.handleError : null;
        let handleDone = opts && 'handleDone' in opts ? opts.handleDone : null;
        return new (HandlerTransformerOfS$T()).new(handleData, handleError, handleDone);
      }
      static typed(S, T, transformer) {
        return src__stream_sink_transformer.StreamSinkTransformer$(S, T).is(transformer) ? transformer : new (src__stream_sink_transformer__typed.TypeSafeStreamSinkTransformer$(S, T)).new(transformer);
      }
    }
    (StreamSinkTransformer[dart.mixinNew] = function() {
    }).prototype = StreamSinkTransformer.prototype;
    dart.addTypeTests(StreamSinkTransformer);
    StreamSinkTransformer.prototype[_is_StreamSinkTransformer_default] = true;
    dart.setStaticMethodSignature(StreamSinkTransformer, () => ({typed: dart.gFnType((S, T) => [src__stream_sink_transformer.StreamSinkTransformer$(S, T), [src__stream_sink_transformer.StreamSinkTransformer]])}));
    return StreamSinkTransformer;
  });
  src__stream_sink_transformer.StreamSinkTransformer = src__stream_sink_transformer.StreamSinkTransformer$();
  dart.addTypeTests(src__stream_sink_transformer.StreamSinkTransformer, _is_StreamSinkTransformer_default);
  dart.trackLibraries("packages/async/src/stream_sink_transformer.ddc", {
    "package:async/src/stream_sink_transformer/stream_transformer_wrapper.dart": src__stream_sink_transformer__stream_transformer_wrapper,
    "package:async/src/stream_sink_transformer/typed.dart": src__stream_sink_transformer__typed,
    "package:async/src/stream_sink_transformer/handler_transformer.dart": src__stream_sink_transformer__handler_transformer,
    "package:async/src/stream_sink_transformer.dart": src__stream_sink_transformer
  }, '{"version":3,"sourceRoot":"","sources":["stream_sink_transformer/stream_transformer_wrapper.dart","stream_sink_transformer/typed.dart","stream_sink_transformer/handler_transformer.dart","stream_sink_transformer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;WAeqB,IAAkB;+BAAJ;cAC7B,KAAI,0CAAmC,CAAC,kBAAY,EAAE,IAAI;MAAC;;6CAH3B,WAAY;MAAZ,kBAAY,GAAZ,WAAY;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;cAiB9B,aAAM,KAAK;;UAcrB,KAAO;iBAAL;AACT,yBAAW,IAAI,CAAC,KAAK;MACvB;eAEc,KAAK,EAAG,UAAqB;mCAAV;AAC/B,yBAAW,SAAS,CAAC,KAAK,EAAE,UAAU;MACxC;gBAEiB,MAAgB;2BAAN;cAAW,kBAAW,UAAU,CAAC,MAAM;MAAC;;AAGjE,yBAAW,MAAM;AACjB,cAAO,aAAM,KAAK;MACpB;;kDAxBI,WAAmC,EAAO,KAAM;MAR9C,iBAAW,GAAG,AAAI,yBAAmB,QAAO;MAQJ,YAAM,GAAN,KAAM;AAClD,uBAAW,OAAO,UACJ,IAAC,WAAW,QACf,WAAC,YAAM,8BAAe,YAAM,uBAAmB;AAIxD,sBAAM,MAAM,aAAa,CAAC,QAAC,CAAC;;;IAEhC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;WCzBmB,IAAkB;+BAAJ;cAC7B,gDAAoB,MAAM,IAAC,aAAM,KAAK,CAAC,IAAI;MAAE;;kDAHd,KAAM;MAAN,aAAM,GAAN,KAAM;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;WCiBvB,IAAkB;+BAAJ;cAAS,KAAI,yBAAkB,CAAC,MAAM,IAAI;MAAC;;uCAFpD,UAAW,EAAO,WAAY,EAAO,UAAW;MAAhD,iBAAW,GAAX,UAAW;MAAO,kBAAY,GAAZ,WAAY;MAAO,iBAAW,GAAX,UAAW;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAiBtD,eAAM,KAAK;;UAMrB,KAAO;iBAAL;AACT,4CAAI,mBAAY,aAAY,KAAI,MAAM;AACpC,wBAAM,IAAI,MAAC,KAAK;eACX;AACL,6DAAY,aAAY,EAAC,KAAK,EAAE,qBAAe;;MAEnD;eAEc,KAAK,EAAG,UAAqB;mCAAV;AAC/B,8DAAI,mBAAY,cAAa,KAAI,MAAM;AACrC,wBAAM,SAAS,CAAC,KAAK,EAAE,UAAU;eAC5B;AACL,+EAAY,cAAa,EAAC,KAAK,EAAE,UAAU,EAAE,qBAAe;;MAEhE;gBAEiB,MAAgB;2BAAN;AACzB,cAAO,eAAM,UAAU,CAAC,MAAM,UAAU,IACpC,AAAI,qCAAoC,8CACxB,mBAAY,aAAY,kEACvB,mBAAY,cAAa,eAC1B,4DAAU;MAChC;;AAGE,wCAAI,mBAAY,aAAY,KAAI,MAAM,MAAO,eAAM,MAAM;AAEzD,uDAAY,aAAY,EAAC,qBAAe;AACxC,cAAO,eAAM,KAAK;MACpB;;iCAjCkB,WAAY,EAAE,KAAmB;MAAjC,mBAAY,GAAZ,WAAY;MACxB,cAAM,GAAG,KAAK;MACd,qBAAe,GAAG,IAAI,yBAAiB,CAAC,KAAK;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cA0ClC,YAAW,aAAa,CAAC,QAAC,CAAC;;MAAK;;mCAFnC,KAAmB;AAAI,8CAAM,KAAK;IAAC;;;;;;;0EAMpC,IAAc;AAC5B,QAAI,MAAM;EACZ;;;;;;;mCCzEM,WAAmC;AAAI,yDAAvC,WAAmC;MAAkC;;YAU/D;YACD;YACA;AAAgC,AACvC,cAAO,KAAI,+BAAwB,CAAC,UAAU,EAAE,WAAW,EAAE,UAAU;MACzE;yBAgBQ,WAAiC;4EACrC,WAAW,IACL,WAAW,GACX,IAAI,8EAA6B,CAAC,WAAW;MAAC","file":"stream_sink_transformer.ddc.js"}');
  // Exports:
  return {
    src__stream_sink_transformer__stream_transformer_wrapper: src__stream_sink_transformer__stream_transformer_wrapper,
    src__stream_sink_transformer__typed: src__stream_sink_transformer__typed,
    src__stream_sink_transformer__handler_transformer: src__stream_sink_transformer__handler_transformer,
    src__stream_sink_transformer: src__stream_sink_transformer
  };
});

//# sourceMappingURL=stream_sink_transformer.ddc.js.map
