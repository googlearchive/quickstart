define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__util__placeholder = Object.create(_root);
  src__util__placeholder._Placeholder = class _Placeholder extends core.Object {};
  (src__util__placeholder._Placeholder.new = function() {
  }).prototype = src__util__placeholder._Placeholder.prototype;
  dart.addTypeTests(src__util__placeholder._Placeholder);
  dart.defineLazy(src__util__placeholder, {
    /*src__util__placeholder.placeholder*/get placeholder() {
      return dart.const(new src__util__placeholder._Placeholder.new());
    }
  });
  dart.trackLibraries("packages/test/src/util/placeholder.ddc", {
    "package:test/src/util/placeholder.dart": src__util__placeholder
  }, '{"version":3,"sourceRoot":"","sources":["placeholder.dart"],"names":[],"mappings":";;;;;;;;;EAUsB;;;MAKhB,kCAAW;YAAG,gBAAM,uCAAY","file":"placeholder.ddc.js"}');
  // Exports:
  return {
    src__util__placeholder: src__util__placeholder
  };
});

//# sourceMappingURL=placeholder.ddc.js.map
