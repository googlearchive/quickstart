define(['dart_sdk', 'packages/angular/src/facade/exception_handler'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exceptions = exception_handler.src__facade__exceptions;
  const _root = Object.create(null);
  const src__core__change_detection__differs__default_iterable_differ = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $join = dartx.join;
  const $toString = dartx.toString;
  const $containsKey = dartx.containsKey;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let CollectionChangeRecordTovoid = () => (CollectionChangeRecordTovoid = dart.constFn(dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])))();
  let CollectionChangeRecordAndintAndintTovoid = () => (CollectionChangeRecordAndintAndintTovoid = dart.constFn(dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int, core.int])))();
  let IdentityMapOfdynamic$_DuplicateItemRecordList = () => (IdentityMapOfdynamic$_DuplicateItemRecordList = dart.constFn(_js_helper.IdentityMap$(dart.dynamic, src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList)))();
  let LinkedMapOfdynamic$_DuplicateItemRecordList = () => (LinkedMapOfdynamic$_DuplicateItemRecordList = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let CollectionChangeRecordAndintAndListOfintToint = () => (CollectionChangeRecordAndintAndListOfintToint = dart.constFn(dart.fnType(core.int, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int, ListOfint()])))();
  src__core__change_detection__differs__default_iterable_differ.DefaultIterableCallback = dart.typedef('DefaultIterableCallback', () => dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int, core.int]));
  src__core__change_detection__differs__default_iterable_differ.TrackByFn = dart.typedef('TrackByFn', () => dart.fnType(core.Object, [core.int, dart.dynamic]));
  src__core__change_detection__differs__default_iterable_differ._trackByIdentity = function(index, item) {
    return item;
  };
  dart.fn(src__core__change_detection__differs__default_iterable_differ._trackByIdentity, intAnddynamicToObject());
  const _trackByFn = Symbol('_trackByFn');
  const _length = Symbol('_length');
  const _collection = Symbol('_collection');
  const _linkedRecords = Symbol('_linkedRecords');
  const _unlinkedRecords = Symbol('_unlinkedRecords');
  const _previousItHead = Symbol('_previousItHead');
  const _itHead = Symbol('_itHead');
  const _itTail = Symbol('_itTail');
  const _additionsHead = Symbol('_additionsHead');
  const _additionsTail = Symbol('_additionsTail');
  const _movesHead = Symbol('_movesHead');
  const _movesTail = Symbol('_movesTail');
  const _removalsHead = Symbol('_removalsHead');
  const _removalsTail = Symbol('_removalsTail');
  const _identityChangesHead = Symbol('_identityChangesHead');
  const _identityChangesTail = Symbol('_identityChangesTail');
  const _nextRemoved = Symbol('_nextRemoved');
  const _next = Symbol('_next');
  const _nextAdded = Symbol('_nextAdded');
  const _nextIdentityChange = Symbol('_nextIdentityChange');
  let const$;
  const _reset = Symbol('_reset');
  const _mismatch = Symbol('_mismatch');
  const _verifyReinsertion = Symbol('_verifyReinsertion');
  const _addIdentityChange = Symbol('_addIdentityChange');
  const _truncate = Symbol('_truncate');
  const _nextPrevious = Symbol('_nextPrevious');
  const _nextMoved = Symbol('_nextMoved');
  const _prev = Symbol('_prev');
  const _remove = Symbol('_remove');
  const _moveAfter = Symbol('_moveAfter');
  const _reinsertAfter = Symbol('_reinsertAfter');
  const _addAfter = Symbol('_addAfter');
  const _addToMoves = Symbol('_addToMoves');
  const _unlink = Symbol('_unlink');
  const _addToRemovals = Symbol('_addToRemovals');
  const _prevRemoved = Symbol('_prevRemoved');
  const _insertAfter = Symbol('_insertAfter');
  src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer = class DefaultIterableDiffer extends core.Object {
    clone(trackByFn) {
      let differ = new src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.new(trackByFn);
      differ[_length] = this[_length];
      differ[_collection] = this[_collection];
      differ[_linkedRecords] = this[_linkedRecords];
      differ[_unlinkedRecords] = this[_unlinkedRecords];
      differ[_previousItHead] = this[_previousItHead];
      differ[_itHead] = this[_itHead];
      differ[_itTail] = this[_itTail];
      differ[_additionsHead] = this[_additionsHead];
      differ[_additionsTail] = this[_additionsTail];
      differ[_movesHead] = this[_movesHead];
      differ[_movesTail] = this[_movesTail];
      differ[_removalsHead] = this[_removalsHead];
      differ[_removalsTail] = this[_removalsTail];
      differ[_identityChangesHead] = this[_identityChangesHead];
      differ[_identityChangesTail] = this[_identityChangesTail];
      return differ;
    }
    get collection() {
      return this[_collection];
    }
    get length() {
      return this[_length];
    }
    forEachOperation(fn) {
      let nextIt = this[_itHead];
      let nextRemove = this[_removalsHead];
      let addRemoveOffset = 0;
      let sizeDeficit = null;
      let moveOffsets = null;
      while (nextIt != null || nextRemove != null) {
        let record = nextRemove == null || nextIt != null && dart.notNull(nextIt.currentIndex) < dart.notNull(src__core__change_detection__differs__default_iterable_differ._getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets)) ? nextIt : nextRemove;
        let adjPreviousIndex = src__core__change_detection__differs__default_iterable_differ._getPreviousIndex(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord._check(record), addRemoveOffset, moveOffsets);
        let currentIndex = core.int._check(dart.dload(record, 'currentIndex'));
        if (core.identical(record, nextRemove)) {
          addRemoveOffset--;
          nextRemove = nextRemove[_nextRemoved];
        } else {
          nextIt = nextIt[_next];
          if (dart.dload(record, 'previousIndex') == null) {
            addRemoveOffset++;
          } else {
            let t = moveOffsets;
            t == null ? moveOffsets = JSArrayOfint().of([]) : t;
            let localMovePreviousIndex = dart.notNull(adjPreviousIndex) - addRemoveOffset;
            let localCurrentIndex = dart.notNull(currentIndex) - addRemoveOffset;
            if (localMovePreviousIndex !== localCurrentIndex) {
              for (let i = 0; i < localMovePreviousIndex; i++) {
                let offset = null;
                if (i < dart.notNull(moveOffsets[$length])) {
                  offset = moveOffsets[$_get](i);
                } else {
                  if (dart.notNull(moveOffsets[$length]) > i) {
                    offset = moveOffsets[$_set](i, 0);
                  } else {
                    sizeDeficit = i - dart.notNull(moveOffsets[$length]) + 1;
                    for (let j = 0; j < dart.notNull(sizeDeficit); j++) {
                      moveOffsets[$add](null);
                    }
                    offset = moveOffsets[$_set](i, 0);
                  }
                }
                let index = dart.notNull(offset) + i;
                if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                  moveOffsets[$_set](i, dart.notNull(offset) + 1);
                }
              }
              let previousIndex = core.int._check(dart.dload(record, 'previousIndex'));
              sizeDeficit = dart.notNull(previousIndex) - dart.notNull(moveOffsets[$length]) + 1;
              for (let j = 0; j < dart.notNull(sizeDeficit); j++) {
                moveOffsets[$add](null);
              }
              moveOffsets[$_set](previousIndex, localCurrentIndex - localMovePreviousIndex);
            }
          }
        }
        if (adjPreviousIndex != currentIndex) {
          fn(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord._check(record), adjPreviousIndex, currentIndex);
        }
      }
    }
    forEachAddedItem(fn) {
      for (let record = this[_additionsHead]; !(record == null); record = record[_nextAdded]) {
        fn(record);
      }
    }
    forEachRemovedItem(fn) {
      for (let record = this[_removalsHead]; !(record == null); record = record[_nextRemoved]) {
        fn(record);
      }
    }
    forEachIdentityChange(fn) {
      for (let record = this[_identityChangesHead]; !(record == null); record = record[_nextIdentityChange]) {
        fn(record);
      }
    }
    diff(collection) {
      if (collection != null) {
        if (!core.Iterable.is(collection)) {
          dart.throw(new src__facade__exceptions.BaseException.new(dart.str`Error trying to diff '${collection}'`));
        }
      } else {
        collection = const$ || (const$ = dart.constList([], dart.dynamic));
      }
      return dart.test(this.check(collection)) ? this : null;
    }
    onDestroy() {}
    check(collection) {
      this[_reset]();
      let record = this[_itHead];
      let mayBeDirty = false;
      let index = null;
      let item = null;
      let itemTrackBy = null;
      if (core.List.is(collection)) {
        let list = collection;
        this[_length] = collection[$length];
        for (index = 0; dart.notNull(index) < dart.notNull(this[_length]); index = dart.notNull(index) + 1) {
          item = list[$_get](index);
          itemTrackBy = dart.dsend(this, _trackByFn, index, item);
          if (record == null || !core.identical(record.trackById, itemTrackBy)) {
            record = this[_mismatch](record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this[_verifyReinsertion](record, item, itemTrackBy, index);
            }
            if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          }
          record = record[_next];
        }
      } else {
        index = 0;
        collection[$forEach](dart.fn(item => {
          itemTrackBy = dart.dsend(this, _trackByFn, index, item);
          if (record == null || !core.identical(record.trackById, itemTrackBy)) {
            record = this[_mismatch](record, item, itemTrackBy, index);
            mayBeDirty = true;
          } else {
            if (mayBeDirty) {
              record = this[_verifyReinsertion](record, item, itemTrackBy, index);
            }
            if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          }
          record = record[_next];
          index = dart.notNull(index) + 1;
        }, dynamicToNull()));
        this[_length] = index;
      }
      this[_truncate](record);
      this[_collection] = collection;
      return this.isDirty;
    }
    get isDirty() {
      return !(this[_additionsHead] == null) || !(this[_movesHead] == null) || !(this[_removalsHead] == null) || !(this[_identityChangesHead] == null);
    }
    [_reset]() {
      if (dart.test(this.isDirty)) {
        let record = null;
        let nextRecord = null;
        for (record = this[_previousItHead] = this[_itHead]; !(record == null); record = record[_next]) {
          record[_nextPrevious] = record[_next];
        }
        for (record = this[_additionsHead]; !(record == null); record = record[_nextAdded]) {
          record.previousIndex = record.currentIndex;
        }
        this[_additionsHead] = this[_additionsTail] = null;
        for (record = this[_movesHead]; !(record == null); record = nextRecord) {
          record.previousIndex = record.currentIndex;
          nextRecord = record[_nextMoved];
        }
        this[_movesHead] = this[_movesTail] = null;
        this[_removalsHead] = this[_removalsTail] = null;
        this[_identityChangesHead] = this[_identityChangesTail] = null;
      }
    }
    [_mismatch](record, item, itemTrackBy, index) {
      let previousRecord = null;
      if (record == null) {
        previousRecord = this[_itTail];
      } else {
        previousRecord = record[_prev];
        this[_remove](record);
      }
      record = this[_linkedRecords] == null ? null : this[_linkedRecords].get(itemTrackBy, index);
      if (!(record == null)) {
        if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
        this[_moveAfter](record, previousRecord, index);
      } else {
        record = this[_unlinkedRecords] == null ? null : this[_unlinkedRecords].get(itemTrackBy);
        if (!(record == null)) {
          if (!core.identical(record.item, item)) this[_addIdentityChange](record, item);
          this[_reinsertAfter](record, previousRecord, index);
        } else {
          record = this[_addAfter](new src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord.new(item, itemTrackBy), previousRecord, index);
        }
      }
      return record;
    }
    [_verifyReinsertion](record, item, itemTrackBy, index) {
      let reinsertRecord = this[_unlinkedRecords] == null ? null : this[_unlinkedRecords].get(itemTrackBy);
      if (!(reinsertRecord == null)) {
        record = this[_reinsertAfter](reinsertRecord, record[_prev], index);
      } else if (record.currentIndex != index) {
        record.currentIndex = index;
        this[_addToMoves](record, index);
      }
      return record;
    }
    [_truncate](record) {
      while (!(record == null)) {
        let nextRecord = record[_next];
        this[_addToRemovals](this[_unlink](record));
        record = nextRecord;
      }
      if (!(this[_unlinkedRecords] == null)) {
        this[_unlinkedRecords].clear();
      }
      if (!(this[_additionsTail] == null)) {
        this[_additionsTail][_nextAdded] = null;
      }
      if (!(this[_movesTail] == null)) {
        this[_movesTail][_nextMoved] = null;
      }
      if (!(this[_itTail] == null)) {
        this[_itTail][_next] = null;
      }
      if (!(this[_removalsTail] == null)) {
        this[_removalsTail][_nextRemoved] = null;
      }
      if (!(this[_identityChangesTail] == null)) {
        this[_identityChangesTail][_nextIdentityChange] = null;
      }
    }
    [_reinsertAfter](record, prevRecord, index) {
      if (!(this[_unlinkedRecords] == null)) {
        this[_unlinkedRecords].remove(record);
      }
      let prev = record[_prevRemoved];
      let next = record[_nextRemoved];
      if (prev == null) {
        this[_removalsHead] = next;
      } else {
        prev[_nextRemoved] = next;
      }
      if (next == null) {
        this[_removalsTail] = prev;
      } else {
        next[_prevRemoved] = prev;
      }
      this[_insertAfter](record, prevRecord, index);
      this[_addToMoves](record, index);
      return record;
    }
    [_moveAfter](record, prevRecord, index) {
      this[_unlink](record);
      this[_insertAfter](record, prevRecord, index);
      this[_addToMoves](record, index);
      return record;
    }
    [_addAfter](record, prevRecord, index) {
      this[_insertAfter](record, prevRecord, index);
      if (this[_additionsTail] == null) {
        this[_additionsTail] = this[_additionsHead] = record;
      } else {
        this[_additionsTail] = this[_additionsTail][_nextAdded] = record;
      }
      return record;
    }
    [_insertAfter](record, prevRecord, index) {
      let next = prevRecord == null ? this[_itHead] : prevRecord[_next];
      record[_next] = next;
      record[_prev] = prevRecord;
      if (next == null) {
        this[_itTail] = record;
      } else {
        next[_prev] = record;
      }
      if (prevRecord == null) {
        this[_itHead] = record;
      } else {
        prevRecord[_next] = record;
      }
      let t = this[_linkedRecords];
      t == null ? this[_linkedRecords] = true ? new src__core__change_detection__differs__default_iterable_differ._DuplicateMap.new() : new src__core__change_detection__differs__default_iterable_differ._DuplicateMap.withHashcode() : t;
      this[_linkedRecords].put(record);
      record.currentIndex = index;
      return record;
    }
    [_remove](record) {
      return this[_addToRemovals](this[_unlink](record));
    }
    [_unlink](record) {
      let t = this[_linkedRecords];
      t == null ? null : t.remove(record);
      let prev = record[_prev];
      let next = record[_next];
      if (prev == null) {
        this[_itHead] = next;
      } else {
        prev[_next] = next;
      }
      if (next == null) {
        this[_itTail] = prev;
      } else {
        next[_prev] = prev;
      }
      return record;
    }
    [_addToMoves](record, toIndex) {
      if (record.previousIndex == toIndex) {
        return record;
      }
      if (this[_movesTail] == null) {
        this[_movesTail] = this[_movesHead] = record;
      } else {
        this[_movesTail] = this[_movesTail][_nextMoved] = record;
      }
      return record;
    }
    [_addToRemovals](record) {
      let t = this[_unlinkedRecords];
      t == null ? this[_unlinkedRecords] = true ? new src__core__change_detection__differs__default_iterable_differ._DuplicateMap.new() : new src__core__change_detection__differs__default_iterable_differ._DuplicateMap.withHashcode() : t;
      this[_unlinkedRecords].put(record);
      record.currentIndex = null;
      record[_nextRemoved] = null;
      if (this[_removalsTail] == null) {
        this[_removalsTail] = this[_removalsHead] = record;
        record[_prevRemoved] = null;
      } else {
        record[_prevRemoved] = this[_removalsTail];
        this[_removalsTail] = this[_removalsTail][_nextRemoved] = record;
      }
      return record;
    }
    [_addIdentityChange](record, item) {
      record.item = item;
      if (this[_identityChangesTail] == null) {
        this[_identityChangesTail] = this[_identityChangesHead] = record;
      } else {
        this[_identityChangesTail] = this[_identityChangesTail][_nextIdentityChange] = record;
      }
      return record;
    }
    toString() {
      let list = [];
      for (let record = this[_itHead]; !(record == null); record = record[_next]) {
        list[$add](record);
      }
      let previous = [];
      for (let record = this[_previousItHead]; !(record == null); record = record[_nextPrevious]) {
        previous[$add](record);
      }
      let additions = [];
      this.forEachAddedItem(dart.fn(record => additions[$add](record), CollectionChangeRecordTovoid()));
      let moves = [];
      for (let record = this[_movesHead]; !(record == null); record = record[_nextMoved]) {
        moves[$add](record);
      }
      let removals = [];
      this.forEachRemovedItem(dart.fn(record => removals[$add](record), CollectionChangeRecordTovoid()));
      let identityChanges = [];
      this.forEachIdentityChange(dart.fn(record => identityChanges[$add](record), CollectionChangeRecordTovoid()));
      return "collection: " + dart.notNull(list[$join](", ")) + "\n" + "previous: " + dart.notNull(previous[$join](", ")) + "\n" + "additions: " + dart.notNull(additions[$join](", ")) + "\n" + "moves: " + dart.notNull(moves[$join](", ")) + "\n" + "removals: " + dart.notNull(removals[$join](", ")) + "\n" + "identityChanges: " + dart.notNull(identityChanges[$join](", ")) + "\n";
    }
  };
  (src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.new = function(trackByFn) {
    if (trackByFn === void 0) trackByFn = null;
    this[_length] = null;
    this[_collection] = null;
    this[_linkedRecords] = null;
    this[_unlinkedRecords] = null;
    this[_previousItHead] = null;
    this[_itHead] = null;
    this[_itTail] = null;
    this[_additionsHead] = null;
    this[_additionsTail] = null;
    this[_movesHead] = null;
    this[_movesTail] = null;
    this[_removalsHead] = null;
    this[_removalsTail] = null;
    this[_identityChangesHead] = null;
    this[_identityChangesTail] = null;
    let l = trackByFn;
    this[_trackByFn] = l != null ? l : src__core__change_detection__differs__default_iterable_differ._trackByIdentity;
  }).prototype = src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer);
  dart.setMethodSignature(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getMethods(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.__proto__),
    clone: dart.fnType(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, [intAnddynamicToObject()]),
    forEachOperation: dart.fnType(dart.void, [CollectionChangeRecordAndintAndintTovoid()]),
    forEachAddedItem: dart.fnType(dart.void, [CollectionChangeRecordTovoid()]),
    forEachRemovedItem: dart.fnType(dart.void, [CollectionChangeRecordTovoid()]),
    forEachIdentityChange: dart.fnType(dart.void, [CollectionChangeRecordTovoid()]),
    diff: dart.fnType(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, [core.Iterable]),
    onDestroy: dart.fnType(dart.void, []),
    check: dart.fnType(core.bool, [core.Iterable]),
    [_reset]: dart.fnType(dart.void, []),
    [_mismatch]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, dart.dynamic, dart.dynamic, core.int]),
    [_verifyReinsertion]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, dart.dynamic, dart.dynamic, core.int]),
    [_truncate]: dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    [_reinsertAfter]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_moveAfter]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_addAfter]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_insertAfter]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_remove]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    [_unlink]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    [_addToMoves]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int]),
    [_addToRemovals]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    [_addIdentityChange]: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, dart.dynamic])
  }));
  dart.setGetterSignature(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getGetters(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.__proto__),
    collection: dart.fnType(core.Iterable, []),
    length: dart.fnType(core.int, []),
    isDirty: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.__proto__),
    [_trackByFn]: dart.finalFieldType(intAnddynamicToObject()),
    [_length]: dart.fieldType(core.int),
    [_collection]: dart.fieldType(core.Iterable),
    [_linkedRecords]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ._DuplicateMap),
    [_unlinkedRecords]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ._DuplicateMap),
    [_previousItHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_itHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_itTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_additionsHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_additionsTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_movesHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_movesTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_removalsHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_removalsTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_identityChangesHead]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_identityChangesTail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, ['toString']);
  dart.defineLazy(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer, {
    /*src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer._useIdentity*/get _useIdentity() {
      return 1.0 === 1;
    }
  });
  const _prevDup = Symbol('_prevDup');
  const _nextDup = Symbol('_nextDup');
  src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord = class CollectionChangeRecord extends core.Object {
    get item() {
      return this[item$];
    }
    set item(value) {
      this[item$] = value;
    }
    get trackById() {
      return this[trackById$];
    }
    set trackById(value) {
      this[trackById$] = value;
    }
    get currentIndex() {
      return this[currentIndex];
    }
    set currentIndex(value) {
      this[currentIndex] = value;
    }
    get previousIndex() {
      return this[previousIndex];
    }
    set previousIndex(value) {
      this[previousIndex] = value;
    }
    toString() {
      return this.previousIndex == this.currentIndex ? dart.toString(this.item) : dart.str`${this.item}[${this.previousIndex}->${this.currentIndex}]`;
    }
  };
  (src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord.new = function(item, trackById) {
    this[currentIndex] = null;
    this[previousIndex] = null;
    this[_nextPrevious] = null;
    this[_prev] = null;
    this[_next] = null;
    this[_prevDup] = null;
    this[_nextDup] = null;
    this[_prevRemoved] = null;
    this[_nextRemoved] = null;
    this[_nextAdded] = null;
    this[_nextMoved] = null;
    this[_nextIdentityChange] = null;
    this[item$] = item;
    this[trackById$] = trackById;
  }).prototype = src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord);
  const item$ = Symbol("CollectionChangeRecord.item");
  const trackById$ = Symbol("CollectionChangeRecord.trackById");
  const currentIndex = Symbol("CollectionChangeRecord.currentIndex");
  const previousIndex = Symbol("CollectionChangeRecord.previousIndex");
  dart.setFieldSignature(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord.__proto__),
    item: dart.fieldType(dart.dynamic),
    trackById: dart.fieldType(dart.dynamic),
    currentIndex: dart.fieldType(core.int),
    previousIndex: dart.fieldType(core.int),
    [_nextPrevious]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_prev]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_next]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_prevDup]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextDup]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_prevRemoved]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextRemoved]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextAdded]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextMoved]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_nextIdentityChange]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, ['toString']);
  const _head = Symbol('_head');
  const _tail = Symbol('_tail');
  src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList = class _DuplicateItemRecordList extends core.Object {
    add(record) {
      if (this[_head] == null) {
        this[_head] = this[_tail] = record;
        record[_nextDup] = null;
        record[_prevDup] = null;
      } else {
        this[_tail][_nextDup] = record;
        record[_prevDup] = this[_tail];
        record[_nextDup] = null;
        this[_tail] = record;
      }
    }
    get(trackById, afterIndex) {
      let record = null;
      for (record = this[_head]; !(record == null); record = record[_nextDup]) {
        if ((afterIndex == null || dart.notNull(afterIndex) < dart.notNull(record.currentIndex)) && core.identical(record.trackById, trackById)) {
          return record;
        }
      }
      return null;
    }
    remove(record) {
      let prev = record[_prevDup];
      let next = record[_nextDup];
      if (prev == null) {
        this[_head] = next;
      } else {
        prev[_nextDup] = next;
      }
      if (next == null) {
        this[_tail] = prev;
      } else {
        next[_prevDup] = prev;
      }
      return this[_head] == null;
    }
  };
  (src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.new = function() {
    this[_head] = null;
    this[_tail] = null;
  }).prototype = src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList);
  dart.setMethodSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList, () => ({
    __proto__: dart.getMethods(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.__proto__),
    add: dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    get: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [dart.dynamic, core.int]),
    remove: dart.fnType(core.bool, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])
  }));
  dart.setFieldSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.__proto__),
    [_head]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord),
    [_tail]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord)
  }));
  const _map = Symbol('_map');
  src__core__change_detection__differs__default_iterable_differ._DuplicateMap = class _DuplicateMap extends core.Object {
    put(record) {
      let key = record.trackById;
      let duplicates = this[_map][$_get](key);
      if (duplicates == null) {
        duplicates = new src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList.new();
        this[_map][$_set](key, duplicates);
      }
      dart.dsend(duplicates, 'add', record);
    }
    get(trackById, afterIndex) {
      if (afterIndex === void 0) afterIndex = null;
      let recordList = this[_map][$_get](trackById);
      return src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord._check(recordList == null ? null : dart.dsend(recordList, 'get', trackById, afterIndex));
    }
    remove(record) {
      let key = record.trackById;
      let recordList = src__core__change_detection__differs__default_iterable_differ._DuplicateItemRecordList._check(this[_map][$_get](key));
      if (dart.test(recordList.remove(record))) {
        dart.test(this[_map][$containsKey](key)) && (this[_map][$remove](key) != null || true);
      }
      return record;
    }
    get isEmpty() {
      return this[_map][$length] === 0;
    }
    clear() {
      this[_map][$clear]();
    }
    toString() {
      return dart.str`_DuplicateMap(${this[_map]})`;
    }
  };
  (src__core__change_detection__differs__default_iterable_differ._DuplicateMap.new = function() {
    this[_map] = new (IdentityMapOfdynamic$_DuplicateItemRecordList()).new();
  }).prototype = src__core__change_detection__differs__default_iterable_differ._DuplicateMap.prototype;
  (src__core__change_detection__differs__default_iterable_differ._DuplicateMap.withHashcode = function() {
    this[_map] = new (LinkedMapOfdynamic$_DuplicateItemRecordList()).new();
  }).prototype = src__core__change_detection__differs__default_iterable_differ._DuplicateMap.prototype;
  dart.addTypeTests(src__core__change_detection__differs__default_iterable_differ._DuplicateMap);
  dart.setMethodSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getMethods(src__core__change_detection__differs__default_iterable_differ._DuplicateMap.__proto__),
    put: dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    get: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [dart.dynamic], [core.int]),
    remove: dart.fnType(src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord]),
    clear: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getGetters(src__core__change_detection__differs__default_iterable_differ._DuplicateMap.__proto__),
    isEmpty: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__core__change_detection__differs__default_iterable_differ._DuplicateMap, () => ({
    __proto__: dart.getFields(src__core__change_detection__differs__default_iterable_differ._DuplicateMap.__proto__),
    [_map]: dart.fieldType(core.Map)
  }));
  dart.defineExtensionMethods(src__core__change_detection__differs__default_iterable_differ._DuplicateMap, ['toString']);
  src__core__change_detection__differs__default_iterable_differ._getPreviousIndex = function(item, addRemoveOffset, moveOffsets) {
    let previousIndex = item.previousIndex;
    if (previousIndex == null) return previousIndex;
    let moveOffset = 0;
    if (moveOffsets != null && dart.notNull(previousIndex) < dart.notNull(moveOffsets[$length])) {
      moveOffset = moveOffsets[$_get](previousIndex);
    }
    return dart.notNull(previousIndex) + dart.notNull(addRemoveOffset) + dart.notNull(moveOffset);
  };
  dart.fn(src__core__change_detection__differs__default_iterable_differ._getPreviousIndex, CollectionChangeRecordAndintAndListOfintToint());
  dart.trackLibraries("packages/angular/src/core/change_detection/differs/default_iterable_differ.ddc", {
    "package:angular/src/core/change_detection/differs/default_iterable_differ.dart": src__core__change_detection__differs__default_iterable_differ
  }, '{"version":3,"sourceRoot":"","sources":["default_iterable_differ.dart"],"names":[],"mappings":"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","file":"default_iterable_differ.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__differs__default_iterable_differ: src__core__change_detection__differs__default_iterable_differ
  };
});

//# sourceMappingURL=default_iterable_differ.ddc.js.map
