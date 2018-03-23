define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__stream_zip = Object.create(_root);
  const $_set = dartx._set;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  let ObjectAndStackTraceTovoid = () => (ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _streams = Symbol('_streams');
  const _is_StreamZip_default = Symbol('_is_StreamZip_default');
  src__stream_zip.StreamZip$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let JSArrayOfStreamSubscriptionOfT = () => (JSArrayOfStreamSubscriptionOfT = dart.constFn(_interceptors.JSArray$(StreamSubscriptionOfT())))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let intAndTTovoid = () => (intAndTTovoid = dart.constFn(dart.fnType(dart.void, [core.int, T])))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let StreamControllerOfListOfT = () => (StreamControllerOfListOfT = dart.constFn(async.StreamController$(ListOfT())))();
    let ListOfTTovoid = () => (ListOfTTovoid = dart.constFn(dart.fnType(dart.void, [ListOfT()])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let IterableOfStreamOfT = () => (IterableOfStreamOfT = dart.constFn(core.Iterable$(StreamOfT())))();
    class StreamZip extends async.Stream$(core.List$(T)) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        cancelOnError = true === cancelOnError;
        let subscriptions = JSArrayOfStreamSubscriptionOfT().of([]);
        let controller = null;
        let current = null;
        let dataCount = 0;
        function handleData(index, data) {
          current[$_set](index, data);
          dataCount++;
          if (dataCount === subscriptions[$length]) {
            let data = current;
            current = ListOfT().new(subscriptions[$length]);
            dataCount = 0;
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
              if (i !== index) subscriptions[$_get](i).resume();
            }
            controller.add(data);
          } else {
            subscriptions[$_get](index).pause();
          }
        }
        dart.fn(handleData, intAndTTovoid());
        function handleError(error, stackTrace) {
          controller.addError(error, stackTrace);
        }
        dart.fn(handleError, ObjectAndStackTraceTovoid());
        function handleErrorCancel(error, stackTrace) {
          for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
            subscriptions[$_get](i).cancel();
          }
          controller.addError(error, stackTrace);
        }
        dart.fn(handleErrorCancel, ObjectAndStackTraceTovoid());
        function handleDone() {
          for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
            subscriptions[$_get](i).cancel();
          }
          controller.close();
        }
        dart.fn(handleDone, VoidTovoid());
        try {
          for (let stream of this[_streams]) {
            let index = subscriptions[$length];
            subscriptions[$add](stream.listen(dart.fn(data => {
              handleData(index, data);
            }, TToNull()), {onError: dart.test(cancelOnError) ? handleError : handleErrorCancel, onDone: handleDone, cancelOnError: cancelOnError}));
          }
        } catch (e) {
          for (let i = dart.notNull(subscriptions[$length]) - 1; i >= 0; i--) {
            subscriptions[$_get](i).cancel();
          }
          dart.rethrow(e);
        }
        current = ListOfT().new(subscriptions[$length]);
        controller = StreamControllerOfListOfT().new({onPause: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
              subscriptions[$_get](i).pause();
            }
          }, VoidToNull()), onResume: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
              subscriptions[$_get](i).resume();
            }
          }, VoidToNull()), onCancel: dart.fn(() => {
            for (let i = 0; i < dart.notNull(subscriptions[$length]); i++) {
              subscriptions[$_get](i).cancel();
            }
          }, VoidToNull())});
        if (dart.test(subscriptions[$isEmpty])) {
          controller.close();
        }
        return controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (StreamZip.new = function(streams) {
      this[_streams] = streams;
      StreamZip.__proto__.new.call(this);
    }).prototype = StreamZip.prototype;
    dart.addTypeTests(StreamZip);
    StreamZip.prototype[_is_StreamZip_default] = true;
    dart.setMethodSignature(StreamZip, () => ({
      __proto__: dart.getMethods(StreamZip.__proto__),
      listen: dart.fnType(async.StreamSubscription$(core.List$(T)), [ListOfTTovoid()], {onError: core.Function, onDone: VoidTovoid(), cancelOnError: core.bool})
    }));
    dart.setFieldSignature(StreamZip, () => ({
      __proto__: dart.getFields(StreamZip.__proto__),
      [_streams]: dart.finalFieldType(IterableOfStreamOfT())
    }));
    return StreamZip;
  });
  src__stream_zip.StreamZip = src__stream_zip.StreamZip$();
  dart.addTypeTests(src__stream_zip.StreamZip, _is_StreamZip_default);
  dart.trackLibraries("packages/async/src/stream_zip.ddc", {
    "package:async/src/stream_zip.dart": src__stream_zip
  }, '{"version":3,"sourceRoot":"","sources":["stream_zip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;aAmBqC,MAAyB;YAC9C;YAAc;YAAe;AACzC,qBAAa,GAAG,AAAU,SAAM,aAAa;AAC7C,YAAI,gBAAgB;AACpB,YAA0B;AAC1B,YAAQ;AACR,YAAI,YAAY;AAEhB,iBACK,WAAW,KAAS,EAAE,IAAM;AAC/B,iBAAO,QAAC,KAAK,EAAI,IAAI;AACrB,mBAAS;AACT,cAAI,SAAS,KAAI,aAAa,SAAO,EAAE;AACrC,gBAAI,OAAO,OAAO;AAClB,mBAAO,GAAG,AAAI,aAAI,CAAC,aAAa,SAAO;AACvC,qBAAS,GAAG;AACZ,qBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,aAAa,SAAO,GAAE,CAAC,IAAI;AAC7C,kBAAI,CAAC,KAAI,KAAK,EAAE,aAAa,QAAC,CAAC,QAAQ;;AAEzC,sBAAU,IAAI,CAAC,IAAI;iBACd;AACL,yBAAa,QAAC,KAAK,OAAO;;;gBAZzB;AAgBL,iBAGK,YAAY,KAAY,EAAE,UAAqB;AAClD,oBAAU,SAAS,CAAC,KAAK,EAAE,UAAU;;gBADlC;AAIL,iBAIK,kBAAkB,KAAY,EAAE,UAAqB;AACxD,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,aAAa,SAAO,GAAE,CAAC,IAAI;AAC7C,yBAAa,QAAC,CAAC,QAAQ;;AAEzB,oBAAU,SAAS,CAAC,KAAK,EAAE,UAAU;;gBAJlC;AAOL,iBAAK;AACH,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,aAAa,SAAO,GAAE,CAAC,IAAI;AAC7C,yBAAa,QAAC,CAAC,QAAQ;;AAEzB,oBAAU,MAAM;;gBAJb;AAOL,YAAI;AACF,mBAAS,SAAU,eAAQ,EAAE;AAC3B,gBAAI,QAAQ,aAAa,SAAO;AAChC,yBAAa,MAAI,CAAC,MAAM,OAAO,CAAC,QAAC,IAAI;AACnC,wBAAU,CAAC,KAAK,EAAE,IAAI;+CAEX,aAAa,IAAG,WAAW,GAAG,iBAAiB,UAChD,UAAU,iBACH,aAAa;;iBAE3B;AAAG,AACV,mBAAS,IAAyB,aAArB,aAAa,SAAO,IAAG,GAAG,AAAE,CAAD,IAAI,GAAG,CAAC,IAAI;AAClD,yBAAa,QAAC,CAAC,QAAQ;;AAEzB,uBAJO,CAAC;;AAOV,eAAO,GAAG,AAAI,aAAI,CAAC,aAAa,SAAO;AAEvC,kBAAU,GAAG,AAAI,+BAAyB,WAAU;AAClD,qBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,aAAa,SAAO,GAAE,CAAC,IAAI;AAI7C,2BAAa,QAAC,CAAC,OAAO;;sCAEb;AACX,qBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,aAAa,SAAO,GAAE,CAAC,IAAI;AAC7C,2BAAa,QAAC,CAAC,QAAQ;;sCAEd;AACX,qBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,aAAa,SAAO,GAAE,CAAC,IAAI;AAE7C,2BAAa,QAAC,CAAC,QAAQ;;;AAI3B,sBAAI,aAAa,UAAQ,GAAE;AACzB,oBAAU,MAAM;;AAElB,cAAO,WAAU,OAAO,OAAO,CAAC,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;;8BA9FU,OAA2B;MAAI,cAAQ,GAAG,OAAO","file":"stream_zip.ddc.js"}');
  // Exports:
  return {
    src__stream_zip: src__stream_zip
  };
});

//# sourceMappingURL=stream_zip.ddc.js.map
