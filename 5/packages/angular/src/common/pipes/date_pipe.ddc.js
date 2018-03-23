define(['dart_sdk', 'packages/angular/src/common/pipes/invalid_pipe_argument_exception', 'packages/intl/intl', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, invalid_pipe_argument_exception, intl, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__invalid_pipe_argument_exception = invalid_pipe_argument_exception.src__common__pipes__invalid_pipe_argument_exception;
  const intl$ = intl.intl;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__common__pipes__date_pipe = Object.create(_root);
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $replaceAll = dartx.replaceAll;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let DateTimeAndStringAndStringToString = () => (DateTimeAndStringAndStringToString = dart.constFn(dart.fnType(core.String, [core.DateTime, core.String, core.String])))();
  src__common__pipes__date_pipe.DatePipe = class DatePipe extends core.Object {
    transform(value, pattern) {
      if (pattern === void 0) pattern = 'mediumDate';
      if (value == null) return null;
      if (!dart.test(this.supports(value))) {
        dart.throw(new src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(src__common__pipes__date_pipe.DatePipe), value));
      }
      if (typeof value == 'number') {
        value = new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(value));
      }
      if (dart.test(src__common__pipes__date_pipe.DatePipe._ALIASES[$containsKey](pattern))) {
        pattern = src__common__pipes__date_pipe.DatePipe._ALIASES[$_get](pattern);
      }
      return src__common__pipes__date_pipe._formatDate(core.DateTime._check(value), intl$.Intl.defaultLocale, pattern);
    }
    supports(obj) {
      return core.DateTime.is(obj) || typeof obj == 'number';
    }
  };
  (src__common__pipes__date_pipe.DatePipe.new = function() {
  }).prototype = src__common__pipes__date_pipe.DatePipe.prototype;
  dart.addTypeTests(src__common__pipes__date_pipe.DatePipe);
  src__common__pipes__date_pipe.DatePipe[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__date_pipe.DatePipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__date_pipe.DatePipe.__proto__),
    transform: dart.fnType(core.String, [dart.dynamic], [core.String]),
    supports: dart.fnType(core.bool, [dart.dynamic])
  }));
  dart.defineLazy(src__common__pipes__date_pipe.DatePipe, {
    /*src__common__pipes__date_pipe.DatePipe._ALIASES*/get _ALIASES() {
      return new (IdentityMapOfString$String()).from(['medium', 'yMMMdjms', 'short', 'yMdjm', 'fullDate', 'yMMMMEEEEd', 'longDate', 'yMMMMd', 'mediumDate', 'yMMMd', 'shortDate', 'yMd', 'mediumTime', 'jms', 'shortTime', 'jm']);
    }
  });
  dart.defineLazy(src__common__pipes__date_pipe, {
    /*src__common__pipes__date_pipe._multiPartRegExp*/get _multiPartRegExp() {
      return core.RegExp.new('^([yMdE]+)([Hjms]+)$');
    }
  });
  src__common__pipes__date_pipe._normalizeLocale = function(locale) {
    return locale == null ? null : locale[$replaceAll]('-', '_');
  };
  dart.fn(src__common__pipes__date_pipe._normalizeLocale, StringToString());
  src__common__pipes__date_pipe._formatDate = function(date, locale, pattern) {
    locale = src__common__pipes__date_pipe._normalizeLocale(locale);
    let formatter = new intl$.DateFormat.new(null, locale);
    let matches = src__common__pipes__date_pipe._multiPartRegExp.firstMatch(pattern);
    if (matches != null) {
      formatter.addPattern(matches._get(1));
      formatter.addPattern(matches._get(2), ', ');
    } else {
      formatter.addPattern(pattern);
    }
    return formatter.format(date);
  };
  dart.fn(src__common__pipes__date_pipe._formatDate, DateTimeAndStringAndStringToString());
  dart.trackLibraries("packages/angular/src/common/pipes/date_pipe.ddc", {
    "package:angular/src/common/pipes/date_pipe.dart": src__common__pipes__date_pipe
  }, '{"version":3,"sourceRoot":"","sources":["date_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;cAoFmB,KAAa,EAAG,OAA6B;8BAAtB,UAAU;AAChD,UAAI,KAAK,IAAI,MAAM,MAAO;AAC1B,qBAAK,aAAa,CAAC,KAAK,IAAG;AACzB,mBAAM,IAAI,oFAA4B,CAAC,qDAAQ,EAAE,KAAK;;AAExD,iBAAI,KAAK,cAAS;AAChB,aAAK,GAAG,IAAI,wCAAmC,iBAAC,KAAK;;AAEvD,oBAAI,sCAAQ,SAAS,cAAY,CAAC,OAAO,IAAG;AAC1C,eAAO,GAAG,sCAAQ,SAAS,QAAC,OAAO;;AAErC,YAAO,0CAAW,sBAAC,KAAK,GAAE,UAAI,cAAc,EAAE,OAAO;IACvD;aAEc,GAAW;AACvB,YAAuB,kBAAhB,GAAG,YAAgB,GAAG;IAC/B;;;EAEgB;;;;;;;;;MA5BiB,+CAAQ;YAAG,0CAC1C,UAAU,YACV,SAAS,SACT,YAAY,cACZ,YAAY,UACZ,cAAc,SACd,aAAa,OACb,cAAc,OACd,aAAa;;;;MAuBJ,8CAAgB;YAAG,AAAI,gBAAM,CAAC;;;4DACnB,MAAa;UAAK,OAAM,kBAAN,MAAM,aAAY,CAAC,KAAK;EAAI;;uDACnD,IAAa,EAAE,MAAa,EAAE,OAAc;AAC7D,UAAM,GAAG,8CAAgB,CAAC,MAAM;AAChC,QAAI,YAAY,IAAI,oBAAU,CAAC,MAAM,MAAM;AAC3C,QAAI,UAAU,8CAAgB,WAAW,CAAC,OAAO;AACjD,QAAI,OAAO,IAAI,MAAM;AAEnB,eAAS,WAAW,CAAC,OAAO,MAAC;AAC7B,eAAS,WAAW,CAAC,OAAO,MAAC,IAAI;WAC5B;AACL,eAAS,WAAW,CAAC,OAAO;;AAE9B,UAAO,UAAS,OAAO,CAAC,IAAI;EAC9B","file":"date_pipe.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__date_pipe: src__common__pipes__date_pipe
  };
});

//# sourceMappingURL=date_pipe.ddc.js.map
