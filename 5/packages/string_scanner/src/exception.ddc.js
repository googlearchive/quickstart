define(['dart_sdk', 'packages/source_span/src/span_exception'], function(dart_sdk, span_exception) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__span_exception = span_exception.src__span_exception;
  const _root = Object.create(null);
  const src__exception = Object.create(_root);
  src__exception.StringScannerException = class StringScannerException extends src__span_exception.SourceSpanFormatException {
    get source() {
      return core.String._check(super.source);
    }
    get sourceUrl() {
      return this.span.sourceUrl;
    }
  };
  (src__exception.StringScannerException.new = function(message, span, source) {
    src__exception.StringScannerException.__proto__.new.call(this, message, span, source);
  }).prototype = src__exception.StringScannerException.prototype;
  dart.addTypeTests(src__exception.StringScannerException);
  dart.setGetterSignature(src__exception.StringScannerException, () => ({
    __proto__: dart.getGetters(src__exception.StringScannerException.__proto__),
    source: dart.fnType(core.String, []),
    sourceUrl: dart.fnType(core.Uri, [])
  }));
  dart.trackLibraries("packages/string_scanner/src/exception.ddc", {
    "package:string_scanner/src/exception.dart": src__exception
  }, '{"version":3,"sourceRoot":"","sources":["exception.dart"],"names":[],"mappings":";;;;;;;;;;gCAQuB,YAAY;;;YAKZ,UAAI,UAAU;;;wDAEZ,OAAc,EAAE,IAAe,EAAE,MAAa;AAC/D,mEAAM,OAAO,EAAE,IAAI,EAAE,MAAM;EAAC","file":"exception.ddc.js"}');
  // Exports:
  return {
    src__exception: src__exception
  };
});

//# sourceMappingURL=exception.ddc.js.map
