define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__future_group = Object.create(_root);
  const $length = dartx.length;
  const $add = dartx.add;
  const $_set = dartx._set;
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  const _pending = Symbol('_pending');
  const _closed = Symbol('_closed');
  const _completer = Symbol('_completer');
  const _onIdleController = Symbol('_onIdleController');
  const _values = Symbol('_values');
  const _is_FutureGroup_default = Symbol('_is_FutureGroup_default');
  src__future_group.FutureGroup$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let CompleterOfListOfT = () => (CompleterOfListOfT = dart.constFn(async.Completer$(ListOfT())))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let SinkOfFutureOfT = () => (SinkOfFutureOfT = dart.constFn(core.Sink$(FutureOfT())))();
    class FutureGroup extends core.Object {
      get future() {
        return this[_completer].future;
      }
      get isIdle() {
        return this[_pending] === 0;
      }
      get onIdle() {
        if (this[_onIdleController] == null) {
          this[_onIdleController] = async.StreamController.broadcast({sync: true});
        }
        return this[_onIdleController].stream;
      }
      add(task) {
        FutureOfT()._check(task);
        if (dart.test(this[_closed])) dart.throw(new core.StateError.new("The FutureGroup is closed."));
        let index = this[_values][$length];
        this[_values][$add](null);
        this[_pending] = dart.notNull(this[_pending]) + 1;
        task.then(core.Null, dart.fn(value => {
          if (dart.test(this[_completer].isCompleted)) return null;
          this[_pending] = dart.notNull(this[_pending]) - 1;
          this[_values][$_set](index, value);
          if (this[_pending] !== 0) return null;
          if (this[_onIdleController] != null) this[_onIdleController].add(null);
          if (!dart.test(this[_closed])) return null;
          if (this[_onIdleController] != null) this[_onIdleController].close();
          this[_completer].complete(this[_values]);
        }, TToNull())).catchError(dart.fn((error, stackTrace) => {
          if (dart.test(this[_completer].isCompleted)) return null;
          this[_completer].completeError(error, core.StackTrace._check(stackTrace));
        }, dynamicAnddynamicToNull()));
      }
      close() {
        this[_closed] = true;
        if (this[_pending] !== 0) return;
        if (dart.test(this[_completer].isCompleted)) return;
        this[_completer].complete(this[_values]);
      }
    }
    (FutureGroup.new = function() {
      this[_pending] = 0;
      this[_closed] = false;
      this[_completer] = CompleterOfListOfT().new();
      this[_onIdleController] = null;
      this[_values] = JSArrayOfT().of([]);
    }).prototype = FutureGroup.prototype;
    dart.addTypeTests(FutureGroup);
    FutureGroup.prototype[_is_FutureGroup_default] = true;
    FutureGroup[dart.implements] = () => [SinkOfFutureOfT()];
    dart.setMethodSignature(FutureGroup, () => ({
      __proto__: dart.getMethods(FutureGroup.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(FutureGroup, () => ({
      __proto__: dart.getGetters(FutureGroup.__proto__),
      future: dart.fnType(async.Future$(core.List$(T)), []),
      isIdle: dart.fnType(core.bool, []),
      onIdle: dart.fnType(async.Stream, [])
    }));
    dart.setFieldSignature(FutureGroup, () => ({
      __proto__: dart.getFields(FutureGroup.__proto__),
      [_pending]: dart.fieldType(core.int),
      [_closed]: dart.fieldType(core.bool),
      [_completer]: dart.finalFieldType(CompleterOfListOfT()),
      [_onIdleController]: dart.fieldType(async.StreamController),
      [_values]: dart.finalFieldType(ListOfT())
    }));
    return FutureGroup;
  });
  src__future_group.FutureGroup = src__future_group.FutureGroup$();
  dart.addTypeTests(src__future_group.FutureGroup, _is_FutureGroup_default);
  dart.trackLibraries("packages/async/src/future_group.ddc", {
    "package:async/src/future_group.dart": src__future_group
  }, '{"version":3,"sourceRoot":"","sources":["future_group.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;cAgCgC,iBAAU,OAAO;;;cAI5B,eAAQ,KAAI;MAAC;;AAQ9B,YAAI,uBAAiB,IAAI,MAAM;AAC7B,iCAAiB,GAAG,AAAI,gCAA0B,QAAO;;AAE3D,cAAO,wBAAiB,OAAO;MACjC;UAWS,IAAc;2BAAJ;AACjB,sBAAI,aAAO,GAAE,WAAM,IAAI,mBAAU,CAAC;AAKlC,YAAI,QAAQ,aAAO,SAAO;AAC1B,qBAAO,MAAI,CAAC;AAEZ,sBAAQ,gBAAR,cAAQ,IApEZ;AAqEI,YAAI,KAAK,YAAC,QAAC,KAAK;AACd,wBAAI,gBAAU,YAAY,GAAE,MAAO;AAEnC,wBAAQ,gBAAR,cAAQ,IAxEd;AAyEM,uBAAO,QAAC,KAAK,EAAI,KAAK;AAEtB,cAAI,cAAQ,KAAI,GAAG,MAAO;AAC1B,cAAI,uBAAiB,IAAI,MAAM,uBAAiB,IAAI,CAAC;AAErD,yBAAK,aAAO,GAAE,MAAO;AACrB,cAAI,uBAAiB,IAAI,MAAM,uBAAiB,MAAM;AACtD,0BAAU,SAAS,CAAC,aAAO;iCAChB,CAAC,SAAC,KAAK,EAAE,UAAU;AAC9B,wBAAI,gBAAU,YAAY,GAAE,MAAO;AACnC,0BAAU,cAAc,CAAC,KAAK,yBAAE,UAAU;;MAE9C;;AAKE,qBAAO,GAAG;AACV,YAAI,cAAQ,KAAI,GAAG;AACnB,sBAAI,gBAAU,YAAY,GAAE;AAC5B,wBAAU,SAAS,CAAC,aAAO;MAC7B;;;MAxEI,cAAQ,GAAG;MAGX,aAAO,GAAG;MAQR,gBAAU,GAAG,AAAI,wBAAkB;MAiBxB,uBAAiB;MAM5B,aAAO,GAAG;IAuClB","file":"future_group.ddc.js"}');
  // Exports:
  return {
    src__future_group: src__future_group
  };
});

//# sourceMappingURL=future_group.ddc.js.map
