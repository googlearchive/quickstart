define(['dart_sdk', 'packages/matcher/src/interfaces', 'packages/matcher/src/core_matchers'], function(dart_sdk, interfaces, core_matchers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interfaces = interfaces.src__interfaces;
  const src__util = core_matchers.src__util;
  const _root = Object.create(null);
  const src__map_matchers = Object.create(_root);
  let dynamicToMatcher = () => (dynamicToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic])))();
  let dynamicAnddynamicToMatcher = () => (dynamicAnddynamicToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic, dart.dynamic])))();
  src__map_matchers.containsValue = function(value) {
    return new src__map_matchers._ContainsValue.new(value);
  };
  dart.fn(src__map_matchers.containsValue, dynamicToMatcher());
  const _value = Symbol('_value');
  src__map_matchers._ContainsValue = class _ContainsValue extends src__interfaces.Matcher {
    matches(item, matchState) {
      return core.bool._check(dart.dsend(item, 'containsValue', this[_value]));
    }
    describe(description) {
      return description.add('contains value ').addDescriptionOf(this[_value]);
    }
  };
  (src__map_matchers._ContainsValue.new = function(value) {
    this[_value] = value;
    src__map_matchers._ContainsValue.__proto__.new.call(this);
  }).prototype = src__map_matchers._ContainsValue.prototype;
  dart.addTypeTests(src__map_matchers._ContainsValue);
  dart.setMethodSignature(src__map_matchers._ContainsValue, () => ({
    __proto__: dart.getMethods(src__map_matchers._ContainsValue.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__map_matchers._ContainsValue, () => ({
    __proto__: dart.getFields(src__map_matchers._ContainsValue.__proto__),
    [_value]: dart.finalFieldType(dart.dynamic)
  }));
  src__map_matchers.containsPair = function(key, value) {
    return new src__map_matchers._ContainsMapping.new(key, src__util.wrapMatcher(value));
  };
  dart.fn(src__map_matchers.containsPair, dynamicAnddynamicToMatcher());
  const _key = Symbol('_key');
  const _valueMatcher = Symbol('_valueMatcher');
  src__map_matchers._ContainsMapping = class _ContainsMapping extends src__interfaces.Matcher {
    matches(item, matchState) {
      return dart.dtest(dart.dsend(item, 'containsKey', this[_key])) && dart.test(this[_valueMatcher].matches(dart.dindex(item, this[_key]), matchState));
    }
    describe(description) {
      return description.add('contains pair ').addDescriptionOf(this[_key]).add(' => ').addDescriptionOf(this[_valueMatcher]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (!dart.dtest(dart.dsend(item, 'containsKey', this[_key]))) {
        return mismatchDescription.add(" doesn't contain key ").addDescriptionOf(this[_key]);
      } else {
        mismatchDescription.add(' contains key ').addDescriptionOf(this[_key]).add(' but with value ');
        this[_valueMatcher].describeMismatch(dart.dindex(item, this[_key]), mismatchDescription, matchState, verbose);
        return mismatchDescription;
      }
    }
  };
  (src__map_matchers._ContainsMapping.new = function(key, valueMatcher) {
    this[_key] = key;
    this[_valueMatcher] = valueMatcher;
    src__map_matchers._ContainsMapping.__proto__.new.call(this);
  }).prototype = src__map_matchers._ContainsMapping.prototype;
  dart.addTypeTests(src__map_matchers._ContainsMapping);
  dart.setMethodSignature(src__map_matchers._ContainsMapping, () => ({
    __proto__: dart.getMethods(src__map_matchers._ContainsMapping.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__map_matchers._ContainsMapping, () => ({
    __proto__: dart.getFields(src__map_matchers._ContainsMapping.__proto__),
    [_key]: dart.finalFieldType(dart.dynamic),
    [_valueMatcher]: dart.finalFieldType(src__interfaces.Matcher)
  }));
  dart.trackLibraries("packages/matcher/src/map_matchers.ddc", {
    "package:matcher/src/map_matchers.dart": src__map_matchers
  }, '{"version":3,"sourceRoot":"","sources":["map_matchers.dart"],"names":[],"mappings":";;;;;;;;;;;6CAQsB,KAAK;UAAK,KAAI,oCAAc,CAAC,KAAK;EAAC;;;;YAO1C,IAAI,EAAE,UAAc;yCAAK,IAAI,mBAAe,YAAM;IAAC;aAC3C,WAAuB;YACxC,YAAW,IAAI,CAAC,mCAAmC,CAAC,YAAM;IAAC;;mDAJrC,KAAM;IAAN,YAAM,GAAN,KAAM;;EAAC;;;;;;;;;;;4CASd,GAAG,EAAE,KAAK;UAC3B,KAAI,sCAAgB,CAAC,GAAG,EAAE,qBAAW,CAAC,KAAK;EAAE;;;;;YAQlC,IAAI,EAAE,UAAc;YACN,uBAAvB,IAAI,iBAAa,UAAI,gBAAK,mBAAa,QAAQ,aAAC,IAAI,EAAC,UAAI,GAAG,UAAU;IAAC;aAEtD,WAAuB;AAC1C,YAAO,YAAW,IACV,CAAC,kCACY,CAAC,UAAI,KAClB,CAAC,wBACY,CAAC,mBAAa;IACrC;qBAGI,IAAI,EAAE,mBAA+B,EAAE,UAAc,EAAE,OAAY;AACrE,iCAAK,IAAI,iBAAa,UAAI,IAAG;AAC3B,cAAO,oBAAmB,IAClB,CAAC,yCACY,CAAC,UAAI;aACrB;AACL,2BAAmB,IACX,CAAC,kCACY,CAAC,UAAI,KAClB,CAAC;AACT,2BAAa,iBAAiB,aAC1B,IAAI,EAAC,UAAI,GAAG,mBAAmB,EAAE,UAAU,EAAE,OAAO;AACxD,cAAO,oBAAmB;;IAE9B;;qDA5B4B,GAAI,EAAO,YAAa;IAAxB,UAAI,GAAJ,GAAI;IAAO,mBAAa,GAAb,YAAa;;EAAC","file":"map_matchers.ddc.js"}');
  // Exports:
  return {
    src__map_matchers: src__map_matchers
  };
});

//# sourceMappingURL=map_matchers.ddc.js.map
