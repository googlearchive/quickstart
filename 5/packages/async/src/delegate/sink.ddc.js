define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__delegate__sink = Object.create(_root);
  const _sink = Symbol('_sink');
  const _is_DelegatingSink_default = Symbol('_is_DelegatingSink_default');
  src__delegate__sink.DelegatingSink$ = dart.generic(T => {
    let SinkOfT = () => (SinkOfT = dart.constFn(core.Sink$(T)))();
    class DelegatingSink extends core.Object {
      static typed(T, sink) {
        return core.Sink$(T).is(sink) ? sink : new (src__delegate__sink.DelegatingSink$(T)).__(sink);
      }
      add(data) {
        T._check(data);
        this[_sink].add(data);
      }
      close() {
        this[_sink].close();
      }
    }
    (DelegatingSink.new = function(sink) {
      this[_sink] = sink;
    }).prototype = DelegatingSink.prototype;
    (DelegatingSink.__ = function(sink) {
      this[_sink] = sink;
    }).prototype = DelegatingSink.prototype;
    dart.addTypeTests(DelegatingSink);
    DelegatingSink.prototype[_is_DelegatingSink_default] = true;
    DelegatingSink[dart.implements] = () => [SinkOfT()];
    dart.setMethodSignature(DelegatingSink, () => ({
      __proto__: dart.getMethods(DelegatingSink.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setStaticMethodSignature(DelegatingSink, () => ({typed: dart.gFnType(T => [core.Sink$(T), [core.Sink]])}));
    dart.setFieldSignature(DelegatingSink, () => ({
      __proto__: dart.getFields(DelegatingSink.__proto__),
      [_sink]: dart.finalFieldType(core.Sink)
    }));
    return DelegatingSink;
  });
  src__delegate__sink.DelegatingSink = src__delegate__sink.DelegatingSink$();
  dart.addTypeTests(src__delegate__sink.DelegatingSink, _is_DelegatingSink_default);
  dart.trackLibraries("packages/async/src/delegate/sink.ddc", {
    "package:async/src/delegate/sink.dart": src__delegate__sink
  }, '{"version":3,"sourceRoot":"","sources":["sink.dart"],"names":[],"mappings":";;;;;;;;;;;;sBAsB0B,IAAS;gCAC7B,IAAI,IAAc,IAAI,GAAG,IAAI,2CAAgB,CAAC,IAAI;MAAC;UAE9C,IAAM;iBAAJ;AACT,mBAAK,IAAI,CAAC,IAAI;MAChB;;AAGE,mBAAK,MAAM;MACb;;mCAnBe,IAAY;MAAI,WAAK,GAAG,IAAI;;kCAErB,IAAK;MAAL,WAAK,GAAL,IAAK;IAAC","file":"sink.ddc.js"}');
  // Exports:
  return {
    src__delegate__sink: src__delegate__sink
  };
});

//# sourceMappingURL=sink.ddc.js.map
