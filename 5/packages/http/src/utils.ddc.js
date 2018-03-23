define(['dart_sdk', 'packages/http/src/byte_stream'], function(dart_sdk, byte_stream) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__byte_stream = byte_stream.src__byte_stream;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $join = dartx.join;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $isEmpty = dartx.isEmpty;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $buffer = dartx.buffer;
  const $hashCode = dartx.hashCode;
  const $toString = dartx.toString;
  const $_equals = dartx._equals;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let JSArrayOfListOfString = () => (JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(ListOfString())))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringAndStringTovoid = () => (StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))();
  let ListOfStringToString = () => (ListOfStringToString = dart.constFn(dart.fnType(core.String, [ListOfString()])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let MapOfString$String__ToString = () => (MapOfString$String__ToString = dart.constFn(dart.fnType(core.String, [MapOfString$String()], {encoding: convert.Encoding})))();
  let StringAndStringToListOfString = () => (StringAndStringToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.String, core.String])))();
  let String__ToEncoding = () => (String__ToEncoding = dart.constFn(dart.fnType(convert.Encoding, [core.String], [convert.Encoding])))();
  let StringToEncoding = () => (StringToEncoding = dart.constFn(dart.fnType(convert.Encoding, [core.String])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfintToUint8List = () => (ListOfintToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [ListOfint()])))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let StreamOfListOfintToByteStream = () => (StreamOfListOfintToByteStream = dart.constFn(dart.fnType(src__byte_stream.ByteStream, [StreamOfListOfint()])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamOfTAndFnToStreamOfT = () => (StreamOfTAndFnToStreamOfT = dart.constFn(dart.gFnType(T => [async.Stream$(T), [async.Stream$(T), VoidTovoid()]])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamAndEventSinkToFuture = () => (StreamAndEventSinkToFuture = dart.constFn(dart.fnType(async.Future, [async.Stream, async.EventSink])))();
  let VoidTovoid$ = () => (VoidTovoid$ = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureAndCompleterTovoid = () => (FutureAndCompleterTovoid = dart.constFn(dart.fnType(dart.void, [async.Future, async.Completer])))();
  src__utils.mapToQuery = function(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => pairs[$add](JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: encoding}), core.Uri.encodeQueryComponent(value, {encoding: encoding})])), StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => dart.str`${pair[$_get](0)}=${pair[$_get](1)}`, ListOfStringToString()))[$join]("&");
  };
  dart.fn(src__utils.mapToQuery, MapOfString$String__ToString());
  src__utils.split1 = function(toSplit, pattern) {
    if (toSplit[$isEmpty]) return JSArrayOfString().of([]);
    let index = toSplit[$indexOf](pattern);
    if (index === -1) return JSArrayOfString().of([toSplit]);
    return JSArrayOfString().of([toSplit[$substring](0, index), toSplit[$substring](index + pattern.length)]);
  };
  dart.fn(src__utils.split1, StringAndStringToListOfString());
  src__utils.encodingForCharset = function(charset, fallback) {
    if (fallback === void 0) fallback = convert.LATIN1;
    if (charset == null) return fallback;
    let encoding = convert.Encoding.getByName(charset);
    return encoding == null ? fallback : encoding;
  };
  dart.fn(src__utils.encodingForCharset, String__ToEncoding());
  src__utils.requiredEncodingForCharset = function(charset) {
    let encoding = convert.Encoding.getByName(charset);
    if (encoding != null) return encoding;
    dart.throw(new core.FormatException.new(dart.str`Unsupported encoding "${charset}".`));
  };
  dart.fn(src__utils.requiredEncodingForCharset, StringToEncoding());
  dart.defineLazy(src__utils, {
    /*src__utils._ASCII_ONLY*/get _ASCII_ONLY() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  });
  src__utils.isPlainAscii = function(string) {
    return src__utils._ASCII_ONLY.hasMatch(string);
  };
  dart.fn(src__utils.isPlainAscii, StringTobool());
  src__utils.toUint8List = function(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return typed_data.Uint8List.fromList(input);
  };
  dart.fn(src__utils.toUint8List, ListOfintToUint8List());
  src__utils.toByteStream = function(stream) {
    if (src__byte_stream.ByteStream.is(stream)) return stream;
    return new src__byte_stream.ByteStream.new(stream);
  };
  dart.fn(src__utils.toByteStream, StreamOfListOfintToByteStream());
  src__utils.onDone = function(T, stream, onDone) {
    return stream.transform(T, async.StreamTransformer$(T, T).fromHandlers({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(core.Null, [async.EventSink$(T)]))}));
  };
  dart.fn(src__utils.onDone, StreamOfTAndFnToStreamOfT());
  src__utils.store = function(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => {
        sink.close();
        completer.complete();
      }, VoidToNull())});
    return completer.future;
  };
  dart.fn(src__utils.store, StreamAndEventSinkToFuture());
  src__utils.writeStreamToSink = function(stream, sink) {
    let completer = async.Completer.new();
    stream.listen(dart.bind(sink, 'add'), {onError: dart.bind(sink, 'addError'), onDone: dart.fn(() => completer.complete(), VoidTovoid$())});
    return completer.future;
  };
  dart.fn(src__utils.writeStreamToSink, StreamAndEventSinkToFuture());
  const _is_Pair_default = Symbol('_is_Pair_default');
  src__utils.Pair$ = dart.generic((E, F) => {
    class Pair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        this[first$] = E._check(value);
      }
      get last() {
        return this[last$];
      }
      set last(value) {
        this[last$] = F._check(value);
      }
      toString() {
        return dart.str`(${this.first}, ${this.last})`;
      }
      _equals(other) {
        if (other == null) return false;
        if (!src__utils.Pair.is(other)) return false;
        return dart.equals(dart.dload(other, 'first'), this.first) && dart.equals(dart.dload(other, 'last'), this.last);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.first)) ^ dart.notNull(dart.hashCode(this.last))) >>> 0;
      }
    }
    (Pair.new = function(first, last) {
      this[first$] = first;
      this[last$] = last;
    }).prototype = Pair.prototype;
    dart.addTypeTests(Pair);
    Pair.prototype[_is_Pair_default] = true;
    const first$ = Symbol("Pair.first");
    const last$ = Symbol("Pair.last");
    dart.setMethodSignature(Pair, () => ({
      __proto__: dart.getMethods(Pair.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      _equals: dart.fnType(core.bool, [dart.dynamic]),
      [$_equals]: dart.fnType(core.bool, [dart.dynamic])
    }));
    dart.setGetterSignature(Pair, () => ({
      __proto__: dart.getGetters(Pair.__proto__),
      hashCode: dart.fnType(core.int, []),
      [$hashCode]: dart.fnType(core.int, [])
    }));
    dart.setFieldSignature(Pair, () => ({
      __proto__: dart.getFields(Pair.__proto__),
      first: dart.fieldType(E),
      last: dart.fieldType(F)
    }));
    dart.defineExtensionMethods(Pair, ['toString', '_equals']);
    dart.defineExtensionAccessors(Pair, ['hashCode']);
    return Pair;
  });
  src__utils.Pair = src__utils.Pair$();
  dart.addTypeTests(src__utils.Pair, _is_Pair_default);
  src__utils.chainToCompleter = function(future, completer) {
    future.then(dart.void, dart.bind(completer, 'complete'), {onError: dart.bind(completer, 'completeError')});
  };
  dart.fn(src__utils.chainToCompleter, FutureAndCompleterTovoid());
  dart.trackLibraries("packages/http/src/utils.ddc", {
    "package:http/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mCAckB,GAAuB;QAAY;AACnD,QAAI,QAAQ;AACZ,OAAG,UAAQ,CAAC,SAAC,GAAG,EAAE,KAAK,KACnB,KAAK,MAAI,CAAC,sBAAC,QAAG,qBAAqB,CAAC,GAAG,aAAY,QAAQ,IAChD,QAAG,qBAAqB,CAAC,KAAK,aAAY,QAAQ;AACjE,UAAO,MAAK,MAAI,cAAC,QAAC,IAAI,IAAK,WAAG,IAAI,QAAC,MAAM,IAAI,QAAC,qCAAU,CAAC;EAC3D;;+BAQoB,OAAc,EAAE,OAAc;AAChD,QAAI,OAAO,UAAQ,EAAE,MAAO;AAE5B,QAAI,QAAQ,OAAO,UAAQ,CAAC,OAAO;AACnC,QAAI,KAAK,KAAI,CAAC,GAAG,MAAO,uBAAC,OAAO;AAChC,UAAO,uBACL,OAAO,YAAU,CAAC,GAAG,KAAK,GAC1B,OAAO,YAAU,CAAC,AAAM,KAAD,GAAG,OAAO,OAAO;EAE5C;;2CAK4B,OAAc,EAAG,QAA0B;6BAAjB,WAAW,cAAM;AACrE,QAAI,OAAO,IAAI,MAAM,MAAO,SAAQ;AACpC,QAAI,WAAW,gBAAQ,UAAU,CAAC,OAAO;AACzC,UAAO,SAAQ,IAAI,OAAO,QAAQ,GAAG,QAAQ;EAC/C;;mDAMoC,OAAc;AAChD,QAAI,WAAW,gBAAQ,UAAU,CAAC,OAAO;AACzC,QAAI,QAAQ,IAAI,MAAM,MAAO,SAAQ;AACrC,eAAM,IAAI,wBAAe,CAAC,iCAAwB,OAAO;EAC3D;;;MAIa,sBAAW;YAAG,AAAI,gBAAM,CAAC;;;qCAIpB,MAAa;UAAK,uBAAW,SAAS,CAAC,MAAM;EAAC;;oCAK1C,KAAe;AACnC,gCAAI,KAAK,GAAe,MAAO,MAAK;AACpC,gCAAI,KAAK,GAAe;AAEtB,YAAO,AAAI,0BAAc,yBAAE,KAAK,UAAqB;;AAEvD,UAAO,AAAI,8BAAkB,CAAC,KAAK;EACrC;;qCAIwB,MAAwB;AAC9C,uCAAI,MAAM,GAAgB,MAAO,OAAM;AACvC,UAAO,KAAI,+BAAU,CAAC,MAAM;EAC9B;;kCAKoB,MAAgB,EAAE,MAAa;UAC/C,OAAM,UAAU,IAAC,AAAI,2CAA8B,cAAa,QAAC,IAAI;AACnE,YAAI,MAAM;AACV,cAAM;;EACL;;8BAKM,MAAa,EAAE,IAAc;AACxC,QAAI,YAAY,AAAI,mBAAS;AAC7B,UAAM,OAAO,WAAC,IAAI,8BACL,IAAI,uBACL;AACN,YAAI,MAAM;AACV,iBAAS,SAAS;;AAExB,UAAO,UAAS,OAAO;EACzB;;0CAKyB,MAAa,EAAE,IAAc;AACpD,QAAI,YAAY,AAAI,mBAAS;AAC7B,UAAM,OAAO,WAAC,IAAI,8BACL,IAAI,uBACL,cAAM,SAAS,SAAS;AACpC,UAAO,UAAS,OAAO;EACzB;;;;;MAII;;;;;;MACA;;;;;;;cAImB,aAAG,UAAK,KAAG,SAAI;MAAE;cAEtB,KAAK;YAAL,KAAK;AACnB,gCAAI,KAAK,GAAW,MAAO;AAC3B,cAA4B,wBAArB,KAAK,YAAU,UAAK,4BAAI,KAAK,WAAS,SAAI;MACnD;;cAEoB,EAAe,2BAAf,UAAK,gCAAY,SAAI;MAAS;;yBAT7C,KAAU,EAAE,IAAS;MAAhB,YAAK,GAAL,KAAK;MAAO,WAAI,GAAJ,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAcP,MAAa,EAAE,SAAmB;AACtD,UAAM,KAAK,sBAAC,SAAS,mCAAoB,SAAS;EACpD","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
