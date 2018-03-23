define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const angular = Object.create(_root);
  dart.trackLibraries("packages/angular/angular.ddc", {
    "package:angular/angular.dart": angular
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"angular.ddc.js"}');
  // Exports:
  return {
    angular: angular
  };
});

//# sourceMappingURL=angular.ddc.js.map
