define(['dart_sdk', 'packages/angular/src/platform/browser/tools/tools.template', 'packages/angular/core.template', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/application_ref.template', 'packages/angular/src/core/linker.template', 'packages/angular/src/core/testability/testability.template', 'packages/angular/src/di/injector/empty.template', 'packages/angular/src/platform/browser_common.template'], function(dart_sdk, tools, core, modules, application_ref, linker, testability, empty, browser_common) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__platform__browser__tools__tools$46template = tools.src__platform__browser__tools__tools$46template;
  const core$46template = core.core$46template;
  const src__bootstrap__modules$46template = modules.src__bootstrap__modules$46template;
  const src__core__application_ref$46template = application_ref.src__core__application_ref$46template;
  const src__core__linker$46template = linker.src__core__linker$46template;
  const src__core__testability__testability$46template = testability.src__core__testability__testability$46template;
  const src__di__injector__runtime$46template = empty.src__di__injector__runtime$46template;
  const src__platform__browser_common$46template = browser_common.src__platform__browser_common$46template;
  const _root = Object.create(null);
  const src__platform__bootstrap$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__bootstrap$46template, {
    /*src__platform__bootstrap$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__bootstrap$46template.initReflector = function() {
    if (dart.test(src__platform__bootstrap$46template._visited)) {
      return;
    }
    src__platform__bootstrap$46template._visited = true;
    src__platform__browser__tools__tools$46template.initReflector();
    core$46template.initReflector();
    src__bootstrap__modules$46template.initReflector();
    src__core__application_ref$46template.initReflector();
    src__core__linker$46template.initReflector();
    src__core__testability__testability$46template.initReflector();
    src__di__injector__runtime$46template.initReflector();
    src__platform__browser_common$46template.initReflector();
  };
  dart.fn(src__platform__bootstrap$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/bootstrap.template.ddc", {
    "package:angular/src/platform/bootstrap.template.dart": src__platform__bootstrap$46template
  }, '{"version":3,"sourceRoot":"","sources":["bootstrap.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAyBI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,6DAAa;AACnB,IAAM,6BAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,sDAAa;EACrB","file":"bootstrap.template.ddc.js"}');
  // Exports:
  return {
    src__platform__bootstrap$46template: src__platform__bootstrap$46template
  };
});

//# sourceMappingURL=bootstrap.template.ddc.js.map
