define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__combined_wrappers__combined_list = Object.create(_root);
  const $length = dartx.length;
  const $fold = dartx.fold;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const _lists = Symbol('_lists');
  const _is_CombinedListView_default = Symbol('_is_CombinedListView_default');
  src__combined_wrappers__combined_list.CombinedListView$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let intAndListOfTToint = () => (intAndListOfTToint = dart.constFn(dart.fnType(core.int, [core.int, ListOfT()])))();
    let UnmodifiableListViewOfT = () => (UnmodifiableListViewOfT = dart.constFn(collection.UnmodifiableListView$(T)))();
    let ListOfListOfT = () => (ListOfListOfT = dart.constFn(core.List$(ListOfT())))();
    class CombinedListView extends collection.ListBase$(T) {
      static _throw() {
        dart.throw(new core.UnsupportedError.new('Cannot modify an unmodifiable List'));
      }
      set length(length) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      get length() {
        return this[_lists][$fold](core.int, 0, dart.fn((length, list) => dart.notNull(length) + dart.notNull(list[$length]), intAndListOfTToint()));
      }
      _get(index) {
        let initialIndex = index;
        for (let i = 0; i < dart.notNull(this[_lists][$length]); i++) {
          let list = this[_lists][$_get](i);
          if (dart.notNull(index) < dart.notNull(list[$length])) {
            return list[$_get](index);
          }
          index = dart.notNull(index) - dart.notNull(list[$length]);
        }
        dart.throw(core.RangeError.index(initialIndex, this, 'index', null, this.length));
      }
      _set(index, value) {
        T._check(value);
        src__combined_wrappers__combined_list.CombinedListView._throw();
        return value;
      }
      clear() {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      remove(element) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
        return null;
      }
      removeWhere(filter) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      retainWhere(filter) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
    }
    (CombinedListView.new = function(lists) {
      this[_lists] = lists;
    }).prototype = CombinedListView.prototype;
    dart.addTypeTests(CombinedListView);
    CombinedListView.prototype[_is_CombinedListView_default] = true;
    CombinedListView[dart.implements] = () => [UnmodifiableListViewOfT()];
    dart.setMethodSignature(CombinedListView, () => ({
      __proto__: dart.getMethods(CombinedListView.__proto__),
      _get: dart.fnType(T, [core.int]),
      [$_get]: dart.fnType(T, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object])
    }));
    dart.setStaticMethodSignature(CombinedListView, () => ({_throw: dart.fnType(dart.void, [])}));
    dart.setGetterSignature(CombinedListView, () => ({
      __proto__: dart.getGetters(CombinedListView.__proto__),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, [])
    }));
    dart.setSetterSignature(CombinedListView, () => ({
      __proto__: dart.getSetters(CombinedListView.__proto__),
      length: dart.fnType(dart.void, [core.int]),
      [$length]: dart.fnType(dart.void, [core.int])
    }));
    dart.setFieldSignature(CombinedListView, () => ({
      __proto__: dart.getFields(CombinedListView.__proto__),
      [_lists]: dart.finalFieldType(ListOfListOfT())
    }));
    dart.defineExtensionMethods(CombinedListView, [
      '_get',
      '_set',
      'clear',
      'remove',
      'removeWhere',
      'retainWhere'
    ]);
    dart.defineExtensionAccessors(CombinedListView, ['length']);
    return CombinedListView;
  });
  src__combined_wrappers__combined_list.CombinedListView = src__combined_wrappers__combined_list.CombinedListView$();
  dart.addTypeTests(src__combined_wrappers__combined_list.CombinedListView, _is_CombinedListView_default);
  dart.trackLibraries("packages/collection/src/combined_wrappers/combined_list.ddc", {
    "package:collection/src/combined_wrappers/combined_list.dart": src__combined_wrappers__combined_list
  }, '{"version":3,"sourceRoot":"","sources":["combined_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AAkBI,mBAAM,IAAI,yBAAgB,CAAC;MAC7B;iBAQW,MAAU;AACnB,qEAAM;MACR;;cAEkB,aAAM,OAAK,WAAC,GAAG,SAAC,MAAM,EAAE,IAAI,KAAY,aAAP,MAAM,iBAAG,IAAI,SAAO;MAAC;WAE1D,KAAS;AACrB,YAAI,eAAe,KAAK;AACxB,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,YAAM,SAAO,GAAE,CAAC,IAAI;AACtC,cAAI,OAAO,YAAM,QAAC,CAAC;AACnB,cAAU,aAAN,KAAK,iBAAG,IAAI,SAAO,GAAE;AACvB,kBAAO,KAAI,QAAC,KAAK;;AAEnB,eAAK,GAxCX,aAwCM,KAAK,iBAAI,IAAI,SAAO;;AAEtB,mBAAM,AAAI,qBAAgB,CAAC,YAAY,EAAE,MAAM,SAAS,MAAM,WAAM;MACtE;WAEkB,KAAS,EAAE,KAAO;iBAAL;AAC7B,qEAAM;cADqB,MAAO;MAEpC;;AAGE,qEAAM;MACR;aAEY,OAAc;AACxB,qEAAM;AACN,cAAO;MACT;kBAEiB,MAAsB;AACrC,qEAAM;MACR;kBAEiB,MAAsB;AACrC,qEAAM;MACR;;qCAvCsB,KAAM;MAAN,YAAM,GAAN,KAAM;IAAC","file":"combined_list.ddc.js"}');
  // Exports:
  return {
    src__combined_wrappers__combined_list: src__combined_wrappers__combined_list
  };
});

//# sourceMappingURL=combined_list.ddc.js.map
