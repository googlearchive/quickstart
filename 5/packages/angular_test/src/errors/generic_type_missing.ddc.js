define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__errors__generic_type_missing = Object.create(_root);
  src__errors__generic_type_missing.GenericTypeMissingError = class GenericTypeMissingError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      if (this.message == null) {
        return 'Generic type required';
      }
      return dart.str`Generic type required: ${this.message}`;
    }
  };
  (src__errors__generic_type_missing.GenericTypeMissingError.new = function(message) {
    if (message === void 0) message = null;
    this[message$] = message;
    src__errors__generic_type_missing.GenericTypeMissingError.__proto__.new.call(this);
  }).prototype = src__errors__generic_type_missing.GenericTypeMissingError.prototype;
  dart.addTypeTests(src__errors__generic_type_missing.GenericTypeMissingError);
  const message$ = Symbol("GenericTypeMissingError.message");
  dart.setFieldSignature(src__errors__generic_type_missing.GenericTypeMissingError, () => ({
    __proto__: dart.getFields(src__errors__generic_type_missing.GenericTypeMissingError.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__errors__generic_type_missing.GenericTypeMissingError, ['toString']);
  dart.trackLibraries("packages/angular_test/src/errors/generic_type_missing.ddc", {
    "package:angular_test/src/errors/generic_type_missing.dart": src__errors__generic_type_missing
  }, '{"version":3,"sourceRoot":"","sources":["generic_type_missing.dart"],"names":[],"mappings":";;;;;;;;IAMe;;;;;;;AAMX,UAAI,YAAO,IAAI,MAAM;AACnB,cAAO;;AAET,YAAO,mCAAyB,YAAO;IACzC;;4EARyB,OAAY;4BAAP;kBAAO,GAAP,OAAO;;EAAE","file":"generic_type_missing.ddc.js"}');
  // Exports:
  return {
    src__errors__generic_type_missing: src__errors__generic_type_missing
  };
});

//# sourceMappingURL=generic_type_missing.ddc.js.map
