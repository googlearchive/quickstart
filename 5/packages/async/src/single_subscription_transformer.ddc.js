define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__single_subscription_transformer = Object.create(_root);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  const _is_SingleSubscriptionTransformer_default = Symbol('_is_SingleSubscriptionTransformer_default');
  src__single_subscription_transformer.SingleSubscriptionTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let SToNull = () => (SToNull = dart.constFn(dart.fnType(core.Null, [S])))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class SingleSubscriptionTransformer extends async.StreamTransformerBase$(S, T) {
      bind(stream) {
        StreamOfS()._check(stream);
        let subscription = null;
        let controller = StreamControllerOfT().new({sync: true, onCancel: dart.fn(() => dart.dsend(subscription, 'cancel'), VoidTodynamic())});
        subscription = stream.listen(dart.fn(value => {
          try {
            controller.add(T.as(value));
          } catch (error) {
            if (core.CastError.is(error)) {
              let stackTrace = dart.stackTrace(error);
              controller.addError(error, stackTrace);
            } else
              throw error;
          }
        }, SToNull()), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
        return controller.stream;
      }
    }
    (SingleSubscriptionTransformer.new = function() {
      SingleSubscriptionTransformer.__proto__.new.call(this);
    }).prototype = SingleSubscriptionTransformer.prototype;
    dart.addTypeTests(SingleSubscriptionTransformer);
    SingleSubscriptionTransformer.prototype[_is_SingleSubscriptionTransformer_default] = true;
    dart.setMethodSignature(SingleSubscriptionTransformer, () => ({
      __proto__: dart.getMethods(SingleSubscriptionTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    return SingleSubscriptionTransformer;
  });
  src__single_subscription_transformer.SingleSubscriptionTransformer = src__single_subscription_transformer.SingleSubscriptionTransformer$();
  dart.addTypeTests(src__single_subscription_transformer.SingleSubscriptionTransformer, _is_SingleSubscriptionTransformer_default);
  dart.trackLibraries("packages/async/src/single_subscription_transformer.ddc", {
    "package:async/src/single_subscription_transformer.dart": src__single_subscription_transformer
  }, '{"version":3,"sourceRoot":"","sources":["single_subscription_transformer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;WAkBiB,MAAgB;2BAAN;AACvB,YAAI;AACJ,YAAI,aAAa,AAAI,yBAAmB,QAC9B,gBAAgB,yBAAM,YAAY;AAC5C,oBAAY,GAAG,MAAM,OAAO,CAAC,QAAC,KAAK;AAGjC,cAAI;AACF,sBAAU,IAAI,MAAC,KAAK;mBACA;AAApB;kBAA2B;AAAY,AACvC,wBAAU,SAAS,CAAC,KAAK,EAAE,UAAU;;;;2CAE7B,UAAU,iCAAmB,UAAU;AACnD,cAAO,WAAU,OAAO;MAC1B;;;;IAhBqC","file":"single_subscription_transformer.ddc.js"}');
  // Exports:
  return {
    src__single_subscription_transformer: src__single_subscription_transformer
  };
});

//# sourceMappingURL=single_subscription_transformer.ddc.js.map
