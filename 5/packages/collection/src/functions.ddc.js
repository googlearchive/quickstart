define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, utils) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const _root = Object.create(null);
  const src__functions = Object.create(_root);
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $addAll = dartx.addAll;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $putIfAbsent = dartx.putIfAbsent;
  const $add = dartx.add;
  const $toList = dartx.toList;
  const $keys = dartx.keys;
  const $removeLast = dartx.removeLast;
  const $reversed = dartx.reversed;
  let MapOfK1$V1__ToMapOfK2$V2 = () => (MapOfK1$V1__ToMapOfK2$V2 = dart.constFn(dart.gFnType((K1, V1, K2, V2) => [core.Map$(K2, V2), [core.Map$(K1, V1)], {key: dart.fnType(K2, [K1, V1]), value: dart.fnType(V2, [K1, V1])}])))();
  let MapOfK$VAndMapOfK$V__ToMapOfK$V = () => (MapOfK$VAndMapOfK$V__ToMapOfK$V = dart.constFn(dart.gFnType((K, V) => [core.Map$(K, V), [core.Map$(K, V), core.Map$(K, V)], {value: dart.fnType(V, [V, V])}])))();
  let IterableOfSAndFnToMapOfT$ListOfS = () => (IterableOfSAndFnToMapOfT$ListOfS = dart.constFn(dart.gFnType((S, T) => [core.Map$(T, core.List$(S)), [core.Iterable$(S), dart.fnType(T, [S])]])))();
  let IterableOfSAndFn__ToS = () => (IterableOfSAndFn__ToS = dart.constFn(dart.gFnType((S, T) => [S, [core.Iterable$(S), dart.fnType(T, [S])], {compare: dart.fnType(core.int, [T, T])}])))();
  let IterableOfSAndFn__ToS$ = () => (IterableOfSAndFn__ToS$ = dart.constFn(dart.gFnType((S, T) => [S, [core.Iterable$(S), dart.fnType(T, [S])], {compare: dart.fnType(core.int, [T, T])}])))();
  let MapOfT$IterableOfTToMapOfT$SetOfT = () => (MapOfT$IterableOfTToMapOfT$SetOfT = dart.constFn(dart.gFnType(T => [core.Map$(T, core.Set$(T)), [core.Map$(T, core.Iterable$(T))]])))();
  let MapOfT$IterableOfTToListOfSetOfT = () => (MapOfT$IterableOfTToListOfSetOfT = dart.constFn(dart.gFnType(T => [core.List$(core.Set$(T)), [core.Map$(T, core.Iterable$(T))]])))();
  src__functions.mapMap = function(K1, V1, K2, V2, map, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let t = key;
    t == null ? key = dart.fn((mapKey, _) => K2.as(mapKey), dart.fnType(K2, [K1, V1])) : t;
    let t$ = value;
    t$ == null ? value = dart.fn((_, mapValue) => V2.as(mapValue), dart.fnType(V2, [K1, V1])) : t$;
    let result = new (_js_helper.LinkedMap$(K2, V2)).new();
    map[$forEach](dart.fn((mapKey, mapValue) => {
      result[$_set](key(mapKey, mapValue), value(mapKey, mapValue));
    }, dart.fnType(core.Null, [K1, V1])));
    return result;
  };
  dart.fn(src__functions.mapMap, MapOfK1$V1__ToMapOfK2$V2());
  src__functions.mergeMaps = function(K, V, map1, map2, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let result = core.Map$(K, V).from(map1);
    if (value == null) {
      result[$addAll](map2);
      return result;
    }
    map2[$forEach](dart.fn((key, mapValue) => {
      result[$_set](key, dart.test(result[$containsKey](key)) ? value(result[$_get](key), mapValue) : mapValue);
    }, dart.fnType(core.Null, [K, V])));
    return result;
  };
  dart.fn(src__functions.mergeMaps, MapOfK$VAndMapOfK$V__ToMapOfK$V());
  src__functions.groupBy = function(S, T, values, key) {
    let map = new (_js_helper.LinkedMap$(T, core.List$(S))).new();
    for (let element of values) {
      let list = map[$putIfAbsent](key(element), dart.fn(() => _interceptors.JSArray$(S).of([]), dart.fnType(core.List$(S), [])));
      list[$add](element);
    }
    return map;
  };
  dart.fn(src__functions.groupBy, IterableOfSAndFnToMapOfT$ListOfS());
  src__functions.minBy = function(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let t = compare;
    t == null ? compare = src__utils.defaultCompare(T) : t;
    let minValue = null;
    let minOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (minOrderBy == null || dart.notNull(compare(elementOrderBy, minOrderBy)) < 0) {
        minValue = element;
        minOrderBy = elementOrderBy;
      }
    }
    return minValue;
  };
  dart.fn(src__functions.minBy, IterableOfSAndFn__ToS());
  src__functions.maxBy = function(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let t = compare;
    t == null ? compare = src__utils.defaultCompare(T) : t;
    let maxValue = null;
    let maxOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (maxOrderBy == null || dart.notNull(compare(elementOrderBy, maxOrderBy)) > 0) {
        maxValue = element;
        maxOrderBy = elementOrderBy;
      }
    }
    return maxValue;
  };
  dart.fn(src__functions.maxBy, IterableOfSAndFn__ToS$());
  src__functions.transitiveClosure = function(T, graph) {
    let result = new (_js_helper.LinkedMap$(T, core.Set$(T))).new();
    graph[$forEach](dart.fn((vertex, edges) => {
      result[$_set](vertex, core.Set$(T).from(edges));
    }, dart.fnType(core.Null, [T, core.Iterable$(T)])));
    let keys = graph[$keys][$toList]();
    for (let vertex1 of keys) {
      for (let vertex2 of keys) {
        for (let vertex3 of keys) {
          if (dart.test(result[$_get](vertex2).contains(vertex1)) && dart.test(result[$_get](vertex1).contains(vertex3))) {
            result[$_get](vertex2).add(vertex3);
          }
        }
      }
    }
    return result;
  };
  dart.fn(src__functions.transitiveClosure, MapOfT$IterableOfTToMapOfT$SetOfT());
  src__functions.stronglyConnectedComponents = function(T, graph) {
    let index = 0;
    let stack = _interceptors.JSArray$(T).of([]);
    let result = _interceptors.JSArray$(core.Set$(T)).of([]);
    let indices = new (_js_helper.LinkedMap$(T, core.int)).new();
    let lowLinks = new (_js_helper.LinkedMap$(T, core.int)).new();
    let onStack = new (collection._HashSet$(T)).new();
    function strongConnect(vertex) {
      indices._set(vertex, index);
      lowLinks._set(vertex, index);
      index++;
      stack[$add](vertex);
      onStack.add(vertex);
      for (let successor of graph[$_get](vertex)) {
        if (!dart.test(indices.containsKey(successor))) {
          strongConnect(successor);
          lowLinks._set(vertex, math.min(core.int, lowLinks._get(vertex), lowLinks._get(successor)));
        } else if (dart.test(onStack.contains(successor))) {
          lowLinks._set(vertex, math.min(core.int, lowLinks._get(vertex), lowLinks._get(successor)));
        }
      }
      if (lowLinks._get(vertex) == indices._get(vertex)) {
        let component = new (collection._HashSet$(T)).new();
        let neighbor = null;
        do {
          neighbor = stack[$removeLast]();
          onStack.remove(neighbor);
          component.add(neighbor);
        } while (!dart.equals(neighbor, vertex));
        result[$add](component);
      }
    }
    dart.fn(strongConnect, dart.fnType(core.Null, [T]));
    for (let vertex of graph[$keys]) {
      if (!dart.test(indices.containsKey(vertex))) strongConnect(vertex);
    }
    return result[$reversed][$toList]();
  };
  dart.fn(src__functions.stronglyConnectedComponents, MapOfT$IterableOfTToListOfSetOfT());
  dart.trackLibraries("packages/collection/src/functions.ddc", {
    "package:collection/src/functions.dart": src__functions
  }, '{"version":3,"sourceRoot":"","sources":["functions.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mDAemC,GAAe;QAC1C;QAA0B;AAChC,eAAG;gBAAH,GAAG,GAAK,SAAC,MAAM,EAAE,CAAC,WAAK,MAAM;AAC7B,kBAAK;iBAAL,KAAK,GAAK,SAAC,CAAC,EAAE,QAAQ,WAAK,QAAQ;AAEnC,QAAI,SAAS;AACb,OAAG,UAAQ,CAAC,SAAC,MAAM,EAAE,QAAQ;AAC3B,YAAM,QAAC,GAAG,CAAC,MAAM,EAAE,QAAQ,GAAK,KAAK,CAAC,MAAM,EAAE,QAAQ;;AAExD,UAAO,OAAM;EACf;;4CAO0B,IAAc,EAAE,IAAc;QACjD;AACL,QAAI,SAAS,AAAI,oBAAc,CAAC,IAAI;AACpC,QAAI,KAAK,IAAI,MAAM;MAAa,AAAE,eAAM,CAAC,IAAI;YAAnB,OAAM;;AAEhC,QAAI,UAAQ,CAAC,SAAC,GAAG,EAAE,QAAQ;AACzB,YAAM,QAAC,GAAG,YACN,MAAM,cAAY,CAAC,GAAG,KAAI,KAAK,CAAC,MAAM,QAAC,GAAG,GAAG,QAAQ,IAAI,QAAQ;;AAEvE,UAAO,OAAM;EACf;;0CAO8B,MAAkB,EAAE,GAAgB;AAChE,QAAI,MAAM;AACV,aAAS,UAAW,OAAM,EAAE;AAC1B,UAAI,OAAO,GAAG,cAAY,CAAC,GAAG,CAAC,OAAO,GAAG,cAAM;AAC/C,UAAI,MAAI,CAAC,OAAO;;AAElB,UAAO,IAAG;EACZ;;wCAQc,MAAkB,EAAE,OAAoB;QAC7C;AACP,mBAAO;gBAAP,OAAO,GAAK,yBAAc;AAE1B,QAAE;AACF,QAAE;AACF,aAAS,UAAW,OAAM,EAAE;AAC1B,UAAI,iBAAiB,OAAO,CAAC,OAAO;AACpC,UAAI,UAAU,IAAI,QAA4C,aAApC,OAAO,CAAC,cAAc,EAAE,UAAU,KAAI,GAAG;AACjE,gBAAQ,GAAG,OAAO;AAClB,kBAAU,GAAG,cAAc;;;AAG/B,UAAO,SAAQ;EACjB;;wCAQc,MAAkB,EAAE,OAAoB;QAC7C;AACP,mBAAO;gBAAP,OAAO,GAAK,yBAAc;AAE1B,QAAE;AACF,QAAE;AACF,aAAS,UAAW,OAAM,EAAE;AAC1B,UAAI,iBAAiB,OAAO,CAAC,OAAO;AACpC,UAAI,UAAU,IAAI,QAA4C,aAApC,OAAO,CAAC,cAAc,EAAE,UAAU,KAAI,GAAG;AACjE,gBAAQ,GAAG,OAAO;AAClB,kBAAU,GAAG,cAAc;;;AAG/B,UAAO,SAAQ;EACjB;;iDAaoC,KAAyB;AAK3D,QAAI,SAAS;AACb,SAAK,UAAQ,CAAC,SAAC,MAAM,EAAE,KAAK;AAC1B,YAAM,QAAC,MAAM,EAAI,AAAI,iBAAW,CAAC,KAAK;;AAKxC,QAAI,OAAO,KAAK,OAAK,SAAO;AAC5B,aAAS,UAAW,KAAI,EAAE;AACxB,eAAS,UAAW,KAAI,EAAE;AACxB,iBAAS,UAAW,KAAI,EAAE;AACxB,wBAAI,MAAM,QAAC,OAAO,UAAU,CAAC,OAAO,gBAChC,MAAM,QAAC,OAAO,UAAU,CAAC,OAAO,IAAG;AACrC,kBAAM,QAAC,OAAO,KAAK,CAAC,OAAO;;;;;AAMnC,UAAO,OAAM;EACf;;2DAc4C,KAAyB;AAInE,QAAI,QAAQ;AACZ,QAAI,QAAQ;AACZ,QAAI,SAAS;AAIb,QAAI,UAAU;AACd,QAAI,WAAW;AACf,QAAI,UAAU;AAEd,2BAAc,MAAQ;AACpB,aAAO,MAAC,MAAM,EAAI,KAAK;AACvB,cAAQ,MAAC,MAAM,EAAI,KAAK;AACxB,WAAK;AAEL,WAAK,MAAI,CAAC,MAAM;AAChB,aAAO,IAAI,CAAC,MAAM;AAElB,eAAS,YAAa,MAAK,QAAC,MAAM,GAAG;AACnC,uBAAK,OAAO,YAAY,CAAC,SAAS,IAAG;AACnC,uBAAa,CAAC,SAAS;AACvB,kBAAQ,MAAC,MAAM,EAAI,AAAK,QAAG,WAAC,QAAQ,MAAC,MAAM,GAAG,QAAQ,MAAC,SAAS;cAC3D,eAAI,OAAO,SAAS,CAAC,SAAS,IAAG;AACtC,kBAAQ,MAAC,MAAM,EAAI,AAAK,QAAG,WAAC,QAAQ,MAAC,MAAM,GAAG,QAAQ,MAAC,SAAS;;;AAIpE,UAAI,QAAQ,MAAC,MAAM,KAAK,OAAO,MAAC,MAAM,GAAG;AACvC,YAAI,YAAY;AAChB,YAAE;AACF,WAAG;AACD,kBAAQ,GAAG,KAAK,aAAW;AAC3B,iBAAO,OAAO,CAAC,QAAQ;AACvB,mBAAS,IAAI,CAAC,QAAQ;8BACf,QAAQ,EAAI,MAAM;AAC3B,cAAM,MAAI,CAAC,SAAS;;;YAzBxB;AA6BA,aAAS,SAAU,MAAK,OAAK,EAAE;AAC7B,qBAAK,OAAO,YAAY,CAAC,MAAM,IAAG,aAAa,CAAC,MAAM;;AAKxD,UAAO,OAAM,WAAS,SAAO;EAC/B","file":"functions.ddc.js"}');
  // Exports:
  return {
    src__functions: src__functions
  };
});

//# sourceMappingURL=functions.ddc.js.map
