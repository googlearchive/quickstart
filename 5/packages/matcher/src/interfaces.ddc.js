define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__interfaces = Object.create(_root);
  src__interfaces.Description = class Description extends core.Object {};
  (src__interfaces.Description.new = function() {
  }).prototype = src__interfaces.Description.prototype;
  dart.addTypeTests(src__interfaces.Description);
  src__interfaces.Matcher = class Matcher extends core.Object {
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      return mismatchDescription;
    }
  };
  (src__interfaces.Matcher.new = function() {
  }).prototype = src__interfaces.Matcher.prototype;
  dart.addTypeTests(src__interfaces.Matcher);
  dart.setMethodSignature(src__interfaces.Matcher, () => ({
    __proto__: dart.getMethods(src__interfaces.Matcher.__proto__),
    describeMismatch: dart.fnType(src__interfaces.Description, [dart.dynamic, src__interfaces.Description, core.Map, core.bool])
  }));
  dart.trackLibraries("packages/matcher/src/interfaces.ddc", {
    "package:matcher/src/interfaces.dart": src__interfaces
  }, '{"version":3,"sourceRoot":"","sources":["interfaces.dart"],"names":[],"mappings":";;;;;;;;;EA2BA;;;qBA4B+B,IAAI,EAAE,mBAA+B,EAC1D,UAAc,EAAE,OAAY;YAChC,oBAAmB;;;;EArBR","file":"interfaces.ddc.js"}');
  // Exports:
  return {
    src__interfaces: src__interfaces
  };
});

//# sourceMappingURL=interfaces.ddc.js.map
