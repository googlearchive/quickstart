define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const source_maps = Object.create(_root);
  dart.trackLibraries("packages/source_maps/source_maps.ddc", {
    "package:source_maps/source_maps.dart": source_maps
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"source_maps.ddc.js"}');
  // Exports:
  return {
    source_maps: source_maps
  };
});

//# sourceMappingURL=source_maps.ddc.js.map
