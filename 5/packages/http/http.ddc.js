define(['dart_sdk', 'packages/http/src/base_client'], function(dart_sdk, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__response = base_client.src__response;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const http = Object.create(_root);
  let FutureOfResponse = () => (FutureOfResponse = dart.constFn(async.Future$(src__response.Response)))();
  let ClientToFutureOfResponse = () => (ClientToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [src__client.Client])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let dynamic__ToFutureOfResponse = () => (dynamic__ToFutureOfResponse = dart.constFn(dart.fnType(FutureOfResponse(), [dart.dynamic], {headers: MapOfString$String()})))();
  let dynamic__ToFutureOfResponse$ = () => (dynamic__ToFutureOfResponse$ = dart.constFn(dart.fnType(FutureOfResponse(), [dart.dynamic], {headers: MapOfString$String(), body: dart.dynamic, encoding: convert.Encoding})))();
  let FutureOfString = () => (FutureOfString = dart.constFn(async.Future$(core.String)))();
  let ClientToFutureOfString = () => (ClientToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [src__client.Client])))();
  let dynamic__ToFutureOfString = () => (dynamic__ToFutureOfString = dart.constFn(dart.fnType(FutureOfString(), [dart.dynamic], {headers: MapOfString$String()})))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let ClientToFutureOfUint8List = () => (ClientToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [src__client.Client])))();
  let dynamic__ToFutureOfUint8List = () => (dynamic__ToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [dart.dynamic], {headers: MapOfString$String()})))();
  let FnToFutureOfT = () => (FnToFutureOfT = dart.constFn(dart.gFnType(T => [async.Future$(T), [dart.fnType(async.Future$(T), [src__client.Client])]])))();
  http.head = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.head(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  dart.fn(http.head, dynamic__ToFutureOfResponse());
  http.get = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.get(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  dart.fn(http.get, dynamic__ToFutureOfResponse());
  http.post = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  dart.fn(http.post, dynamic__ToFutureOfResponse$());
  http.put = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  dart.fn(http.put, dynamic__ToFutureOfResponse$());
  http.patch = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(src__response.Response, dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), ClientToFutureOfResponse()));
  };
  dart.fn(http.patch, dynamic__ToFutureOfResponse$());
  http.delete = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(src__response.Response, dart.fn(client => client.delete(url, {headers: headers}), ClientToFutureOfResponse()));
  };
  dart.fn(http.delete, dynamic__ToFutureOfResponse());
  http.read = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(core.String, dart.fn(client => client.read(url, {headers: headers}), ClientToFutureOfString()));
  };
  dart.fn(http.read, dynamic__ToFutureOfString());
  http.readBytes = function(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(typed_data.Uint8List, dart.fn(client => client.readBytes(url, {headers: headers}), ClientToFutureOfUint8List()));
  };
  dart.fn(http.readBytes, dynamic__ToFutureOfUint8List());
  http._withClient = function(T, fn) {
    return async.async(T, function* _withClient() {
      let client = src__client.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  dart.fn(http._withClient, FnToFutureOfT());
  dart.trackLibraries("packages/http/http.ddc", {
    "package:http/http.dart": http
  }, '{"version":3,"sourceRoot":"","sources":["http.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;uBAkCsB,GAAG;QAAuB;UAC9C,iBAAW,yBAAC,QAAC,MAAM,IAAK,MAAM,KAAK,CAAC,GAAG,YAAW,OAAO;EAAE;;sBAUxC,GAAG;QAAuB;UAC7C,iBAAW,yBAAC,QAAC,MAAM,IAAK,MAAM,IAAI,CAAC,GAAG,YAAW,OAAO;EAAE;;uBAqBtC,GAAG;QAAuB;QAAS;QAC5C;UACX,iBAAW,yBAAC,QAAC,MAAM,IAAK,MAAM,KAAK,CAAC,GAAG,YAC1B,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;;sBAqBnC,GAAG;QAAuB;QAAS;QAC3C;UACX,iBAAW,yBAAC,QAAC,MAAM,IAAK,MAAM,IAAI,CAAC,GAAG,YACzB,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;;wBAqBjC,GAAG;QAAuB;QAAS;QAC7C;UACX,iBAAW,yBAAC,QAAC,MAAM,IAAK,MAAM,MAAM,CAAC,GAAG,YAC3B,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;;yBAUhC,GAAG;QAAuB;UAChD,iBAAW,yBAAC,QAAC,MAAM,IAAK,MAAM,OAAO,CAAC,GAAG,YAAW,OAAO;EAAE;;uBAe3C,GAAG;QAAuB;UAC5C,iBAAW,cAAC,QAAC,MAAM,IAAK,MAAM,KAAK,CAAC,GAAG,YAAW,OAAO;EAAE;;4BAejC,GAAG;QAAuB;UACpD,iBAAW,uBAAC,QAAC,MAAM,IAAK,MAAM,UAAU,CAAC,GAAG,YAAW,OAAO;EAAE;;iCAEzC,EAA2B;AAAE;AACpD,UAAI,SAAS,AAAI,sBAAM;AACvB,UAAI;AACF,cAAO,OAAM,EAAE,CAAC,MAAM;gBACd;AACR,cAAM,MAAM;;IAEhB","file":"http.ddc.js"}');
  // Exports:
  return {
    http: http
  };
});

//# sourceMappingURL=http.ddc.js.map
