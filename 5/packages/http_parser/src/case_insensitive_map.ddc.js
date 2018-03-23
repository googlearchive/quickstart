define(['dart_sdk', 'packages/collection/src/canonicalized_map'], function(dart_sdk, canonicalized_map) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__canonicalized_map = canonicalized_map.src__canonicalized_map;
  const _root = Object.create(null);
  const src__case_insensitive_map = Object.create(_root);
  const $toLowerCase = dartx.toLowerCase;
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  const _is_CaseInsensitiveMap_default = Symbol('_is_CaseInsensitiveMap_default');
  src__case_insensitive_map.CaseInsensitiveMap$ = dart.generic(V => {
    class CaseInsensitiveMap extends src__canonicalized_map.CanonicalizedMap$(core.String, core.String, V) {}
    (CaseInsensitiveMap.new = function() {
      CaseInsensitiveMap.__proto__.new.call(this, dart.fn(key => key[$toLowerCase](), StringToString()), {isValidKey: dart.fn(key => key != null, ObjectTobool())});
    }).prototype = CaseInsensitiveMap.prototype;
    (CaseInsensitiveMap.from = function(other) {
      CaseInsensitiveMap.__proto__.from.call(this, other, dart.fn(key => key[$toLowerCase](), StringToString()), {isValidKey: dart.fn(key => key != null, ObjectTobool())});
    }).prototype = CaseInsensitiveMap.prototype;
    dart.addTypeTests(CaseInsensitiveMap);
    CaseInsensitiveMap.prototype[_is_CaseInsensitiveMap_default] = true;
    return CaseInsensitiveMap;
  });
  src__case_insensitive_map.CaseInsensitiveMap = src__case_insensitive_map.CaseInsensitiveMap$();
  dart.addTypeTests(src__case_insensitive_map.CaseInsensitiveMap, _is_CaseInsensitiveMap_default);
  dart.trackLibraries("packages/http_parser/src/case_insensitive_map.ddc", {
    "package:http_parser/src/case_insensitive_map.dart": src__case_insensitive_map
  }, '{"version":3,"sourceRoot":"","sources":["case_insensitive_map.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;AAWQ,kDAAM,QAAC,GAAG,IAAK,GAAG,cAAY,oCAAgB,QAAC,GAAG,IAAK,GAAG,IAAI;IAAK;wCAEjD,KAAoB;AACtC,mDAAW,KAAK,EAAE,QAAC,GAAG,IAAK,GAAG,cAAY,oCAC1B,QAAC,GAAG,IAAK,GAAG,IAAI;IAAK","file":"case_insensitive_map.ddc.js"}');
  // Exports:
  return {
    src__case_insensitive_map: src__case_insensitive_map
  };
});

//# sourceMappingURL=case_insensitive_map.ddc.js.map
