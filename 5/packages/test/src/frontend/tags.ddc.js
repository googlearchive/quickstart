define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__frontend__tags = Object.create(_root);
  const $toSet = dartx.toSet;
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  const _tags = Symbol('_tags');
  src__frontend__tags.Tags = class Tags extends core.Object {
    get tags() {
      return this[_tags][$toSet]();
    }
  };
  (src__frontend__tags.Tags.new = function(tags) {
    this[_tags] = tags;
  }).prototype = src__frontend__tags.Tags.prototype;
  dart.addTypeTests(src__frontend__tags.Tags);
  dart.setGetterSignature(src__frontend__tags.Tags, () => ({
    __proto__: dart.getGetters(src__frontend__tags.Tags.__proto__),
    tags: dart.fnType(core.Set$(core.String), [])
  }));
  dart.setFieldSignature(src__frontend__tags.Tags, () => ({
    __proto__: dart.getFields(src__frontend__tags.Tags.__proto__),
    [_tags]: dart.finalFieldType(IterableOfString())
  }));
  dart.trackLibraries("packages/test/src/frontend/tags.ddc", {
    "package:test/src/frontend/tags.dart": src__frontend__tags
  }, '{"version":3,"sourceRoot":"","sources":["tags.dart"],"names":[],"mappings":";;;;;;;;;;;;YAW0B,YAAK,QAAM;IAAE;;2CAKrB,IAAK;IAAL,WAAK,GAAL,IAAK;EAAC","file":"tags.ddc.js"}');
  // Exports:
  return {
    src__frontend__tags: src__frontend__tags
  };
});

//# sourceMappingURL=tags.ddc.js.map
