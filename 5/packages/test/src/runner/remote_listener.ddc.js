define(['dart_sdk', 'packages/stream_channel/src/close_guarantee_channel', 'packages/async/async', 'packages/test/src/runner/suite_channel_manager', 'packages/term_glyph/src/generated', 'packages/test/src/backend/declarer', 'packages/test/src/backend/suite_platform', 'packages/test/src/backend/state', 'packages/test/src/backend/message'], function(dart_sdk, close_guarantee_channel, async, suite_channel_manager, generated, declarer, suite_platform, state, message) {
  'use strict';
  const core = dart_sdk.core;
  const async$ = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stream_channel_controller = close_guarantee_channel.src__stream_channel_controller;
  const src__multi_channel = close_guarantee_channel.src__multi_channel;
  const stream_channel = close_guarantee_channel.stream_channel;
  const src__stream_queue = async.src__stream_queue;
  const src__runner__suite_channel_manager = suite_channel_manager.src__runner__suite_channel_manager;
  const src__generated = generated.src__generated;
  const src__backend__metadata = declarer.src__backend__metadata;
  const src__backend__declarer = declarer.src__backend__declarer;
  const src__backend__stack_trace_formatter = declarer.src__backend__stack_trace_formatter;
  const src__backend__suite = declarer.src__backend__suite;
  const src__backend__invoker = declarer.src__backend__invoker;
  const src__util__remote_exception = declarer.src__util__remote_exception;
  const src__backend__group = declarer.src__backend__group;
  const src__backend__test = declarer.src__backend__test;
  const src__backend__group_entry = declarer.src__backend__group_entry;
  const src__backend__live_test = declarer.src__backend__live_test;
  const src__backend__suite_platform = suite_platform.src__backend__suite_platform;
  const src__backend__state = state.src__backend__state;
  const src__backend__message = message.src__backend__message;
  const _root = Object.create(null);
  const src__runner__remote_listener = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $map = dartx.map;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let ZoneAndZoneDelegateAndZone__ToNull = () => (ZoneAndZoneDelegateAndZone__ToNull = dart.constFn(dart.fnType(core.Null, [async$.Zone, async$.ZoneDelegate, async$.Zone, core.String])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async$.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let JSArrayOfGroup = () => (JSArrayOfGroup = dart.constFn(_interceptors.JSArray$(src__backend__group.Group)))();
  let GroupEntryToMap = () => (GroupEntryToMap = dart.constFn(dart.fnType(core.Map, [src__backend__group_entry.GroupEntry])))();
  let StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [src__backend__state.State])))();
  let AsyncErrorToNull = () => (AsyncErrorToNull = dart.constFn(dart.fnType(core.Null, [async$.AsyncError])))();
  let MessageToNull = () => (MessageToNull = dart.constFn(dart.fnType(core.Null, [src__backend__message.Message])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidTodynamic(), [])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async$.Future, [])))();
  let IterableOfGroup = () => (IterableOfGroup = dart.constFn(core.Iterable$(src__backend__group.Group)))();
  const _suite = Symbol('_suite');
  const _printZone = Symbol('_printZone');
  const _listen = Symbol('_listen');
  let const$;
  const _serializeGroup = Symbol('_serializeGroup');
  const _serializeTest = Symbol('_serializeTest');
  const _runLiveTest = Symbol('_runLiveTest');
  let const$0;
  src__runner__remote_listener.RemoteListener = class RemoteListener extends core.Object {
    static start(getMain, opts) {
      let hidePrints = opts && 'hidePrints' in opts ? opts.hidePrints : true;
      let beforeLoad = opts && 'beforeLoad' in opts ? opts.beforeLoad : null;
      let controller = new src__stream_channel_controller.StreamChannelController.new({allowForeignErrors: false, sync: true});
      let channel = src__multi_channel.MultiChannel.new(controller.local);
      let verboseChain = true;
      let printZone = dart.test(hidePrints) ? null : async$.Zone.current;
      let spec = async$.ZoneSpecification.new({print: dart.fn((_, __, ___, line) => {
          if (printZone != null) printZone.print(line);
          channel.sink.add(new (IdentityMapOfString$String()).from(["type", "print", "line", line]));
        }, ZoneAndZoneDelegateAndZone__ToNull())});
      async$.Stream.fromIterable([]).listen(dart.fn(_ => {
      }, dynamicToNull())).cancel();
      new src__runner__suite_channel_manager.SuiteChannelManager.new().asCurrent(core.Null, dart.fn(() => {
        new src__backend__stack_trace_formatter.StackTraceFormatter.new().asCurrent(core.Null, dart.fn(() => {
          async$.runZoned(FutureOfNull(), dart.fn(() => async$.async(core.Null, function*() {
            let main = null;
            try {
              main = getMain();
            } catch (e) {
              if (core.NoSuchMethodError.is(e)) {
                let _ = e;
                src__runner__remote_listener.RemoteListener._sendLoadException(channel, "No top-level main() function defined.");
                return;
              } else {
                let error = e;
                let stackTrace = dart.stackTrace(error);
                src__runner__remote_listener.RemoteListener._sendError(channel, error, stackTrace, verboseChain);
                return;
              }
            }
            if (!core.Function.is(main)) {
              src__runner__remote_listener.RemoteListener._sendLoadException(channel, "Top-level main getter is not a function.");
              return;
            } else if (!VoidTodynamic().is(main)) {
              src__runner__remote_listener.RemoteListener._sendLoadException(channel, "Top-level main() function takes arguments.");
              return;
            }
            let queue = src__stream_queue.StreamQueue.new(channel.stream);
            let message = (yield queue.next);
            if (!dart.equals(dart.dindex(message, 'type'), 'initial')) dart.assertFailed();
            queue.rest.listen(dart.fn(message => {
              if (!dart.equals(dart.dindex(message, "type"), "suiteChannel")) dart.assertFailed();
              src__runner__suite_channel_manager.SuiteChannelManager.current.connectIn(core.String._check(dart.dindex(message, 'name')), channel.virtualChannel(dart.dindex(message, 'id')));
            }, dynamicToNull()));
            if (dart.dtest((() => {
              let l = dart.dindex(message, 'asciiGlyphs');
              return l != null ? l : false;
            })())) src__generated.ascii = true;
            let metadata = new src__backend__metadata.Metadata.deserialize(dart.dindex(message, 'metadata'));
            verboseChain = metadata.verboseTrace;
            let declarer = new src__backend__declarer.Declarer.new({metadata: metadata, platformVariables: SetOfString().from(core.Iterable._check(dart.dindex(message, 'platformVariables'))), collectTraces: core.bool._check(dart.dindex(message, 'collectTraces')), noRetry: core.bool._check(dart.dindex(message, 'noRetry'))});
            src__backend__stack_trace_formatter.StackTraceFormatter.current.configure({except: src__runner__remote_listener.RemoteListener._deserializeSet(core.List._check(dart.dindex(message, 'foldTraceExcept'))), only: src__runner__remote_listener.RemoteListener._deserializeSet(core.List._check(dart.dindex(message, 'foldTraceOnly')))});
            if (beforeLoad != null) yield beforeLoad();
            yield declarer.declare(VoidTodynamic()._check(main));
            let suite = new src__backend__suite.Suite.new(declarer.build(), src__backend__suite_platform.SuitePlatform.deserialize(dart.dindex(message, 'platform')), {path: core.String._check(dart.dindex(message, 'path'))});
            async$.runZoned(core.Null, dart.fn(() => {
              src__backend__invoker.Invoker.guard(dart.void, dart.fn(() => new src__runner__remote_listener.RemoteListener.__(suite, printZone)[_listen](channel), VoidTovoid()));
            }, VoidToNull()), {zoneValues: new _js_helper.LinkedMap.from([const$ || (const$ = dart.const(core.Symbol.new('test.declarer'))), declarer])});
          }), VoidToFutureOfNull()), {onError: dart.fn((error, stackTrace) => {
              src__runner__remote_listener.RemoteListener._sendError(channel, error, core.StackTrace._check(stackTrace), verboseChain);
            }, dynamicAnddynamicToNull()), zoneSpecification: spec});
        }, VoidToNull()));
      }, VoidToNull()));
      return controller.foreign;
    }
    static _deserializeSet(list) {
      if (list == null) return null;
      if (dart.test(list[$isEmpty])) return null;
      return SetOfString().from(list);
    }
    static _sendLoadException(channel, message) {
      channel.sink.add(new (IdentityMapOfString$String()).from(["type", "loadException", "message", message]));
    }
    static _sendError(channel, error, stackTrace, verboseChain) {
      channel.sink.add(new (IdentityMapOfString$dynamic()).from(["type", "error", "error", src__util__remote_exception.RemoteException.serialize(error, src__backend__stack_trace_formatter.StackTraceFormatter.current.formatStackTrace(stackTrace, {verbose: verboseChain}))]));
    }
    [_listen](channel) {
      channel.sink.add(new (IdentityMapOfString$Object()).from(["type", "success", "root", this[_serializeGroup](channel, this[_suite].group, JSArrayOfGroup().of([]))]));
    }
    [_serializeGroup](channel, group, parents) {
      parents = parents[$toList]();
      parents[$add](group);
      return new _js_helper.LinkedMap.from(["type", "group", "name", group.name, "metadata", group.metadata.serialize(), "trace", group.trace == null ? null : dart.toString(group.trace), "setUpAll", this[_serializeTest](channel, group.setUpAll, parents), "tearDownAll", this[_serializeTest](channel, group.tearDownAll, parents), "entries", group.entries[$map](core.Map, dart.fn(entry => src__backend__group.Group.is(entry) ? this[_serializeGroup](channel, entry, parents) : this[_serializeTest](channel, src__backend__test.Test._check(entry), parents), GroupEntryToMap()))[$toList]()]);
    }
    [_serializeTest](channel, test, groups) {
      if (test == null) return null;
      let testChannel = channel.virtualChannel();
      testChannel.stream.listen(dart.fn(message => {
        if (!dart.equals(dart.dindex(message, 'command'), 'run')) dart.assertFailed();
        this[_runLiveTest](test.load(this[_suite], {groups: groups}), channel.virtualChannel(dart.dindex(message, 'channel')));
      }, dynamicToNull()));
      return new _js_helper.LinkedMap.from(["type", "test", "name", test.name, "metadata", test.metadata.serialize(), "trace", (() => {
          let t = test.trace;
          return t == null ? null : dart.toString(t);
        })(), "channel", testChannel.id]);
    }
    [_runLiveTest](liveTest, channel) {
      channel.stream.listen(dart.fn(message => {
        if (!dart.equals(dart.dindex(message, 'command'), 'close')) dart.assertFailed();
        liveTest.close();
      }, dynamicToNull()));
      liveTest.onStateChange.listen(dart.fn(state => {
        channel.sink.add(new (IdentityMapOfString$String()).from(["type", "state-change", "status", state.status.name, "result", state.result.name]));
      }, StateToNull()));
      liveTest.onError.listen(dart.fn(asyncError => {
        channel.sink.add(new (IdentityMapOfString$dynamic()).from(["type", "error", "error", src__util__remote_exception.RemoteException.serialize(asyncError.error, src__backend__stack_trace_formatter.StackTraceFormatter.current.formatStackTrace(asyncError.stackTrace, {verbose: liveTest.test.metadata.verboseTrace}))]));
      }, AsyncErrorToNull()));
      liveTest.onMessage.listen(dart.fn(message => {
        if (this[_printZone] != null) this[_printZone].print(message.text);
        channel.sink.add(new (IdentityMapOfString$String()).from(["type", "message", "message-type", message.type.name, "text", message.text]));
      }, MessageToNull()));
      async$.runZoned(core.Null, dart.fn(() => {
        liveTest.run().then(dart.void, dart.fn(_ => channel.sink.add(new (IdentityMapOfString$String()).from(["type", "complete"])), dynamicTovoid()));
      }, VoidToNull()), {zoneValues: new _js_helper.LinkedMap.from([const$0 || (const$0 = dart.const(core.Symbol.new('test.runner.test_channel'))), channel])});
    }
  };
  (src__runner__remote_listener.RemoteListener.__ = function(suite, printZone) {
    this[_suite] = suite;
    this[_printZone] = printZone;
  }).prototype = src__runner__remote_listener.RemoteListener.prototype;
  dart.addTypeTests(src__runner__remote_listener.RemoteListener);
  dart.setMethodSignature(src__runner__remote_listener.RemoteListener, () => ({
    __proto__: dart.getMethods(src__runner__remote_listener.RemoteListener.__proto__),
    [_listen]: dart.fnType(dart.void, [src__multi_channel.MultiChannel]),
    [_serializeGroup]: dart.fnType(core.Map, [src__multi_channel.MultiChannel, src__backend__group.Group, IterableOfGroup()]),
    [_serializeTest]: dart.fnType(core.Map, [src__multi_channel.MultiChannel, src__backend__test.Test, IterableOfGroup()]),
    [_runLiveTest]: dart.fnType(dart.void, [src__backend__live_test.LiveTest, src__multi_channel.MultiChannel])
  }));
  dart.setStaticMethodSignature(src__runner__remote_listener.RemoteListener, () => ({
    start: dart.fnType(stream_channel.StreamChannel, [VoidToFn()], {hidePrints: core.bool, beforeLoad: VoidToFuture()}),
    _deserializeSet: dart.fnType(core.Set$(core.String), [core.List]),
    _sendLoadException: dart.fnType(dart.void, [stream_channel.StreamChannel, core.String]),
    _sendError: dart.fnType(dart.void, [stream_channel.StreamChannel, dart.dynamic, core.StackTrace, core.bool])
  }));
  dart.setFieldSignature(src__runner__remote_listener.RemoteListener, () => ({
    __proto__: dart.getFields(src__runner__remote_listener.RemoteListener.__proto__),
    [_suite]: dart.finalFieldType(src__backend__suite.Suite),
    [_printZone]: dart.finalFieldType(async$.Zone)
  }));
  dart.trackLibraries("packages/test/src/runner/remote_listener.ddc", {
    "package:test/src/runner/remote_listener.dart": src__runner__remote_listener
  }, '{"version":3,"sourceRoot":"","sources":["remote_listener.dart"],"names":[],"mappings":"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","file":"remote_listener.ddc.js"}');
  // Exports:
  return {
    src__runner__remote_listener: src__runner__remote_listener
  };
});

//# sourceMappingURL=remote_listener.ddc.js.map
