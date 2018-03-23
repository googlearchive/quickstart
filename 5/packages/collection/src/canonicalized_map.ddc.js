define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, utils) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const _root = Object.create(null);
  const src__canonicalized_map = Object.create(_root);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $map = dartx.map;
  const $addEntries = dartx.addEntries;
  const $cast = dartx.cast;
  const $clear = dartx.clear;
  const $containsKey = dartx.containsKey;
  const $any = dartx.any;
  const $values = dartx.values;
  const $entries = dartx.entries;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $putIfAbsent = dartx.putIfAbsent;
  const $remove = dartx.remove;
  const $removeWhere = dartx.removeWhere;
  const $retype = dartx.retype;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $containsValue = dartx.containsValue;
  const $toString = dartx.toString;
  const $keys = dartx.keys;
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  src__canonicalized_map._Canonicalize$ = dart.generic((C, K) => {
    const _Canonicalize = dart.typedef('_Canonicalize', () => dart.fnType(C, [K]));
    return _Canonicalize;
  });
  src__canonicalized_map._Canonicalize = src__canonicalized_map._Canonicalize$();
  src__canonicalized_map._IsValidKey = dart.typedef('_IsValidKey', () => dart.fnType(core.bool, [core.Object]));
  const _canonicalize = Symbol('_canonicalize');
  const _isValidKeyFn = Symbol('_isValidKeyFn');
  const _base = Symbol('_base');
  const _isValidKey = Symbol('_isValidKey');
  const _is_CanonicalizedMap_default = Symbol('_is_CanonicalizedMap_default');
  src__canonicalized_map.CanonicalizedMap$ = dart.generic((C, K, V) => {
    let LinkedMapOfC$PairOfK$V = () => (LinkedMapOfC$PairOfK$V = dart.constFn(_js_helper.LinkedMap$(C, PairOfK$V())))();
    let MapEntryOfC$PairOfK$V = () => (MapEntryOfC$PairOfK$V = dart.constFn(core.MapEntry$(C, PairOfK$V())))();
    let MapEntryOfK$VToMapEntryOfC$PairOfK$V = () => (MapEntryOfK$VToMapEntryOfC$PairOfK$V = dart.constFn(dart.fnType(MapEntryOfC$PairOfK$V(), [MapEntryOfK$V()])))();
    let MapEntryOfC$PairOfK$VToMapEntryOfK$V = () => (MapEntryOfC$PairOfK$VToMapEntryOfK$V = dart.constFn(dart.fnType(MapEntryOfK$V(), [MapEntryOfC$PairOfK$V()])))();
    let CAndPairOfK$VTovoid = () => (CAndPairOfK$VTovoid = dart.constFn(dart.fnType(dart.void, [C, PairOfK$V()])))();
    let CAndPairOfK$VTobool = () => (CAndPairOfK$VTobool = dart.constFn(dart.fnType(core.bool, [C, PairOfK$V()])))();
    let CAndPairOfK$VToPairOfK$V = () => (CAndPairOfK$VToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [C, PairOfK$V()])))();
    let KToC = () => (KToC = dart.constFn(dart.fnType(C, [K])))();
    let MapOfC$PairOfK$V = () => (MapOfC$PairOfK$V = dart.constFn(core.Map$(C, PairOfK$V())))();
    let PairOfK$V = () => (PairOfK$V = dart.constFn(src__utils.Pair$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let PairOfK$VTobool = () => (PairOfK$VTobool = dart.constFn(dart.fnType(core.bool, [PairOfK$V()])))();
    let PairOfK$VToK = () => (PairOfK$VToK = dart.constFn(dart.fnType(K, [PairOfK$V()])))();
    let VoidToPairOfK$V = () => (VoidToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [])))();
    let PairOfK$VToPairOfK$V = () => (PairOfK$VToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [PairOfK$V()])))();
    let PairOfK$VToV = () => (PairOfK$VToV = dart.constFn(dart.fnType(V, [PairOfK$V()])))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let KAndVTovoid = () => (KAndVTovoid = dart.constFn(dart.fnType(dart.void, [K, V])))();
    let KAndVTobool = () => (KAndVTobool = dart.constFn(dart.fnType(core.bool, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class CanonicalizedMap extends core.Object {
      _get(key) {
        if (!dart.test(this[_isValidKey](key))) return null;
        let pair = this[_base][$_get](this[_canonicalize](K.as(key)));
        return pair == null ? null : pair.last;
      }
      _set(key, value) {
        (() => {
          K._check(key);
          V._check(value);
          if (!dart.test(this[_isValidKey](key))) return;
          this[_base][$_set](this[_canonicalize](key), new (PairOfK$V()).new(key, value));
        })();
        return value;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        other[$forEach](dart.fn((key, value) => this._set(key, value), KAndVToV()));
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        return this[_base][$addEntries](entries[$map](MapEntryOfC$PairOfK$V(), dart.fn(e => MapEntryOfC$PairOfK$V().new(this[_canonicalize](e.key), new (PairOfK$V()).new(e.key, e.value)), MapEntryOfK$VToMapEntryOfC$PairOfK$V())));
      }
      cast(K2, V2) {
        return this[_base][$cast](K2, V2);
      }
      clear() {
        this[_base][$clear]();
      }
      containsKey(key) {
        if (!dart.test(this[_isValidKey](key))) return false;
        return this[_base][$containsKey](this[_canonicalize](K.as(key)));
      }
      containsValue(value) {
        return this[_base][$values][$any](dart.fn(pair => dart.equals(pair.last, value), PairOfK$VTobool()));
      }
      get entries() {
        return this[_base][$entries][$map](MapEntryOfK$V(), dart.fn(e => MapEntryOfK$V().new(e.value.first, e.value.last), MapEntryOfC$PairOfK$VToMapEntryOfK$V()));
      }
      forEach(f) {
        this[_base][$forEach](dart.fn((key, pair) => f(pair.first, pair.last), CAndPairOfK$VTovoid()));
      }
      get isEmpty() {
        return this[_base][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base][$isNotEmpty];
      }
      get keys() {
        return this[_base][$values][$map](K, dart.fn(pair => pair.first, PairOfK$VToK()));
      }
      get length() {
        return this[_base][$length];
      }
      map(K2, V2, transform) {
        return this[_base][$map](K2, V2, dart.fn((_, pair) => transform(pair.first, pair.last), dart.fnType(core.MapEntry$(K2, V2), [C, PairOfK$V()])));
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        return this[_base][$putIfAbsent](this[_canonicalize](key), dart.fn(() => new (PairOfK$V()).new(key, ifAbsent()), VoidToPairOfK$V())).last;
      }
      remove(key) {
        if (!dart.test(this[_isValidKey](key))) return null;
        let pair = this[_base][$remove](this[_canonicalize](K.as(key)));
        return pair == null ? null : pair.last;
      }
      removeWhere(test) {
        return this[_base][$removeWhere](dart.fn((_, pair) => test(pair.first, pair.last), CAndPairOfK$VTobool()));
      }
      retype(K2, V2) {
        return this[_base][$retype](K2, V2);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_base][$update](this[_canonicalize](key), dart.fn(pair => new (PairOfK$V()).new(key, update(pair.last)), PairOfK$VToPairOfK$V()), {ifAbsent: ifAbsent == null ? null : dart.fn(() => new (PairOfK$V()).new(key, ifAbsent()), VoidToPairOfK$V())}).last;
      }
      updateAll(update) {
        KAndVToV()._check(update);
        return this[_base][$updateAll](dart.fn((_, pair) => new (PairOfK$V()).new(pair.first, update(pair.first, pair.last)), CAndPairOfK$VToPairOfK$V()));
      }
      get values() {
        return this[_base][$values][$map](V, dart.fn(pair => pair.last, PairOfK$VToV()));
      }
      toString() {
        if (dart.test(src__canonicalized_map._isToStringVisiting(this))) {
          return '{...}';
        }
        let result = new core.StringBuffer.new();
        try {
          src__canonicalized_map._toStringVisiting[$add](this);
          result.write('{');
          let first = true;
          this.forEach(dart.fn((k, v) => {
            if (!first) {
              result.write(', ');
            }
            first = false;
            result.write(dart.str`${k}: ${v}`);
          }, KAndVToNull()));
          result.write('}');
        } finally {
          if (!(src__canonicalized_map._toStringVisiting[$last] === this)) dart.assertFailed();
          src__canonicalized_map._toStringVisiting[$removeLast]();
        }
        return result.toString();
      }
      [_isValidKey](key) {
        return (key == null || K.is(key)) && (this[_isValidKeyFn] == null || dart.test(this[_isValidKeyFn](key)));
      }
    }
    (CanonicalizedMap.new = function(canonicalize, opts) {
      let isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
      this[_base] = new (LinkedMapOfC$PairOfK$V()).new();
      this[_canonicalize] = canonicalize;
      this[_isValidKeyFn] = isValidKey;
    }).prototype = CanonicalizedMap.prototype;
    (CanonicalizedMap.from = function(other, canonicalize, opts) {
      let isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
      this[_base] = new (LinkedMapOfC$PairOfK$V()).new();
      this[_canonicalize] = canonicalize;
      this[_isValidKeyFn] = isValidKey;
      this.addAll(other);
    }).prototype = CanonicalizedMap.prototype;
    CanonicalizedMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CanonicalizedMap);
    CanonicalizedMap.prototype[_is_CanonicalizedMap_default] = true;
    CanonicalizedMap[dart.implements] = () => [MapOfK$V()];
    dart.setMethodSignature(CanonicalizedMap, () => ({
      __proto__: dart.getMethods(CanonicalizedMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [KAndVTovoid()]),
      [$forEach]: dart.fnType(dart.void, [KAndVTovoid()]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [KAndVTobool()]),
      [$removeWhere]: dart.fnType(dart.void, [KAndVTobool()]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$retype]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, []),
      [_isValidKey]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(CanonicalizedMap, () => ({
      __proto__: dart.getGetters(CanonicalizedMap.__proto__),
      entries: dart.fnType(core.Iterable$(core.MapEntry$(K, V)), []),
      [$entries]: dart.fnType(core.Iterable$(core.MapEntry$(K, V)), []),
      isEmpty: dart.fnType(core.bool, []),
      [$isEmpty]: dart.fnType(core.bool, []),
      isNotEmpty: dart.fnType(core.bool, []),
      [$isNotEmpty]: dart.fnType(core.bool, []),
      keys: dart.fnType(core.Iterable$(K), []),
      [$keys]: dart.fnType(core.Iterable$(K), []),
      length: dart.fnType(core.int, []),
      [$length]: dart.fnType(core.int, []),
      values: dart.fnType(core.Iterable$(V), []),
      [$values]: dart.fnType(core.Iterable$(V), [])
    }));
    dart.setFieldSignature(CanonicalizedMap, () => ({
      __proto__: dart.getFields(CanonicalizedMap.__proto__),
      [_canonicalize]: dart.finalFieldType(KToC()),
      [_isValidKeyFn]: dart.finalFieldType(ObjectTobool()),
      [_base]: dart.finalFieldType(MapOfC$PairOfK$V())
    }));
    dart.defineExtensionMethods(CanonicalizedMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'cast',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'retype',
      'update',
      'updateAll',
      'toString'
    ]);
    dart.defineExtensionAccessors(CanonicalizedMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CanonicalizedMap;
  });
  src__canonicalized_map.CanonicalizedMap = src__canonicalized_map.CanonicalizedMap$();
  dart.addTypeTests(src__canonicalized_map.CanonicalizedMap, _is_CanonicalizedMap_default);
  dart.defineLazy(src__canonicalized_map, {
    /*src__canonicalized_map._toStringVisiting*/get _toStringVisiting() {
      return [];
    }
  });
  src__canonicalized_map._isToStringVisiting = function(o) {
    return src__canonicalized_map._toStringVisiting[$any](dart.fn(e => core.identical(o, e), dynamicTobool()));
  };
  dart.fn(src__canonicalized_map._isToStringVisiting, dynamicTobool());
  dart.trackLibraries("packages/collection/src/canonicalized_map.ddc", {
    "package:collection/src/canonicalized_map.dart": src__canonicalized_map
  }, '{"version":3,"sourceRoot":"","sources":["canonicalized_map.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;WAwDgB,GAAU;AACtB,uBAAK,iBAAW,CAAC,GAAG,IAAG,MAAO;AAC9B,YAAI,OAAO,WAAK,QAAC,mBAAa,MAAC,GAAG;AAClC,cAAO,KAAI,IAAI,OAAO,OAAO,IAAI,KAAK;MACxC;WAEkB,GAAK,EAAE,KAAO;;mBAAZ;mBAAO;AACzB,yBAAK,iBAAW,CAAC,GAAG,IAAG;AACvB,qBAAK,QAAC,mBAAa,CAAC,GAAG,GAAK,IAAI,iBAAI,CAAC,GAAG,EAAE,KAAK;;cAFxB,MAAO;MAGhC;aAEY,KAAe;0BAAL;AACpB,aAAK,UAAQ,CAAC,SAAC,GAAG,EAAE,KAAK,KAAK,UAAK,GAAG,EAAI,KAAK;MACjD;iBAEgB,OAAgC;yCAAP;cACrC,YAAK,aAAW,CAAC,OAAO,MAAI,0BACxB,QAAC,CAAC,IAAK,AAAI,2BAAQ,CAAC,mBAAa,CAAC,CAAC,IAAI,GAAG,IAAI,iBAAI,CAAC,CAAC,IAAI,EAAE,CAAC,MAAM;MAAI;;cAE/C,YAAK,OAAK;MAAU;;AAGhD,mBAAK,QAAM;MACb;kBAEiB,GAAU;AACzB,uBAAK,iBAAW,CAAC,GAAG,IAAG,MAAO;AAC9B,cAAO,YAAK,cAAY,CAAC,mBAAa,MAAC,GAAG;MAC5C;oBAEmB,KAAY;cAC3B,YAAK,SAAO,MAAI,CAAC,QAAC,IAAI,gBAAK,IAAI,KAAK,EAAI,KAAK;MAAC;;cAG9C,YAAK,UAAQ,MAAI,kBAAC,QAAC,CAAC,IAAK,AAAI,mBAAQ,CAAC,CAAC,MAAM,MAAM,EAAE,CAAC,MAAM,KAAK;MAAE;cAE1D,CAAsB;AACjC,mBAAK,UAAQ,CAAC,SAAC,GAAG,EAAE,IAAI,KAAK,CAAC,CAAC,IAAI,MAAM,EAAE,IAAI,KAAK;MACtD;;cAEoB,YAAK,UAAQ;;;cAEV,YAAK,aAAW;;;cAEf,YAAK,SAAO,MAAI,IAAC,QAAC,IAAI,IAAK,IAAI,MAAM;MAAC;;cAE5C,YAAK,SAAO;;kBAEN,SAA0C;cAC9D,YAAK,MAAI,SAAC,SAAC,CAAC,EAAE,IAAI,KAAK,SAAS,CAAC,IAAI,MAAM,EAAE,IAAI,KAAK;MAAE;kBAE9C,GAAK,EAAE,QAAY;iBAAjB;yBAAO;AACrB,cAAO,YAAK,cACI,CAAC,mBAAa,CAAC,GAAG,GAAG,cAAM,IAAI,iBAAI,CAAC,GAAG,EAAE,QAAQ,6BACxD;MACX;aAES,GAAU;AACjB,uBAAK,iBAAW,CAAC,GAAG,IAAG,MAAO;AAC9B,YAAI,OAAO,WAAK,SAAO,CAAC,mBAAa,MAAC,GAAG;AACzC,cAAO,KAAI,IAAI,OAAO,OAAO,IAAI,KAAK;MACxC;kBAEiB,IAAyB;cACtC,YAAK,cAAY,CAAC,SAAC,CAAC,EAAE,IAAI,KAAK,IAAI,CAAC,IAAI,MAAM,EAAE,IAAI,KAAK;MAAE;;cAE/B,YAAK,SAAO;MAAU;aAE7C,GAAK,EAAE,MAAiB;iBAAtB;sBAAO;YAAoB;;cAAgB,YAAK,SAChD,CAAC,mBAAa,CAAC,GAAG,GAAG,QAAC,IAAI,IAAK,IAAI,iBAAI,CAAC,GAAG,EAAE,MAAM,CAAC,IAAI,KAAK,wCACtD,QAAQ,IAAI,OAAO,OAAO,cAAM,IAAI,iBAAI,CAAC,GAAG,EAAE,QAAQ,8BAC/D;;gBAEM,MAAwB;0BAAtB;cAA2B,YAAK,YAAU,CACvD,SAAC,CAAC,EAAE,IAAI,KAAK,IAAI,iBAAI,CAAC,IAAI,MAAM,EAAE,MAAM,CAAC,IAAI,MAAM,EAAE,IAAI,KAAK;MAAG;;cAE3C,YAAK,SAAO,MAAI,IAAC,QAAC,IAAI,IAAK,IAAI,KAAK;MAAC;;AAI7D,sBAAI,0CAAmB,CAAC,QAAO;AAC7B,gBAAO;;AAGT,YAAI,SAAS,IAAI,qBAAY;AAC7B,YAAI;AACF,kDAAiB,MAAI,CAAC;AACtB,gBAAM,MAAM,CAAC;AACb,cAAK,QAAQ;AACb,sBAAO,CAAC,SAAC,CAAC,EAAE,CAAC;AACX,iBAAK,KAAK,EAAE;AACV,oBAAM,MAAM,CAAC;;AAEf,iBAAK,GAAG;AACR,kBAAM,MAAM,CAAC,WAAE,CAAC,KAAG,CAAC;;AAEtB,gBAAM,MAAM,CAAC;kBACL;AACR,gBAAO,AAAU,wCAAiB,OAAK,KAAE;AACzC,kDAAiB,aAAW;;AAG9B,cAAO,OAAM,SAAS;MACxB;oBAEiB,GAAU;cACG,EAAzB,GAAG,IAAI,aAAQ,GAAG,OAClB,mBAAa,IAAI,kBAAQ,mBAAa,CAAC,GAAG;MAAE;;qCA/HhC,YAAqB;UAAQ;MAVxC,WAAK,GAAG;MAWR,mBAAa,GAAG,YAAY;MAC5B,mBAAa,GAAG,UAAU;;sCAWV,KAAe,EAAE,YAAqB;UAClD;MAxBJ,WAAK,GAAG;MAyBR,mBAAa,GAAG,YAAY;MAC5B,mBAAa,GAAG,UAAU;AAC9B,iBAAM,CAAC,KAAK;IACd;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAiHS,wCAAiB;YAAG;;;wDAGN,CAAC;UAAK,yCAAiB,MAAI,CAAC,QAAC,CAAC,IAAK,eAAU,CAAC,EAAE,CAAC;EAAE","file":"canonicalized_map.ddc.js"}');
  // Exports:
  return {
    src__canonicalized_map: src__canonicalized_map
  };
});

//# sourceMappingURL=canonicalized_map.ddc.js.map
