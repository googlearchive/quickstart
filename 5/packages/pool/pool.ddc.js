define(['dart_sdk', 'packages/async/src/async_memoizer', 'packages/async/src/restartable_timer', 'packages/async/src/future_group', 'packages/stack_trace/src/chain'], function(dart_sdk, async_memoizer, restartable_timer, future_group, chain) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__async_memoizer = async_memoizer.src__async_memoizer;
  const src__restartable_timer = restartable_timer.src__restartable_timer;
  const src__future_group = future_group.src__future_group;
  const src__chain = chain.src__chain;
  const _root = Object.create(null);
  const pool = Object.create(_root);
  let CompleterOfPoolResource = () => (CompleterOfPoolResource = dart.constFn(async.Completer$(pool.PoolResource)))();
  let QueueOfCompleterOfPoolResource = () => (QueueOfCompleterOfPoolResource = dart.constFn(collection.Queue$(CompleterOfPoolResource())))();
  let QueueOfFunction = () => (QueueOfFunction = dart.constFn(collection.Queue$(core.Function)))();
  let FutureOfPoolResource = () => (FutureOfPoolResource = dart.constFn(async.Future$(pool.PoolResource)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidToFutureOr = () => (VoidToFutureOr = dart.constFn(dart.fnType(async.FutureOr, [])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  const _maxAllocatedResources = Symbol('_maxAllocatedResources');
  const _timeout = Symbol('_timeout');
  const _requestedResources = Symbol('_requestedResources');
  const _onReleaseCallbacks = Symbol('_onReleaseCallbacks');
  const _onReleaseCompleters = Symbol('_onReleaseCompleters');
  const _allocatedResources = Symbol('_allocatedResources');
  const _timer = Symbol('_timer');
  const _closeGroup = Symbol('_closeGroup');
  const _closeMemo = Symbol('_closeMemo');
  const _onTimeout = Symbol('_onTimeout');
  const _runOnRelease = Symbol('_runOnRelease');
  const _resetTimer = Symbol('_resetTimer');
  const _onResourceReleased = Symbol('_onResourceReleased');
  const _onResourceReleaseAllowed = Symbol('_onResourceReleaseAllowed');
  pool.Pool = class Pool extends core.Object {
    get isClosed() {
      return this[_closeMemo].hasRun;
    }
    get done() {
      return this[_closeMemo].future;
    }
    request() {
      if (dart.test(this.isClosed)) {
        dart.throw(new core.StateError.new("request() may not be called on a closed Pool."));
      }
      if (dart.notNull(this[_allocatedResources]) < dart.notNull(this[_maxAllocatedResources])) {
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) + 1;
        return FutureOfPoolResource().value(new pool.PoolResource.__(this));
      } else if (dart.test(this[_onReleaseCallbacks].isNotEmpty)) {
        return this[_runOnRelease](VoidTodynamic()._check(this[_onReleaseCallbacks].removeFirst()));
      } else {
        let completer = CompleterOfPoolResource().new();
        this[_requestedResources].add(completer);
        this[_resetTimer]();
        return completer.future;
      }
    }
    withResource(T, callback) {
      if (dart.test(this.isClosed)) {
        dart.throw(new core.StateError.new("withResource() may not be called on a closed Pool."));
      }
      return this.request().then(T, dart.fn(resource => async.Future$(T).sync(callback).whenComplete(dart.bind(resource, 'release')), dart.fnType(async.Future$(T), [pool.PoolResource])));
    }
    close() {
      return this[_closeMemo].runOnce(dart.fn(() => {
        if (this[_closeGroup] != null) return this[_closeGroup].future;
        this[_resetTimer]();
        this[_closeGroup] = new src__future_group.FutureGroup.new();
        for (let callback of this[_onReleaseCallbacks]) {
          this[_closeGroup].add(async.Future.sync(VoidToFutureOr()._check(callback)));
        }
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - dart.notNull(this[_onReleaseCallbacks].length);
        this[_onReleaseCallbacks].clear();
        if (this[_allocatedResources] === 0) this[_closeGroup].close();
        return this[_closeGroup].future;
      }, VoidToFutureOfList()));
    }
    [_onResourceReleased]() {
      this[_resetTimer]();
      if (dart.test(this[_requestedResources].isNotEmpty)) {
        let pending = this[_requestedResources].removeFirst();
        pending.complete(new pool.PoolResource.__(this));
      } else {
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - 1;
        if (dart.test(this.isClosed) && this[_allocatedResources] === 0) this[_closeGroup].close();
      }
    }
    [_onResourceReleaseAllowed](onRelease) {
      this[_resetTimer]();
      if (dart.test(this[_requestedResources].isNotEmpty)) {
        let pending = this[_requestedResources].removeFirst();
        pending.complete(this[_runOnRelease](onRelease));
      } else if (dart.test(this.isClosed)) {
        this[_closeGroup].add(async.Future.sync(onRelease));
        this[_allocatedResources] = dart.notNull(this[_allocatedResources]) - 1;
        if (this[_allocatedResources] === 0) this[_closeGroup].close();
      } else {
        let zone = async.Zone.current;
        let registered = zone.registerCallback(dart.dynamic, onRelease);
        this[_onReleaseCallbacks].add(dart.fn(() => zone.run(dart.dynamic, registered), VoidTodynamic()));
      }
    }
    [_runOnRelease](onRelease) {
      async.Future.sync(onRelease).then(core.Null, dart.fn(value => {
        this[_onReleaseCompleters].removeFirst().complete(new pool.PoolResource.__(this));
      }, dynamicToNull())).catchError(dart.fn((error, stackTrace) => {
        this[_onReleaseCompleters].removeFirst().completeError(error, core.StackTrace._check(stackTrace));
      }, dynamicAnddynamicToNull()));
      let completer = CompleterOfPoolResource().sync();
      this[_onReleaseCompleters].add(completer);
      return completer.future;
    }
    [_resetTimer]() {
      if (this[_timer] == null) return;
      if (dart.test(this[_requestedResources].isEmpty)) {
        this[_timer].cancel();
      } else {
        this[_timer].reset();
      }
    }
    [_onTimeout]() {
      for (let completer of this[_requestedResources]) {
        completer.completeError(new async.TimeoutException.new("Pool deadlock: all resources have been " + "allocated for too long.", this[_timeout]), src__chain.Chain.current());
      }
      this[_requestedResources].clear();
      this[_timer] = null;
    }
  };
  (pool.Pool.new = function(maxAllocatedResources, opts) {
    let timeout = opts && 'timeout' in opts ? opts.timeout : null;
    this[_requestedResources] = QueueOfCompleterOfPoolResource().new();
    this[_onReleaseCallbacks] = QueueOfFunction().new();
    this[_onReleaseCompleters] = QueueOfCompleterOfPoolResource().new();
    this[_allocatedResources] = 0;
    this[_timer] = null;
    this[_closeGroup] = null;
    this[_closeMemo] = new src__async_memoizer.AsyncMemoizer.new();
    this[_maxAllocatedResources] = maxAllocatedResources;
    this[_timeout] = timeout;
    if (timeout != null) {
      let _ = new src__restartable_timer.RestartableTimer.new(timeout, dart.bind(this, _onTimeout));
      _.cancel();
      this[_timer] = _;
    }
  }).prototype = pool.Pool.prototype;
  dart.addTypeTests(pool.Pool);
  dart.setMethodSignature(pool.Pool, () => ({
    __proto__: dart.getMethods(pool.Pool.__proto__),
    request: dart.fnType(async.Future$(pool.PoolResource), []),
    withResource: dart.gFnType(T => [async.Future$(T), [dart.fnType(async.FutureOr$(T), [])]]),
    close: dart.fnType(async.Future, []),
    [_onResourceReleased]: dart.fnType(dart.void, []),
    [_onResourceReleaseAllowed]: dart.fnType(dart.void, [VoidTodynamic()]),
    [_runOnRelease]: dart.fnType(async.Future$(pool.PoolResource), [VoidTodynamic()]),
    [_resetTimer]: dart.fnType(dart.void, []),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(pool.Pool, () => ({
    __proto__: dart.getGetters(pool.Pool.__proto__),
    isClosed: dart.fnType(core.bool, []),
    done: dart.fnType(async.Future, [])
  }));
  dart.setFieldSignature(pool.Pool, () => ({
    __proto__: dart.getFields(pool.Pool.__proto__),
    [_requestedResources]: dart.finalFieldType(QueueOfCompleterOfPoolResource()),
    [_onReleaseCallbacks]: dart.finalFieldType(QueueOfFunction()),
    [_onReleaseCompleters]: dart.finalFieldType(QueueOfCompleterOfPoolResource()),
    [_maxAllocatedResources]: dart.finalFieldType(core.int),
    [_allocatedResources]: dart.fieldType(core.int),
    [_timer]: dart.fieldType(src__restartable_timer.RestartableTimer),
    [_timeout]: dart.finalFieldType(core.Duration),
    [_closeGroup]: dart.fieldType(src__future_group.FutureGroup),
    [_closeMemo]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
  }));
  const _pool = Symbol('_pool');
  const _released = Symbol('_released');
  pool.PoolResource = class PoolResource extends core.Object {
    release() {
      if (dart.test(this[_released])) {
        dart.throw(new core.StateError.new("A PoolResource may only be released once."));
      }
      this[_released] = true;
      this[_pool][_onResourceReleased]();
    }
    allowRelease(onRelease) {
      if (dart.test(this[_released])) {
        dart.throw(new core.StateError.new("A PoolResource may only be released once."));
      }
      this[_released] = true;
      this[_pool][_onResourceReleaseAllowed](onRelease);
    }
  };
  (pool.PoolResource.__ = function(pool) {
    this[_released] = false;
    this[_pool] = pool;
  }).prototype = pool.PoolResource.prototype;
  dart.addTypeTests(pool.PoolResource);
  dart.setMethodSignature(pool.PoolResource, () => ({
    __proto__: dart.getMethods(pool.PoolResource.__proto__),
    release: dart.fnType(dart.void, []),
    allowRelease: dart.fnType(dart.void, [VoidTodynamic()])
  }));
  dart.setFieldSignature(pool.PoolResource, () => ({
    __proto__: dart.getFields(pool.PoolResource.__proto__),
    [_pool]: dart.finalFieldType(pool.Pool),
    [_released]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/pool/pool.ddc", {
    "package:pool/pool.dart": pool
  }, '{"version":3,"sourceRoot":"","sources":["pool.dart"],"names":[],"mappings":"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","file":"pool.ddc.js"}');
  // Exports:
  return {
    pool: pool
  };
});

//# sourceMappingURL=pool.ddc.js.map
