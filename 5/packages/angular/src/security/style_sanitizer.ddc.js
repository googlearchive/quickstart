define(['dart_sdk', 'packages/logging/logging', 'packages/angular/src/security/url_sanitizer', 'packages/angular/src/runtime/optimizations'], function(dart_sdk, logging, url_sanitizer, optimizations) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging$ = logging.logging;
  const src__security__url_sanitizer = url_sanitizer.src__security__url_sanitizer;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const _root = Object.create(null);
  const src__security__style_sanitizer = Object.create(_root);
  const $codeUnitAt = dartx.codeUnitAt;
  const $trim = dartx.trim;
  const $isEmpty = dartx.isEmpty;
  const $contains = dartx.contains;
  const $split = dartx.split;
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  dart.defineLazy(src__security__style_sanitizer, {
    /*src__security__style_sanitizer._VALUES*/get _VALUES() {
      return '[-,."\'%_!# a-zA-Z0-9]+';
    },
    /*src__security__style_sanitizer._TRANSFORMATION_FNS*/get _TRANSFORMATION_FNS() {
      return '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
    },
    /*src__security__style_sanitizer._COLOR_FNS*/get _COLOR_FNS() {
      return '(?:rgb|hsl)a?';
    },
    /*src__security__style_sanitizer._FN_ARGS*/get _FN_ARGS() {
      return '\\([-0-9.%, a-zA-Z]+\\)';
    },
    /*src__security__style_sanitizer._KEY*/get _KEY() {
      return '([a-zA-Z-]+[ ]?\\:)';
    },
    /*src__security__style_sanitizer.SAFE_STYLE_VALUE*/get SAFE_STYLE_VALUE() {
      return core.RegExp.new(dart.str`^(${"[-,.\"'%_!# a-zA-Z0-9]+"}|(${"([a-zA-Z-]+[ ]?\\:)"}${"[-,.\"'%_!# a-zA-Z0-9]+"}[ ;]?)|((?:${"(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?"}|` + dart.str`${"(?:rgb|hsl)a?"})${"\\([-0-9.%, a-zA-Z]+\\)"})[ ;]?)+\$`);
    },
    /*src__security__style_sanitizer.URL_RE*/get URL_RE() {
      return core.RegExp.new('^url\\([^)]+\\)$');
    },
    /*src__security__style_sanitizer._logger*/get _logger() {
      return logging$.Logger.new('AngularSanitizer');
    }
  });
  src__security__style_sanitizer.hasBalancedQuotes = function(value) {
    let quoteCodeUnit = "'"[$codeUnitAt](0);
    let doubleQuoteCodeUnit = '"'[$codeUnitAt](0);
    let outsideSingle = true;
    let outsideDouble = true;
    for (let i = 0; i < value.length; i++) {
      let c = value[$codeUnitAt](i);
      if (c === quoteCodeUnit && outsideDouble) {
        outsideSingle = !outsideSingle;
      } else if (c === doubleQuoteCodeUnit && outsideSingle) {
        outsideDouble = !outsideDouble;
      }
    }
    return outsideSingle && outsideDouble;
  };
  dart.fn(src__security__style_sanitizer.hasBalancedQuotes, StringTobool());
  src__security__style_sanitizer.internalSanitizeStyle = function(value) {
    value = value[$trim]();
    if (value[$isEmpty]) return '';
    let urlMatch = src__security__style_sanitizer.URL_RE.firstMatch(value);
    if (urlMatch != null) {
      let input = urlMatch.group(0);
      if (src__security__url_sanitizer.internalSanitizeUrl(input) == input) {
        return value;
      }
    } else if (dart.test(src__security__style_sanitizer.SAFE_STYLE_VALUE.hasMatch(value)) && dart.test(src__security__style_sanitizer.hasBalancedQuotes(value))) {
      return value;
    }
    if (value[$contains](';')) {
      let parts = value[$split](';');
      let failed = false;
      for (let part of parts) {
        let urlMatch = src__security__style_sanitizer.URL_RE.firstMatch(part);
        if (urlMatch != null) {
          let input = urlMatch.group(0);
          if (src__security__url_sanitizer.internalSanitizeUrl(input) != input) {
            failed = true;
            break;
          }
        } else if (!(src__security__style_sanitizer.SAFE_STYLE_VALUE.hasMatch(part) === true && dart.test(src__security__style_sanitizer.hasBalancedQuotes(part)))) {
          failed = true;
          break;
        }
      }
      if (!failed) return value;
    }
    if (dart.test(src__runtime__optimizations.isDevMode)) {
      src__security__style_sanitizer._logger.warning(dart.str`Sanitizing unsafe style value ${value} ` + '(see http://g.co/ng/security#xss).');
    }
    return 'unsafe';
  };
  dart.fn(src__security__style_sanitizer.internalSanitizeStyle, StringToString());
  dart.trackLibraries("packages/angular/src/security/style_sanitizer.ddc", {
    "package:angular/src/security/style_sanitizer.dart": src__security__style_sanitizer
  }, '{"version":3,"sourceRoot":"","sources":["style_sanitizer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAkBM,sCAAO;YAAG;;MACV,kDAAmB;YACrB;;MACE,yCAAU;YAAG;;MACb,uCAAQ;YAAG;;MACX,mCAAI;YAAG;;MAEA,+CAAgB;YACzB,AAAI,gBAAM,CAAC,aAAI,yBAAO,KAAG,qBAAI,GAAC,yBAAO,cAAY,+DAAmB,MAChE,WAAE,eAAU,IAAE,yBAAQ;;MAqBjB,qCAAM;YAAG,AAAI,gBAAM,CAAC;;MACpB,sCAAO;YAAG,AAAI,oBAAM,CAAC;;;8DASX,KAAY;AACjC,QAAM,gBAAgB,gBAAc,CAAC;AACrC,QAAM,sBAAsB,gBAAc,CAAC;AAC3C,QAAK,gBAAgB;AACrB,QAAK,gBAAgB;AACrB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,KAAK,OAAO,EAAE,CAAC,IAAI;AACrC,UAAI,IAAI,KAAK,aAAW,CAAC,CAAC;AAC1B,UAAI,CAAC,KAAI,aAAa,IAAI,aAAa,EAAE;AACvC,qBAAa,GAAG,CAAC,aAAa;YACzB,KAAI,CAAC,KAAI,mBAAmB,IAAI,aAAa,EAAE;AACpD,qBAAa,GAAG,CAAC,aAAa;;;AAGlC,UAAO,AAAc,cAAD,IAAI,aAAa;EACvC;;kEAE6B,KAAY;AACvC,SAAK,GAAG,KAAK,OAAK;AAClB,QAAI,KAAK,UAAQ,EAAE,MAAO;AAG1B,QAAM,WAAW,qCAAM,WAAW,CAAC,KAAK;AACxC,QAAI,QAAQ,IAAI,MAAM;AACpB,UAAO,QAAQ,QAAQ,MAAM,CAAC;AAC9B,UAAI,gDAAmB,CAAC,KAAK,KAAK,KAAK,EAAE;AACvC,cAAO,MAAK;;UAET,eAAI,+CAAgB,SAAS,CAAC,KAAK,gBAAK,gDAAiB,CAAC,KAAK,IAAG;AACvE,YAAO,MAAK;;AAEd,QAAI,KAAK,WAAS,CAAC,MAAM;AACvB,UAAa,QAAQ,KAAK,QAAM,CAAC;AACjC,UAAK,SAAS;AACd,eAAY,OAAQ,MAAK,EAAE;AACzB,YAAM,WAAW,qCAAM,WAAW,CAAC,IAAI;AACvC,YAAI,QAAQ,IAAI,MAAM;AACpB,cAAO,QAAQ,QAAQ,MAAM,CAAC;AAC9B,cAAI,gDAAmB,CAAC,KAAK,KAAK,KAAK,EAAE;AACvC,kBAAM,GAAG;AACT;;cAEG,OAAM,+CAAgB,SAAS,CAAC,IAAI,MAAK,kBAC5C,gDAAiB,CAAC,IAAI,KAAI;AAC5B,gBAAM,GAAG;AACT;;;AAGJ,WAAK,MAAM,EAAE,MAAO,MAAK;;AAE3B,kBAAI,qCAAS,GAAE;AACb,4CAAO,QAAQ,CAAC,yCAAgC,KAAK,MACjD;;AAEN,UAAO;EACT","file":"style_sanitizer.ddc.js"}');
  // Exports:
  return {
    src__security__style_sanitizer: src__security__style_sanitizer
  };
});

//# sourceMappingURL=style_sanitizer.ddc.js.map
