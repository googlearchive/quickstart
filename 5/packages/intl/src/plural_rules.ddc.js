define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__plural_rules = Object.create(_root);
  const $modulo = dartx['%'];
  const $containsKey = dartx.containsKey;
  let VoidToPluralCase = () => (VoidToPluralCase = dart.constFn(dart.fnType(src__plural_rules.PluralCase, [])))();
  let intTodynamic = () => (intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  src__plural_rules.PluralRule = dart.typedef('PluralRule', () => dart.fnType(src__plural_rules.PluralCase, []));
  src__plural_rules.PluralCase = class PluralCase extends core.Object {
    toString() {
      return {
        0: "PluralCase.ZERO",
        1: "PluralCase.ONE",
        2: "PluralCase.TWO",
        3: "PluralCase.FEW",
        4: "PluralCase.MANY",
        5: "PluralCase.OTHER"
      }[this.index];
    }
  };
  (src__plural_rules.PluralCase.new = function(x) {
    this.index = x;
  }).prototype = src__plural_rules.PluralCase.prototype;
  dart.addTypeTests(src__plural_rules.PluralCase);
  dart.setFieldSignature(src__plural_rules.PluralCase, () => ({
    __proto__: dart.getFields(src__plural_rules.PluralCase.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__plural_rules.PluralCase, ['toString']);
  src__plural_rules.PluralCase.ZERO = dart.const(new src__plural_rules.PluralCase.new(0));
  src__plural_rules.PluralCase.ONE = dart.const(new src__plural_rules.PluralCase.new(1));
  src__plural_rules.PluralCase.TWO = dart.const(new src__plural_rules.PluralCase.new(2));
  src__plural_rules.PluralCase.FEW = dart.const(new src__plural_rules.PluralCase.new(3));
  src__plural_rules.PluralCase.MANY = dart.const(new src__plural_rules.PluralCase.new(4));
  src__plural_rules.PluralCase.OTHER = dart.const(new src__plural_rules.PluralCase.new(5));
  src__plural_rules.PluralCase.values = dart.constList([src__plural_rules.PluralCase.ZERO, src__plural_rules.PluralCase.ONE, src__plural_rules.PluralCase.TWO, src__plural_rules.PluralCase.FEW, src__plural_rules.PluralCase.MANY, src__plural_rules.PluralCase.OTHER], src__plural_rules.PluralCase);
  src__plural_rules._default_rule = function() {
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._default_rule, VoidToPluralCase());
  src__plural_rules.startRuleEvaluation = function(howMany) {
    src__plural_rules._n = howMany;
  };
  dart.fn(src__plural_rules.startRuleEvaluation, intTodynamic());
  dart.defineLazy(src__plural_rules, {
    /*src__plural_rules._n*/get _n() {
      return null;
    },
    set _n(_) {}
  });
  dart.copyProperties(src__plural_rules, {
    get _i() {
      return src__plural_rules._n;
    }
  });
  dart.defineLazy(src__plural_rules, {
    /*src__plural_rules.opt_precision*/get opt_precision() {
      return null;
    },
    set opt_precision(_) {}
  });
  dart.copyProperties(src__plural_rules, {
    get _v() {
      return 0;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get _f() {
      return 0;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get _t() {
      return 0;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get ZERO() {
      return src__plural_rules.PluralCase.ZERO;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get ONE() {
      return src__plural_rules.PluralCase.ONE;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get TWO() {
      return src__plural_rules.PluralCase.TWO;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get FEW() {
      return src__plural_rules.PluralCase.FEW;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get MANY() {
      return src__plural_rules.PluralCase.MANY;
    }
  });
  dart.copyProperties(src__plural_rules, {
    get OTHER() {
      return src__plural_rules.PluralCase.OTHER;
    }
  });
  src__plural_rules._fil_rule = function() {
    if (src__plural_rules._v === 0 && (src__plural_rules._i === 1 || src__plural_rules._i === 2 || src__plural_rules._i === 3) || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) !== 4 && src__plural_rules._i[$modulo](10) !== 6 && src__plural_rules._i[$modulo](10) !== 9 || src__plural_rules._v !== 0 && src__plural_rules._f[$modulo](10) !== 4 && src__plural_rules._f[$modulo](10) !== 6 && src__plural_rules._f[$modulo](10) !== 9) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._fil_rule, VoidToPluralCase());
  src__plural_rules._pt_PT_rule = function() {
    if (src__plural_rules._n === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._pt_PT_rule, VoidToPluralCase());
  src__plural_rules._br_rule = function() {
    if (src__plural_rules._n[$modulo](10) === 1 && src__plural_rules._n[$modulo](100) !== 11 && src__plural_rules._n[$modulo](100) !== 71 && src__plural_rules._n[$modulo](100) !== 91) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n[$modulo](10) === 2 && src__plural_rules._n[$modulo](100) !== 12 && src__plural_rules._n[$modulo](100) !== 72 && src__plural_rules._n[$modulo](100) !== 92) {
      return src__plural_rules.TWO;
    }
    if ((src__plural_rules._n[$modulo](10) >= 3 && src__plural_rules._n[$modulo](10) <= 4 || src__plural_rules._n[$modulo](10) === 9) && (src__plural_rules._n[$modulo](100) < 10 || src__plural_rules._n[$modulo](100) > 19) && (src__plural_rules._n[$modulo](100) < 70 || src__plural_rules._n[$modulo](100) > 79) && (src__plural_rules._n[$modulo](100) < 90 || src__plural_rules._n[$modulo](100) > 99)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n !== 0 && src__plural_rules._n[$modulo](1000000) === 0) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._br_rule, VoidToPluralCase());
  src__plural_rules._sr_rule = function() {
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) === 1 && src__plural_rules._i[$modulo](100) !== 11 || src__plural_rules._f[$modulo](10) === 1 && src__plural_rules._f[$modulo](100) !== 11) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 2 && src__plural_rules._i[$modulo](10) <= 4 && (src__plural_rules._i[$modulo](100) < 12 || src__plural_rules._i[$modulo](100) > 14) || src__plural_rules._f[$modulo](10) >= 2 && src__plural_rules._f[$modulo](10) <= 4 && (src__plural_rules._f[$modulo](100) < 12 || src__plural_rules._f[$modulo](100) > 14)) {
      return src__plural_rules.FEW;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._sr_rule, VoidToPluralCase());
  src__plural_rules._ro_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v !== 0 || src__plural_rules._n === 0 || src__plural_rules._n !== 1 && src__plural_rules._n[$modulo](100) >= 1 && src__plural_rules._n[$modulo](100) <= 19) {
      return src__plural_rules.FEW;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._ro_rule, VoidToPluralCase());
  src__plural_rules._hi_rule = function() {
    if (src__plural_rules._i === 0 || src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._hi_rule, VoidToPluralCase());
  src__plural_rules._fr_rule = function() {
    if (src__plural_rules._i === 0 || src__plural_rules._i === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._fr_rule, VoidToPluralCase());
  src__plural_rules._cs_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    if (dart.notNull(src__plural_rules._i) >= 2 && dart.notNull(src__plural_rules._i) <= 4 && src__plural_rules._v === 0) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._v !== 0) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._cs_rule, VoidToPluralCase());
  src__plural_rules._pl_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 2 && src__plural_rules._i[$modulo](10) <= 4 && (src__plural_rules._i[$modulo](100) < 12 || src__plural_rules._i[$modulo](100) > 14)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i !== 1 && src__plural_rules._i[$modulo](10) >= 0 && src__plural_rules._i[$modulo](10) <= 1 || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 5 && src__plural_rules._i[$modulo](10) <= 9 || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) >= 12 && src__plural_rules._i[$modulo](100) <= 14) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._pl_rule, VoidToPluralCase());
  src__plural_rules._lv_rule = function() {
    if (src__plural_rules._n[$modulo](10) === 0 || src__plural_rules._n[$modulo](100) >= 11 && src__plural_rules._n[$modulo](100) <= 19 || src__plural_rules._v === 2 && src__plural_rules._f[$modulo](100) >= 11 && src__plural_rules._f[$modulo](100) <= 19) {
      return src__plural_rules.ZERO;
    }
    if (src__plural_rules._n[$modulo](10) === 1 && src__plural_rules._n[$modulo](100) !== 11 || src__plural_rules._v === 2 && src__plural_rules._f[$modulo](10) === 1 && src__plural_rules._f[$modulo](100) !== 11 || src__plural_rules._v !== 2 && src__plural_rules._f[$modulo](10) === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._lv_rule, VoidToPluralCase());
  src__plural_rules._he_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._i === 2 && src__plural_rules._v === 0) {
      return src__plural_rules.TWO;
    }
    if (src__plural_rules._v === 0 && (dart.notNull(src__plural_rules._n) < 0 || dart.notNull(src__plural_rules._n) > 10) && src__plural_rules._n[$modulo](10) === 0) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._he_rule, VoidToPluralCase());
  src__plural_rules._mt_rule = function() {
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n === 0 || src__plural_rules._n[$modulo](100) >= 2 && src__plural_rules._n[$modulo](100) <= 10) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n[$modulo](100) >= 11 && src__plural_rules._n[$modulo](100) <= 19) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._mt_rule, VoidToPluralCase());
  src__plural_rules._si_rule = function() {
    if (src__plural_rules._n === 0 || src__plural_rules._n === 1 || src__plural_rules._i === 0 && src__plural_rules._f === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._si_rule, VoidToPluralCase());
  src__plural_rules._cy_rule = function() {
    if (src__plural_rules._n === 0) {
      return src__plural_rules.ZERO;
    }
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n === 2) {
      return src__plural_rules.TWO;
    }
    if (src__plural_rules._n === 3) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n === 6) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._cy_rule, VoidToPluralCase());
  src__plural_rules._da_rule = function() {
    if (src__plural_rules._n === 1 || src__plural_rules._t !== 0 && (src__plural_rules._i === 0 || src__plural_rules._i === 1)) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._da_rule, VoidToPluralCase());
  src__plural_rules._ru_rule = function() {
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) === 1 && src__plural_rules._i[$modulo](100) !== 11) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 2 && src__plural_rules._i[$modulo](10) <= 4 && (src__plural_rules._i[$modulo](100) < 12 || src__plural_rules._i[$modulo](100) > 14)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) === 0 || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) >= 5 && src__plural_rules._i[$modulo](10) <= 9 || src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) >= 11 && src__plural_rules._i[$modulo](100) <= 14) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._ru_rule, VoidToPluralCase());
  src__plural_rules._be_rule = function() {
    if (src__plural_rules._n[$modulo](10) === 1 && src__plural_rules._n[$modulo](100) !== 11) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n[$modulo](10) >= 2 && src__plural_rules._n[$modulo](10) <= 4 && (src__plural_rules._n[$modulo](100) < 12 || src__plural_rules._n[$modulo](100) > 14)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n[$modulo](10) === 0 || src__plural_rules._n[$modulo](10) >= 5 && src__plural_rules._n[$modulo](10) <= 9 || src__plural_rules._n[$modulo](100) >= 11 && src__plural_rules._n[$modulo](100) <= 14) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._be_rule, VoidToPluralCase());
  src__plural_rules._mk_rule = function() {
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](10) === 1 || src__plural_rules._f[$modulo](10) === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._mk_rule, VoidToPluralCase());
  src__plural_rules._ga_rule = function() {
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n === 2) {
      return src__plural_rules.TWO;
    }
    if (dart.notNull(src__plural_rules._n) >= 3 && dart.notNull(src__plural_rules._n) <= 6) {
      return src__plural_rules.FEW;
    }
    if (dart.notNull(src__plural_rules._n) >= 7 && dart.notNull(src__plural_rules._n) <= 10) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._ga_rule, VoidToPluralCase());
  src__plural_rules._pt_rule = function() {
    if (dart.notNull(src__plural_rules._n) >= 0 && dart.notNull(src__plural_rules._n) <= 2 && src__plural_rules._n !== 2) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._pt_rule, VoidToPluralCase());
  src__plural_rules._es_rule = function() {
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._es_rule, VoidToPluralCase());
  src__plural_rules._is_rule = function() {
    if (src__plural_rules._t === 0 && src__plural_rules._i[$modulo](10) === 1 && src__plural_rules._i[$modulo](100) !== 11 || src__plural_rules._t !== 0) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._is_rule, VoidToPluralCase());
  src__plural_rules._ar_rule = function() {
    if (src__plural_rules._n === 0) {
      return src__plural_rules.ZERO;
    }
    if (src__plural_rules._n === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n === 2) {
      return src__plural_rules.TWO;
    }
    if (src__plural_rules._n[$modulo](100) >= 3 && src__plural_rules._n[$modulo](100) <= 10) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._n[$modulo](100) >= 11 && src__plural_rules._n[$modulo](100) <= 99) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._ar_rule, VoidToPluralCase());
  src__plural_rules._sl_rule = function() {
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) === 1) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) === 2) {
      return src__plural_rules.TWO;
    }
    if (src__plural_rules._v === 0 && src__plural_rules._i[$modulo](100) >= 3 && src__plural_rules._i[$modulo](100) <= 4 || src__plural_rules._v !== 0) {
      return src__plural_rules.FEW;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._sl_rule, VoidToPluralCase());
  src__plural_rules._lt_rule = function() {
    if (src__plural_rules._n[$modulo](10) === 1 && (src__plural_rules._n[$modulo](100) < 11 || src__plural_rules._n[$modulo](100) > 19)) {
      return src__plural_rules.ONE;
    }
    if (src__plural_rules._n[$modulo](10) >= 2 && src__plural_rules._n[$modulo](10) <= 9 && (src__plural_rules._n[$modulo](100) < 11 || src__plural_rules._n[$modulo](100) > 19)) {
      return src__plural_rules.FEW;
    }
    if (src__plural_rules._f !== 0) {
      return src__plural_rules.MANY;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._lt_rule, VoidToPluralCase());
  src__plural_rules._en_rule = function() {
    if (src__plural_rules._i === 1 && src__plural_rules._v === 0) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._en_rule, VoidToPluralCase());
  src__plural_rules._ak_rule = function() {
    if (dart.notNull(src__plural_rules._n) >= 0 && dart.notNull(src__plural_rules._n) <= 1) {
      return src__plural_rules.ONE;
    }
    return src__plural_rules.OTHER;
  };
  dart.fn(src__plural_rules._ak_rule, VoidToPluralCase());
  dart.defineLazy(src__plural_rules, {
    /*src__plural_rules.pluralRules*/get pluralRules() {
      return new _js_helper.LinkedMap.from(['af', src__plural_rules._es_rule, 'am', src__plural_rules._hi_rule, 'ar', src__plural_rules._ar_rule, 'az', src__plural_rules._es_rule, 'be', src__plural_rules._be_rule, 'bg', src__plural_rules._es_rule, 'bn', src__plural_rules._hi_rule, 'br', src__plural_rules._br_rule, 'bs', src__plural_rules._sr_rule, 'ca', src__plural_rules._en_rule, 'chr', src__plural_rules._es_rule, 'cs', src__plural_rules._cs_rule, 'cy', src__plural_rules._cy_rule, 'da', src__plural_rules._da_rule, 'de', src__plural_rules._en_rule, 'de_AT', src__plural_rules._en_rule, 'de_CH', src__plural_rules._en_rule, 'el', src__plural_rules._es_rule, 'en', src__plural_rules._en_rule, 'en_AU', src__plural_rules._en_rule, 'en_CA', src__plural_rules._en_rule, 'en_GB', src__plural_rules._en_rule, 'en_IE', src__plural_rules._en_rule, 'en_IN', src__plural_rules._en_rule, 'en_SG', src__plural_rules._en_rule, 'en_US', src__plural_rules._en_rule, 'en_ZA', src__plural_rules._en_rule, 'es', src__plural_rules._es_rule, 'es_419', src__plural_rules._es_rule, 'es_ES', src__plural_rules._es_rule, 'es_MX', src__plural_rules._es_rule, 'es_US', src__plural_rules._es_rule, 'et', src__plural_rules._en_rule, 'eu', src__plural_rules._es_rule, 'fa', src__plural_rules._hi_rule, 'fi', src__plural_rules._en_rule, 'fil', src__plural_rules._fil_rule, 'fr', src__plural_rules._fr_rule, 'fr_CA', src__plural_rules._fr_rule, 'ga', src__plural_rules._ga_rule, 'gl', src__plural_rules._en_rule, 'gsw', src__plural_rules._es_rule, 'gu', src__plural_rules._hi_rule, 'haw', src__plural_rules._es_rule, 'he', src__plural_rules._he_rule, 'hi', src__plural_rules._hi_rule, 'hr', src__plural_rules._sr_rule, 'hu', src__plural_rules._es_rule, 'hy', src__plural_rules._fr_rule, 'id', src__plural_rules._default_rule, 'in', src__plural_rules._default_rule, 'is', src__plural_rules._is_rule, 'it', src__plural_rules._en_rule, 'iw', src__plural_rules._he_rule, 'ja', src__plural_rules._default_rule, 'ka', src__plural_rules._es_rule, 'kk', src__plural_rules._es_rule, 'km', src__plural_rules._default_rule, 'kn', src__plural_rules._hi_rule, 'ko', src__plural_rules._default_rule, 'ky', src__plural_rules._es_rule, 'ln', src__plural_rules._ak_rule, 'lo', src__plural_rules._default_rule, 'lt', src__plural_rules._lt_rule, 'lv', src__plural_rules._lv_rule, 'mk', src__plural_rules._mk_rule, 'ml', src__plural_rules._es_rule, 'mn', src__plural_rules._es_rule, 'mo', src__plural_rules._ro_rule, 'mr', src__plural_rules._hi_rule, 'ms', src__plural_rules._default_rule, 'mt', src__plural_rules._mt_rule, 'my', src__plural_rules._default_rule, 'nb', src__plural_rules._es_rule, 'ne', src__plural_rules._es_rule, 'nl', src__plural_rules._en_rule, 'no', src__plural_rules._es_rule, 'no_NO', src__plural_rules._es_rule, 'or', src__plural_rules._es_rule, 'pa', src__plural_rules._ak_rule, 'pl', src__plural_rules._pl_rule, 'pt', src__plural_rules._pt_rule, 'pt_BR', src__plural_rules._pt_rule, 'pt_PT', src__plural_rules._pt_PT_rule, 'ro', src__plural_rules._ro_rule, 'ru', src__plural_rules._ru_rule, 'sh', src__plural_rules._sr_rule, 'si', src__plural_rules._si_rule, 'sk', src__plural_rules._cs_rule, 'sl', src__plural_rules._sl_rule, 'sq', src__plural_rules._es_rule, 'sr', src__plural_rules._sr_rule, 'sr_Latn', src__plural_rules._sr_rule, 'sv', src__plural_rules._en_rule, 'sw', src__plural_rules._en_rule, 'ta', src__plural_rules._es_rule, 'te', src__plural_rules._es_rule, 'th', src__plural_rules._default_rule, 'tl', src__plural_rules._fil_rule, 'tr', src__plural_rules._es_rule, 'uk', src__plural_rules._ru_rule, 'ur', src__plural_rules._en_rule, 'uz', src__plural_rules._es_rule, 'vi', src__plural_rules._default_rule, 'zh', src__plural_rules._default_rule, 'zh_CN', src__plural_rules._default_rule, 'zh_HK', src__plural_rules._default_rule, 'zh_TW', src__plural_rules._default_rule, 'zu', src__plural_rules._hi_rule, 'default', src__plural_rules._default_rule]);
    }
  });
  src__plural_rules.localeHasPluralRules = function(locale) {
    return src__plural_rules.pluralRules[$containsKey](locale);
  };
  dart.fn(src__plural_rules.localeHasPluralRules, StringTobool());
  dart.trackLibraries("packages/intl/src/plural_rules.ddc", {
    "package:intl/src/plural_rules.dart": src__plural_rules
  }, '{"version":3,"sourceRoot":"","sources":["plural_rules.dart"],"names":[],"mappings":"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","file":"plural_rules.ddc.js"}');
  // Exports:
  return {
    src__plural_rules: src__plural_rules
  };
});

//# sourceMappingURL=plural_rules.ddc.js.map
