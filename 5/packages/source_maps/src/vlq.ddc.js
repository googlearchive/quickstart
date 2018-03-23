define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__vlq = Object.create(_root);
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $rightShift = dartx['>>'];
  const $add = dartx.add;
  const $containsKey = dartx.containsKey;
  const $leftShift = dartx['<<'];
  let IdentityMapOfString$int = () => (IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))();
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  let VoidToMapOfString$int = () => (VoidToMapOfString$int = dart.constFn(dart.fnType(MapOfString$int(), [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let intToIterableOfString = () => (intToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [core.int])))();
  let IteratorOfString = () => (IteratorOfString = dart.constFn(core.Iterator$(core.String)))();
  let IteratorOfStringToint = () => (IteratorOfStringToint = dart.constFn(dart.fnType(core.int, [IteratorOfString()])))();
  dart.defineLazy(src__vlq, {
    /*src__vlq.VLQ_BASE_SHIFT*/get VLQ_BASE_SHIFT() {
      return 5;
    },
    /*src__vlq.VLQ_BASE_MASK*/get VLQ_BASE_MASK() {
      return (1 << 5) - 1;
    },
    /*src__vlq.VLQ_CONTINUATION_BIT*/get VLQ_CONTINUATION_BIT() {
      return 1 << 5;
    },
    /*src__vlq.VLQ_CONTINUATION_MASK*/get VLQ_CONTINUATION_MASK() {
      return 1 << 5;
    },
    /*src__vlq.BASE64_DIGITS*/get BASE64_DIGITS() {
      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    },
    /*src__vlq._digits*/get _digits() {
      return dart.fn(() => {
        let map = new (IdentityMapOfString$int()).new();
        for (let i = 0; dart.notNull(i) < 64; i = dart.notNull(i) + 1) {
          map[$_set]("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[$_get](i), i);
        }
        return map;
      }, VoidToMapOfString$int())();
    },
    /*src__vlq.MAX_INT32*/get MAX_INT32() {
      return dart.asInt(math.pow(2, 31) - 1);
    },
    /*src__vlq.MIN_INT32*/get MIN_INT32() {
      return dart.asInt(-math.pow(2, 31));
    }
  });
  src__vlq.encodeVlq = function(value) {
    if (dart.notNull(value) < dart.notNull(src__vlq.MIN_INT32) || dart.notNull(value) > dart.notNull(src__vlq.MAX_INT32)) {
      dart.throw(new core.ArgumentError.new(dart.str`expected 32 bit int, got: ${value}`));
    }
    let res = JSArrayOfString().of([]);
    let signBit = 0;
    if (dart.notNull(value) < 0) {
      signBit = 1;
      value = -dart.notNull(value);
    }
    value = (dart.notNull(value) << 1 | signBit) >>> 0;
    do {
      let digit = dart.notNull(value) & 31;
      value = value[$rightShift](5);
      if (dart.notNull(value) > 0) {
        digit = (digit | 32) >>> 0;
      }
      res[$add]("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[$_get](digit));
    } while (dart.notNull(value) > 0);
    return res;
  };
  dart.fn(src__vlq.encodeVlq, intToIterableOfString());
  src__vlq.decodeVlq = function(chars) {
    let result = 0;
    let stop = false;
    let shift = 0;
    while (!stop) {
      if (!dart.test(chars.moveNext())) dart.throw(new core.StateError.new('incomplete VLQ value'));
      let char = chars.current;
      if (!dart.test(src__vlq._digits[$containsKey](char))) {
        dart.throw(new core.FormatException.new(dart.str`invalid character in VLQ encoding: ${char}`));
      }
      let digit = src__vlq._digits[$_get](char);
      stop = (dart.notNull(digit) & 32) === 0;
      digit = dart.notNull(digit) & 31;
      result = result + digit[$leftShift](shift);
      shift = shift + 5;
    }
    let negate = (result & 1) === 1;
    result = result[$rightShift](1);
    result = negate ? -result : result;
    if (result < dart.notNull(src__vlq.MIN_INT32) || result > dart.notNull(src__vlq.MAX_INT32)) {
      dart.throw(new core.FormatException.new(dart.str`expected an encoded 32 bit int, but we got: ${result}`));
    }
    return result;
  };
  dart.fn(src__vlq.decodeVlq, IteratorOfStringToint());
  dart.trackLibraries("packages/source_maps/src/vlq.ddc", {
    "package:source_maps/src/vlq.dart": src__vlq
  }, '{"version":3,"sourceRoot":"","sources":["vlq.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;MAkBU,uBAAc;YAAG;;MAEjB,sBAAa;YAAY,EAAR,AAAE,KAAG,KAAK;;MAE3B,6BAAoB;YAAG,AAAE,MAAG;;MAE5B,8BAAqB;YAAG,AAAE,MAAG;;MAE1B,sBAAa;YACtB;;MAEmB,gBAAO;YAAG;AAC/B,YAAI,MAAM;AACV,iBAAS,IAAI,GAAK,aAAF,CAAC,IAAG,IAAI,CAAC,gBAAD,CAAC,IA/B3B,GA+B+B;AAC3B,aAAG,QAAC,kEAAa,QAAC,CAAC,GAAK,CAAC;;AAE3B,cAAO,IAAG;;;MAGF,kBAAS;YAAG,YAAA,AAAW,QAAR,CAAC,GAAG,MAAM;;MACzB,kBAAS;wBAAG,CAAC,QAAG,CAAC,GAAG;;;gCAGH,KAAS;AAClC,QAAU,aAAN,KAAK,iBAAG,kBAAS,KAAU,aAAN,KAAK,iBAAG,kBAAS,GAAE;AAC1C,iBAAM,IAAI,sBAAa,CAAC,qCAA4B,KAAK;;AAE3D,QAAI,MAAM;AACV,QAAI,UAAU;AACd,QAAU,aAAN,KAAK,IAAG,GAAG;AACb,aAAO,GAAG;AACV,WAAK,GAAG,cAAC,KAAK;;AAEhB,SAAK,GAAG,CAAO,AAAM,aAAZ,KAAK,KAAI,IAAK,OAAO;AAC9B,OAAG;AACD,UAAI,QAAc,aAAN,KAAK,IAAG,EAAa;AACjC,WAAK,GAtDT,AAsDI,KAAK,cAAK,CAAc;AACxB,UAAU,aAAN,KAAK,IAAG,GAAG;AACb,aAAK,GAAL,CAxDN,AAwDM,KAAK,GAAI,EAAoB;;AAE/B,SAAG,MAAI,CAAC,kEAAa,QAAC,KAAK;aACd,aAAN,KAAK,IAAG;AACjB,UAAO,IAAG;EACZ;;gCAMc,KAAsB;AAClC,QAAI,SAAS;AACb,QAAK,OAAO;AACZ,QAAI,QAAQ;AACZ,YAAQ,IAAI,EAAE;AACZ,qBAAK,KAAK,SAAS,KAAI,WAAM,IAAI,mBAAU,CAAC;AAC5C,UAAI,OAAO,KAAK,QAAQ;AACxB,qBAAK,gBAAO,cAAY,CAAC,IAAI,IAAG;AAC9B,mBAAM,IAAI,wBAAe,CAAC,8CAAqC,IAAI;;AAErE,UAAI,QAAQ,gBAAO,QAAC,IAAI;AACxB,UAAI,GAAG,CAAO,aAAN,KAAK,IAAG,EAAoB,MAAK;AACzC,WAAK,GA/ET,aA+EI,KAAK,IAAI,EAAa;AACtB,YAAM,GAhFV,AAgFI,MAAM,GAAK,AAAM,KAAD,aAAI,KAAK;AACzB,WAAK,GAjFT,AAiFI,KAAK,GAAI,CAAc;;AAWzB,QAAK,SAAS,CAAC,AAAO,MAAD,GAAG,OAAM;AAC9B,UAAM,GAAG,AAAO,MAAD,cAAI;AACnB,UAAM,GAAG,MAAM,GAAG,CAAC,MAAM,GAAG,MAAM;AAGlC,QAAI,AAAO,MAAD,gBAAG,kBAAS,KAAI,AAAO,MAAD,gBAAG,kBAAS,GAAE;AAC5C,iBAAM,IAAI,wBAAe,CACrB,uDAA8C,MAAM;;AAE1D,UAAO,OAAM;EACf","file":"vlq.ddc.js"}');
  // Exports:
  return {
    src__vlq: src__vlq
  };
});

//# sourceMappingURL=vlq.ddc.js.map
