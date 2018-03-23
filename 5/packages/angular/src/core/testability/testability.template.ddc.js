define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/core/testability/testability', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/zone/ng_zone.template', 'packages/angular/src/core/di.template'], function(dart_sdk, reflector, testability, ng_zone, ng_zone$, di) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__core__testability__testability = testability.src__core__testability__testability;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__zone__ng_zone$46template = ng_zone$.src__core__zone__ng_zone$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const _root = Object.create(null);
  const src__core__testability__testability$46template = Object.create(_root);
  let NgZoneToTestability = () => (NgZoneToTestability = dart.constFn(dart.fnType(src__core__testability__testability.Testability, [src__core__zone__ng_zone.NgZone])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidToTestabilityRegistry = () => (VoidToTestabilityRegistry = dart.constFn(dart.fnType(src__core__testability__testability.TestabilityRegistry, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__core__testability__testability$46template, {
    /*src__core__testability__testability$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  src__core__testability__testability$46template.initReflector = function() {
    if (dart.test(src__core__testability__testability$46template._visited)) {
      return;
    }
    src__core__testability__testability$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__core__testability__testability.Testability), dart.fn(p0 => new src__core__testability__testability.Testability.new(p0), NgZoneToTestability()));
    src__di__reflector.registerDependencies(dart.wrapType(src__core__testability__testability.Testability), const$0 || (const$0 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__core__zone__ng_zone.NgZone)], core.Object))], ListOfObject())));
    src__di__reflector.registerFactory(dart.wrapType(src__core__testability__testability.TestabilityRegistry), dart.fn(() => new src__core__testability__testability.TestabilityRegistry.new(), VoidToTestabilityRegistry()));
    src__core__zone__ng_zone$46template.initReflector();
    src__core__di$46template.initReflector();
  };
  dart.fn(src__core__testability__testability$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/testability/testability.template.ddc", {
    "package:angular/src/core/testability/testability.template.dart": src__core__testability__testability$46template
  }, '{"version":3,"sourceRoot":"","sources":["testability.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAeI,uDAAQ;YAAG;;;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAO,kCAAe,CAAC,8DAAW,EAAE,QAAC,EAAa,IAAK,IAAI,mDAAW,CAAC,EAAE;AACzE,IAAO,uCAAoB,CAAC,8DAAW,EAAE,sCACvC,oCAAW,8CAAM;AAEnB,IAAO,kCAAe,CAAC,sEAAmB,EAAE,cAAM,IAAI,2DAAmB;AACzE,IAAM,iDAAa;AACnB,IAAM,sCAAa;EACrB","file":"testability.template.ddc.js"}');
  // Exports:
  return {
    src__core__testability__testability$46template: src__core__testability__testability$46template
  };
});

//# sourceMappingURL=testability.template.ddc.js.map
