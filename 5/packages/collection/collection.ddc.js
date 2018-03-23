define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const collection = Object.create(_root);
  dart.trackLibraries("packages/collection/collection.ddc", {
    "package:collection/collection.dart": collection
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"collection.ddc.js"}');
  // Exports:
  return {
    collection: collection
  };
});

//# sourceMappingURL=collection.ddc.js.map
