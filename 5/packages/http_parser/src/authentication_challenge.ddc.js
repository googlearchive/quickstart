define(['dart_sdk', 'packages/http_parser/src/case_insensitive_map', 'packages/http_parser/src/utils', 'packages/string_scanner/src/string_scanner', 'packages/http_parser/src/scan'], function(dart_sdk, case_insensitive_map, utils, string_scanner, scan) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__case_insensitive_map = case_insensitive_map.src__case_insensitive_map;
  const src__utils = utils.src__utils;
  const src__string_scanner = string_scanner.src__string_scanner;
  const src__scan = scan.src__scan;
  const _root = Object.create(null);
  const src__authentication_challenge = Object.create(_root);
  const $_set = dartx._set;
  const $toLowerCase = dartx.toLowerCase;
  const $contains = dartx.contains;
  let CaseInsensitiveMapOfString = () => (CaseInsensitiveMapOfString = dart.constFn(src__case_insensitive_map.CaseInsensitiveMap$(core.String)))();
  let UnmodifiableMapViewOfString$String = () => (UnmodifiableMapViewOfString$String = dart.constFn(collection.UnmodifiableMapView$(core.String, core.String)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToAuthenticationChallenge = () => (VoidToAuthenticationChallenge = dart.constFn(dart.fnType(src__authentication_challenge.AuthenticationChallenge, [])))();
  let ListOfAuthenticationChallenge = () => (ListOfAuthenticationChallenge = dart.constFn(core.List$(src__authentication_challenge.AuthenticationChallenge)))();
  let VoidToListOfAuthenticationChallenge = () => (VoidToListOfAuthenticationChallenge = dart.constFn(dart.fnType(ListOfAuthenticationChallenge(), [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  src__authentication_challenge.AuthenticationChallenge = class AuthenticationChallenge extends core.Object {
    get scheme() {
      return this[scheme$];
    }
    set scheme(value) {
      super.scheme = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    static parseHeader(header) {
      return src__utils.wrapFormatException(ListOfAuthenticationChallenge(), "authentication header", header, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(header);
        scanner.scan(src__scan.whitespace);
        let challenges = src__scan.parseList(src__authentication_challenge.AuthenticationChallenge, scanner, dart.fn(() => {
          let scheme = src__authentication_challenge.AuthenticationChallenge._scanScheme(scanner, {whitespaceName: '" " or "="'});
          let params = new (IdentityMapOfString$String()).new();
          while (dart.test(scanner.scan(","))) {
            scanner.scan(src__scan.whitespace);
          }
          src__authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params);
          let beforeComma = scanner.position;
          while (dart.test(scanner.scan(","))) {
            scanner.scan(src__scan.whitespace);
            if (dart.test(scanner.matches(",")) || dart.test(scanner.isDone)) continue;
            scanner.expect(src__scan.token, {name: "a token"});
            let name = scanner.lastMatch._get(0);
            scanner.scan(src__scan.whitespace);
            if (!dart.test(scanner.scan('='))) {
              scanner.position = beforeComma;
              break;
            }
            scanner.scan(src__scan.whitespace);
            if (dart.test(scanner.scan(src__scan.token))) {
              params[$_set](name, scanner.lastMatch._get(0));
            } else {
              params[$_set](name, src__scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
            }
            scanner.scan(src__scan.whitespace);
            beforeComma = scanner.position;
          }
          return new src__authentication_challenge.AuthenticationChallenge.new(scheme, params);
        }, VoidToAuthenticationChallenge()));
        scanner.expectDone();
        return challenges;
      }, VoidToListOfAuthenticationChallenge()));
    }
    static parse(challenge) {
      return src__utils.wrapFormatException(src__authentication_challenge.AuthenticationChallenge, "authentication challenge", challenge, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(challenge);
        scanner.scan(src__scan.whitespace);
        let scheme = src__authentication_challenge.AuthenticationChallenge._scanScheme(scanner);
        let params = new (IdentityMapOfString$String()).new();
        src__scan.parseList(dart.void, scanner, dart.fn(() => src__authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params), VoidTovoid()));
        scanner.expectDone();
        return new src__authentication_challenge.AuthenticationChallenge.new(scheme, params);
      }, VoidToAuthenticationChallenge()));
    }
    static _scanScheme(scanner, opts) {
      let whitespaceName = opts && 'whitespaceName' in opts ? opts.whitespaceName : null;
      scanner.expect(src__scan.token, {name: "a token"});
      let scheme = scanner.lastMatch._get(0)[$toLowerCase]();
      scanner.scan(src__scan.whitespace);
      if (scanner.lastMatch == null || !scanner.lastMatch._get(0)[$contains](" ")) {
        scanner.expect(" ", {name: whitespaceName});
      }
      return scheme;
    }
    static _scanAuthParam(scanner, params) {
      scanner.expect(src__scan.token, {name: "a token"});
      let name = scanner.lastMatch._get(0);
      scanner.scan(src__scan.whitespace);
      scanner.expect('=');
      scanner.scan(src__scan.whitespace);
      if (dart.test(scanner.scan(src__scan.token))) {
        params[$_set](name, scanner.lastMatch._get(0));
      } else {
        params[$_set](name, src__scan.expectQuotedString(scanner, {name: "a token or a quoted string"}));
      }
      scanner.scan(src__scan.whitespace);
    }
  };
  (src__authentication_challenge.AuthenticationChallenge.new = function(scheme, parameters) {
    this[scheme$] = scheme;
    this[parameters$] = new (UnmodifiableMapViewOfString$String()).new(new (CaseInsensitiveMapOfString()).from(parameters));
  }).prototype = src__authentication_challenge.AuthenticationChallenge.prototype;
  dart.addTypeTests(src__authentication_challenge.AuthenticationChallenge);
  const scheme$ = Symbol("AuthenticationChallenge.scheme");
  const parameters$ = Symbol("AuthenticationChallenge.parameters");
  dart.setStaticMethodSignature(src__authentication_challenge.AuthenticationChallenge, () => ({
    parseHeader: dart.fnType(core.List$(src__authentication_challenge.AuthenticationChallenge), [core.String]),
    _scanScheme: dart.fnType(core.String, [src__string_scanner.StringScanner], {whitespaceName: core.String}),
    _scanAuthParam: dart.fnType(dart.void, [src__string_scanner.StringScanner, core.Map])
  }));
  dart.setFieldSignature(src__authentication_challenge.AuthenticationChallenge, () => ({
    __proto__: dart.getFields(src__authentication_challenge.AuthenticationChallenge.__proto__),
    scheme: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(MapOfString$String())
  }));
  dart.trackLibraries("packages/http_parser/src/authentication_challenge.ddc", {
    "package:http_parser/src/authentication_challenge.dart": src__authentication_challenge
  }, '{"version":3,"sourceRoot":"","sources":["authentication_challenge.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAuBe;;;;;;IAMa;;;;;;uBAMuB,MAAa;AAC5D,YAAO,+BAAmB,kCAAC,yBAAyB,MAAM,EAAE;AAC1D,YAAI,UAAU,IAAI,qCAAa,CAAC,MAAM;AACtC,eAAO,KAAK,CAAC,oBAAU;AACvB,YAAI,aAAa,mBAAS,wDAAC,OAAO,EAAE;AAClC,cAAI,SAAS,iEAAW,CAAC,OAAO,mBAAkB;AAIlD,cAAI,SAAS;AAGb,2BAAO,OAAO,KAAK,CAAC,OAAM;AACxB,mBAAO,KAAK,CAAC,oBAAU;;AAGzB,8EAAc,CAAC,OAAO,EAAE,MAAM;AAE9B,cAAI,cAAc,OAAO,SAAS;AAClC,2BAAO,OAAO,KAAK,CAAC,OAAM;AACxB,mBAAO,KAAK,CAAC,oBAAU;AAGvB,0BAAI,OAAO,QAAQ,CAAC,mBAAQ,OAAO,OAAO,GAAE;AAE5C,mBAAO,OAAO,CAAC,eAAK,SAAQ;AAC5B,gBAAI,OAAO,OAAO,UAAU,MAAC;AAC7B,mBAAO,KAAK,CAAC,oBAAU;AAIvB,2BAAK,OAAO,KAAK,CAAC,OAAM;AACtB,qBAAO,SAAS,GAAG,WAAW;AAC9B;;AAGF,mBAAO,KAAK,CAAC,oBAAU;AAEvB,0BAAI,OAAO,KAAK,CAAC,eAAK,IAAG;AACvB,oBAAM,QAAC,IAAI,EAAI,OAAO,UAAU,MAAC;mBAC5B;AACL,oBAAM,QAAC,IAAI,EAAI,4BAAkB,CAC7B,OAAO,SAAQ;;AAGrB,mBAAO,KAAK,CAAC,oBAAU;AACvB,uBAAW,GAAG,OAAO,SAAS;;AAGhC,gBAAO,KAAI,yDAAuB,CAAC,MAAM,EAAE,MAAM;;AAGnD,eAAO,WAAW;AAClB,cAAO,WAAU;;IAErB;iBAKsC,SAAgB;AAAE,AACtD,YAAO,+BAAmB,wDAAC,4BAA4B,SAAS,EAAE;AAChE,YAAI,UAAU,IAAI,qCAAa,CAAC,SAAS;AACzC,eAAO,KAAK,CAAC,oBAAU;AACvB,YAAI,SAAS,iEAAW,CAAC,OAAO;AAEhC,YAAI,SAAS;AACb,2BAAS,YAAC,OAAO,EAAE,cAAM,oEAAc,CAAC,OAAO,EAAE,MAAM;AAEvD,eAAO,WAAW;AAClB,cAAO,KAAI,yDAAuB,CAAC,MAAM,EAAE,MAAM;;IAErD;uBAM0B,OAAqB;UAAU;AACvD,aAAO,OAAO,CAAC,eAAK,SAAQ;AAC5B,UAAI,SAAS,OAAO,UAAU,MAAC,gBAAc;AAE7C,aAAO,KAAK,CAAC,oBAAU;AAIvB,UAAI,OAAO,UAAU,IAAI,SAAS,OAAO,UAAU,MAAC,aAAW,CAAC,MAAM;AACpE,eAAO,OAAO,CAAC,YAAW,cAAc;;AAG1C,YAAO,OAAM;IACf;0BAG2B,OAAqB,EAAE,MAAU;AAC1D,aAAO,OAAO,CAAC,eAAK,SAAQ;AAC5B,UAAI,OAAO,OAAO,UAAU,MAAC;AAC7B,aAAO,KAAK,CAAC,oBAAU;AACvB,aAAO,OAAO,CAAC;AACf,aAAO,KAAK,CAAC,oBAAU;AAEvB,oBAAI,OAAO,KAAK,CAAC,eAAK,IAAG;AACvB,cAAM,QAAC,IAAI,EAAI,OAAO,UAAU,MAAC;aAC5B;AACL,cAAM,QAAC,IAAI,EAAI,4BAAkB,CAC7B,OAAO,SAAQ;;AAGrB,aAAO,KAAK,CAAC,oBAAU;IACzB;;wEAGwB,MAAW,EAAE,UAA8B;IAAtC,aAAM,GAAN,MAAM;IAC7B,iBAAU,GAAG,IAAI,0CAAmB,CAChC,IAAI,mCAAuB,CAAC,UAAU;EAAE","file":"authentication_challenge.ddc.js"}');
  // Exports:
  return {
    src__authentication_challenge: src__authentication_challenge
  };
});

//# sourceMappingURL=authentication_challenge.ddc.js.map
