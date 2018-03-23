define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__queue_list = Object.create(_root);
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $fillRange = dartx.fillRange;
  const $rightShift = dartx['>>'];
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $cast = dartx.cast;
  const $retype = dartx.retype;
  const _table = Symbol('_table');
  const _head = Symbol('_head');
  const _tail = Symbol('_tail');
  const _add = Symbol('_add');
  const _preGrow = Symbol('_preGrow');
  const _grow = Symbol('_grow');
  const _writeToList = Symbol('_writeToList');
  const _is_QueueList_default = Symbol('_is_QueueList_default');
  src__queue_list.QueueList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let QueueListOfE = () => (QueueListOfE = dart.constFn(src__queue_list.QueueList$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let QueueOfE = () => (QueueOfE = dart.constFn(collection.Queue$(E)))();
    const Object_ListMixin$ = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$.new = function() {
    }).prototype = Object_ListMixin$.prototype;
    dart.mixinMembers(Object_ListMixin$, collection.ListMixin$(E));
    class QueueList extends Object_ListMixin$ {
      static _castFrom(S, T, source) {
        return new (src__queue_list._CastQueueList$(S, T)).new(source);
      }
      get [_head]() {
        return this[_head$];
      }
      set [_head](value) {
        this[_head$] = value;
      }
      get [_tail]() {
        return this[_tail$];
      }
      set [_tail](value) {
        this[_tail$] = value;
      }
      static from(source) {
        if (core.List.is(source)) {
          let length = source[$length];
          let queue = new (QueueListOfE()).new(dart.notNull(length) + 1);
          if (!(dart.notNull(queue[_table][$length]) > dart.notNull(length))) dart.assertFailed();
          let sourceList = source;
          queue[_table][$setRange](0, length, sourceList, 0);
          queue[_tail] = length;
          return queue;
        } else {
          let _ = new (QueueListOfE()).new();
          _.addAll(source);
          return _;
        }
      }
      add(element) {
        E._check(element);
        this[_add](element);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        if (core.List.is(elements)) {
          let list = elements;
          let addCount = list[$length];
          let length = this.length;
          if (dart.notNull(length) + dart.notNull(addCount) >= dart.notNull(this[_table][$length])) {
            this[_preGrow](dart.notNull(length) + dart.notNull(addCount));
            this[_table][$setRange](length, dart.notNull(length) + dart.notNull(addCount), list, 0);
            this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
          } else {
            let endSpace = dart.notNull(this[_table][$length]) - dart.notNull(this[_tail]);
            if (dart.notNull(addCount) < endSpace) {
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + dart.notNull(addCount), list, 0);
              this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
            } else {
              let preSpace = dart.notNull(addCount) - endSpace;
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + endSpace, list, 0);
              this[_table][$setRange](0, preSpace, list, endSpace);
              this[_tail] = preSpace;
            }
          }
        } else {
          for (let element of elements)
            this[_add](element);
        }
      }
      cast(T) {
        let self = this;
        if (src__queue_list.QueueList$(T).is(self)) {
          return self;
        }
        return this.retype(T);
      }
      retype(T) {
        return src__queue_list.QueueList._castFrom(E, T, this);
      }
      toString() {
        return collection.IterableBase.iterableToFullString(this, "{", "}");
      }
      addLast(element) {
        E._check(element);
        this[_add](element);
      }
      addFirst(element) {
        E._check(element);
        this[_head] = (dart.notNull(this[_head]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        this[_table][$_set](this[_head], element);
        if (this[_head] == this[_tail]) this[_grow]();
      }
      removeFirst() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table][$_get](this[_head]);
        this[_table][$_set](this[_head], null);
        this[_head] = (dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        this[_tail] = (dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let result = this[_table][$_get](this[_tail]);
        this[_table][$_set](this[_tail], null);
        return result;
      }
      get length() {
        return (dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][$length]) - 1) >>> 0;
      }
      set length(value) {
        if (dart.notNull(value) < 0) dart.throw(new core.RangeError.new(dart.str`Length ${value} may not be negative.`));
        let delta = dart.notNull(value) - dart.notNull(this.length);
        if (delta >= 0) {
          if (dart.notNull(this[_table][$length]) <= dart.notNull(value)) {
            this[_preGrow](value);
          }
          this[_tail] = (dart.notNull(this[_tail]) + delta & dart.notNull(this[_table][$length]) - 1) >>> 0;
          return;
        }
        let newTail = dart.notNull(this[_tail]) + delta;
        if (dart.notNull(newTail) >= 0) {
          this[_table][$fillRange](newTail, this[_tail], null);
        } else {
          newTail = dart.notNull(newTail) + dart.notNull(this[_table][$length]);
          this[_table][$fillRange](0, this[_tail], null);
          this[_table][$fillRange](newTail, this[_table][$length], null);
        }
        this[_tail] = newTail;
      }
      _get(index) {
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new(dart.str`Index ${index} must be in the range [0..${this.length}).`));
        }
        return this[_table][$_get]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0);
      }
      _set(index, value) {
        E._check(value);
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new(dart.str`Index ${index} must be in the range [0..${this.length}).`));
        }
        this[_table][$_set]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0, value);
        return value;
      }
      static _isPowerOf2(number) {
        return (dart.notNull(number) & dart.notNull(number) - 1) === 0;
      }
      static _nextPowerOf2(number) {
        if (!(dart.notNull(number) > 0)) dart.assertFailed();
        number = (dart.notNull(number) << 1 >>> 0) - 1;
        for (;;) {
          let nextNumber = (dart.notNull(number) & dart.notNull(number) - 1) >>> 0;
          if (nextNumber === 0) return number;
          number = nextNumber;
        }
      }
      [_add](element) {
        E._check(element);
        this[_table][$_set](this[_tail], element);
        this[_tail] = (dart.notNull(this[_tail]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        if (this[_head] == this[_tail]) this[_grow]();
      }
      [_grow]() {
        let newTable = ListOfE().new(dart.notNull(this[_table][$length]) * 2);
        let split = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
        newTable[$setRange](0, split, this[_table], this[_head]);
        newTable[$setRange](split, split + dart.notNull(this[_head]), this[_table], 0);
        this[_head] = 0;
        this[_tail] = this[_table][$length];
        this[_table] = newTable;
      }
      [_writeToList](target) {
        ListOfE()._check(target);
        if (!(dart.notNull(target[$length]) >= dart.notNull(this.length))) dart.assertFailed();
        if (dart.notNull(this[_head]) <= dart.notNull(this[_tail])) {
          let length = dart.notNull(this[_tail]) - dart.notNull(this[_head]);
          target[$setRange](0, length, this[_table], this[_head]);
          return length;
        } else {
          let firstPartSize = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
          target[$setRange](0, firstPartSize, this[_table], this[_head]);
          target[$setRange](firstPartSize, firstPartSize + dart.notNull(this[_tail]), this[_table], 0);
          return dart.notNull(this[_tail]) + firstPartSize;
        }
      }
      [_preGrow](newElementCount) {
        if (!(dart.notNull(newElementCount) >= dart.notNull(this.length))) dart.assertFailed();
        newElementCount = dart.notNull(newElementCount) + newElementCount[$rightShift](1);
        let newCapacity = src__queue_list.QueueList._nextPowerOf2(newElementCount);
        let newTable = ListOfE().new(newCapacity);
        this[_tail] = this[_writeToList](newTable);
        this[_table] = newTable;
        this[_head] = 0;
      }
    }
    (QueueList.new = function(initialCapacity) {
      if (initialCapacity === void 0) initialCapacity = null;
      this[_table] = null;
      this[_head$] = 0;
      this[_tail$] = 0;
      if (initialCapacity == null || dart.notNull(initialCapacity) < 8) {
        initialCapacity = 8;
      } else if (!dart.test(src__queue_list.QueueList._isPowerOf2(initialCapacity))) {
        initialCapacity = src__queue_list.QueueList._nextPowerOf2(initialCapacity);
      }
      if (!dart.test(src__queue_list.QueueList._isPowerOf2(initialCapacity))) dart.assertFailed();
      this[_table] = ListOfE().new(initialCapacity);
    }).prototype = QueueList.prototype;
    (QueueList.__ = function() {
      this[_table] = null;
      this[_head$] = null;
      this[_tail$] = null;
    }).prototype = QueueList.prototype;
    dart.addTypeTests(QueueList);
    QueueList.prototype[_is_QueueList_default] = true;
    const _head$ = Symbol("QueueList._head");
    const _tail$ = Symbol("QueueList._tail");
    QueueList[dart.implements] = () => [QueueOfE()];
    dart.setMethodSignature(QueueList, () => ({
      __proto__: dart.getMethods(QueueList.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      [$cast]: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      retype: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      [$retype]: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      addLast: dart.fnType(dart.void, [core.Object]),
      addFirst: dart.fnType(dart.void, [core.Object]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      [_add]: dart.fnType(dart.void, [core.Object]),
      [_grow]: dart.fnType(dart.void, []),
      [_writeToList]: dart.fnType(core.int, [core.Object]),
      [_preGrow]: dart.fnType(dart.void, [core.int])
    }));
    dart.setStaticMethodSignature(QueueList, () => ({
      _castFrom: dart.gFnType((S, T) => [src__queue_list.QueueList$(T), [src__queue_list.QueueList$(S)]]),
      _isPowerOf2: dart.fnType(core.bool, [core.int]),
      _nextPowerOf2: dart.fnType(core.int, [core.int])
    }));
    dart.setGetterSignature(QueueList, () => ({
      __proto__: dart.getGetters(QueueList.__proto__),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, [])
    }));
    dart.setSetterSignature(QueueList, () => ({
      __proto__: dart.getSetters(QueueList.__proto__),
      length: dart.fnType(dart.void, [core.int]),
      [$length]: dart.fnType(dart.void, [core.int])
    }));
    dart.setFieldSignature(QueueList, () => ({
      __proto__: dart.getFields(QueueList.__proto__),
      [_table]: dart.fieldType(ListOfE()),
      [_head]: dart.fieldType(core.int),
      [_tail]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(QueueList, [
      'add',
      'addAll',
      'cast',
      'retype',
      'toString',
      'removeLast',
      '_get',
      '_set'
    ]);
    dart.defineExtensionAccessors(QueueList, ['length']);
    return QueueList;
  });
  src__queue_list.QueueList = src__queue_list.QueueList$();
  dart.defineLazy(src__queue_list.QueueList, {
    /*src__queue_list.QueueList._INITIAL_CAPACITY*/get _INITIAL_CAPACITY() {
      return 8;
    }
  });
  dart.addTypeTests(src__queue_list.QueueList, _is_QueueList_default);
  const _delegate = Symbol('_delegate');
  const _is__CastQueueList_default = Symbol('_is__CastQueueList_default');
  src__queue_list._CastQueueList$ = dart.generic((S, T) => {
    let QueueListOfS = () => (QueueListOfS = dart.constFn(src__queue_list.QueueList$(S)))();
    class _CastQueueList extends src__queue_list.QueueList$(T) {
      get [_head]() {
        return this[_delegate][_head];
      }
      set [_head](value) {
        return this[_delegate][_head] = value;
      }
      get [_tail]() {
        return this[_delegate][_tail];
      }
      set [_tail](value) {
        return this[_delegate][_tail] = value;
      }
    }
    (_CastQueueList.new = function(delegate) {
      this[_delegate] = delegate;
      _CastQueueList.__proto__.__.call(this);
      this[_table] = this[_delegate][_table][$cast](T);
    }).prototype = _CastQueueList.prototype;
    dart.addTypeTests(_CastQueueList);
    _CastQueueList.prototype[_is__CastQueueList_default] = true;
    dart.setGetterSignature(_CastQueueList, () => ({
      __proto__: dart.getGetters(_CastQueueList.__proto__),
      [_head]: dart.fnType(core.int, []),
      [_tail]: dart.fnType(core.int, [])
    }));
    dart.setSetterSignature(_CastQueueList, () => ({
      __proto__: dart.getSetters(_CastQueueList.__proto__),
      [_head]: dart.fnType(dart.void, [core.int]),
      [_tail]: dart.fnType(dart.void, [core.int])
    }));
    dart.setFieldSignature(_CastQueueList, () => ({
      __proto__: dart.getFields(_CastQueueList.__proto__),
      [_delegate]: dart.finalFieldType(QueueListOfS())
    }));
    return _CastQueueList;
  });
  src__queue_list._CastQueueList = src__queue_list._CastQueueList$();
  dart.addTypeTests(src__queue_list._CastQueueList, _is__CastQueueList_default);
  dart.trackLibraries("packages/collection/src/queue_list.ddc", {
    "package:collection/src/queue_list.dart": src__queue_list
  }, '{"version":3,"sourceRoot":"","sources":["queue_list.dart"],"names":[],"mappings":"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","file":"queue_list.ddc.js"}');
  // Exports:
  return {
    src__queue_list: src__queue_list
  };
});

//# sourceMappingURL=queue_list.ddc.js.map
