define(['dart_sdk', 'packages/matcher/src/interfaces'], function(dart_sdk, interfaces) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interfaces = interfaces.src__interfaces;
  const _root = Object.create(null);
  const src__numeric_matchers = Object.create(_root);
  let numAndnumToMatcher = () => (numAndnumToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [core.num, core.num])))();
  src__numeric_matchers.closeTo = function(value, delta) {
    return new src__numeric_matchers._IsCloseTo.new(value, delta);
  };
  dart.fn(src__numeric_matchers.closeTo, numAndnumToMatcher());
  const _value = Symbol('_value');
  const _delta = Symbol('_delta');
  src__numeric_matchers._IsCloseTo = class _IsCloseTo extends src__interfaces.Matcher {
    matches(item, matchState) {
      if (typeof item == 'number') {
        let diff = dart.notNull(item) - dart.notNull(this[_value]);
        if (diff < 0) diff = -diff;
        return diff <= dart.notNull(this[_delta]);
      } else {
        return false;
      }
    }
    describe(description) {
      return description.add('a numeric value within ').addDescriptionOf(this[_delta]).add(' of ').addDescriptionOf(this[_value]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (typeof item == 'number') {
        let diff = dart.notNull(item) - dart.notNull(this[_value]);
        if (diff < 0) diff = -diff;
        return mismatchDescription.add(' differs by ').addDescriptionOf(diff);
      } else {
        return mismatchDescription.add(' not numeric');
      }
    }
  };
  (src__numeric_matchers._IsCloseTo.new = function(value, delta) {
    this[_value] = value;
    this[_delta] = delta;
    src__numeric_matchers._IsCloseTo.__proto__.new.call(this);
  }).prototype = src__numeric_matchers._IsCloseTo.prototype;
  dart.addTypeTests(src__numeric_matchers._IsCloseTo);
  dart.setMethodSignature(src__numeric_matchers._IsCloseTo, () => ({
    __proto__: dart.getMethods(src__numeric_matchers._IsCloseTo.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__numeric_matchers._IsCloseTo, () => ({
    __proto__: dart.getFields(src__numeric_matchers._IsCloseTo.__proto__),
    [_value]: dart.finalFieldType(core.num),
    [_delta]: dart.finalFieldType(core.num)
  }));
  src__numeric_matchers.inInclusiveRange = function(low, high) {
    return new src__numeric_matchers._InRange.new(low, high, true, true);
  };
  dart.fn(src__numeric_matchers.inInclusiveRange, numAndnumToMatcher());
  src__numeric_matchers.inExclusiveRange = function(low, high) {
    return new src__numeric_matchers._InRange.new(low, high, false, false);
  };
  dart.fn(src__numeric_matchers.inExclusiveRange, numAndnumToMatcher());
  src__numeric_matchers.inOpenClosedRange = function(low, high) {
    return new src__numeric_matchers._InRange.new(low, high, false, true);
  };
  dart.fn(src__numeric_matchers.inOpenClosedRange, numAndnumToMatcher());
  src__numeric_matchers.inClosedOpenRange = function(low, high) {
    return new src__numeric_matchers._InRange.new(low, high, true, false);
  };
  dart.fn(src__numeric_matchers.inClosedOpenRange, numAndnumToMatcher());
  const _low = Symbol('_low');
  const _high = Symbol('_high');
  const _lowMatchValue = Symbol('_lowMatchValue');
  const _highMatchValue = Symbol('_highMatchValue');
  src__numeric_matchers._InRange = class _InRange extends src__interfaces.Matcher {
    matches(value, matchState) {
      if (typeof value == 'number') {
        if (dart.notNull(value) < dart.notNull(this[_low]) || dart.notNull(value) > dart.notNull(this[_high])) {
          return false;
        }
        if (value == this[_low]) {
          return this[_lowMatchValue];
        }
        if (value == this[_high]) {
          return this[_highMatchValue];
        }
        return true;
      } else {
        return false;
      }
    }
    describe(description) {
      return description.add("be in range from " + dart.str`${this[_low]} (${dart.test(this[_lowMatchValue]) ? 'inclusive' : 'exclusive'}) to ` + dart.str`${this[_high]} (${dart.test(this[_highMatchValue]) ? 'inclusive' : 'exclusive'})`);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (!(typeof item == 'number')) {
        return mismatchDescription.addDescriptionOf(item).add(' not numeric');
      } else {
        return super.describeMismatch(item, mismatchDescription, matchState, verbose);
      }
    }
  };
  (src__numeric_matchers._InRange.new = function(low, high, lowMatchValue, highMatchValue) {
    this[_low] = low;
    this[_high] = high;
    this[_lowMatchValue] = lowMatchValue;
    this[_highMatchValue] = highMatchValue;
    src__numeric_matchers._InRange.__proto__.new.call(this);
  }).prototype = src__numeric_matchers._InRange.prototype;
  dart.addTypeTests(src__numeric_matchers._InRange);
  dart.setMethodSignature(src__numeric_matchers._InRange, () => ({
    __proto__: dart.getMethods(src__numeric_matchers._InRange.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__numeric_matchers._InRange, () => ({
    __proto__: dart.getFields(src__numeric_matchers._InRange.__proto__),
    [_low]: dart.finalFieldType(core.num),
    [_high]: dart.finalFieldType(core.num),
    [_lowMatchValue]: dart.finalFieldType(core.bool),
    [_highMatchValue]: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/matcher/src/numeric_matchers.ddc", {
    "package:matcher/src/numeric_matchers.dart": src__numeric_matchers
  }, '{"version":3,"sourceRoot":"","sources":["numeric_matchers.dart"],"names":[],"mappings":";;;;;;;;;2CAWgB,KAAS,EAAE,KAAS;UAAK,KAAI,oCAAU,CAAC,KAAK,EAAE,KAAK;EAAC;;;;;YAOtD,IAAI,EAAE,UAAc;AAC/B,iBAAI,IAAI,cAAS;AACf,YAAI,OAAY,aAAL,IAAI,iBAAG,YAAM;AACxB,YAAI,AAAK,IAAD,GAAG,GAAG,IAAI,GAAG,CAAC,IAAI;AAC1B,cAAQ,AAAK,KAAD,iBAAI,YAAM;aACjB;AACL,cAAO;;IAEX;aAEqB,WAAuB;YAAK,YAAW,IACpD,CAAC,2CACY,CAAC,YAAM,KACpB,CAAC,wBACY,CAAC,YAAM;IAAC;qBAGzB,IAAI,EAAE,mBAA+B,EAAE,UAAc,EAAE,OAAY;AACrE,iBAAI,IAAI,cAAS;AACf,YAAI,OAAY,aAAL,IAAI,iBAAG,YAAM;AACxB,YAAI,AAAK,IAAD,GAAG,GAAG,IAAI,GAAG,CAAC,IAAI;AAC1B,cAAO,oBAAmB,IAAI,CAAC,gCAAgC,CAAC,IAAI;aAC/D;AACL,cAAO,oBAAmB,IAAI,CAAC;;IAEnC;;mDA3BsB,KAAM,EAAO,KAAM;IAAnB,YAAM,GAAN,KAAM;IAAO,YAAM,GAAN,KAAM;;EAAC;;;;;;;;;;;;oDAgCnB,GAAO,EAAE,IAAQ;UACtC,KAAI,kCAAQ,CAAC,GAAG,EAAE,IAAI,EAAE,MAAM;EAAK;;oDAId,GAAO,EAAE,IAAQ;UACtC,KAAI,kCAAQ,CAAC,GAAG,EAAE,IAAI,EAAE,OAAO;EAAM;;qDAIf,GAAO,EAAE,IAAQ;UACvC,KAAI,kCAAQ,CAAC,GAAG,EAAE,IAAI,EAAE,OAAO;EAAK;;qDAId,GAAO,EAAE,IAAQ;UACvC,KAAI,kCAAQ,CAAC,GAAG,EAAE,IAAI,EAAE,MAAM;EAAM;;;;;;;YASzB,KAAK,EAAE,UAAc;AAChC,iBAAI,KAAK,cAAS;AAChB,YAAU,aAAN,KAAK,iBAAG,UAAI,KAAU,aAAN,KAAK,iBAAG,WAAK,GAAE;AACjC,gBAAO;;AAET,YAAI,KAAK,IAAI,UAAI,EAAE;AACjB,gBAAO,qBAAc;;AAEvB,YAAI,KAAK,IAAI,WAAK,EAAE;AAClB,gBAAO,sBAAe;;AAExB,cAAO;aACF;AACL,cAAO;;IAEX;aAEqB,WAAuB;YACxC,YAAW,IAAI,CAAC,sBACZ,WAAE,UAAI,eAAI,oBAAc,IAAG,cAAc,qBACzC,WAAE,WAAK,eAAI,qBAAe,IAAG,cAAc;IAAe;qBAG9D,IAAI,EAAE,mBAA+B,EAAE,UAAc,EAAE,OAAY;AACrE,mBAAI,IAAI,eAAU;AAChB,cAAO,oBAAmB,iBAAiB,CAAC,IAAI,KAAK,CAAC;aACjD;AACL,cAAO,uBACc,CAAC,IAAI,EAAE,mBAAmB,EAAE,UAAU,EAAE,OAAO;;IAExE;;iDAhCS,GAAI,EAAO,IAAK,EAAO,aAAc,EAAO,cAAe;IAA3D,UAAI,GAAJ,GAAI;IAAO,WAAK,GAAL,IAAK;IAAO,oBAAc,GAAd,aAAc;IAAO,qBAAe,GAAf,cAAe;;EAAC","file":"numeric_matchers.ddc.js"}');
  // Exports:
  return {
    src__numeric_matchers: src__numeric_matchers
  };
});

//# sourceMappingURL=numeric_matchers.ddc.js.map
