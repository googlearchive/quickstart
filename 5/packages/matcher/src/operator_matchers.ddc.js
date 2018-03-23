define(['dart_sdk', 'packages/matcher/src/core_matchers', 'packages/matcher/src/interfaces'], function(dart_sdk, core_matchers, interfaces) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__util = core_matchers.src__util;
  const src__interfaces = interfaces.src__interfaces;
  const _root = Object.create(null);
  const src__operator_matchers = Object.create(_root);
  const $_get = dartx._get;
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $map = dartx.map;
  let dynamicToMatcher = () => (dynamicToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic])))();
  let dynamic__ToMatcher = () => (dynamic__ToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic], [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  let ListOfMatcher = () => (ListOfMatcher = dart.constFn(core.List$(src__interfaces.Matcher)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let dynamicAnddynamicAnddynamic__ToListOfMatcher = () => (dynamicAnddynamicAnddynamic__ToListOfMatcher = dart.constFn(dart.fnType(ListOfMatcher(), [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])))();
  src__operator_matchers.isNot = function(matcher) {
    return new src__operator_matchers._IsNot.new(src__util.wrapMatcher(matcher));
  };
  dart.fn(src__operator_matchers.isNot, dynamicToMatcher());
  const _matcher = Symbol('_matcher');
  src__operator_matchers._IsNot = class _IsNot extends src__interfaces.Matcher {
    matches(item, matchState) {
      return !dart.test(this[_matcher].matches(item, matchState));
    }
    describe(description) {
      return description.add('not ').addDescriptionOf(this[_matcher]);
    }
  };
  (src__operator_matchers._IsNot.new = function(matcher) {
    this[_matcher] = matcher;
    src__operator_matchers._IsNot.__proto__.new.call(this);
  }).prototype = src__operator_matchers._IsNot.prototype;
  dart.addTypeTests(src__operator_matchers._IsNot);
  dart.setMethodSignature(src__operator_matchers._IsNot, () => ({
    __proto__: dart.getMethods(src__operator_matchers._IsNot.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__operator_matchers._IsNot, () => ({
    __proto__: dart.getFields(src__operator_matchers._IsNot.__proto__),
    [_matcher]: dart.finalFieldType(src__interfaces.Matcher)
  }));
  src__operator_matchers.allOf = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    return new src__operator_matchers._AllOf.new(src__operator_matchers._wrapArgs(arg0, arg1, arg2, arg3, arg4, arg5, arg6));
  };
  dart.fn(src__operator_matchers.allOf, dynamic__ToMatcher());
  const _matchers = Symbol('_matchers');
  src__operator_matchers._AllOf = class _AllOf extends src__interfaces.Matcher {
    matches(item, matchState) {
      for (let matcher of this[_matchers]) {
        if (!dart.test(matcher.matches(item, matchState))) {
          src__util.addStateInfo(matchState, new _js_helper.LinkedMap.from(['matcher', matcher]));
          return false;
        }
      }
      return true;
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      let matcher = matchState[$_get]('matcher');
      dart.dsend(matcher, 'describeMismatch', item, mismatchDescription, matchState[$_get]('state'), verbose);
      return mismatchDescription;
    }
    describe(description) {
      return description.addAll('(', ' and ', ')', this[_matchers]);
    }
  };
  (src__operator_matchers._AllOf.new = function(matchers) {
    this[_matchers] = matchers;
    src__operator_matchers._AllOf.__proto__.new.call(this);
  }).prototype = src__operator_matchers._AllOf.prototype;
  dart.addTypeTests(src__operator_matchers._AllOf);
  dart.setMethodSignature(src__operator_matchers._AllOf, () => ({
    __proto__: dart.getMethods(src__operator_matchers._AllOf.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__operator_matchers._AllOf, () => ({
    __proto__: dart.getFields(src__operator_matchers._AllOf.__proto__),
    [_matchers]: dart.finalFieldType(ListOfMatcher())
  }));
  src__operator_matchers.anyOf = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    if (arg1 === void 0) arg1 = null;
    if (arg2 === void 0) arg2 = null;
    if (arg3 === void 0) arg3 = null;
    if (arg4 === void 0) arg4 = null;
    if (arg5 === void 0) arg5 = null;
    if (arg6 === void 0) arg6 = null;
    return new src__operator_matchers._AnyOf.new(src__operator_matchers._wrapArgs(arg0, arg1, arg2, arg3, arg4, arg5, arg6));
  };
  dart.fn(src__operator_matchers.anyOf, dynamic__ToMatcher());
  src__operator_matchers._AnyOf = class _AnyOf extends src__interfaces.Matcher {
    matches(item, matchState) {
      for (let matcher of this[_matchers]) {
        if (dart.test(matcher.matches(item, matchState))) {
          return true;
        }
      }
      return false;
    }
    describe(description) {
      return description.addAll('(', ' or ', ')', this[_matchers]);
    }
  };
  (src__operator_matchers._AnyOf.new = function(matchers) {
    this[_matchers] = matchers;
    src__operator_matchers._AnyOf.__proto__.new.call(this);
  }).prototype = src__operator_matchers._AnyOf.prototype;
  dart.addTypeTests(src__operator_matchers._AnyOf);
  dart.setMethodSignature(src__operator_matchers._AnyOf, () => ({
    __proto__: dart.getMethods(src__operator_matchers._AnyOf.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__operator_matchers._AnyOf, () => ({
    __proto__: dart.getFields(src__operator_matchers._AnyOf.__proto__),
    [_matchers]: dart.finalFieldType(ListOfMatcher())
  }));
  src__operator_matchers._wrapArgs = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    let args = null;
    if (core.List.is(arg0)) {
      if (arg1 != null || arg2 != null || arg3 != null || arg4 != null || arg5 != null || arg6 != null) {
        dart.throw(new core.ArgumentError.new('If arg0 is a List, all other arguments must be' + ' null.'));
      }
      args = arg0;
    } else {
      args = [arg0, arg1, arg2, arg3, arg4, arg5, arg6][$where](dart.fn(e => e != null, dynamicTobool()));
    }
    return args[$map](src__interfaces.Matcher, dart.fn(e => src__util.wrapMatcher(e), dynamicToMatcher()))[$toList]();
  };
  dart.fn(src__operator_matchers._wrapArgs, dynamicAnddynamicAnddynamic__ToListOfMatcher());
  dart.trackLibraries("packages/matcher/src/operator_matchers.ddc", {
    "package:matcher/src/operator_matchers.dart": src__operator_matchers
  }, '{"version":3,"sourceRoot":"","sources":["operator_matchers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;0CAQc,OAAO;UAAK,KAAI,iCAAM,CAAC,qBAAW,CAAC,OAAO;EAAE;;;;YAO3C,IAAI,EAAE,UAAc;YAAK,YAAC,cAAQ,QAAQ,CAAC,IAAI,EAAE,UAAU;IAAC;aAEpD,WAAuB;YACxC,YAAW,IAAI,CAAC,wBAAwB,CAAC,cAAQ;IAAC;;gDALpC,OAAQ;IAAR,cAAQ,GAAR,OAAQ;;EAAC;;;;;;;;;;;0CAcf,IAAI,EAAG,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI;yBAAlC;yBAAM;yBAAM;yBAAM;yBAAM;yBAAM;AACjD,UAAO,KAAI,iCAAM,CAAC,gCAAS,CAAC,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI;EACtE;;;;YAOe,IAAI,EAAE,UAAc;AAC/B,eAAS,UAAW,gBAAS,EAAE;AAC7B,uBAAK,OAAO,QAAQ,CAAC,IAAI,EAAE,UAAU,IAAG;AACtC,gCAAY,CAAC,UAAU,EAAE,+BAAC,WAAW,OAAO;AAC5C,gBAAO;;;AAGX,YAAO;IACT;qBAGI,IAAI,EAAE,mBAA+B,EAAE,UAAc,EAAE,OAAY;AACrE,UAAI,UAAU,UAAU,QAAC;AACzB,wBAAO,sBACH,IAAI,EAAE,mBAAmB,EAAE,UAAU,QAAC,UAAU,OAAO;AAC3D,YAAO,oBAAmB;IAC5B;aAEqB,WAAuB;YACxC,YAAW,OAAO,CAAC,KAAK,SAAS,KAAK,eAAS;IAAC;;gDArBlC,QAAS;IAAT,eAAS,GAAT,QAAS;;EAAC;;;;;;;;;;;0CAkChB,IAAI,EAAG,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI;yBAAlC;yBAAM;yBAAM;yBAAM;yBAAM;yBAAM;AACjD,UAAO,KAAI,iCAAM,CAAC,gCAAS,CAAC,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI;EACtE;;;YAOe,IAAI,EAAE,UAAc;AAC/B,eAAS,UAAW,gBAAS,EAAE;AAC7B,sBAAI,OAAO,QAAQ,CAAC,IAAI,EAAE,UAAU,IAAG;AACrC,gBAAO;;;AAGX,YAAO;IACT;aAEqB,WAAuB;YACxC,YAAW,OAAO,CAAC,KAAK,QAAQ,KAAK,eAAS;IAAC;;gDAZjC,QAAS;IAAT,eAAS,GAAT,QAAS;;EAAC;;;;;;;;;;;8CAeN,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI;AAC9D,QAAS;AACT,qBAAI,IAAI,GAAU;AAChB,UAAI,IAAI,IAAI,QACR,IAAI,IAAI,QACR,IAAI,IAAI,QACR,IAAI,IAAI,QACR,IAAI,IAAI,QACR,IAAI,IAAI,MAAM;AAChB,mBAAM,IAAI,sBAAa,CAAC,mDACpB;;AAGN,UAAI,GAAG,IAAI;WACN;AACL,UAAI,GAAG,CAAC,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI,SAAO,CAAC,QAAC,CAAC,IAAK,CAAC,IAAI;;AAGtE,UAAO,KAAI,MAAI,0BAAC,QAAC,CAAC,IAAK,qBAAW,CAAC,CAAC,gCAAS;EAC/C","file":"operator_matchers.ddc.js"}');
  // Exports:
  return {
    src__operator_matchers: src__operator_matchers
  };
});

//# sourceMappingURL=operator_matchers.ddc.js.map
