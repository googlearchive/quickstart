define(['dart_sdk', 'packages/angular/src/core/testability/testability'], function(dart_sdk, testability) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const _js_helper = dart_sdk._js_helper;
  const js = dart_sdk.js;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__testability__testability = testability.src__core__testability__testability;
  const _root = Object.create(null);
  const src__platform__browser__testability = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $toList = dartx.toList;
  const $map = dartx.map;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let Element__ToList = () => (Element__ToList = dart.constFn(dart.fnType(core.List, [html.Element], [core.String, core.bool])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FunctionTovoid = () => (FunctionTovoid = dart.constFn(dart.fnType(dart.void, [core.Function])))();
  let Element__Todynamic = () => (Element__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Element], [core.bool])))();
  let VoidToList = () => (VoidToList = dart.constFn(dart.fnType(core.List, [])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let ElementAndboolTodynamic = () => (ElementAndboolTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Element, core.bool])))();
  let TestabilityTodynamic = () => (TestabilityTodynamic = dart.constFn(dart.fnType(dart.dynamic, [src__core__testability__testability.Testability])))();
  const _testability = Symbol('_testability');
  const _toJsObject = Symbol('_toJsObject');
  src__platform__browser__testability.PublicTestability = class PublicTestability extends core.Object {
    isStable() {
      return this[_testability].isStable();
    }
    whenStable(callback) {
      this[_testability].whenStable(callback);
    }
    findBindings(elem, binding, exactMatch) {
      if (binding === void 0) binding = null;
      if (exactMatch === void 0) exactMatch = null;
      return this[_testability].findBindings(elem, binding, exactMatch);
    }
    [_toJsObject]() {
      return js_util.jsify(new (IdentityMapOfString$Object()).from(['findBindings', js.allowInterop(Element__ToList(), dart.bind(this, 'findBindings')), 'isStable', js.allowInterop(VoidTobool(), dart.bind(this, 'isStable')), 'whenStable', js.allowInterop(FunctionTovoid(), dart.bind(this, 'whenStable')), '_dart_', this]));
    }
  };
  (src__platform__browser__testability.PublicTestability.new = function(testability) {
    this[_testability] = null;
    this[_testability] = testability;
  }).prototype = src__platform__browser__testability.PublicTestability.prototype;
  dart.addTypeTests(src__platform__browser__testability.PublicTestability);
  dart.setMethodSignature(src__platform__browser__testability.PublicTestability, () => ({
    __proto__: dart.getMethods(src__platform__browser__testability.PublicTestability.__proto__),
    isStable: dart.fnType(core.bool, []),
    whenStable: dart.fnType(dart.void, [core.Function]),
    findBindings: dart.fnType(core.List, [html.Element], [core.String, core.bool]),
    [_toJsObject]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__platform__browser__testability.PublicTestability, () => ({
    __proto__: dart.getFields(src__platform__browser__testability.PublicTestability.__proto__),
    [_testability]: dart.fieldType(src__core__testability__testability.Testability)
  }));
  const _createRegistry = Symbol('_createRegistry');
  src__platform__browser__testability.BrowserGetTestability = class BrowserGetTestability extends core.Object {
    addToWindow(registry) {
      let jsRegistry = js_util.getProperty(dart.global.self, 'ngTestabilityRegistries');
      if (jsRegistry == null) {
        js_util.setProperty(dart.global.self, 'ngTestabilityRegistries', jsRegistry = []);
        js_util.setProperty(dart.global.self, 'getAngularTestability', js.allowInterop(Element__Todynamic(), dart.fn((elem, findInAncestors) => {
          if (findInAncestors === void 0) findInAncestors = true;
          let registry = core.List._check(js_util.getProperty(dart.global.self, 'ngTestabilityRegistries'));
          for (let i = 0; i < dart.notNull(registry[$length]); i++) {
            let result = js_util.callMethod(registry[$_get](i), 'getAngularTestability', [elem, findInAncestors]);
            if (result != null) return result;
          }
          dart.throw(new core.StateError.new('Could not find testability for element.'));
        }, Element__Todynamic())));
        let getAllAngularTestabilities = () => {
          let registry = core.List._check(js_util.getProperty(dart.global.self, 'ngTestabilityRegistries'));
          let result = [];
          for (let i = 0; i < dart.notNull(registry[$length]); i++) {
            let testabilities = js_util.callMethod(registry[$_get](i), 'getAllAngularTestabilities', []);
            let testabilityCount = js_util.getProperty(testabilities, 'length');
            for (let j = 0; j < dart.notNull(core.num._check(testabilityCount)); j++) {
              let testability = js_util.getProperty(testabilities, j);
              result[$add](testability);
            }
          }
          return result;
        };
        dart.fn(getAllAngularTestabilities, VoidToList());
        js_util.setProperty(dart.global.self, 'getAllAngularTestabilities', js.allowInterop(VoidToList(), getAllAngularTestabilities));
        let whenAllStable = js.allowInterop(dynamicToNull(), dart.fn(callback => {
          let testabilities = getAllAngularTestabilities();
          let count = testabilities[$length];
          let didWork = false;
          let decrement = didWork_ => {
            didWork = didWork || dart.test(didWork_);
            count = dart.notNull(count) - 1;
            if (count === 0) {
              dart.dcall(callback, didWork);
            }
          };
          dart.fn(decrement, boolToNull());
          for (let testability of testabilities) {
            js_util.callMethod(testability, 'whenStable', [js.allowInterop(boolToNull(), decrement)]);
          }
        }, dynamicToNull()));
        if (!dart.dtest(js_util.hasProperty(dart.global.self, 'frameworkStabilizers'))) {
          js_util.setProperty(dart.global.self, 'frameworkStabilizers', []);
        }
        dart.dsend(js_util.getProperty(dart.global.self, 'frameworkStabilizers'), 'add', whenAllStable);
      }
      dart.dsend(jsRegistry, 'add', this[_createRegistry](registry));
    }
    findTestabilityInTree(registry, elem, findInAncestors) {
      if (elem == null) {
        return null;
      }
      let t = registry.getTestability(elem);
      if (t != null) {
        return t;
      } else if (!dart.test(findInAncestors)) {
        return null;
      }
      if (html.ShadowRoot.is(elem)) {
        return this.findTestabilityInTree(registry, elem.host, true);
      }
      return this.findTestabilityInTree(registry, html.Node.as(elem).parentNode, true);
    }
    [_createRegistry](registry) {
      let object = js_util.newObject();
      js_util.setProperty(object, 'getAngularTestability', js.allowInterop(ElementAndboolTodynamic(), dart.fn((elem, findInAncestors) => {
        let testability = registry.findTestabilityInTree(elem, findInAncestors);
        return testability == null ? null : new src__platform__browser__testability.PublicTestability.new(testability)[_toJsObject]();
      }, ElementAndboolTodynamic())));
      js_util.setProperty(object, 'getAllAngularTestabilities', js.allowInterop(VoidToList(), dart.fn(() => {
        let publicTestabilities = registry.getAllTestabilities()[$map](dart.dynamic, dart.fn(t => new src__platform__browser__testability.PublicTestability.new(t)[_toJsObject](), TestabilityTodynamic()))[$toList]();
        return publicTestabilities;
      }, VoidToList())));
      return object;
    }
  };
  (src__platform__browser__testability.BrowserGetTestability.new = function() {
  }).prototype = src__platform__browser__testability.BrowserGetTestability.prototype;
  dart.addTypeTests(src__platform__browser__testability.BrowserGetTestability);
  src__platform__browser__testability.BrowserGetTestability[dart.implements] = () => [src__core__testability__testability.GetTestability];
  dart.setMethodSignature(src__platform__browser__testability.BrowserGetTestability, () => ({
    __proto__: dart.getMethods(src__platform__browser__testability.BrowserGetTestability.__proto__),
    addToWindow: dart.fnType(dart.void, [src__core__testability__testability.TestabilityRegistry]),
    findTestabilityInTree: dart.fnType(src__core__testability__testability.Testability, [src__core__testability__testability.TestabilityRegistry, dart.dynamic, core.bool]),
    [_createRegistry]: dart.fnType(dart.dynamic, [src__core__testability__testability.TestabilityRegistry])
  }));
  dart.trackLibraries("packages/angular/src/platform/browser/testability.ddc", {
    "package:angular/src/platform/browser/testability.dart": src__platform__browser__testability
  }, '{"version":3,"sourceRoot":"","sources":["testability.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBI,YAAO,mBAAiB,SAAS;IACnC;eAEgB,QAAiB;AAC/B,wBAAiB,WAAW,CAAC,QAAQ;IACvC;iBAEkB,IAAY,EAAG,OAAc,EAAE,UAAe;8BAAxB;iCAAc;AACpD,YAAO,mBAAiB,aAAa,CAAC,IAAI,EAAE,OAAO,EAAE,UAAU;IACjE;;AAGE,YAAO,AAAQ,cAAK,CAAC,yCACnB,gBAAgB,eAAY,oBAAC,+BAAY,GACzC,YAAY,eAAY,eAAC,2BAAQ,GACjC,cAAc,eAAY,mBAAC,6BAAU,GACrC,UAAU;IAEd;;wEAvBkB,WAAuB;IAD7B,kBAAY;AAEtB,sBAAiB,GAAG,WAAW;EACjC;;;;;;;;;;;;;;;gBA2BiB,QAA4B;AAC3C,UAAI,aAAa,AAAQ,mBAAW,CAAC,gBAAK,EAAE;AAC5C,UAAI,UAAU,IAAI,MAAM;AACtB,QAAQ,mBAAW,CAAC,gBAAK,EAAE,2BAA2B,UAAU,GAAG;AACnE,QAAQ,mBAAW,CAAC,gBAAK,EAAE,yBACvB,eAAY,uBAAC,SAAC,IAAY,EAAG,eAA2B;0CAAtB,kBAAkB;AACtD,cAAK,4BAAW,AAAQ,mBAAW,CAAC,gBAAK,EAAE;AAC3C,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,QAAQ,SAAO,GAAE,CAAC,IAAI;AACxC,gBAAI,SAAS,AAAQ,kBAAU,CAC3B,QAAQ,QAAC,CAAC,GAAG,yBAAyB,CAAC,IAAI,EAAE,eAAe;AAChE,gBAAI,MAAM,IAAI,MAAM,MAAO,OAAM;;AAEnC,qBAAM,IAAI,mBAAU,CAAC;;AAEvB,YAAI;AACF,cAAK,4BAAW,AAAQ,mBAAW,CAAC,gBAAK,EAAE;AAC3C,cAAI,SAAS;AACb,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,QAAQ,SAAO,GAAE,CAAC,IAAI;AACxC,gBAAI,gBACA,AAAQ,kBAAU,CAAC,QAAQ,QAAC,CAAC,GAAG,8BAA8B;AAKlE,gBAAI,mBAAmB,AAAQ,mBAAW,CAAC,aAAa,EAAE;AAE1D,qBAAS,IAAI,GAAG,AAAE,CAAD,gCAAG,gBAAgB,IAAE,CAAC,IAAI;AACzC,kBAAI,cAAc,AAAQ,mBAAW,CAAC,aAAa,EAAE,CAAC;AACtD,oBAAM,MAAI,CAAC,WAAW;;;AAG1B,gBAAO,OAAM;;gBAjBX;AAmBJ,QAAQ,mBAAW,CAAC,gBAAK,EAAE,8BACvB,eAAY,eAAC,0BAA0B;AAE3C,YAAI,gBAAgB,eAAY,kBAAC,QAAC,QAAQ;AACxC,cAAI,gBAAgB,0BAA0B;AAC9C,cAAI,QAAQ,aAAa,SAAO;AAChC,cAAI,UAAU;AACd,cAAI,YAAa,QAAa;AAC5B,mBAAO,GAAG,AAAQ,OAAD,cAAI,QAAQ;AAC7B,iBAAK,gBAAL,KAAK,IArFf;AAsFU,gBAAI,KAAK,KAAI,GAAG;AACd,iCAAQ,EAAC,OAAO;;;kBAJhB;AAOJ,mBAAS,cAAe,cAAa,EAAE;AACrC,YACK,kBAAU,CAAC,WAAW,EAAE,cAAc,CAAC,eAAY,eAAC,SAAS;;;AAItE,wBAAK,AAAQ,mBAAW,CAAC,gBAAK,EAAE,0BAAyB;AACvD,UAAQ,mBAAW,CAAC,gBAAK,EAAE,wBAAwB;;AAErD,mBAAQ,mBAAW,CAAC,gBAAK,EAAE,gCAA4B,aAAa;;AAEtE,2BAAU,SAAK,qBAAoB,CAAC,QAAQ;IAC9C;0BAGI,QAA4B,EAAE,IAAY,EAAE,eAAoB;AAClE,UAAI,IAAI,IAAI,MAAM;AAChB,cAAO;;AAET,UAAI,IAAI,QAAQ,eAAe,CAAC,IAAI;AACpC,UAAI,CAAC,IAAI,MAAM;AACb,cAAO,EAAC;YACH,gBAAK,eAAe,GAAE;AAC3B,cAAO;;AAET,6BAAI,IAAI,GAAgB;AACtB,cAAO,2BAA0B,CAAC,QAAQ,EAAE,IAAI,KAAK,EAAE;;AAEzD,YAAO,2BACmB,CAAC,QAAQ,eAAG,IAAI,YAAoB,EAAE;IAClE;sBAEwB,QAA4B;AAClD,UAAI,SAAS,AAAQ,iBAAS;AAC9B,MAAQ,mBAAW,CAAC,MAAM,EAAE,yBACxB,eAAY,4BAAC,SAAC,IAAY,EAAE,eAAoB;AAClD,YAAI,cAAc,QAAQ,sBAAsB,CAAC,IAAI,EAAE,eAAe;AACtE,cAAO,YAAW,IAAI,OAChB,OACA,IAAI,yDAAiB,CAAC,WAAW,cAAa;;AAEtD,MAAQ,mBAAW,CAAC,MAAM,EAAE,8BAA8B,eAAY,eAAC;AACrE,YAAI,sBAAsB,QAAQ,oBACV,QAChB,eAAC,QAAC,CAAC,IAAK,IAAI,yDAAiB,CAAC,CAAC,cAAa,qCACzC;AACX,cAAO,oBAAmB;;AAE5B,YAAO,OAAM;IACf;;;EAlG6B","file":"testability.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__testability: src__platform__browser__testability
  };
});

//# sourceMappingURL=testability.ddc.js.map
