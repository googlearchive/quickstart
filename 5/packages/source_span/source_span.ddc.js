define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const source_span = Object.create(_root);
  dart.trackLibraries("packages/source_span/source_span.ddc", {
    "package:source_span/source_span.dart": source_span
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"source_span.ddc.js"}');
  // Exports:
  return {
    source_span: source_span
  };
});

//# sourceMappingURL=source_span.ddc.js.map
