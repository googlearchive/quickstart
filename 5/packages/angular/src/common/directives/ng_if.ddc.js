define(['dart_sdk', 'packages/angular/src/runtime/optimizations', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, optimizations, app_view_utils, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const _root = Object.create(null);
  const src__common__directives__ng_if = Object.create(_root);
  const _viewContainer = Symbol('_viewContainer');
  const _templateRef = Symbol('_templateRef');
  const _prevCondition = Symbol('_prevCondition');
  src__common__directives__ng_if.NgIf = class NgIf extends core.Object {
    set ngIf(newCondition) {
      newCondition = newCondition === true;
      if (dart.test(src__runtime__optimizations.isDevMode)) {
        if (!dart.test(src__core__linker__app_view_utils.checkBinding(newCondition, this[_prevCondition]))) return;
      } else {
        if (newCondition == this[_prevCondition]) return;
      }
      if (dart.test(newCondition)) {
        this[_viewContainer].createEmbeddedView(this[_templateRef]);
      } else {
        this[_viewContainer].clear();
      }
      this[_prevCondition] = newCondition;
    }
  };
  (src__common__directives__ng_if.NgIf.new = function(viewContainer, templateRef) {
    this[_prevCondition] = false;
    this[_viewContainer] = viewContainer;
    this[_templateRef] = templateRef;
  }).prototype = src__common__directives__ng_if.NgIf.prototype;
  dart.addTypeTests(src__common__directives__ng_if.NgIf);
  dart.setSetterSignature(src__common__directives__ng_if.NgIf, () => ({
    __proto__: dart.getSetters(src__common__directives__ng_if.NgIf.__proto__),
    ngIf: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(src__common__directives__ng_if.NgIf, () => ({
    __proto__: dart.getFields(src__common__directives__ng_if.NgIf.__proto__),
    [_templateRef]: dart.finalFieldType(src__core__linker__template_ref.TemplateRef),
    [_viewContainer]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_prevCondition]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/angular/src/common/directives/ng_if.ddc", {
    "package:angular/src/common/directives/ng_if.dart": src__common__directives__ng_if
  }, '{"version":3,"sourceRoot":"","sources":["ng_if.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;aAiDW,YAAiB;AAExB,kBAAY,GAAG,YAAY,KAAI;AAE/B,oBAAI,qCAAS,GAAE;AACb,uBAAK,8CAAY,CAAC,YAAY,EAAE,oBAAc,IAAG;aAC5C;AACL,YAAI,AAAU,YAAY,IAAE,oBAAc,EAAG;;AAE/C,oBAAI,YAAY,GAAE;AAChB,4BAAc,mBAAmB,CAAC,kBAAY;aACzC;AACL,4BAAc,MAAM;;AAEtB,0BAAc,GAAG,YAAY;IAC/B;;sDAnBU,aAAc,EAAO,WAAY;IAFtC,oBAAc,GAAG;IAEZ,oBAAc,GAAd,aAAc;IAAO,kBAAY,GAAZ,WAAY;EAAC","file":"ng_if.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_if: src__common__directives__ng_if
  };
});

//# sourceMappingURL=ng_if.ddc.js.map
