define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__frontend__on_platform = Object.create(_root);
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  src__frontend__on_platform.OnPlatform = class OnPlatform extends core.Object {
    get annotationsByPlatform() {
      return this[annotationsByPlatform$];
    }
    set annotationsByPlatform(value) {
      super.annotationsByPlatform = value;
    }
  };
  (src__frontend__on_platform.OnPlatform.new = function(annotationsByPlatform) {
    this[annotationsByPlatform$] = annotationsByPlatform;
  }).prototype = src__frontend__on_platform.OnPlatform.prototype;
  dart.addTypeTests(src__frontend__on_platform.OnPlatform);
  const annotationsByPlatform$ = Symbol("OnPlatform.annotationsByPlatform");
  dart.setFieldSignature(src__frontend__on_platform.OnPlatform, () => ({
    __proto__: dart.getFields(src__frontend__on_platform.OnPlatform.__proto__),
    annotationsByPlatform: dart.finalFieldType(MapOfString$dynamic())
  }));
  dart.trackLibraries("packages/test/src/frontend/on_platform.ddc", {
    "package:test/src/frontend/on_platform.dart": src__frontend__on_platform
  }, '{"version":3,"sourceRoot":"","sources":["on_platform.dart"],"names":[],"mappings":";;;;;;;;;IAU6B;;;;;;;wDAEV,qBAA0B;IAArB,4BAAqB,GAArB,qBAAqB;EAAC","file":"on_platform.ddc.js"}');
  // Exports:
  return {
    src__frontend__on_platform: src__frontend__on_platform
  };
});

//# sourceMappingURL=on_platform.ddc.js.map
