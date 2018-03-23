define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const matcher = Object.create(_root);
  dart.trackLibraries("packages/matcher/matcher.ddc", {
    "package:matcher/matcher.dart": matcher
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"matcher.ddc.js"}');
  // Exports:
  return {
    matcher: matcher
  };
});

//# sourceMappingURL=matcher.ddc.js.map
