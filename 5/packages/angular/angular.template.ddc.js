define(['dart_sdk', 'packages/angular/core.template', 'packages/angular/src/common/common_directives.template', 'packages/angular/src/common/directives.template', 'packages/angular/src/common/pipes.template', 'packages/angular/src/core/application_ref.template', 'packages/angular/src/core/linker.template', 'packages/angular/src/core/testability/testability.template', 'packages/angular/src/platform/bootstrap.template', 'packages/angular/src/platform/dom/events/event_manager.template'], function(dart_sdk, core, common_directives, directives, pipes, application_ref, linker, testability, bootstrap, event_manager) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$46template = core.core$46template;
  const src__common__common_directives$46template = common_directives.src__common__common_directives$46template;
  const src__common__directives$46template = directives.src__common__directives$46template;
  const src__common__pipes$46template = pipes.src__common__pipes$46template;
  const src__core__application_ref$46template = application_ref.src__core__application_ref$46template;
  const src__core__linker$46template = linker.src__core__linker$46template;
  const src__core__testability__testability$46template = testability.src__core__testability__testability$46template;
  const src__platform__bootstrap$46template = bootstrap.src__platform__bootstrap$46template;
  const src__platform__dom__events__event_manager$46template = event_manager.src__platform__dom__events__event_manager$46template;
  const _root = Object.create(null);
  const angular$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(angular$46template, {
    /*angular$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  angular$46template.initReflector = function() {
    if (dart.test(angular$46template._visited)) {
      return;
    }
    angular$46template._visited = true;
    core$46template.initReflector();
    src__common__common_directives$46template.initReflector();
    src__common__directives$46template.initReflector();
    src__common__pipes$46template.initReflector();
    src__core__application_ref$46template.initReflector();
    src__core__linker$46template.initReflector();
    src__core__testability__testability$46template.initReflector();
    src__platform__bootstrap$46template.initReflector();
    src__platform__dom__events__event_manager$46template.initReflector();
  };
  dart.fn(angular$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/angular.template.ddc", {
    "package:angular/angular.template.dart": angular$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAiBI,2BAAQ;YAAG;;;;;AAEb,kBAAI,2BAAQ,GAAE;AACZ;;AAEF,kCAAW;AAEX,IAAM,6BAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,2CAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,kEAAa;EACrB","file":"angular.template.ddc.js"}');
  // Exports:
  return {
    angular$46template: angular$46template
  };
});

//# sourceMappingURL=angular.template.ddc.js.map
