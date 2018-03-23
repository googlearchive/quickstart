define(['dart_sdk', 'packages/collection/src/empty_unmodifiable_set'], function(dart_sdk, empty_unmodifiable_set) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__unmodifiable_wrappers = empty_unmodifiable_set.src__unmodifiable_wrappers;
  const _root = Object.create(null);
  const src__union_set = Object.create(_root);
  const $toSet = dartx.toSet;
  const $length = dartx.length;
  const $iterator = dartx.iterator;
  const $where = dartx.where;
  const $firstWhere = dartx.firstWhere;
  const $contains = dartx.contains;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _sets = Symbol('_sets');
  const _disjoint = Symbol('_disjoint');
  const _iterable = Symbol('_iterable');
  const _dedupIterable = Symbol('_dedupIterable');
  const _is_UnionSet_default = Symbol('_is_UnionSet_default');
  src__union_set.UnionSet$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let intAndSetOfEToint = () => (intAndSetOfEToint = dart.constFn(dart.fnType(core.int, [core.int, SetOfE()])))();
    let SetOfEToSetOfE = () => (SetOfEToSetOfE = dart.constFn(dart.fnType(SetOfE(), [SetOfE()])))();
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let SetOfETobool = () => (SetOfETobool = dart.constFn(dart.fnType(core.bool, [SetOfE()])))();
    let SetOfEToE = () => (SetOfEToE = dart.constFn(dart.fnType(E, [SetOfE()])))();
    let SetOfSetOfE = () => (SetOfSetOfE = dart.constFn(core.Set$(SetOfE())))();
    const SetBase_UnmodifiableSetMixin$ = class SetBase_UnmodifiableSetMixin extends collection.SetBase$(E) {};
    (SetBase_UnmodifiableSetMixin$.new = function() {
    }).prototype = SetBase_UnmodifiableSetMixin$.prototype;
    dart.mixinMembers(SetBase_UnmodifiableSetMixin$, src__unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnionSet extends SetBase_UnmodifiableSetMixin$ {
      get length() {
        return dart.test(this[_disjoint]) ? this[_sets].fold(core.int, 0, dart.fn((length, set) => dart.notNull(length) + dart.notNull(set.length), intAndSetOfEToint())) : this[_iterable][$length];
      }
      get iterator() {
        return this[_iterable][$iterator];
      }
      get [_iterable]() {
        return dart.test(this[_disjoint]) ? this[_sets].expand(E, dart.fn(set => set, SetOfEToSetOfE())) : this[_dedupIterable];
      }
      get [_dedupIterable]() {
        let seen = new (_HashSetOfE()).new();
        return this[_sets].expand(E, dart.fn(set => set, SetOfEToSetOfE()))[$where](dart.fn(element => {
          if (dart.test(seen.contains(element))) return false;
          seen.add(element);
          return true;
        }, ETobool()));
      }
      contains(element) {
        return this[_sets].any(dart.fn(set => set.contains(element), SetOfETobool()));
      }
      lookup(element) {
        if (element == null) return null;
        return this[_sets].map(E, dart.fn(set => set.lookup(element), SetOfEToE()))[$firstWhere](dart.fn(result => result != null, ETobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      toSet() {
        let result = new (_HashSetOfE()).new();
        for (let set of this[_sets]) {
          result.addAll(set);
        }
        return result;
      }
    }
    (UnionSet.new = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_sets] = sets;
      this[_disjoint] = disjoint;
    }).prototype = UnionSet.prototype;
    (UnionSet.from = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      UnionSet.new.call(this, sets[$toSet](), {disjoint: disjoint});
    }).prototype = UnionSet.prototype;
    dart.addTypeTests(UnionSet);
    UnionSet.prototype[_is_UnionSet_default] = true;
    dart.setMethodSignature(UnionSet, () => ({
      __proto__: dart.getMethods(UnionSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      lookup: dart.fnType(E, [core.Object]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), [])
    }));
    dart.setGetterSignature(UnionSet, () => ({
      __proto__: dart.getGetters(UnionSet.__proto__),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, []),
      iterator: dart.fnType(core.Iterator$(E), []),
      [$iterator]: dart.fnType(core.Iterator$(E), []),
      [_iterable]: dart.fnType(core.Iterable$(E), []),
      [_dedupIterable]: dart.fnType(core.Iterable$(E), [])
    }));
    dart.setFieldSignature(UnionSet, () => ({
      __proto__: dart.getFields(UnionSet.__proto__),
      [_sets]: dart.finalFieldType(SetOfSetOfE()),
      [_disjoint]: dart.finalFieldType(core.bool)
    }));
    dart.defineExtensionMethods(UnionSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(UnionSet, ['length', 'iterator']);
    return UnionSet;
  });
  src__union_set.UnionSet = src__union_set.UnionSet$();
  dart.addTypeTests(src__union_set.UnionSet, _is_UnionSet_default);
  dart.trackLibraries("packages/collection/src/union_set.ddc", {
    "package:collection/src/union_set.dart": src__union_set
  }, '{"version":3,"sourceRoot":"","sources":["union_set.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yBA8CoB,eAAS,IACrB,WAAK,KAAK,WAAC,GAAG,SAAC,MAAM,EAAE,GAAG,KAAY,aAAP,MAAM,iBAAG,GAAG,OAAO,2BAClD,eAAS,SAAO;;;cAEM,gBAAS,WAAS;;;yBAI1C,eAAS,IAAG,WAAK,OAAO,IAAC,QAAC,GAAG,IAAK,GAAG,uBAAI,oBAAc;;;AAQzD,YAAI,OAAO;AACX,cAAO,YAAK,OAAO,IAAC,QAAC,GAAG,IAAK,GAAG,4BAAO,CAAC,QAAC,OAAO;AAC9C,wBAAI,IAAI,SAAS,CAAC,OAAO,IAAG,MAAO;AACnC,cAAI,IAAI,CAAC,OAAO;AAChB,gBAAO;;MAEX;eAEc,OAAc;cAAK,YAAK,IAAI,CAAC,QAAC,GAAG,IAAK,GAAG,SAAS,CAAC,OAAO;MAAE;aAEjE,OAAc;AACrB,YAAI,OAAO,IAAI,MAAM,MAAO;AAE5B,cAAO,YAAK,IACJ,IAAC,QAAC,GAAG,IAAK,GAAG,OAAO,CAAC,OAAO,6BACrB,CAAC,QAAC,MAAM,IAAK,MAAM,IAAI,2BAAc,cAAM;MAC5D;;AAGE,YAAI,SAAS;AACb,iBAAS,MAAO,YAAK,EAAE;AACrB,gBAAM,OAAO,CAAC,GAAG;;AAEnB,cAAO,OAAM;MACf;;6BAvDc,IAAK;UAAQ,wDAAU;MAAvB,WAAK,GAAL,IAAK;MAA4B,eAAS,GAAG,QAAQ;;8BAYrD,IAAqB;UAAQ,wDAAU;8BAC1C,IAAI,QAAM,eAAc,QAAQ;IAAC","file":"union_set.ddc.js"}');
  // Exports:
  return {
    src__union_set: src__union_set
  };
});

//# sourceMappingURL=union_set.ddc.js.map
