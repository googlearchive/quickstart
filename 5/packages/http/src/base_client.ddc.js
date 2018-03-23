define(['dart_sdk', 'packages/async/src/delegate/stream_consumer', 'packages/http/src/exception', 'packages/async/src/delegate/stream', 'packages/collection/src/empty_unmodifiable_set', 'packages/http/src/utils', 'packages/http_parser/src/media_type', 'packages/http/src/byte_stream'], function(dart_sdk, stream_consumer, exception, stream, empty_unmodifiable_set, utils, media_type, byte_stream) {
  'use strict';
  const core = dart_sdk.core;
  const _http = dart_sdk._http;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__delegate__stream_consumer = stream_consumer.src__delegate__stream_consumer;
  const src__exception = exception.src__exception;
  const src__delegate__stream = stream.src__delegate__stream;
  const src__wrappers = empty_unmodifiable_set.src__wrappers;
  const src__utils = utils.src__utils;
  const src__media_type = media_type.src__media_type;
  const src__byte_stream = byte_stream.src__byte_stream;
  const _root = Object.create(null);
  const src__io_client = Object.create(_root);
  const src__request = Object.create(_root);
  const src__base_response = Object.create(_root);
  const src__streamed_response = Object.create(_root);
  const src__base_client = Object.create(_root);
  const src__client = Object.create(_root);
  const src__base_request = Object.create(_root);
  const src__response = Object.create(_root);
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $addAll = dartx.addAll;
  const $length = dartx.length;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $toLowerCase = dartx.toLowerCase;
  const $hashCode = dartx.hashCode;
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let dynamicTobottom = () => (dynamicTobottom = dart.constFn(dart.fnType(dart.bottom, [dart.dynamic])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let ResponseToString = () => (ResponseToString = dart.constFn(dart.fnType(core.String, [src__response.Response])))();
  let ResponseToUint8List = () => (ResponseToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [src__response.Response])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let LinkedHashMapOfString$String = () => (LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))();
  let Uint8ListToResponse = () => (Uint8ListToResponse = dart.constFn(dart.fnType(src__response.Response, [typed_data.Uint8List])))();
  let MapOfString$StringToEncoding = () => (MapOfString$StringToEncoding = dart.constFn(dart.fnType(convert.Encoding, [MapOfString$String()])))();
  let MapOfString$StringToMediaType = () => (MapOfString$StringToMediaType = dart.constFn(dart.fnType(src__media_type.MediaType, [MapOfString$String()])))();
  const _inner = Symbol('_inner');
  const _sendUnstreamed = Symbol('_sendUnstreamed');
  const _checkResponseSuccess = Symbol('_checkResponseSuccess');
  src__base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("DELETE", url, headers);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this.get(url, {headers: headers}).then(core.String, dart.fn(response => {
        this[_checkResponseSuccess](url, response);
        return response.body;
      }, ResponseToString()));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this.get(url, {headers: headers}).then(typed_data.Uint8List, dart.fn(response => {
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }, ResponseToUint8List()));
    }
    [_sendUnstreamed](method, url, headers, body, encoding) {
      return async.async(src__response.Response, (function* _sendUnstreamed() {
        if (body === void 0) body = null;
        if (encoding === void 0) encoding = null;
        if (typeof url == 'string') url = core.Uri.parse(core.String._check(url));
        let request = new src__request.Request.new(method, core.Uri._check(url));
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (typeof body == 'string') {
            request.body = body;
          } else if (core.List.is(body)) {
            request.bodyBytes = src__wrappers.DelegatingList.typed(core.int, body);
          } else if (core.Map.is(body)) {
            request.bodyFields = src__wrappers.DelegatingMap.typed(core.String, core.String, body);
          } else {
            dart.throw(new core.ArgumentError.new(dart.str`Invalid request body "${body}".`));
          }
        }
        return src__response.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (dart.notNull(response.statusCode) < 400) return;
      let message = dart.str`Request to ${url} failed with status ${response.statusCode}`;
      if (response.reasonPhrase != null) {
        message = dart.str`${message}: ${response.reasonPhrase}`;
      }
      if (typeof url == 'string') url = core.Uri.parse(core.String._check(url));
      dart.throw(new src__exception.ClientException.new(dart.str`${message}.`, core.Uri._check(url)));
    }
    close() {}
  };
  (src__base_client.BaseClient.new = function() {
  }).prototype = src__base_client.BaseClient.prototype;
  dart.addTypeTests(src__base_client.BaseClient);
  src__base_client.BaseClient[dart.implements] = () => [src__client.Client];
  dart.setMethodSignature(src__base_client.BaseClient, () => ({
    __proto__: dart.getMethods(src__base_client.BaseClient.__proto__),
    head: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: MapOfString$String()}),
    get: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: MapOfString$String()}),
    post: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: MapOfString$String(), body: dart.dynamic, encoding: convert.Encoding}),
    put: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: MapOfString$String(), body: dart.dynamic, encoding: convert.Encoding}),
    patch: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: MapOfString$String(), body: dart.dynamic, encoding: convert.Encoding}),
    delete: dart.fnType(async.Future$(src__response.Response), [dart.dynamic], {headers: MapOfString$String()}),
    read: dart.fnType(async.Future$(core.String), [dart.dynamic], {headers: MapOfString$String()}),
    readBytes: dart.fnType(async.Future$(typed_data.Uint8List), [dart.dynamic], {headers: MapOfString$String()}),
    [_sendUnstreamed]: dart.fnType(async.Future$(src__response.Response), [core.String, dart.dynamic, MapOfString$String()], [dart.dynamic, convert.Encoding]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [dart.dynamic, src__response.Response]),
    close: dart.fnType(dart.void, [])
  }));
  src__io_client.IOClient = class IOClient extends src__base_client.BaseClient {
    send(request) {
      return async.async(src__streamed_response.StreamedResponse, (function* send() {
        let stream = request.finalize();
        try {
          let ioRequest = (yield this[_inner].openUrl(request.method, request.url));
          ioRequest.followRedirects = request.followRedirects;
          ioRequest.maxRedirects = request.maxRedirects;
          ioRequest.contentLength = request.contentLength == null ? -1 : request.contentLength;
          ioRequest.persistentConnection = request.persistentConnection;
          request.headers[$forEach](dart.fn((name, value) => {
            ioRequest.headers.set(name, value);
          }, StringAndStringToNull()));
          let response = (yield stream.pipe(src__delegate__stream_consumer.DelegatingStreamConsumer.typed(ListOfint(), ioRequest)));
          let headers = new (IdentityMapOfString$String()).new();
          dart.dsend(dart.dload(response, 'headers'), 'forEach', dart.fn((key, values) => {
            headers[$_set](core.String._check(key), core.String._check(dart.dsend(values, 'join', ',')));
          }, dynamicAnddynamicToNull()));
          return new src__streamed_response.StreamedResponse.new(src__delegate__stream.DelegatingStream.typed(ListOfint(), async.Stream._check(response)).handleError(dart.fn(error => dart.throw(new src__exception.ClientException.new(core.String._check(dart.dload(error, 'message')), core.Uri._check(dart.dload(error, 'uri')))), dynamicTobottom()), {test: dart.fn(error => _http.HttpException.is(error), dynamicTobool())}), core.int._check(dart.dload(response, 'statusCode')), {contentLength: core.int._check(dart.equals(dart.dload(response, 'contentLength'), -1) ? null : dart.dload(response, 'contentLength')), request: request, headers: headers, isRedirect: core.bool._check(dart.dload(response, 'isRedirect')), persistentConnection: core.bool._check(dart.dload(response, 'persistentConnection')), reasonPhrase: core.String._check(dart.dload(response, 'reasonPhrase'))});
        } catch (error) {
          if (_http.HttpException.is(error)) {
            dart.throw(new src__exception.ClientException.new(error.message, error.uri));
          } else
            throw error;
        }
      }).bind(this));
    }
    close() {
      if (this[_inner] != null) this[_inner].close({force: true});
      this[_inner] = null;
    }
  };
  (src__io_client.IOClient.new = function(inner) {
    if (inner === void 0) inner = null;
    let l = inner;
    this[_inner] = l != null ? l : _http.HttpClient.new();
  }).prototype = src__io_client.IOClient.prototype;
  dart.addTypeTests(src__io_client.IOClient);
  dart.setMethodSignature(src__io_client.IOClient, () => ({
    __proto__: dart.getMethods(src__io_client.IOClient.__proto__),
    send: dart.fnType(async.Future$(src__streamed_response.StreamedResponse), [src__base_request.BaseRequest])
  }));
  dart.setFieldSignature(src__io_client.IOClient, () => ({
    __proto__: dart.getFields(src__io_client.IOClient.__proto__),
    [_inner]: dart.fieldType(_http.HttpClient)
  }));
  const _defaultEncoding = Symbol('_defaultEncoding');
  const _bodyBytes = Symbol('_bodyBytes');
  const _contentType = Symbol('_contentType');
  const _checkFinalized = Symbol('_checkFinalized');
  const _contentLength = Symbol('_contentLength');
  const _persistentConnection = Symbol('_persistentConnection');
  const _followRedirects = Symbol('_followRedirects');
  const _maxRedirects = Symbol('_maxRedirects');
  const _finalized = Symbol('_finalized');
  const _checkFinalized$ = Symbol('_checkFinalized');
  src__base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new(dart.str`Invalid content length ${value}.`));
      }
      this[_checkFinalized$]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized$]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized$]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized$]();
      this[_maxRedirects] = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get finalized() {
      return this[_finalized];
    }
    finalize() {
      if (dart.test(this.finalized)) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return null;
    }
    send() {
      return async.async(src__streamed_response.StreamedResponse, (function* send() {
        let client = src__client.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = src__utils.onDone(ListOfint(), response.stream, dart.bind(client, 'close'));
          return new src__streamed_response.StreamedResponse.new(new src__byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (_) {
          client.close();
          dart.rethrow(_);
        }
      }).bind(this));
    }
    [_checkFinalized$]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return dart.str`${this.method} ${this.url}`;
    }
  };
  (src__base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[method$] = method;
    this[url$] = url;
    this[headers] = LinkedHashMapOfString$String().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), StringAndStringTobool()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], StringToint())});
  }).prototype = src__base_request.BaseRequest.prototype;
  dart.addTypeTests(src__base_request.BaseRequest);
  const method$ = Symbol("BaseRequest.method");
  const url$ = Symbol("BaseRequest.url");
  const headers = Symbol("BaseRequest.headers");
  dart.setMethodSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(src__base_request.BaseRequest.__proto__),
    finalize: dart.fnType(src__byte_stream.ByteStream, []),
    send: dart.fnType(async.Future$(src__streamed_response.StreamedResponse), []),
    [_checkFinalized$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(src__base_request.BaseRequest.__proto__),
    contentLength: dart.fnType(core.int, []),
    persistentConnection: dart.fnType(core.bool, []),
    followRedirects: dart.fnType(core.bool, []),
    maxRedirects: dart.fnType(core.int, []),
    finalized: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(src__base_request.BaseRequest.__proto__),
    contentLength: dart.fnType(dart.void, [core.int]),
    persistentConnection: dart.fnType(dart.void, [core.bool]),
    followRedirects: dart.fnType(dart.void, [core.bool]),
    maxRedirects: dart.fnType(dart.void, [core.int])
  }));
  dart.setFieldSignature(src__base_request.BaseRequest, () => ({
    __proto__: dart.getFields(src__base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.Uri),
    [_contentLength]: dart.fieldType(core.int),
    [_persistentConnection]: dart.fieldType(core.bool),
    [_followRedirects]: dart.fieldType(core.bool),
    [_maxRedirects]: dart.fieldType(core.int),
    headers: dart.finalFieldType(MapOfString$String()),
    [_finalized]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__base_request.BaseRequest, ['toString']);
  src__request.Request = class Request extends src__base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.test(this[_contentType].parameters[$containsKey]('charset'))) {
        return this[_defaultEncoding];
      }
      return src__utils.requiredEncodingForCharset(this[_contentType].parameters[$_get]('charset'));
    }
    set encoding(value) {
      this[_checkFinalized]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(['charset', value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized]();
      this[_bodyBytes] = src__utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new src__media_type.MediaType.new("text", "plain", new (IdentityMapOfString$String()).from(['charset', this.encoding.name]));
      } else if (!dart.test(contentType.parameters[$containsKey]('charset'))) {
        this[_contentType] = contentType.change({parameters: new (IdentityMapOfString$String()).from(['charset', this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new('Cannot access the body fields of a Request without ' + 'content-type "application/x-www-form-urlencoded".'));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new src__media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new('Cannot set the body fields of a Request with ' + dart.str`content-type "${contentType.mimeType}".`));
      }
      this.body = src__utils.mapToQuery(fields, {encoding: this.encoding});
    }
    finalize() {
      super.finalize();
      return src__byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]('content-type');
      if (contentType == null) return null;
      return src__media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      this.headers[$_set]('content-type', dart.toString(value));
    }
    [_checkFinalized]() {
      if (!dart.test(this.finalized)) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (src__request.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.UTF8;
    this[_bodyBytes] = typed_data.Uint8List.new(0);
    src__request.Request.__proto__.new.call(this, method, url);
  }).prototype = src__request.Request.prototype;
  dart.addTypeTests(src__request.Request);
  dart.setMethodSignature(src__request.Request, () => ({
    __proto__: dart.getMethods(src__request.Request.__proto__),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__request.Request, () => ({
    __proto__: dart.getGetters(src__request.Request.__proto__),
    encoding: dart.fnType(convert.Encoding, []),
    bodyBytes: dart.fnType(typed_data.Uint8List, []),
    body: dart.fnType(core.String, []),
    bodyFields: dart.fnType(core.Map$(core.String, core.String), []),
    [_contentType]: dart.fnType(src__media_type.MediaType, [])
  }));
  dart.setSetterSignature(src__request.Request, () => ({
    __proto__: dart.getSetters(src__request.Request.__proto__),
    encoding: dart.fnType(dart.void, [convert.Encoding]),
    bodyBytes: dart.fnType(dart.void, [ListOfint()]),
    body: dart.fnType(dart.void, [core.String]),
    bodyFields: dart.fnType(dart.void, [MapOfString$String()]),
    [_contentType]: dart.fnType(dart.void, [src__media_type.MediaType])
  }));
  dart.setFieldSignature(src__request.Request, () => ({
    __proto__: dart.getFields(src__request.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(convert.Encoding),
    [_bodyBytes]: dart.fieldType(typed_data.Uint8List)
  }));
  let const$;
  src__base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (src__base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$ || (const$ = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (dart.notNull(this.statusCode) < 100) {
      dart.throw(new core.ArgumentError.new(dart.str`Invalid status code ${this.statusCode}.`));
    } else if (this.contentLength != null && dart.notNull(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new(dart.str`Invalid content length ${this.contentLength}.`));
    }
  }).prototype = src__base_response.BaseResponse.prototype;
  dart.addTypeTests(src__base_response.BaseResponse);
  const request$ = Symbol("BaseResponse.request");
  const statusCode$ = Symbol("BaseResponse.statusCode");
  const reasonPhrase$ = Symbol("BaseResponse.reasonPhrase");
  const contentLength$ = Symbol("BaseResponse.contentLength");
  const headers$ = Symbol("BaseResponse.headers");
  const isRedirect$ = Symbol("BaseResponse.isRedirect");
  const persistentConnection$ = Symbol("BaseResponse.persistentConnection");
  dart.setFieldSignature(src__base_response.BaseResponse, () => ({
    __proto__: dart.getFields(src__base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(src__base_request.BaseRequest),
    statusCode: dart.finalFieldType(core.int),
    reasonPhrase: dart.finalFieldType(core.String),
    contentLength: dart.finalFieldType(core.int),
    headers: dart.finalFieldType(MapOfString$String()),
    isRedirect: dart.finalFieldType(core.bool),
    persistentConnection: dart.finalFieldType(core.bool)
  }));
  let const$0;
  src__streamed_response.StreamedResponse = class StreamedResponse extends src__base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
  };
  (src__streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$0 || (const$0 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = src__utils.toByteStream(stream);
    src__streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = src__streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(src__streamed_response.StreamedResponse);
  const stream$ = Symbol("StreamedResponse.stream");
  dart.setFieldSignature(src__streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(src__streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(src__byte_stream.ByteStream)
  }));
  src__client.Client = class Client extends core.Object {
    static new() {
      return new src__io_client.IOClient.new();
    }
  };
  (src__client.Client[dart.mixinNew] = function() {
  }).prototype = src__client.Client.prototype;
  dart.addTypeTests(src__client.Client);
  let const$1;
  let const$2;
  src__response.Response = class Response extends src__base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return src__response._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static fromStream(response) {
      return response.stream.toBytes().then(src__response.Response, dart.fn(body => new src__response.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase}), Uint8ListToResponse()));
    }
  };
  (src__response.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$1 || (const$1 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    src__response.Response.bytes.call(this, src__response._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = src__response.Response.prototype;
  (src__response.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : const$2 || (const$2 = dart.constMap(core.String, core.String, []));
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = src__utils.toUint8List(bodyBytes);
    src__response.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = src__response.Response.prototype;
  dart.addTypeTests(src__response.Response);
  const bodyBytes$ = Symbol("Response.bodyBytes");
  dart.setStaticMethodSignature(src__response.Response, () => ({fromStream: dart.fnType(async.Future$(src__response.Response), [src__streamed_response.StreamedResponse])}));
  dart.setGetterSignature(src__response.Response, () => ({
    __proto__: dart.getGetters(src__response.Response.__proto__),
    body: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__response.Response, () => ({
    __proto__: dart.getFields(src__response.Response.__proto__),
    bodyBytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  src__response._encodingForHeaders = function(headers) {
    return src__utils.encodingForCharset(src__response._contentTypeForHeaders(headers).parameters[$_get]('charset'));
  };
  dart.fn(src__response._encodingForHeaders, MapOfString$StringToEncoding());
  src__response._contentTypeForHeaders = function(headers) {
    let contentType = headers[$_get]('content-type');
    if (contentType != null) return src__media_type.MediaType.parse(contentType);
    return new src__media_type.MediaType.new("application", "octet-stream");
  };
  dart.fn(src__response._contentTypeForHeaders, MapOfString$StringToMediaType());
  dart.trackLibraries("packages/http/src/base_client.ddc", {
    "package:http/src/io_client.dart": src__io_client,
    "package:http/src/request.dart": src__request,
    "package:http/src/base_response.dart": src__base_response,
    "package:http/src/streamed_response.dart": src__streamed_response,
    "package:http/src/base_client.dart": src__base_client,
    "package:http/src/client.dart": src__client,
    "package:http/src/base_request.dart": src__base_request,
    "package:http/src/response.dart": src__response
  }, '{"version":3,"sourceRoot":"","sources":["base_client.dart","io_client.dart","base_request.dart","request.dart","base_response.dart","streamed_response.dart","client.dart","response.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;SAyBwB,GAAG;UAAuB;YAC9C,sBAAe,CAAC,QAAQ,GAAG,EAAE,OAAO;IAAC;QAMlB,GAAG;UAAuB;YAC7C,sBAAe,CAAC,OAAO,GAAG,EAAE,OAAO;IAAC;SAoBhB,GAAG;UAAuB;UAAS;UAC5C;YACX,sBAAe,CAAC,QAAQ,GAAG,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;QAoBlC,GAAG;UAAuB;UAAS;UAC3C;YACX,sBAAe,CAAC,OAAO,GAAG,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;UAoB/B,GAAG;UAAuB;UAAS;UAC7C;YACX,sBAAe,CAAC,SAAS,GAAG,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;WAMhC,GAAG;UAAuB;YAChD,sBAAe,CAAC,UAAU,GAAG,EAAE,OAAO;IAAC;SAWrB,GAAG;UAAuB;AAC5C,YAAO,SAAG,CAAC,GAAG,YAAW,OAAO,OAAM,cAAC,QAAC,QAAQ;AAC9C,mCAAqB,CAAC,GAAG,EAAE,QAAQ;AACnC,cAAO,SAAQ,KAAK;;IAExB;cAW4B,GAAG;UAAuB;AACpD,YAAO,SAAG,CAAC,GAAG,YAAW,OAAO,OAAM,uBAAC,QAAC,QAAQ;AAC9C,mCAAqB,CAAC,GAAG,EAAE,QAAQ;AACnC,cAAO,SAAQ,UAAU;;IAE7B;sBAYiC,MAAa,EAAE,GAAG,EAC/C,OAA2B,EAAG,IAAI,EAAE,QAAiB;AAAG;6BAA1B;iCAAe;AAE/C,mBAAI,GAAG,cAAY,GAAG,GAAG,QAAG,MAAM,oBAAC,GAAG;AACtC,YAAI,UAAU,IAAI,wBAAO,CAAC,MAAM,kBAAE,GAAG;AAErC,YAAI,OAAO,IAAI,MAAM,OAAO,QAAQ,SAAO,CAAC,OAAO;AACnD,YAAI,QAAQ,IAAI,MAAM,OAAO,SAAS,GAAG,QAAQ;AACjD,YAAI,IAAI,IAAI,MAAM;AAChB,qBAAI,IAAI,cAAY;AAClB,mBAAO,KAAK,GAAG,IAAI;gBACd,kBAAI,IAAI,GAAU;AACvB,mBAAO,UAAU,GAAG,4BAAc,MAAM,WAAC,IAAI;gBACxC,iBAAI,IAAI,GAAS;AACtB,mBAAO,WAAW,GAAG,2BAAa,MAAM,2BAAC,IAAI;iBACxC;AACL,uBAAM,IAAI,sBAAa,CAAC,iCAAwB,IAAI;;;AAIxD,cAAO,uBAAQ,WAAW,CAAC,MAAM,SAAI,CAAC,OAAO;MAC/C;;4BAG2B,GAAG,EAAE,QAAiB;AAC/C,UAAwB,aAApB,QAAQ,WAAW,IAAG,KAAK;AAC/B,UAAI,UAAU,sBAAa,GAAG,uBAAsB,QAAQ,WAAW;AACvE,UAAI,QAAQ,aAAa,IAAI,MAAM;AACjC,eAAO,GAAG,WAAE,OAAO,KAAI,QAAQ,aAAa;;AAE9C,iBAAI,GAAG,cAAY,GAAG,GAAG,QAAG,MAAM,oBAAC,GAAG;AACtC,iBAAM,IAAI,kCAAe,CAAC,WAAE,OAAO,qBAAI,GAAG;IAC5C;aAKc;;;EAChB;;;;;;;;;;;;;;;;;;SCnKgC,OAAmB;AAAE;AACjD,YAAI,SAAS,OAAO,SAAS;AAE7B,YAAI;AACF,cAAI,aAAY,MAAM,YAAM,QAAQ,CAAC,OAAO,OAAO,EAAE,OAAO,IAAI;AAEhE,UAAA,AACI,AAAE,SADG,gBACY,GAAG,OAAO,gBAAgB;UAD/C,AAEI,AAAE,SAFG,aAES,GAAG,OAAO,aAAa;UAFzC,AAGI,AAAE,SAHG,cAGU,GAAG,OAAO,cAAc,IAAI,OACrC,CAAC,IACD,OAAO,cAAc;UAL/B,AAMI,AAAE,SANG,qBAMiB,GAAG,OAAO,qBAAqB;AACzD,iBAAO,QAAQ,UAAQ,CAAC,SAAC,IAAI,EAAE,KAAK;AAClC,qBAAS,QAAQ,IAAI,CAAC,IAAI,EAAE,KAAK;;AAGnC,cAAI,YAAW,MAAM,MAAM,KAAK,CAC5B,uDAAwB,MAAM,cAAC,SAAS;AAC5C,cAAI,UAAU;AACd,wCAAQ,yBAAiB,SAAC,GAAG,EAAE,MAAM;AACnC,mBAAO,2BAAC,GAAG,iCAAI,MAAM,UAAM;;AAG7B,gBAAO,KAAI,2CAAgB,CACvB,sCAAgB,MAAM,kCAAY,QAAQ,cAAa,CAAC,QAAC,KAAK,IAC1D,WAAM,IAAI,kCAAe,+BAAC,KAAK,0CAAU,KAAK,wCACxC,QAAC,KAAK,2BAAK,KAAK,kDAC1B,QAAQ,yEACO,QAAQ,oBAAkB,CAAC,KACpC,kBACA,QAAQ,8BACL,OAAO,WACP,OAAO,0CACJ,QAAQ,oEACE,QAAQ,wEAChB,QAAQ;iBACF;AAAxB,6CAA+B;AAC/B,uBAAM,IAAI,kCAAe,CAAC,KAAK,QAAQ,EAAE,KAAK,IAAI;;;;MAEtD;;;AAKE,UAAI,YAAM,IAAI,MAAM,YAAM,MAAM,SAAQ;AACxC,kBAAM,GAAG;IACX;;0CAlDU,KAAgB;0BAAL;YAAmB,KAAK;IAAd,YAAM,mBAAY,AAAI,oBAAU;EAAE;;;;;;;;;;;;;;;;;;;;;ICApD;;;;;;IAGH;;;;;;;YAMe,qBAAc;;sBAGrB,KAAS;AACzB,UAAI,KAAK,IAAI,QAAc,aAAN,KAAK,IAAG,GAAG;AAC9B,mBAAM,IAAI,sBAAa,CAAC,kCAAyB,KAAK;;AAExD,4BAAe;AACf,0BAAc,GAAG,KAAK;IACxB;;YAIiC,4BAAqB;;6BAG7B,KAAU;AACjC,4BAAe;AACf,iCAAqB,GAAG,KAAK;IAC/B;;YAI4B,uBAAgB;;wBAGxB,KAAU;AAC5B,4BAAe;AACf,4BAAgB,GAAG,KAAK;IAC1B;;YAKwB,oBAAa;;qBAGpB,KAAS;AACxB,4BAAe;AACf,yBAAa,GAAG,KAAK;IACvB;IAM0B;;;;;;;YAGJ,iBAAU;;;AAoB9B,oBAAI,cAAS,GAAE,WAAM,IAAI,mBAAU,CAAC;AACpC,sBAAU,GAAG;AACb,YAAO;IACT;;AAQgC;AAC9B,YAAI,SAAS,AAAI,sBAAM;AAEvB,YAAI;AACF,cAAI,YAAW,MAAM,MAAM,KAAK,CAAC;AACjC,cAAI,SAAS,iBAAM,cAAC,QAAQ,OAAO,YAAE,MAAM;AAC3C,gBAAO,KAAI,2CAAgB,CACvB,IAAI,+BAAU,CAAC,MAAM,GACrB,QAAQ,WAAW,kBACJ,QAAQ,cAAc,WAC5B,QAAQ,QAAQ,WAChB,QAAQ,QAAQ,cACb,QAAQ,WAAW,wBACT,QAAQ,qBAAqB,gBACrC,QAAQ,aAAa;iBAChC;AAAG,AACV,gBAAM,MAAM;AACZ,uBAFO,CAAC;;MAIZ;;;AAIE,qBAAK,cAAS,GAAE;AAChB,iBAAM,IAAI,mBAAU,CAAC;IACvB;;YAEqB,YAAE,WAAM,IAAE,QAAG;IAAC;;gDAtDvB,MAAW,EAAE,GAAQ;IApD7B,oBAAc;IAab,2BAAqB,GAAG;IAUxB,sBAAgB,GAAG;IAWpB,mBAAa,GAAG;IAef,gBAAU,GAAG;IAGD,aAAM,GAAN,MAAM;IAAO,UAAG,GAAH,GAAG;IAC7B,aAAO,GAAG,AAAI,kCAAa,UACjB,SAAC,IAAI,EAAE,IAAI,KAAK,IAAI,cAAY,OAAM,IAAI,cAAY,wCACpD,QAAC,GAAG,IAAK,GAAG,cAAY,aAAW;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;YCnE3B,eAAS,SAAO;;sBAEvB,KAAS;AACzB,iBAAM,IAAI,yBAAgB,CAAC,8CACvB;IACN;;AAqBE,UAAI,kBAAY,IAAI,mBACf,kBAAY,WAAW,cAAY,CAAC,aAAY;AACnD,cAAO,uBAAgB;;AAEzB,YAAO,sCAA0B,CAAC,kBAAY,WAAW,QAAC;IAC5D;iBAEa,KAAc;AACzB,2BAAe;AACf,4BAAgB,GAAG,KAAK;AACxB,UAAI,cAAc,kBAAY;AAC9B,UAAI,WAAW,IAAI,MAAM;AACzB,wBAAY,GAAG,WAAW,OAAO,cAAa,yCAAC,WAAW,KAAK,KAAK;IACtE;;YAO2B,iBAAU;;kBAGvB,KAAe;AAC3B,2BAAe;AACf,sBAAU,GAAG,sBAAW,CAAC,KAAK;IAChC;;YASmB,cAAQ,OAAO,CAAC,cAAS;IAAC;aAEpC,KAAY;AACnB,oBAAS,GAAG,aAAQ,OAAO,CAAC,KAAK;AACjC,UAAI,cAAc,kBAAY;AAC9B,UAAI,WAAW,IAAI,MAAM;AACvB,0BAAY,GAAG,IAAI,6BAAS,CAAC,QAAQ,SAAS,yCAAC,WAAW,aAAQ,KAAK;YAClE,gBAAK,WAAW,WAAW,cAAY,CAAC,aAAY;AACzD,0BAAY,GAAG,WAAW,OAAO,cAAa,yCAAC,WAAW,aAAQ,KAAK;;IAE3E;;AAiBE,UAAI,cAAc,kBAAY;AAC9B,UAAI,WAAW,IAAI,QACf,WAAW,SAAS,KAAI,qCAAqC;AAC/D,mBAAM,IAAI,mBAAU,CAAC,wDACjB;;AAGN,YAAO,SAAG,iBAAiB,CAAC,SAAI,aAAY,aAAQ;IACtD;mBAEe,MAA0B;AACvC,UAAI,cAAc,kBAAY;AAC9B,UAAI,WAAW,IAAI,MAAM;AACvB,0BAAY,GAAG,IAAI,6BAAS,CAAC,eAAe;YACvC,KAAI,WAAW,SAAS,KAAI,qCAAqC;AACtE,mBAAM,IAAI,mBAAU,CAAC,kDACjB,yBAAiB,WAAW,SAAS;;AAG3C,eAAS,GAAG,qBAAU,CAAC,MAAM,aAAY,aAAQ;IACnD;;AAWE,oBAAc;AACd,YAAO,AAAI,sCAAoB,CAAC,cAAS;IAC3C;;AAKE,UAAI,cAAc,YAAO,QAAC;AAC1B,UAAI,WAAW,IAAI,MAAM,MAAO;AAChC,YAAO,AAAI,gCAAe,CAAC,WAAW;IACxC;uBAEiB,KAAe;AAC9B,kBAAO,QAAC,8BAAkB,KAAK;IACjC;;AAIE,qBAAK,cAAS,GAAE;AAChB,iBAAM,IAAI,mBAAU,CAAC;IACvB;;uCA5BQ,MAAa,EAAE,GAAO;IAC1B,sBAAgB,GAAG,YAAI;IACvB,gBAAU,GAAG,AAAI,wBAAS,CAAC;AAC3B,kDAAM,MAAM,EAAE,GAAG;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IC1HJ;;;;;;IAGR;;;;;;IAGG;;;;;;IAKH;;;;;;IAMgB;;;;;;IAGf;;;;;;IAGA;;;;;;;kDAIP,UAAe;QACT;QACA;QACA,qDAAS;QACT,8DAAY;QACZ,4FAAsB;QACtB;IAND,iBAAU,GAAV,UAAU;IACT,oBAAa,GAAb,aAAa;IACb,cAAO,GAAP,OAAO;IACP,cAAO,GAAP,OAAO;IACP,iBAAU,GAAV,UAAU;IACV,2BAAoB,GAApB,oBAAoB;IACpB,mBAAY,GAAZ,YAAY;AACpB,QAAe,aAAX,eAAU,IAAG,KAAK;AACpB,iBAAM,IAAI,sBAAa,CAAC,+BAAsB,eAAU;UACnD,KAAI,kBAAa,IAAI,QAAsB,aAAd,kBAAa,IAAG,GAAG;AACrD,iBAAM,IAAI,sBAAa,CAAC,kCAAyB,kBAAa;;EAElE;;;;;;;;;;;;;;;;;;;;;ICnCiB;;;;;;;0DAKb,MAAwB,EACxB,UAAc;QACT;QACQ;QACQ,qDAAS;QACxB,8DAAY;QACZ,4FAAsB;QACpB;IACH,aAAM,GAAG,uBAAY,CAAC,MAAM;AACjC,qEACI,UAAU,kBACK,aAAa,WACnB,OAAO,WACP,OAAO,cACJ,UAAU,wBACA,oBAAoB,gBAC5B,YAAY;EAAC;;;;;;;;;ACRlB,YAAG,KAAI,2BAAQ;IAAE;;;;;;;;ICXlB;;;;;;;YAQG,kCAAmB,CAAC,YAAO,QAAQ,CAAC,cAAS;IAAC;sBAyC9B,QAAyB;AAC1D,YAAO,SAAQ,OAAO,QAAQ,OAAO,yBAAC,QAAC,IAAI,IAClC,IAAI,4BAAc,CACrB,IAAI,EACJ,QAAQ,WAAW,YACV,QAAQ,QAAQ,WAChB,QAAQ,QAAQ,cACb,QAAQ,WAAW,wBACT,QAAQ,qBAAqB,gBACrC,QAAQ,aAAa;IAE3C;;yCAhDI,IAAW,EACX,UAAc;QACD;QACQ,qDAAS;QACxB,8DAAY;QACZ,4FAAsB;QACpB;4CAEN,iCAAmB,CAAC,OAAO,QAAQ,CAAC,IAAI,GACxC,UAAU,YACD,OAAO,WACP,OAAO,cACJ,UAAU,wBACA,oBAAoB,gBAC5B,YAAY;EAAC;2CAI7B,SAAmB,EACnB,UAAc;QACD;QACQ,qDAAS;QACxB,8DAAY;QACZ,4FAAsB;QACpB;IACR,gBAAS,GAAG,sBAAW,CAAC,SAAS;AACjC,oDACE,UAAU,kBACK,SAAS,SAAO,WACtB,OAAO,WACP,OAAO,cACJ,UAAU,wBACA,oBAAoB,gBAC5B,YAAY;EAAC;;;;;;;;;;;;+CAqBN,OAA2B;UACtD,8BAAkB,CAAC,oCAAsB,CAAC,OAAO,YAAY,QAAC;EAAW;;kDAK1C,OAA2B;AAC1D,QAAI,cAAc,OAAO,QAAC;AAC1B,QAAI,WAAW,IAAI,MAAM,MAAO,AAAI,gCAAe,CAAC,WAAW;AAC/D,UAAO,KAAI,6BAAS,CAAC,eAAe;EACtC","file":"base_client.ddc.js"}');
  // Exports:
  return {
    src__io_client: src__io_client,
    src__request: src__request,
    src__base_response: src__base_response,
    src__streamed_response: src__streamed_response,
    src__base_client: src__base_client,
    src__client: src__client,
    src__base_request: src__base_request,
    src__response: src__response
  };
});

//# sourceMappingURL=base_client.ddc.js.map
