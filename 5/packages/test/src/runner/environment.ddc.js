define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__runner__environment = Object.create(_root);
  src__runner__environment.Environment = class Environment extends core.Object {};
  (src__runner__environment.Environment.new = function() {
  }).prototype = src__runner__environment.Environment.prototype;
  dart.addTypeTests(src__runner__environment.Environment);
  dart.trackLibraries("packages/test/src/runner/environment.ddc", {
    "package:test/src/runner/environment.dart": src__runner__environment
  }, '{"version":3,"sourceRoot":"","sources":["environment.dart"],"names":[],"mappings":";;;;;;;;;EAkCA","file":"environment.ddc.js"}');
  // Exports:
  return {
    src__runner__environment: src__runner__environment
  };
});

//# sourceMappingURL=environment.ddc.js.map
