define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__util = Object.create(_root);
  const $codeUnitAt = dartx.codeUnitAt;
  const $startsWith = dartx.startsWith;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $isEmpty = dartx.isEmpty;
  const $padLeft = dartx.padLeft;
  const $toRadixString = dartx.toRadixString;
  const $_get = dartx._get;
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let UriToString = () => (UriToString = dart.constFn(dart.fnType(core.String, [core.Uri])))();
  dart.defineLazy(src__util, {
    /*src__util._validPackageNameCharacters*/get _validPackageNameCharacters() {
      return "                                 !  $ &'()*+,-. 0123456789 ; =  " + "@ABCDEFGHIJKLMNOPQRSTUVWXYZ    _ abcdefghijklmnopqrstuvwxyz   ~ ";
    }
  });
  src__util.isValidPackageName = function(string) {
    return dart.notNull(src__util._findInvalidCharacter(string)) < 0;
  };
  dart.fn(src__util.isValidPackageName, StringTobool());
  src__util._findInvalidCharacter = function(string) {
    let nonDot = 0;
    for (let i = 0; i < string.length; i++) {
      let c = string[$codeUnitAt](i);
      if (c > 127 || "                                 !  $ &'()*+,-. 0123456789 ; =  @ABCDEFGHIJKLMNOPQRSTUVWXYZ    _ abcdefghijklmnopqrstuvwxyz   ~ "[$codeUnitAt](c) <= 32) {
        return i;
      }
      nonDot = nonDot + ((c ^ 46) >>> 0);
    }
    if (nonDot === 0) return string.length;
    return -1;
  };
  dart.fn(src__util._findInvalidCharacter, StringToint());
  src__util.checkValidPackageUri = function(packageUri) {
    if (packageUri.scheme !== "package") {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Not a package: URI"));
    }
    if (dart.test(packageUri.hasAuthority)) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must not have a host part"));
    }
    if (dart.test(packageUri.hasQuery)) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must not have a query part"));
    }
    if (dart.test(packageUri.hasFragment)) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must not have a fragment part"));
    }
    if (packageUri.path[$startsWith]('/')) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must not start with a '/'"));
    }
    let firstSlash = packageUri.path[$indexOf]('/');
    if (firstSlash === -1) {
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package URIs must start with the package name followed by a '/'"));
    }
    let packageName = packageUri.path[$substring](0, firstSlash);
    let badIndex = src__util._findInvalidCharacter(packageName);
    if (dart.notNull(badIndex) >= 0) {
      if (packageName[$isEmpty]) {
        dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package names mus be non-empty"));
      }
      if (badIndex === packageName.length) {
        dart.throw(new core.ArgumentError.value(packageUri, "packageUri", "Package names must contain at least one non-'.' character"));
      }
      if (!(dart.notNull(badIndex) < packageName.length)) dart.assertFailed();
      let badCharCode = packageName[$codeUnitAt](badIndex);
      let badChar = "U+" + badCharCode[$toRadixString](16)[$padLeft](4, '0');
      if (badCharCode >= 32 && badCharCode <= 126) {
        badChar = dart.str`'${packageName[$_get](badIndex)}' (${badChar})`;
      }
      dart.throw(new core.ArgumentError.value(packageUri, "packageUri", dart.str`Package names must not contain ${badChar}`));
    }
    return packageName;
  };
  dart.fn(src__util.checkValidPackageUri, UriToString());
  dart.trackLibraries("packages/package_config/src/util.ddc", {
    "package:package_config/src/util.dart": src__util
  }, '{"version":3,"sourceRoot":"","sources":["util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;MAWa,qCAA2B;YACpC,sEACA;;;0CAGoB,MAAa;AACnC,UAAqC,cAA9B,+BAAqB,CAAC,MAAM,KAAI;EACzC;;6CAU0B,MAAa;AAErC,QAAI,SAAS;AACb,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,MAAM,OAAO,EAAE,CAAC,IAAI;AACtC,UAAI,IAAI,MAAM,aAAW,CAAC,CAAC;AAC3B,UAAI,AAAE,CAAD,GAAG,OAAQ,AAA0C,kIAAf,aAAW,CAAC,CAAC,KAAK,EAAM,EAAE;AACnE,cAAO,EAAC;;AAEV,YAAM,GApCV,AAoCI,MAAM,IAAI,CAAA,AAAE,CAAD,GAAG,EAAI;;AAEpB,QAAI,MAAM,KAAI,GAAG,MAAO,OAAM,OAAO;AACrC,UAAO,EAAC;EACV;;4CAG4B,UAAc;AACxC,QAAI,UAAU,OAAO,KAAI,WAAW;AAClC,iBAAM,IAAI,wBAAmB,CACzB,UAAU,EAAE,cAAc;;AAEhC,kBAAI,UAAU,aAAa,GAAE;AAC3B,iBAAM,IAAI,wBAAmB,CACzB,UAAU,EAAE,cAAc;;AAEhC,kBAAI,UAAU,SAAS,GAAE;AAEvB,iBAAM,IAAI,wBAAmB,CACzB,UAAU,EAAE,cAAc;;AAEhC,kBAAI,UAAU,YAAY,GAAE;AAK1B,iBAAM,IAAI,wBAAmB,CACzB,UAAU,EAAE,cAAc;;AAEhC,QAAI,UAAU,KAAK,aAAW,CAAC,MAAM;AACnC,iBAAM,IAAI,wBAAmB,CACzB,UAAU,EAAE,cAAc;;AAEhC,QAAI,aAAa,UAAU,KAAK,UAAQ,CAAC;AACzC,QAAI,UAAU,KAAI,CAAC,GAAG;AACpB,iBAAM,IAAI,wBAAmB,CAAC,UAAU,EAAE,cACtC;;AAEN,QAAO,cAAc,UAAU,KAAK,YAAU,CAAC,GAAG,UAAU;AAC5D,QAAI,WAAW,+BAAqB,CAAC,WAAW;AAChD,QAAa,aAAT,QAAQ,KAAI,GAAG;AACjB,UAAI,WAAW,UAAQ,EAAE;AACvB,mBAAM,IAAI,wBAAmB,CACzB,UAAU,EAAE,cAAc;;AAEhC,UAAI,QAAQ,KAAI,WAAW,OAAO,EAAE;AAClC,mBAAM,IAAI,wBAAmB,CAAC,UAAU,EAAE,cACtC;;AAEN,YAAgB,aAAT,QAAQ,IAAG,WAAW,OAAO;AACpC,UAAI,cAAc,WAAW,aAAW,CAAC,QAAQ;AACjD,UAAI,UAAU,AAAK,OAAE,WAAW,gBAAc,CAAC,aAAW,CAAC,GAAG;AAC9D,UAAI,AAAY,WAAD,IAAI,MAAQ,AAAY,WAAD,IAAI,KAAM;AAE9C,eAAO,GAAG,YAAI,WAAW,QAAC,QAAQ,OAAM,OAAO;;AAEjD,iBAAM,IAAI,wBAAmB,CACzB,UAAU,EAAE,cAAc,0CAAiC,OAAO;;AAExE,UAAO,YAAW;EACpB","file":"util.ddc.js"}');
  // Exports:
  return {
    src__util: src__util
  };
});

//# sourceMappingURL=util.ddc.js.map
