define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  dart.defineLazy(src__utils, {
    /*src__utils.chainGap*/get chainGap() {
      return '===== asynchronous gap ===========================\n';
    },
    /*src__utils.vmChainGap*/get vmChainGap() {
      return '<asynchronous suspension>\n';
    },
    /*src__utils.inJS*/get inJS() {
      return core.int.is(0.0);
    }
  });
  dart.trackLibraries("packages/stack_trace/src/utils.ddc", {
    "package:stack_trace/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;MAMM,mBAAQ;YAAG;;MAIX,qBAAU;YAAG;;MAIR,eAAI;yBAAG","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
