define(['dart_sdk', 'packages/angular/src/facade/exception_handler'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exceptions = exception_handler.src__facade__exceptions;
  const _root = Object.create(null);
  const src__core__change_detection__differs__default_keyvalue_differ = Object.create(_root);
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $remove = dartx.remove;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $join = dartx.join;
  let LinkedMapOfdynamic$KeyValueChangeRecord = () => (LinkedMapOfdynamic$KeyValueChangeRecord = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let KeyValueChangeRecordTovoid = () => (KeyValueChangeRecordTovoid = dart.constFn(dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord])))();
  let MapOfdynamic$KeyValueChangeRecord = () => (MapOfdynamic$KeyValueChangeRecord = dart.constFn(core.Map$(dart.dynamic, src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord)))();
  const _records = Symbol('_records');
  const _mapHead = Symbol('_mapHead');
  const _appendAfter = Symbol('_appendAfter');
  const _previousMapHead = Symbol('_previousMapHead');
  const _changesHead = Symbol('_changesHead');
  const _changesTail = Symbol('_changesTail');
  const _additionsHead = Symbol('_additionsHead');
  const _additionsTail = Symbol('_additionsTail');
  const _removalsHead = Symbol('_removalsHead');
  const _nextChanged = Symbol('_nextChanged');
  const _nextAdded = Symbol('_nextAdded');
  const _next = Symbol('_next');
  const _reset = Symbol('_reset');
  const _addToAdditions = Symbol('_addToAdditions');
  const _prev = Symbol('_prev');
  const _maybeAddToChanges = Symbol('_maybeAddToChanges');
  const _getOrCreateRecord = Symbol('_getOrCreateRecord');
  const _insertBeforeOrAppend = Symbol('_insertBeforeOrAppend');
  const _addToChanges = Symbol('_addToChanges');
  const _nextPrevious = Symbol('_nextPrevious');
  src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer = class DefaultKeyValueDiffer extends core.Object {
    get isDirty() {
      return !(this[_additionsHead] == null) || !(this[_changesHead] == null) || !(this[_removalsHead] == null);
    }
    forEachChangedItem(fn) {
      for (let record = this[_changesHead]; !(record == null); record = record[_nextChanged]) {
        fn(record);
      }
    }
    forEachAddedItem(fn) {
      for (let record = this[_additionsHead]; !(record == null); record = record[_nextAdded]) {
        fn(record);
      }
    }
    forEachRemovedItem(fn) {
      for (let record = this[_removalsHead]; !(record == null); record = record[_next]) {
        fn(record);
      }
    }
    diff(map) {
      let t = map;
      t == null ? map = new _js_helper.LinkedMap.new() : t;
      if (!core.Map.is(map)) {
        dart.throw(new src__facade__exceptions.BaseException.new(dart.str`Error trying to diff '${map}'`));
      }
      if (dart.test(this.check(map))) {
        return this;
      } else {
        return null;
      }
    }
    check(map) {
      this[_reset]();
      if (this[_mapHead] == null) {
        map[$forEach](dart.fn((key, value) => {
          let record = new src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.new(key);
          record.currentValue = value;
          this[_records][$_set](key, record);
          this[_addToAdditions](record);
          if (this[_appendAfter] == null) {
            this[_mapHead] = record;
          } else {
            record[_prev] = this[_appendAfter];
            this[_appendAfter][_next] = record;
          }
          this[_appendAfter] = record;
        }, dynamicAnddynamicToNull()));
        return this[_mapHead] != null;
      }
      let insertBefore = this[_mapHead];
      map[$forEach](dart.fn((key, value) => {
        if (dart.equals((() => {
          let t = insertBefore;
          return t == null ? null : t.key;
        })(), key)) {
          this[_maybeAddToChanges](insertBefore, value);
          this[_appendAfter] = insertBefore;
          insertBefore = insertBefore[_next];
        } else {
          let record = this[_getOrCreateRecord](key, value);
          insertBefore = this[_insertBeforeOrAppend](insertBefore, record);
        }
      }, dynamicAnddynamicToNull()));
      if (insertBefore != null) {
        this[_removalsHead] = insertBefore;
        for (let record = insertBefore; record != null; record = record[_next]) {
          this[_records][$remove](record.key);
          record.previousValue = record.currentValue;
          record.currentValue = null;
        }
        if (dart.equals(this[_removalsHead], this[_mapHead])) {
          this[_mapHead] = null;
        } else {
          this[_removalsHead][_prev][_next] = null;
        }
      }
      return this.isDirty;
    }
    [_insertBeforeOrAppend](before, record) {
      if (before != null) {
        record[_next] = before;
        record[_prev] = before[_prev];
        let l = before[_prev];
        l == null ? null : l[_next] = record;
        before[_prev] = record;
        if (dart.equals(before, this[_mapHead])) {
          this[_mapHead] = record;
        }
        this[_appendAfter] = before;
        return before;
      }
      if (this[_appendAfter] != null) {
        this[_appendAfter][_next] = record;
        record[_prev] = this[_appendAfter];
      } else {
        this[_mapHead] = record;
      }
      this[_appendAfter] = record;
      return null;
    }
    [_getOrCreateRecord](key, value) {
      if (dart.test(this[_records][$containsKey](key))) {
        let record = this[_records][$_get](key);
        this[_maybeAddToChanges](record, value);
        let l = record[_prev];
        l == null ? null : l[_next] = record[_next];
        let l$ = record[_next];
        l$ == null ? null : l$[_prev] = record[_prev];
        record[_prev] = null;
        record[_next] = null;
        return record;
      }
      let record = new src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.new(key);
      record.currentValue = value;
      this[_records][$_set](key, record);
      this[_addToAdditions](record);
      return record;
    }
    [_maybeAddToChanges](record, value) {
      if (!core.identical(value, record.currentValue)) {
        record.previousValue = record.currentValue;
        record.currentValue = value;
        this[_addToChanges](record);
      }
    }
    [_reset]() {
      this[_appendAfter] = null;
      if (dart.test(this.isDirty)) {
        this[_previousMapHead] = this[_mapHead];
        for (let record = this[_previousMapHead]; record != null; record = record[_next]) {
          record[_nextPrevious] = record[_next];
        }
        for (let record = this[_changesHead]; record != null; record = record[_nextChanged]) {
          record.previousValue = record.currentValue;
        }
        for (let record = this[_additionsHead]; record != null; record = record[_nextAdded]) {
          record.previousValue = record.currentValue;
        }
        this[_changesHead] = this[_changesTail] = null;
        this[_additionsHead] = this[_additionsTail] = null;
        this[_removalsHead] = null;
      }
    }
    [_addToAdditions](record) {
      if (this[_additionsHead] == null) {
        this[_additionsHead] = this[_additionsTail] = record;
      } else {
        this[_additionsTail][_nextAdded] = record;
        this[_additionsTail] = record;
      }
    }
    [_addToChanges](record) {
      if (this[_changesHead] == null) {
        this[_changesHead] = this[_changesTail] = record;
      } else {
        this[_changesTail][_nextChanged] = record;
        this[_changesTail] = record;
      }
    }
    toString() {
      let items = [];
      let previous = [];
      let changes = [];
      let additions = [];
      let removals = [];
      for (let record = this[_mapHead]; !(record == null); record = record[_next]) {
        items[$add](record);
      }
      for (let record = this[_previousMapHead]; !(record == null); record = record[_nextPrevious]) {
        previous[$add](record);
      }
      for (let record = this[_changesHead]; !(record == null); record = record[_nextChanged]) {
        changes[$add](record);
      }
      for (let record = this[_additionsHead]; !(record == null); record = record[_nextAdded]) {
        additions[$add](record);
      }
      for (let record = this[_removalsHead]; !(record == null); record = record[_next]) {
        removals[$add](record);
      }
      return "map: " + dart.notNull(items[$join](", ")) + "\n" + "previous: " + dart.notNull(previous[$join](", ")) + "\n" + "additions: " + dart.notNull(additions[$join](", ")) + "\n" + "changes: " + dart.notNull(changes[$join](", ")) + "\n" + "removals: " + dart.notNull(removals[$join](", ")) + "\n";
    }
  };
  (src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.new = function() {
    this[_records] = new (LinkedMapOfdynamic$KeyValueChangeRecord()).new();
    this[_mapHead] = null;
    this[_appendAfter] = null;
    this[_previousMapHead] = null;
    this[_changesHead] = null;
    this[_changesTail] = null;
    this[_additionsHead] = null;
    this[_additionsTail] = null;
    this[_removalsHead] = null;
  }).prototype = src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer);
  dart.setMethodSignature(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getMethods(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    forEachChangedItem: dart.fnType(dart.void, [KeyValueChangeRecordTovoid()]),
    forEachAddedItem: dart.fnType(dart.void, [KeyValueChangeRecordTovoid()]),
    forEachRemovedItem: dart.fnType(dart.void, [KeyValueChangeRecordTovoid()]),
    diff: dart.fnType(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, [core.Map]),
    check: dart.fnType(core.bool, [core.Map]),
    [_insertBeforeOrAppend]: dart.fnType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord]),
    [_getOrCreateRecord]: dart.fnType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, [dart.dynamic, dart.dynamic]),
    [_maybeAddToChanges]: dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, dart.dynamic]),
    [_reset]: dart.fnType(dart.void, []),
    [_addToAdditions]: dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord]),
    [_addToChanges]: dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord])
  }));
  dart.setGetterSignature(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getGetters(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    isDirty: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.__proto__),
    [_records]: dart.finalFieldType(MapOfdynamic$KeyValueChangeRecord()),
    [_mapHead]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_appendAfter]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_previousMapHead]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_changesHead]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_changesTail]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_additionsHead]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_additionsTail]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_removalsHead]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer, ['toString']);
  src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord = class KeyValueChangeRecord extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      this[key$] = value;
    }
    get previousValue() {
      return this[previousValue];
    }
    set previousValue(value) {
      this[previousValue] = value;
    }
    get currentValue() {
      return this[currentValue];
    }
    set currentValue(value) {
      this[currentValue] = value;
    }
    toString() {
      return core.String._check(core.identical(this.previousValue, this.currentValue) ? this.key : dart.str`${this.key}[${this.previousValue}->${this.currentValue}]`);
    }
  };
  (src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.new = function(key) {
    this[previousValue] = null;
    this[currentValue] = null;
    this[_nextPrevious] = null;
    this[_next] = null;
    this[_prev] = null;
    this[_nextAdded] = null;
    this[_nextChanged] = null;
    this[key$] = key;
  }).prototype = src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord);
  const key$ = Symbol("KeyValueChangeRecord.key");
  const previousValue = Symbol("KeyValueChangeRecord.previousValue");
  const currentValue = Symbol("KeyValueChangeRecord.currentValue");
  dart.setFieldSignature(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord.__proto__),
    key: dart.fieldType(dart.dynamic),
    previousValue: dart.fieldType(dart.dynamic),
    currentValue: dart.fieldType(dart.dynamic),
    [_nextPrevious]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_next]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_prev]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_nextAdded]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord),
    [_nextChanged]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord, ['toString']);
  dart.trackLibraries("packages/angular/src/core/change_detection/differs/default_keyvalue_differ.ddc", {
    "package:angular/src/core/change_detection/differs/default_keyvalue_differ.dart": src__core__change_detection__differs__default_keyvalue_differ
  }, '{"version":3,"sourceRoot":"","sources":["default_keyvalue_differ.dart"],"names":[],"mappings":"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","file":"default_keyvalue_differ.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__differs__default_keyvalue_differ: src__core__change_detection__differs__default_keyvalue_differ
  };
});

//# sourceMappingURL=default_keyvalue_differ.ddc.js.map
