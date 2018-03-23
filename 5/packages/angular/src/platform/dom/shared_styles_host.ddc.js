define(['dart_sdk', 'packages/angular/src/core/render/api'], function(dart_sdk, api) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__render__api = api.src__core__render__api;
  const _root = Object.create(null);
  const src__platform__dom__shared_styles_host = Object.create(_root);
  const $head = dartx.head;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $text = dartx.text;
  const $append = dartx.append;
  let _IdentityHashSetOfString = () => (_IdentityHashSetOfString = dart.constFn(collection._IdentityHashSet$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  const _rootHost = Symbol('_rootHost');
  const _stylesSet = Symbol('_stylesSet');
  src__platform__dom__shared_styles_host.DomSharedStylesHost = class DomSharedStylesHost extends core.Object {
    addStyles(styles) {
      for (let i = 0, l = styles[$length]; i < dart.notNull(l); i++) {
        let style = styles[$_get](i);
        if (dart.test(this[_stylesSet].add(style))) {
          this[_rootHost][$append]((() => {
            let _ = html.StyleElement.new();
            _[$text] = style;
            return _;
          })());
        }
      }
    }
  };
  (src__platform__dom__shared_styles_host.DomSharedStylesHost.new = function(doc) {
    this[_stylesSet] = new (_IdentityHashSetOfString()).new();
    this[_rootHost] = doc[$head];
  }).prototype = src__platform__dom__shared_styles_host.DomSharedStylesHost.prototype;
  dart.addTypeTests(src__platform__dom__shared_styles_host.DomSharedStylesHost);
  src__platform__dom__shared_styles_host.DomSharedStylesHost[dart.implements] = () => [src__core__render__api.SharedStylesHost];
  dart.setMethodSignature(src__platform__dom__shared_styles_host.DomSharedStylesHost, () => ({
    __proto__: dart.getMethods(src__platform__dom__shared_styles_host.DomSharedStylesHost.__proto__),
    addStyles: dart.fnType(dart.void, [ListOfString()])
  }));
  dart.setFieldSignature(src__platform__dom__shared_styles_host.DomSharedStylesHost, () => ({
    __proto__: dart.getFields(src__platform__dom__shared_styles_host.DomSharedStylesHost.__proto__),
    [_rootHost]: dart.finalFieldType(html.HeadElement),
    [_stylesSet]: dart.finalFieldType(SetOfString())
  }));
  dart.trackLibraries("packages/angular/src/platform/dom/shared_styles_host.ddc", {
    "package:angular/src/platform/dom/shared_styles_host.dart": src__platform__dom__shared_styles_host
  }, '{"version":3,"sourceRoot":"","sources":["shared_styles_host.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;cAYiB,MAAmB;AAChC,eAAS,IAAI,GAAG,IAAI,MAAM,SAAO,EAAE,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,IAAI;AAC7C,YAAM,QAAQ,MAAM,QAAC,CAAC;AACtB,sBAAI,gBAAU,IAAI,CAAC,KAAK,IAAG;AACzB,yBAAS,SAAO;oBAAC,AAAI,qBAAY;uBAAW,KAAK;;;;;IAGvD;;6EAVoB,GAAgB;IAF9B,gBAAU,GAAG;IAEqB,eAAS,GAAG,GAAG,OAAK","file":"shared_styles_host.ddc.js"}');
  // Exports:
  return {
    src__platform__dom__shared_styles_host: src__platform__dom__shared_styles_host
  };
});

//# sourceMappingURL=shared_styles_host.ddc.js.map
