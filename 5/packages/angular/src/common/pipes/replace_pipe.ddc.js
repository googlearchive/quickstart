define(['dart_sdk', 'packages/angular/src/common/pipes/invalid_pipe_argument_exception', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, invalid_pipe_argument_exception, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__invalid_pipe_argument_exception = invalid_pipe_argument_exception.src__common__pipes__invalid_pipe_argument_exception;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__common__pipes__replace_pipe = Object.create(_root);
  const $toString = dartx.toString;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $replaceAll = dartx.replaceAll;
  const $replaceFirst = dartx.replaceFirst;
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  const _supportedInput = Symbol('_supportedInput');
  const _supportedPattern = Symbol('_supportedPattern');
  const _supportedReplacement = Symbol('_supportedReplacement');
  src__common__pipes__replace_pipe.ReplacePipe = class ReplacePipe extends core.Object {
    transform(value, pattern, replacement) {
      if (value == null) {
        return value;
      }
      if (!dart.test(this[_supportedInput](value))) {
        dart.throw(new src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(src__common__pipes__replace_pipe.ReplacePipe), value));
      }
      let input = dart.toString(value);
      if (!dart.test(this[_supportedPattern](pattern))) {
        dart.throw(new src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(src__common__pipes__replace_pipe.ReplacePipe), pattern));
      }
      if (!dart.test(this[_supportedReplacement](replacement))) {
        dart.throw(new src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(src__common__pipes__replace_pipe.ReplacePipe), replacement));
      }
      if (MatchToString().is(replacement)) {
        let rgxPattern = typeof pattern == 'string' ? core.RegExp.new(pattern) : core.RegExp.as(pattern);
        return input[$replaceAllMapped](rgxPattern, replacement);
      }
      if (core.RegExp.is(pattern)) {
        return input[$replaceAll](pattern, core.String.as(replacement));
      }
      return input[$replaceFirst](core.String.as(pattern), core.String.as(replacement));
    }
    [_supportedInput](input) {
      return typeof input == 'string' || typeof input == 'number';
    }
    [_supportedPattern](pattern) {
      return typeof pattern == 'string' || core.RegExp.is(pattern);
    }
    [_supportedReplacement](replacement) {
      return typeof replacement == 'string' || core.Function.is(replacement);
    }
  };
  (src__common__pipes__replace_pipe.ReplacePipe.new = function() {
  }).prototype = src__common__pipes__replace_pipe.ReplacePipe.prototype;
  dart.addTypeTests(src__common__pipes__replace_pipe.ReplacePipe);
  src__common__pipes__replace_pipe.ReplacePipe[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__replace_pipe.ReplacePipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__replace_pipe.ReplacePipe.__proto__),
    transform: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic]),
    [_supportedInput]: dart.fnType(core.bool, [dart.dynamic]),
    [_supportedPattern]: dart.fnType(core.bool, [dart.dynamic]),
    [_supportedReplacement]: dart.fnType(core.bool, [dart.dynamic])
  }));
  src__common__pipes__replace_pipe._Matcher = dart.typedef('_Matcher', () => dart.fnType(core.String, [core.Match]));
  dart.trackLibraries("packages/angular/src/common/pipes/replace_pipe.ddc", {
    "package:angular/src/common/pipes/replace_pipe.dart": src__common__pipes__replace_pipe
  }, '{"version":3,"sourceRoot":"","sources":["replace_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;cAgCoB,KAAa,EAAE,OAAqC,EAClE,WAA2C;AAC7C,UAAI,KAAK,IAAI,MAAM;AACjB,cAAO,MAAK;;AAEd,qBAAK,qBAAoB,CAAC,KAAK,IAAG;AAChC,mBAAM,IAAI,oFAA4B,CAAC,2DAAW,EAAE,KAAK;;AAE3D,UAAI,sBAAQ,KAAK;AACjB,qBAAK,uBAAsB,CAAC,OAAO,IAAG;AACpC,mBAAM,IAAI,oFAA4B,CAAC,2DAAW,EAAE,OAAO;;AAE7D,qBAAK,2BAA0B,CAAC,WAAW,IAAG;AAC5C,mBAAM,IAAI,oFAA4B,CAAC,2DAAW,EAAE,WAAW;;AAGjE,6BAAI,WAAW,GAAc;AAC3B,YAAI,oBACA,OAAO,eAAa,AAAI,eAAM,CAAC,OAAO,mBAAK,OAAO;AACtD,cAAO,MAAK,mBAAiB,CAAC,UAAU,EAAE,WAAW;;AAEvD,yBAAI,OAAO,GAAY;AAErB,cAAO,MAAK,aAAW,CAAC,OAAO,iBAAG,WAAW;;AAE/C,YAAO,MAAK,eAAa,gBAAE,OAAO,kBAAc,WAAW;IAC7D;sBAEqB,KAAa;YAAqB,QAAhB,KAAK,uBAAc,KAAK;IAAO;wBAE/C,OAAe;AACpC,YAAyB,QAAlB,OAAO,+BAAc,OAAO;IACrC;4BAE2B,WAAmB;AAC5C,YAA6B,QAAtB,WAAW,iCAAc,WAAW;IAC7C;;;EAtCmB","file":"replace_pipe.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__replace_pipe: src__common__pipes__replace_pipe
  };
});

//# sourceMappingURL=replace_pipe.ddc.js.map
