define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const stack_trace = Object.create(_root);
  dart.trackLibraries("packages/stack_trace/stack_trace.ddc", {
    "package:stack_trace/stack_trace.dart": stack_trace
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"stack_trace.ddc.js"}');
  // Exports:
  return {
    stack_trace: stack_trace
  };
});

//# sourceMappingURL=stack_trace.ddc.js.map
