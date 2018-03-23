define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__combined_wrappers__combined_iterable = Object.create(_root);
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $contains = dartx.contains;
  const $any = dartx.any;
  const $isEmpty = dartx.isEmpty;
  const $every = dartx.every;
  const $length = dartx.length;
  const $fold = dartx.fold;
  const _iterables = Symbol('_iterables');
  const _is_CombinedIterableView_default = Symbol('_is_CombinedIterableView_default');
  src__combined_wrappers__combined_iterable.CombinedIterableView$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    let _CombinedIteratorOfT = () => (_CombinedIteratorOfT = dart.constFn(src__combined_wrappers__combined_iterable._CombinedIterator$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    let intAndIterableOfTToint = () => (intAndIterableOfTToint = dart.constFn(dart.fnType(core.int, [core.int, IterableOfT()])))();
    let IterableOfIterableOfT = () => (IterableOfIterableOfT = dart.constFn(core.Iterable$(IterableOfT())))();
    class CombinedIterableView extends collection.IterableBase$(T) {
      get iterator() {
        return new (_CombinedIteratorOfT()).new(this[_iterables][$map](IteratorOfT(), dart.fn(i => i[$iterator], IterableOfTToIteratorOfT()))[$iterator]);
      }
      contains(element) {
        return this[_iterables][$any](dart.fn(i => i[$contains](element), IterableOfTTobool()));
      }
      get isEmpty() {
        return this[_iterables][$every](dart.fn(i => i[$isEmpty], IterableOfTTobool()));
      }
      get length() {
        return this[_iterables][$fold](core.int, 0, dart.fn((length, i) => dart.notNull(length) + dart.notNull(i[$length]), intAndIterableOfTToint()));
      }
    }
    (CombinedIterableView.new = function(iterables) {
      this[_iterables] = iterables;
      CombinedIterableView.__proto__.new.call(this);
    }).prototype = CombinedIterableView.prototype;
    dart.addTypeTests(CombinedIterableView);
    CombinedIterableView.prototype[_is_CombinedIterableView_default] = true;
    dart.setGetterSignature(CombinedIterableView, () => ({
      __proto__: dart.getGetters(CombinedIterableView.__proto__),
      iterator: dart.fnType(core.Iterator$(T), []),
      [$iterator]: dart.fnType(core.Iterator$(T), [])
    }));
    dart.setFieldSignature(CombinedIterableView, () => ({
      __proto__: dart.getFields(CombinedIterableView.__proto__),
      [_iterables]: dart.finalFieldType(IterableOfIterableOfT())
    }));
    dart.defineExtensionMethods(CombinedIterableView, ['contains']);
    dart.defineExtensionAccessors(CombinedIterableView, ['iterator', 'isEmpty', 'length']);
    return CombinedIterableView;
  });
  src__combined_wrappers__combined_iterable.CombinedIterableView = src__combined_wrappers__combined_iterable.CombinedIterableView$();
  dart.addTypeTests(src__combined_wrappers__combined_iterable.CombinedIterableView, _is_CombinedIterableView_default);
  const _iterators = Symbol('_iterators');
  const _is__CombinedIterator_default = Symbol('_is__CombinedIterator_default');
  src__combined_wrappers__combined_iterable._CombinedIterator$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IteratorOfIteratorOfT = () => (IteratorOfIteratorOfT = dart.constFn(core.Iterator$(IteratorOfT())))();
    class _CombinedIterator extends core.Object {
      get current() {
        let t = this[_iterators].current;
        return t == null ? null : t.current;
      }
      moveNext() {
        let current = this[_iterators].current;
        if (current != null && dart.test(current.moveNext())) {
          return true;
        }
        return dart.test(this[_iterators].moveNext()) && dart.test(this.moveNext());
      }
    }
    (_CombinedIterator.new = function(iterators) {
      this[_iterators] = iterators;
    }).prototype = _CombinedIterator.prototype;
    dart.addTypeTests(_CombinedIterator);
    _CombinedIterator.prototype[_is__CombinedIterator_default] = true;
    _CombinedIterator[dart.implements] = () => [IteratorOfT()];
    dart.setMethodSignature(_CombinedIterator, () => ({
      __proto__: dart.getMethods(_CombinedIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_CombinedIterator, () => ({
      __proto__: dart.getGetters(_CombinedIterator.__proto__),
      current: dart.fnType(T, [])
    }));
    dart.setFieldSignature(_CombinedIterator, () => ({
      __proto__: dart.getFields(_CombinedIterator.__proto__),
      [_iterators]: dart.finalFieldType(IteratorOfIteratorOfT())
    }));
    return _CombinedIterator;
  });
  src__combined_wrappers__combined_iterable._CombinedIterator = src__combined_wrappers__combined_iterable._CombinedIterator$();
  dart.addTypeTests(src__combined_wrappers__combined_iterable._CombinedIterator, _is__CombinedIterator_default);
  dart.trackLibraries("packages/collection/src/combined_wrappers/combined_iterable.ddc", {
    "package:collection/src/combined_wrappers/combined_iterable.dart": src__combined_wrappers__combined_iterable
  }, '{"version":3,"sourceRoot":"","sources":["combined_iterable.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;cAqBM,KAAI,4BAAoB,CAAC,gBAAU,MAAI,gBAAC,QAAC,CAAC,IAAK,CAAC,WAAS,yCAAU;MAAC;eAK1D,OAAc;cAAK,iBAAU,MAAI,CAAC,QAAC,CAAC,IAAK,CAAC,WAAS,CAAC,OAAO;MAAE;;cAEvD,iBAAU,QAAM,CAAC,QAAC,CAAC,IAAK,CAAC,UAAQ;MAAC;;cAEpC,iBAAU,OAAK,WAAC,GAAG,SAAC,MAAM,EAAE,CAAC,KAAY,aAAP,MAAM,iBAAG,CAAC,SAAO;MAAC;;yCAZtC,SAAU;MAAV,gBAAU,GAAV,SAAU;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;gBA2B1B,gBAAU,QAAQ;;MAAS;;AAG1C,YAAI,UAAU,gBAAU,QAAQ;AAChC,YAAI,OAAO,IAAI,kBAAQ,OAAO,SAAS,KAAI;AACzC,gBAAO;;AAET,cAA6B,WAAtB,gBAAU,SAAS,iBAAM,aAAQ;MAC1C;;sCAVuB,SAAU;MAAV,gBAAU,GAAV,SAAU;IAAC","file":"combined_iterable.ddc.js"}');
  // Exports:
  return {
    src__combined_wrappers__combined_iterable: src__combined_wrappers__combined_iterable
  };
});

//# sourceMappingURL=combined_iterable.ddc.js.map
