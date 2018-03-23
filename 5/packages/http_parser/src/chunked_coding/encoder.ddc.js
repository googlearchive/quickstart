define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__chunked_coding__encoder = Object.create(_root);
  const $length = dartx.length;
  const $toRadixString = dartx.toRadixString;
  const $codeUnits = dartx.codeUnits;
  const $setRange = dartx.setRange;
  const $_set = dartx._set;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let ListOfintAndintAndint__ToListOfint = () => (ListOfintAndintAndint__ToListOfint = dart.constFn(dart.fnType(ListOfint(), [ListOfint(), core.int, core.int], {isLast: core.bool})))();
  dart.defineLazy(src__chunked_coding__encoder, {
    /*src__chunked_coding__encoder.chunkedCodingEncoder*/get chunkedCodingEncoder() {
      return dart.const(new src__chunked_coding__encoder.ChunkedCodingEncoder.__());
    },
    /*src__chunked_coding__encoder._doneChunk*/get _doneChunk() {
      return typed_data.Uint8List.fromList(JSArrayOfint().of([48, 13, 10, 13, 10]));
    }
  });
  src__chunked_coding__encoder.ChunkedCodingEncoder = class ChunkedCodingEncoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    convert(bytes) {
      ListOfint()._check(bytes);
      return src__chunked_coding__encoder._convert(bytes, 0, bytes[$length], {isLast: true});
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__chunked_coding__encoder._Sink.new(sink);
    }
  };
  (src__chunked_coding__encoder.ChunkedCodingEncoder.__ = function() {
    src__chunked_coding__encoder.ChunkedCodingEncoder.__proto__.new.call(this);
  }).prototype = src__chunked_coding__encoder.ChunkedCodingEncoder.prototype;
  dart.addTypeTests(src__chunked_coding__encoder.ChunkedCodingEncoder);
  dart.setMethodSignature(src__chunked_coding__encoder.ChunkedCodingEncoder, () => ({
    __proto__: dart.getMethods(src__chunked_coding__encoder.ChunkedCodingEncoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink = Symbol('_sink');
  src__chunked_coding__encoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      this[_sink].add(src__chunked_coding__encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink].add(src__chunked_coding__encoder._convert(chunk, start, end, {isLast: isLast}));
      if (dart.test(isLast)) this[_sink].close();
    }
    close() {
      this[_sink].add(src__chunked_coding__encoder._doneChunk);
      this[_sink].close();
    }
  };
  (src__chunked_coding__encoder._Sink.new = function(sink) {
    this[_sink] = sink;
    src__chunked_coding__encoder._Sink.__proto__.new.call(this);
  }).prototype = src__chunked_coding__encoder._Sink.prototype;
  dart.addTypeTests(src__chunked_coding__encoder._Sink);
  dart.setMethodSignature(src__chunked_coding__encoder._Sink, () => ({
    __proto__: dart.getMethods(src__chunked_coding__encoder._Sink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__chunked_coding__encoder._Sink, () => ({
    __proto__: dart.getFields(src__chunked_coding__encoder._Sink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfListOfint())
  }));
  let const$;
  src__chunked_coding__encoder._convert = function(bytes, start, end, opts) {
    let isLast = opts && 'isLast' in opts ? opts.isLast : false;
    if (end == start) return dart.test(isLast) ? src__chunked_coding__encoder._doneChunk : const$ || (const$ = dart.constList([], core.int));
    let size = dart.notNull(end) - dart.notNull(start);
    let sizeInHex = size[$toRadixString](16);
    let footerSize = dart.test(isLast) ? src__chunked_coding__encoder._doneChunk[$length] : 0;
    let list = typed_data.Uint8List.new(sizeInHex.length + 4 + size + dart.notNull(footerSize));
    list[$setRange](0, sizeInHex.length, sizeInHex[$codeUnits]);
    let cursor = sizeInHex.length;
    list[$_set](cursor++, 13);
    list[$_set](cursor++, 10);
    list[$setRange](cursor, cursor + dart.notNull(end) - dart.notNull(start), bytes, start);
    cursor = cursor + (dart.notNull(end) - dart.notNull(start));
    list[$_set](cursor++, 13);
    list[$_set](cursor++, 10);
    if (dart.test(isLast)) {
      list[$setRange](dart.notNull(list[$length]) - dart.notNull(footerSize), list[$length], src__chunked_coding__encoder._doneChunk);
    }
    return list;
  };
  dart.fn(src__chunked_coding__encoder._convert, ListOfintAndintAndint__ToListOfint());
  dart.trackLibraries("packages/http_parser/src/chunked_coding/encoder.ddc", {
    "package:http_parser/src/chunked_coding/encoder.dart": src__chunked_coding__encoder
  }, '{"version":3,"sourceRoot":"","sources":["encoder.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAUM,iDAAoB;YAAG,gBAAM,oDAAsB;;MAGnD,uCAAU;YAAG,AAAI,8BAAkB,CAAC,mBAAC,EAAE,EAAE,EAAG,EAAE,EAAG,EAAE,EAAG,EAAE,EAAG;;;;YAM7C,KAAe;yBAAL;YACxB,sCAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO,WAAU;IAAK;2BAER,IAAoB;+BAAJ;YACtD,KAAI,sCAAK,CAAC,IAAI;IAAC;;;;EANW;;;;;;;;;QAgBrB,KAAe;yBAAL;AACjB,iBAAK,IAAI,CAAC,qCAAQ,CAAC,KAAK,EAAE,GAAG,KAAK,SAAO;IAC3C;aAEc,KAAe,EAAE,KAAS,EAAE,GAAO,EAAE,MAAW;AAC5D,qBAAU,gBAAgB,CAAC,KAAK,EAAE,GAAG,EAAE,KAAK,SAAO;AACnD,iBAAK,IAAI,CAAC,qCAAQ,CAAC,KAAK,EAAE,KAAK,EAAE,GAAG,WAAU,MAAM;AACpD,oBAAI,MAAM,GAAE,WAAK,MAAM;IACzB;;AAGE,iBAAK,IAAI,CAAC,uCAAU;AACpB,iBAAK,MAAM;IACb;;qDAfW,IAAK;IAAL,WAAK,GAAL,IAAK;;EAAC;;;;;;;;;;;;mDAuBA,KAAe,EAAE,KAAS,EAAE,GAAO;QAAQ,kDAAQ;AACpE,QAAI,GAAG,IAAI,KAAK,EAAE,iBAAO,MAAM,IAAG,uCAAU,GAAG;AAE/C,QAAI,OAAW,aAAJ,GAAG,iBAAG,KAAK;AACtB,QAAI,YAAY,IAAI,gBAAc,CAAC;AACnC,QAAI,uBAAa,MAAM,IAAG,uCAAU,SAAO,GAAG;AAG9C,QAAI,OAAO,AAAI,wBAAS,CAAC,AAAiB,AAAI,AAAO,SAAnB,OAAO,GAAG,IAAI,IAAI,gBAAG,UAAU;AACjE,QAAI,WAAS,CAAC,GAAG,SAAS,OAAO,EAAE,SAAS,YAAU;AAEtD,QAAI,SAAS,SAAS,OAAO;AAC7B,QAAI,QAAC,MAAM,IAAM,EAAG;AACpB,QAAI,QAAC,MAAM,IAAM,EAAG;AACpB,QAAI,WAAS,CAAC,MAAM,EAAE,AAAO,AAAM,MAAP,gBAAG,GAAG,iBAAG,KAAK,GAAE,KAAK,EAAE,KAAK;AACxD,UAAM,GArER,AAqEE,MAAM,IAAQ,aAAJ,GAAG,iBAAG,KAAK;AACrB,QAAI,QAAC,MAAM,IAAM,EAAG;AACpB,QAAI,QAAC,MAAM,IAAM,EAAG;AAEpB,kBAAI,MAAM,GAAE;AACV,UAAI,WAAS,CAAa,aAAZ,IAAI,SAAO,iBAAG,UAAU,GAAE,IAAI,SAAO,EAAE,uCAAU;;AAEjE,UAAO,KAAI;EACb","file":"encoder.ddc.js"}');
  // Exports:
  return {
    src__chunked_coding__encoder: src__chunked_coding__encoder
  };
});

//# sourceMappingURL=encoder.ddc.js.map
