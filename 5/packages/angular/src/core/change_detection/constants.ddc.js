define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__change_detection__constants = Object.create(_root);
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  src__core__change_detection__constants.ChangeDetectorState = class ChangeDetectorState extends core.Object {};
  (src__core__change_detection__constants.ChangeDetectorState.new = function() {
  }).prototype = src__core__change_detection__constants.ChangeDetectorState.prototype;
  dart.addTypeTests(src__core__change_detection__constants.ChangeDetectorState);
  dart.defineLazy(src__core__change_detection__constants.ChangeDetectorState, {
    /*src__core__change_detection__constants.ChangeDetectorState.NeverChecked*/get NeverChecked() {
      return 0;
    },
    /*src__core__change_detection__constants.ChangeDetectorState.CheckedBefore*/get CheckedBefore() {
      return 1;
    },
    /*src__core__change_detection__constants.ChangeDetectorState.Errored*/get Errored() {
      return 2;
    }
  });
  src__core__change_detection__constants.ChangeDetectionStrategy = class ChangeDetectionStrategy extends core.Object {};
  (src__core__change_detection__constants.ChangeDetectionStrategy.new = function() {
  }).prototype = src__core__change_detection__constants.ChangeDetectionStrategy.prototype;
  dart.addTypeTests(src__core__change_detection__constants.ChangeDetectionStrategy);
  dart.defineLazy(src__core__change_detection__constants.ChangeDetectionStrategy, {
    /*src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce*/get CheckOnce() {
      return 1;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.Checked*/get Checked() {
      return 2;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways*/get CheckAlways() {
      return 3;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.Detached*/get Detached() {
      return 4;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.OnPush*/get OnPush() {
      return 5;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.Stateful*/get Stateful() {
      return 6;
    },
    /*src__core__change_detection__constants.ChangeDetectionStrategy.Default*/get Default() {
      return 0;
    }
  });
  src__core__change_detection__constants.isDefaultChangeDetectionStrategy = function(changeDetectionStrategy) {
    return changeDetectionStrategy == null || changeDetectionStrategy === src__core__change_detection__constants.ChangeDetectionStrategy.Default;
  };
  dart.fn(src__core__change_detection__constants.isDefaultChangeDetectionStrategy, intTobool());
  dart.trackLibraries("packages/angular/src/core/change_detection/constants.ddc", {
    "package:angular/src/core/change_detection/constants.dart": src__core__change_detection__constants
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart"],"names":[],"mappings":";;;;;;;;;;EAeA;;;MAXmB,uEAAY;YAAG;;MAIf,wEAAa;YAAG;;MAMhB,kEAAO;YAAG;;;;;EAiC7B;;;MAvBmB,wEAAS;YAAG;;MAIZ,sEAAO;YAAG;;MAIV,0EAAW;YAAG;;MAId,uEAAQ;YAAG;;MAGX,qEAAM;YAAG;;MAIT,uEAAQ;YAAG;;MAGX,sEAAO;YAAG;;;qFAGS,uBAA2B;AAC/D,UAAO,AAAgC,wBAAT,IAAI,QAC9B,uBAAuB,KAAI,8DAAuB,QAAQ;EAChE","file":"constants.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__constants: src__core__change_detection__constants
  };
});

//# sourceMappingURL=constants.ddc.js.map
