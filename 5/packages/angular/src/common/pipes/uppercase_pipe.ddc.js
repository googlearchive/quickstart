define(['dart_sdk', 'packages/angular/src/common/pipes/invalid_pipe_argument_exception', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, invalid_pipe_argument_exception, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__invalid_pipe_argument_exception = invalid_pipe_argument_exception.src__common__pipes__invalid_pipe_argument_exception;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__common__pipes__uppercase_pipe = Object.create(_root);
  const $toUpperCase = dartx.toUpperCase;
  src__common__pipes__uppercase_pipe.UpperCasePipe = class UpperCasePipe extends core.Object {
    transform(value) {
      if (value == null) return value;
      if (!(typeof value == 'string')) {
        dart.throw(new src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(src__common__pipes__uppercase_pipe.UpperCasePipe), value));
      }
      return value[$toUpperCase]();
    }
  };
  (src__common__pipes__uppercase_pipe.UpperCasePipe.new = function() {
  }).prototype = src__common__pipes__uppercase_pipe.UpperCasePipe.prototype;
  dart.addTypeTests(src__common__pipes__uppercase_pipe.UpperCasePipe);
  src__common__pipes__uppercase_pipe.UpperCasePipe[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__uppercase_pipe.UpperCasePipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__uppercase_pipe.UpperCasePipe.__proto__),
    transform: dart.fnType(core.String, [core.String])
  }));
  dart.trackLibraries("packages/angular/src/common/pipes/uppercase_pipe.ddc", {
    "package:angular/src/common/pipes/uppercase_pipe.dart": src__common__pipes__uppercase_pipe
  }, '{"version":3,"sourceRoot":"","sources":["uppercase_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;cAOmB,KAAY;AAC3B,UAAI,KAAK,IAAI,MAAM,MAAO,MAAK;AAC/B,mBAAI,KAAK,eAAa;AACpB,mBAAM,IAAI,oFAA4B,CAAC,+DAAa,EAAE,KAAK;;AAE7D,YAAO,MAAK,cAAY;IAC1B;;;EAEqB","file":"uppercase_pipe.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__uppercase_pipe: src__common__pipes__uppercase_pipe
  };
});

//# sourceMappingURL=uppercase_pipe.ddc.js.map
