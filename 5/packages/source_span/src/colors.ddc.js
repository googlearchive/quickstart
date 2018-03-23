define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__colors = Object.create(_root);
  dart.defineLazy(src__colors, {
    /*src__colors.RED*/get RED() {
      return '[31m';
    },
    /*src__colors.YELLOW*/get YELLOW() {
      return '[33m';
    },
    /*src__colors.NONE*/get NONE() {
      return '[0m';
    }
  });
  dart.trackLibraries("packages/source_span/src/colors.ddc", {
    "package:source_span/src/colors.dart": src__colors
  }, '{"version":3,"sourceRoot":"","sources":["colors.dart"],"names":[],"mappings":";;;;;;;;MAKa,eAAG;YAAG;;MAEN,kBAAM;YAAG;;MAET,gBAAI;YAAG","file":"colors.ddc.js"}');
  // Exports:
  return {
    src__colors: src__colors
  };
});

//# sourceMappingURL=colors.ddc.js.map
