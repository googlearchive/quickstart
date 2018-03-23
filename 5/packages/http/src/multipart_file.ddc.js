define(['dart_sdk', 'packages/http/src/utils', 'packages/http_parser/src/media_type', 'packages/http/src/byte_stream', 'packages/path/path', 'packages/async/src/delegate/stream'], function(dart_sdk, utils, media_type, byte_stream, path, stream) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const src__media_type = media_type.src__media_type;
  const src__byte_stream = byte_stream.src__byte_stream;
  const path$ = path.path;
  const src__delegate__stream = stream.src__delegate__stream;
  const _root = Object.create(null);
  const src__multipart_file = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  const _stream = Symbol('_stream');
  const _isFinalized = Symbol('_isFinalized');
  src__multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = src__byte_stream.ByteStream.fromBytes(value);
      return new src__multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType = contentType == null ? new src__media_type.MediaType.new("text", "plain") : contentType;
      let encoding = src__utils.encodingForCharset(contentType.parameters[$_get]('charset'), convert.UTF8);
      contentType = contentType.change({parameters: new (IdentityMapOfString$String()).from(['charset', encoding.name])});
      return src__multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      return async.async(src__multipart_file.MultipartFile, function* fromPath() {
        let filename = opts && 'filename' in opts ? opts.filename : null;
        let contentType = opts && 'contentType' in opts ? opts.contentType : null;
        if (filename == null) filename = path$.basename(filePath);
        let file = io.File.new(filePath);
        let length = (yield file.length());
        let stream = new src__byte_stream.ByteStream.new(src__delegate__stream.DelegatingStream.typed(ListOfint(), file.openRead()));
        return new src__multipart_file.MultipartFile.new(field, stream, length, {filename: filename, contentType: contentType});
      });
    }
    finalize() {
      if (dart.test(this.isFinalized)) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (src__multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = src__utils.toByteStream(stream);
    this[contentType$] = contentType != null ? contentType : new src__media_type.MediaType.new("application", "octet-stream");
  }).prototype = src__multipart_file.MultipartFile.prototype;
  dart.addTypeTests(src__multipart_file.MultipartFile);
  const field$ = Symbol("MultipartFile.field");
  const length$ = Symbol("MultipartFile.length");
  const filename$ = Symbol("MultipartFile.filename");
  const contentType$ = Symbol("MultipartFile.contentType");
  dart.setMethodSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(src__multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(src__byte_stream.ByteStream, [])
  }));
  dart.setStaticMethodSignature(src__multipart_file.MultipartFile, () => ({fromPath: dart.fnType(async.Future$(src__multipart_file.MultipartFile), [core.String, core.String], {filename: core.String, contentType: src__media_type.MediaType})}));
  dart.setGetterSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(src__multipart_file.MultipartFile.__proto__),
    isFinalized: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(src__multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(core.String),
    contentType: dart.finalFieldType(src__media_type.MediaType),
    [_stream]: dart.finalFieldType(src__byte_stream.ByteStream),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/http/src/multipart_file.ddc", {
    "package:http/src/multipart_file.dart": src__multipart_file
  }, '{"version":3,"sourceRoot":"","sources":["multipart_file.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAmBe;;;;;;IAIH;;;;;;IAGG;;;;;;IAGG;;;;;;;YAMQ,mBAAY;;qBAmBJ,KAAY,EAAE,KAAe;UACjD;UAAoB;AAAc,AAC5C,UAAI,SAAS,AAAI,qCAAoB,CAAC,KAAK;AAC3C,YAAO,KAAI,qCAAa,CAAC,KAAK,EAAE,MAAM,EAAE,KAAK,SAAO,aACtC,QAAQ,eACL,WAAW;IAC9B;sBAQiC,KAAY,EAAE,KAAY;UAC/C;UAAoB;AAAc,AAC5C,iBAAW,GAAG,WAAW,IAAI,OAAO,IAAI,6BAAS,CAAC,QAAQ,WACtB,WAAW;AAC/C,UAAI,WAAW,6BAAkB,CAAC,WAAW,WAAW,QAAC,YAAY,YAAI;AACzE,iBAAW,GAAG,WAAW,OAAO,cAAa,yCAAC,WAAW,QAAQ,KAAK;AAEtE,YAAO,AAAI,4CAAuB,CAAC,KAAK,EAAE,QAAQ,OAAO,CAAC,KAAK,cACjD,QAAQ,eACL,WAAW;IAC9B;oBAWsC,KAAY,EAAE,QAAe;AACrB;YAAlC;YAAoB;AAC9B,YAAI,QAAQ,IAAI,MAAM,QAAQ,GAAG,AAAK,cAAQ,CAAC,QAAQ;AACvD,YAAI,OAAO,AAAI,WAAI,CAAC,QAAQ;AAC5B,YAAI,UAAS,MAAM,IAAI,OAAO;AAC9B,YAAI,SAAS,IAAI,+BAAU,CAAC,sCAAgB,MAAM,cAAC,IAAI,SAAS;AAChE,cAAO,KAAI,qCAAa,CAAC,KAAK,EAAE,MAAM,EAAE,MAAM,aAChC,QAAQ,eACL,WAAW;MAC9B;;;AAME,oBAAI,gBAAW,GAAE;AACf,mBAAM,IAAI,mBAAU,CAAC;;AAEvB,wBAAY,GAAG;AACf,YAAO,cAAO;IAChB;;oDAjEc,KAAU,EAAE,MAAwB,EAAE,MAAW;QACrD;QAAoB;IATzB,kBAAY,GAAG;IAQD,YAAK,GAAL,KAAK;IAAiC,aAAM,GAAN,MAAM;IACrD,eAAQ,GAAR,QAAQ;IACT,aAAO,GAAG,uBAAY,CAAC,MAAM;IAC7B,kBAAW,GAAG,WAAW,IAAI,OAAO,WAAW,GAChD,IAAI,6BAAS,CAAC,eAAe;EAAe","file":"multipart_file.ddc.js"}');
  // Exports:
  return {
    src__multipart_file: src__multipart_file
  };
});

//# sourceMappingURL=multipart_file.ddc.js.map
