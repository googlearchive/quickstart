define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const package_resolver = Object.create(_root);
  dart.trackLibraries("packages/package_resolver/package_resolver.ddc", {
    "package:package_resolver/package_resolver.dart": package_resolver
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"package_resolver.ddc.js"}');
  // Exports:
  return {
    package_resolver: package_resolver
  };
});

//# sourceMappingURL=package_resolver.ddc.js.map
