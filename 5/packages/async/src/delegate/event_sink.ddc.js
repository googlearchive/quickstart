define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__delegate__event_sink = Object.create(_root);
  const _sink = Symbol('_sink');
  const _is_DelegatingEventSink_default = Symbol('_is_DelegatingEventSink_default');
  src__delegate__event_sink.DelegatingEventSink$ = dart.generic(T => {
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    class DelegatingEventSink extends core.Object {
      static typed(T, sink) {
        return async.EventSink$(T).is(sink) ? sink : new (src__delegate__event_sink.DelegatingEventSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_sink].addError(error, stackTrace);
      }
      close() {
        this[_sink].close();
      }
    }
    (DelegatingEventSink.new = function(sink) {
      this[_sink] = sink;
    }).prototype = DelegatingEventSink.prototype;
    (DelegatingEventSink.__ = function(sink) {
      this[_sink] = sink;
    }).prototype = DelegatingEventSink.prototype;
    dart.addTypeTests(DelegatingEventSink);
    DelegatingEventSink.prototype[_is_DelegatingEventSink_default] = true;
    DelegatingEventSink[dart.implements] = () => [EventSinkOfT()];
    dart.setMethodSignature(DelegatingEventSink, () => ({
      __proto__: dart.getMethods(DelegatingEventSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setStaticMethodSignature(DelegatingEventSink, () => ({typed: dart.gFnType(T => [async.EventSink$(T), [async.EventSink]])}));
    dart.setFieldSignature(DelegatingEventSink, () => ({
      __proto__: dart.getFields(DelegatingEventSink.__proto__),
      [_sink]: dart.finalFieldType(async.EventSink)
    }));
    return DelegatingEventSink;
  });
  src__delegate__event_sink.DelegatingEventSink = src__delegate__event_sink.DelegatingEventSink$();
  dart.addTypeTests(src__delegate__event_sink.DelegatingEventSink, _is_DelegatingEventSink_default);
  dart.trackLibraries("packages/async/src/delegate/event_sink.ddc", {
    "package:async/src/delegate/event_sink.dart": src__delegate__event_sink
  }, '{"version":3,"sourceRoot":"","sources":["event_sink.dart"],"names":[],"mappings":";;;;;;;;;;;;;sBAwB+B,IAAc;sCACvC,IAAI,IAAmB,IAAI,GAAG,IAAI,sDAAqB,CAAC,IAAI;MAAC;UAExD,IAAM;iBAAJ;AACT,mBAAK,IAAI,CAAC,IAAI;MAChB;eAEc,KAAK,EAAG,UAAqB;mCAAV;AAC/B,mBAAK,SAAS,CAAC,KAAK,EAAE,UAAU;MAClC;;AAGE,mBAAK,MAAM;MACb;;wCAvBoB,IAAiB;MAAI,WAAK,GAAG,IAAI;;uCAE1B,IAAK;MAAL,WAAK,GAAL,IAAK;IAAC","file":"event_sink.ddc.js"}');
  // Exports:
  return {
    src__delegate__event_sink: src__delegate__event_sink
  };
});

//# sourceMappingURL=event_sink.ddc.js.map
