define(['dart_sdk', 'packages/angular/src/core/change_detection/differs/default_iterable_differ', 'packages/angular/src/core/change_detection/differs/default_keyvalue_differ', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, default_iterable_differ, default_keyvalue_differ, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__differs__default_iterable_differ = default_iterable_differ.src__core__change_detection__differs__default_iterable_differ;
  const src__core__change_detection__differs__default_keyvalue_differ = default_keyvalue_differ.src__core__change_detection__differs__default_keyvalue_differ;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__common__directives__ng_class = Object.create(_root);
  const $split = dartx.split;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $forEach = dartx.forEach;
  const $trim = dartx.trim;
  const $isEmpty = dartx.isEmpty;
  const $classes = dartx.classes;
  const $indexOf = dartx.indexOf;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let KeyValueChangeRecordToNull = () => (KeyValueChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [src__core__change_detection__differs__default_keyvalue_differ.KeyValueChangeRecord])))();
  let CollectionChangeRecordToNull = () => (CollectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  const _ngEl = Symbol('_ngEl');
  const _iterableDiffer = Symbol('_iterableDiffer');
  const _keyValueDiffer = Symbol('_keyValueDiffer');
  const _initialClasses = Symbol('_initialClasses');
  const _rawClass = Symbol('_rawClass');
  const _applyInitialClasses = Symbol('_applyInitialClasses');
  const _applyClasses = Symbol('_applyClasses');
  const _cleanupClasses = Symbol('_cleanupClasses');
  const _applyIterableChanges = Symbol('_applyIterableChanges');
  const _applyKeyValueChanges = Symbol('_applyKeyValueChanges');
  const _toggleClass = Symbol('_toggleClass');
  src__common__directives__ng_class.NgClass = class NgClass extends core.Object {
    set initialClasses(v) {
      this[_applyInitialClasses](true);
      this[_initialClasses] = typeof v == 'string' ? v[$split](' ') : JSArrayOfString().of([]);
      this[_applyInitialClasses](false);
      this[_applyClasses](this[_rawClass], false);
    }
    set rawClass(v) {
      this[_cleanupClasses](this[_rawClass]);
      if (typeof v == 'string') {
        v = dart.dsend(v, 'split', ' ');
      }
      this[_rawClass] = v;
      this[_iterableDiffer] = null;
      this[_keyValueDiffer] = null;
      if (v != null) {
        if (core.Iterable.is(v)) {
          this[_iterableDiffer] = new src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.new();
        } else {
          this[_keyValueDiffer] = new src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer.new();
        }
      }
    }
    ngDoCheck() {
      if (this[_iterableDiffer] != null) {
        let changes = this[_iterableDiffer].diff(core.Iterable._check(this[_rawClass]));
        if (changes != null) {
          this[_applyIterableChanges](changes);
        }
      }
      if (this[_keyValueDiffer] != null) {
        let changes = this[_keyValueDiffer].diff(core.Map._check(this[_rawClass]));
        if (changes != null) {
          this[_applyKeyValueChanges](changes);
        }
      }
    }
    ngOnDestroy() {
      this[_cleanupClasses](this[_rawClass]);
    }
    [_cleanupClasses](rawClassVal) {
      this[_applyClasses](rawClassVal, true);
      this[_applyInitialClasses](false);
    }
    [_applyKeyValueChanges](changes) {
      changes.forEachAddedItem(dart.fn(record => {
        this[_toggleClass](core.String._check(record.key), core.bool._check(record.currentValue));
      }, KeyValueChangeRecordToNull()));
      changes.forEachChangedItem(dart.fn(record => {
        this[_toggleClass](core.String._check(record.key), core.bool._check(record.currentValue));
      }, KeyValueChangeRecordToNull()));
      changes.forEachRemovedItem(dart.fn(record => {
        if (record.previousValue != null) {
          this[_toggleClass](core.String._check(record.key), false);
        }
      }, KeyValueChangeRecordToNull()));
    }
    [_applyIterableChanges](changes) {
      changes.forEachAddedItem(dart.fn(record => {
        this[_toggleClass](core.String._check(record.item), true);
      }, CollectionChangeRecordToNull()));
      changes.forEachRemovedItem(dart.fn(record => {
        this[_toggleClass](core.String._check(record.item), false);
      }, CollectionChangeRecordToNull()));
    }
    [_applyInitialClasses](isCleanup) {
      for (let className of this[_initialClasses]) {
        this[_toggleClass](className, !dart.test(isCleanup));
      }
    }
    [_applyClasses](rawClassVal, isCleanup) {
      if (rawClassVal != null) {
        if (core.List.is(rawClassVal)) {
          for (let i = 0, len = rawClassVal[$length]; i < dart.notNull(len); i++) {
            this[_toggleClass](core.String._check(rawClassVal[$_get](i)), !dart.test(isCleanup));
          }
        } else if (core.Iterable.is(rawClassVal)) {
          for (let className of rawClassVal) {
            this[_toggleClass](core.String._check(className), !dart.test(isCleanup));
          }
        } else {
          core.Map.as(rawClassVal)[$forEach](dart.fn((className, expVal) => {
            if (expVal != null) {
              this[_toggleClass](core.String._check(className), !dart.test(isCleanup));
            }
          }, dynamicAnddynamicToNull()));
        }
      }
    }
    [_toggleClass](className, enabled) {
      className = className[$trim]();
      if (className[$isEmpty]) return;
      let el = this[_ngEl];
      let classList = el[$classes];
      if (className[$indexOf](' ') > -1) {
        let t = src__common__directives__ng_class.NgClass._separator;
        t == null ? src__common__directives__ng_class.NgClass._separator = core.RegExp.new('\\s+') : t;
        let classes = className[$split](src__common__directives__ng_class.NgClass._separator);
        for (let i = 0, len = classes[$length]; i < dart.notNull(len); i++) {
          if (dart.test(enabled)) {
            classList.add(classes[$_get](i));
          } else {
            classList.remove(classes[$_get](i));
          }
        }
      } else {
        if (dart.test(enabled)) {
          classList.add(className);
        } else {
          classList.remove(className);
        }
      }
    }
  };
  (src__common__directives__ng_class.NgClass.new = function(ngEl) {
    this[_iterableDiffer] = null;
    this[_keyValueDiffer] = null;
    this[_initialClasses] = JSArrayOfString().of([]);
    this[_rawClass] = null;
    this[_ngEl] = ngEl;
  }).prototype = src__common__directives__ng_class.NgClass.prototype;
  dart.addTypeTests(src__common__directives__ng_class.NgClass);
  src__common__directives__ng_class.NgClass[dart.implements] = () => [src__core__metadata__lifecycle_hooks.DoCheck, src__core__metadata__lifecycle_hooks.OnDestroy];
  dart.setMethodSignature(src__common__directives__ng_class.NgClass, () => ({
    __proto__: dart.getMethods(src__common__directives__ng_class.NgClass.__proto__),
    ngDoCheck: dart.fnType(dart.void, []),
    ngOnDestroy: dart.fnType(dart.void, []),
    [_cleanupClasses]: dart.fnType(dart.void, [dart.dynamic]),
    [_applyKeyValueChanges]: dart.fnType(dart.void, [src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer]),
    [_applyIterableChanges]: dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer]),
    [_applyInitialClasses]: dart.fnType(dart.void, [core.bool]),
    [_applyClasses]: dart.fnType(dart.void, [dart.dynamic, core.bool]),
    [_toggleClass]: dart.fnType(dart.void, [core.String, core.bool])
  }));
  dart.setSetterSignature(src__common__directives__ng_class.NgClass, () => ({
    __proto__: dart.getSetters(src__common__directives__ng_class.NgClass.__proto__),
    initialClasses: dart.fnType(dart.void, [core.String]),
    rawClass: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__common__directives__ng_class.NgClass, () => ({
    __proto__: dart.getFields(src__common__directives__ng_class.NgClass.__proto__),
    [_ngEl]: dart.fieldType(html.Element),
    [_iterableDiffer]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer),
    [_keyValueDiffer]: dart.fieldType(src__core__change_detection__differs__default_keyvalue_differ.DefaultKeyValueDiffer),
    [_initialClasses]: dart.fieldType(ListOfString()),
    [_rawClass]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__common__directives__ng_class.NgClass, {
    /*src__common__directives__ng_class.NgClass._separator*/get _separator() {
      return null;
    },
    set _separator(_) {}
  });
  dart.trackLibraries("packages/angular/src/common/directives/ng_class.ddc", {
    "package:angular/src/common/directives/ng_class.dart": src__common__directives__ng_class
  }, '{"version":3,"sourceRoot":"","sources":["ng_class.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uBAmEqB,CAAQ;AACzB,gCAAyB,CAAC;AAC1B,2BAAoB,UAAG,CAAC,eAAa,CAAC,QAAM,CAAC,OAAO;AACpD,gCAAyB,CAAC;AAC1B,yBAAkB,CAAC,eAAc,EAAE;IACrC;iBAII,CAAmF;AACrF,2BAAoB,CAAC,eAAc;AACnC,iBAAI,CAAC,cAAY;AACf,SAAC,cAAG,CAAC,WAAO;;AAEd,qBAAc,GAAI,CAAC;AACnB,2BAAoB,GAAG;AACvB,2BAAoB,GAAG;AACvB,UAAI,CAAC,IAAI,MAAM;AACb,6BAAI,CAAC,GAAc;AACjB,+BAAe,GAAG,IAAI,uFAAqB;eACtC;AACL,+BAAe,GAAG,IAAI,uFAAqB;;;IAGjD;;AAIE,UAAI,qBAAe,IAAI,MAAM;AAC3B,YAAI,UAAU,qBAAe,KAAK,sBAAC,eAAS;AAC5C,YAAI,OAAO,IAAI,MAAM;AACnB,qCAAqB,CAAC,OAAO;;;AAGjC,UAAI,qBAAe,IAAI,MAAM;AAC3B,YAAI,UAAU,qBAAe,KAAK,iBAAC,eAAS;AAC5C,YAAI,OAAO,IAAI,MAAM;AACnB,qCAAqB,CAAC,OAAO;;;IAGnC;;AAIE,2BAAe,CAAC,eAAS;IAC3B;sBAEqB,WAAwC;AAC3D,yBAAa,CAAC,WAAW,EAAE;AAC3B,gCAAoB,CAAC;IACvB;4BAE2B,OAA6B;AACtD,aAAO,iBAAiB,CAAC,QAAC,MAA2B;AACnD,0BAAY,oBAAC,MAAM,IAAI,oBAAE,MAAM,aAAa;;AAE9C,aAAO,mBAAmB,CAAC,QAAC,MAA2B;AACrD,0BAAY,oBAAC,MAAM,IAAI,oBAAE,MAAM,aAAa;;AAE9C,aAAO,mBAAmB,CAAC,QAAC,MAA2B;AACrD,YAAI,MAAM,cAAc,IAAI,MAAM;AAChC,4BAAY,oBAAC,MAAM,IAAI,GAAE;;;IAG/B;4BAE2B,OAA6B;AACtD,aAAO,iBAAiB,CAAC,QAAC,MAA6B;AACrD,0BAAY,oBAAC,MAAM,KAAK,GAAE;;AAE5B,aAAO,mBAAmB,CAAC,QAAC,MAA6B;AACvD,0BAAY,oBAAC,MAAM,KAAK,GAAE;;IAE9B;2BAE0B,SAAc;AACtC,eAAS,YAAa,sBAAe,EAAE;AACrC,0BAAY,CAAC,SAAS,EAAE,WAAC,SAAS;;IAEtC;oBAOmB,WAAwC,EAAE,SAAc;AACzE,UAAI,WAAW,IAAI,MAAM;AACvB,yBAAI,WAAW,GAAU;AACvB,mBAAS,IAAI,GAAG,MAAM,WAAW,SAAO,EAAE,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AACtD,8BAAY,oBAAC,WAAW,QAAC,CAAC,IAAG,WAAC,SAAS;;cAEpC,sBAAI,WAAW,GAAc;AAClC,mBAAS,YAAa,YAAW,EAAE;AACjC,8BAAY,oBAAC,SAAS,GAAE,WAAC,SAAS;;eAE/B;AACL,sBAAC,WAAW,WAAgB,CAAC,SAAC,SAAS,EAAE,MAAM;AAC7C,gBAAI,MAAM,IAAI,MAAM;AAClB,gCAAY,oBAAC,SAAS,GAAE,WAAC,SAAS;;;;;IAK5C;mBAEkB,SAAgB,EAAE,OAAY;AAC9C,eAAS,GAAG,SAAS,OAAK;AAC1B,UAAI,SAAS,UAAQ,EAAE;AACvB,UAAQ,KAAK,WAAK;AAClB,UAAI,YAAY,EAAE,UAAQ;AAC1B,UAAI,AAAuB,SAAd,UAAQ,CAAC,OAAO,CAAC,GAAG;AAC/B,oEAAU;oBAAV,oDAAU,GAAK,AAAI,eAAM,CAAC;AAC1B,YAAI,UAAU,SAAS,QAAM,CAAC,oDAAU;AACxC,iBAAS,IAAI,GAAG,MAAM,OAAO,SAAO,EAAE,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AAClD,wBAAI,OAAO,GAAE;AACX,qBAAS,IAAI,CAAC,OAAO,QAAC,CAAC;iBAClB;AACL,qBAAS,OAAO,CAAC,OAAO,QAAC,CAAC;;;aAGzB;AACL,sBAAI,OAAO,GAAE;AACX,mBAAS,IAAI,CAAC,SAAS;eAClB;AACL,mBAAS,OAAO,CAAC,SAAS;;;IAGhC;;4DAnIa,IAAK;IAJI,qBAAe;IACf,qBAAe;IACxB,qBAAe,GAAG;IACe,eAAS;IAC1C,WAAK,GAAL,IAAK;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MANL,oDAAU","file":"ng_class.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_class: src__common__directives__ng_class
  };
});

//# sourceMappingURL=ng_class.ddc.js.map
