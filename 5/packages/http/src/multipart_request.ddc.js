define(['dart_sdk', 'packages/http/src/multipart_file', 'packages/http/src/utils', 'packages/http/src/byte_stream', 'packages/http/src/boundary_characters', 'packages/http/src/base_client'], function(dart_sdk, multipart_file, utils, byte_stream, boundary_characters, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__multipart_file = multipart_file.src__multipart_file;
  const src__utils = utils.src__utils;
  const src__byte_stream = byte_stream.src__byte_stream;
  const src__boundary_characters = boundary_characters.src__boundary_characters;
  const src__base_request = base_client.src__base_request;
  const _root = Object.create(null);
  const src__multipart_request = Object.create(_root);
  const $length = dartx.length;
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $replaceAll = dartx.replaceAll;
  const $_get = dartx._get;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfMultipartFile = () => (JSArrayOfMultipartFile = dart.constFn(_interceptors.JSArray$(src__multipart_file.MultipartFile)))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfMultipartFile = () => (ListOfMultipartFile = dart.constFn(core.List$(src__multipart_file.MultipartFile)))();
  dart.defineLazy(src__multipart_request, {
    /*src__multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  });
  const _files = Symbol('_files');
  const _headerForField = Symbol('_headerForField');
  const _headerForFile = Symbol('_headerForFile');
  const _boundaryString = Symbol('_boundaryString');
  const _browserEncode = Symbol('_browserEncode');
  src__multipart_request.MultipartRequest = class MultipartRequest extends src__base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[_files];
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.UTF8.encode(this[_headerForField](name, value))[$length]) + dart.notNull(convert.UTF8.encode(value)[$length]) + "\r\n".length);
      }, StringAndStringToNull()));
      for (let file of this[_files]) {
        length = length + ("--".length + 70 + "\r\n".length + dart.notNull(convert.UTF8.encode(this[_headerForFile](file))[$length]) + dart.notNull(file.length) + "\r\n".length);
      }
      return length + "--".length + 70 + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]('content-type', dart.str`multipart/form-data; boundary=${boundary}`);
      super.finalize();
      let controller = StreamControllerOfListOfint().new({sync: true});
      function writeAscii(string) {
        controller.add(convert.UTF8.encode(string));
      }
      dart.fn(writeAscii, StringTovoid());
      function writeUtf8(string) {
        return controller.add(convert.UTF8.encode(string));
      }
      dart.fn(writeUtf8, StringTovoid());
      function writeLine() {
        return controller.add(JSArrayOfint().of([13, 10]));
      }
      dart.fn(writeLine, VoidTovoid());
      this.fields[$forEach](dart.fn((name, value) => {
        writeAscii(dart.str`--${boundary}\r\n`);
        writeAscii(this[_headerForField](name, value));
        writeUtf8(value);
        writeLine();
      }, StringAndStringToNull()));
      async.Future.forEach(src__multipart_file.MultipartFile, this[_files], dart.fn(file => {
        writeAscii(dart.str`--${boundary}\r\n`);
        writeAscii(this[_headerForFile](src__multipart_file.MultipartFile._check(file)));
        return src__utils.writeStreamToSink(async.Stream._check(dart.dsend(file, 'finalize')), controller).then(dart.dynamic, dart.fn(_ => writeLine(), dynamicTovoid()));
      }, dynamicToFuture())).then(core.Null, dart.fn(_ => {
        writeAscii(dart.str`--${boundary}--\r\n`);
        controller.close();
      }, dynamicToNull()));
      return new src__byte_stream.ByteStream.new(controller.stream);
    }
    [_headerForField](name, value) {
      let header = dart.str`content-disposition: form-data; name="${this[_browserEncode](name)}"`;
      if (!dart.test(src__utils.isPlainAscii(value))) {
        header = dart.str`${header}\r\n` + 'content-type: text/plain; charset=utf-8\r\n' + 'content-transfer-encoding: binary';
      }
      return dart.str`${header}\r\n\r\n`;
    }
    [_headerForFile](file) {
      let header = dart.str`content-type: ${file.contentType}\r\n` + dart.str`content-disposition: form-data; name="${this[_browserEncode](file.field)}"`;
      if (file.filename != null) {
        header = dart.str`${header}; filename="${this[_browserEncode](file.filename)}"`;
      }
      return dart.str`${header}\r\n\r\n`;
    }
    [_browserEncode](value) {
      return value[$replaceAll](src__multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]('"', "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = ListOfint().generate(70 - prefix.length, dart.fn(index => src__boundary_characters.BOUNDARY_CHARACTERS[$_get](src__multipart_request.MultipartRequest._random.nextInt(src__boundary_characters.BOUNDARY_CHARACTERS[$length])), intToint()), {growable: false});
      return dart.str`${prefix}${core.String.fromCharCodes(list)}`;
    }
  };
  (src__multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (IdentityMapOfString$String()).new();
    this[_files] = JSArrayOfMultipartFile().of([]);
    src__multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
  }).prototype = src__multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(src__multipart_request.MultipartRequest);
  const fields = Symbol("MultipartRequest.fields");
  dart.setMethodSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(src__multipart_request.MultipartRequest.__proto__),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [src__multipart_file.MultipartFile]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    [_boundaryString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getGetters(src__multipart_request.MultipartRequest.__proto__),
    files: dart.fnType(core.List$(src__multipart_file.MultipartFile), [])
  }));
  dart.setFieldSignature(src__multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(src__multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(MapOfString$String()),
    [_files]: dart.finalFieldType(ListOfMultipartFile())
  }));
  dart.defineLazy(src__multipart_request.MultipartRequest, {
    /*src__multipart_request.MultipartRequest._BOUNDARY_LENGTH*/get _BOUNDARY_LENGTH() {
      return 70;
    },
    /*src__multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  });
  dart.trackLibraries("packages/http/src/multipart_request.ddc", {
    "package:http/src/multipart_request.dart": src__multipart_request
  }, '{"version":3,"sourceRoot":"","sources":["multipart_request.dart"],"names":[],"mappings":"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","file":"multipart_request.ddc.js"}');
  // Exports:
  return {
    src__multipart_request: src__multipart_request
  };
});

//# sourceMappingURL=multipart_request.ddc.js.map
