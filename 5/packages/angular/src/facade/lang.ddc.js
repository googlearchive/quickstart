define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__facade__lang = Object.create(_root);
  const $substring = dartx.substring;
  const $add = dartx.add;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let StringAndRegExpToListOfString = () => (StringAndRegExpToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.String, core.RegExp])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  src__facade__lang.jsSplit = function(s, regExp) {
    let parts = JSArrayOfString().of([]);
    let lastEnd = 0;
    for (let match of regExp.allMatches(s)) {
      parts[$add](s[$substring](lastEnd, match.start));
      lastEnd = match.end;
      for (let i = 0, len = match.groupCount; i < dart.notNull(len); i++) {
        parts[$add](match.group(i + 1));
      }
    }
    parts[$add](s[$substring](lastEnd));
    return parts;
  };
  dart.fn(src__facade__lang.jsSplit, StringAndRegExpToListOfString());
  src__facade__lang.isPrimitive = function(obj) {
    return typeof obj == 'number' || typeof obj == 'boolean' || obj == null || typeof obj == 'string';
  };
  dart.fn(src__facade__lang.isPrimitive, ObjectTobool());
  dart.trackLibraries("packages/angular/src/facade/lang.ddc", {
    "package:angular/src/facade/lang.dart": src__facade__lang
  }, '{"version":3,"sourceRoot":"","sources":["lang.dart"],"names":[],"mappings":";;;;;;;;;;;;;;uCAGqB,CAAQ,EAAE,MAAa;AAC1C,QAAI,QAAQ;AACZ,QAAI,UAAU;AACd,aAAS,QAAS,OAAM,WAAW,CAAC,CAAC,GAAG;AACtC,WAAK,MAAI,CAAC,CAAC,YAAU,CAAC,OAAO,EAAE,KAAK,MAAM;AAC1C,aAAO,GAAG,KAAK,IAAI;AACnB,eAAS,IAAI,GAAG,MAAM,KAAK,WAAW,EAAE,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AACpD,aAAK,MAAI,CAAC,KAAK,MAAM,CAAC,AAAE,CAAD,GAAG;;;AAG9B,SAAK,MAAI,CAAC,CAAC,YAAU,CAAC,OAAO;AAC7B,UAAO,MAAK;EACd;;2CAEiB,GAAU;UACkB,QAAzC,GAAG,uBAAW,GAAG,iBAAY,GAAG,IAAI,eAAQ,GAAG;EAAU","file":"lang.ddc.js"}');
  // Exports:
  return {
    src__facade__lang: src__facade__lang
  };
});

//# sourceMappingURL=lang.ddc.js.map
