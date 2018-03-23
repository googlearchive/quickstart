define(['dart_sdk', 'packages/collection/src/comparators'], function(dart_sdk, comparators) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__comparators = comparators.src__comparators;
  const _root = Object.create(null);
  const src__equality = Object.create(_root);
  const $hashCode = dartx.hashCode;
  const $iterator = dartx.iterator;
  const $rightShift = dartx['>>'];
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_equals = dartx._equals;
  const $keys = dartx.keys;
  const $_set = dartx._set;
  let LinkedMapOf_MapEntry$int = () => (LinkedMapOf_MapEntry$int = dart.constFn(_js_helper.LinkedMap$(src__equality._MapEntry, core.int)))();
  let EqualityOfString = () => (EqualityOfString = dart.constFn(src__equality.Equality$(core.String)))();
  dart.defineLazy(src__equality, {
    /*src__equality._HASH_MASK*/get _HASH_MASK() {
      return 2147483647;
    }
  });
  const _is_Equality_default = Symbol('_is_Equality_default');
  src__equality.Equality$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    class Equality extends core.Object {
      static new() {
        return new (DefaultEqualityOfE()).new();
      }
    }
    (Equality[dart.mixinNew] = function() {
    }).prototype = Equality.prototype;
    dart.addTypeTests(Equality);
    Equality.prototype[_is_Equality_default] = true;
    return Equality;
  });
  src__equality.Equality = src__equality.Equality$();
  dart.addTypeTests(src__equality.Equality, _is_Equality_default);
  src__equality._GetKey$ = dart.generic((E, F) => {
    const _GetKey = dart.typedef('_GetKey', () => dart.fnType(F, [E]));
    return _GetKey;
  });
  src__equality._GetKey = src__equality._GetKey$();
  const _getKey = Symbol('_getKey');
  const _inner = Symbol('_inner');
  const _is_EqualityBy_default = Symbol('_is_EqualityBy_default');
  src__equality.EqualityBy$ = dart.generic((E, F) => {
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    let EToF = () => (EToF = dart.constFn(dart.fnType(F, [E])))();
    let DefaultEqualityOfF = () => (DefaultEqualityOfF = dart.constFn(src__equality.DefaultEquality$(F)))();
    let EqualityOfF = () => (EqualityOfF = dart.constFn(src__equality.Equality$(F)))();
    class EqualityBy extends core.Object {
      equals(e1, e2) {
        E._check(e1);
        E._check(e2);
        return this[_inner].equals(this[_getKey](e1), this[_getKey](e2));
      }
      hash(e) {
        E._check(e);
        return this[_inner].hash(this[_getKey](e));
      }
      isValidKey(o) {
        if (E.is(o)) {
          let value = this[_getKey](o);
          return F.is(value) && dart.test(this[_inner].isValidKey(value));
        }
        return false;
      }
    }
    (EqualityBy.new = function(getKey, inner) {
      if (inner === void 0) inner = dart.const(new (DefaultEqualityOfF()).new());
      this[_getKey] = getKey;
      this[_inner] = inner;
    }).prototype = EqualityBy.prototype;
    dart.addTypeTests(EqualityBy);
    EqualityBy.prototype[_is_EqualityBy_default] = true;
    EqualityBy[dart.implements] = () => [EqualityOfE()];
    dart.setMethodSignature(EqualityBy, () => ({
      __proto__: dart.getMethods(EqualityBy.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setFieldSignature(EqualityBy, () => ({
      __proto__: dart.getFields(EqualityBy.__proto__),
      [_getKey]: dart.finalFieldType(EToF()),
      [_inner]: dart.finalFieldType(EqualityOfF())
    }));
    return EqualityBy;
  });
  src__equality.EqualityBy = src__equality.EqualityBy$();
  dart.addTypeTests(src__equality.EqualityBy, _is_EqualityBy_default);
  const _is_DefaultEquality_default = Symbol('_is_DefaultEquality_default');
  src__equality.DefaultEquality$ = dart.generic(E => {
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    class DefaultEquality extends core.Object {
      equals(e1, e2) {
        return dart.equals(e1, e2);
      }
      hash(e) {
        return dart.hashCode(e);
      }
      isValidKey(o) {
        return true;
      }
    }
    (DefaultEquality.new = function() {
    }).prototype = DefaultEquality.prototype;
    dart.addTypeTests(DefaultEquality);
    DefaultEquality.prototype[_is_DefaultEquality_default] = true;
    DefaultEquality[dart.implements] = () => [EqualityOfE()];
    dart.setMethodSignature(DefaultEquality, () => ({
      __proto__: dart.getMethods(DefaultEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    return DefaultEquality;
  });
  src__equality.DefaultEquality = src__equality.DefaultEquality$();
  dart.addTypeTests(src__equality.DefaultEquality, _is_DefaultEquality_default);
  const _is_IdentityEquality_default = Symbol('_is_IdentityEquality_default');
  src__equality.IdentityEquality$ = dart.generic(E => {
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    class IdentityEquality extends core.Object {
      equals(e1, e2) {
        E._check(e1);
        E._check(e2);
        return core.identical(e1, e2);
      }
      hash(e) {
        E._check(e);
        return core.identityHashCode(e);
      }
      isValidKey(o) {
        return true;
      }
    }
    (IdentityEquality.new = function() {
    }).prototype = IdentityEquality.prototype;
    dart.addTypeTests(IdentityEquality);
    IdentityEquality.prototype[_is_IdentityEquality_default] = true;
    IdentityEquality[dart.implements] = () => [EqualityOfE()];
    dart.setMethodSignature(IdentityEquality, () => ({
      __proto__: dart.getMethods(IdentityEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    return IdentityEquality;
  });
  src__equality.IdentityEquality = src__equality.IdentityEquality$();
  dart.addTypeTests(src__equality.IdentityEquality, _is_IdentityEquality_default);
  const _elementEquality = Symbol('_elementEquality');
  const _is_IterableEquality_default = Symbol('_is_IterableEquality_default');
  src__equality.IterableEquality$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EqualityOfIterableOfE = () => (EqualityOfIterableOfE = dart.constFn(src__equality.Equality$(IterableOfE())))();
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    class IterableEquality extends core.Object {
      equals(elements1, elements2) {
        IterableOfE()._check(elements1);
        IterableOfE()._check(elements2);
        if (elements1 == elements2) return true;
        if (elements1 == null || elements2 == null) return false;
        let it1 = elements1[$iterator];
        let it2 = elements2[$iterator];
        while (true) {
          let hasNext = it1.moveNext();
          if (hasNext != it2.moveNext()) return false;
          if (!dart.test(hasNext)) return true;
          if (!dart.test(this[_elementEquality].equals(it1.current, it2.current))) return false;
        }
      }
      hash(elements) {
        IterableOfE()._check(elements);
        if (elements == null) return dart.hashCode(null);
        let hash = 0;
        for (let element of elements) {
          let c = this[_elementEquality].hash(element);
          hash = hash + dart.notNull(c) & 2147483647;
          hash = hash + (hash << 10 >>> 0) & 2147483647;
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = hash + (hash << 3 >>> 0) & 2147483647;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = hash + (hash << 15 >>> 0) & 2147483647;
        return hash;
      }
      isValidKey(o) {
        return IterableOfE().is(o);
      }
    }
    (IterableEquality.new = function(elementEquality) {
      if (elementEquality === void 0) elementEquality = dart.const(new (DefaultEqualityOfE()).new());
      this[_elementEquality] = elementEquality;
    }).prototype = IterableEquality.prototype;
    dart.addTypeTests(IterableEquality);
    IterableEquality.prototype[_is_IterableEquality_default] = true;
    IterableEquality[dart.implements] = () => [EqualityOfIterableOfE()];
    dart.setMethodSignature(IterableEquality, () => ({
      __proto__: dart.getMethods(IterableEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setFieldSignature(IterableEquality, () => ({
      __proto__: dart.getFields(IterableEquality.__proto__),
      [_elementEquality]: dart.finalFieldType(EqualityOfE())
    }));
    return IterableEquality;
  });
  src__equality.IterableEquality = src__equality.IterableEquality$();
  dart.addTypeTests(src__equality.IterableEquality, _is_IterableEquality_default);
  const _is_ListEquality_default = Symbol('_is_ListEquality_default');
  src__equality.ListEquality$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let EqualityOfListOfE = () => (EqualityOfListOfE = dart.constFn(src__equality.Equality$(ListOfE())))();
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    class ListEquality extends core.Object {
      equals(list1, list2) {
        ListOfE()._check(list1);
        ListOfE()._check(list2);
        if (list1 == list2) return true;
        if (list1 == null || list2 == null) return false;
        let length = list1[$length];
        if (length != list2[$length]) return false;
        for (let i = 0; i < dart.notNull(length); i++) {
          if (!dart.test(this[_elementEquality].equals(list1[$_get](i), list2[$_get](i)))) return false;
        }
        return true;
      }
      hash(list) {
        ListOfE()._check(list);
        if (list == null) return dart.hashCode(null);
        let hash = 0;
        for (let i = 0; i < dart.notNull(list[$length]); i++) {
          let c = this[_elementEquality].hash(list[$_get](i));
          hash = hash + dart.notNull(c) & 2147483647;
          hash = hash + (hash << 10 >>> 0) & 2147483647;
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = hash + (hash << 3 >>> 0) & 2147483647;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = hash + (hash << 15 >>> 0) & 2147483647;
        return hash;
      }
      isValidKey(o) {
        return ListOfE().is(o);
      }
    }
    (ListEquality.new = function(elementEquality) {
      if (elementEquality === void 0) elementEquality = dart.const(new (DefaultEqualityOfE()).new());
      this[_elementEquality] = elementEquality;
    }).prototype = ListEquality.prototype;
    dart.addTypeTests(ListEquality);
    ListEquality.prototype[_is_ListEquality_default] = true;
    ListEquality[dart.implements] = () => [EqualityOfListOfE()];
    dart.setMethodSignature(ListEquality, () => ({
      __proto__: dart.getMethods(ListEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setFieldSignature(ListEquality, () => ({
      __proto__: dart.getFields(ListEquality.__proto__),
      [_elementEquality]: dart.finalFieldType(EqualityOfE())
    }));
    return ListEquality;
  });
  src__equality.ListEquality = src__equality.ListEquality$();
  dart.addTypeTests(src__equality.ListEquality, _is_ListEquality_default);
  const _is__UnorderedEquality_default = Symbol('_is__UnorderedEquality_default');
  src__equality._UnorderedEquality$ = dart.generic((E, T) => {
    let HashMapOfE$int = () => (HashMapOfE$int = dart.constFn(collection.HashMap$(E, core.int)))();
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    let EqualityOfT = () => (EqualityOfT = dart.constFn(src__equality.Equality$(T)))();
    class _UnorderedEquality extends core.Object {
      equals(elements1, elements2) {
        T._check(elements1);
        T._check(elements2);
        if (elements1 == elements2) return true;
        if (elements1 == null || elements2 == null) return false;
        let counts = HashMapOfE$int().new({equals: dart.bind(this[_elementEquality], 'equals'), hashCode: dart.bind(this[_elementEquality], 'hash'), isValidKey: dart.bind(this[_elementEquality], 'isValidKey')});
        let length = 0;
        for (let e of elements1) {
          let count = counts._get(e);
          if (count == null) count = 0;
          counts._set(e, dart.notNull(count) + 1);
          length++;
        }
        for (let e of elements2) {
          let count = counts._get(e);
          if (count == null || count === 0) return false;
          counts._set(e, dart.notNull(count) - 1);
          length--;
        }
        return length === 0;
      }
      hash(elements) {
        T._check(elements);
        if (elements == null) return dart.hashCode(null);
        let hash = 0;
        for (let element of elements) {
          let c = this[_elementEquality].hash(element);
          hash = hash + dart.notNull(c) & 2147483647;
        }
        hash = hash + (hash << 3 >>> 0) & 2147483647;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = hash + (hash << 15 >>> 0) & 2147483647;
        return hash;
      }
    }
    (_UnorderedEquality.new = function(elementEquality) {
      this[_elementEquality] = elementEquality;
    }).prototype = _UnorderedEquality.prototype;
    dart.addTypeTests(_UnorderedEquality);
    _UnorderedEquality.prototype[_is__UnorderedEquality_default] = true;
    _UnorderedEquality[dart.implements] = () => [EqualityOfT()];
    dart.setMethodSignature(_UnorderedEquality, () => ({
      __proto__: dart.getMethods(_UnorderedEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object])
    }));
    dart.setFieldSignature(_UnorderedEquality, () => ({
      __proto__: dart.getFields(_UnorderedEquality.__proto__),
      [_elementEquality]: dart.finalFieldType(EqualityOfE())
    }));
    return _UnorderedEquality;
  });
  src__equality._UnorderedEquality = src__equality._UnorderedEquality$();
  dart.addTypeTests(src__equality._UnorderedEquality, _is__UnorderedEquality_default);
  const _is_UnorderedIterableEquality_default = Symbol('_is_UnorderedIterableEquality_default');
  src__equality.UnorderedIterableEquality$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class UnorderedIterableEquality extends src__equality._UnorderedEquality$(E, core.Iterable$(E)) {
      isValidKey(o) {
        return IterableOfE().is(o);
      }
    }
    (UnorderedIterableEquality.new = function(elementEquality) {
      if (elementEquality === void 0) elementEquality = dart.const(new (DefaultEqualityOfE()).new());
      UnorderedIterableEquality.__proto__.new.call(this, elementEquality);
    }).prototype = UnorderedIterableEquality.prototype;
    dart.addTypeTests(UnorderedIterableEquality);
    UnorderedIterableEquality.prototype[_is_UnorderedIterableEquality_default] = true;
    dart.setMethodSignature(UnorderedIterableEquality, () => ({
      __proto__: dart.getMethods(UnorderedIterableEquality.__proto__),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    return UnorderedIterableEquality;
  });
  src__equality.UnorderedIterableEquality = src__equality.UnorderedIterableEquality$();
  dart.addTypeTests(src__equality.UnorderedIterableEquality, _is_UnorderedIterableEquality_default);
  const _is_SetEquality_default = Symbol('_is_SetEquality_default');
  src__equality.SetEquality$ = dart.generic(E => {
    let DefaultEqualityOfE = () => (DefaultEqualityOfE = dart.constFn(src__equality.DefaultEquality$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    class SetEquality extends src__equality._UnorderedEquality$(E, core.Set$(E)) {
      isValidKey(o) {
        return SetOfE().is(o);
      }
    }
    (SetEquality.new = function(elementEquality) {
      if (elementEquality === void 0) elementEquality = dart.const(new (DefaultEqualityOfE()).new());
      SetEquality.__proto__.new.call(this, elementEquality);
    }).prototype = SetEquality.prototype;
    dart.addTypeTests(SetEquality);
    SetEquality.prototype[_is_SetEquality_default] = true;
    dart.setMethodSignature(SetEquality, () => ({
      __proto__: dart.getMethods(SetEquality.__proto__),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    return SetEquality;
  });
  src__equality.SetEquality = src__equality.SetEquality$();
  dart.addTypeTests(src__equality.SetEquality, _is_SetEquality_default);
  const _keyEquality = Symbol('_keyEquality');
  const _valueEquality = Symbol('_valueEquality');
  src__equality._MapEntry = class _MapEntry extends core.Object {
    get hashCode() {
      return 3 * dart.notNull(this.equality[_keyEquality].hash(this.key)) + 7 * dart.notNull(this.equality[_valueEquality].hash(this.value)) & 2147483647;
    }
    _equals(other) {
      if (other == null) return false;
      return src__equality._MapEntry.is(other) && dart.test(this.equality[_keyEquality].equals(this.key, other.key)) && dart.test(this.equality[_valueEquality].equals(this.value, other.value));
    }
  };
  (src__equality._MapEntry.new = function(equality, key, value) {
    this.equality = equality;
    this.key = key;
    this.value = value;
  }).prototype = src__equality._MapEntry.prototype;
  dart.addTypeTests(src__equality._MapEntry);
  dart.setMethodSignature(src__equality._MapEntry, () => ({
    __proto__: dart.getMethods(src__equality._MapEntry.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__equality._MapEntry, () => ({
    __proto__: dart.getFields(src__equality._MapEntry.__proto__),
    equality: dart.finalFieldType(src__equality.MapEquality),
    key: dart.finalFieldType(dart.dynamic),
    value: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__equality._MapEntry, ['_equals']);
  dart.defineExtensionAccessors(src__equality._MapEntry, ['hashCode']);
  const _is_MapEquality_default = Symbol('_is_MapEquality_default');
  src__equality.MapEquality$ = dart.generic((K, V) => {
    let DefaultEqualityOfK = () => (DefaultEqualityOfK = dart.constFn(src__equality.DefaultEquality$(K)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let EqualityOfMapOfK$V = () => (EqualityOfMapOfK$V = dart.constFn(src__equality.Equality$(MapOfK$V())))();
    let EqualityOfK = () => (EqualityOfK = dart.constFn(src__equality.Equality$(K)))();
    let DefaultEqualityOfV = () => (DefaultEqualityOfV = dart.constFn(src__equality.DefaultEquality$(V)))();
    let EqualityOfV = () => (EqualityOfV = dart.constFn(src__equality.Equality$(V)))();
    class MapEquality extends core.Object {
      equals(map1, map2) {
        MapOfK$V()._check(map1);
        MapOfK$V()._check(map2);
        if (map1 == map2) return true;
        if (map1 == null || map2 == null) return false;
        let length = map1[$length];
        if (length != map2[$length]) return false;
        let equalElementCounts = new (LinkedMapOf_MapEntry$int()).new();
        for (let key of map1[$keys]) {
          let entry = new src__equality._MapEntry.new(this, key, map1[$_get](key));
          let count = equalElementCounts[$_get](entry);
          if (count == null) count = 0;
          equalElementCounts[$_set](entry, dart.notNull(count) + 1);
        }
        for (let key of map2[$keys]) {
          let entry = new src__equality._MapEntry.new(this, key, map2[$_get](key));
          let count = equalElementCounts[$_get](entry);
          if (count == null || count === 0) return false;
          equalElementCounts[$_set](entry, dart.notNull(count) - 1);
        }
        return true;
      }
      hash(map) {
        MapOfK$V()._check(map);
        if (map == null) return dart.hashCode(null);
        let hash = 0;
        for (let key of map[$keys]) {
          let keyHash = this[_keyEquality].hash(key);
          let valueHash = this[_valueEquality].hash(map[$_get](key));
          hash = hash + 3 * dart.notNull(keyHash) + 7 * dart.notNull(valueHash) & 2147483647;
        }
        hash = hash + (hash << 3 >>> 0) & 2147483647;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = hash + (hash << 15 >>> 0) & 2147483647;
        return hash;
      }
      isValidKey(o) {
        return MapOfK$V().is(o);
      }
    }
    (MapEquality.new = function(opts) {
      let keys = opts && 'keys' in opts ? opts.keys : dart.const(new (DefaultEqualityOfK()).new());
      let values = opts && 'values' in opts ? opts.values : dart.const(new (DefaultEqualityOfV()).new());
      this[_keyEquality] = keys;
      this[_valueEquality] = values;
    }).prototype = MapEquality.prototype;
    dart.addTypeTests(MapEquality);
    MapEquality.prototype[_is_MapEquality_default] = true;
    MapEquality[dart.implements] = () => [EqualityOfMapOfK$V()];
    dart.setMethodSignature(MapEquality, () => ({
      __proto__: dart.getMethods(MapEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setFieldSignature(MapEquality, () => ({
      __proto__: dart.getFields(MapEquality.__proto__),
      [_keyEquality]: dart.finalFieldType(EqualityOfK()),
      [_valueEquality]: dart.finalFieldType(EqualityOfV())
    }));
    return MapEquality;
  });
  src__equality.MapEquality = src__equality.MapEquality$();
  dart.addTypeTests(src__equality.MapEquality, _is_MapEquality_default);
  const _equalities = Symbol('_equalities');
  const _is_MultiEquality_default = Symbol('_is_MultiEquality_default');
  src__equality.MultiEquality$ = dart.generic(E => {
    let EqualityOfE = () => (EqualityOfE = dart.constFn(src__equality.Equality$(E)))();
    let IterableOfEqualityOfE = () => (IterableOfEqualityOfE = dart.constFn(core.Iterable$(EqualityOfE())))();
    class MultiEquality extends core.Object {
      equals(e1, e2) {
        E._check(e1);
        E._check(e2);
        for (let eq of this[_equalities]) {
          if (dart.test(eq.isValidKey(e1))) return dart.test(eq.isValidKey(e2)) && dart.test(eq.equals(e1, e2));
        }
        return false;
      }
      hash(e) {
        E._check(e);
        for (let eq of this[_equalities]) {
          if (dart.test(eq.isValidKey(e))) return eq.hash(e);
        }
        return 0;
      }
      isValidKey(o) {
        for (let eq of this[_equalities]) {
          if (dart.test(eq.isValidKey(o))) return true;
        }
        return false;
      }
    }
    (MultiEquality.new = function(equalities) {
      this[_equalities] = equalities;
    }).prototype = MultiEquality.prototype;
    dart.addTypeTests(MultiEquality);
    MultiEquality.prototype[_is_MultiEquality_default] = true;
    MultiEquality[dart.implements] = () => [EqualityOfE()];
    dart.setMethodSignature(MultiEquality, () => ({
      __proto__: dart.getMethods(MultiEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setFieldSignature(MultiEquality, () => ({
      __proto__: dart.getFields(MultiEquality.__proto__),
      [_equalities]: dart.finalFieldType(IterableOfEqualityOfE())
    }));
    return MultiEquality;
  });
  src__equality.MultiEquality = src__equality.MultiEquality$();
  dart.addTypeTests(src__equality.MultiEquality, _is_MultiEquality_default);
  let const$;
  const _base = Symbol('_base');
  const _unordered = Symbol('_unordered');
  let const$0;
  src__equality.DeepCollectionEquality = class DeepCollectionEquality extends core.Object {
    equals(e1, e2) {
      if (core.Set.is(e1)) {
        return core.Set.is(e2) && dart.test(new src__equality.SetEquality.new(this).equals(e1, e2));
      }
      if (core.Map.is(e1)) {
        return core.Map.is(e2) && dart.test(new src__equality.MapEquality.new({keys: this, values: this}).equals(e1, e2));
      }
      if (!dart.test(this[_unordered])) {
        if (core.List.is(e1)) {
          return core.List.is(e2) && dart.test(new src__equality.ListEquality.new(this).equals(e1, e2));
        }
        if (core.Iterable.is(e1)) {
          return core.Iterable.is(e2) && dart.test(new src__equality.IterableEquality.new(this).equals(e1, e2));
        }
      } else if (core.Iterable.is(e1)) {
        if (core.List.is(e1) !== core.List.is(e2)) return false;
        return core.Iterable.is(e2) && dart.test(new src__equality.UnorderedIterableEquality.new(this).equals(e1, e2));
      }
      return this[_base].equals(e1, e2);
    }
    hash(o) {
      if (core.Set.is(o)) return new src__equality.SetEquality.new(this).hash(o);
      if (core.Map.is(o)) return new src__equality.MapEquality.new({keys: this, values: this}).hash(o);
      if (!dart.test(this[_unordered])) {
        if (core.List.is(o)) return new src__equality.ListEquality.new(this).hash(o);
        if (core.Iterable.is(o)) return new src__equality.IterableEquality.new(this).hash(o);
      } else if (core.Iterable.is(o)) {
        return new src__equality.UnorderedIterableEquality.new(this).hash(o);
      }
      return this[_base].hash(o);
    }
    isValidKey(o) {
      return core.Iterable.is(o) || core.Map.is(o) || dart.test(this[_base].isValidKey(o));
    }
  };
  (src__equality.DeepCollectionEquality.new = function(base) {
    if (base === void 0) base = const$ || (const$ = dart.const(new src__equality.DefaultEquality.new()));
    this[_base] = base;
    this[_unordered] = false;
  }).prototype = src__equality.DeepCollectionEquality.prototype;
  (src__equality.DeepCollectionEquality.unordered = function(base) {
    if (base === void 0) base = const$0 || (const$0 = dart.const(new src__equality.DefaultEquality.new()));
    this[_base] = base;
    this[_unordered] = true;
  }).prototype = src__equality.DeepCollectionEquality.prototype;
  dart.addTypeTests(src__equality.DeepCollectionEquality);
  src__equality.DeepCollectionEquality[dart.implements] = () => [src__equality.Equality];
  dart.setMethodSignature(src__equality.DeepCollectionEquality, () => ({
    __proto__: dart.getMethods(src__equality.DeepCollectionEquality.__proto__),
    equals: dart.fnType(core.bool, [dart.dynamic, dart.dynamic]),
    hash: dart.fnType(core.int, [core.Object]),
    isValidKey: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__equality.DeepCollectionEquality, () => ({
    __proto__: dart.getFields(src__equality.DeepCollectionEquality.__proto__),
    [_base]: dart.finalFieldType(src__equality.Equality),
    [_unordered]: dart.finalFieldType(core.bool)
  }));
  src__equality.CaseInsensitiveEquality = class CaseInsensitiveEquality extends core.Object {
    equals(string1, string2) {
      core.String._check(string1);
      core.String._check(string2);
      return src__comparators.equalsIgnoreAsciiCase(string1, string2);
    }
    hash(string) {
      core.String._check(string);
      return src__comparators.hashIgnoreAsciiCase(string);
    }
    isValidKey(object) {
      return typeof object == 'string';
    }
  };
  (src__equality.CaseInsensitiveEquality.new = function() {
  }).prototype = src__equality.CaseInsensitiveEquality.prototype;
  dart.addTypeTests(src__equality.CaseInsensitiveEquality);
  src__equality.CaseInsensitiveEquality[dart.implements] = () => [EqualityOfString()];
  dart.setMethodSignature(src__equality.CaseInsensitiveEquality, () => ({
    __proto__: dart.getMethods(src__equality.CaseInsensitiveEquality.__proto__),
    equals: dart.fnType(core.bool, [core.Object, core.Object]),
    hash: dart.fnType(core.int, [core.Object]),
    isValidKey: dart.fnType(core.bool, [core.Object])
  }));
  dart.trackLibraries("packages/collection/src/equality.ddc", {
    "package:collection/src/equality.dart": src__equality
  }, '{"version":3,"sourceRoot":"","sources":["equality.dart"],"names":[],"mappings":"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","file":"equality.ddc.js"}');
  // Exports:
  return {
    src__equality: src__equality
  };
});

//# sourceMappingURL=equality.ddc.js.map
