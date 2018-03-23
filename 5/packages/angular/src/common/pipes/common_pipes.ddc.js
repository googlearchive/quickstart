define(['dart_sdk', 'packages/angular/src/common/pipes/async_pipe', 'packages/angular/src/common/pipes/uppercase_pipe', 'packages/angular/src/common/pipes/lowercase_pipe', 'packages/angular/src/common/pipes/json_pipe', 'packages/angular/src/common/pipes/slice_pipe', 'packages/angular/src/common/pipes/number_pipe', 'packages/angular/src/common/pipes/date_pipe', 'packages/angular/src/common/pipes/replace_pipe'], function(dart_sdk, async_pipe, uppercase_pipe, lowercase_pipe, json_pipe, slice_pipe, number_pipe, date_pipe, replace_pipe) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__async_pipe = async_pipe.src__common__pipes__async_pipe;
  const src__common__pipes__uppercase_pipe = uppercase_pipe.src__common__pipes__uppercase_pipe;
  const src__common__pipes__lowercase_pipe = lowercase_pipe.src__common__pipes__lowercase_pipe;
  const src__common__pipes__json_pipe = json_pipe.src__common__pipes__json_pipe;
  const src__common__pipes__slice_pipe = slice_pipe.src__common__pipes__slice_pipe;
  const src__common__pipes__number_pipe = number_pipe.src__common__pipes__number_pipe;
  const src__common__pipes__date_pipe = date_pipe.src__common__pipes__date_pipe;
  const src__common__pipes__replace_pipe = replace_pipe.src__common__pipes__replace_pipe;
  const _root = Object.create(null);
  const src__common__pipes__common_pipes = Object.create(_root);
  dart.defineLazy(src__common__pipes__common_pipes, {
    /*src__common__pipes__common_pipes.COMMON_PIPES*/get COMMON_PIPES() {
      return dart.constList([dart.wrapType(src__common__pipes__async_pipe.AsyncPipe), dart.wrapType(src__common__pipes__uppercase_pipe.UpperCasePipe), dart.wrapType(src__common__pipes__lowercase_pipe.LowerCasePipe), dart.wrapType(src__common__pipes__json_pipe.JsonPipe), dart.wrapType(src__common__pipes__slice_pipe.SlicePipe), dart.wrapType(src__common__pipes__number_pipe.DecimalPipe), dart.wrapType(src__common__pipes__number_pipe.PercentPipe), dart.wrapType(src__common__pipes__number_pipe.CurrencyPipe), dart.wrapType(src__common__pipes__date_pipe.DatePipe), dart.wrapType(src__common__pipes__replace_pipe.ReplacePipe)], core.Type);
    }
  });
  dart.trackLibraries("packages/angular/src/common/pipes/common_pipes.ddc", {
    "package:angular/src/common/pipes/common_pipes.dart": src__common__pipes__common_pipes
  }, '{"version":3,"sourceRoot":"","sources":["common_pipes.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAgBM,6CAAY;YAAG,iBACnB,uDAAS,EACT,+DAAa,EACb,+DAAa,EACb,qDAAQ,EACR,uDAAS,EACT,0DAAW,EACX,0DAAW,EACX,2DAAY,EACZ,qDAAQ,EACR,2DAAW","file":"common_pipes.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__common_pipes: src__common__pipes__common_pipes
  };
});

//# sourceMappingURL=common_pipes.ddc.js.map
