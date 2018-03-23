define(['dart_sdk', 'packages/source_maps/builder', 'packages/source_map_stack_trace/source_map_stack_trace', 'packages/package_resolver/src/async_package_resolver', 'packages/collection/src/functions'], function(dart_sdk, builder, source_map_stack_trace, async_package_resolver, functions) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const parser = builder.parser;
  const source_map_stack_trace$ = source_map_stack_trace.source_map_stack_trace;
  const src__sync_package_resolver = async_package_resolver.src__sync_package_resolver;
  const src__functions = functions.src__functions;
  const _root = Object.create(null);
  const src__util__stack_trace_mapper = Object.create(_root);
  const $_get = dartx._get;
  const $isNotEmpty = dartx.isNotEmpty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let dynamicAnddynamicToString = () => (dynamicAnddynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic, dart.dynamic])))();
  let dynamicAnddynamicToUri = () => (dynamicAnddynamicToUri = dart.constFn(dart.fnType(core.Uri, [dart.dynamic, dart.dynamic])))();
  let MapOfString$Uri = () => (MapOfString$Uri = dart.constFn(core.Map$(core.String, core.Uri)))();
  const _mapContents = Symbol('_mapContents');
  const _mapUrl = Symbol('_mapUrl');
  const _packageResolver = Symbol('_packageResolver');
  const _sdkRoot = Symbol('_sdkRoot');
  const _mapping = Symbol('_mapping');
  src__util__stack_trace_mapper.StackTraceMapper = class StackTraceMapper extends core.Object {
    mapStackTrace(trace) {
      let t = this[_mapping];
      t == null ? this[_mapping] = parser.parseExtended(this[_mapContents], {mapUrl: this[_mapUrl]}) : t;
      return source_map_stack_trace$.mapStackTrace(this[_mapping], trace, {packageResolver: this[_packageResolver], sdkRoot: this[_sdkRoot]});
    }
    serialize() {
      return new (IdentityMapOfString$dynamic()).from(['mapContents', this[_mapContents], 'sdkRoot', this[_sdkRoot] == null ? null : dart.toString(this[_sdkRoot]), 'packageConfigMap', src__util__stack_trace_mapper.StackTraceMapper._serializePackageConfigMap(this[_packageResolver].packageConfigMap), 'packageRoot', (() => {
          let t = this[_packageResolver].packageRoot;
          return t == null ? null : dart.toString(t);
        })(), 'mapUrl', this[_mapUrl] == null ? null : dart.toString(this[_mapUrl])]);
    }
    static deserialize(serialized) {
      if (serialized == null) return null;
      let l = core.String.as(serialized[$_get]('packageRoot'));
      let packageRoot = l != null ? l : '';
      return new src__util__stack_trace_mapper.StackTraceMapper.new(core.String._check(serialized[$_get]('mapContents')), {sdkRoot: core.Uri.parse(core.String._check(serialized[$_get]('sdkRoot'))), packageResolver: packageRoot[$isNotEmpty] ? src__sync_package_resolver.SyncPackageResolver.root(core.Uri.parse(core.String._check(serialized[$_get]('packageRoot')))) : src__sync_package_resolver.SyncPackageResolver.config(src__util__stack_trace_mapper.StackTraceMapper._deserializePackageConfigMap(MapOfString$String()._check(serialized[$_get]('packageConfigMap')))), mapUrl: core.Uri.parse(core.String._check(serialized[$_get]('mapUrl')))});
    }
    static _serializePackageConfigMap(packageConfigMap) {
      if (packageConfigMap == null) return null;
      return src__functions.mapMap(core.String, core.Uri, core.String, core.String, packageConfigMap, {value: dart.fn((_, value) => dart.str`${value}`, dynamicAnddynamicToString())});
    }
    static _deserializePackageConfigMap(serialized) {
      if (serialized == null) return null;
      return src__functions.mapMap(core.String, core.String, core.String, core.Uri, serialized, {value: dart.fn((_, value) => core.Uri.parse(core.String._check(value)), dynamicAnddynamicToUri())});
    }
  };
  (src__util__stack_trace_mapper.StackTraceMapper.new = function(mapContents, opts) {
    let mapUrl = opts && 'mapUrl' in opts ? opts.mapUrl : null;
    let packageResolver = opts && 'packageResolver' in opts ? opts.packageResolver : null;
    let sdkRoot = opts && 'sdkRoot' in opts ? opts.sdkRoot : null;
    this[_mapping] = null;
    this[_mapContents] = mapContents;
    this[_mapUrl] = mapUrl;
    this[_packageResolver] = packageResolver;
    this[_sdkRoot] = sdkRoot;
  }).prototype = src__util__stack_trace_mapper.StackTraceMapper.prototype;
  dart.addTypeTests(src__util__stack_trace_mapper.StackTraceMapper);
  dart.setMethodSignature(src__util__stack_trace_mapper.StackTraceMapper, () => ({
    __proto__: dart.getMethods(src__util__stack_trace_mapper.StackTraceMapper.__proto__),
    mapStackTrace: dart.fnType(core.StackTrace, [core.StackTrace]),
    serialize: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setStaticMethodSignature(src__util__stack_trace_mapper.StackTraceMapper, () => ({
    deserialize: dart.fnType(src__util__stack_trace_mapper.StackTraceMapper, [core.Map]),
    _serializePackageConfigMap: dart.fnType(core.Map$(core.String, core.String), [MapOfString$Uri()]),
    _deserializePackageConfigMap: dart.fnType(core.Map$(core.String, core.Uri), [MapOfString$String()])
  }));
  dart.setFieldSignature(src__util__stack_trace_mapper.StackTraceMapper, () => ({
    __proto__: dart.getFields(src__util__stack_trace_mapper.StackTraceMapper.__proto__),
    [_mapping]: dart.fieldType(parser.Mapping),
    [_packageResolver]: dart.finalFieldType(src__sync_package_resolver.SyncPackageResolver),
    [_sdkRoot]: dart.finalFieldType(core.Uri),
    [_mapContents]: dart.finalFieldType(core.String),
    [_mapUrl]: dart.finalFieldType(core.Uri)
  }));
  dart.trackLibraries("packages/test/src/util/stack_trace_mapper.ddc", {
    "package:test/src/util/stack_trace_mapper.dart": src__util__stack_trace_mapper
  }, '{"version":3,"sourceRoot":"","sources":["stack_trace_mapper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;kBAmC2B,KAAgB;AACvC,4BAAQ;mCAAK,oBAAa,CAAC,kBAAY,WAAU,aAAO;AACxD,YAAO,AAAO,sCAAa,CAAC,cAAQ,EAAE,KAAK,oBACtB,sBAAgB,WAAW,cAAQ;IAC1D;;AAIE,YAAO,2CACL,eAAe,kBAAY,EAC3B,WAAW,cAAQ,gCAAR,cAAQ,GACnB,oBACI,yEAA0B,CAAC,sBAAgB,iBAAiB,GAChE;kBAAe,sBAAgB,YAAY;;cAC3C,UAAU,aAAO,gCAAP,aAAO;IAErB;uBAIoC,UAAc;AAChD,UAAI,UAAU,IAAI,MAAM,MAAO;AAC/B,6BAAqB,UAAU,QAAC;UAAzB,8BAAqD;AAC5D,YAAO,KAAI,kDAAgB,oBAAC,UAAU,QAAC,2BAC1B,QAAG,MAAM,oBAAC,UAAU,QAAC,+BACb,WAAW,aAAW,GACjC,AAAI,mDAAwB,CAAC,QAAG,MAAM,oBAAC,UAAU,QAAC,oBAClD,AAAI,qDAA0B,CAC5B,2EAA4B,6BAAC,UAAU,QAAC,gCACxC,QAAG,MAAM,oBAAC,UAAU,QAAC;IACnC;sCAKI,gBAAiC;AACnC,UAAI,gBAAgB,IAAI,MAAM,MAAO;AACrC,YAAO,sBAAM,kDAAC,gBAAgB,UAAS,SAAC,CAAC,EAAE,KAAK,KAAK,WAAE,KAAK;IAC9D;wCAKI,UAA8B;AAChC,UAAI,UAAU,IAAI,MAAM,MAAO;AAC/B,YAAO,sBAAM,kDAAC,UAAU,UAAS,SAAC,CAAC,EAAE,KAAK,KAAK,QAAG,MAAM,oBAAC,KAAK;IAChE;;iEArDsB,WAAY;QACzB;QAA4B;QAAqB;IAflD,cAAQ;IAcM,kBAAY,GAAZ,WAAY;IAE5B,aAAO,GAAG,MAAM;IAChB,sBAAgB,GAAG,eAAe;IAClC,cAAQ,GAAG,OAAO","file":"stack_trace_mapper.ddc.js"}');
  // Exports:
  return {
    src__util__stack_trace_mapper: src__util__stack_trace_mapper
  };
});

//# sourceMappingURL=stack_trace_mapper.ddc.js.map
