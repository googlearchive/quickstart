define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__frontend__utils = Object.create(_root);
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let __ToFuture = () => (__ToFuture = dart.constFn(dart.fnType(async.Future, [], {times: core.int})))();
  src__frontend__utils.pumpEventQueue = function(opts) {
    let times = opts && 'times' in opts ? opts.times : null;
    let t = times;
    t == null ? times = 20 : t;
    if (times === 0) return async.Future.value();
    return async.Future.new(dart.fn(() => src__frontend__utils.pumpEventQueue({times: dart.notNull(times) - 1}), VoidToFuture()));
  };
  dart.fn(src__frontend__utils.pumpEventQueue, __ToFuture());
  dart.trackLibraries("packages/test/src/frontend/utils.ddc", {
    "package:test/src/frontend/utils.dart": src__frontend__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;QAa2B;AACzB,iBAAK;gBAAL,KAAK,GAAK;AACV,QAAI,KAAK,KAAI,GAAG,MAAO,AAAI,mBAAY;AAKvC,UAAO,AAAI,iBAAM,CAAC,cAAM,mCAAc,SAAc,aAAN,KAAK,IAAG;EACxD","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__frontend__utils: src__frontend__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
