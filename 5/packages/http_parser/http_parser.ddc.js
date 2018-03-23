define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const http_parser = Object.create(_root);
  dart.trackLibraries("packages/http_parser/http_parser.ddc", {
    "package:http_parser/http_parser.dart": http_parser
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"http_parser.ddc.js"}');
  // Exports:
  return {
    http_parser: http_parser
  };
});

//# sourceMappingURL=http_parser.ddc.js.map
