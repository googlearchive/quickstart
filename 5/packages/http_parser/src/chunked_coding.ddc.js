define(['dart_sdk', 'packages/http_parser/src/chunked_coding/encoder', 'packages/http_parser/src/chunked_coding/decoder'], function(dart_sdk, encoder, decoder) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__chunked_coding__encoder = encoder.src__chunked_coding__encoder;
  const src__chunked_coding__decoder = decoder.src__chunked_coding__decoder;
  const _root = Object.create(null);
  const src__chunked_coding = Object.create(_root);
  dart.defineLazy(src__chunked_coding, {
    /*src__chunked_coding.chunkedCoding*/get chunkedCoding() {
      return dart.const(new src__chunked_coding.ChunkedCodingCodec.__());
    }
  });
  src__chunked_coding.ChunkedCodingCodec = class ChunkedCodingCodec extends convert.Codec$(core.List$(core.int), core.List$(core.int)) {
    get encoder() {
      return src__chunked_coding__encoder.chunkedCodingEncoder;
    }
    get decoder() {
      return src__chunked_coding__decoder.chunkedCodingDecoder;
    }
  };
  (src__chunked_coding.ChunkedCodingCodec.__ = function() {
    src__chunked_coding.ChunkedCodingCodec.__proto__.new.call(this);
  }).prototype = src__chunked_coding.ChunkedCodingCodec.prototype;
  dart.addTypeTests(src__chunked_coding.ChunkedCodingCodec);
  dart.setGetterSignature(src__chunked_coding.ChunkedCodingCodec, () => ({
    __proto__: dart.getGetters(src__chunked_coding.ChunkedCodingCodec.__proto__),
    encoder: dart.fnType(src__chunked_coding__encoder.ChunkedCodingEncoder, []),
    decoder: dart.fnType(src__chunked_coding__decoder.ChunkedCodingDecoder, [])
  }));
  dart.trackLibraries("packages/http_parser/src/chunked_coding.ddc", {
    "package:http_parser/src/chunked_coding.dart": src__chunked_coding
  }, '{"version":3,"sourceRoot":"","sources":["chunked_coding.dart"],"names":[],"mappings":";;;;;;;;;;;MAaM,iCAAa;YAAG,gBAAM,yCAAoB;;;;;YAqBV,kDAAoB;;;YACpB,kDAAoB;;;;;EAE5B","file":"chunked_coding.ddc.js"}');
  // Exports:
  return {
    src__chunked_coding: src__chunked_coding
  };
});

//# sourceMappingURL=chunked_coding.ddc.js.map
