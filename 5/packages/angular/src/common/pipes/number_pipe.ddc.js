define(['dart_sdk', 'packages/angular/src/common/pipes/invalid_pipe_argument_exception', 'packages/angular/src/facade/exception_handler', 'packages/intl/intl', 'packages/angular/src/core/change_detection/pipe_transform'], function(dart_sdk, invalid_pipe_argument_exception, exception_handler, intl, pipe_transform) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__pipes__invalid_pipe_argument_exception = invalid_pipe_argument_exception.src__common__pipes__invalid_pipe_argument_exception;
  const src__facade__exceptions = exception_handler.src__facade__exceptions;
  const intl$ = intl.intl;
  const src__core__change_detection__pipe_transform = pipe_transform.src__core__change_detection__pipe_transform;
  const _root = Object.create(null);
  const src__common__pipes__number_pipe = Object.create(_root);
  const $replaceAll = dartx.replaceAll;
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let numAndStringAnd_NumberFormatStyle__ToString = () => (numAndStringAnd_NumberFormatStyle__ToString = dart.constFn(dart.fnType(core.String, [core.num, core.String, src__common__pipes__number_pipe._NumberFormatStyle], {minimumIntegerDigits: core.int, minimumFractionDigits: core.int, maximumFractionDigits: core.int, currency: core.String, currencyAsSymbol: core.bool})))();
  dart.defineLazy(src__common__pipes__number_pipe, {
    /*src__common__pipes__number_pipe._re*/get _re() {
      return core.RegExp.new("^(\\d+)?\\.((\\d+)(\\-(\\d+))?)?$");
    }
  });
  src__common__pipes__number_pipe._NumberPipe = class _NumberPipe extends core.Object {
    static _format(value, style, digits, currency, currencyAsSymbol) {
      if (currency === void 0) currency = null;
      if (currencyAsSymbol === void 0) currencyAsSymbol = false;
      if (value == null) return null;
      if (!(typeof value == 'number')) {
        dart.throw(new src__common__pipes__invalid_pipe_argument_exception.InvalidPipeArgumentException.new(dart.wrapType(src__common__pipes__number_pipe._NumberPipe), value));
      }
      let minInt = 1, minFraction = 0, maxFraction = 3;
      if (digits != null) {
        let parts = src__common__pipes__number_pipe._re.firstMatch(digits);
        if (parts == null) {
          dart.throw(new src__facade__exceptions.BaseException.new(dart.str`${digits} is not a valid digit info for number pipes`));
        }
        if (parts._get(1) != null) {
          minInt = core.int.parse(parts._get(1));
        }
        if (parts._get(3) != null) {
          minFraction = core.int.parse(parts._get(3));
        }
        if (parts._get(5) != null) {
          maxFraction = core.int.parse(parts._get(5));
        }
      }
      return src__common__pipes__number_pipe._formatNumber(value, intl$.Intl.defaultLocale, style, {minimumIntegerDigits: minInt, minimumFractionDigits: minFraction, maximumFractionDigits: maxFraction, currency: currency, currencyAsSymbol: currencyAsSymbol});
    }
  };
  (src__common__pipes__number_pipe._NumberPipe.new = function() {
  }).prototype = src__common__pipes__number_pipe._NumberPipe.prototype;
  dart.addTypeTests(src__common__pipes__number_pipe._NumberPipe);
  dart.setStaticMethodSignature(src__common__pipes__number_pipe._NumberPipe, () => ({_format: dart.fnType(core.String, [core.num, src__common__pipes__number_pipe._NumberFormatStyle, core.String], [core.String, core.bool])}));
  src__common__pipes__number_pipe.DecimalPipe = class DecimalPipe extends src__common__pipes__number_pipe._NumberPipe {
    transform(value, digits) {
      if (digits === void 0) digits = null;
      return src__common__pipes__number_pipe._NumberPipe._format(core.num._check(value), src__common__pipes__number_pipe._NumberFormatStyle.Decimal, digits);
    }
  };
  (src__common__pipes__number_pipe.DecimalPipe.new = function() {
    src__common__pipes__number_pipe.DecimalPipe.__proto__.new.call(this);
  }).prototype = src__common__pipes__number_pipe.DecimalPipe.prototype;
  dart.addTypeTests(src__common__pipes__number_pipe.DecimalPipe);
  src__common__pipes__number_pipe.DecimalPipe[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__number_pipe.DecimalPipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__number_pipe.DecimalPipe.__proto__),
    transform: dart.fnType(core.String, [dart.dynamic], [core.String])
  }));
  src__common__pipes__number_pipe.PercentPipe = class PercentPipe extends src__common__pipes__number_pipe._NumberPipe {
    transform(value, digits) {
      if (digits === void 0) digits = null;
      return src__common__pipes__number_pipe._NumberPipe._format(core.num._check(value), src__common__pipes__number_pipe._NumberFormatStyle.Percent, digits);
    }
  };
  (src__common__pipes__number_pipe.PercentPipe.new = function() {
    src__common__pipes__number_pipe.PercentPipe.__proto__.new.call(this);
  }).prototype = src__common__pipes__number_pipe.PercentPipe.prototype;
  dart.addTypeTests(src__common__pipes__number_pipe.PercentPipe);
  src__common__pipes__number_pipe.PercentPipe[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__number_pipe.PercentPipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__number_pipe.PercentPipe.__proto__),
    transform: dart.fnType(core.String, [dart.dynamic], [core.String])
  }));
  src__common__pipes__number_pipe.CurrencyPipe = class CurrencyPipe extends src__common__pipes__number_pipe._NumberPipe {
    transform(value, currencyCode, symbolDisplay, digits) {
      if (currencyCode === void 0) currencyCode = 'USD';
      if (symbolDisplay === void 0) symbolDisplay = false;
      if (digits === void 0) digits = null;
      return src__common__pipes__number_pipe._NumberPipe._format(core.num._check(value), src__common__pipes__number_pipe._NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
    }
  };
  (src__common__pipes__number_pipe.CurrencyPipe.new = function() {
    src__common__pipes__number_pipe.CurrencyPipe.__proto__.new.call(this);
  }).prototype = src__common__pipes__number_pipe.CurrencyPipe.prototype;
  dart.addTypeTests(src__common__pipes__number_pipe.CurrencyPipe);
  src__common__pipes__number_pipe.CurrencyPipe[dart.implements] = () => [src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__common__pipes__number_pipe.CurrencyPipe, () => ({
    __proto__: dart.getMethods(src__common__pipes__number_pipe.CurrencyPipe.__proto__),
    transform: dart.fnType(core.String, [dart.dynamic], [core.String, core.bool, core.String])
  }));
  src__common__pipes__number_pipe._NumberFormatStyle = class _NumberFormatStyle extends core.Object {
    toString() {
      return {
        0: "_NumberFormatStyle.Decimal",
        1: "_NumberFormatStyle.Percent",
        2: "_NumberFormatStyle.Currency"
      }[this.index];
    }
  };
  (src__common__pipes__number_pipe._NumberFormatStyle.new = function(x) {
    this.index = x;
  }).prototype = src__common__pipes__number_pipe._NumberFormatStyle.prototype;
  dart.addTypeTests(src__common__pipes__number_pipe._NumberFormatStyle);
  dart.setFieldSignature(src__common__pipes__number_pipe._NumberFormatStyle, () => ({
    __proto__: dart.getFields(src__common__pipes__number_pipe._NumberFormatStyle.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__common__pipes__number_pipe._NumberFormatStyle, ['toString']);
  src__common__pipes__number_pipe._NumberFormatStyle.Decimal = dart.const(new src__common__pipes__number_pipe._NumberFormatStyle.new(0));
  src__common__pipes__number_pipe._NumberFormatStyle.Percent = dart.const(new src__common__pipes__number_pipe._NumberFormatStyle.new(1));
  src__common__pipes__number_pipe._NumberFormatStyle.Currency = dart.const(new src__common__pipes__number_pipe._NumberFormatStyle.new(2));
  src__common__pipes__number_pipe._NumberFormatStyle.values = dart.constList([src__common__pipes__number_pipe._NumberFormatStyle.Decimal, src__common__pipes__number_pipe._NumberFormatStyle.Percent, src__common__pipes__number_pipe._NumberFormatStyle.Currency], src__common__pipes__number_pipe._NumberFormatStyle);
  src__common__pipes__number_pipe._normalizeLocale = function(locale) {
    return locale == null ? null : locale[$replaceAll]('-', '_');
  };
  dart.fn(src__common__pipes__number_pipe._normalizeLocale, StringToString());
  src__common__pipes__number_pipe._formatNumber = function(number, locale, style, opts) {
    let minimumIntegerDigits = opts && 'minimumIntegerDigits' in opts ? opts.minimumIntegerDigits : 1;
    let minimumFractionDigits = opts && 'minimumFractionDigits' in opts ? opts.minimumFractionDigits : 0;
    let maximumFractionDigits = opts && 'maximumFractionDigits' in opts ? opts.maximumFractionDigits : 3;
    let currency = opts && 'currency' in opts ? opts.currency : null;
    let currencyAsSymbol = opts && 'currencyAsSymbol' in opts ? opts.currencyAsSymbol : false;
    locale = src__common__pipes__number_pipe._normalizeLocale(locale);
    let formatter = null;
    switch (style) {
      case src__common__pipes__number_pipe._NumberFormatStyle.Decimal:
      {
        formatter = new intl$.NumberFormat.decimalPattern(locale);
        break;
      }
      case src__common__pipes__number_pipe._NumberFormatStyle.Percent:
      {
        formatter = new intl$.NumberFormat.percentPattern(locale);
        break;
      }
      case src__common__pipes__number_pipe._NumberFormatStyle.Currency:
      {
        if (dart.test(currencyAsSymbol)) {
          formatter = intl$.NumberFormat.simpleCurrency({locale: locale, name: currency});
        } else {
          formatter = new intl$.NumberFormat.currency({locale: locale, name: currency});
        }
        break;
      }
    }
    formatter.minimumIntegerDigits = minimumIntegerDigits;
    formatter.minimumFractionDigits = minimumFractionDigits;
    formatter.maximumFractionDigits = maximumFractionDigits;
    return formatter.format(number);
  };
  dart.fn(src__common__pipes__number_pipe._formatNumber, numAndStringAnd_NumberFormatStyle__ToString());
  dart.trackLibraries("packages/angular/src/common/pipes/number_pipe.ddc", {
    "package:angular/src/common/pipes/number_pipe.dart": src__common__pipes__number_pipe
  }, '{"version":3,"sourceRoot":"","sources":["number_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;MAMa,mCAAG;YAAG,AAAI,gBAAM,CAAC;;;;mBAQN,KAAS,EAAE,KAAwB,EAAE,MAAa,EACnE,QAAe,EAAE,gBAA6B;+BAAvC;uCAAe,mBAAmB;AAC5C,UAAI,KAAK,IAAI,MAAM,MAAO;AAC1B,mBAAI,KAAK,eAAU;AACjB,mBAAM,IAAI,oFAA4B,CAAC,0DAAW,EAAE,KAAK;;AAE3D,UAAI,SAAS,GAAG,cAAc,GAAG,cAAc;AAC/C,UAAI,MAAM,IAAI,MAAM;AAClB,YAAI,QAAQ,mCAAG,WAAW,CAAC,MAAM;AACjC,YAAI,KAAK,IAAI,MAAM;AACjB,qBAAM,IAAI,yCAAa,CACrB,WAAE,MAAM;;AAGZ,YAAI,KAAK,MAAC,MAAM,MAAM;AACpB,gBAAM,GAAG,QAAG,MAAM,CAAC,KAAK,MAAC;;AAE3B,YAAI,KAAK,MAAC,MAAM,MAAM;AACpB,qBAAW,GAAG,QAAG,MAAM,CAAC,KAAK,MAAC;;AAEhC,YAAI,KAAK,MAAC,MAAM,MAAM;AACpB,qBAAW,GAAG,QAAG,MAAM,CAAC,KAAK,MAAC;;;AAGlC,YAAO,8CAAa,CAClB,KAAK,EACL,UAAI,cAAc,EAClB,KAAK,yBACiB,MAAM,yBACL,WAAW,yBACX,WAAW,YACxB,QAAQ,oBACA,gBAAgB;IAEtC;;;EAEmB;;;;cAyBF,KAAa,EAAG,MAAa;6BAAN;AACtC,YAAO,4CAAW,QAAQ,iBAAC,KAAK,GAAE,kDAAkB,QAAQ,EAAE,MAAM;IACtE;;;;EAEmB;;;;;;;;cAeF,KAAa,EAAG,MAAa;6BAAN;AACtC,YAAO,4CAAW,QAAQ,iBAAC,KAAK,GAAE,kDAAkB,QAAQ,EAAE,MAAM;IACtE;;;;EAEmB;;;;;;;;cAoBjB,KAAa,EACb,YAA2B,EAC3B,aAA0B,EAC1B,MAAa;mCAFN,eAAe;oCACjB,gBAAgB;6BACd;YAEL,4CAAW,QAAQ,iBACjB,KAAK,GACL,kDAAkB,SAAS,EAC3B,MAAM,EACN,YAAY,EACZ,aAAa;IACd;;;;EAEe;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8DAIE,MAAa;UAAK,OAAM,kBAAN,MAAM,aAAY,CAAC,KAAK;EAAI;;2DAEpE,MAAU,EACV,MAAa,EACb,KAAwB;QACpB,4FAAsB;QACtB,+FAAuB;QACvB,+FAAuB;QACpB;QACF,gFAAkB;AAEvB,UAAM,GAAG,gDAAgB,CAAC,MAAM;AAChC,QAAa;AACb,YAAQ,KAAK;UACN,mDAAkB,QAAQ;;AAC7B,iBAAS,GAAG,IAAI,iCAA2B,CAAC,MAAM;AAClD;;UACG,mDAAkB,QAAQ;;AAC7B,iBAAS,GAAG,IAAI,iCAA2B,CAAC,MAAM;AAClD;;UACG,mDAAkB,SAAS;;AAC9B,sBAAI,gBAAgB,GAAE;AACpB,mBAAS,GACL,AAAI,iCAA2B,UAAS,MAAM,QAAQ,QAAQ;eAC7D;AACL,mBAAS,GAAG,IAAI,2BAAqB,UAAS,MAAM,QAAQ,QAAQ;;AAEtE;;;AAEJ,aAAS,qBAAqB,GAAG,oBAAoB;AACrD,aAAS,sBAAsB,GAAG,qBAAqB;AACvD,aAAS,sBAAsB,GAAG,qBAAqB;AACvD,UAAO,UAAS,OAAO,CAAC,MAAM;EAChC","file":"number_pipe.ddc.js"}');
  // Exports:
  return {
    src__common__pipes__number_pipe: src__common__pipes__number_pipe
  };
});

//# sourceMappingURL=number_pipe.ddc.js.map
