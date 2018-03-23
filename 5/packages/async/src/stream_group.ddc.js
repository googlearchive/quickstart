define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__stream_group = Object.create(_root);
  const $forEach = dartx.forEach;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $_set = dartx._set;
  const $values = dartx.values;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $map = dartx.map;
  const $clear = dartx.clear;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  const _controller = Symbol('_controller');
  const _closed = Symbol('_closed');
  const _state = Symbol('_state');
  const _subscriptions = Symbol('_subscriptions');
  const _onListen = Symbol('_onListen');
  const _onPause = Symbol('_onPause');
  const _onResume = Symbol('_onResume');
  const _onCancel = Symbol('_onCancel');
  const _onCancelBroadcast = Symbol('_onCancelBroadcast');
  const _listenToStream = Symbol('_listenToStream');
  const _is_StreamGroup_default = Symbol('_is_StreamGroup_default');
  src__stream_group.StreamGroup$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let LinkedMapOfStreamOfT$StreamSubscriptionOfT = () => (LinkedMapOfStreamOfT$StreamSubscriptionOfT = dart.constFn(_js_helper.LinkedMap$(StreamOfT(), StreamSubscriptionOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let VoidToStreamSubscriptionOfT = () => (VoidToStreamSubscriptionOfT = dart.constFn(dart.fnType(StreamSubscriptionOfT(), [])))();
    let StreamOfTAndStreamSubscriptionOfTToNull = () => (StreamOfTAndStreamSubscriptionOfTToNull = dart.constFn(dart.fnType(core.Null, [StreamOfT(), StreamSubscriptionOfT()])))();
    let StreamSubscriptionOfTToFuture = () => (StreamSubscriptionOfTToFuture = dart.constFn(dart.fnType(async.Future, [StreamSubscriptionOfT()])))();
    let SinkOfStreamOfT = () => (SinkOfStreamOfT = dart.constFn(core.Sink$(StreamOfT())))();
    let MapOfStreamOfT$StreamSubscriptionOfT = () => (MapOfStreamOfT$StreamSubscriptionOfT = dart.constFn(core.Map$(StreamOfT(), StreamSubscriptionOfT())))();
    class StreamGroup extends core.Object {
      get stream() {
        return this[_controller].stream;
      }
      static merge(T, streams) {
        let group = new (src__stream_group.StreamGroup$(T)).new();
        streams[$forEach](dart.bind(group, 'add'));
        group.close();
        return group.stream;
      }
      add(stream) {
        StreamOfT()._check(stream);
        if (dart.test(this[_closed])) {
          dart.throw(new core.StateError.new("Can't add a Stream to a closed StreamGroup."));
        }
        if (dart.equals(this[_state], src__stream_group._StreamGroupState.dormant)) {
          this[_subscriptions][$putIfAbsent](stream, dart.fn(() => null, VoidToNull()));
        } else if (dart.equals(this[_state], src__stream_group._StreamGroupState.canceled)) {
          return stream.listen(null).cancel();
        } else {
          this[_subscriptions][$putIfAbsent](stream, dart.fn(() => this[_listenToStream](stream), VoidToStreamSubscriptionOfT()));
        }
        return null;
      }
      remove(stream) {
        StreamOfT()._check(stream);
        let subscription = this[_subscriptions][$remove](stream);
        let future = subscription == null ? null : subscription.cancel();
        if (dart.test(this[_closed]) && dart.test(this[_subscriptions][$isEmpty])) this[_controller].close();
        return future;
      }
      [_onListen]() {
        this[_state] = src__stream_group._StreamGroupState.listening;
        this[_subscriptions][$forEach](dart.fn((stream, subscription) => {
          if (subscription != null) return;
          this[_subscriptions][$_set](stream, this[_listenToStream](stream));
        }, StreamOfTAndStreamSubscriptionOfTToNull()));
      }
      [_onPause]() {
        this[_state] = src__stream_group._StreamGroupState.paused;
        for (let subscription of this[_subscriptions][$values]) {
          subscription.pause();
        }
      }
      [_onResume]() {
        this[_state] = src__stream_group._StreamGroupState.listening;
        for (let subscription of this[_subscriptions][$values]) {
          subscription.resume();
        }
      }
      [_onCancel]() {
        this[_state] = src__stream_group._StreamGroupState.canceled;
        let futures = this[_subscriptions][$values][$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionOfTToFuture()))[$where](dart.fn(future => future != null, FutureTobool()))[$toList]();
        this[_subscriptions][$clear]();
        return dart.test(futures[$isEmpty]) ? null : async.Future.wait(dart.dynamic, futures);
      }
      [_onCancelBroadcast]() {
        this[_state] = src__stream_group._StreamGroupState.dormant;
        this[_subscriptions][$forEach](dart.fn((stream, subscription) => {
          if (!dart.test(stream.isBroadcast)) return;
          subscription.cancel();
          this[_subscriptions][$_set](stream, null);
        }, StreamOfTAndStreamSubscriptionOfTToNull()));
      }
      [_listenToStream](stream) {
        StreamOfT()._check(stream);
        let subscription = stream.listen(dart.bind(this[_controller], 'add'), {onError: dart.bind(this[_controller], 'addError'), onDone: dart.fn(() => this.remove(stream), VoidToFuture())});
        if (dart.equals(this[_state], src__stream_group._StreamGroupState.paused)) subscription.pause();
        return subscription;
      }
      close() {
        if (dart.test(this[_closed])) return this[_controller].done;
        this[_closed] = true;
        if (dart.test(this[_subscriptions][$isEmpty])) this[_controller].close();
        return this[_controller].done;
      }
    }
    (StreamGroup.new = function() {
      this[_controller] = null;
      this[_closed] = false;
      this[_state] = src__stream_group._StreamGroupState.dormant;
      this[_subscriptions] = new (LinkedMapOfStreamOfT$StreamSubscriptionOfT()).new();
      this[_controller] = StreamControllerOfT().new({onListen: dart.bind(this, _onListen), onPause: dart.bind(this, _onPause), onResume: dart.bind(this, _onResume), onCancel: dart.bind(this, _onCancel), sync: true});
    }).prototype = StreamGroup.prototype;
    (StreamGroup.broadcast = function() {
      this[_controller] = null;
      this[_closed] = false;
      this[_state] = src__stream_group._StreamGroupState.dormant;
      this[_subscriptions] = new (LinkedMapOfStreamOfT$StreamSubscriptionOfT()).new();
      this[_controller] = StreamControllerOfT().broadcast({onListen: dart.bind(this, _onListen), onCancel: dart.bind(this, _onCancelBroadcast), sync: true});
    }).prototype = StreamGroup.prototype;
    dart.addTypeTests(StreamGroup);
    StreamGroup.prototype[_is_StreamGroup_default] = true;
    StreamGroup[dart.implements] = () => [SinkOfStreamOfT()];
    dart.setMethodSignature(StreamGroup, () => ({
      __proto__: dart.getMethods(StreamGroup.__proto__),
      add: dart.fnType(async.Future, [core.Object]),
      remove: dart.fnType(async.Future, [core.Object]),
      [_onListen]: dart.fnType(dart.void, []),
      [_onPause]: dart.fnType(dart.void, []),
      [_onResume]: dart.fnType(dart.void, []),
      [_onCancel]: dart.fnType(async.Future, []),
      [_onCancelBroadcast]: dart.fnType(dart.void, []),
      [_listenToStream]: dart.fnType(async.StreamSubscription$(T), [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setStaticMethodSignature(StreamGroup, () => ({merge: dart.gFnType(T => [async.Stream$(T), [core.Iterable$(async.Stream$(T))]])}));
    dart.setGetterSignature(StreamGroup, () => ({
      __proto__: dart.getGetters(StreamGroup.__proto__),
      stream: dart.fnType(async.Stream$(T), [])
    }));
    dart.setFieldSignature(StreamGroup, () => ({
      __proto__: dart.getFields(StreamGroup.__proto__),
      [_controller]: dart.fieldType(StreamControllerOfT()),
      [_closed]: dart.fieldType(core.bool),
      [_state]: dart.fieldType(src__stream_group._StreamGroupState),
      [_subscriptions]: dart.finalFieldType(MapOfStreamOfT$StreamSubscriptionOfT())
    }));
    return StreamGroup;
  });
  src__stream_group.StreamGroup = src__stream_group.StreamGroup$();
  dart.addTypeTests(src__stream_group.StreamGroup, _is_StreamGroup_default);
  src__stream_group._StreamGroupState = class _StreamGroupState extends core.Object {
    toString() {
      return this.name;
    }
  };
  (src__stream_group._StreamGroupState.new = function(name) {
    this.name = name;
  }).prototype = src__stream_group._StreamGroupState.prototype;
  dart.addTypeTests(src__stream_group._StreamGroupState);
  dart.setFieldSignature(src__stream_group._StreamGroupState, () => ({
    __proto__: dart.getFields(src__stream_group._StreamGroupState.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__stream_group._StreamGroupState, ['toString']);
  dart.defineLazy(src__stream_group._StreamGroupState, {
    /*src__stream_group._StreamGroupState.dormant*/get dormant() {
      return dart.const(new src__stream_group._StreamGroupState.new("dormant"));
    },
    /*src__stream_group._StreamGroupState.listening*/get listening() {
      return dart.const(new src__stream_group._StreamGroupState.new("listening"));
    },
    /*src__stream_group._StreamGroupState.paused*/get paused() {
      return dart.const(new src__stream_group._StreamGroupState.new("paused"));
    },
    /*src__stream_group._StreamGroupState.canceled*/get canceled() {
      return dart.const(new src__stream_group._StreamGroupState.new("canceled"));
    }
  });
  dart.trackLibraries("packages/async/src/stream_group.ddc", {
    "package:async/src/stream_group.dart": src__stream_group
  }, '{"version":3,"sourceRoot":"","sources":["stream_group.dart"],"names":[],"mappings":"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","file":"stream_group.ddc.js"}');
  // Exports:
  return {
    src__stream_group: src__stream_group
  };
});

//# sourceMappingURL=stream_group.ddc.js.map
