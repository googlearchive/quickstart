define(['dart_sdk', 'packages/collection/src/combined_wrappers/combined_iterable'], function(dart_sdk, combined_iterable) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__combined_wrappers__combined_iterable = combined_iterable.src__combined_wrappers__combined_iterable;
  const _root = Object.create(null);
  const src__combined_wrappers__combined_map = Object.create(_root);
  const $_get = dartx._get;
  const $containsKey = dartx.containsKey;
  const $keys = dartx.keys;
  const $map = dartx.map;
  const _maps = Symbol('_maps');
  const _is_CombinedMapView_default = Symbol('_is_CombinedMapView_default');
  src__combined_wrappers__combined_map.CombinedMapView$ = dart.generic((K, V) => {
    let IterableOfK = () => (IterableOfK = dart.constFn(core.Iterable$(K)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let MapOfK$VToIterableOfK = () => (MapOfK$VToIterableOfK = dart.constFn(dart.fnType(IterableOfK(), [MapOfK$V()])))();
    let CombinedIterableViewOfK = () => (CombinedIterableViewOfK = dart.constFn(src__combined_wrappers__combined_iterable.CombinedIterableView$(K)))();
    let IterableOfMapOfK$V = () => (IterableOfMapOfK$V = dart.constFn(core.Iterable$(MapOfK$V())))();
    class CombinedMapView extends collection.UnmodifiableMapBase$(K, V) {
      _get(key) {
        for (let map of this[_maps]) {
          let value = map[$_get](key);
          if (value != null || dart.test(map[$containsKey](value))) {
            return value;
          }
        }
        return null;
      }
      get keys() {
        return new (CombinedIterableViewOfK()).new(this[_maps][$map](IterableOfK(), dart.fn(m => m[$keys], MapOfK$VToIterableOfK())));
      }
    }
    (CombinedMapView.new = function(maps) {
      this[_maps] = maps;
    }).prototype = CombinedMapView.prototype;
    dart.addTypeTests(CombinedMapView);
    CombinedMapView.prototype[_is_CombinedMapView_default] = true;
    dart.setMethodSignature(CombinedMapView, () => ({
      __proto__: dart.getMethods(CombinedMapView.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object])
    }));
    dart.setGetterSignature(CombinedMapView, () => ({
      __proto__: dart.getGetters(CombinedMapView.__proto__),
      keys: dart.fnType(core.Iterable$(K), []),
      [$keys]: dart.fnType(core.Iterable$(K), [])
    }));
    dart.setFieldSignature(CombinedMapView, () => ({
      __proto__: dart.getFields(CombinedMapView.__proto__),
      [_maps]: dart.finalFieldType(IterableOfMapOfK$V())
    }));
    dart.defineExtensionMethods(CombinedMapView, ['_get']);
    dart.defineExtensionAccessors(CombinedMapView, ['keys']);
    return CombinedMapView;
  });
  src__combined_wrappers__combined_map.CombinedMapView = src__combined_wrappers__combined_map.CombinedMapView$();
  dart.addTypeTests(src__combined_wrappers__combined_map.CombinedMapView, _is_CombinedMapView_default);
  dart.trackLibraries("packages/collection/src/combined_wrappers/combined_map.ddc", {
    "package:collection/src/combined_wrappers/combined_map.dart": src__combined_wrappers__combined_map
  }, '{"version":3,"sourceRoot":"","sources":["combined_map.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;WA4BgB,GAAU;AACtB,iBAAS,MAAO,YAAK,EAAE;AAErB,cAAI,QAAQ,GAAG,QAAC,GAAG;AACnB,cAAI,KAAK,IAAI,kBAAQ,GAAG,cAAY,CAAC,KAAK,IAAG;AAC3C,kBAAO,MAAK;;;AAGhB,cAAO;MACT;;cAawB,KAAI,+BAAuB,CAAC,WAAK,MAAI,gBAAC,QAAC,CAAC,IAAK,CAAC,OAAK;MAAE;;oCAxBxD,IAAK;MAAL,WAAK,GAAL,IAAK;IAAC","file":"combined_map.ddc.js"}');
  // Exports:
  return {
    src__combined_wrappers__combined_map: src__combined_wrappers__combined_map
  };
});

//# sourceMappingURL=combined_map.ddc.js.map
