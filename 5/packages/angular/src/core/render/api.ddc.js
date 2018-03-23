define(['dart_sdk', 'packages/angular/src/core/metadata/view'], function(dart_sdk, view) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__view = view.src__core__metadata__view;
  const _root = Object.create(null);
  const src__core__render__api = Object.create(_root);
  const $replaceAll = dartx.replaceAll;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__core__render__api.SharedStylesHost = class SharedStylesHost extends core.Object {};
  (src__core__render__api.SharedStylesHost.new = function() {
  }).prototype = src__core__render__api.SharedStylesHost.prototype;
  dart.addTypeTests(src__core__render__api.SharedStylesHost);
  dart.defineLazy(src__core__render__api, {
    /*src__core__render__api.sharedStylesHost*/get sharedStylesHost() {
      return null;
    },
    set sharedStylesHost(_) {},
    /*src__core__render__api.COMPONENT_REGEX*/get COMPONENT_REGEX() {
      return core.RegExp.new('%COMP%');
    }
  });
  const _contentAttr = Symbol('_contentAttr');
  const _hostAttr = Symbol('_hostAttr');
  const _styles = Symbol('_styles');
  const _flattenStyles = Symbol('_flattenStyles');
  const _shimContentAttribute = Symbol('_shimContentAttribute');
  const _shimHostAttribute = Symbol('_shimHostAttribute');
  src__core__render__api.RenderComponentType = class RenderComponentType extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get templateUrl() {
      return this[templateUrl$];
    }
    set templateUrl(value) {
      super.templateUrl = value;
    }
    get encapsulation() {
      return this[encapsulation$];
    }
    set encapsulation(value) {
      super.encapsulation = value;
    }
    get templateStyles() {
      return this[templateStyles$];
    }
    set templateStyles(value) {
      this[templateStyles$] = value;
    }
    get stylesShimmed() {
      return this[stylesShimmed];
    }
    set stylesShimmed(value) {
      this[stylesShimmed] = value;
    }
    shimStyles(stylesHost) {
      this[_styles] = this[_flattenStyles](this.id, this.templateStyles, JSArrayOfString().of([]));
      stylesHost.addStyles(this[_styles]);
      if (this.encapsulation === src__core__metadata__view.ViewEncapsulation.Emulated) {
        this[_contentAttr] = this[_shimContentAttribute](this.id);
        this[_hostAttr] = this[_shimHostAttribute](this.id);
      }
    }
    get contentAttr() {
      return this[_contentAttr];
    }
    get hostAttr() {
      return this[_hostAttr];
    }
    get styles() {
      return this[_styles];
    }
    [_shimContentAttribute](componentShortId) {
      return "_ngcontent-%COMP%"[$replaceAll](src__core__render__api.COMPONENT_REGEX, componentShortId);
    }
    [_shimHostAttribute](componentShortId) {
      return "_nghost-%COMP%"[$replaceAll](src__core__render__api.COMPONENT_REGEX, componentShortId);
    }
    [_flattenStyles](compId, styles, target) {
      if (styles == null) return target;
      let styleCount = styles[$length];
      for (let i = 0; i < dart.notNull(styleCount); i++) {
        let style = styles[$_get](i);
        if (core.List.is(style)) {
          this[_flattenStyles](compId, style, target);
        } else {
          style = dart.dsend(style, 'replaceAll', src__core__render__api.COMPONENT_REGEX, compId);
          target[$add](core.String._check(style));
        }
      }
      return target;
    }
  };
  (src__core__render__api.RenderComponentType.new = function(id, templateUrl, encapsulation, templateStyles) {
    this[_contentAttr] = null;
    this[_hostAttr] = null;
    this[_styles] = null;
    this[stylesShimmed] = false;
    this[id$] = id;
    this[templateUrl$] = templateUrl;
    this[encapsulation$] = encapsulation;
    this[templateStyles$] = templateStyles;
  }).prototype = src__core__render__api.RenderComponentType.prototype;
  dart.addTypeTests(src__core__render__api.RenderComponentType);
  const id$ = Symbol("RenderComponentType.id");
  const templateUrl$ = Symbol("RenderComponentType.templateUrl");
  const encapsulation$ = Symbol("RenderComponentType.encapsulation");
  const templateStyles$ = Symbol("RenderComponentType.templateStyles");
  const stylesShimmed = Symbol("RenderComponentType.stylesShimmed");
  dart.setMethodSignature(src__core__render__api.RenderComponentType, () => ({
    __proto__: dart.getMethods(src__core__render__api.RenderComponentType.__proto__),
    shimStyles: dart.fnType(dart.void, [src__core__render__api.SharedStylesHost]),
    [_shimContentAttribute]: dart.fnType(core.String, [core.String]),
    [_shimHostAttribute]: dart.fnType(core.String, [core.String]),
    [_flattenStyles]: dart.fnType(core.List$(core.String), [core.String, core.List, ListOfString()])
  }));
  dart.setGetterSignature(src__core__render__api.RenderComponentType, () => ({
    __proto__: dart.getGetters(src__core__render__api.RenderComponentType.__proto__),
    contentAttr: dart.fnType(core.String, []),
    hostAttr: dart.fnType(core.String, []),
    styles: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__core__render__api.RenderComponentType, () => ({
    __proto__: dart.getFields(src__core__render__api.RenderComponentType.__proto__),
    id: dart.finalFieldType(core.String),
    templateUrl: dart.finalFieldType(core.String),
    encapsulation: dart.finalFieldType(src__core__metadata__view.ViewEncapsulation),
    templateStyles: dart.fieldType(core.List),
    [_contentAttr]: dart.fieldType(core.String),
    [_hostAttr]: dart.fieldType(core.String),
    [_styles]: dart.fieldType(ListOfString()),
    stylesShimmed: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__core__render__api.RenderComponentType, {
    /*src__core__render__api.RenderComponentType.COMPONENT_VARIABLE*/get COMPONENT_VARIABLE() {
      return '%COMP%';
    },
    /*src__core__render__api.RenderComponentType.HOST_STYLE_PREFIX*/get HOST_STYLE_PREFIX() {
      return '_nghost-';
    },
    /*src__core__render__api.RenderComponentType.CONTENT_STYLE_PREFIX*/get CONTENT_STYLE_PREFIX() {
      return '_ngcontent-';
    },
    /*src__core__render__api.RenderComponentType.HOST_ATTR*/get HOST_ATTR() {
      return dart.str`${"_nghost-"}${"%COMP%"}`;
    },
    /*src__core__render__api.RenderComponentType.CONTENT_ATTR*/get CONTENT_ATTR() {
      return dart.str`${"_ngcontent-"}${"%COMP%"}`;
    }
  });
  src__core__render__api.RenderDebugInfo = class RenderDebugInfo extends core.Object {};
  (src__core__render__api.RenderDebugInfo.new = function() {
  }).prototype = src__core__render__api.RenderDebugInfo.prototype;
  dart.addTypeTests(src__core__render__api.RenderDebugInfo);
  dart.trackLibraries("packages/angular/src/core/render/api.ddc", {
    "package:angular/src/core/render/api.dart": src__core__render__api
  }, '{"version":3,"sourceRoot":"","sources":["api.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;EAcA;;;MAKiB,uCAAgB;;;;MAEpB,sCAAe;YAAG,AAAI,gBAAM,CAAC;;;;;;;;;;IAM3B;;;;;;IAEA;;;;;;IACW;;;;;;IACuB;;;;;;IAc1C;;;;;;eAKW,UAA2B;AACzC,mBAAO,GAAG,oBAAc,CAAC,OAAE,EAAE,mBAAc,EAAE;AAC7C,gBAAU,UAAU,CAAC,aAAY;AACjC,UAAI,kBAAa,KAAI,2CAAiB,SAAS,EAAE;AAC/C,0BAAY,GAAG,2BAAqB,CAAC,OAAE;AACvC,uBAAS,GAAG,wBAAkB,CAAC,OAAE;;IAErC;;YAE0B,mBAAY;;;YAEf,gBAAS;;;YAEL,cAAO;;4BAEL,gBAAuB;YAChD,oBAAY,aAAW,CAAC,sCAAe,EAAE,gBAAgB;IAAC;yBAEpC,gBAAuB;YAC7C,iBAAS,aAAW,CAAC,sCAAe,EAAE,gBAAgB;IAAC;qBAGvD,MAAa,EACb,MAAsD,EACtD,MAAmB;AACrB,UAAI,MAAM,IAAI,MAAM,MAAO,OAAM;AACjC,UAAI,aAAa,MAAM,SAAO;AAC9B,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,UAAU,GAAE,CAAC,IAAI;AACnC,YAAI,QAAQ,MAAM,QAAC,CAAC;AACpB,yBAAI,KAAK,GAAU;AACjB,8BAAc,CAAC,MAAM,EAAE,KAAK,EAAE,MAAM;eAC/B;AACL,eAAK,cAAG,KAAK,gBAAY,sCAAe,EAAE,MAAM;AAChD,gBAAM,MAAI,oBAAC,KAAK;;;AAGpB,YAAO,OAAM;IACf;;6DAvCI,EAAO,EAAE,WAAgB,EAAE,aAAkB,EAAE,cAAmB;IAR/D,kBAAY;IAEZ,eAAS;IAEH,aAAO;IACf,mBAAa,GAAG;IAGZ,SAAE,GAAF,EAAE;IAAO,kBAAW,GAAX,WAAW;IAAO,oBAAa,GAAb,aAAa;IAAO,qBAAc,GAAd,cAAc;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAf1D,6DAAkB;YAAG;;MACrB,4DAAiB;YAAG;;MACpB,+DAAoB;YAAG;;MACvB,oDAAS;YAAG,YAAE,UAAiB,GAAC,QAAkB;;MAClD,uDAAY;YAAG,YAAE,aAAoB,GAAC,QAAkB;;;;;EA+DvE","file":"api.ddc.js"}');
  // Exports:
  return {
    src__core__render__api: src__core__render__api
  };
});

//# sourceMappingURL=api.ddc.js.map
