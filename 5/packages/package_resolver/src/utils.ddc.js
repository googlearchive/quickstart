define(['dart_sdk', 'packages/http/http', 'packages/package_config/packages_file', 'packages/http/src/base_client'], function(dart_sdk, http, packages_file, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const isolate = dart_sdk.isolate;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http$ = http.http;
  const packages_file$ = packages_file.packages_file;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const src__utils = Object.create(_root);
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $toList = dartx.toList;
  const $add = dartx.add;
  let MapOfString$Uri = () => (MapOfString$Uri = dart.constFn(core.Map$(core.String, core.Uri)))();
  let FutureOfMapOfString$Uri = () => (FutureOfMapOfString$Uri = dart.constFn(async.Future$(MapOfString$Uri())))();
  let Uri__ToFutureOfMapOfString$Uri = () => (Uri__ToFutureOfMapOfString$Uri = dart.constFn(dart.fnType(FutureOfMapOfString$Uri(), [core.Uri], {client: src__client.Client})))();
  let dynamicAndStringToUri = () => (dynamicAndStringToUri = dart.constFn(dart.fnType(core.Uri, [dart.dynamic, core.String])))();
  let UriToUri = () => (UriToUri = dart.constFn(dart.fnType(core.Uri, [core.Uri])))();
  src__utils.loadConfigMap = function(uri, opts) {
    return async.async(MapOfString$Uri(), function* loadConfigMap() {
      let client = opts && 'client' in opts ? opts.client : null;
      let resolved = core.Uri.base.resolveUri(uri);
      let text = null;
      if (resolved.scheme === 'http') {
        text = (yield client == null ? http$.read(resolved) : client.read(resolved));
      } else if (resolved.scheme === 'file') {
        let path = resolved.toFilePath({windows: io.Platform.isWindows});
        text = (yield io.File.new(path).readAsString());
      } else if (resolved.scheme === 'data') {
        text = resolved.data.contentAsString();
      } else if (resolved.scheme === 'package') {
        return src__utils.loadConfigMap(yield isolate.Isolate.resolvePackageUri(uri), {client: client});
      } else {
        dart.throw(new core.UnsupportedError.new(dart.str`PackageInfo.loadConfig doesn't support URI scheme "${uri.scheme}:".`));
      }
      return packages_file$.parse(convert.UTF8.encode(core.String._check(text)), resolved);
    });
  };
  dart.fn(src__utils.loadConfigMap, Uri__ToFutureOfMapOfString$Uri());
  src__utils.asPackageUri = function(uri, name) {
    uri = src__utils.asUri(uri, name);
    if (!dart.equals(dart.dload(uri, 'scheme'), 'package')) {
      dart.throw(new core.FormatException.new("Can only resolve a package: URI.", dart.toString(uri), 0));
    } else if (dart.dtest(dart.dload(dart.dload(uri, 'pathSegments'), 'isEmpty'))) {
      dart.throw(new core.FormatException.new("Expected package name.", dart.toString(uri), "package:".length));
    }
    return core.Uri._check(uri);
  };
  dart.fn(src__utils.asPackageUri, dynamicAndStringToUri());
  src__utils.asUri = function(uri, name) {
    if (core.Uri.is(uri)) return uri;
    if (typeof uri == 'string') return core.Uri.parse(uri);
    dart.throw(new core.ArgumentError.value(uri, name, "Must be a String or a Uri."));
  };
  dart.fn(src__utils.asUri, dynamicAndStringToUri());
  src__utils.ensureTrailingSlash = function(uri) {
    if (dart.test(uri.pathSegments[$isEmpty])) return uri.replace({path: "/"});
    if (uri.pathSegments[$last][$isEmpty]) return uri;
    return uri.replace({pathSegments: (() => {
        let _ = uri.pathSegments[$toList]();
        _[$add]("");
        return _;
      })()});
  };
  dart.fn(src__utils.ensureTrailingSlash, UriToUri());
  dart.trackLibraries("packages/package_resolver/src/utils.ddc", {
    "package:package_resolver/src/utils.dart": src__utils
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;sCAmBuC,GAAO;AAAwB;UAAT;AAC3D,UAAI,WAAW,QAAG,KAAK,WAAW,CAAC,GAAG;AAEtC,UAAI;AACJ,UAAI,QAAQ,OAAO,KAAI,QAAQ;AAC7B,YAAI,IAAG,MAAO,MAAM,IAAI,OAClB,AAAK,UAAI,CAAC,QAAQ,IAClB,MAAM,KAAK,CAAC,QAAQ;YACrB,KAAI,QAAQ,OAAO,KAAI,QAAQ;AACpC,YAAI,OAAO,QAAQ,WAAW,WAAU,WAAQ,UAAU;AAC1D,YAAI,IAAG,MAAM,AAAI,WAAI,CAAC,IAAI,cAAc;YACnC,KAAI,QAAQ,OAAO,KAAI,QAAQ;AACpC,YAAI,GAAG,QAAQ,KAAK,gBAAgB;YAC/B,KAAI,QAAQ,OAAO,KAAI,WAAW;AACvC,cAAO,yBAAa,CAAC,MAAM,eAAO,kBAAkB,CAAC,GAAG,YAC5C,MAAM;aACb;AACL,mBAAM,IAAI,yBAAgB,CACtB,8DAAuD,GAAG,OAAO;;AAGvE,YAAO,AAAc,qBAAK,CAAC,YAAI,OAAO,oBAAC,IAAI,IAAG,QAAQ;IACxD;;;qCASiB,GAAG,EAAE,IAAW;AAC/B,OAAG,GAAG,gBAAK,CAAC,GAAG,EAAE,IAAI;AAErB,gCAAI,GAAG,aAAW,YAAW;AAC3B,iBAAM,IAAI,wBAAe,CAAC,kDACtB,GAAG,GAAa;UACf,sCAAI,GAAG,gCAAuB;AACnC,iBAAM,IAAI,wBAAe,CAAC,wCACtB,GAAG,GAAa,iBAAiB;;AAGvC,2BAAO,GAAG;EACZ;;8BAMU,GAAG,EAAE,IAAW;AACxB,oBAAI,GAAG,GAAS,MAAO,IAAG;AAC1B,eAAI,GAAG,cAAY,MAAO,SAAG,MAAM,CAAC,GAAG;AAEvC,eAAM,IAAI,wBAAmB,CAAC,GAAG,EAAE,IAAI,EAAE;EAC3C;;4CAKwB,GAAO;AAC7B,kBAAI,GAAG,aAAa,UAAQ,GAAE,MAAO,IAAG,QAAQ,QAAO;AACvD,QAAI,GAAG,aAAa,OAAK,UAAQ,EAAE,MAAO,IAAG;AAC7C,UAAO,IAAG,QAAQ;gBAAe,GAAG,aAAa,SAAO;gBAAQ;;;EAClE","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: src__utils
  };
});

//# sourceMappingURL=utils.ddc.js.map
