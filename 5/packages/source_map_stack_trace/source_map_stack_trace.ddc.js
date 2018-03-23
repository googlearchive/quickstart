define(['dart_sdk', 'packages/package_resolver/src/async_package_resolver', 'packages/stack_trace/src/chain', 'packages/path/path', 'packages/source_maps/builder'], function(dart_sdk, async_package_resolver, chain, path, builder) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__sync_package_resolver = async_package_resolver.src__sync_package_resolver;
  const src__chain = chain.src__chain;
  const src__trace = chain.src__trace;
  const src__frame = chain.src__frame;
  const path$ = path.path;
  const parser = builder.parser;
  const _root = Object.create(null);
  const source_map_stack_trace = Object.create(_root);
  const $map = dartx.map;
  const $where = dartx.where;
  const $keys = dartx.keys;
  const $_get = dartx._get;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $replaceAll = dartx.replaceAll;
  const $times = dartx['*'];
  let TraceToTrace = () => (TraceToTrace = dart.constFn(dart.fnType(src__trace.Trace, [src__trace.Trace])))();
  let FrameTobool = () => (FrameTobool = dart.constFn(dart.fnType(core.bool, [src__frame.Frame])))();
  let FrameToFrame = () => (FrameToFrame = dart.constFn(dart.fnType(src__frame.Frame, [src__frame.Frame])))();
  let MappingAndStackTrace__ToStackTrace = () => (MappingAndStackTrace__ToStackTrace = dart.constFn(dart.fnType(core.StackTrace, [parser.Mapping, core.StackTrace], {minified: core.bool, packageResolver: src__sync_package_resolver.SyncPackageResolver, sdkRoot: dart.dynamic, packageRoot: dart.dynamic})))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  source_map_stack_trace.mapStackTrace = function(sourceMap, stackTrace, opts) {
    let minified = opts && 'minified' in opts ? opts.minified : false;
    let packageResolver = opts && 'packageResolver' in opts ? opts.packageResolver : null;
    let sdkRoot = opts && 'sdkRoot' in opts ? opts.sdkRoot : null;
    let packageRoot = opts && 'packageRoot' in opts ? opts.packageRoot : null;
    if (packageRoot != null) {
      if (packageResolver != null) {
        dart.throw(new core.ArgumentError.new("packageResolver and packageRoot may not both be passed."));
      }
      packageResolver = src__sync_package_resolver.SyncPackageResolver.root(packageRoot);
    }
    if (src__chain.Chain.is(stackTrace)) {
      return new src__chain.Chain.new(stackTrace.traces[$map](src__trace.Trace, dart.fn(trace => src__trace.Trace.from(source_map_stack_trace.mapStackTrace(sourceMap, trace, {minified: minified, packageResolver: packageResolver, sdkRoot: sdkRoot})), TraceToTrace())));
    }
    if (sdkRoot != null && !(typeof sdkRoot == 'string') && !core.Uri.is(sdkRoot)) {
      dart.throw(new core.ArgumentError.new(dart.str`sdkRoot must be a String or a Uri, was "${sdkRoot}".`));
    }
    let sdkLib = sdkRoot == null ? null : dart.str`${sdkRoot}/lib`;
    let trace = src__trace.Trace.from(stackTrace);
    return new src__trace.Trace.new(trace.frames[$map](src__frame.Frame, dart.fn(frame => {
      if (frame.line == null) return null;
      let column = frame.column == null ? 0 : frame.column;
      let span = sourceMap.spanFor(dart.notNull(frame.line) - 1, dart.notNull(column) - 1, {uri: frame.uri == null ? null : dart.toString(frame.uri)});
      if (span == null) return null;
      let sourceUrl = dart.toString(span.sourceUrl);
      if (sdkRoot != null && dart.test(path$.url.isWithin(sdkLib, sourceUrl))) {
        sourceUrl = "dart:" + dart.notNull(path$.url.relative(sourceUrl, {from: sdkLib}));
      } else if (packageResolver != null) {
        if (packageResolver.packageRoot != null && dart.test(path$.url.isWithin(dart.toString(packageResolver.packageRoot), sourceUrl))) {
          sourceUrl = "package:" + dart.notNull(path$.url.relative(sourceUrl, {from: dart.toString(packageResolver.packageRoot)}));
        } else if (packageResolver.packageConfigMap != null) {
          for (let package$ of packageResolver.packageConfigMap[$keys]) {
            let packageUrl = dart.toString(packageResolver.packageConfigMap[$_get](package$));
            if (!dart.test(path$.url.isWithin(packageUrl, sourceUrl))) continue;
            sourceUrl = dart.str`package:${package$}/` + dart.notNull(path$.url.relative(sourceUrl, {from: packageUrl}));
            break;
          }
        }
      }
      return new src__frame.Frame.new(core.Uri.parse(sourceUrl), dart.notNull(span.start.line) + 1, dart.notNull(span.start.column) + 1, dart.test(minified) ? dart.test(span.isIdentifier) ? span.text : frame.member : source_map_stack_trace._prettifyMember(frame.member));
    }, FrameToFrame()))[$where](dart.fn(frame => frame != null, FrameTobool())));
  };
  dart.fn(source_map_stack_trace.mapStackTrace, MappingAndStackTrace__ToStackTrace());
  source_map_stack_trace._prettifyMember = function(member) {
    return member[$replaceAll](core.RegExp.new("/?<$"), "")[$replaceAll](core.RegExp.new("\\$\\d+(\\$[a-zA-Z_0-9]+)*$"), "")[$replaceAllMapped](core.RegExp.new("(_+)closure\\d*\\.call$"), dart.fn(match => ".<fn>"[$times](match._get(1).length), MatchToString()))[$replaceAll](core.RegExp.new("\\.call$"), "")[$replaceAll](core.RegExp.new("^dart\\."), "")[$replaceAll](core.RegExp.new("[a-zA-Z_0-9]+\\$"), "")[$replaceAll](core.RegExp.new("^[a-zA-Z_0-9]+.(static|dart)."), "")[$replaceAllMapped](core.RegExp.new("([a-zA-Z0-9]+)_"), dart.fn(match => dart.notNull(match._get(1)) + ".", MatchToString()));
  };
  dart.fn(source_map_stack_trace._prettifyMember, StringToString());
  dart.trackLibraries("packages/source_map_stack_trace/source_map_stack_trace.ddc", {
    "package:source_map_stack_trace/source_map_stack_trace.dart": source_map_stack_trace
  }, '{"version":3,"sourceRoot":"","sources":["source_map_stack_trace.dart"],"names":[],"mappings":"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","file":"source_map_stack_trace.ddc.js"}');
  // Exports:
  return {
    source_map_stack_trace: source_map_stack_trace
  };
});

//# sourceMappingURL=source_map_stack_trace.ddc.js.map
