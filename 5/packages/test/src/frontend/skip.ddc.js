define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__frontend__skip = Object.create(_root);
  src__frontend__skip.Skip = class Skip extends core.Object {
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (src__frontend__skip.Skip.new = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$] = reason;
  }).prototype = src__frontend__skip.Skip.prototype;
  dart.addTypeTests(src__frontend__skip.Skip);
  const reason$ = Symbol("Skip.reason");
  dart.setFieldSignature(src__frontend__skip.Skip, () => ({
    __proto__: dart.getFields(src__frontend__skip.Skip.__proto__),
    reason: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/test/src/frontend/skip.ddc", {
    "package:test/src/frontend/skip.dart": src__frontend__skip
  }, '{"version":3,"sourceRoot":"","sources":["skip.dart"],"names":[],"mappings":";;;;;;;;IAOe;;;;;;;2CAMD,MAAW;2BAAN;iBAAM,GAAN,MAAM;EAAE","file":"skip.ddc.js"}');
  // Exports:
  return {
    src__frontend__skip: src__frontend__skip
  };
});

//# sourceMappingURL=skip.ddc.js.map
