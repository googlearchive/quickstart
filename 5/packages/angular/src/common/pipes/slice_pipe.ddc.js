define(['dart_sdk', 'packages/angular/src/common/pipes/invalid_pipe_argument_exception', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, invalid_pipe_argument_exception, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__invalid_pipe_argument_exception = invalid_pipe_argument_exception.src__common__pipes__invalid_pipe_argument_exception;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__common__pipes__slice_pipe = Object.create(_root);
  const $substring = dartx.substring;
  const $sublist = dartx.sublist;
  src__common__pipes__slice_pipe.SlicePipe = class SlicePipe extends core.Object {
    transform(value, start, end) {
      if (end === void 0) end = null;
      if (!dart.test(this.supports(value))) {
        dart.throw(new src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(src__common__pipes__slice_pipe.SlicePipe), value));
      }
      if (value == null) return value;
      let length = core.int.as(dart.dload(value, 'length'));
      start = dart.notNull(start) < 0 ? math.max(core.num, 0, dart.notNull(length) + dart.notNull(start)) : math.min(core.num, start, length);
      if (end != null) {
        end = dart.notNull(end) < 0 ? math.max(core.num, 0, dart.notNull(length) + dart.notNull(end)) : math.min(core.num, end, length);
        if (dart.notNull(end) < dart.notNull(start)) return typeof value == 'string' ? '' : [];
      }
      if (typeof value == 'string') {
        return value[$substring](dart.asInt(start), dart.asInt(end));
      } else if (core.List.is(value)) {
        return value[$sublist](dart.asInt(start), dart.asInt(end));
      } else {
        return null;
      }
    }
    supports(obj) {
      return typeof obj == 'string' || core.List.is(obj);
    }
  };
  (src__common__pipes__slice_pipe.SlicePipe.new = function() {
  }).prototype = src__common__pipes__slice_pipe.SlicePipe.prototype;
  dart.addTypeTests(src__common__pipes__slice_pipe.SlicePipe);
  src__common__pipes__slice_pipe.SlicePipe[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__slice_pipe.SlicePipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__slice_pipe.SlicePipe.__proto__),
    transform: dart.fnType(dart.dynamic, [dart.dynamic, core.num], [core.num]),
    supports: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.trackLibraries("packages/angular/src/common/pipes/slice_pipe.ddc", {
    "package:angular/src/common/pipes/slice_pipe.dart": src__common__pipes__slice_pipe
  }, '{"version":3,"sourceRoot":"","sources":["slice_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;;;cA2DoB,KAAa,EAAE,KAAS,EAAG,GAAO;0BAAH;AAC/C,qBAAK,aAAa,CAAC,KAAK,IAAG;AACzB,mBAAM,IAAI,oFAA4B,CAAC,uDAAS,EAAE,KAAK;;AAEzD,UAAI,KAAK,IAAI,MAAM,MAAO,MAAK;AAI/B,UAAI,gCAAS,KAAK;AAClB,WAAK,GAAG,AAAM,aAAN,KAAK,IAAG,IAAI,AAAK,QAAG,WAAC,GAAU,aAAP,MAAM,iBAAG,KAAK,KAAI,AAAK,QAAG,WAAC,KAAK,EAAE,MAAM;AACxE,UAAI,GAAG,IAAI,MAAM;AACf,WAAG,GAAG,AAAI,aAAJ,GAAG,IAAG,IAAI,AAAK,QAAG,WAAC,GAAU,aAAP,MAAM,iBAAG,GAAG,KAAI,AAAK,QAAG,WAAC,GAAG,EAAE,MAAM;AAChE,YAAQ,aAAJ,GAAG,iBAAG,KAAK,GAAE,cAAO,KAAK,eAAa,KAAK;;AAEjD,iBAAI,KAAK,cAAY;AACnB,cAAO,MAAK,YAAU,YAAC,KAAK,cAAE,GAAG;YAC5B,kBAAI,KAAK,GAAU;AACxB,cAAO,MAAK,UAAQ,YAAC,KAAK,cAAE,GAAG;aAC1B;AACL,cAAO;;IAEX;aAEc,GAAW;YAAmB,QAAd,GAAG,6BAAc,GAAG;IAAQ;;;EAC5D","file":"slice_pipe.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__slice_pipe: src__common__pipes__slice_pipe
  };
});

//# sourceMappingURL=slice_pipe.ddc.js.map
