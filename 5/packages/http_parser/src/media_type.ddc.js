define(['dart_sdk', 'packages/http_parser/src/case_insensitive_map', 'packages/http_parser/src/utils', 'packages/string_scanner/src/string_scanner', 'packages/http_parser/src/scan'], function(dart_sdk, case_insensitive_map, utils, string_scanner, scan) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__case_insensitive_map = case_insensitive_map.src__case_insensitive_map;
  const src__utils = utils.src__utils;
  const src__string_scanner = string_scanner.src__string_scanner;
  const src__scan = scan.src__scan;
  const _root = Object.create(null);
  const src__media_type = Object.create(_root);
  const $toLowerCase = dartx.toLowerCase;
  const $_set = dartx._set;
  const $split = dartx.split;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $forEach = dartx.forEach;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let CaseInsensitiveMapOfString = () => (CaseInsensitiveMapOfString = dart.constFn(src__case_insensitive_map.CaseInsensitiveMap$(core.String)))();
  let UnmodifiableMapViewOfString$String = () => (UnmodifiableMapViewOfString$String = dart.constFn(collection.UnmodifiableMapView$(core.String, core.String)))();
  let VoidToMediaType = () => (VoidToMediaType = dart.constFn(dart.fnType(src__media_type.MediaType, [])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let StringAndStringToNull = () => (StringAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.String, core.String])))();
  dart.defineLazy(src__media_type, {
    /*src__media_type._escapedChar*/get _escapedChar() {
      return core.RegExp.new('["\\x00-\\x1F\\x7F]');
    }
  });
  src__media_type.MediaType = class MediaType extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get subtype() {
      return this[subtype$];
    }
    set subtype(value) {
      super.subtype = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get mimeType() {
      return dart.str`${this.type}/${this.subtype}`;
    }
    static parse(mediaType) {
      return src__utils.wrapFormatException(src__media_type.MediaType, "media type", mediaType, dart.fn(() => {
        let scanner = new src__string_scanner.StringScanner.new(mediaType);
        scanner.scan(src__scan.whitespace);
        scanner.expect(src__scan.token);
        let type = scanner.lastMatch._get(0);
        scanner.expect('/');
        scanner.expect(src__scan.token);
        let subtype = scanner.lastMatch._get(0);
        scanner.scan(src__scan.whitespace);
        let parameters = new (IdentityMapOfString$String()).new();
        while (dart.test(scanner.scan(';'))) {
          scanner.scan(src__scan.whitespace);
          scanner.expect(src__scan.token);
          let attribute = scanner.lastMatch._get(0);
          scanner.expect('=');
          let value = null;
          if (dart.test(scanner.scan(src__scan.token))) {
            value = scanner.lastMatch._get(0);
          } else {
            value = src__scan.expectQuotedString(scanner);
          }
          scanner.scan(src__scan.whitespace);
          parameters[$_set](attribute, core.String._check(value));
        }
        scanner.expectDone();
        return new src__media_type.MediaType.new(type, subtype, parameters);
      }, VoidToMediaType()));
    }
    change(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subtype = opts && 'subtype' in opts ? opts.subtype : null;
      let mimeType = opts && 'mimeType' in opts ? opts.mimeType : null;
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let clearParameters = opts && 'clearParameters' in opts ? opts.clearParameters : false;
      if (mimeType != null) {
        if (type != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [type] and [mimeType]."));
        } else if (subtype != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [subtype] and " + "[mimeType]."));
        }
        let segments = mimeType[$split]('/');
        if (segments[$length] !== 2) {
          dart.throw(new core.FormatException.new(dart.str`Invalid mime type "${mimeType}".`));
        }
        type = segments[$_get](0);
        subtype = segments[$_get](1);
      }
      if (type == null) type = this.type;
      if (subtype == null) subtype = this.subtype;
      if (parameters == null) parameters = new (IdentityMapOfString$String()).new();
      if (!dart.test(clearParameters)) {
        let newParameters = parameters;
        parameters = MapOfString$String().from(this.parameters);
        parameters[$addAll](newParameters);
      }
      return new src__media_type.MediaType.new(type, subtype, parameters);
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      buffer.write(this.type);
      buffer.write("/");
      buffer.write(this.subtype);
      this.parameters[$forEach](dart.fn((attribute, value) => {
        buffer.write(dart.str`; ${attribute}=`);
        if (dart.test(src__scan.nonToken.hasMatch(value))) {
          buffer.write('"');
          buffer.write(value[$replaceAllMapped](src__media_type._escapedChar, dart.fn(match => "\\" + dart.notNull(match._get(0)), MatchToString())));
          buffer.write('"');
        } else {
          buffer.write(value);
        }
      }, StringAndStringToNull()));
      return buffer.toString();
    }
  };
  (src__media_type.MediaType.new = function(type, subtype, parameters) {
    if (parameters === void 0) parameters = null;
    this[type$] = type[$toLowerCase]();
    this[subtype$] = subtype[$toLowerCase]();
    this[parameters$] = new (UnmodifiableMapViewOfString$String()).new(parameters == null ? new (IdentityMapOfString$String()).new() : new (CaseInsensitiveMapOfString()).from(parameters));
  }).prototype = src__media_type.MediaType.prototype;
  dart.addTypeTests(src__media_type.MediaType);
  const type$ = Symbol("MediaType.type");
  const subtype$ = Symbol("MediaType.subtype");
  const parameters$ = Symbol("MediaType.parameters");
  dart.setMethodSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getMethods(src__media_type.MediaType.__proto__),
    change: dart.fnType(src__media_type.MediaType, [], {type: core.String, subtype: core.String, mimeType: core.String, parameters: MapOfString$String(), clearParameters: core.bool})
  }));
  dart.setGetterSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getGetters(src__media_type.MediaType.__proto__),
    mimeType: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__media_type.MediaType, () => ({
    __proto__: dart.getFields(src__media_type.MediaType.__proto__),
    type: dart.finalFieldType(core.String),
    subtype: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(MapOfString$String())
  }));
  dart.defineExtensionMethods(src__media_type.MediaType, ['toString']);
  dart.trackLibraries("packages/http_parser/src/media_type.ddc", {
    "package:http_parser/src/media_type.dart": src__media_type
  }, '{"version":3,"sourceRoot":"","sources":["media_type.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAaM,4BAAY;YAAG,AAAI,gBAAM,CAAC;;;;IAWjB;;;;;;IAKA;;;;;;IAKa;;;;;;;YAGH,YAAE,SAAI,IAAE,YAAO;IAAC;iBAKf,SAAgB;AAAE,AAGxC,YAAO,+BAAmB,4BAAC,cAAc,SAAS,EAAE;AAClD,YAAI,UAAU,IAAI,qCAAa,CAAC,SAAS;AACzC,eAAO,KAAK,CAAC,oBAAU;AACvB,eAAO,OAAO,CAAC,eAAK;AACpB,YAAI,OAAO,OAAO,UAAU,MAAC;AAC7B,eAAO,OAAO,CAAC;AACf,eAAO,OAAO,CAAC,eAAK;AACpB,YAAI,UAAU,OAAO,UAAU,MAAC;AAChC,eAAO,KAAK,CAAC,oBAAU;AAEvB,YAAI,aAAa;AACjB,yBAAO,OAAO,KAAK,CAAC,OAAM;AACxB,iBAAO,KAAK,CAAC,oBAAU;AACvB,iBAAO,OAAO,CAAC,eAAK;AACpB,cAAI,YAAY,OAAO,UAAU,MAAC;AAClC,iBAAO,OAAO,CAAC;AAEf,cAAI;AACJ,wBAAI,OAAO,KAAK,CAAC,eAAK,IAAG;AACvB,iBAAK,GAAG,OAAO,UAAU,MAAC;iBACrB;AACL,iBAAK,GAAG,4BAAkB,CAAC,OAAO;;AAGpC,iBAAO,KAAK,CAAC,oBAAU;AACvB,oBAAU,QAAC,SAAS,qBAAI,KAAK;;AAG/B,eAAO,WAAW;AAClB,cAAO,KAAI,6BAAS,CAAC,IAAI,EAAE,OAAO,EAAE,UAAU;;IAElD;;UAiByB;UAAa;UAAgB;UAC9B;UAAiB,6EAAiB;AACxD,UAAI,QAAQ,IAAI,MAAM;AACpB,YAAI,IAAI,IAAI,MAAM;AAChB,qBAAM,IAAI,sBAAa,CAAC;cACnB,KAAI,OAAO,IAAI,MAAM;AAC1B,qBAAM,IAAI,sBAAa,CAAC,yCACpB;;AAGN,YAAI,WAAW,QAAQ,QAAM,CAAC;AAC9B,YAAI,QAAQ,SAAO,KAAI,GAAG;AACxB,qBAAM,IAAI,wBAAe,CAAC,8BAAqB,QAAQ;;AAGzD,YAAI,GAAG,QAAQ,QAAC;AAChB,eAAO,GAAG,QAAQ,QAAC;;AAGrB,UAAI,IAAI,IAAI,MAAM,IAAI,GAAG,SAAS;AAClC,UAAI,OAAO,IAAI,MAAM,OAAO,GAAG,YAAY;AAC3C,UAAI,UAAU,IAAI,MAAM,UAAU,GAAG;AAErC,qBAAK,eAAe,GAAE;AACpB,YAAI,gBAAgB,UAAU;AAC9B,kBAAU,GAAG,AAAI,yBAAQ,CAAC,eAAe;AACzC,kBAAU,SAAO,CAAC,aAAa;;AAGjC,YAAO,KAAI,6BAAS,CAAC,IAAI,EAAE,OAAO,EAAE,UAAU;IAChD;;AAME,UAAI,SAAS,IAAI,qBAAY;MAAzB,aACM,SAAI;MADV,aAEM;MAFN,aAGM,YAAO;AAEjB,qBAAU,UAAQ,CAAC,SAAC,SAAS,EAAE,KAAK;AAClC,cAAM,MAAM,CAAC,aAAI,SAAS;AAC1B,sBAAI,kBAAQ,SAAS,CAAC,KAAK,IAAG;AAC5B,UACE,AAAE,YAAK,CAAC;UACR,AAAE,YAAK,CACH,KAAK,mBAAiB,CAAC,4BAAY,EAAE,QAAC,KAAK,IAAK,AAAK,oBAAE,KAAK,MAAC;UACjE,AAAE,YAAK,CAAC;eACL;AACL,gBAAM,MAAM,CAAC,KAAK;;;AAItB,YAAO,OAAM,SAAS;IACxB;;4CAtEU,IAAW,EAAE,OAAc,EAAG,UAA8B;+BAAV;IACtD,WAAI,GAAG,IAAI,cAAY;IACvB,cAAO,GAAG,OAAO,cAAY;IAC7B,iBAAU,GAAG,IAAI,0CAAmB,CAChC,UAAU,IAAI,OAAO,2CAAK,IAAI,mCAAuB,CAAC,UAAU;EAAE","file":"media_type.ddc.js"}');
  // Exports:
  return {
    src__media_type: src__media_type
  };
});

//# sourceMappingURL=media_type.ddc.js.map
