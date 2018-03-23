define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__linker__query_list = Object.create(_root);
  const $iterator = dartx.iterator;
  const $length = dartx.length;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $last = dartx.last;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $add = dartx.add;
  let ListAndListTovoid = () => (ListAndListTovoid = dart.constFn(dart.fnType(dart.void, [core.List, core.List])))();
  const _dirty = Symbol('_dirty');
  const _results = Symbol('_results');
  const _streamController = Symbol('_streamController');
  const _is_QueryList_default = Symbol('_is_QueryList_default');
  src__core__linker__query_list.QueryList$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let StreamControllerOfIterableOfT = () => (StreamControllerOfIterableOfT = dart.constFn(async.StreamController$(IterableOfT())))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    const Object_IterableMixin$ = class Object_IterableMixin extends core.Object {};
    (Object_IterableMixin$.new = function() {
    }).prototype = Object_IterableMixin$.prototype;
    dart.mixinMembers(Object_IterableMixin$, collection.IterableMixin$(T));
    class QueryList extends Object_IterableMixin$ {
      get iterator() {
        return this[_results][$iterator];
      }
      get changes() {
        let t = this[_streamController];
        t == null ? this[_streamController] = StreamControllerOfIterableOfT().broadcast() : t;
        return this[_streamController].stream;
      }
      get length() {
        return this[_results][$length];
      }
      get first() {
        return dart.test(this[_results][$isNotEmpty]) ? this[_results][$first] : null;
      }
      get last() {
        return dart.test(this[_results][$isNotEmpty]) ? this[_results][$last] : null;
      }
      toString() {
        return dart.toString(this[_results]);
      }
      reset(newList) {
        ListOfT()._check(newList);
        let itemCount = newList[$length];
        for (let i = 0; i < dart.notNull(itemCount); i++) {
          if (core.List.is(newList[$_get](i))) {
            let results = JSArrayOfT().of([]);
            src__core__linker__query_list._flattenList(newList, results);
            this[_results] = results;
            this[_dirty] = false;
            return;
          }
        }
        this[_results] = newList;
        this[_dirty] = false;
      }
      notifyOnChanges() {
        let t = this[_streamController];
        t == null ? this[_streamController] = StreamControllerOfIterableOfT().broadcast() : t;
        this[_streamController].add(this);
      }
      get dirty() {
        return this[_dirty];
      }
      setDirty() {
        this[_dirty] = true;
      }
    }
    (QueryList.new = function() {
      this[_dirty] = true;
      this[_results] = dart.constList([], T);
      this[_streamController] = null;
    }).prototype = QueryList.prototype;
    dart.addTypeTests(QueryList);
    QueryList.prototype[_is_QueryList_default] = true;
    dart.setMethodSignature(QueryList, () => ({
      __proto__: dart.getMethods(QueryList.__proto__),
      reset: dart.fnType(dart.void, [core.Object]),
      notifyOnChanges: dart.fnType(dart.void, []),
      setDirty: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(QueryList, () => ({
      __proto__: dart.getGetters(QueryList.__proto__),
      iterator: dart.fnType(core.Iterator$(T), []),
      [$iterator]: dart.fnType(core.Iterator$(T), []),
      changes: dart.fnType(async.Stream$(core.Iterable$(T)), []),
      dirty: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(QueryList, () => ({
      __proto__: dart.getFields(QueryList.__proto__),
      [_dirty]: dart.fieldType(core.bool),
      [_results]: dart.fieldType(ListOfT()),
      [_streamController]: dart.fieldType(StreamControllerOfIterableOfT())
    }));
    dart.defineExtensionMethods(QueryList, ['toString']);
    dart.defineExtensionAccessors(QueryList, ['iterator', 'length', 'first', 'last']);
    return QueryList;
  });
  src__core__linker__query_list.QueryList = src__core__linker__query_list.QueryList$();
  dart.addTypeTests(src__core__linker__query_list.QueryList, _is_QueryList_default);
  src__core__linker__query_list._flattenList = function(items, results) {
    let itemCount = items[$length];
    for (let i = 0; i < dart.notNull(itemCount); i++) {
      let item = items[$_get](i);
      if (core.List.is(item)) {
        src__core__linker__query_list._flattenList(item, results);
      } else {
        results[$add](item);
      }
    }
  };
  dart.fn(src__core__linker__query_list._flattenList, ListAndListTovoid());
  dart.trackLibraries("packages/angular/src/core/linker/query_list.ddc", {
    "package:angular/src/core/linker/query_list.dart": src__core__linker__query_list
  }, '{"version":3,"sourceRoot":"","sources":["query_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAiB8B,eAAQ,WAAS;;;AAG3C,uCAAiB;8CAAK,AAAI,yCAAuC;AACjE,cAAO,wBAAiB,OAAO;MACjC;;cAEkB,eAAQ,SAAO;;;yBAClB,cAAQ,aAAW,IAAG,cAAQ,QAAM,GAAG;MAAI;;yBAC5C,cAAQ,aAAW,IAAG,cAAQ,OAAK,GAAG;MAAI;;AAGtD,6BAAO,cAAQ;MACjB;YAGW,OAAe;yBAAP;AACjB,YAAI,YAAY,OAAO,SAAO;AAC9B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,SAAS,GAAE,CAAC,IAAI;AAClC,2BAAI,OAAO,QAAC,CAAC,IAAW;AACtB,gBAAI,UAAU;AACd,sDAAY,CAAC,OAAO,EAAE,OAAO;AAC7B,0BAAQ,GAAG,OAAO;AAClB,wBAAM,GAAG;AACT;;;AAGJ,sBAAQ,GAAG,OAAO;AAClB,oBAAM,GAAG;MACX;;AAIE,uCAAiB;8CAAK,AAAI,yCAAuC;AACjE,+BAAiB,IAAI,CAAC;MACxB;;cAEkB,aAAM;;;AAGtB,oBAAM,GAAG;MACX;;;MA9CK,YAAM,GAAG;MACN,cAAQ,GAAG;MACW,uBAAiB;IA6CjD;;;;;;;;;;;;;;;;;;;;;;;;;;;;wDAEkB,KAAU,EAAE,OAAY;AACxC,QAAI,YAAY,KAAK,SAAO;AAC5B,aAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,SAAS,GAAE,CAAC,IAAI;AAClC,UAAI,OAAO,KAAK,QAAC,CAAC;AAClB,uBAAI,IAAI,GAAU;AAChB,kDAAY,CAAC,IAAI,EAAE,OAAO;aACrB;AACL,eAAO,MAAI,CAAC,IAAI;;;EAGtB","file":"query_list.ddc.js"}');
  // Exports:
  return {
    src__core__linker__query_list: src__core__linker__query_list
  };
});

//# sourceMappingURL=query_list.ddc.js.map
