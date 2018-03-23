define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  const $codeUnitAt = dartx.codeUnitAt;
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let StringAndintTobool = () => (StringAndintTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.int])))();
  src__utils.isAlphabetic = function(char) {
    return dart.notNull(char) >= 65 && dart.notNull(char) <= 90 || dart.notNull(char) >= 97 && dart.notNull(char) <= 122;
  };
  dart.fn(src__utils.isAlphabetic, intTobool());
  src__utils.isNumeric = function(char) {
    return dart.notNull(char) >= 48 && dart.notNull(char) <= 57;
  };
  dart.fn(src__utils.isNumeric, intTobool());
  src__utils.isDriveLetter = function(path, index) {
    if (path.length < dart.notNull(index) + 2) return false;
    if (!dart.test(src__utils.isAlphabetic(path[$codeUnitAt](index)))) return false;
    if (path[$codeUnitAt](dart.notNull(index) + 1) !== 58) return false;
    if (path.length === dart.notNull(index) + 2) return true;
    return path[$codeUnitAt](dart.notNull(index) + 2) === 47;
  };
  dart.fn(src__utils.isDriveLetter, StringAndintTobool());
  dart.trackLibraries("packages/path/src/utils.ddc", {
    "package:path/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;qCAQkB,IAAQ;UAChB,AAA2C,cAAhD,IAAI,KAAU,EAAO,IAAS,aAAL,IAAI,KAAU,EAAO,IACzC,aAAL,IAAI,KAAU,EAAO,IAAS,aAAL,IAAI,KAAU,GAAO;EAAC;;kCAGrC,IAAQ;UAAU,AAAc,cAAnB,IAAI,KAAU,EAAI,IAAS,aAAL,IAAI,KAAU,EAAI;;;sCAIjD,IAAW,EAAE,KAAS;AACvC,QAAI,AAAY,IAAR,OAAO,GAAS,aAAN,KAAK,IAAG,GAAG,MAAO;AACpC,mBAAK,uBAAY,CAAC,IAAI,aAAW,CAAC,KAAK,KAAI,MAAO;AAClD,QAAI,IAAI,aAAW,CAAO,aAAN,KAAK,IAAG,OAAY,EAAK,EAAE,MAAO;AACtD,QAAI,IAAI,OAAO,KAAU,aAAN,KAAK,IAAG,GAAG,MAAO;AACrC,UAAO,KAAI,aAAW,CAAO,aAAN,KAAK,IAAG,OAAY,EAAK;EAClD","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
