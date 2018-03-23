define(['dart_sdk', 'packages/stream_channel/src/close_guarantee_channel'], function(dart_sdk, close_guarantee_channel) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const stream_channel = close_guarantee_channel.stream_channel;
  const src__stream_channel_completer = close_guarantee_channel.src__stream_channel_completer;
  const _root = Object.create(null);
  const src__runner__suite_channel_manager = Object.create(_root);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  let IdentityMapOfString$StreamChannel = () => (IdentityMapOfString$StreamChannel = dart.constFn(_js_helper.IdentityMap$(core.String, stream_channel.StreamChannel)))();
  let IdentityMapOfString$StreamChannelCompleter = () => (IdentityMapOfString$StreamChannelCompleter = dart.constFn(_js_helper.IdentityMap$(core.String, src__stream_channel_completer.StreamChannelCompleter)))();
  let _IdentityHashSetOfString = () => (_IdentityHashSetOfString = dart.constFn(collection._IdentityHashSet$(core.String)))();
  let MapOfString$StreamChannel = () => (MapOfString$StreamChannel = dart.constFn(core.Map$(core.String, stream_channel.StreamChannel)))();
  let MapOfString$StreamChannelCompleter = () => (MapOfString$StreamChannelCompleter = dart.constFn(core.Map$(core.String, src__stream_channel_completer.StreamChannelCompleter)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  dart.defineLazy(src__runner__suite_channel_manager, {
    /*src__runner__suite_channel_manager._currentKey*/get _currentKey() {
      return new core.Object.new();
    }
  });
  const _incomingConnections = Symbol('_incomingConnections');
  const _outgoingConnections = Symbol('_outgoingConnections');
  const _names = Symbol('_names');
  src__runner__suite_channel_manager.SuiteChannelManager = class SuiteChannelManager extends core.Object {
    static get current() {
      return src__runner__suite_channel_manager.SuiteChannelManager.as(async.Zone.current._get(src__runner__suite_channel_manager._currentKey));
    }
    asCurrent(T, body) {
      return async.runZoned(T, body, {zoneValues: new _js_helper.LinkedMap.from([src__runner__suite_channel_manager._currentKey, this])});
    }
    connectOut(name) {
      if (dart.test(this[_incomingConnections][$containsKey](name))) {
        return this[_incomingConnections][$_get](name);
      } else if (dart.test(this[_names].contains(name))) {
        dart.throw(new core.StateError.new(dart.str`Duplicate suiteChannel() connection "${name}".`));
      } else {
        this[_names].add(name);
        let completer = new src__stream_channel_completer.StreamChannelCompleter.new();
        this[_outgoingConnections][$_set](name, completer);
        return completer.channel;
      }
    }
    connectIn(name, channel) {
      if (dart.test(this[_outgoingConnections][$containsKey](name))) {
        this[_outgoingConnections][$remove](name).setChannel(channel);
      } else if (dart.test(this[_incomingConnections][$containsKey](name))) {
        dart.throw(new core.StateError.new(dart.str`Duplicate RunnerSuite.channel() connection "${name}".`));
      } else {
        this[_incomingConnections][$_set](name, channel);
      }
    }
  };
  (src__runner__suite_channel_manager.SuiteChannelManager.new = function() {
    this[_incomingConnections] = new (IdentityMapOfString$StreamChannel()).new();
    this[_outgoingConnections] = new (IdentityMapOfString$StreamChannelCompleter()).new();
    this[_names] = new (_IdentityHashSetOfString()).new();
  }).prototype = src__runner__suite_channel_manager.SuiteChannelManager.prototype;
  dart.addTypeTests(src__runner__suite_channel_manager.SuiteChannelManager);
  dart.setMethodSignature(src__runner__suite_channel_manager.SuiteChannelManager, () => ({
    __proto__: dart.getMethods(src__runner__suite_channel_manager.SuiteChannelManager.__proto__),
    asCurrent: dart.gFnType(T => [T, [dart.fnType(T, [])]]),
    connectOut: dart.fnType(stream_channel.StreamChannel, [core.String]),
    connectIn: dart.fnType(dart.void, [core.String, stream_channel.StreamChannel])
  }));
  dart.setFieldSignature(src__runner__suite_channel_manager.SuiteChannelManager, () => ({
    __proto__: dart.getFields(src__runner__suite_channel_manager.SuiteChannelManager.__proto__),
    [_incomingConnections]: dart.finalFieldType(MapOfString$StreamChannel()),
    [_outgoingConnections]: dart.finalFieldType(MapOfString$StreamChannelCompleter()),
    [_names]: dart.finalFieldType(SetOfString())
  }));
  dart.trackLibraries("packages/test/src/runner/suite_channel_manager.ddc", {
    "package:test/src/runner/suite_channel_manager.dart": src__runner__suite_channel_manager
  }, '{"version":3,"sourceRoot":"","sources":["suite_channel_manager.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;MASM,8CAAW;YAAG,KAAI,eAAM;;;;;;;;uEAkBxB,UAAI,QAAQ,MAAC,8CAAW;IAAwB;iBAMrC,IAAQ;YAAK,eAAQ,IAAC,IAAI,eAAc,+BAAC,8CAAW,EAAE;IAAM;eAGlD,IAAW;AAClC,oBAAI,0BAAoB,cAAY,CAAC,IAAI,IAAG;AAC1C,cAAO,2BAAoB,QAAC,IAAI;YAC3B,eAAI,YAAM,SAAS,CAAC,IAAI,IAAG;AAChC,mBAAM,IAAI,mBAAU,CAAC,gDAAuC,IAAI;aAC3D;AACL,oBAAM,IAAI,CAAC,IAAI;AACf,YAAI,YAAY,IAAI,wDAAsB;AAC1C,kCAAoB,QAAC,IAAI,EAAI,SAAS;AACtC,cAAO,UAAS,QAAQ;;IAE5B;cAGe,IAAW,EAAE,OAAqB;AAC/C,oBAAI,0BAAoB,cAAY,CAAC,IAAI,IAAG;AAC1C,kCAAoB,SAAO,CAAC,IAAI,YAAY,CAAC,OAAO;YAC/C,eAAI,0BAAoB,cAAY,CAAC,IAAI,IAAG;AACjD,mBAAM,IAAI,mBAAU,CAChB,uDAA8C,IAAI;aACjD;AACL,kCAAoB,QAAC,IAAI,EAAI,OAAO;;IAExC;;;IA5CM,0BAAoB,GAAG;IAIvB,0BAAoB,GAAG;IAGvB,YAAM,GAAG;EAsCjB","file":"suite_channel_manager.ddc.js"}');
  // Exports:
  return {
    src__runner__suite_channel_manager: src__runner__suite_channel_manager
  };
});

//# sourceMappingURL=suite_channel_manager.ddc.js.map
