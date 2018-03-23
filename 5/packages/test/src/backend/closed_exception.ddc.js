define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__backend__closed_exception = Object.create(_root);
  src__backend__closed_exception.ClosedException = class ClosedException extends core.Object {
    toString() {
      return "This test has been closed.";
    }
  };
  (src__backend__closed_exception.ClosedException.new = function() {
  }).prototype = src__backend__closed_exception.ClosedException.prototype;
  dart.addTypeTests(src__backend__closed_exception.ClosedException);
  src__backend__closed_exception.ClosedException[dart.implements] = () => [core.Exception];
  dart.defineExtensionMethods(src__backend__closed_exception.ClosedException, ['toString']);
  dart.trackLibraries("packages/test/src/backend/closed_exception.ddc", {
    "package:test/src/backend/closed_exception.dart": src__backend__closed_exception
  }, '{"version":3,"sourceRoot":"","sources":["closed_exception.dart"],"names":[],"mappings":";;;;;;;;;YASuB;IAA4B;;;EAFhC","file":"closed_exception.ddc.js"}');
  // Exports:
  return {
    src__backend__closed_exception: src__backend__closed_exception
  };
});

//# sourceMappingURL=closed_exception.ddc.js.map
