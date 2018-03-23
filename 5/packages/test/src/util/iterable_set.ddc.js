define(['dart_sdk', 'packages/collection/src/empty_unmodifiable_set'], function(dart_sdk, empty_unmodifiable_set) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__unmodifiable_wrappers = empty_unmodifiable_set.src__unmodifiable_wrappers;
  const _root = Object.create(null);
  const src__util__iterable_set = Object.create(_root);
  const $length = dartx.length;
  const $iterator = dartx.iterator;
  const $contains = dartx.contains;
  const $firstWhere = dartx.firstWhere;
  const $toSet = dartx.toSet;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _base = Symbol('_base');
  const _is_IterableSet_default = Symbol('_is_IterableSet_default');
  src__util__iterable_set.IterableSet$ = dart.generic(E => {
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    const SetMixin_UnmodifiableSetMixin$ = class SetMixin_UnmodifiableSetMixin extends collection.SetMixin$(E) {};
    (SetMixin_UnmodifiableSetMixin$.new = function() {
    }).prototype = SetMixin_UnmodifiableSetMixin$.prototype;
    dart.mixinMembers(SetMixin_UnmodifiableSetMixin$, src__unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class IterableSet extends SetMixin_UnmodifiableSetMixin$ {
      get length() {
        return this[_base][$length];
      }
      get iterator() {
        return this[_base][$iterator];
      }
      contains(element) {
        return this[_base][$contains](element);
      }
      lookup(needle) {
        return this[_base][$firstWhere](dart.fn(element => dart.equals(element, needle), ETobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      toSet() {
        return this[_base][$toSet]();
      }
    }
    (IterableSet.new = function(base) {
      this[_base] = base;
    }).prototype = IterableSet.prototype;
    dart.addTypeTests(IterableSet);
    IterableSet.prototype[_is_IterableSet_default] = true;
    dart.setMethodSignature(IterableSet, () => ({
      __proto__: dart.getMethods(IterableSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      lookup: dart.fnType(E, [core.Object]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), [])
    }));
    dart.setGetterSignature(IterableSet, () => ({
      __proto__: dart.getGetters(IterableSet.__proto__),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, []),
      iterator: dart.fnType(core.Iterator$(E), []),
      [$iterator]: dart.fnType(core.Iterator$(E), [])
    }));
    dart.setFieldSignature(IterableSet, () => ({
      __proto__: dart.getFields(IterableSet.__proto__),
      [_base]: dart.finalFieldType(IterableOfE())
    }));
    dart.defineExtensionMethods(IterableSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(IterableSet, ['length', 'iterator']);
    return IterableSet;
  });
  src__util__iterable_set.IterableSet = src__util__iterable_set.IterableSet$();
  dart.addTypeTests(src__util__iterable_set.IterableSet, _is_IterableSet_default);
  dart.trackLibraries("packages/test/src/util/iterable_set.ddc", {
    "package:test/src/util/iterable_set.dart": src__util__iterable_set
  }, '{"version":3,"sourceRoot":"","sources":["iterable_set.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;cAqBoB,YAAK,SAAO;;;cAEF,YAAK,WAAS;;eAK5B,OAAc;cAAK,YAAK,WAAS,CAAC,OAAO;MAAC;aAE/C,MAAa;cAClB,YAAK,aAAW,CAAC,QAAC,OAAO,gBAAK,OAAO,EAAI,MAAM,wBAAU,cAAM;MAAK;;cAEtD,YAAK,QAAM;MAAE;;gCAPd,IAAK;MAAL,WAAK,GAAL,IAAK;IAAC","file":"iterable_set.ddc.js"}');
  // Exports:
  return {
    src__util__iterable_set: src__util__iterable_set
  };
});

//# sourceMappingURL=iterable_set.ddc.js.map
