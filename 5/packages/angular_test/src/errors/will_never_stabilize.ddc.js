define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__errors__will_never_stabilize = Object.create(_root);
  src__errors__will_never_stabilize.WillNeverStabilizeError = class WillNeverStabilizeError extends core.Error {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    toString() {
      return dart.str`Failed to stabilize after ${this.threshold} attempts`;
    }
  };
  (src__errors__will_never_stabilize.WillNeverStabilizeError.new = function(threshold) {
    this[threshold$] = threshold;
    src__errors__will_never_stabilize.WillNeverStabilizeError.__proto__.new.call(this);
  }).prototype = src__errors__will_never_stabilize.WillNeverStabilizeError.prototype;
  dart.addTypeTests(src__errors__will_never_stabilize.WillNeverStabilizeError);
  const threshold$ = Symbol("WillNeverStabilizeError.threshold");
  dart.setFieldSignature(src__errors__will_never_stabilize.WillNeverStabilizeError, () => ({
    __proto__: dart.getFields(src__errors__will_never_stabilize.WillNeverStabilizeError.__proto__),
    threshold: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__errors__will_never_stabilize.WillNeverStabilizeError, ['toString']);
  dart.trackLibraries("packages/angular_test/src/errors/will_never_stabilize.ddc", {
    "package:angular_test/src/errors/will_never_stabilize.dart": src__errors__will_never_stabilize
  }, '{"version":3,"sourceRoot":"","sources":["will_never_stabilize.dart"],"names":[],"mappings":";;;;;;;;IAMY;;;;;;;YAKW,sCAA4B,cAAS;IAAU;;4EAH5C,SAAc;IAAT,gBAAS,GAAT,SAAS;;EAAC","file":"will_never_stabilize.ddc.js"}');
  // Exports:
  return {
    src__errors__will_never_stabilize: src__errors__will_never_stabilize
  };
});

//# sourceMappingURL=will_never_stabilize.ddc.js.map
