define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__boundary_characters = Object.create(_root);
  dart.defineLazy(src__boundary_characters, {
    /*src__boundary_characters.BOUNDARY_CHARACTERS*/get BOUNDARY_CHARACTERS() {
      return dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    }
  });
  dart.trackLibraries("packages/http/src/boundary_characters.ddc", {
    "package:http/src/boundary_characters.dart": src__boundary_characters
  }, '{"version":3,"sourceRoot":"","sources":["boundary_characters.dart"],"names":[],"mappings":";;;;;;;;MAWgB,4CAAmB;YAAG,iBACpC,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IACpD,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IACxE,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,IAAI,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KACtE,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KAAK,KACtE","file":"boundary_characters.ddc.js"}');
  // Exports:
  return {
    src__boundary_characters: src__boundary_characters
  };
});

//# sourceMappingURL=boundary_characters.ddc.js.map
