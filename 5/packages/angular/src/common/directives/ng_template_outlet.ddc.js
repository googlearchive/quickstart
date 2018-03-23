define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, lifecycle_hooks, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__linker__view_ref = app_view.src__core__linker__view_ref;
  const _root = Object.create(null);
  const src__common__directives__ng_template_outlet = Object.create(_root);
  const $forEach = dartx.forEach;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  const _viewContainerRef = Symbol('_viewContainerRef');
  const _context = Symbol('_context');
  const _insertedViewRef = Symbol('_insertedViewRef');
  src__common__directives__ng_template_outlet.NgTemplateOutlet = class NgTemplateOutlet extends core.Object {
    set ngTemplateOutlet(templateRef) {
      if (this[_insertedViewRef] != null) {
        this[_viewContainerRef].remove(this[_viewContainerRef].indexOf(this[_insertedViewRef]));
      }
      if (templateRef != null) {
        this[_insertedViewRef] = this[_viewContainerRef].createEmbeddedView(templateRef);
      }
    }
    set ngTemplateOutletContext(context) {
      this[_context] = context;
    }
    ngDoCheck() {
      if (this[_context] == null || this[_insertedViewRef] == null) return;
      this[_context][$forEach](dart.bind(this[_insertedViewRef], 'setLocal'));
    }
  };
  (src__common__directives__ng_template_outlet.NgTemplateOutlet.new = function(viewContainerRef) {
    this[_context] = null;
    this[_insertedViewRef] = null;
    this[_viewContainerRef] = viewContainerRef;
  }).prototype = src__common__directives__ng_template_outlet.NgTemplateOutlet.prototype;
  dart.addTypeTests(src__common__directives__ng_template_outlet.NgTemplateOutlet);
  src__common__directives__ng_template_outlet.NgTemplateOutlet[dart.implements] = () => [src__core__metadata__lifecycle_hooks.DoCheck];
  dart.setMethodSignature(src__common__directives__ng_template_outlet.NgTemplateOutlet, () => ({
    __proto__: dart.getMethods(src__common__directives__ng_template_outlet.NgTemplateOutlet.__proto__),
    ngDoCheck: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__common__directives__ng_template_outlet.NgTemplateOutlet, () => ({
    __proto__: dart.getSetters(src__common__directives__ng_template_outlet.NgTemplateOutlet.__proto__),
    ngTemplateOutlet: dart.fnType(dart.void, [src__core__linker__template_ref.TemplateRef]),
    ngTemplateOutletContext: dart.fnType(dart.void, [MapOfString$dynamic()])
  }));
  dart.setFieldSignature(src__common__directives__ng_template_outlet.NgTemplateOutlet, () => ({
    __proto__: dart.getFields(src__common__directives__ng_template_outlet.NgTemplateOutlet.__proto__),
    [_viewContainerRef]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_context]: dart.fieldType(MapOfString$dynamic()),
    [_insertedViewRef]: dart.fieldType(src__core__linker__view_ref.EmbeddedViewRef)
  }));
  dart.trackLibraries("packages/angular/src/common/directives/ng_template_outlet.ddc", {
    "package:angular/src/common/directives/ng_template_outlet.dart": src__common__directives__ng_template_outlet
  }, '{"version":3,"sourceRoot":"","sources":["ng_template_outlet.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;yBA0DuB,WAAuB;AAC1C,UAAI,sBAAgB,IAAI,MAAM;AAC5B,+BAAiB,OAAO,CAAC,uBAAiB,QAAQ,CAAC,sBAAgB;;AAErE,UAAI,WAAW,IAAI,MAAM;AACvB,8BAAgB,GAAG,uBAAiB,mBAAmB,CAAC,WAAW;;IAEvE;gCAQ4B,OAA4B;AACtD,oBAAQ,GAAG,OAAO;IACpB;;AAIE,UAAI,cAAQ,IAAI,QAAQ,sBAAgB,IAAI,MAAM;AAKlD,oBAAQ,UAAQ,WAAC,sBAAgB;IACnC;;+EAlCsB,gBAAiB;IAHlB,cAAQ;IACb,sBAAgB;IAEV,uBAAiB,GAAjB,gBAAiB;EAAC","file":"ng_template_outlet.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_template_outlet: src__common__directives__ng_template_outlet
  };
});

//# sourceMappingURL=ng_template_outlet.ddc.js.map
