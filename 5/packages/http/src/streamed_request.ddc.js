define(['dart_sdk', 'packages/http/src/byte_stream', 'packages/http/src/base_client'], function(dart_sdk, byte_stream, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__byte_stream = byte_stream.src__byte_stream;
  const src__base_request = base_client.src__base_request;
  const _root = Object.create(null);
  const src__streamed_request = Object.create(_root);
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  const _controller = Symbol('_controller');
  src__streamed_request.StreamedRequest = class StreamedRequest extends src__base_request.BaseRequest {
    get sink() {
      return this[_controller].sink;
    }
    finalize() {
      super.finalize();
      return new src__byte_stream.ByteStream.new(this[_controller].stream);
    }
  };
  (src__streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller] = StreamControllerOfListOfint().new({sync: true});
    src__streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
  }).prototype = src__streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(src__streamed_request.StreamedRequest);
  dart.setGetterSignature(src__streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(src__streamed_request.StreamedRequest.__proto__),
    sink: dart.fnType(async.EventSink$(core.List$(core.int)), [])
  }));
  dart.setFieldSignature(src__streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(src__streamed_request.StreamedRequest.__proto__),
    [_controller]: dart.finalFieldType(StreamControllerOfListOfint())
  }));
  dart.trackLibraries("packages/http/src/streamed_request.ddc", {
    "package:http/src/streamed_request.dart": src__streamed_request
  }, '{"version":3,"sourceRoot":"","sources":["streamed_request.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;YAsBmC,kBAAW,KAAK;;;AAe/C,oBAAc;AACd,YAAO,KAAI,+BAAU,CAAC,iBAAW,OAAO;IAC1C;;wDAVgB,MAAa,EAAE,GAAO;IAClC,iBAAW,GAAG,AAAI,iCAA2B,QAAO;AACpD,mEAAM,MAAM,EAAE,GAAG;EAAC","file":"streamed_request.ddc.js"}');
  // Exports:
  return {
    src__streamed_request: src__streamed_request
  };
});

//# sourceMappingURL=streamed_request.ddc.js.map
