define(['dart_sdk', 'packages/collection/src/equality', 'packages/angular/src/facade/lang'], function(dart_sdk, equality, lang) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__equality = equality.src__equality;
  const src__facade__lang = lang.src__facade__lang;
  const _root = Object.create(null);
  const src__core__change_detection__change_detection_util = Object.create(_root);
  let IterableEqualityOfObject = () => (IterableEqualityOfObject = dart.constFn(src__equality.IterableEquality$(core.Object)))();
  let ObjectAndObjectTobool = () => (ObjectAndObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object, core.Object])))();
  let const$;
  let const$0;
  src__core__change_detection__change_detection_util._DevModeEquality = class _DevModeEquality extends src__equality.DefaultEquality$(core.Object) {
    equals(a, b) {
      if (core.Iterable.is(a) && core.Iterable.is(b)) {
        return (const$0 || (const$0 = dart.const(new (IterableEqualityOfObject()).new(const$ || (const$ = dart.const(new src__core__change_detection__change_detection_util._DevModeEquality.new())))))).equals(a, b);
      } else if (!core.Iterable.is(a) && !dart.test(src__facade__lang.isPrimitive(a)) && !core.Iterable.is(b) && !dart.test(src__facade__lang.isPrimitive(b))) {
        return true;
      } else {
        return core.identical(a, b);
      }
    }
  };
  (src__core__change_detection__change_detection_util._DevModeEquality.new = function() {
    src__core__change_detection__change_detection_util._DevModeEquality.__proto__.new.call(this);
  }).prototype = src__core__change_detection__change_detection_util._DevModeEquality.prototype;
  dart.addTypeTests(src__core__change_detection__change_detection_util._DevModeEquality);
  dart.setMethodSignature(src__core__change_detection__change_detection_util._DevModeEquality, () => ({
    __proto__: dart.getMethods(src__core__change_detection__change_detection_util._DevModeEquality.__proto__),
    equals: dart.fnType(core.bool, [core.Object, core.Object])
  }));
  let const$1;
  src__core__change_detection__change_detection_util.devModeEqual = function(a, b) {
    return (const$1 || (const$1 = dart.const(new src__core__change_detection__change_detection_util._DevModeEquality.new()))).equals(a, b);
  };
  dart.fn(src__core__change_detection__change_detection_util.devModeEqual, ObjectAndObjectTobool());
  src__core__change_detection__change_detection_util.SimpleChange = class SimpleChange extends core.Object {
    get previousValue() {
      return this[previousValue$];
    }
    set previousValue(value) {
      this[previousValue$] = value;
    }
    get currentValue() {
      return this[currentValue$];
    }
    set currentValue(value) {
      this[currentValue$] = value;
    }
  };
  (src__core__change_detection__change_detection_util.SimpleChange.new = function(previousValue, currentValue) {
    this[previousValue$] = previousValue;
    this[currentValue$] = currentValue;
  }).prototype = src__core__change_detection__change_detection_util.SimpleChange.prototype;
  dart.addTypeTests(src__core__change_detection__change_detection_util.SimpleChange);
  const previousValue$ = Symbol("SimpleChange.previousValue");
  const currentValue$ = Symbol("SimpleChange.currentValue");
  dart.setFieldSignature(src__core__change_detection__change_detection_util.SimpleChange, () => ({
    __proto__: dart.getFields(src__core__change_detection__change_detection_util.SimpleChange.__proto__),
    previousValue: dart.fieldType(dart.dynamic),
    currentValue: dart.fieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/angular/src/core/change_detection/change_detection_util.ddc", {
    "package:angular/src/core/change_detection/change_detection_util.dart": src__core__change_detection__change_detection_util
  }, '{"version":3,"sourceRoot":"","sources":["change_detection_util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;WAOc,CAAQ,EAAE,CAAQ;AAC5B,2BAAI,CAAC,sBAAgB,CAAC,GAAc;AAClC,gBAAO,qCAAM,gCAAgB,CAAC,mCAAM,uEAAgB,eAAU,CAAC,CAAC,EAAE,CAAC;YAC9D,uBAAI,CAAC,gBACP,6BAAW,CAAC,CAAC,wBACd,CAAC,gBACA,6BAAW,CAAC,CAAC,IAAG;AAEnB,cAAO;aACF;AACL,cAAO,gBAAU,CAAC,EAAE,CAAC;;IAEzB;;;;EAfwB;;;;;;;6EAkBR,CAAQ,EAAE,CAAQ;YAAK,qCAAM,uEAAgB,YAAS,CAAC,CAAC,EAAE,CAAC;EAAC;;;IAIpE;;;;;;IACA;;;;;;;kFACK,aAAkB,EAAE,YAAiB;IAAhC,oBAAa,GAAb,aAAa;IAAO,mBAAY,GAAZ,YAAY;EAAC","file":"change_detection_util.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__change_detection_util: src__core__change_detection__change_detection_util
  };
});

//# sourceMappingURL=change_detection_util.ddc.js.map
