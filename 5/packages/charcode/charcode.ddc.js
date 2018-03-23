define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const charcode = Object.create(_root);
  dart.trackLibraries("packages/charcode/charcode.ddc", {
    "package:charcode/charcode.dart": charcode
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"charcode.ddc.js"}');
  // Exports:
  return {
    charcode: charcode
  };
});

//# sourceMappingURL=charcode.ddc.js.map
