define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  let StringAndMatchAndint__Tovoid = () => (StringAndMatchAndint__Tovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.Match, core.int, core.int])))();
  src__utils.validateErrorArgs = function(string, match, position, length) {
    if (match != null && (position != null || length != null)) {
      dart.throw(new core.ArgumentError.new("Can't pass both match and position/length."));
    }
    if (position != null) {
      if (dart.notNull(position) < 0) {
        dart.throw(new core.RangeError.new("position must be greater than or equal to 0."));
      } else if (dart.notNull(position) > string.length) {
        dart.throw(new core.RangeError.new("position must be less than or equal to the " + "string length."));
      }
    }
    if (length != null && dart.notNull(length) < 0) {
      dart.throw(new core.RangeError.new("length must be greater than or equal to 0."));
    }
    if (position != null && length != null && dart.notNull(position) + dart.notNull(length) > string.length) {
      dart.throw(new core.RangeError.new("position plus length must not go beyond the end of " + "the string."));
    }
  };
  dart.fn(src__utils.validateErrorArgs, StringAndMatchAndint__Tovoid());
  dart.trackLibraries("packages/string_scanner/src/utils.ddc", {
    "package:string_scanner/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;0CAKuB,MAAa,EAAE,KAAW,EAAE,QAAY,EAAE,MAAU;AACzE,QAAI,KAAK,IAAI,SAAS,QAAQ,IAAI,QAAQ,MAAM,IAAI,OAAO;AACzD,iBAAM,IAAI,sBAAa,CAAC;;AAG1B,QAAI,QAAQ,IAAI,MAAM;AACpB,UAAa,aAAT,QAAQ,IAAG,GAAG;AAChB,mBAAM,IAAI,mBAAU,CAAC;YAChB,KAAa,aAAT,QAAQ,IAAG,MAAM,OAAO,EAAE;AACnC,mBAAM,IAAI,mBAAU,CAAC,gDACjB;;;AAIR,QAAI,MAAM,IAAI,QAAe,aAAP,MAAM,IAAG,GAAG;AAChC,iBAAM,IAAI,mBAAU,CAAC;;AAGvB,QAAI,QAAQ,IAAI,QAAQ,MAAM,IAAI,QAAiB,AAAS,aAAlB,QAAQ,iBAAG,MAAM,IAAG,MAAM,OAAO,EAAE;AAC3E,iBAAM,IAAI,mBAAU,CAAC,wDACjB;;EAER","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
