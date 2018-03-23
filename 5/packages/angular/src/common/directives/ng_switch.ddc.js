define(['dart_sdk', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const _root = Object.create(null);
  const src__common__directives__ng_switch = Object.create(_root);
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $add = dartx.add;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $containsKey = dartx.containsKey;
  let ListOfSwitchView = () => (ListOfSwitchView = dart.constFn(core.List$(src__common__directives__ng_switch.SwitchView)))();
  let LinkedMapOfdynamic$ListOfSwitchView = () => (LinkedMapOfdynamic$ListOfSwitchView = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, ListOfSwitchView())))();
  let JSArrayOfSwitchView = () => (JSArrayOfSwitchView = dart.constFn(_interceptors.JSArray$(src__common__directives__ng_switch.SwitchView)))();
  let MapOfdynamic$ListOfSwitchView = () => (MapOfdynamic$ListOfSwitchView = dart.constFn(core.Map$(dart.dynamic, ListOfSwitchView())))();
  dart.defineLazy(src__common__directives__ng_switch, {
    /*src__common__directives__ng_switch._WHEN_DEFAULT*/get _WHEN_DEFAULT() {
      return dart.const(new core.Object.new());
    }
  });
  const _viewContainerRef = Symbol('_viewContainerRef');
  const _templateRef = Symbol('_templateRef');
  src__common__directives__ng_switch.SwitchView = class SwitchView extends core.Object {
    create() {
      this[_viewContainerRef].createEmbeddedView(this[_templateRef]);
    }
    destroy() {
      this[_viewContainerRef].clear();
    }
  };
  (src__common__directives__ng_switch.SwitchView.new = function(viewContainerRef, templateRef) {
    this[_viewContainerRef] = viewContainerRef;
    this[_templateRef] = templateRef;
  }).prototype = src__common__directives__ng_switch.SwitchView.prototype;
  dart.addTypeTests(src__common__directives__ng_switch.SwitchView);
  dart.setMethodSignature(src__common__directives__ng_switch.SwitchView, () => ({
    __proto__: dart.getMethods(src__common__directives__ng_switch.SwitchView.__proto__),
    create: dart.fnType(dart.void, []),
    destroy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__common__directives__ng_switch.SwitchView, () => ({
    __proto__: dart.getFields(src__common__directives__ng_switch.SwitchView.__proto__),
    [_viewContainerRef]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_templateRef]: dart.finalFieldType(src__core__linker__template_ref.TemplateRef)
  }));
  const _switchValue = Symbol('_switchValue');
  const _useDefault = Symbol('_useDefault');
  const _valueViews = Symbol('_valueViews');
  const _activeViews = Symbol('_activeViews');
  const _emptyAllActiveViews = Symbol('_emptyAllActiveViews');
  const _activateViews = Symbol('_activateViews');
  const _deregisterView = Symbol('_deregisterView');
  const _registerView = Symbol('_registerView');
  const _onWhenValueChanged = Symbol('_onWhenValueChanged');
  src__common__directives__ng_switch.NgSwitch = class NgSwitch extends core.Object {
    set ngSwitch(value) {
      let views = this[_valueViews][$_get](value);
      if (views != null) {
        this[_useDefault] = false;
      } else {
        if (dart.test(this[_useDefault])) return;
        this[_useDefault] = true;
        views = this[_valueViews][$_get](src__common__directives__ng_switch._WHEN_DEFAULT);
      }
      this[_emptyAllActiveViews]();
      this[_activateViews](views);
      this[_switchValue] = value;
    }
    [_onWhenValueChanged](oldWhen, newWhen, view) {
      this[_deregisterView](oldWhen, view);
      this[_registerView](newWhen, view);
      if (core.identical(oldWhen, this[_switchValue])) {
        view.destroy();
        this[_activeViews][$remove](view);
      } else if (core.identical(newWhen, this[_switchValue])) {
        if (dart.test(this[_useDefault])) {
          this[_useDefault] = false;
          this[_emptyAllActiveViews]();
        }
        view.create();
        this[_activeViews][$add](view);
      }
      if (this[_activeViews][$length] === 0 && !dart.test(this[_useDefault])) {
        this[_useDefault] = true;
        this[_activateViews](this[_valueViews][$_get](src__common__directives__ng_switch._WHEN_DEFAULT));
      }
    }
    [_emptyAllActiveViews]() {
      let activeContainers = this[_activeViews];
      for (let i = 0, len = activeContainers[$length]; i < dart.notNull(len); i++) {
        activeContainers[$_get](i).destroy();
      }
      this[_activeViews] = JSArrayOfSwitchView().of([]);
    }
    [_activateViews](views) {
      if (views == null) return;
      for (let i = 0, len = views[$length]; i < dart.notNull(len); i++) {
        views[$_get](i).create();
      }
      this[_activeViews] = views;
    }
    [_registerView](value, view) {
      let views = this[_valueViews][$_get](value);
      if (views == null) {
        views = JSArrayOfSwitchView().of([]);
        this[_valueViews][$_set](value, views);
      }
      views[$add](view);
    }
    [_deregisterView](value, view) {
      if (value === src__common__directives__ng_switch._WHEN_DEFAULT) return;
      let views = this[_valueViews][$_get](value);
      if (views[$length] === 1) {
        dart.test(this[_valueViews][$containsKey](value)) && (this[_valueViews][$remove](value) != null || true);
      } else {
        views[$remove](view);
      }
    }
  };
  (src__common__directives__ng_switch.NgSwitch.new = function() {
    this[_switchValue] = null;
    this[_useDefault] = false;
    this[_valueViews] = new (LinkedMapOfdynamic$ListOfSwitchView()).new();
    this[_activeViews] = JSArrayOfSwitchView().of([]);
  }).prototype = src__common__directives__ng_switch.NgSwitch.prototype;
  dart.addTypeTests(src__common__directives__ng_switch.NgSwitch);
  dart.setMethodSignature(src__common__directives__ng_switch.NgSwitch, () => ({
    __proto__: dart.getMethods(src__common__directives__ng_switch.NgSwitch.__proto__),
    [_onWhenValueChanged]: dart.fnType(dart.void, [dart.dynamic, dart.dynamic, src__common__directives__ng_switch.SwitchView]),
    [_emptyAllActiveViews]: dart.fnType(dart.void, []),
    [_activateViews]: dart.fnType(dart.void, [ListOfSwitchView()]),
    [_registerView]: dart.fnType(dart.void, [dart.dynamic, src__common__directives__ng_switch.SwitchView]),
    [_deregisterView]: dart.fnType(dart.void, [dart.dynamic, src__common__directives__ng_switch.SwitchView])
  }));
  dart.setSetterSignature(src__common__directives__ng_switch.NgSwitch, () => ({
    __proto__: dart.getSetters(src__common__directives__ng_switch.NgSwitch.__proto__),
    ngSwitch: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__common__directives__ng_switch.NgSwitch, () => ({
    __proto__: dart.getFields(src__common__directives__ng_switch.NgSwitch.__proto__),
    [_switchValue]: dart.fieldType(dart.dynamic),
    [_useDefault]: dart.fieldType(core.bool),
    [_valueViews]: dart.finalFieldType(MapOfdynamic$ListOfSwitchView()),
    [_activeViews]: dart.fieldType(ListOfSwitchView())
  }));
  const _value = Symbol('_value');
  const _view = Symbol('_view');
  const _switch = Symbol('_switch');
  src__common__directives__ng_switch.NgSwitchWhen = class NgSwitchWhen extends core.Object {
    set ngSwitchCase(value) {
      this.ngSwitchWhen = value;
    }
    set ngSwitchWhen(value) {
      if (core.identical(value, this[_value])) return;
      this[_switch][_onWhenValueChanged](this[_value], value, this[_view]);
      this[_value] = value;
    }
  };
  (src__common__directives__ng_switch.NgSwitchWhen.new = function(viewContainer, templateRef, ngSwitch) {
    this[_value] = src__common__directives__ng_switch._WHEN_DEFAULT;
    this[_view] = null;
    this[_switch] = null;
    this[_switch] = ngSwitch;
    this[_view] = new src__common__directives__ng_switch.SwitchView.new(viewContainer, templateRef);
  }).prototype = src__common__directives__ng_switch.NgSwitchWhen.prototype;
  dart.addTypeTests(src__common__directives__ng_switch.NgSwitchWhen);
  dart.setSetterSignature(src__common__directives__ng_switch.NgSwitchWhen, () => ({
    __proto__: dart.getSetters(src__common__directives__ng_switch.NgSwitchWhen.__proto__),
    ngSwitchCase: dart.fnType(dart.void, [dart.dynamic]),
    ngSwitchWhen: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__common__directives__ng_switch.NgSwitchWhen, () => ({
    __proto__: dart.getFields(src__common__directives__ng_switch.NgSwitchWhen.__proto__),
    [_value]: dart.fieldType(dart.dynamic),
    [_view]: dart.fieldType(src__common__directives__ng_switch.SwitchView),
    [_switch]: dart.fieldType(src__common__directives__ng_switch.NgSwitch)
  }));
  src__common__directives__ng_switch.NgSwitchDefault = class NgSwitchDefault extends core.Object {};
  (src__common__directives__ng_switch.NgSwitchDefault.new = function(viewContainer, templateRef, switchDirective) {
    switchDirective[_registerView](src__common__directives__ng_switch._WHEN_DEFAULT, new src__common__directives__ng_switch.SwitchView.new(viewContainer, templateRef));
  }).prototype = src__common__directives__ng_switch.NgSwitchDefault.prototype;
  dart.addTypeTests(src__common__directives__ng_switch.NgSwitchDefault);
  dart.trackLibraries("packages/angular/src/common/directives/ng_switch.ddc", {
    "package:angular/src/common/directives/ng_switch.dart": src__common__directives__ng_switch
  }, '{"version":3,"sourceRoot":"","sources":["ng_switch.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;MAKM,gDAAa;YAAG,gBAAM,eAAM;;;;;;;AAS9B,6BAAiB,mBAAmB,CAAC,kBAAiB;IACxD;;AAGE,6BAAiB,MAAM;IACzB;;gEARgB,gBAAiB,EAAO,WAAY;IAApC,uBAAiB,GAAjB,gBAAiB;IAAO,kBAAY,GAAZ,WAAY;EAAC;;;;;;;;;;;;;;;;;;;;;;iBAuFxC,KAAa;AAExB,UAAI,QAAQ,iBAAW,QAAC,KAAK;AAC7B,UAAI,KAAK,IAAI,MAAM;AACjB,yBAAW,GAAG;aACT;AAGL,sBAAI,iBAAW,GAAE;AACjB,yBAAW,GAAG;AACd,aAAK,GAAG,iBAAW,QAAC,gDAAa;;AAEnC,gCAAoB;AACpB,0BAAc,CAAC,KAAK;AACpB,wBAAY,GAAG,KAAK;IACtB;0BAEyB,OAAe,EAAE,OAAe,EAAE,IAAe;AACxE,2BAAoB,CAAC,OAAO,EAAE,IAAI;AAClC,yBAAkB,CAAC,OAAO,EAAE,IAAI;AAChC,UAAI,eAAU,OAAO,EAAE,kBAAiB,GAAG;AACzC,YAAI,QAAQ;AACZ,0BAAY,SAAO,CAAC,IAAI;YACnB,KAAI,eAAU,OAAO,EAAE,kBAAiB,GAAG;AAChD,sBAAI,iBAAgB,GAAE;AACpB,2BAAgB,GAAG;AACnB,oCAAyB;;AAE3B,YAAI,OAAO;AACX,0BAAiB,MAAI,CAAC,IAAI;;AAG5B,UAAI,AAAU,kBAAiB,SAAO,KAAE,gBAAO,iBAAgB,GAAE;AAC/D,yBAAgB,GAAG;AACnB,4BAAmB,CAAC,iBAAgB,QAAC,gDAAa;;IAEtD;;AAGE,UAAI,mBAAmB,kBAAiB;AACxC,eAAS,IAAI,GAAG,MAAM,gBAAgB,SAAO,EAAE,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AAC3D,wBAAgB,QAAC,CAAC,SAAS;;AAE7B,wBAAiB,GAAG;IACtB;qBAEoB,KAAsB;AACxC,UAAI,KAAK,IAAI,MAAM;AACnB,eAAS,IAAI,GAAG,MAAM,KAAK,SAAO,EAAE,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AAChD,aAAK,QAAC,CAAC,QAAQ;;AAEjB,wBAAY,GAAG,KAAK;IACtB;oBAEmB,KAAa,EAAE,IAAe;AAC/C,UAAI,QAAQ,iBAAW,QAAC,KAAK;AAC7B,UAAI,KAAK,IAAI,MAAM;AACjB,aAAK,GAAG;AACR,yBAAW,QAAC,KAAK,EAAI,KAAK;;AAE5B,WAAK,MAAI,CAAC,IAAI;IAChB;sBAEqB,KAAa,EAAE,IAAe;AAEjD,UAAI,AAAU,KAAK,KAAE,gDAAa,EAAG;AACrC,UAAI,QAAQ,iBAAW,QAAC,KAAK;AAC7B,UAAI,KAAK,SAAO,KAAI,GAAG;AACrB,QAAgC,UAA/B,iBAAW,cAAY,CAAC,KAAK,OACzB,iBAAW,SAAO,CAAC,KAAK,KAAK,QAAQ;aACrC;AACL,aAAK,SAAO,CAAC,IAAI;;IAErB;;;IAhFQ,kBAAY;IACf,iBAAW,GAAG;IACb,iBAAW,GAAG;IAEH,kBAAY,GAAG;EA6ElC;;;;;;;;;;;;;;;;;;;;;;;;;qBA0BmB,KAAa;AAC5B,uBAAY,GAAG,KAAK;IACtB;qBAGiB,KAAa;AAC5B,UAAI,eAAU,KAAK,EAAE,YAAM,GAAG;AAC9B,mBAAY,qBAAoB,CAAC,YAAW,EAAE,KAAK,EAAE,WAAU;AAC/D,kBAAW,GAAG,KAAK;IACrB;;kEAhBa,aAA8B,EAAE,WAAuB,EAChE,QAAyB;IALrB,YAAM,GAAG,gDAAa;IACnB,WAAK;IACP,aAAO;AAId,iBAAY,GAAG,QAAQ;AACvB,eAAU,GAAG,IAAI,iDAAU,CAAC,aAAa,EAAE,WAAW;EACxD;;;;;;;;;;;;;;qEAwBgB,aAA8B,EAAE,WAAuB,EACnE,eAAgC;AAClC,mBAAe,eAAc,CACzB,gDAAa,EAAE,IAAI,iDAAU,CAAC,aAAa,EAAE,WAAW;EAC9D","file":"ng_switch.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_switch: src__common__directives__ng_switch
  };
});

//# sourceMappingURL=ng_switch.ddc.js.map
