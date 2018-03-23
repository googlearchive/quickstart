define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__exception = Object.create(_root);
  src__exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this.message;
    }
  };
  (src__exception.ClientException.new = function(message, uri) {
    if (uri === void 0) uri = null;
    this[message$] = message;
    this[uri$] = uri;
  }).prototype = src__exception.ClientException.prototype;
  dart.addTypeTests(src__exception.ClientException);
  const message$ = Symbol("ClientException.message");
  const uri$ = Symbol("ClientException.uri");
  src__exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__exception.ClientException, () => ({
    __proto__: dart.getFields(src__exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(core.Uri)
  }));
  dart.defineExtensionMethods(src__exception.ClientException, ['toString']);
  dart.trackLibraries("packages/http/src/exception.ddc", {
    "package:http/src/exception.dart": src__exception
  }, '{"version":3,"sourceRoot":"","sources":["exception.dart"],"names":[],"mappings":";;;;;;;;IAMe;;;;;;IAGH;;;;;;;YAIW,aAAO;;;iDAFZ,OAAY,EAAG,GAAQ;wBAAH;IAAf,cAAO,GAAP,OAAO;IAAQ,UAAG,GAAH,GAAG;EAAE","file":"exception.ddc.js"}');
  // Exports:
  return {
    src__exception: src__exception
  };
});

//# sourceMappingURL=exception.ddc.js.map
