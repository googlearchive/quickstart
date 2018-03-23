define(['dart_sdk', 'packages/angular/src/common/pipes/invalid_pipe_argument_exception.template', 'packages/angular/di.template', 'packages/angular/src/facade/exception_handler.template'], function(dart_sdk, invalid_pipe_argument_exception, di, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__invalid_pipe_argument_exception$46template = invalid_pipe_argument_exception.src__common__pipes__invalid_pipe_argument_exception$46template;
  const di$46template = di.di$46template;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const _root = Object.create(null);
  const src__common__pipes__number_pipe$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__pipes__number_pipe$46template, {
    /*src__common__pipes__number_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__pipes__number_pipe$46template.initReflector = function() {
    if (dart.test(src__common__pipes__number_pipe$46template._visited)) {
      return;
    }
    src__common__pipes__number_pipe$46template._visited = true;
    src__common__pipes__invalid_pipe_argument_exception$46template.initReflector();
    di$46template.initReflector();
    src__facade__exceptions$46template.initReflector();
  };
  dart.fn(src__common__pipes__number_pipe$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/pipes/number_pipe.template.ddc", {
    "package:angular/src/common/pipes/number_pipe.template.dart": src__common__pipes__number_pipe$46template
  }, '{"version":3,"sourceRoot":"","sources":["number_pipe.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAeI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,4EAAa;AACnB,IAAM,2BAAa;AACnB,IAAM,gDAAa;EACrB","file":"number_pipe.template.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__number_pipe$46template: src__common__pipes__number_pipe$46template
  };
});

//# sourceMappingURL=number_pipe.template.ddc.js.map
