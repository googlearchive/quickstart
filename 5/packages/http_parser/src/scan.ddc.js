define(['dart_sdk', 'packages/string_scanner/src/string_scanner'], function(dart_sdk, string_scanner) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__string_scanner = string_scanner.src__string_scanner;
  const _root = Object.create(null);
  const src__scan = Object.create(_root);
  const $add = dartx.add;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $substring = dartx.substring;
  let StringScannerAndFnToListOfT = () => (StringScannerAndFnToListOfT = dart.constFn(dart.gFnType(T => [core.List$(T), [src__string_scanner.StringScanner, dart.fnType(T, [])]])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let StringScanner__ToString = () => (StringScanner__ToString = dart.constFn(dart.fnType(core.String, [src__string_scanner.StringScanner], {name: core.String})))();
  dart.defineLazy(src__scan, {
    /*src__scan.token*/get token() {
      return core.RegExp.new('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+');
    },
    /*src__scan._lws*/get _lws() {
      return core.RegExp.new("(?:\\r\\n)?[ \\t]+");
    },
    /*src__scan._quotedString*/get _quotedString() {
      return core.RegExp.new('"(?:[^"\\x00-\\x1F\\x7F]|\\\\.)*"');
    },
    /*src__scan._quotedPair*/get _quotedPair() {
      return core.RegExp.new('\\\\(.)');
    },
    /*src__scan.nonToken*/get nonToken() {
      return core.RegExp.new('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]');
    },
    /*src__scan.whitespace*/get whitespace() {
      return core.RegExp.new(dart.str`(?:${src__scan._lws.pattern})*`);
    }
  });
  src__scan.parseList = function(T, scanner, parseElement) {
    let result = _interceptors.JSArray$(T).of([]);
    while (dart.test(scanner.scan(","))) {
      scanner.scan(src__scan.whitespace);
    }
    result[$add](parseElement());
    scanner.scan(src__scan.whitespace);
    while (dart.test(scanner.scan(","))) {
      scanner.scan(src__scan.whitespace);
      if (dart.test(scanner.matches(",")) || dart.test(scanner.isDone)) continue;
      result[$add](parseElement());
      scanner.scan(src__scan.whitespace);
    }
    return result;
  };
  dart.fn(src__scan.parseList, StringScannerAndFnToListOfT());
  src__scan.expectQuotedString = function(scanner, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    if (name == null) name = "quoted string";
    scanner.expect(src__scan._quotedString, {name: name});
    let string = scanner.lastMatch._get(0);
    return string[$substring](1, string.length - 1)[$replaceAllMapped](src__scan._quotedPair, dart.fn(match => match._get(1), MatchToString()));
  };
  dart.fn(src__scan.expectQuotedString, StringScanner__ToString());
  dart.trackLibraries("packages/http_parser/src/scan.ddc", {
    "package:http_parser/src/scan.dart": src__scan
  }, '{"version":3,"sourceRoot":"","sources":["scan.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAcM,eAAK;YAAG,AAAI,gBAAM,CAAC;;MAGnB,cAAI;YAAG,AAAI,gBAAM,CAAC;;MAGlB,uBAAa;YAAG,AAAI,gBAAM,CAAC;;MAG3B,qBAAW;YAAG,AAAI,gBAAM,CAAC;;MAGzB,kBAAQ;YAAG,AAAI,gBAAM,CAAC;;MAGtB,oBAAU;YAAG,AAAI,gBAAM,CAAC,cAAM,cAAI,QAAQ;;;oCAUnB,OAAqB,EAAK,YAAkB;AACvE,QAAI,SAAW;AAGf,qBAAO,OAAO,KAAK,CAAC,OAAM;AACxB,aAAO,KAAK,CAAC,oBAAU;;AAGzB,UAAM,MAAI,CAAC,YAAY;AACvB,WAAO,KAAK,CAAC,oBAAU;AAEvB,qBAAO,OAAO,KAAK,CAAC,OAAM;AACxB,aAAO,KAAK,CAAC,oBAAU;AAGvB,oBAAI,OAAO,QAAQ,CAAC,mBAAQ,OAAO,OAAO,GAAE;AAE5C,YAAM,MAAI,CAAC,YAAY;AACvB,aAAO,KAAK,CAAC,oBAAU;;AAGzB,UAAO,OAAM;EACf;;0CAM0B,OAAqB;QAAU;AACvD,QAAI,IAAI,IAAI,MAAM,IAAI,GAAG;AACzB,WAAO,OAAO,CAAC,uBAAa,SAAQ,IAAI;AACxC,QAAI,SAAS,OAAO,UAAU,MAAC;AAC/B,UAAO,OAAM,YACC,CAAC,GAAG,AAAc,MAAR,OAAO,GAAG,qBACb,CAAC,qBAAW,EAAE,QAAC,KAAK,IAAK,KAAK,MAAC;EACtD","file":"scan.ddc.js"}');
  // Exports:
  return {
    src__scan: src__scan
  };
});

//# sourceMappingURL=scan.ddc.js.map
