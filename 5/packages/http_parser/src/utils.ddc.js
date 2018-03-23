define(['dart_sdk', 'packages/source_span/src/span_exception'], function(dart_sdk, span_exception) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__span_exception = span_exception.src__span_exception;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  let StringAndStringAndFnToT = () => (StringAndStringAndFnToT = dart.constFn(dart.gFnType(T => [T, [core.String, core.String, dart.fnType(T, [])]])))();
  src__utils.wrapFormatException = function(T, name, value, body) {
    try {
      return body();
    } catch (e) {
      if (src__span_exception.SourceSpanFormatException.is(e)) {
        let error = e;
        dart.throw(new src__span_exception.SourceSpanFormatException.new(dart.str`Invalid ${name}: ${error.message}`, error.span, error.source));
      } else if (core.FormatException.is(e)) {
        let error = e;
        dart.throw(new core.FormatException.new(dart.str`Invalid ${name} "${value}": ${error.message}`, error.source, error.offset));
      } else
        throw e;
    }
  };
  dart.fn(src__utils.wrapFormatException, StringAndStringAndFnToT());
  dart.trackLibraries("packages/http_parser/src/utils.ddc", {
    "package:http_parser/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;+CAUkC,IAAW,EAAE,KAAY,EAAK,IAAU;AACxE,QAAI;AACF,YAAO,KAAI;;AACX;YAAoC;AAAO,AAC3C,mBAAM,IAAI,iDAAyB,CAC/B,mBAAU,IAAI,KAAI,KAAK,QAAQ,IAAI,KAAK,KAAK,EAAE,KAAK,OAAO;YAC/D;YAA0B;AAAO,AACjC,mBAAM,IAAI,wBAAe,CACrB,mBAAU,IAAI,KAAG,KAAK,MAAK,KAAK,QAAQ,IACxC,KAAK,OAAO,EACZ,KAAK,OAAO;;;;EAEpB","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
