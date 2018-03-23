define(['dart_sdk', 'packages/angular/src/common/pipes/async_pipe.template', 'packages/angular/src/common/pipes/common_pipes.template', 'packages/angular/src/common/pipes/date_pipe.template', 'packages/angular/src/common/pipes/json_pipe.template', 'packages/angular/src/common/pipes/lowercase_pipe.template', 'packages/angular/src/common/pipes/number_pipe.template', 'packages/angular/src/common/pipes/replace_pipe.template', 'packages/angular/src/common/pipes/slice_pipe.template', 'packages/angular/src/common/pipes/uppercase_pipe.template'], function(dart_sdk, async_pipe, common_pipes, date_pipe, json_pipe, lowercase_pipe, number_pipe, replace_pipe, slice_pipe, uppercase_pipe) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__async_pipe$46template = async_pipe.src__common__pipes__async_pipe$46template;
  const src__common__pipes__common_pipes$46template = common_pipes.src__common__pipes__common_pipes$46template;
  const src__common__pipes__date_pipe$46template = date_pipe.src__common__pipes__date_pipe$46template;
  const src__common__pipes__json_pipe$46template = json_pipe.src__common__pipes__json_pipe$46template;
  const src__common__pipes__lowercase_pipe$46template = lowercase_pipe.src__common__pipes__lowercase_pipe$46template;
  const src__common__pipes__number_pipe$46template = number_pipe.src__common__pipes__number_pipe$46template;
  const src__common__pipes__replace_pipe$46template = replace_pipe.src__common__pipes__replace_pipe$46template;
  const src__common__pipes__slice_pipe$46template = slice_pipe.src__common__pipes__slice_pipe$46template;
  const src__common__pipes__uppercase_pipe$46template = uppercase_pipe.src__common__pipes__uppercase_pipe$46template;
  const _root = Object.create(null);
  const src__common__pipes$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__common__pipes$46template, {
    /*src__common__pipes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__common__pipes$46template.initReflector = function() {
    if (dart.test(src__common__pipes$46template._visited)) {
      return;
    }
    src__common__pipes$46template._visited = true;
    src__common__pipes__async_pipe$46template.initReflector();
    src__common__pipes__common_pipes$46template.initReflector();
    src__common__pipes__date_pipe$46template.initReflector();
    src__common__pipes__json_pipe$46template.initReflector();
    src__common__pipes__lowercase_pipe$46template.initReflector();
    src__common__pipes__number_pipe$46template.initReflector();
    src__common__pipes__replace_pipe$46template.initReflector();
    src__common__pipes__slice_pipe$46template.initReflector();
    src__common__pipes__uppercase_pipe$46template.initReflector();
  };
  dart.fn(src__common__pipes$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/common/pipes.template.ddc", {
    "package:angular/src/common/pipes.template.dart": src__common__pipes$46template
  }, '{"version":3,"sourceRoot":"","sources":["pipes.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAiBI,sCAAQ;YAAG;;;;;AAEb,kBAAI,sCAAQ,GAAE;AACZ;;AAEF,6CAAW;AAEX,IAAM,uDAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,2DAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,yDAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,2DAAa;EACrB","file":"pipes.template.ddc.js"}');
  // Exports:
  return {
    src__common__pipes$46template: src__common__pipes$46template
  };
});

//# sourceMappingURL=pipes.template.ddc.js.map
