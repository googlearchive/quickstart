define(['dart_sdk', 'packages/package_resolver/src/utils', 'packages/path/path', 'packages/package_config/packages_file', 'packages/collection/src/functions', 'packages/http/src/base_client'], function(dart_sdk, utils, path, packages_file, functions, base_client) {
  'use strict';
  const core = dart_sdk.core;
  const isolate = dart_sdk.isolate;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const path$ = path.path;
  const packages_file$ = packages_file.packages_file;
  const src__functions = functions.src__functions;
  const src__client = base_client.src__client;
  const _root = Object.create(null);
  const src__no_package_resolver = Object.create(_root);
  const src__current_isolate_resolver = Object.create(_root);
  const src__package_config_resolver = Object.create(_root);
  const src__async_package_resolver = Object.create(_root);
  const src__package_root_resolver = Object.create(_root);
  const src__package_resolver = Object.create(_root);
  const src__sync_package_resolver = Object.create(_root);
  const $_get = dartx._get;
  const $first = dartx.first;
  const $toList = dartx.toList;
  const $removeLast = dartx.removeLast;
  const $length = dartx.length;
  const $skip = dartx.skip;
  const $addAll = dartx.addAll;
  const $keys = dartx.keys;
  const $contains = dartx.contains;
  let MapOfString$Uri = () => (MapOfString$Uri = dart.constFn(core.Map$(core.String, core.Uri)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let dynamicAnddynamicToUri = () => (dynamicAnddynamicToUri = dart.constFn(dart.fnType(core.Uri, [dart.dynamic, dart.dynamic])))();
  let UnmodifiableMapViewOfString$Uri = () => (UnmodifiableMapViewOfString$Uri = dart.constFn(collection.UnmodifiableMapView$(core.String, core.Uri)))();
  src__no_package_resolver.NoPackageResolver = class NoPackageResolver extends core.Object {
    get packageConfigMap() {
      return null;
    }
    get packageConfigUri() {
      return null;
    }
    get packageRoot() {
      return null;
    }
    get processArgument() {
      return null;
    }
    get asAsync() {
      return new src__async_package_resolver.AsyncPackageResolver.new(this);
    }
    resolveUri(packageUri) {
      src__utils.asPackageUri(packageUri, "packageUri");
      return null;
    }
    urlFor(package$, path) {
      if (path === void 0) path = null;
      return null;
    }
    packageUriFor(url) {
      src__utils.asUri(url, "url");
      return null;
    }
    packagePath(package$) {
      return null;
    }
  };
  (src__no_package_resolver.NoPackageResolver.new = function() {
  }).prototype = src__no_package_resolver.NoPackageResolver.prototype;
  dart.addTypeTests(src__no_package_resolver.NoPackageResolver);
  src__no_package_resolver.NoPackageResolver[dart.implements] = () => [src__sync_package_resolver.SyncPackageResolver];
  dart.setMethodSignature(src__no_package_resolver.NoPackageResolver, () => ({
    __proto__: dart.getMethods(src__no_package_resolver.NoPackageResolver.__proto__),
    resolveUri: dart.fnType(core.Uri, [dart.dynamic]),
    urlFor: dart.fnType(core.Uri, [core.String], [core.String]),
    packageUriFor: dart.fnType(core.Uri, [dart.dynamic]),
    packagePath: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(src__no_package_resolver.NoPackageResolver, () => ({
    __proto__: dart.getGetters(src__no_package_resolver.NoPackageResolver.__proto__),
    packageConfigMap: dart.fnType(core.Map$(core.String, core.Uri), []),
    packageConfigUri: dart.fnType(core.Uri, []),
    packageRoot: dart.fnType(core.Uri, []),
    processArgument: dart.fnType(core.String, []),
    asAsync: dart.fnType(src__package_resolver.PackageResolver, [])
  }));
  const _packageConfigMap = Symbol('_packageConfigMap');
  src__current_isolate_resolver.CurrentIsolateResolver = class CurrentIsolateResolver extends core.Object {
    get packageConfigMap() {
      return async.async(MapOfString$Uri(), (function* packageConfigMap() {
        if (this[_packageConfigMap] != null) return this[_packageConfigMap];
        let url = (yield isolate.Isolate.packageConfig);
        if (url == null) return null;
        return yield src__utils.loadConfigMap(url);
      }).bind(this));
    }
    get packageConfigUri() {
      return isolate.Isolate.packageConfig;
    }
    get packageRoot() {
      return isolate.Isolate.packageRoot;
    }
    get asSync() {
      return async.async(src__sync_package_resolver.SyncPackageResolver, (function* asSync() {
        let root = (yield this.packageRoot);
        if (root != null) return new src__package_root_resolver.PackageRootResolver.new(root);
        let map = (yield this.packageConfigMap);
        if (map == null) return src__sync_package_resolver.SyncPackageResolver.none;
        return new src__package_config_resolver.PackageConfigResolver.new(map, {uri: (yield this.packageConfigUri)});
      }).bind(this));
    }
    get processArgument() {
      return async.async(core.String, (function* processArgument() {
        let configUri = (yield this.packageConfigUri);
        if (configUri != null) return dart.str`--packages=${configUri}`;
        let root = (yield this.packageRoot);
        if (root != null) return dart.str`--package-root=${root}`;
        return null;
      }).bind(this));
    }
    resolveUri(packageUri) {
      return isolate.Isolate.resolvePackageUri(src__utils.asPackageUri(packageUri, "packageUri"));
    }
    urlFor(package$, path) {
      if (path === void 0) path = null;
      return isolate.Isolate.resolvePackageUri(core.Uri.parse(dart.str`package:${package$}/${path != null ? path : ''}`));
    }
    packageUriFor(url) {
      return async.async(core.Uri, (function* packageUriFor() {
        return (yield this.asSync).packageUriFor(url);
      }).bind(this));
    }
    packagePath(package$) {
      return async.async(core.String, (function* packagePath() {
        let root = (yield this.packageRoot);
        if (root != null) return new src__package_root_resolver.PackageRootResolver.new(root).packagePath(package$);
        return path$.dirname(path$.fromUri(yield this.urlFor(package$)));
      }).bind(this));
    }
  };
  (src__current_isolate_resolver.CurrentIsolateResolver.new = function() {
    this[_packageConfigMap] = null;
  }).prototype = src__current_isolate_resolver.CurrentIsolateResolver.prototype;
  dart.addTypeTests(src__current_isolate_resolver.CurrentIsolateResolver);
  src__current_isolate_resolver.CurrentIsolateResolver[dart.implements] = () => [src__package_resolver.PackageResolver];
  dart.setMethodSignature(src__current_isolate_resolver.CurrentIsolateResolver, () => ({
    __proto__: dart.getMethods(src__current_isolate_resolver.CurrentIsolateResolver.__proto__),
    resolveUri: dart.fnType(async.Future$(core.Uri), [dart.dynamic]),
    urlFor: dart.fnType(async.Future$(core.Uri), [core.String], [core.String]),
    packageUriFor: dart.fnType(async.Future$(core.Uri), [dart.dynamic]),
    packagePath: dart.fnType(async.Future$(core.String), [core.String])
  }));
  dart.setGetterSignature(src__current_isolate_resolver.CurrentIsolateResolver, () => ({
    __proto__: dart.getGetters(src__current_isolate_resolver.CurrentIsolateResolver.__proto__),
    packageConfigMap: dart.fnType(async.Future$(core.Map$(core.String, core.Uri)), []),
    packageConfigUri: dart.fnType(async.Future$(core.Uri), []),
    packageRoot: dart.fnType(async.Future$(core.Uri), []),
    asSync: dart.fnType(async.Future$(src__sync_package_resolver.SyncPackageResolver), []),
    processArgument: dart.fnType(async.Future$(core.String), [])
  }));
  dart.setFieldSignature(src__current_isolate_resolver.CurrentIsolateResolver, () => ({
    __proto__: dart.getFields(src__current_isolate_resolver.CurrentIsolateResolver.__proto__),
    [_packageConfigMap]: dart.fieldType(MapOfString$Uri())
  }));
  const _uri = Symbol('_uri');
  src__package_config_resolver.PackageConfigResolver = class PackageConfigResolver extends core.Object {
    get packageRoot() {
      return this[packageRoot];
    }
    set packageRoot(value) {
      super.packageRoot = value;
    }
    get packageConfigMap() {
      return this[packageConfigMap$];
    }
    set packageConfigMap(value) {
      super.packageConfigMap = value;
    }
    get packageConfigUri() {
      if (this[_uri] != null) return this[_uri];
      let buffer = new core.StringBuffer.new();
      packages_file$.write(buffer, this.packageConfigMap, {comment: ""});
      this[_uri] = core.UriData.fromString(buffer.toString(), {parameters: new (IdentityMapOfString$String()).from(["charset", "utf-8"])}).uri;
      return this[_uri];
    }
    get asAsync() {
      return new src__async_package_resolver.AsyncPackageResolver.new(this);
    }
    get processArgument() {
      return dart.str`--packages=${this.packageConfigUri}`;
    }
    static _normalizeMap(map) {
      return new (UnmodifiableMapViewOfString$Uri()).new(src__functions.mapMap(core.String, core.Uri, core.String, core.Uri, map, {value: dart.fn((_, uri) => src__utils.ensureTrailingSlash(core.Uri._check(uri)), dynamicAnddynamicToUri())}));
    }
    resolveUri(packageUri) {
      let uri = src__utils.asPackageUri(packageUri, "packageUri");
      let baseUri = this.packageConfigMap[$_get](uri.pathSegments[$first]);
      if (baseUri == null) return null;
      let segments = baseUri.pathSegments[$toList]();
      segments[$removeLast]();
      if (uri.pathSegments[$length] === 1) return null;
      segments[$addAll](uri.pathSegments[$skip](1));
      return baseUri.replace({pathSegments: segments});
    }
    urlFor(package$, path) {
      if (path === void 0) path = null;
      let baseUri = this.packageConfigMap[$_get](package$);
      if (baseUri == null) return null;
      if (path == null) return baseUri;
      return baseUri.resolve(path);
    }
    packageUriFor(url) {
      url = dart.toString(src__utils.asUri(url, "url"));
      let nested = path$.url.join(core.String._check(url), "_");
      for (let package$ of this.packageConfigMap[$keys]) {
        let base = dart.toString(this.packageConfigMap[$_get](package$));
        if (!dart.test(path$.url.isWithin(base, nested))) continue;
        let relative = path$.url.relative(core.String._check(url), {from: base});
        if (relative === '.') relative = '';
        return core.Uri.parse(dart.str`package:${package$}/${relative}`);
      }
      return null;
    }
    packagePath(package$) {
      let lib = this.packageConfigMap[$_get](package$);
      if (lib == null) return null;
      if (lib.scheme !== 'file') return null;
      return path$.dirname(path$.fromUri(lib));
    }
  };
  (src__package_config_resolver.PackageConfigResolver.new = function(packageConfigMap, opts) {
    let uri = opts && 'uri' in opts ? opts.uri : null;
    this[packageRoot] = null;
    this[packageConfigMap$] = src__package_config_resolver.PackageConfigResolver._normalizeMap(packageConfigMap);
    this[_uri] = uri == null ? null : src__utils.asUri(uri, "uri");
  }).prototype = src__package_config_resolver.PackageConfigResolver.prototype;
  dart.addTypeTests(src__package_config_resolver.PackageConfigResolver);
  const packageRoot = Symbol("PackageConfigResolver.packageRoot");
  const packageConfigMap$ = Symbol("PackageConfigResolver.packageConfigMap");
  src__package_config_resolver.PackageConfigResolver[dart.implements] = () => [src__sync_package_resolver.SyncPackageResolver];
  dart.setMethodSignature(src__package_config_resolver.PackageConfigResolver, () => ({
    __proto__: dart.getMethods(src__package_config_resolver.PackageConfigResolver.__proto__),
    resolveUri: dart.fnType(core.Uri, [dart.dynamic]),
    urlFor: dart.fnType(core.Uri, [core.String], [core.String]),
    packageUriFor: dart.fnType(core.Uri, [dart.dynamic]),
    packagePath: dart.fnType(core.String, [core.String])
  }));
  dart.setStaticMethodSignature(src__package_config_resolver.PackageConfigResolver, () => ({_normalizeMap: dart.fnType(core.Map$(core.String, core.Uri), [MapOfString$Uri()])}));
  dart.setGetterSignature(src__package_config_resolver.PackageConfigResolver, () => ({
    __proto__: dart.getGetters(src__package_config_resolver.PackageConfigResolver.__proto__),
    packageConfigUri: dart.fnType(core.Uri, []),
    asAsync: dart.fnType(src__package_resolver.PackageResolver, []),
    processArgument: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__package_config_resolver.PackageConfigResolver, () => ({
    __proto__: dart.getFields(src__package_config_resolver.PackageConfigResolver.__proto__),
    packageRoot: dart.finalFieldType(core.Uri),
    packageConfigMap: dart.finalFieldType(MapOfString$Uri()),
    [_uri]: dart.fieldType(core.Uri)
  }));
  const _inner = Symbol('_inner');
  src__async_package_resolver.AsyncPackageResolver = class AsyncPackageResolver extends core.Object {
    get packageConfigMap() {
      return async.async(MapOfString$Uri(), (function* packageConfigMap() {
        return this[_inner].packageConfigMap;
      }).bind(this));
    }
    get packageConfigUri() {
      return async.async(core.Uri, (function* packageConfigUri() {
        return this[_inner].packageConfigUri;
      }).bind(this));
    }
    get packageRoot() {
      return async.async(core.Uri, (function* packageRoot() {
        return this[_inner].packageRoot;
      }).bind(this));
    }
    get asSync() {
      return async.async(src__sync_package_resolver.SyncPackageResolver, (function* asSync() {
        return this[_inner];
      }).bind(this));
    }
    get processArgument() {
      return async.async(core.String, (function* processArgument() {
        return this[_inner].processArgument;
      }).bind(this));
    }
    resolveUri(packageUri) {
      return async.async(core.Uri, (function* resolveUri() {
        return this[_inner].resolveUri(packageUri);
      }).bind(this));
    }
    urlFor(package$, path) {
      return async.async(core.Uri, (function* urlFor() {
        if (path === void 0) path = null;
        return this[_inner].urlFor(package$, path);
      }).bind(this));
    }
    packageUriFor(url) {
      return async.async(core.Uri, (function* packageUriFor() {
        return this[_inner].packageUriFor(url);
      }).bind(this));
    }
    packagePath(package$) {
      return async.async(core.String, (function* packagePath() {
        return this[_inner].packagePath(package$);
      }).bind(this));
    }
  };
  (src__async_package_resolver.AsyncPackageResolver.new = function(inner) {
    this[_inner] = inner;
  }).prototype = src__async_package_resolver.AsyncPackageResolver.prototype;
  dart.addTypeTests(src__async_package_resolver.AsyncPackageResolver);
  src__async_package_resolver.AsyncPackageResolver[dart.implements] = () => [src__package_resolver.PackageResolver];
  dart.setMethodSignature(src__async_package_resolver.AsyncPackageResolver, () => ({
    __proto__: dart.getMethods(src__async_package_resolver.AsyncPackageResolver.__proto__),
    resolveUri: dart.fnType(async.Future$(core.Uri), [dart.dynamic]),
    urlFor: dart.fnType(async.Future$(core.Uri), [core.String], [core.String]),
    packageUriFor: dart.fnType(async.Future$(core.Uri), [dart.dynamic]),
    packagePath: dart.fnType(async.Future$(core.String), [core.String])
  }));
  dart.setGetterSignature(src__async_package_resolver.AsyncPackageResolver, () => ({
    __proto__: dart.getGetters(src__async_package_resolver.AsyncPackageResolver.__proto__),
    packageConfigMap: dart.fnType(async.Future$(core.Map$(core.String, core.Uri)), []),
    packageConfigUri: dart.fnType(async.Future$(core.Uri), []),
    packageRoot: dart.fnType(async.Future$(core.Uri), []),
    asSync: dart.fnType(async.Future$(src__sync_package_resolver.SyncPackageResolver), []),
    processArgument: dart.fnType(async.Future$(core.String), [])
  }));
  dart.setFieldSignature(src__async_package_resolver.AsyncPackageResolver, () => ({
    __proto__: dart.getFields(src__async_package_resolver.AsyncPackageResolver.__proto__),
    [_inner]: dart.finalFieldType(src__sync_package_resolver.SyncPackageResolver)
  }));
  src__package_root_resolver.PackageRootResolver = class PackageRootResolver extends core.Object {
    get packageConfigMap() {
      return this[packageConfigMap];
    }
    set packageConfigMap(value) {
      super.packageConfigMap = value;
    }
    get packageConfigUri() {
      return this[packageConfigUri];
    }
    set packageConfigUri(value) {
      super.packageConfigUri = value;
    }
    get packageRoot() {
      return this[packageRoot$];
    }
    set packageRoot(value) {
      super.packageRoot = value;
    }
    get asAsync() {
      return new src__async_package_resolver.AsyncPackageResolver.new(this);
    }
    get processArgument() {
      return dart.str`--package-root=${this.packageRoot}`;
    }
    resolveUri(packageUri) {
      packageUri = src__utils.asPackageUri(packageUri, "packageUri");
      if (dart.equals(dart.dload(dart.dload(packageUri, 'pathSegments'), 'length'), 1)) return null;
      return this.packageRoot.resolve(core.String._check(dart.dload(packageUri, 'path')));
    }
    urlFor(package$, path) {
      if (path === void 0) path = null;
      let result = this.packageRoot.resolve(dart.str`${package$}/`);
      return path == null ? result : result.resolve(path);
    }
    packageUriFor(url) {
      let packageRootString = dart.toString(this.packageRoot);
      url = dart.toString(src__utils.asUri(url, "url"));
      if (!dart.test(path$.url.isWithin(packageRootString, core.String._check(url)))) return null;
      let relative = path$.url.relative(core.String._check(url), {from: packageRootString});
      if (!relative[$contains]("/")) {
        relative = dart.notNull(relative) + "/";
      }
      return core.Uri.parse(dart.str`package:${relative}`);
    }
    packagePath(package$) {
      if (this.packageRoot.scheme !== 'file') return null;
      let libLink = path$.join(path$.fromUri(this.packageRoot), package$);
      if (!dart.test(io.Link.new(libLink).existsSync())) return null;
      return path$.dirname(io.Link.new(libLink).resolveSymbolicLinksSync());
    }
  };
  (src__package_root_resolver.PackageRootResolver.new = function(packageRoot) {
    this[packageConfigMap] = null;
    this[packageConfigUri] = null;
    this[packageRoot$] = src__utils.ensureTrailingSlash(src__utils.asUri(packageRoot, "packageRoot"));
  }).prototype = src__package_root_resolver.PackageRootResolver.prototype;
  dart.addTypeTests(src__package_root_resolver.PackageRootResolver);
  const packageConfigMap = Symbol("PackageRootResolver.packageConfigMap");
  const packageConfigUri = Symbol("PackageRootResolver.packageConfigUri");
  const packageRoot$ = Symbol("PackageRootResolver.packageRoot");
  src__package_root_resolver.PackageRootResolver[dart.implements] = () => [src__sync_package_resolver.SyncPackageResolver];
  dart.setMethodSignature(src__package_root_resolver.PackageRootResolver, () => ({
    __proto__: dart.getMethods(src__package_root_resolver.PackageRootResolver.__proto__),
    resolveUri: dart.fnType(core.Uri, [dart.dynamic]),
    urlFor: dart.fnType(core.Uri, [core.String], [core.String]),
    packageUriFor: dart.fnType(core.Uri, [dart.dynamic]),
    packagePath: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(src__package_root_resolver.PackageRootResolver, () => ({
    __proto__: dart.getGetters(src__package_root_resolver.PackageRootResolver.__proto__),
    asAsync: dart.fnType(src__package_resolver.PackageResolver, []),
    processArgument: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__package_root_resolver.PackageRootResolver, () => ({
    __proto__: dart.getFields(src__package_root_resolver.PackageRootResolver.__proto__),
    packageConfigMap: dart.finalFieldType(MapOfString$Uri()),
    packageConfigUri: dart.finalFieldType(core.Uri),
    packageRoot: dart.finalFieldType(core.Uri)
  }));
  src__package_resolver.PackageResolver = class PackageResolver extends core.Object {
    static loadConfig(uri, opts) {
      return async.async(src__package_resolver.PackageResolver, function* loadConfig() {
        let client = opts && 'client' in opts ? opts.client : null;
        let resolver = (yield src__sync_package_resolver.SyncPackageResolver.loadConfig(uri, {client: client}));
        return resolver.asAsync;
      });
    }
    static config(packageConfigMap, opts) {
      let uri = opts && 'uri' in opts ? opts.uri : null;
      return new src__package_config_resolver.PackageConfigResolver.new(packageConfigMap, {uri: uri}).asAsync;
    }
    static root(packageRoot) {
      return new src__package_root_resolver.PackageRootResolver.new(packageRoot).asAsync;
    }
  };
  (src__package_resolver.PackageResolver[dart.mixinNew] = function() {
  }).prototype = src__package_resolver.PackageResolver.prototype;
  dart.addTypeTests(src__package_resolver.PackageResolver);
  dart.setStaticMethodSignature(src__package_resolver.PackageResolver, () => ({loadConfig: dart.fnType(async.Future$(src__package_resolver.PackageResolver), [dart.dynamic], {client: src__client.Client})}));
  dart.defineLazy(src__package_resolver.PackageResolver, {
    /*src__package_resolver.PackageResolver.current*/get current() {
      return new src__current_isolate_resolver.CurrentIsolateResolver.new();
    },
    /*src__package_resolver.PackageResolver.none*/get none() {
      return src__sync_package_resolver.SyncPackageResolver.none.asAsync;
    }
  });
  src__sync_package_resolver.SyncPackageResolver = class SyncPackageResolver extends core.Object {
    static loadConfig(uri, opts) {
      return async.async(src__sync_package_resolver.SyncPackageResolver, function* loadConfig() {
        let client = opts && 'client' in opts ? opts.client : null;
        uri = src__utils.asUri(uri, "uri");
        return src__sync_package_resolver.SyncPackageResolver.config(yield src__utils.loadConfigMap(core.Uri._check(uri), {client: client}), {uri: uri});
      });
    }
    static config(packageConfigMap, opts) {
      return new src__package_config_resolver.PackageConfigResolver.new(packageConfigMap, opts);
    }
    static root(packageRoot) {
      return new src__package_root_resolver.PackageRootResolver.new(packageRoot);
    }
  };
  (src__sync_package_resolver.SyncPackageResolver[dart.mixinNew] = function() {
  }).prototype = src__sync_package_resolver.SyncPackageResolver.prototype;
  dart.addTypeTests(src__sync_package_resolver.SyncPackageResolver);
  dart.setStaticMethodSignature(src__sync_package_resolver.SyncPackageResolver, () => ({loadConfig: dart.fnType(async.Future$(src__sync_package_resolver.SyncPackageResolver), [dart.dynamic], {client: src__client.Client})}));
  dart.defineLazy(src__sync_package_resolver.SyncPackageResolver, {
    /*src__sync_package_resolver.SyncPackageResolver.current*/get current() {
      return src__package_resolver.PackageResolver.current.asSync;
    },
    /*src__sync_package_resolver.SyncPackageResolver.none*/get none() {
      return new src__no_package_resolver.NoPackageResolver.new();
    }
  });
  dart.trackLibraries("packages/package_resolver/src/async_package_resolver.ddc", {
    "package:package_resolver/src/no_package_resolver.dart": src__no_package_resolver,
    "package:package_resolver/src/current_isolate_resolver.dart": src__current_isolate_resolver,
    "package:package_resolver/src/package_config_resolver.dart": src__package_config_resolver,
    "package:package_resolver/src/async_package_resolver.dart": src__async_package_resolver,
    "package:package_resolver/src/package_root_resolver.dart": src__package_root_resolver,
    "package:package_resolver/src/package_resolver.dart": src__package_resolver,
    "package:package_resolver/src/sync_package_resolver.dart": src__sync_package_resolver
  }, '{"version":3,"sourceRoot":"","sources":["package_root_resolver.dart","no_package_resolver.dart","current_isolate_resolver.dart","package_config_resolver.dart","async_package_resolver.dart","package_resolver.dart","sync_package_resolver.dart"],"names":[],"mappings":"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","file":"async_package_resolver.ddc.js"}');
  // Exports:
  return {
    src__no_package_resolver: src__no_package_resolver,
    src__current_isolate_resolver: src__current_isolate_resolver,
    src__package_config_resolver: src__package_config_resolver,
    src__async_package_resolver: src__async_package_resolver,
    src__package_root_resolver: src__package_root_resolver,
    src__package_resolver: src__package_resolver,
    src__sync_package_resolver: src__sync_package_resolver
  };
});

//# sourceMappingURL=async_package_resolver.ddc.js.map
