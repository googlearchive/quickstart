define(['dart_sdk', 'packages/async/src/stream_sink_transformer'], function(dart_sdk, stream_sink_transformer) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stream_sink_transformer = stream_sink_transformer.src__stream_sink_transformer;
  const _root = Object.create(null);
  const src__result__capture_transformer = Object.create(_root);
  const src__result__release_transformer = Object.create(_root);
  const src__result__capture_sink = Object.create(_root);
  const src__result__release_sink = Object.create(_root);
  const src__result__error = Object.create(_root);
  const src__result__value = Object.create(_root);
  const src__result__result = Object.create(_root);
  const $length = dartx.length;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  let dynamicAnddynamicToErrorResult = () => (dynamicAnddynamicToErrorResult = dart.constFn(dart.fnType(src__result__error.ErrorResult, [dart.dynamic, dart.dynamic])))();
  let CaptureStreamTransformerOfObject = () => (CaptureStreamTransformerOfObject = dart.constFn(src__result__capture_transformer.CaptureStreamTransformer$(core.Object)))();
  let ReleaseStreamTransformerOfObject = () => (ReleaseStreamTransformerOfObject = dart.constFn(src__result__release_transformer.ReleaseStreamTransformer$(core.Object)))();
  let ResultOfObject = () => (ResultOfObject = dart.constFn(src__result__result.Result$(core.Object)))();
  let StreamSinkTransformerOfObject$ResultOfObject = () => (StreamSinkTransformerOfObject$ResultOfObject = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(core.Object, ResultOfObject())))();
  let StreamSinkTransformerOfResultOfObject$Object = () => (StreamSinkTransformerOfResultOfObject$Object = dart.constFn(src__stream_sink_transformer.StreamSinkTransformer$(ResultOfObject(), core.Object)))();
  let EventSinkOfResult = () => (EventSinkOfResult = dart.constFn(async.EventSink$(src__result__result.Result)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let dynamicAnddynamicTodynamic = () => (dynamicAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic])))();
  let ResultOfNull = () => (ResultOfNull = dart.constFn(src__result__result.Result$(core.Null)))();
  const _is_Result_default = Symbol('_is_Result_default');
  src__result__result.Result$ = dart.generic(T => {
    let ValueResultOfT = () => (ValueResultOfT = dart.constFn(src__result__value.ValueResult$(T)))();
    class Result extends core.Object {
      static new(computation) {
        try {
          return new (ValueResultOfT()).new(computation());
        } catch (e) {
          let s = dart.stackTrace(e);
          return new src__result__error.ErrorResult.new(e, s);
        }
      }
      static value(value) {
        return new (ValueResultOfT()).new(value);
      }
      static error(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        return new src__result__error.ErrorResult.new(error, stackTrace);
      }
      static capture(T, future) {
        return future.then(src__result__result.Result$(T), dart.fn(value => new (src__result__value.ValueResult$(T)).new(value), dart.fnType(src__result__value.ValueResult$(T), [T])), {onError: dart.fn((error, stackTrace) => new src__result__error.ErrorResult.new(error, core.StackTrace._check(stackTrace)), dynamicAnddynamicToErrorResult())});
      }
      static captureAll(T, elements) {
        let results = _interceptors.JSArray$(src__result__result.Result$(T)).of([]);
        let pending = 0;
        let completer = null;
        for (let element of elements) {
          if (async.Future$(T).is(element)) {
            let i = results[$length];
            results[$add](null);
            pending++;
            src__result__result.Result.capture(T, element).then(core.Null, dart.fn(result => {
              results[$_set](i, result);
              if (--pending === 0) {
                dart.dsend(completer, 'complete', results);
              }
            }, dart.fnType(core.Null, [src__result__result.Result$(T)])));
          } else {
            results[$add](src__result__result.Result$(T).value(T._check(element)));
          }
        }
        if (pending === 0) {
          return async.Future$(core.List$(src__result__result.Result$(T))).value(results);
        }
        completer = async.Completer$(core.List$(src__result__result.Result$(T))).new();
        return async.Future$(core.List$(src__result__result.Result$(T)))._check(dart.dload(completer, 'future'));
      }
      static release(T, future) {
        return future.then(T, dart.fn(result => result.asFuture, dart.fnType(async.Future$(T), [src__result__result.Result$(T)])));
      }
      static captureStream(T, source) {
        return source.transform(src__result__result.Result$(T), new (src__result__capture_transformer.CaptureStreamTransformer$(T)).new());
      }
      static releaseStream(T, source) {
        return source.transform(T, new (src__result__release_transformer.ReleaseStreamTransformer$(T)).new());
      }
      static releaseSink(T, sink) {
        return new (src__result__release_sink.ReleaseSink$(T)).new(sink);
      }
      static captureSink(T, sink) {
        return new (src__result__capture_sink.CaptureSink$(T)).new(sink);
      }
      static flatten(T, result) {
        if (dart.test(result.isValue)) return result.asValue.value;
        return result.asError;
      }
      static flattenAll(T, results) {
        let values = _interceptors.JSArray$(T).of([]);
        for (let result of results) {
          if (dart.test(result.isValue)) {
            values[$add](result.asValue.value);
          } else {
            return result.asError;
          }
        }
        return src__result__result.Result$(core.List$(T)).value(values);
      }
    }
    (Result[dart.mixinNew] = function() {
    }).prototype = Result.prototype;
    dart.addTypeTests(Result);
    Result.prototype[_is_Result_default] = true;
    dart.setStaticMethodSignature(Result, () => ({
      capture: dart.gFnType(T => [async.Future$(src__result__result.Result$(T)), [async.Future$(T)]]),
      captureAll: dart.gFnType(T => [async.Future$(core.List$(src__result__result.Result$(T))), [core.Iterable$(async.FutureOr$(T))]]),
      release: dart.gFnType(T => [async.Future$(T), [async.Future$(src__result__result.Result$(T))]]),
      captureStream: dart.gFnType(T => [async.Stream$(src__result__result.Result$(T)), [async.Stream$(T)]]),
      releaseStream: dart.gFnType(T => [async.Stream$(T), [async.Stream$(src__result__result.Result$(T))]]),
      releaseSink: dart.gFnType(T => [async.EventSink$(src__result__result.Result$(T)), [async.EventSink$(T)]]),
      captureSink: dart.gFnType(T => [async.EventSink$(T), [async.EventSink$(src__result__result.Result$(T))]]),
      flatten: dart.gFnType(T => [src__result__result.Result$(T), [src__result__result.Result$(src__result__result.Result$(T))]]),
      flattenAll: dart.gFnType(T => [src__result__result.Result$(core.List$(T)), [core.Iterable$(src__result__result.Result$(T))]])
    }));
    return Result;
  });
  src__result__result.Result = src__result__result.Result$();
  dart.defineLazy(src__result__result.Result, {
    /*src__result__result.Result.captureStreamTransformer*/get captureStreamTransformer() {
      return dart.const(new (CaptureStreamTransformerOfObject()).new());
    },
    /*src__result__result.Result.releaseStreamTransformer*/get releaseStreamTransformer() {
      return dart.const(new (ReleaseStreamTransformerOfObject()).new());
    },
    /*src__result__result.Result.captureSinkTransformer*/get captureSinkTransformer() {
      return dart.const(StreamSinkTransformerOfObject$ResultOfObject().fromStreamTransformer(dart.const(new (CaptureStreamTransformerOfObject()).new())));
    },
    /*src__result__result.Result.releaseSinkTransformer*/get releaseSinkTransformer() {
      return dart.const(StreamSinkTransformerOfResultOfObject$Object().fromStreamTransformer(dart.const(new (ReleaseStreamTransformerOfObject()).new())));
    }
  });
  dart.addTypeTests(src__result__result.Result, _is_Result_default);
  const _is_CaptureStreamTransformer_default = Symbol('_is_CaptureStreamTransformer_default');
  src__result__capture_transformer.CaptureStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let StreamOfResultOfT = () => (StreamOfResultOfT = dart.constFn(async.Stream$(ResultOfT())))();
    class CaptureStreamTransformer extends async.StreamTransformerBase$(T, src__result__result.Result$(T)) {
      bind(source) {
        StreamOfT()._check(source);
        return StreamOfResultOfT().eventTransformed(source, dart.tagStatic(src__result__capture_transformer.CaptureStreamTransformer, '_createSink'));
      }
      static _createSink(sink) {
        return new src__result__capture_sink.CaptureSink.new(sink);
      }
    }
    (CaptureStreamTransformer.new = function() {
      CaptureStreamTransformer.__proto__.new.call(this);
    }).prototype = CaptureStreamTransformer.prototype;
    dart.addTypeTests(CaptureStreamTransformer);
    CaptureStreamTransformer.prototype[_is_CaptureStreamTransformer_default] = true;
    dart.setMethodSignature(CaptureStreamTransformer, () => ({
      __proto__: dart.getMethods(CaptureStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__result__result.Result$(T)), [core.Object])
    }));
    dart.setStaticMethodSignature(CaptureStreamTransformer, () => ({_createSink: dart.fnType(async.EventSink, [EventSinkOfResult()])}));
    return CaptureStreamTransformer;
  });
  src__result__capture_transformer.CaptureStreamTransformer = src__result__capture_transformer.CaptureStreamTransformer$();
  dart.addTypeTests(src__result__capture_transformer.CaptureStreamTransformer, _is_CaptureStreamTransformer_default);
  const _is_ReleaseStreamTransformer_default = Symbol('_is_ReleaseStreamTransformer_default');
  src__result__release_transformer.ReleaseStreamTransformer$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let StreamOfResultOfT = () => (StreamOfResultOfT = dart.constFn(async.Stream$(ResultOfT())))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ReleaseStreamTransformer extends async.StreamTransformerBase$(src__result__result.Result$(T), T) {
      bind(source) {
        StreamOfResultOfT()._check(source);
        return StreamOfT().eventTransformed(source, dart.tagStatic(src__result__release_transformer.ReleaseStreamTransformer, '_createSink'));
      }
      static _createSink(sink) {
        return new src__result__release_sink.ReleaseSink.new(sink);
      }
    }
    (ReleaseStreamTransformer.new = function() {
      ReleaseStreamTransformer.__proto__.new.call(this);
    }).prototype = ReleaseStreamTransformer.prototype;
    dart.addTypeTests(ReleaseStreamTransformer);
    ReleaseStreamTransformer.prototype[_is_ReleaseStreamTransformer_default] = true;
    dart.setMethodSignature(ReleaseStreamTransformer, () => ({
      __proto__: dart.getMethods(ReleaseStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setStaticMethodSignature(ReleaseStreamTransformer, () => ({_createSink: dart.fnType(async.EventSink$(src__result__result.Result), [async.EventSink])}));
    return ReleaseStreamTransformer;
  });
  src__result__release_transformer.ReleaseStreamTransformer = src__result__release_transformer.ReleaseStreamTransformer$();
  dart.addTypeTests(src__result__release_transformer.ReleaseStreamTransformer, _is_ReleaseStreamTransformer_default);
  const _sink = Symbol('_sink');
  const _is_CaptureSink_default = Symbol('_is_CaptureSink_default');
  src__result__capture_sink.CaptureSink$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let EventSinkOfResultOfT = () => (EventSinkOfResultOfT = dart.constFn(async.EventSink$(ResultOfT())))();
    class CaptureSink extends core.Object {
      add(value) {
        T._check(value);
        this[_sink].add(ResultOfT().value(value));
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink].add(ResultOfT().error(error, stackTrace));
      }
      close() {
        this[_sink].close();
      }
    }
    (CaptureSink.new = function(sink) {
      this[_sink] = sink;
    }).prototype = CaptureSink.prototype;
    dart.addTypeTests(CaptureSink);
    CaptureSink.prototype[_is_CaptureSink_default] = true;
    CaptureSink[dart.implements] = () => [EventSinkOfT()];
    dart.setMethodSignature(CaptureSink, () => ({
      __proto__: dart.getMethods(CaptureSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(CaptureSink, () => ({
      __proto__: dart.getFields(CaptureSink.__proto__),
      [_sink]: dart.finalFieldType(EventSinkOfResultOfT())
    }));
    return CaptureSink;
  });
  src__result__capture_sink.CaptureSink = src__result__capture_sink.CaptureSink$();
  dart.addTypeTests(src__result__capture_sink.CaptureSink, _is_CaptureSink_default);
  const _sink$ = Symbol('_sink');
  const _is_ReleaseSink_default = Symbol('_is_ReleaseSink_default');
  src__result__release_sink.ReleaseSink$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let EventSinkOfResultOfT = () => (EventSinkOfResultOfT = dart.constFn(async.EventSink$(ResultOfT())))();
    class ReleaseSink extends core.Object {
      add(result) {
        ResultOfT()._check(result);
        result.addTo(EventSinkOfT()._check(this[_sink$]));
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink$].addError(error, stackTrace);
      }
      close() {
        this[_sink$].close();
      }
    }
    (ReleaseSink.new = function(sink) {
      this[_sink$] = sink;
    }).prototype = ReleaseSink.prototype;
    dart.addTypeTests(ReleaseSink);
    ReleaseSink.prototype[_is_ReleaseSink_default] = true;
    ReleaseSink[dart.implements] = () => [EventSinkOfResultOfT()];
    dart.setMethodSignature(ReleaseSink, () => ({
      __proto__: dart.getMethods(ReleaseSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(ReleaseSink, () => ({
      __proto__: dart.getFields(ReleaseSink.__proto__),
      [_sink$]: dart.finalFieldType(async.EventSink)
    }));
    return ReleaseSink;
  });
  src__result__release_sink.ReleaseSink = src__result__release_sink.ReleaseSink$();
  dart.addTypeTests(src__result__release_sink.ReleaseSink, _is_ReleaseSink_default);
  src__result__error.ErrorResult = class ErrorResult extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
    get isValue() {
      return false;
    }
    get isError() {
      return true;
    }
    get asValue() {
      return null;
    }
    get asError() {
      return this;
    }
    complete(completer) {
      completer.completeError(this.error, this.stackTrace);
    }
    addTo(sink) {
      sink.addError(this.error, this.stackTrace);
    }
    get asFuture() {
      return FutureOfNull().error(this.error, this.stackTrace);
    }
    handle(errorHandler) {
      if (dynamicAnddynamicTodynamic().is(errorHandler)) {
        dart.dcall(errorHandler, this.error, this.stackTrace);
      } else {
        dart.dcall(errorHandler, this.error);
      }
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ 492929599) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return src__result__error.ErrorResult.is(other) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace);
    }
  };
  (src__result__error.ErrorResult.new = function(error, stackTrace) {
    this[error$] = error;
    this[stackTrace$] = stackTrace;
  }).prototype = src__result__error.ErrorResult.prototype;
  dart.addTypeTests(src__result__error.ErrorResult);
  const error$ = Symbol("ErrorResult.error");
  const stackTrace$ = Symbol("ErrorResult.stackTrace");
  src__result__error.ErrorResult[dart.implements] = () => [ResultOfNull()];
  dart.setMethodSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getMethods(src__result__error.ErrorResult.__proto__),
    complete: dart.fnType(dart.void, [async.Completer]),
    addTo: dart.fnType(dart.void, [async.EventSink]),
    handle: dart.fnType(dart.void, [core.Function]),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getGetters(src__result__error.ErrorResult.__proto__),
    isValue: dart.fnType(core.bool, []),
    isError: dart.fnType(core.bool, []),
    asValue: dart.fnType(src__result__value.ValueResult$(core.Null), []),
    asError: dart.fnType(src__result__error.ErrorResult, []),
    asFuture: dart.fnType(async.Future$(core.Null), [])
  }));
  dart.setFieldSignature(src__result__error.ErrorResult, () => ({
    __proto__: dart.getFields(src__result__error.ErrorResult.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stackTrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(src__result__error.ErrorResult, ['_equals']);
  dart.defineExtensionAccessors(src__result__error.ErrorResult, ['hashCode']);
  const _is_ValueResult_default = Symbol('_is_ValueResult_default');
  src__result__value.ValueResult$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    class ValueResult extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get isValue() {
        return true;
      }
      get isError() {
        return false;
      }
      get asValue() {
        return this;
      }
      get asError() {
        return null;
      }
      complete(completer) {
        CompleterOfT()._check(completer);
        completer.complete(this.value);
      }
      addTo(sink) {
        EventSinkOfT()._check(sink);
        sink.add(this.value);
      }
      get asFuture() {
        return FutureOfT().value(this.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.value)) ^ 842997089) >>> 0;
      }
      _equals(other) {
        if (other == null) return false;
        return src__result__value.ValueResult.is(other) && dart.equals(this.value, other.value);
      }
    }
    (ValueResult.new = function(value) {
      this[value$] = value;
    }).prototype = ValueResult.prototype;
    dart.addTypeTests(ValueResult);
    ValueResult.prototype[_is_ValueResult_default] = true;
    const value$ = Symbol("ValueResult.value");
    ValueResult[dart.implements] = () => [ResultOfT()];
    dart.setMethodSignature(ValueResult, () => ({
      __proto__: dart.getMethods(ValueResult.__proto__),
      complete: dart.fnType(dart.void, [core.Object]),
      addTo: dart.fnType(dart.void, [core.Object]),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ValueResult, () => ({
      __proto__: dart.getGetters(ValueResult.__proto__),
      isValue: dart.fnType(core.bool, []),
      isError: dart.fnType(core.bool, []),
      asValue: dart.fnType(src__result__value.ValueResult$(T), []),
      asError: dart.fnType(src__result__error.ErrorResult, []),
      asFuture: dart.fnType(async.Future$(T), []),
      hashCode: dart.fnType(core.int, []),
      [$hashCode]: dart.fnType(core.int, [])
    }));
    dart.setFieldSignature(ValueResult, () => ({
      __proto__: dart.getFields(ValueResult.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueResult, ['_equals']);
    dart.defineExtensionAccessors(ValueResult, ['hashCode']);
    return ValueResult;
  });
  src__result__value.ValueResult = src__result__value.ValueResult$();
  dart.addTypeTests(src__result__value.ValueResult, _is_ValueResult_default);
  dart.trackLibraries("packages/async/src/result/capture_sink.ddc", {
    "package:async/src/result/capture_transformer.dart": src__result__capture_transformer,
    "package:async/src/result/release_transformer.dart": src__result__release_transformer,
    "package:async/src/result/capture_sink.dart": src__result__capture_sink,
    "package:async/src/result/release_sink.dart": src__result__release_sink,
    "package:async/src/result/error.dart": src__result__error,
    "package:async/src/result/value.dart": src__result__value,
    "package:async/src/result/result.dart": src__result__result
  }, '{"version":3,"sourceRoot":"","sources":["result.dart","capture_transformer.dart","release_transformer.dart","capture_sink.dart","release_sink.dart","error.dart","value.dart"],"names":[],"mappings":"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","file":"capture_sink.ddc.js"}');
  // Exports:
  return {
    src__result__capture_transformer: src__result__capture_transformer,
    src__result__release_transformer: src__result__release_transformer,
    src__result__capture_sink: src__result__capture_sink,
    src__result__release_sink: src__result__release_sink,
    src__result__error: src__result__error,
    src__result__value: src__result__value,
    src__result__result: src__result__result
  };
});

//# sourceMappingURL=capture_sink.ddc.js.map
