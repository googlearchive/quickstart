define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  const $length = dartx.length;
  const $first = dartx.first;
  const $last = dartx.last;
  const $truncate = dartx.truncate;
  const $_get = dartx._get;
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let ListAndFnToint = () => (ListAndFnToint = dart.constFn(dart.fnType(core.int, [core.List, dynamicTobool()])))();
  src__utils.binarySearch = function(list, matches) {
    if (list[$length] === 0) return -1;
    if (dart.test(dart.dcall(matches, list[$first]))) return 0;
    if (!dart.test(dart.dcall(matches, list[$last]))) return list[$length];
    let min = 0;
    let max = dart.notNull(list[$length]) - 1;
    while (min < max) {
      let half = min + ((max - min) / 2)[$truncate]();
      if (dart.test(dart.dcall(matches, list[$_get](half)))) {
        max = half;
      } else {
        min = half + 1;
      }
    }
    return max;
  };
  dart.fn(src__utils.binarySearch, ListAndFnToint());
  dart.trackLibraries("packages/source_maps/src/utils.ddc", {
    "package:source_maps/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;qCAYiB,IAAS,EAAE,OAAkB;AAC5C,QAAI,IAAI,SAAO,KAAI,GAAG,MAAO,EAAC;AAC9B,6BAAI,OAAO,EAAC,IAAI,QAAM,IAAG,MAAO;AAChC,8BAAK,OAAO,EAAC,IAAI,OAAK,IAAG,MAAO,KAAI,SAAO;AAE3C,QAAI,MAAM;AACV,QAAI,MAAkB,aAAZ,IAAI,SAAO,IAAG;AACxB,WAAO,AAAI,GAAD,GAAG,GAAG,EAAE;AAChB,UAAI,OAAO,AAAI,GAAD,GAAgB,CApBlC,CAoBuB,AAAI,GAAD,GAAG,GAAG,IAAK;AACjC,+BAAI,OAAO,EAAC,IAAI,QAAC,IAAI,KAAI;AACvB,WAAG,GAAG,IAAI;aACL;AACL,WAAG,GAAG,AAAK,IAAD,GAAG;;;AAGjB,UAAO,IAAG;EACZ","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
