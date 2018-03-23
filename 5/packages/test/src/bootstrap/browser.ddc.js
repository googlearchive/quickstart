define(['dart_sdk', 'packages/test/src/runner/plugin/remote_platform_helpers', 'packages/test/src/util/stack_trace_mapper', 'packages/test/src/runner/browser/post_message_channel'], function(dart_sdk, remote_platform_helpers, stack_trace_mapper, post_message_channel) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runner__plugin__remote_platform_helpers = remote_platform_helpers.src__runner__plugin__remote_platform_helpers;
  const src__util__stack_trace_mapper = stack_trace_mapper.src__util__stack_trace_mapper;
  const src__runner__browser__post_message_channel = post_message_channel.src__runner__browser__post_message_channel;
  const _root = Object.create(null);
  const src__bootstrap__browser = Object.create(_root);
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let VoidToFunction = () => (VoidToFunction = dart.constFn(dart.fnType(core.Function, [])))();
  let FnTovoid = () => (FnTovoid = dart.constFn(dart.fnType(dart.void, [VoidToFunction()])))();
  src__bootstrap__browser.internalBootstrapBrowserTest = function(getMain) {
    let channel = src__runner__plugin__remote_platform_helpers.serializeSuite(getMain, {hidePrints: false, beforeLoad: dart.fn(() => async.async(core.Null, function*() {
        let serialized = (yield src__runner__plugin__remote_platform_helpers.suiteChannel("test.browser.mapper").stream.first);
        if (serialized == null) return;
        src__runner__plugin__remote_platform_helpers.setStackTraceMapper(src__util__stack_trace_mapper.StackTraceMapper.deserialize(core.Map._check(serialized)));
      }), VoidToFutureOfNull())});
    src__runner__browser__post_message_channel.postMessageChannel().pipe(channel);
  };
  dart.fn(src__bootstrap__browser.internalBootstrapBrowserTest, FnTovoid());
  dart.trackLibraries("packages/test/src/bootstrap/browser.ddc", {
    "package:test/src/bootstrap/browser.dart": src__bootstrap__browser
  }, '{"version":3,"sourceRoot":"","sources":["browser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;kEAYkC,OAAkB;AAClD,QAAI,UACA,2DAAc,CAAC,OAAO,eAAc,mBAAmB;AACzD,YAAI,cAAa,MAAM,yDAAY,CAAC,6BAA6B,MAAM;AACvE,YAAI,UAAU,IAAI,MAAM;AACxB,wEAAmB,CAAC,8CAAgB,YAAY,iBAAC,UAAU;MAC7D;AACA,iEAAkB,OAAO,CAAC,OAAO;EACnC","file":"browser.ddc.js"}');
  // Exports:
  return {
    src__bootstrap__browser: src__bootstrap__browser
  };
});

//# sourceMappingURL=browser.ddc.js.map
