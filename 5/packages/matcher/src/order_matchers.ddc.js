define(['dart_sdk', 'packages/matcher/src/interfaces'], function(dart_sdk, interfaces) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interfaces = interfaces.src__interfaces;
  const _root = Object.create(null);
  const src__order_matchers = Object.create(_root);
  let dynamicToMatcher = () => (dynamicToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic])))();
  src__order_matchers.greaterThan = function(value) {
    return new src__order_matchers._OrderingMatcher.new(value, false, false, true, 'a value greater than');
  };
  dart.fn(src__order_matchers.greaterThan, dynamicToMatcher());
  src__order_matchers.greaterThanOrEqualTo = function(value) {
    return new src__order_matchers._OrderingMatcher.new(value, true, false, true, 'a value greater than or equal to');
  };
  dart.fn(src__order_matchers.greaterThanOrEqualTo, dynamicToMatcher());
  src__order_matchers.lessThan = function(value) {
    return new src__order_matchers._OrderingMatcher.new(value, false, true, false, 'a value less than');
  };
  dart.fn(src__order_matchers.lessThan, dynamicToMatcher());
  src__order_matchers.lessThanOrEqualTo = function(value) {
    return new src__order_matchers._OrderingMatcher.new(value, true, true, false, 'a value less than or equal to');
  };
  dart.fn(src__order_matchers.lessThanOrEqualTo, dynamicToMatcher());
  dart.defineLazy(src__order_matchers, {
    /*src__order_matchers.isZero*/get isZero() {
      return dart.const(new src__order_matchers._OrderingMatcher.new(0, true, false, false, 'a value equal to'));
    },
    /*src__order_matchers.isNonZero*/get isNonZero() {
      return dart.const(new src__order_matchers._OrderingMatcher.new(0, false, true, true, 'a value not equal to'));
    },
    /*src__order_matchers.isPositive*/get isPositive() {
      return dart.const(new src__order_matchers._OrderingMatcher.new(0, false, false, true, 'a positive value', false));
    },
    /*src__order_matchers.isNonPositive*/get isNonPositive() {
      return dart.const(new src__order_matchers._OrderingMatcher.new(0, true, true, false, 'a non-positive value', false));
    },
    /*src__order_matchers.isNegative*/get isNegative() {
      return dart.const(new src__order_matchers._OrderingMatcher.new(0, false, true, false, 'a negative value', false));
    },
    /*src__order_matchers.isNonNegative*/get isNonNegative() {
      return dart.const(new src__order_matchers._OrderingMatcher.new(0, true, false, true, 'a non-negative value', false));
    }
  });
  const _value = Symbol('_value');
  const _equalValue = Symbol('_equalValue');
  const _lessThanValue = Symbol('_lessThanValue');
  const _greaterThanValue = Symbol('_greaterThanValue');
  const _comparisonDescription = Symbol('_comparisonDescription');
  const _valueInDescription = Symbol('_valueInDescription');
  src__order_matchers._OrderingMatcher = class _OrderingMatcher extends src__interfaces.Matcher {
    matches(item, matchState) {
      if (dart.equals(item, this[_value])) {
        return this[_equalValue];
      } else if (dart.dtest(dart.dsend(item, '<', this[_value]))) {
        return this[_lessThanValue];
      } else {
        return this[_greaterThanValue];
      }
    }
    describe(description) {
      if (dart.test(this[_valueInDescription])) {
        return description.add(this[_comparisonDescription]).add(' ').addDescriptionOf(this[_value]);
      } else {
        return description.add(this[_comparisonDescription]);
      }
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      mismatchDescription.add('is not ');
      return this.describe(mismatchDescription);
    }
  };
  (src__order_matchers._OrderingMatcher.new = function(value, equalValue, lessThanValue, greaterThanValue, comparisonDescription, valueInDescription) {
    if (valueInDescription === void 0) valueInDescription = true;
    this[_value] = value;
    this[_equalValue] = equalValue;
    this[_lessThanValue] = lessThanValue;
    this[_greaterThanValue] = greaterThanValue;
    this[_comparisonDescription] = comparisonDescription;
    this[_valueInDescription] = valueInDescription;
    src__order_matchers._OrderingMatcher.__proto__.new.call(this);
  }).prototype = src__order_matchers._OrderingMatcher.prototype;
  dart.addTypeTests(src__order_matchers._OrderingMatcher);
  dart.setMethodSignature(src__order_matchers._OrderingMatcher, () => ({
    __proto__: dart.getMethods(src__order_matchers._OrderingMatcher.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__order_matchers._OrderingMatcher, () => ({
    __proto__: dart.getFields(src__order_matchers._OrderingMatcher.__proto__),
    [_value]: dart.finalFieldType(dart.dynamic),
    [_equalValue]: dart.finalFieldType(core.bool),
    [_lessThanValue]: dart.finalFieldType(core.bool),
    [_greaterThanValue]: dart.finalFieldType(core.bool),
    [_comparisonDescription]: dart.finalFieldType(core.String),
    [_valueInDescription]: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/matcher/src/order_matchers.ddc", {
    "package:matcher/src/order_matchers.dart": src__order_matchers
  }, '{"version":3,"sourceRoot":"","sources":["order_matchers.dart"],"names":[],"mappings":";;;;;;;;;6CAQoB,KAAK;UACrB,KAAI,wCAAgB,CAAC,KAAK,EAAE,OAAO,OAAO,MAAM;EAAuB;;sDAI9C,KAAK;UAAK,KAAI,wCAAgB,CACvD,KAAK,EAAE,MAAM,OAAO,MAAM;EAAmC;;0CAIhD,KAAK;UAClB,KAAI,wCAAgB,CAAC,KAAK,EAAE,OAAO,MAAM,OAAO;EAAoB;;mDAI9C,KAAK;UAAK,KAAI,wCAAgB,CACpD,KAAK,EAAE,MAAM,MAAM,OAAO;EAAgC;;;MAGhD,0BAAM;YAChB,gBAAM,wCAAgB,CAAC,GAAG,MAAM,OAAO,OAAO;;MAGpC,6BAAS;YACnB,gBAAM,wCAAgB,CAAC,GAAG,OAAO,MAAM,MAAM;;MAGnC,8BAAU;YACpB,gBAAM,wCAAgB,CAAC,GAAG,OAAO,OAAO,MAAM,oBAAoB;;MAGxD,iCAAa;YACvB,gBAAM,wCAAgB,CAAC,GAAG,MAAM,MAAM,OAAO,wBAAwB;;MAG3D,8BAAU;YACpB,gBAAM,wCAAgB,CAAC,GAAG,OAAO,MAAM,OAAO,oBAAoB;;MAGxD,iCAAa;YACvB,gBAAM,wCAAgB,CAAC,GAAG,MAAM,OAAO,MAAM,wBAAwB;;;;;;;;;;YA4B1D,IAAI,EAAE,UAAc;AAC/B,sBAAI,IAAI,EAAI,YAAM,GAAE;AAClB,cAAO,kBAAW;YACb,gBAAS,WAAL,IAAI,OAAG,YAAM,IAAE;AACxB,cAAO,qBAAc;aAChB;AACL,cAAO,wBAAiB;;IAE5B;aAEqB,WAAuB;AAC1C,oBAAI,yBAAmB,GAAE;AACvB,cAAO,YAAW,IACV,CAAC,4BAAsB,KACvB,CAAC,qBACY,CAAC,YAAM;aACvB;AACL,cAAO,YAAW,IAAI,CAAC,4BAAsB;;IAEjD;qBAGI,IAAI,EAAE,mBAA+B,EAAE,UAAc,EAAE,OAAY;AACrE,yBAAmB,IAAI,CAAC;AACxB,YAAO,cAAQ,CAAC,mBAAmB;IACrC;;uDA9B4B,KAAM,EAAO,UAAW,EAAO,aAAc,EAChE,gBAAiB,EAAO,qBAAsB,EAClD,kBAA8B;uCAAzB,qBAAqB;IAFH,YAAM,GAAN,KAAM;IAAO,iBAAW,GAAX,UAAW;IAAO,oBAAc,GAAd,aAAc;IAChE,uBAAiB,GAAjB,gBAAiB;IAAO,4BAAsB,GAAtB,qBAAsB;IAE5C,yBAAmB,GAAG,kBAAkB","file":"order_matchers.ddc.js"}');
  // Exports:
  return {
    src__order_matchers: src__order_matchers
  };
});

//# sourceMappingURL=order_matchers.ddc.js.map
