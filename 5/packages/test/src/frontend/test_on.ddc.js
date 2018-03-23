define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__frontend__test_on = Object.create(_root);
  src__frontend__test_on.TestOn = class TestOn extends core.Object {
    get expression() {
      return this[expression$];
    }
    set expression(value) {
      super.expression = value;
    }
  };
  (src__frontend__test_on.TestOn.new = function(expression) {
    this[expression$] = expression;
  }).prototype = src__frontend__test_on.TestOn.prototype;
  dart.addTypeTests(src__frontend__test_on.TestOn);
  const expression$ = Symbol("TestOn.expression");
  dart.setFieldSignature(src__frontend__test_on.TestOn, () => ({
    __proto__: dart.getFields(src__frontend__test_on.TestOn.__proto__),
    expression: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/test/src/frontend/test_on.ddc", {
    "package:test/src/frontend/test_on.dart": src__frontend__test_on
  }, '{"version":3,"sourceRoot":"","sources":["test_on.dart"],"names":[],"mappings":";;;;;;;;IAWe;;;;;;;gDAEA,UAAe;IAAV,iBAAU,GAAV,UAAU;EAAC","file":"test_on.ddc.js"}');
  // Exports:
  return {
    src__frontend__test_on: src__frontend__test_on
  };
});

//# sourceMappingURL=test_on.ddc.js.map
