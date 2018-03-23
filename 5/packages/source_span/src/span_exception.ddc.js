define(['dart_sdk', 'packages/source_span/src/location'], function(dart_sdk, location) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__span = location.src__span;
  const _root = Object.create(null);
  const src__span_exception = Object.create(_root);
  const $toString = dartx.toString;
  const _message = Symbol('_message');
  const _span = Symbol('_span');
  src__span_exception.SourceSpanException = class SourceSpanException extends core.Object {
    get message() {
      return this[_message];
    }
    get span() {
      return this[_span];
    }
    toString(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (this.span == null) return this.message;
      return "Error on " + dart.notNull(this.span.message(this.message, {color: color}));
    }
  };
  (src__span_exception.SourceSpanException.new = function(message, span) {
    this[_message] = message;
    this[_span] = span;
  }).prototype = src__span_exception.SourceSpanException.prototype;
  dart.addTypeTests(src__span_exception.SourceSpanException);
  src__span_exception.SourceSpanException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getMethods(src__span_exception.SourceSpanException.__proto__),
    toString: dart.fnType(core.String, [], {color: dart.dynamic}),
    [$toString]: dart.fnType(core.String, [], {color: dart.dynamic})
  }));
  dart.setGetterSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getGetters(src__span_exception.SourceSpanException.__proto__),
    message: dart.fnType(core.String, []),
    span: dart.fnType(src__span.SourceSpan, [])
  }));
  dart.setFieldSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getFields(src__span_exception.SourceSpanException.__proto__),
    [_message]: dart.finalFieldType(core.String),
    [_span]: dart.finalFieldType(src__span.SourceSpan)
  }));
  dart.defineExtensionMethods(src__span_exception.SourceSpanException, ['toString']);
  const _source = Symbol('_source');
  src__span_exception.SourceSpanFormatException = class SourceSpanFormatException extends src__span_exception.SourceSpanException {
    get source() {
      return this[_source];
    }
    get offset() {
      return this.span == null ? null : this.span.start.offset;
    }
  };
  (src__span_exception.SourceSpanFormatException.new = function(message, span, source) {
    if (source === void 0) source = null;
    this[_source] = source;
    src__span_exception.SourceSpanFormatException.__proto__.new.call(this, message, span);
  }).prototype = src__span_exception.SourceSpanFormatException.prototype;
  dart.addTypeTests(src__span_exception.SourceSpanFormatException);
  src__span_exception.SourceSpanFormatException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(src__span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getGetters(src__span_exception.SourceSpanFormatException.__proto__),
    source: dart.fnType(dart.dynamic, []),
    offset: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getFields(src__span_exception.SourceSpanFormatException.__proto__),
    [_source]: dart.finalFieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/source_span/src/span_exception.ddc", {
    "package:source_span/src/span_exception.dart": src__span_exception
  }, '{"version":3,"sourceRoot":"","sources":["span_exception.dart"],"names":[],"mappings":";;;;;;;;;;;;;YAUwB,eAAQ;;;YAOP,YAAK;;;UAYX;AACf,UAAI,SAAI,IAAI,MAAM,MAAO,aAAO;AAChC,YAAO,AAAY,4BAAE,SAAI,QAAQ,CAAC,YAAO,UAAS,KAAK;IACzD;;0DAZyB,OAAQ,EAAO,IAAK;IAApB,cAAQ,GAAR,OAAQ;IAAO,WAAK,GAAL,IAAK;EAAC;;;;;;;;;;;;;;;;;;;;;;YAmBxB,cAAO;;;YAGX,UAAI,IAAI,OAAO,OAAO,SAAI,MAAM,OAAO;;;gEAE/B,OAAc,EAAE,IAAe,EAAQ,MAAO;QAAP,MAAO,aAAP,MAAO;IAAP,aAAO,GAAP,MAAO;AAClE,2EAAM,OAAO,EAAE,IAAI;EAAC","file":"span_exception.ddc.js"}');
  // Exports:
  return {
    src__span_exception: src__span_exception
  };
});

//# sourceMappingURL=span_exception.ddc.js.map
