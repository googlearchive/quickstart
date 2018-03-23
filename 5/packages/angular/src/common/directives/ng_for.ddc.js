define(['dart_sdk', 'packages/angular/src/core/change_detection/differs/default_iterable_differ', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, default_iterable_differ, app_view, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__differs__default_iterable_differ = default_iterable_differ.src__core__change_detection__differs__default_iterable_differ;
  const src__core__linker__view_ref = app_view.src__core__linker__view_ref;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__common__directives__ng_for = Object.create(_root);
  const $add = dartx.add;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $isEven = dartx.isEven;
  const $isOdd = dartx.isOdd;
  let JSArrayOfRecordViewTuple = () => (JSArrayOfRecordViewTuple = dart.constFn(_interceptors.JSArray$(src__common__directives__ng_for.RecordViewTuple)))();
  let CollectionChangeRecordAndintAndintToNull = () => (CollectionChangeRecordAndintAndintToNull = dart.constFn(dart.fnType(core.Null, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord, core.int, core.int])))();
  let CollectionChangeRecordToNull = () => (CollectionChangeRecordToNull = dart.constFn(dart.fnType(core.Null, [src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])))();
  let intAnddynamicToObject = () => (intAnddynamicToObject = dart.constFn(dart.fnType(core.Object, [core.int, dart.dynamic])))();
  const _viewContainer = Symbol('_viewContainer');
  const _templateRef = Symbol('_templateRef');
  const _differ = Symbol('_differ');
  const _ngForOf = Symbol('_ngForOf');
  const _ngForTrackBy = Symbol('_ngForTrackBy');
  const _applyChanges = Symbol('_applyChanges');
  const _perViewChange = Symbol('_perViewChange');
  src__common__directives__ng_for.NgFor = class NgFor extends core.Object {
    set ngForOf(value) {
      if (!(value == null || core.Iterable.is(value))) dart.assertFailed(dart.str`Cannot diff \`${value}\`. ${dart.wrapType(src__common__directives__ng_for.NgFor)} only supports binding to something that ` + 'implements the `Iterable` interface, such as `List`.');
      this[_ngForOf] = core.Iterable.as(value);
      if (this[_differ] == null && value != null) {
        this[_differ] = new src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.new(this[_ngForTrackBy]);
      }
    }
    set ngForTemplate(value) {
      if (value != null) {
        this[_templateRef] = value;
      }
    }
    set ngForTrackBy(value) {
      this[_ngForTrackBy] = value;
      if (this[_ngForOf] != null) {
        if (this[_differ] == null) {
          this[_differ] = new src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer.new(this[_ngForTrackBy]);
        } else {
          this[_differ] = this[_differ].clone(this[_ngForTrackBy]);
        }
      }
    }
    ngDoCheck() {
      if (this[_differ] != null) {
        let changes = this[_differ].diff(this[_ngForOf]);
        if (changes != null) this[_applyChanges](changes);
      }
    }
    [_applyChanges](changes) {
      let insertTuples = JSArrayOfRecordViewTuple().of([]);
      changes.forEachOperation(dart.fn((item, adjustedPreviousIndex, currentIndex) => {
        if (item.previousIndex == null) {
          let view = this[_viewContainer].insertEmbeddedView(this[_templateRef], currentIndex);
          let tuple = new src__common__directives__ng_for.RecordViewTuple.new(item, view);
          insertTuples[$add](tuple);
        } else if (currentIndex == null) {
          this[_viewContainer].remove(adjustedPreviousIndex);
        } else {
          let view = this[_viewContainer].get(adjustedPreviousIndex);
          this[_viewContainer].move(view, currentIndex);
          let tuple = new src__common__directives__ng_for.RecordViewTuple.new(item, src__core__linker__view_ref.EmbeddedViewRef._check(view));
          insertTuples[$add](tuple);
        }
      }, CollectionChangeRecordAndintAndintToNull()));
      for (let i = 0; i < dart.notNull(insertTuples[$length]); i++) {
        this[_perViewChange](insertTuples[$_get](i).view, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord._check(insertTuples[$_get](i).record));
      }
      for (let i = 0, len = this[_viewContainer].length; i < dart.notNull(len); i++) {
        let viewRef = this[_viewContainer].get(i);
        viewRef.setLocal('first', i === 0);
        viewRef.setLocal('last', i === dart.notNull(len) - 1);
        viewRef.setLocal('index', i);
        viewRef.setLocal('count', len);
      }
      changes.forEachIdentityChange(dart.fn(record => {
        let viewRef = this[_viewContainer].get(record.currentIndex);
        viewRef.setLocal('$implicit', record.item);
      }, CollectionChangeRecordToNull()));
    }
    [_perViewChange](view, record) {
      view.setLocal('$implicit', record.item);
      view.setLocal('even', record.currentIndex[$isEven]);
      view.setLocal('odd', record.currentIndex[$isOdd]);
    }
  };
  (src__common__directives__ng_for.NgFor.new = function(viewContainer, templateRef) {
    this[_differ] = null;
    this[_ngForOf] = null;
    this[_ngForTrackBy] = null;
    this[_viewContainer] = viewContainer;
    this[_templateRef] = templateRef;
  }).prototype = src__common__directives__ng_for.NgFor.prototype;
  dart.addTypeTests(src__common__directives__ng_for.NgFor);
  src__common__directives__ng_for.NgFor[dart.implements] = () => [src__core__metadata__lifecycle_hooks.DoCheck];
  dart.setMethodSignature(src__common__directives__ng_for.NgFor, () => ({
    __proto__: dart.getMethods(src__common__directives__ng_for.NgFor.__proto__),
    ngDoCheck: dart.fnType(dart.void, []),
    [_applyChanges]: dart.fnType(dart.void, [src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer]),
    [_perViewChange]: dart.fnType(dart.void, [src__core__linker__view_ref.EmbeddedViewRef, src__core__change_detection__differs__default_iterable_differ.CollectionChangeRecord])
  }));
  dart.setSetterSignature(src__common__directives__ng_for.NgFor, () => ({
    __proto__: dart.getSetters(src__common__directives__ng_for.NgFor.__proto__),
    ngForOf: dart.fnType(dart.void, [dart.dynamic]),
    ngForTemplate: dart.fnType(dart.void, [src__core__linker__template_ref.TemplateRef]),
    ngForTrackBy: dart.fnType(dart.void, [intAnddynamicToObject()])
  }));
  dart.setFieldSignature(src__common__directives__ng_for.NgFor, () => ({
    __proto__: dart.getFields(src__common__directives__ng_for.NgFor.__proto__),
    [_viewContainer]: dart.finalFieldType(src__core__linker__view_container_ref.ViewContainerRef),
    [_differ]: dart.fieldType(src__core__change_detection__differs__default_iterable_differ.DefaultIterableDiffer),
    [_ngForOf]: dart.fieldType(core.Iterable),
    [_ngForTrackBy]: dart.fieldType(intAnddynamicToObject()),
    [_templateRef]: dart.fieldType(src__core__linker__template_ref.TemplateRef)
  }));
  src__common__directives__ng_for.RecordViewTuple = class RecordViewTuple extends core.Object {
    get view() {
      return this[view$];
    }
    set view(value) {
      super.view = value;
    }
    get record() {
      return this[record$];
    }
    set record(value) {
      super.record = value;
    }
  };
  (src__common__directives__ng_for.RecordViewTuple.new = function(record, view) {
    this[record$] = record;
    this[view$] = view;
  }).prototype = src__common__directives__ng_for.RecordViewTuple.prototype;
  dart.addTypeTests(src__common__directives__ng_for.RecordViewTuple);
  const view$ = Symbol("RecordViewTuple.view");
  const record$ = Symbol("RecordViewTuple.record");
  dart.setFieldSignature(src__common__directives__ng_for.RecordViewTuple, () => ({
    __proto__: dart.getFields(src__common__directives__ng_for.RecordViewTuple.__proto__),
    view: dart.finalFieldType(src__core__linker__view_ref.EmbeddedViewRef),
    record: dart.finalFieldType(dart.dynamic)
  }));
  dart.trackLibraries("packages/angular/src/common/directives/ng_for.ddc", {
    "package:angular/src/common/directives/ng_for.dart": src__common__directives__ng_for
  }, '{"version":3,"sourceRoot":"","sources":["ng_for.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBA2Gc,KAAK;AACf,YACI,AAAc,KAAT,IAAI,yBAAQ,KAAK,sBACtB,yBAAe,KAAK,OAAI,oDAAK,8CAC7B;AACJ,oBAAQ,oBAAG,KAAK;AAChB,UAAI,aAAO,IAAI,QAAQ,KAAK,IAAI,MAAM;AACpC,qBAAO,GAAG,IAAI,uFAAqB,CAAC,mBAAa;;IAErD;sBAGkB,KAAiB;AACjC,UAAI,KAAK,IAAI,MAAM;AACjB,0BAAY,GAAG,KAAK;;IAExB;qBAMiB,KAAe;AAC9B,yBAAa,GAAG,KAAK;AACrB,UAAI,cAAQ,IAAI,MAAM;AACpB,YAAI,aAAO,IAAI,MAAM;AACnB,uBAAO,GAAG,IAAI,uFAAqB,CAAC,mBAAa;eAC5C;AACL,uBAAO,GAAG,aAAO,MAAM,CAAC,mBAAa;;;IAG3C;;AAIE,UAAI,aAAO,IAAI,MAAM;AACnB,YAAI,UAAU,aAAO,KAAK,CAAC,cAAQ;AACnC,YAAI,OAAO,IAAI,MAAM,mBAAa,CAAC,OAAO;;IAE9C;oBAEmB,OAA6B;AAI9C,UAAM,eAAe;AACrB,aAAO,iBAAiB,CAAC,SAAC,IAA2B,EACjD,qBAAyB,EAAE,YAAgB;AAC7C,YAAI,IAAI,cAAc,IAAI,MAAM;AAC9B,cAAI,OACA,oBAAc,mBAAmB,CAAC,kBAAY,EAAE,YAAY;AAChE,cAAI,QAAQ,IAAI,mDAAe,CAAC,IAAI,EAAE,IAAI;AAC1C,sBAAY,MAAI,CAAC,KAAK;cACjB,KAAI,YAAY,IAAI,MAAM;AAC/B,8BAAc,OAAO,CAAC,qBAAqB;eACtC;AACL,cAAQ,OAAO,oBAAc,IAAI,CAAC,qBAAqB;AACvD,8BAAc,KAAK,CAAC,IAAI,EAAE,YAAY;AACtC,cAAgB,QAAQ,IAAI,mDAAe,CAAC,IAAI,qDAAE,IAAI;AACtD,sBAAY,MAAI,CAAC,KAAK;;;AAI1B,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,YAAY,SAAO,GAAE,CAAC,IAAI;AAC5C,4BAAc,CAAC,YAAY,QAAC,CAAC,MAAM,8FAAE,YAAY,QAAC,CAAC,QAAQ;;AAE7D,eAAS,IAAI,GAAG,MAAM,oBAAc,OAAO,EAAE,AAAE,CAAD,gBAAG,GAAG,GAAE,CAAC,IAAI;AACzD,YAAI,UAAU,oBAAc,IAAI,CAAC,CAAC;AAClC,eAAO,SAAS,CAAC,SAAS,AAAU,CAAC,KAAE;AACvC,eAAO,SAAS,CAAC,QAAQ,AAAU,CAAC,KAAM,aAAJ,GAAG,IAAG;AAC5C,eAAO,SAAS,CAAC,SAAS,CAAC;AAC3B,eAAO,SAAS,CAAC,SAAS,GAAG;;AAE/B,aAAO,sBAAsB,CAAC,QAAC,MAAM;AACnC,YAAI,UAAU,oBAAc,IAAI,CAAC,MAAM,aAAa;AACpD,eAAO,SAAS,CAAC,aAAc,MAAM,KAAK;;IAE9C;qBAEoB,IAAoB,EAAE,MAA6B;AACrE,UAAI,SAAS,CAAC,aAAc,MAAM,KAAK;AACvC,UAAI,SAAS,CAAC,QAAQ,MAAM,aAAa,SAAO;AAChD,UAAI,SAAS,CAAC,OAAO,MAAM,aAAa,QAAM;IAChD;;wDAtFW,aAAc,EAAO,WAAY;IALtB,aAAO;IACpB,cAAQ;IACP,mBAAa;IAGZ,oBAAc,GAAd,aAAc;IAAO,kBAAY,GAAZ,WAAY;EAAC;;;;;;;;;;;;;;;;;;;;;;;;IA0FvB;;;;;;IACR;;;;;;;kEACE,MAAW,EAAE,IAAS;IAAjB,aAAM,GAAN,MAAM;IAAO,WAAI,GAAJ,IAAI;EAAC","file":"ng_for.ddc.js"}');
  // Exports:
  return {
    src__common__directives__ng_for: src__common__directives__ng_for
  };
});

//# sourceMappingURL=ng_for.ddc.js.map
