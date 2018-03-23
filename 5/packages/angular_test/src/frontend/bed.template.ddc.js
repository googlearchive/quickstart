define(['dart_sdk', 'packages/angular/angular.template', 'packages/angular/src/core/linker/app_view.template', 'packages/angular/src/debug/debug_app_view.template', 'packages/angular/src/debug/by.template', 'packages/angular_test/src/frontend/stabilizer.template', 'packages/angular_test/src/bootstrap.template', 'packages/angular_test/src/errors.template', 'packages/angular/experimental.template'], function(dart_sdk, angular, app_view, debug_app_view, by, stabilizer, bootstrap, errors, experimental) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const angular$46template = angular.angular$46template;
  const src__core__linker__view_ref$46template = app_view.src__core__linker__view_ref$46template;
  const src__debug__debug_app_view$46template = debug_app_view.src__debug__debug_app_view$46template;
  const src__debug__debug_node$46template = by.src__debug__debug_node$46template;
  const src__frontend__stabilizer$46template = stabilizer.src__frontend__stabilizer$46template;
  const src__bootstrap$46template = bootstrap.src__bootstrap$46template;
  const src__errors$46template = errors.src__errors$46template;
  const experimental$46template = experimental.experimental$46template;
  const _root = Object.create(null);
  const src__frontend__fixture$46template = Object.create(_root);
  const src__frontend__bed$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__frontend__fixture$46template, {
    /*src__frontend__fixture$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__frontend__fixture$46template.initReflector = function() {
    if (dart.test(src__frontend__fixture$46template._visited)) {
      return;
    }
    src__frontend__fixture$46template._visited = true;
    src__frontend__bed$46template.initReflector();
    angular$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
    src__debug__debug_app_view$46template.initReflector();
    src__debug__debug_node$46template.initReflector();
    src__frontend__stabilizer$46template.initReflector();
  };
  dart.fn(src__frontend__fixture$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__frontend__bed$46template, {
    /*src__frontend__bed$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__frontend__bed$46template.initReflector = function() {
    if (dart.test(src__frontend__bed$46template._visited)) {
      return;
    }
    src__frontend__bed$46template._visited = true;
    src__bootstrap$46template.initReflector();
    src__errors$46template.initReflector();
    src__frontend__fixture$46template.initReflector();
    angular$46template.initReflector();
    experimental$46template.initReflector();
    src__frontend__stabilizer$46template.initReflector();
  };
  dart.fn(src__frontend__bed$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_test/src/frontend/bed.template.ddc", {
    "package:angular_test/src/frontend/fixture.template.dart": src__frontend__fixture$46template,
    "package:angular_test/src/frontend/bed.template.dart": src__frontend__bed$46template
  }, '{"version":3,"sourceRoot":"","sources":["fixture.template.dart","bed.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAsBI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,2CAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,kDAAa;EACrB;;;MCZI,sCAAQ;YAAG;;;;;AAEb,kBAAI,sCAAQ,GAAE;AACZ;;AAEF,6CAAW;AAEX,IAAM,uCAAa;AACnB,IAAM,oCAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,gCAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,kDAAa;EACrB","file":"bed.template.ddc.js"}');
  // Exports:
  return {
    src__frontend__fixture$46template: src__frontend__fixture$46template,
    src__frontend__bed$46template: src__frontend__bed$46template
  };
});

//# sourceMappingURL=bed.template.ddc.js.map
