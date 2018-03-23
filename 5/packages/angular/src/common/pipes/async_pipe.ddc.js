define(['dart_sdk', 'packages/angular/src/common/pipes/invalid_pipe_argument_exception', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/change_detection/pipe_transform', 'packages/angular/src/core/change_detection/change_detector_ref'], function(dart_sdk, invalid_pipe_argument_exception, lifecycle_hooks, pipe_transform, change_detector_ref) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__invalid_pipe_argument_exception = invalid_pipe_argument_exception.src__common__pipes__invalid_pipe_argument_exception;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const src__core__change_detection__change_detector_ref = change_detector_ref.src__core__change_detection__change_detector_ref;
  const _root = Object.create(null);
  const src__common__pipes__async_pipe = Object.create(_root);
  let dynamicTobottom = () => (dynamicTobottom = dart.constFn(dart.fnType(dart.bottom, [dart.dynamic])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  src__common__pipes__async_pipe.ObservableStrategy = class ObservableStrategy extends core.Object {
    createSubscription(stream, updateLatestValue) {
      return stream.listen(updateLatestValue, {onError: dart.fn(e => dart.throw(e), dynamicTobottom())});
    }
    dispose(subscription) {
      subscription.cancel();
    }
    onDestroy(subscription) {
      this.dispose(subscription);
    }
  };
  (src__common__pipes__async_pipe.ObservableStrategy.new = function() {
  }).prototype = src__common__pipes__async_pipe.ObservableStrategy.prototype;
  dart.addTypeTests(src__common__pipes__async_pipe.ObservableStrategy);
  dart.setMethodSignature(src__common__pipes__async_pipe.ObservableStrategy, () => ({
    __proto__: dart.getMethods(src__common__pipes__async_pipe.ObservableStrategy.__proto__),
    createSubscription: dart.fnType(async.StreamSubscription, [async.Stream, dynamicTovoid()]),
    dispose: dart.fnType(dart.void, [async.StreamSubscription]),
    onDestroy: dart.fnType(dart.void, [async.StreamSubscription])
  }));
  src__common__pipes__async_pipe.PromiseStrategy = class PromiseStrategy extends core.Object {
    createSubscription(async, updateLatestValue) {
      return async.then(dart.dynamic, updateLatestValue);
    }
    dispose(subscription) {}
    onDestroy(subscription) {}
  };
  (src__common__pipes__async_pipe.PromiseStrategy.new = function() {
  }).prototype = src__common__pipes__async_pipe.PromiseStrategy.prototype;
  dart.addTypeTests(src__common__pipes__async_pipe.PromiseStrategy);
  dart.setMethodSignature(src__common__pipes__async_pipe.PromiseStrategy, () => ({
    __proto__: dart.getMethods(src__common__pipes__async_pipe.PromiseStrategy.__proto__),
    createSubscription: dart.fnType(dart.dynamic, [async.Future, dynamicTodynamic()]),
    dispose: dart.fnType(dart.void, [dart.dynamic]),
    onDestroy: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.defineLazy(src__common__pipes__async_pipe, {
    /*src__common__pipes__async_pipe._promiseStrategy*/get _promiseStrategy() {
      return new src__common__pipes__async_pipe.PromiseStrategy.new();
    },
    /*src__common__pipes__async_pipe._observableStrategy*/get _observableStrategy() {
      return new src__common__pipes__async_pipe.ObservableStrategy.new();
    }
  });
  const _ref = Symbol('_ref');
  const _latestValue = Symbol('_latestValue');
  const _subscription = Symbol('_subscription');
  const _obj = Symbol('_obj');
  const _strategy = Symbol('_strategy');
  const _dispose = Symbol('_dispose');
  const _subscribe = Symbol('_subscribe');
  const _selectStrategy = Symbol('_selectStrategy');
  const _updateLatestValue = Symbol('_updateLatestValue');
  src__common__pipes__async_pipe.AsyncPipe = class AsyncPipe extends core.Object {
    ngOnDestroy() {
      if (this[_subscription] != null) {
        this[_dispose]();
      }
    }
    transform(obj) {
      if (this[_obj] == null) {
        if (obj != null) {
          this[_subscribe](obj);
        }
      } else if (!dart.test(src__common__pipes__async_pipe.AsyncPipe._maybeStreamIdentical(obj, this[_obj]))) {
        this[_dispose]();
        return this.transform(obj);
      }
      return this[_latestValue];
    }
    [_subscribe](obj) {
      this[_obj] = obj;
      this[_strategy] = this[_selectStrategy](obj);
      this[_subscription] = dart.dsend(this[_strategy], 'createSubscription', obj, dart.fn(value => this[_updateLatestValue](obj, value), ObjectTovoid()));
    }
    [_selectStrategy](obj) {
      if (async.Future.is(obj)) {
        return src__common__pipes__async_pipe._promiseStrategy;
      } else if (async.Stream.is(obj)) {
        return src__common__pipes__async_pipe._observableStrategy;
      } else {
        dart.throw(new src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(src__common__pipes__async_pipe.AsyncPipe), obj));
      }
    }
    [_dispose]() {
      dart.dsend(this[_strategy], 'dispose', this[_subscription]);
      this[_latestValue] = null;
      this[_subscription] = null;
      this[_obj] = null;
    }
    [_updateLatestValue](async, value) {
      if (core.identical(async, this[_obj])) {
        this[_latestValue] = value;
        this[_ref].markForCheck();
      }
    }
    static _maybeStreamIdentical(a, b) {
      if (!core.identical(a, b)) {
        return async.Stream.is(a) && async.Stream.is(b) && dart.equals(a, b);
      }
      return true;
    }
  };
  (src__common__pipes__async_pipe.AsyncPipe.new = function(ref) {
    this[_latestValue] = null;
    this[_subscription] = null;
    this[_obj] = null;
    this[_strategy] = null;
    this[_ref] = ref;
  }).prototype = src__common__pipes__async_pipe.AsyncPipe.prototype;
  dart.addTypeTests(src__common__pipes__async_pipe.AsyncPipe);
  src__common__pipes__async_pipe.AsyncPipe[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy, src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__async_pipe.AsyncPipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__async_pipe.AsyncPipe.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    transform: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_subscribe]: dart.fnType(dart.void, [dart.dynamic]),
    [_selectStrategy]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_dispose]: dart.fnType(dart.void, []),
    [_updateLatestValue]: dart.fnType(dart.void, [dart.dynamic, core.Object])
  }));
  dart.setStaticMethodSignature(src__common__pipes__async_pipe.AsyncPipe, () => ({_maybeStreamIdentical: dart.fnType(core.bool, [dart.dynamic, dart.dynamic])}));
  dart.setFieldSignature(src__common__pipes__async_pipe.AsyncPipe, () => ({
    __proto__: dart.getFields(src__common__pipes__async_pipe.AsyncPipe.__proto__),
    [_latestValue]: dart.fieldType(core.Object),
    [_subscription]: dart.fieldType(core.Object),
    [_obj]: dart.fieldType(dart.dynamic),
    [_strategy]: dart.fieldType(dart.dynamic),
    [_ref]: dart.fieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef)
  }));
  dart.trackLibraries("packages/angular/src/common/pipes/async_pipe.ddc", {
    "package:angular/src/common/pipes/async_pipe.dart": src__common__pipes__async_pipe
  }, '{"version":3,"sourceRoot":"","sources":["async_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;uBASM,MAAa,EAAE,iBAA6B;AAC9C,YAAO,OAAM,OAAO,CAAC,iBAAiB,YAAW,QAAC,CAAC,IAAK,WAAM,CAAC;IACjE;YAEa,YAA+B;AAC1C,kBAAY,OAAO;IACrB;cAEe,YAA+B;AAC5C,kBAAO,CAAC,YAAY;IACtB;;;EACF;;;;;;;;;uBAIM,KAAqB,EAAE,iBAAoC;AAC7D,YAAO,MAAK,KAAK,eAAC,iBAAiB;IACrC;YAEa,YAAoB,GAAG;cACrB,YAAoB,GAAG;;;EACxC;;;;;;;;;MAEM,+CAAgB;YAAG,KAAI,kDAAe;;MACtC,kDAAmB;YAAG,KAAI,qDAAkB;;;;;;;;;;;;;;AA2D9C,UAAI,mBAAa,IAAI,MAAM;AACzB,sBAAQ;;IAEZ;cAEkB,GAAgD;AAChE,UAAI,UAAI,IAAI,MAAM;AAChB,YAAI,GAAG,IAAI,MAAM;AACf,0BAAU,CAAC,GAAG;;YAEX,gBAAK,8DAAqB,CAAC,GAAG,EAAE,UAAI,IAAG;AAC5C,sBAAQ;AACR,cAAO,eAAS,CAAC,GAAG;;AAEtB,YAAO,mBAAY;IACrB;iBAEgB,GAAgD;AAC9D,gBAAI,GAAG,GAAG;AACV,qBAAS,GAAG,qBAAe,CAAC,GAAG;AAC/B,yBAAa,cAAG,eAAS,wBACrB,GAAG,EAAE,QAAC,KAAY,IAAK,wBAAkB,CAAC,GAAG,EAAE,KAAK;IAC1D;sBAEwB,GAAgD;AACtE,0BAAI,GAAG,GAAY;AACjB,cAAO,gDAAgB;YAClB,qBAAI,GAAG,GAAY;AACxB,cAAO,mDAAmB;aACrB;AACL,mBAAM,IAAI,oFAA4B,CAAC,uDAAS,EAAE,GAAG;;IAEzD;;AAGE,gCAAS,aAAS,mBAAa;AAC/B,wBAAY,GAAG;AACf,yBAAa,GAAG;AAChB,gBAAI,GAAG;IACT;yBAEwB,KAAa,EAAE,KAAY;AACjD,UAAI,eAAU,KAAK,EAAE,UAAI,GAAG;AAC1B,0BAAY,GAAG,KAAK;AACpB,kBAAI,aAAa;;IAErB;iCAKkC,CAAC,EAAE,CAAC;AACpC,WAAK,eAAU,CAAC,EAAE,CAAC,GAAG;AACpB,cAAkC,iBAA3B,CAAC,qBAAc,CAAC,iBAAc,CAAC,EAAI,CAAC;;AAE7C,YAAO;IACT;;2DA5De,GAAI;IANZ,kBAAY;IACZ,mBAAa;IACyB,UAAI;IACzC,eAAS;IAGF,UAAI,GAAJ,GAAI;EAAC","file":"async_pipe.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__async_pipe: src__common__pipes__async_pipe
  };
});

//# sourceMappingURL=async_pipe.ddc.js.map
