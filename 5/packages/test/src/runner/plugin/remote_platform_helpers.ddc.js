define(['dart_sdk', 'packages/test/src/runner/remote_listener', 'packages/stream_channel/src/close_guarantee_channel', 'packages/test/src/runner/suite_channel_manager', 'packages/test/src/backend/declarer', 'packages/test/src/util/stack_trace_mapper'], function(dart_sdk, remote_listener, close_guarantee_channel, suite_channel_manager, declarer, stack_trace_mapper) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runner__remote_listener = remote_listener.src__runner__remote_listener;
  const stream_channel = close_guarantee_channel.stream_channel;
  const src__runner__suite_channel_manager = suite_channel_manager.src__runner__suite_channel_manager;
  const src__backend__stack_trace_formatter = declarer.src__backend__stack_trace_formatter;
  const src__util__stack_trace_mapper = stack_trace_mapper.src__util__stack_trace_mapper;
  const _root = Object.create(null);
  const src__runner__plugin__remote_platform_helpers = Object.create(_root);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidTodynamic(), [])))();
  let VoidToFunction = () => (VoidToFunction = dart.constFn(dart.fnType(core.Function, [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let Fn__ToStreamChannel = () => (Fn__ToStreamChannel = dart.constFn(dart.fnType(stream_channel.StreamChannel, [VoidToFunction()], {hidePrints: core.bool, beforeLoad: VoidToFuture()})))();
  let StringToStreamChannel = () => (StringToStreamChannel = dart.constFn(dart.fnType(stream_channel.StreamChannel, [core.String])))();
  let StackTraceMapperTovoid = () => (StackTraceMapperTovoid = dart.constFn(dart.fnType(dart.void, [src__util__stack_trace_mapper.StackTraceMapper])))();
  src__runner__plugin__remote_platform_helpers.serializeSuite = function(getMain, opts) {
    let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
    let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
    return src__runner__remote_listener.RemoteListener.start(VoidToFn()._check(getMain), {hidePrints: hidePrints, beforeLoad: beforeLoad});
  };
  dart.fn(src__runner__plugin__remote_platform_helpers.serializeSuite, Fn__ToStreamChannel());
  src__runner__plugin__remote_platform_helpers.suiteChannel = function(name) {
    let manager = src__runner__suite_channel_manager.SuiteChannelManager.current;
    if (manager == null) {
      dart.throw(new core.StateError.new('suiteChannel() may only be called within a test worker.'));
    }
    return manager.connectOut(name);
  };
  dart.fn(src__runner__plugin__remote_platform_helpers.suiteChannel, StringToStreamChannel());
  src__runner__plugin__remote_platform_helpers.setStackTraceMapper = function(mapper) {
    let formatter = src__backend__stack_trace_formatter.StackTraceFormatter.current;
    if (formatter == null) {
      dart.throw(new core.StateError.new('setStackTraceMapper() may only be called within a test worker.'));
    }
    formatter.configure({mapper: mapper});
  };
  dart.fn(src__runner__plugin__remote_platform_helpers.setStackTraceMapper, StackTraceMapperTovoid());
  dart.trackLibraries("packages/test/src/runner/plugin/remote_platform_helpers.ddc", {
    "package:test/src/runner/plugin/remote_platform_helpers.dart": src__runner__plugin__remote_platform_helpers
  }, '{"version":3,"sourceRoot":"","sources":["remote_platform_helpers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;yEA+B6B,OAAkB;QACjC,8DAAY;QAAa;UACnC,4CAAc,MAAM,mBAAC,OAAO,gBACZ,UAAU,cAAc,UAAU;EAAC;;uEAW5B,IAAW;AACpC,QAAI,UAAU,sDAAmB,QAAQ;AACzC,QAAI,OAAO,IAAI,MAAM;AACnB,iBAAM,IAAI,mBAAU,CAChB;;AAGN,UAAO,QAAO,WAAW,CAAC,IAAI;EAChC;;8EAOyB,MAAuB;AAC9C,QAAI,YAAY,uDAAmB,QAAQ;AAC3C,QAAI,SAAS,IAAI,MAAM;AACrB,iBAAM,IAAI,mBAAU,CAChB;;AAGN,aAAS,UAAU,UAAS,MAAM;EACpC","file":"remote_platform_helpers.ddc.js"}');
  // Exports:
  return {
    src__runner__plugin__remote_platform_helpers: src__runner__plugin__remote_platform_helpers
  };
});

//# sourceMappingURL=remote_platform_helpers.ddc.js.map
