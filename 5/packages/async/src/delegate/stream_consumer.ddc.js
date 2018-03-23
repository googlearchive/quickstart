define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__delegate__stream_consumer = Object.create(_root);
  const _consumer = Symbol('_consumer');
  const _is_DelegatingStreamConsumer_default = Symbol('_is_DelegatingStreamConsumer_default');
  src__delegate__stream_consumer.DelegatingStreamConsumer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamConsumerOfT = () => (StreamConsumerOfT = dart.constFn(async.StreamConsumer$(T)))();
    class DelegatingStreamConsumer extends core.Object {
      static typed(T, consumer) {
        return async.StreamConsumer$(T).is(consumer) ? consumer : new (src__delegate__stream_consumer.DelegatingStreamConsumer$(T)).__(consumer);
      }
      addStream(stream) {
        StreamOfT()._check(stream);
        return this[_consumer].addStream(stream);
      }
      close() {
        return this[_consumer].close();
      }
    }
    (DelegatingStreamConsumer.new = function(consumer) {
      this[_consumer] = consumer;
    }).prototype = DelegatingStreamConsumer.prototype;
    (DelegatingStreamConsumer.__ = function(consumer) {
      this[_consumer] = consumer;
    }).prototype = DelegatingStreamConsumer.prototype;
    dart.addTypeTests(DelegatingStreamConsumer);
    DelegatingStreamConsumer.prototype[_is_DelegatingStreamConsumer_default] = true;
    DelegatingStreamConsumer[dart.implements] = () => [StreamConsumerOfT()];
    dart.setMethodSignature(DelegatingStreamConsumer, () => ({
      __proto__: dart.getMethods(DelegatingStreamConsumer.__proto__),
      addStream: dart.fnType(async.Future, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setStaticMethodSignature(DelegatingStreamConsumer, () => ({typed: dart.gFnType(T => [async.StreamConsumer$(T), [async.StreamConsumer]])}));
    dart.setFieldSignature(DelegatingStreamConsumer, () => ({
      __proto__: dart.getFields(DelegatingStreamConsumer.__proto__),
      [_consumer]: dart.finalFieldType(async.StreamConsumer)
    }));
    return DelegatingStreamConsumer;
  });
  src__delegate__stream_consumer.DelegatingStreamConsumer = src__delegate__stream_consumer.DelegatingStreamConsumer$();
  dart.addTypeTests(src__delegate__stream_consumer.DelegatingStreamConsumer, _is_DelegatingStreamConsumer_default);
  dart.trackLibraries("packages/async/src/delegate/stream_consumer.ddc", {
    "package:async/src/delegate/stream_consumer.dart": src__delegate__stream_consumer
  }, '{"version":3,"sourceRoot":"","sources":["stream_consumer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;sBAwBoC,QAAuB;2CACrD,QAAQ,IACF,QAAQ,GACR,IAAI,gEAA0B,CAAC,QAAQ;MAAC;gBAEjC,MAAgB;2BAAN;cAAW,gBAAS,UAAU,CAAC,MAAM;MAAC;;cAE/C,gBAAS,MAAM;MAAE;;6CAjBV,QAA0B;MAAI,eAAS,GAAG,QAAQ;;4CAE3C,QAAS;MAAT,eAAS,GAAT,QAAS;IAAC","file":"stream_consumer.ddc.js"}');
  // Exports:
  return {
    src__delegate__stream_consumer: src__delegate__stream_consumer
  };
});

//# sourceMappingURL=stream_consumer.ddc.js.map
