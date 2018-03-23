define(['dart_sdk', 'packages/async/src/delegate/stream'], function(dart_sdk, stream) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__delegate__stream = stream.src__delegate__stream;
  const _root = Object.create(null);
  const src__typed_stream_transformer = Object.create(_root);
  let StreamTransformerToStreamTransformerOfS$T = () => (StreamTransformerToStreamTransformerOfS$T = dart.constFn(dart.gFnType((S, T) => [async.StreamTransformer$(S, T), [async.StreamTransformer]])))();
  src__typed_stream_transformer.typedStreamTransformer = function(S, T, transformer) {
    return async.StreamTransformer$(S, T).is(transformer) ? transformer : new (src__typed_stream_transformer._TypeSafeStreamTransformer$(S, T)).new(transformer);
  };
  dart.fn(src__typed_stream_transformer.typedStreamTransformer, StreamTransformerToStreamTransformerOfS$T());
  const _inner = Symbol('_inner');
  const _is__TypeSafeStreamTransformer_default = Symbol('_is__TypeSafeStreamTransformer_default');
  src__typed_stream_transformer._TypeSafeStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class _TypeSafeStreamTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        return src__delegate__stream.DelegatingStream.typed(T, this[_inner].bind(stream));
      }
    }
    (_TypeSafeStreamTransformer.new = function(inner) {
      this[_inner] = inner;
      _TypeSafeStreamTransformer.__proto__.new.call(this);
    }).prototype = _TypeSafeStreamTransformer.prototype;
    dart.addTypeTests(_TypeSafeStreamTransformer);
    _TypeSafeStreamTransformer.prototype[_is__TypeSafeStreamTransformer_default] = true;
    dart.setMethodSignature(_TypeSafeStreamTransformer, () => ({
      __proto__: dart.getMethods(_TypeSafeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(_TypeSafeStreamTransformer, () => ({
      __proto__: dart.getFields(_TypeSafeStreamTransformer.__proto__),
      [_inner]: dart.finalFieldType(async.StreamTransformer)
    }));
    return _TypeSafeStreamTransformer;
  });
  src__typed_stream_transformer._TypeSafeStreamTransformer = src__typed_stream_transformer._TypeSafeStreamTransformer$();
  dart.addTypeTests(src__typed_stream_transformer._TypeSafeStreamTransformer, _is__TypeSafeStreamTransformer_default);
  dart.trackLibraries("packages/async/src/typed_stream_transformer.ddc", {
    "package:async/src/typed_stream_transformer.dart": src__typed_stream_transformer
  }, '{"version":3,"sourceRoot":"","sources":["typed_stream_transformer.dart"],"names":[],"mappings":";;;;;;;;;;wEAeQ,WAA6B;6CACjC,WAAW,IACL,WAAW,GACX,IAAI,qEAA0B,CAAC,WAAW;EAAC;;;;;;;WASpC,MAAgB;2BAAN;cACrB,uCAAgB,MAAM,IAAC,YAAM,KAAK,CAAC,MAAM;MAAE;;+CAHf,KAAM;MAAN,YAAM,GAAN,KAAM;;IAAC","file":"typed_stream_transformer.ddc.js"}');
  // Exports:
  return {
    src__typed_stream_transformer: src__typed_stream_transformer
  };
});

//# sourceMappingURL=typed_stream_transformer.ddc.js.map
