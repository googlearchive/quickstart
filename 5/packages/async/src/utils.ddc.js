define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  src__utils.UnaryFunction$ = dart.generic((E, F) => {
    const UnaryFunction = dart.typedef('UnaryFunction', () => dart.fnType(F, [E]));
    return UnaryFunction;
  });
  src__utils.UnaryFunction = src__utils.UnaryFunction$();
  src__utils.FutureOrCallback$ = dart.generic(T => {
    const FutureOrCallback = dart.typedef('FutureOrCallback', () => dart.fnType(async.FutureOr$(T), []));
    return FutureOrCallback;
  });
  src__utils.FutureOrCallback = src__utils.FutureOrCallback$();
  dart.trackLibraries("packages/async/src/utils.ddc", {
    "package:async/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
