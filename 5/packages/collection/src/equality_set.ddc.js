define(['dart_sdk', 'packages/collection/src/empty_unmodifiable_set'], function(dart_sdk, empty_unmodifiable_set) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__wrappers = empty_unmodifiable_set.src__wrappers;
  const _root = Object.create(null);
  const src__equality_set = Object.create(_root);
  const _is_EqualitySet_default = Symbol('_is_EqualitySet_default');
  src__equality_set.EqualitySet$ = dart.generic(E => {
    let LinkedHashSetOfE = () => (LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class EqualitySet extends src__wrappers.DelegatingSet$(E) {}
    (EqualitySet.new = function(equality) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
    }).prototype = EqualitySet.prototype;
    (EqualitySet.from = function(equality, other) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualitySet.prototype;
    dart.addTypeTests(EqualitySet);
    EqualitySet.prototype[_is_EqualitySet_default] = true;
    return EqualitySet;
  });
  src__equality_set.EqualitySet = src__equality_set.EqualitySet$();
  dart.addTypeTests(src__equality_set.EqualitySet, _is_EqualitySet_default);
  dart.trackLibraries("packages/collection/src/equality_set.ddc", {
    "package:collection/src/equality_set.dart": src__equality_set
  }, '{"version":3,"sourceRoot":"","sources":["equality_set.dart"],"names":[],"mappings":";;;;;;;;;;;;;gCAYc,QAAoB;AAC1B,2CAAM,AAAI,sBAAa,oBACX,QAAQ,iCACN,QAAQ,iCACN,QAAQ;IAAa;iCAO1B,QAAoB,EAAE,KAAiB;AAClD,2CAAM,AAAI,sBAAa,oBACX,QAAQ,iCACN,QAAQ,iCACN,QAAQ;AAC5B,iBAAM,CAAC,KAAK;IACd","file":"equality_set.ddc.js"}');
  // Exports:
  return {
    src__equality_set: src__equality_set
  };
});

//# sourceMappingURL=equality_set.ddc.js.map
