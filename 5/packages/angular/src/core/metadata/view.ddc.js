define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__metadata__view = Object.create(_root);
  src__core__metadata__view.ViewEncapsulation = class ViewEncapsulation extends core.Object {
    toString() {
      return {
        0: "ViewEncapsulation.Emulated",
        1: "ViewEncapsulation.None"
      }[this.index];
    }
  };
  (src__core__metadata__view.ViewEncapsulation.new = function(x) {
    this.index = x;
  }).prototype = src__core__metadata__view.ViewEncapsulation.prototype;
  dart.addTypeTests(src__core__metadata__view.ViewEncapsulation);
  dart.setFieldSignature(src__core__metadata__view.ViewEncapsulation, () => ({
    __proto__: dart.getFields(src__core__metadata__view.ViewEncapsulation.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__metadata__view.ViewEncapsulation, ['toString']);
  src__core__metadata__view.ViewEncapsulation.Emulated = dart.const(new src__core__metadata__view.ViewEncapsulation.new(0));
  src__core__metadata__view.ViewEncapsulation.None = dart.const(new src__core__metadata__view.ViewEncapsulation.new(1));
  src__core__metadata__view.ViewEncapsulation.values = dart.constList([src__core__metadata__view.ViewEncapsulation.Emulated, src__core__metadata__view.ViewEncapsulation.None], src__core__metadata__view.ViewEncapsulation);
  dart.trackLibraries("packages/angular/src/core/metadata/view.ddc", {
    "package:angular/src/core/metadata/view.dart": src__core__metadata__view
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"view.ddc.js"}');
  // Exports:
  return {
    src__core__metadata__view: src__core__metadata__view
  };
});

//# sourceMappingURL=view.ddc.js.map
