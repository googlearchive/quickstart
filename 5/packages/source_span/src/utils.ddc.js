define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  const $compareTo = dartx.compareTo;
  const $indexOf = dartx.indexOf;
  const $lastIndexOf = dartx.lastIndexOf;
  let ComparableAndComparableToComparable = () => (ComparableAndComparableToComparable = dart.constFn(dart.fnType(core.Comparable, [core.Comparable, core.Comparable])))();
  let StringAndStringAndintToint = () => (StringAndStringAndintToint = dart.constFn(dart.fnType(core.int, [core.String, core.String, core.int])))();
  src__utils.min = function(obj1, obj2) {
    return dart.notNull(obj1[$compareTo](obj2)) > 0 ? obj2 : obj1;
  };
  dart.fn(src__utils.min, ComparableAndComparableToComparable());
  src__utils.max = function(obj1, obj2) {
    return dart.notNull(obj1[$compareTo](obj2)) > 0 ? obj1 : obj2;
  };
  dart.fn(src__utils.max, ComparableAndComparableToComparable());
  src__utils.findLineStart = function(context, text, column) {
    let isEmpty = text === '';
    let index = context[$indexOf](text);
    while (index !== -1) {
      let lineStart = context[$lastIndexOf]('\n', index) + 1;
      let textColumn = index - lineStart;
      if (column === textColumn || isEmpty && column === textColumn + 1) {
        return lineStart;
      }
      index = context[$indexOf](text, index + 1);
    }
    return null;
  };
  dart.fn(src__utils.findLineStart, StringAndStringAndintToint());
  dart.trackLibraries("packages/source_span/src/utils.ddc", {
    "package:source_span/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;4BAMe,IAAe,EAAE,IAAe;UAC3C,AAAqB,cAArB,IAAI,YAAU,CAAC,IAAI,KAAI,IAAI,IAAI,GAAG,IAAI;;;4BAI3B,IAAe,EAAE,IAAe;UAC3C,AAAqB,cAArB,IAAI,YAAU,CAAC,IAAI,KAAI,IAAI,IAAI,GAAG,IAAI;;;sCAMxB,OAAc,EAAE,IAAW,EAAE,MAAU;AACvD,QAAI,UAAU,IAAI,KAAI;AACtB,QAAI,QAAQ,OAAO,UAAQ,CAAC,IAAI;AAChC,WAAO,KAAK,KAAI,CAAC,GAAG;AAClB,UAAI,YAAY,AAAiC,OAA1B,cAAY,CAAC,MAAM,KAAK,IAAI;AACnD,UAAI,aAAa,AAAM,KAAD,GAAG,SAAS;AAClC,UAAI,MAAM,KAAI,UAAU,IAAK,OAAO,IAAI,MAAM,KAAI,AAAW,UAAD,GAAG,GAAI;AACjE,cAAO,UAAS;;AAElB,WAAK,GAAG,OAAO,UAAQ,CAAC,IAAI,EAAE,AAAM,KAAD,GAAG;;AAExC,UAAO;EACT","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
