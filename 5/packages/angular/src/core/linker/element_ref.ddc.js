define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__linker__element_ref = Object.create(_root);
  src__core__linker__element_ref.ElementRef = class ElementRef extends core.Object {
    get nativeElement() {
      return this[nativeElement$];
    }
    set nativeElement(value) {
      super.nativeElement = value;
    }
  };
  (src__core__linker__element_ref.ElementRef.new = function(nativeElement) {
    this[nativeElement$] = nativeElement;
  }).prototype = src__core__linker__element_ref.ElementRef.prototype;
  dart.addTypeTests(src__core__linker__element_ref.ElementRef);
  const nativeElement$ = Symbol("ElementRef.nativeElement");
  dart.setFieldSignature(src__core__linker__element_ref.ElementRef, () => ({
    __proto__: dart.getFields(src__core__linker__element_ref.ElementRef.__proto__),
    nativeElement: dart.finalFieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/angular/src/core/linker/element_ref.ddc", {
    "package:angular/src/core/linker/element_ref.dart": src__core__linker__element_ref
  }, '{"version":3,"sourceRoot":"","sources":["element_ref.dart"],"names":[],"mappings":";;;;;;;;IAWgB;;;;;;;4DACG,aAAkB;IAAb,oBAAa,GAAb,aAAa;EAAC","file":"element_ref.ddc.js"}');
  // Exports:
  return {
    src__core__linker__element_ref: src__core__linker__element_ref
  };
});

//# sourceMappingURL=element_ref.ddc.js.map
