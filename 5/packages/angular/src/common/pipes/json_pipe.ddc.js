define(['dart_sdk', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__common__pipes__json_pipe = Object.create(_root);
  src__common__pipes__json_pipe.JsonPipe = class JsonPipe extends core.Object {
    transform(value) {
      return src__common__pipes__json_pipe.JsonPipe._json.convert(value);
    }
  };
  (src__common__pipes__json_pipe.JsonPipe.new = function() {
  }).prototype = src__common__pipes__json_pipe.JsonPipe.prototype;
  dart.addTypeTests(src__common__pipes__json_pipe.JsonPipe);
  src__common__pipes__json_pipe.JsonPipe[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__json_pipe.JsonPipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__json_pipe.JsonPipe.__proto__),
    transform: dart.fnType(core.String, [dart.dynamic])
  }));
  dart.defineLazy(src__common__pipes__json_pipe.JsonPipe, {
    /*src__common__pipes__json_pipe.JsonPipe._json*/get _json() {
      return dart.const(new convert.JsonEncoder.withIndent('  '));
    }
  });
  dart.trackLibraries("packages/angular/src/common/pipes/json_pipe.ddc", {
    "package:angular/src/common/pipes/json_pipe.dart": src__common__pipes__json_pipe
  }, '{"version":3,"sourceRoot":"","sources":["json_pipe.dart"],"names":[],"mappings":";;;;;;;;;;cAWmB,KAAK;YAAK,6CAAK,QAAQ,CAAC,KAAK;IAAC;;;EAF/B;;;;;;;;MAFS,4CAAK;YAAG,gBAAM,8BAAsB,CAAC","file":"json_pipe.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__json_pipe: src__common__pipes__json_pipe
  };
});

//# sourceMappingURL=json_pipe.ddc.js.map
