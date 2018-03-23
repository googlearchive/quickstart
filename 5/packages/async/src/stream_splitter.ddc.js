define(['dart_sdk', 'packages/async/src/result/capture_sink', 'packages/async/src/future_group'], function(dart_sdk, capture_sink, future_group) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__result__result = capture_sink.src__result__result;
  const src__future_group = future_group.src__future_group;
  const _root = Object.create(null);
  const src__stream_splitter = Object.create(_root);
  const $clear = dartx.clear;
  const $add = dartx.add;
  let ListOfStream = () => (ListOfStream = dart.constFn(core.List$(async.Stream)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _stream = Symbol('_stream');
  const _subscription = Symbol('_subscription');
  const _buffer = Symbol('_buffer');
  const _controllers = Symbol('_controllers');
  const _closeGroup = Symbol('_closeGroup');
  const _isDone = Symbol('_isDone');
  const _isClosed = Symbol('_isClosed');
  const _onListen = Symbol('_onListen');
  const _onPause = Symbol('_onPause');
  const _onResume = Symbol('_onResume');
  const _onCancel = Symbol('_onCancel');
  const _cancelSubscription = Symbol('_cancelSubscription');
  const _onData = Symbol('_onData');
  const _onError = Symbol('_onError');
  const _onDone = Symbol('_onDone');
  const _is_StreamSplitter_default = Symbol('_is_StreamSplitter_default');
  src__stream_splitter.StreamSplitter$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let JSArrayOfResultOfT = () => (JSArrayOfResultOfT = dart.constFn(_interceptors.JSArray$(ResultOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let _HashSetOfStreamControllerOfT = () => (_HashSetOfStreamControllerOfT = dart.constFn(collection._HashSet$(StreamControllerOfT())))();
    let StreamControllerOfTTobool = () => (StreamControllerOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamControllerOfT()])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let ListOfResultOfT = () => (ListOfResultOfT = dart.constFn(core.List$(ResultOfT())))();
    let SetOfStreamControllerOfT = () => (SetOfStreamControllerOfT = dart.constFn(core.Set$(StreamControllerOfT())))();
    class StreamSplitter extends core.Object {
      static splitFrom(T, stream, count) {
        if (count === void 0) count = null;
        if (count == null) count = 2;
        let splitter = new (src__stream_splitter.StreamSplitter$(T)).new(stream);
        let streams = ListOfStream().generate(count, dart.fn(_ => splitter.split(), dart.fnType(async.Stream$(T), [core.int])));
        splitter.close();
        return core.List$(async.Stream$(T))._check(streams);
      }
      split() {
        if (dart.test(this[_isClosed])) {
          dart.throw(new core.StateError.new("Can't call split() on a closed StreamSplitter."));
        }
        let controller = StreamControllerOfT().new({onListen: dart.bind(this, _onListen), onPause: dart.bind(this, _onPause), onResume: dart.bind(this, _onResume)});
        controller.onCancel = dart.fn(() => this[_onCancel](controller), VoidTovoid());
        for (let result of this[_buffer]) {
          result.addTo(controller);
        }
        if (dart.test(this[_isDone])) {
          this[_closeGroup].add(controller.close());
        } else {
          this[_controllers].add(controller);
        }
        return controller.stream;
      }
      close() {
        if (dart.test(this[_isClosed])) return this[_closeGroup].future;
        this[_isClosed] = true;
        this[_buffer][$clear]();
        if (dart.test(this[_controllers].isEmpty)) this[_cancelSubscription]();
        return this[_closeGroup].future;
      }
      [_cancelSubscription]() {
        if (!dart.test(this[_controllers].isEmpty)) dart.assertFailed();
        if (!dart.test(this[_isClosed])) dart.assertFailed();
        let future = null;
        if (this[_subscription] != null) future = this[_subscription].cancel();
        if (future != null) this[_closeGroup].add(async.Future._check(future));
        this[_closeGroup].close();
      }
      [_onListen]() {
        if (dart.test(this[_isDone])) return;
        if (this[_subscription] != null) {
          this[_subscription].resume();
        } else {
          this[_subscription] = this[_stream].listen(dart.bind(this, _onData), {onError: dart.bind(this, _onError), onDone: dart.bind(this, _onDone)});
        }
      }
      [_onPause]() {
        if (!dart.test(this[_controllers].every(dart.fn(controller => controller.isPaused, StreamControllerOfTTobool())))) return;
        this[_subscription].pause();
      }
      [_onResume]() {
        this[_subscription].resume();
      }
      [_onCancel](controller) {
        this[_controllers].remove(controller);
        if (dart.test(this[_controllers].isNotEmpty)) return;
        if (dart.test(this[_isClosed])) {
          this[_cancelSubscription]();
        } else {
          this[_subscription].pause();
        }
      }
      [_onData](data) {
        T._check(data);
        if (!dart.test(this[_isClosed])) this[_buffer][$add](ResultOfT().value(data));
        for (let controller of this[_controllers]) {
          controller.add(data);
        }
      }
      [_onError](error, stackTrace) {
        if (!dart.test(this[_isClosed])) this[_buffer][$add](ResultOfT().error(error, stackTrace));
        for (let controller of this[_controllers]) {
          controller.addError(error, stackTrace);
        }
      }
      [_onDone]() {
        this[_isDone] = true;
        for (let controller of this[_controllers]) {
          this[_closeGroup].add(controller.close());
        }
      }
    }
    (StreamSplitter.new = function(stream) {
      this[_subscription] = null;
      this[_buffer] = JSArrayOfResultOfT().of([]);
      this[_controllers] = new (_HashSetOfStreamControllerOfT()).new();
      this[_closeGroup] = new src__future_group.FutureGroup.new();
      this[_isDone] = false;
      this[_isClosed] = false;
      this[_stream] = stream;
    }).prototype = StreamSplitter.prototype;
    dart.addTypeTests(StreamSplitter);
    StreamSplitter.prototype[_is_StreamSplitter_default] = true;
    dart.setMethodSignature(StreamSplitter, () => ({
      __proto__: dart.getMethods(StreamSplitter.__proto__),
      split: dart.fnType(async.Stream$(T), []),
      close: dart.fnType(async.Future, []),
      [_cancelSubscription]: dart.fnType(dart.void, []),
      [_onListen]: dart.fnType(dart.void, []),
      [_onPause]: dart.fnType(dart.void, []),
      [_onResume]: dart.fnType(dart.void, []),
      [_onCancel]: dart.fnType(dart.void, [async.StreamController]),
      [_onData]: dart.fnType(dart.void, [core.Object]),
      [_onError]: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      [_onDone]: dart.fnType(dart.void, [])
    }));
    dart.setStaticMethodSignature(StreamSplitter, () => ({splitFrom: dart.gFnType(T => [core.List$(async.Stream$(T)), [async.Stream$(T)], [core.int]])}));
    dart.setFieldSignature(StreamSplitter, () => ({
      __proto__: dart.getFields(StreamSplitter.__proto__),
      [_stream]: dart.finalFieldType(StreamOfT()),
      [_subscription]: dart.fieldType(StreamSubscriptionOfT()),
      [_buffer]: dart.finalFieldType(ListOfResultOfT()),
      [_controllers]: dart.finalFieldType(SetOfStreamControllerOfT()),
      [_closeGroup]: dart.finalFieldType(src__future_group.FutureGroup),
      [_isDone]: dart.fieldType(core.bool),
      [_isClosed]: dart.fieldType(core.bool)
    }));
    return StreamSplitter;
  });
  src__stream_splitter.StreamSplitter = src__stream_splitter.StreamSplitter$();
  dart.addTypeTests(src__stream_splitter.StreamSplitter, _is_StreamSplitter_default);
  dart.trackLibraries("packages/async/src/stream_splitter.ddc", {
    "package:async/src/stream_splitter.dart": src__stream_splitter
  }, '{"version":3,"sourceRoot":"","sources":["stream_splitter.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BA2DsC,MAAgB,EAAG,KAAS;8BAAL;AACzD,YAAI,KAAK,IAAI,MAAM,KAAK,GAAG;AAC3B,YAAI,WAAW,IAAI,6CAAiB,CAAC,MAAM;AAC3C,YAAI,UAAU,AAAI,uBAAqB,CAAC,KAAK,EAAE,QAAC,CAAC,IAAK,QAAQ,MAAM;AACpE,gBAAQ,MAAM;AACd,mDAAO,OAAO;MAChB;;AAQE,sBAAI,eAAS,GAAE;AACb,qBAAM,IAAI,mBAAU,CAAC;;AAGvB,YAAI,aAAa,AAAI,yBAAmB,YAC1B,0BAAS,WAAW,yBAAQ,YAAY,0BAAS;AAC/D,kBAAU,SAAS,GAAG,cAAM,eAAS,CAAC,UAAU;AAEhD,iBAAS,SAAU,cAAO,EAAE;AAC1B,gBAAM,MAAM,CAAC,UAAU;;AAGzB,sBAAI,aAAO,GAAE;AACX,2BAAW,IAAI,CAAC,UAAU,MAAM;eAC3B;AACL,4BAAY,IAAI,CAAC,UAAU;;AAG7B,cAAO,WAAU,OAAO;MAC1B;;AAYE,sBAAI,eAAS,GAAE,MAAO,kBAAW,OAAO;AACxC,uBAAS,GAAG;AAEZ,qBAAO,QAAM;AACb,sBAAI,kBAAY,QAAQ,GAAE,yBAAmB;AAE7C,cAAO,kBAAW,OAAO;MAC3B;;AAaE,uBAAO,kBAAY,QAAQ;AAC3B,uBAAO,eAAS;AAEhB,YAAI,SAAS;AACb,YAAI,mBAAa,IAAI,MAAM,MAAM,GAAG,mBAAa,OAAO;AACxD,YAAI,MAAM,IAAI,MAAM,iBAAW,IAAI,qBAAC,MAAM;AAC1C,yBAAW,MAAM;MACnB;;AAOE,sBAAI,aAAO,GAAE;AAEb,YAAI,mBAAa,IAAI,MAAM;AAIzB,6BAAa,OAAO;eACf;AACL,6BAAa,GACT,aAAO,OAAO,CAAC,wBAAO,YAAW,yBAAQ,UAAU,wBAAO;;MAElE;;AAIE,uBAAK,kBAAY,MAAM,CAAC,QAAC,UAAU,IAAK,UAAU,SAAS,kCAAG;AAC9D,2BAAa,MAAM;MACrB;;AAME,2BAAa,OAAO;MACtB;kBAQe,UAA2B;AACxC,0BAAY,OAAO,CAAC,UAAU;AAC9B,sBAAI,kBAAY,WAAW,GAAE;AAE7B,sBAAI,eAAS,GAAE;AACb,mCAAmB;eACd;AACL,6BAAa,MAAM;;MAEvB;gBAKa,IAAM;iBAAJ;AACb,uBAAK,eAAS,GAAE,aAAO,MAAI,CAAC,AAAI,iBAAY,CAAC,IAAI;AACjD,iBAAS,aAAc,mBAAY,EAAE;AACnC,oBAAU,IAAI,CAAC,IAAI;;MAEvB;iBAGc,KAAY,EAAE,UAAqB;AAC/C,uBAAK,eAAS,GAAE,aAAO,MAAI,CAAC,AAAI,iBAAY,CAAC,KAAK,EAAE,UAAU;AAC9D,iBAAS,aAAc,mBAAY,EAAE;AACnC,oBAAU,SAAS,CAAC,KAAK,EAAE,UAAU;;MAEzC;;AAIE,qBAAO,GAAG;AACV,iBAAS,aAAc,mBAAY,EAAE;AACnC,2BAAW,IAAI,CAAC,UAAU,MAAM;;MAEpC;;mCA1IoB,MAAO;MArCL,mBAAa;MAI7B,aAAO,GAAG;MAOV,kBAAY,GAAG;MAMf,iBAAW,GAAG,IAAI,iCAAW;MAG/B,aAAO,GAAG;MAGV,eAAS,GAAG;MAcI,aAAO,GAAP,MAAO;IAAC","file":"stream_splitter.ddc.js"}');
  // Exports:
  return {
    src__stream_splitter: src__stream_splitter
  };
});

//# sourceMappingURL=stream_splitter.ddc.js.map
