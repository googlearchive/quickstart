define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__security__url_sanitizer = Object.create(_root);
  const $isEmpty = dartx.isEmpty;
  const $join = dartx.join;
  const $trim = dartx.trim;
  const $map = dartx.map;
  const $split = dartx.split;
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  dart.defineLazy(src__security__url_sanitizer, {
    /*src__security__url_sanitizer.SAFE_URL_PATTERN*/get SAFE_URL_PATTERN() {
      return core.RegExp.new('^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))', {caseSensitive: false});
    },
    /*src__security__url_sanitizer.SAFE_SRCSET_PATTERN*/get SAFE_SRCSET_PATTERN() {
      return core.RegExp.new('^(?:(?:https?|file):|[^&:/?#]*(?:[/?#]|$))', {caseSensitive: false});
    },
    /*src__security__url_sanitizer.DATA_URL_PATTERN*/get DATA_URL_PATTERN() {
      return core.RegExp.new('^data:(?:image/(?:bmp|gif|' + 'jpeg|jpg|png|tiff|webp)|video/(?:mpeg|mp4|ogg|webm));' + 'base64,[a-z0-9+/]+=*$', {caseSensitive: false});
    }
  });
  src__security__url_sanitizer.internalSanitizeUrl = function(url) {
    if (url[$isEmpty]) return url;
    return dart.test(src__security__url_sanitizer.SAFE_URL_PATTERN.hasMatch(url)) || dart.test(src__security__url_sanitizer.DATA_URL_PATTERN.hasMatch(url)) ? url : dart.str`unsafe:${url}`;
  };
  dart.fn(src__security__url_sanitizer.internalSanitizeUrl, StringToString());
  src__security__url_sanitizer.internalSanitizeSrcset = function(srcset) {
    return srcset[$split](',')[$map](core.String, dart.fn(s => src__security__url_sanitizer.internalSanitizeUrl(s[$trim]()), StringToString()))[$join](', ');
  };
  dart.fn(src__security__url_sanitizer.internalSanitizeSrcset, StringToString());
  dart.trackLibraries("packages/angular/src/security/url_sanitizer.ddc", {
    "package:angular/src/security/url_sanitizer.dart": src__security__url_sanitizer
  }, '{"version":3,"sourceRoot":"","sources":["url_sanitizer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAwBa,6CAAgB;YAAG,AAAI,gBAAM,CACtC,6EACe;;MAEN,gDAAmB;YAAG,AAAI,gBAAM,CACzC,8DACe;;MAEN,6CAAgB;YAAG,AAAI,gBAAM,CACtC,+BACA,0DACA,yCACe;;;8DAEQ,GAAU;AACnC,QAAI,GAAG,UAAQ,EAAE,MAAO,IAAG;AAC3B,UAAO,WAAC,6CAAgB,SAAS,CAAC,GAAG,gBAAK,6CAAgB,SAAS,CAAC,GAAG,KACjE,GAAG,GACH,kBAAS,GAAG;EACpB;;iEAE8B,MAAa;AACzC,UAAO,OAAM,QACH,CAAC,UACH,cAAC,QAAC,CAAQ,IAAK,gDAAmB,CAAC,CAAC,OAAK,8BACxC,CAAC;EACZ","file":"url_sanitizer.ddc.js"}');
  // Exports:
  return {
    src__security__url_sanitizer: src__security__url_sanitizer
  };
});

//# sourceMappingURL=url_sanitizer.ddc.js.map
