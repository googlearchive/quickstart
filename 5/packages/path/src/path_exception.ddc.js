define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__path_exception = Object.create(_root);
  src__path_exception.PathException = class PathException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
    toString() {
      return dart.str`PathException: ${this.message}`;
    }
  };
  (src__path_exception.PathException.new = function(message) {
    this[message$] = message;
  }).prototype = src__path_exception.PathException.prototype;
  dart.addTypeTests(src__path_exception.PathException);
  const message$ = Symbol("PathException.message");
  src__path_exception.PathException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__path_exception.PathException, () => ({
    __proto__: dart.getFields(src__path_exception.PathException.__proto__),
    message: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(src__path_exception.PathException, ['toString']);
  dart.trackLibraries("packages/path/src/path_exception.ddc", {
    "package:path/src/path_exception.dart": src__path_exception
  }, '{"version":3,"sourceRoot":"","sources":["path_exception.dart"],"names":[],"mappings":";;;;;;;;IAOS;;;;;;;YAIc,2BAAiB,YAAO;IAAC;;oDAFhC,OAAY;IAAP,cAAO,GAAP,OAAO;EAAC","file":"path_exception.ddc.js"}');
  // Exports:
  return {
    src__path_exception: src__path_exception
  };
});

//# sourceMappingURL=path_exception.ddc.js.map
