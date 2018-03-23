define(['dart_sdk', 'packages/term_glyph/src/generated'], function(dart_sdk, generated) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__generated = generated.src__generated;
  const _root = Object.create(null);
  const term_glyph = Object.create(_root);
  let StringAndStringToString = () => (StringAndStringToString = dart.constFn(dart.fnType(core.String, [core.String, core.String])))();
  term_glyph.glyphOrAscii = function(glyph, alternative) {
    return dart.test(src__generated.ascii) ? alternative : glyph;
  };
  dart.fn(term_glyph.glyphOrAscii, StringAndStringToString());
  dart.trackLibraries("packages/term_glyph/term_glyph.ddc", {
    "package:term_glyph/term_glyph.dart": term_glyph
  }, '{"version":3,"sourceRoot":"","sources":["term_glyph.dart"],"names":[],"mappings":";;;;;;;;;qCAUoB,KAAY,EAAE,WAAkB;qBAChD,oBAAK,IAAG,WAAW,GAAG,KAAK","file":"term_glyph.ddc.js"}');
  // Exports:
  return {
    term_glyph: term_glyph
  };
});

//# sourceMappingURL=term_glyph.ddc.js.map
