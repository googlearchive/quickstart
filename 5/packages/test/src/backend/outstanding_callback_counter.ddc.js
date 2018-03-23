define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__backend__outstanding_callback_counter = Object.create(_root);
  const _count = Symbol('_count');
  const _completer = Symbol('_completer');
  src__backend__outstanding_callback_counter.OutstandingCallbackCounter = class OutstandingCallbackCounter extends core.Object {
    get noOutstandingCallbacks() {
      return this[_completer].future;
    }
    addOutstandingCallback() {
      this[_count] = dart.notNull(this[_count]) + 1;
    }
    removeOutstandingCallback() {
      this[_count] = dart.notNull(this[_count]) - 1;
      if (this[_count] !== 0) return;
      if (dart.test(this[_completer].isCompleted)) return;
      this[_completer].complete();
    }
    removeAllOutstandingCallbacks() {
      if (!dart.test(this[_completer].isCompleted)) this[_completer].complete();
    }
  };
  (src__backend__outstanding_callback_counter.OutstandingCallbackCounter.new = function() {
    this[_count] = 1;
    this[_completer] = async.Completer.new();
  }).prototype = src__backend__outstanding_callback_counter.OutstandingCallbackCounter.prototype;
  dart.addTypeTests(src__backend__outstanding_callback_counter.OutstandingCallbackCounter);
  dart.setMethodSignature(src__backend__outstanding_callback_counter.OutstandingCallbackCounter, () => ({
    __proto__: dart.getMethods(src__backend__outstanding_callback_counter.OutstandingCallbackCounter.__proto__),
    addOutstandingCallback: dart.fnType(dart.void, []),
    removeOutstandingCallback: dart.fnType(dart.void, []),
    removeAllOutstandingCallbacks: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__backend__outstanding_callback_counter.OutstandingCallbackCounter, () => ({
    __proto__: dart.getGetters(src__backend__outstanding_callback_counter.OutstandingCallbackCounter.__proto__),
    noOutstandingCallbacks: dart.fnType(async.Future, [])
  }));
  dart.setFieldSignature(src__backend__outstanding_callback_counter.OutstandingCallbackCounter, () => ({
    __proto__: dart.getFields(src__backend__outstanding_callback_counter.OutstandingCallbackCounter.__proto__),
    [_count]: dart.fieldType(core.int),
    [_completer]: dart.finalFieldType(async.Completer)
  }));
  dart.trackLibraries("packages/test/src/backend/outstanding_callback_counter.ddc", {
    "package:test/src/backend/outstanding_callback_counter.dart": src__backend__outstanding_callback_counter
  }, '{"version":3,"sourceRoot":"","sources":["outstanding_callback_counter.dart"],"names":[],"mappings":";;;;;;;;;;;;YAeuC,iBAAU,OAAO;;;AAKpD,kBAAM,gBAAN,YAAM,IApBV;IAqBE;;AAIE,kBAAM,gBAAN,YAAM,IAzBV;AA0BI,UAAI,YAAM,KAAI,GAAG;AACjB,oBAAI,gBAAU,YAAY,GAAE;AAC5B,sBAAU,SAAS;IACrB;;AAQE,qBAAK,gBAAU,YAAY,GAAE,gBAAU,SAAS;IAClD;;;IA1BI,YAAM,GAAG;IAIP,gBAAU,GAAG,AAAI,mBAAS;EAuBlC","file":"outstanding_callback_counter.ddc.js"}');
  // Exports:
  return {
    src__backend__outstanding_callback_counter: src__backend__outstanding_callback_counter
  };
});

//# sourceMappingURL=outstanding_callback_counter.ddc.js.map
