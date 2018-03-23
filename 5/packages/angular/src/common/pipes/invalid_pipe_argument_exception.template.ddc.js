define(['dart_sdk', 'packages/angular/src/facade/exception_handler.template'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const _root = Object.create(null);
  const src__common__pipes__invalid_pipe_argument_exception$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__pipes__invalid_pipe_argument_exception$46template, {
    /*src__common__pipes__invalid_pipe_argument_exception$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__pipes__invalid_pipe_argument_exception$46template.initReflector = function() {
    if (dart.test(src__common__pipes__invalid_pipe_argument_exception$46template._visited)) {
      return;
    }
    src__common__pipes__invalid_pipe_argument_exception$46template._visited = true;
    src__facade__exceptions$46template.initReflector();
  };
  dart.fn(src__common__pipes__invalid_pipe_argument_exception$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/pipes/invalid_pipe_argument_exception.template.ddc", {
    "package:angular/src/common/pipes/invalid_pipe_argument_exception.template.dart": src__common__pipes__invalid_pipe_argument_exception$46template
  }, '{"version":3,"sourceRoot":"","sources":["invalid_pipe_argument_exception.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,uEAAQ;YAAG;;;;;AAEb,kBAAI,uEAAQ,GAAE;AACZ;;AAEF,8EAAW;AAEX,IAAM,gDAAa;EACrB","file":"invalid_pipe_argument_exception.template.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__invalid_pipe_argument_exception$46template: src__common__pipes__invalid_pipe_argument_exception$46template
  };
});

//# sourceMappingURL=invalid_pipe_argument_exception.template.ddc.js.map
