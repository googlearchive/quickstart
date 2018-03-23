define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__runner__reporter = Object.create(_root);
  src__runner__reporter.Reporter = class Reporter extends core.Object {};
  (src__runner__reporter.Reporter.new = function() {
  }).prototype = src__runner__reporter.Reporter.prototype;
  dart.addTypeTests(src__runner__reporter.Reporter);
  dart.trackLibraries("packages/test/src/runner/reporter.ddc", {
    "package:test/src/runner/reporter.dart": src__runner__reporter
  }, '{"version":3,"sourceRoot":"","sources":["reporter.dart"],"names":[],"mappings":";;;;;;;;;EAwBA","file":"reporter.ddc.js"}');
  // Exports:
  return {
    src__runner__reporter: src__runner__reporter
  };
});

//# sourceMappingURL=reporter.ddc.js.map
