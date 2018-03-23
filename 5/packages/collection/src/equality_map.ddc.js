define(['dart_sdk', 'packages/collection/src/empty_unmodifiable_set'], function(dart_sdk, empty_unmodifiable_set) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__wrappers = empty_unmodifiable_set.src__wrappers;
  const _root = Object.create(null);
  const src__equality_map = Object.create(_root);
  const _is_EqualityMap_default = Symbol('_is_EqualityMap_default');
  src__equality_map.EqualityMap$ = dart.generic((K, V) => {
    let LinkedHashMapOfK$V = () => (LinkedHashMapOfK$V = dart.constFn(collection.LinkedHashMap$(K, V)))();
    class EqualityMap extends src__wrappers.DelegatingMap$(K, V) {}
    (EqualityMap.new = function(equality) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
    }).prototype = EqualityMap.prototype;
    (EqualityMap.from = function(equality, other) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualityMap.prototype;
    dart.addTypeTests(EqualityMap);
    EqualityMap.prototype[_is_EqualityMap_default] = true;
    return EqualityMap;
  });
  src__equality_map.EqualityMap = src__equality_map.EqualityMap$();
  dart.addTypeTests(src__equality_map.EqualityMap, _is_EqualityMap_default);
  dart.trackLibraries("packages/collection/src/equality_map.ddc", {
    "package:collection/src/equality_map.dart": src__equality_map
  }, '{"version":3,"sourceRoot":"","sources":["equality_map.dart"],"names":[],"mappings":";;;;;;;;;;;;;gCAYc,QAAoB;AAC1B,2CAAM,AAAI,wBAAa,oBACX,QAAQ,iCACN,QAAQ,iCACN,QAAQ;IAAa;iCAO1B,QAAoB,EAAE,KAAe;AAChD,2CAAM,AAAI,wBAAa,oBACX,QAAQ,iCACN,QAAQ,iCACN,QAAQ;AAC5B,iBAAM,CAAC,KAAK;IACd","file":"equality_map.ddc.js"}');
  // Exports:
  return {
    src__equality_map: src__equality_map
  };
});

//# sourceMappingURL=equality_map.ddc.js.map
