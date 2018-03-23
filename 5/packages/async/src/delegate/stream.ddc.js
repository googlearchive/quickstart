define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__delegate__stream = Object.create(_root);
  const _is_DelegatingStream_default = Symbol('_is_DelegatingStream_default');
  src__delegate__stream.DelegatingStream$ = dart.generic(T => {
    class DelegatingStream extends async.StreamView$(T) {
      static typed(T, stream) {
        return stream.cast(T);
      }
    }
    (DelegatingStream.new = function(stream) {
      DelegatingStream.__proto__.new.call(this, stream);
    }).prototype = DelegatingStream.prototype;
    dart.addTypeTests(DelegatingStream);
    DelegatingStream.prototype[_is_DelegatingStream_default] = true;
    dart.setStaticMethodSignature(DelegatingStream, () => ({typed: dart.gFnType(T => [async.Stream$(T), [async.Stream]])}));
    return DelegatingStream;
  });
  src__delegate__stream.DelegatingStream = src__delegate__stream.DelegatingStream$();
  dart.addTypeTests(src__delegate__stream.DelegatingStream, _is_DelegatingStream_default);
  dart.trackLibraries("packages/async/src/delegate/stream.ddc", {
    "package:async/src/delegate/stream.dart": src__delegate__stream
  }, '{"version":3,"sourceRoot":"","sources":["stream.dart"],"names":[],"mappings":";;;;;;;;;;;sBAuB4B,MAAa;cAAK,OAAM,KAAK;MAAE;;qCATxC,MAAgB;AAAI,gDAAM,MAAM;IAAC","file":"stream.ddc.js"}');
  // Exports:
  return {
    src__delegate__stream: src__delegate__stream
  };
});

//# sourceMappingURL=stream.ddc.js.map
