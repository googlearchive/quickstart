define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__byte_stream = Object.create(_root);
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  let ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfint()])))();
  src__byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static fromBytes(bytes) {
      return new src__byte_stream.ByteStream.new(StreamOfListOfint().fromIterable(JSArrayOfListOfint().of([bytes])));
    }
    toBytes() {
      let completer = CompleterOfUint8List().new();
      let sink = convert.ByteConversionSink.withCallback(dart.fn(bytes => completer.complete(typed_data.Uint8List.fromList(bytes)), ListOfintTovoid()));
      this.listen(dart.bind(sink, 'add'), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding) {
      if (encoding === void 0) encoding = convert.UTF8;
      return encoding.decodeStream(this);
    }
    toStringStream(encoding) {
      if (encoding === void 0) encoding = convert.UTF8;
      return encoding.decoder.bind(this);
    }
  };
  (src__byte_stream.ByteStream.new = function(stream) {
    src__byte_stream.ByteStream.__proto__.new.call(this, stream);
  }).prototype = src__byte_stream.ByteStream.prototype;
  dart.addTypeTests(src__byte_stream.ByteStream);
  dart.setMethodSignature(src__byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(src__byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  dart.trackLibraries("packages/http/src/byte_stream.ddc", {
    "package:http/src/byte_stream.dart": src__byte_stream
  }, '{"version":3,"sourceRoot":"","sources":["byte_stream.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;qBAe+B,KAAe;AAAE,YAC1C,KAAI,+BAAU,CAAC,AAAI,gCAAmB,CAAC,yBAAC,KAAK;IAAG;;AAIlD,UAAI,YAAY,AAAI,0BAAoB;AACxC,UAAI,OAAO,AAAI,uCAA+B,CAAC,QAAC,KAAK,IACjD,SAAS,SAAS,CAAC,AAAI,6BAAkB,CAAC,KAAK;AACnD,iBAAM,WAAC,IAAI,8BAAe,SAAS,sCAAwB,IAAI,2BAC5C;AACnB,YAAO,UAAS,OAAO;IACzB;kBAI8B,QAAsB;+BAAb,WAAS,YAAI;YAChD,SAAQ,aAAa,CAAC;IAAK;mBAEA,QAAsB;+BAAb,WAAS,YAAI;YACjD,SAAQ,QAAQ,KAAK,CAAC;IAAK;;8CAxBpB,MAAwB;AAC7B,yDAAM,MAAM;EAAC","file":"byte_stream.ddc.js"}');
  // Exports:
  return {
    src__byte_stream: src__byte_stream
  };
});

//# sourceMappingURL=byte_stream.ddc.js.map
