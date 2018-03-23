define(['dart_sdk', 'packages/stack_trace/src/utils', 'packages/path/path'], function(dart_sdk, utils, path) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const path$ = path.path;
  const _root = Object.create(null);
  const src__lazy_chain = Object.create(_root);
  const src__stack_zone_specification = Object.create(_root);
  const src__chain = Object.create(_root);
  const src__vm_trace = Object.create(_root);
  const src__lazy_trace = Object.create(_root);
  const src__trace = Object.create(_root);
  const src__frame = Object.create(_root);
  const src__unparsed_frame = Object.create(_root);
  const $skip = dartx.skip;
  const $indexOf = dartx.indexOf;
  const $substring = dartx.substring;
  const $add = dartx.add;
  const $first = dartx.first;
  const $addAll = dartx.addAll;
  const $isEmpty = dartx.isEmpty;
  const $contains = dartx.contains;
  const $map = dartx.map;
  const $split = dartx.split;
  const $length = dartx.length;
  const $single = dartx.single;
  const $where = dartx.where;
  const $isNotEmpty = dartx.isNotEmpty;
  const $last = dartx.last;
  const $expand = dartx.expand;
  const $fold = dartx.fold;
  const $join = dartx.join;
  const $padRight = dartx.padRight;
  const $replaceAll = dartx.replaceAll;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $startsWith = dartx.startsWith;
  const $skipWhile = dartx.skipWhile;
  const $trim = dartx.trim;
  const $toList = dartx.toList;
  const $take = dartx.take;
  const $endsWith = dartx.endsWith;
  const $reversed = dartx.reversed;
  const $removeAt = dartx.removeAt;
  const $_get = dartx._get;
  const $allMatches = dartx.allMatches;
  let VoidToChain = () => (VoidToChain = dart.constFn(dart.fnType(src__chain.Chain, [])))();
  let VoidToTrace = () => (VoidToTrace = dart.constFn(dart.fnType(src__trace.Trace, [])))();
  let FrameTobool = () => (FrameTobool = dart.constFn(dart.fnType(core.bool, [src__frame.Frame])))();
  let ExpandoOf_Node = () => (ExpandoOf_Node = dart.constFn(core.Expando$(src__stack_zone_specification._Node)))();
  let ZoneAndZoneDelegateAndZone__Tovoid = () => (ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.Object, core.StackTrace])))();
  let JSArrayOfTrace = () => (JSArrayOfTrace = dart.constFn(_interceptors.JSArray$(src__trace.Trace)))();
  let dynamicAndChainTovoid = () => (dynamicAndChainTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, src__chain.Chain])))();
  let ListOfTrace = () => (ListOfTrace = dart.constFn(core.List$(src__trace.Trace)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let LinkedMapOfObject$bool = () => (LinkedMapOfObject$bool = dart.constFn(_js_helper.LinkedMap$(core.Object, core.bool)))();
  let StringToTrace = () => (StringToTrace = dart.constFn(dart.fnType(src__trace.Trace, [core.String])))();
  let TraceToTrace = () => (TraceToTrace = dart.constFn(dart.fnType(src__trace.Trace, [src__trace.Trace])))();
  let TraceTobool = () => (TraceTobool = dart.constFn(dart.fnType(core.bool, [src__trace.Trace])))();
  let ListOfFrame = () => (ListOfFrame = dart.constFn(core.List$(src__frame.Frame)))();
  let TraceToListOfFrame = () => (TraceToListOfFrame = dart.constFn(dart.fnType(ListOfFrame(), [src__trace.Trace])))();
  let FrameToint = () => (FrameToint = dart.constFn(dart.fnType(core.int, [src__frame.Frame])))();
  let TraceToint = () => (TraceToint = dart.constFn(dart.fnType(core.int, [src__trace.Trace])))();
  let FrameToString = () => (FrameToString = dart.constFn(dart.fnType(core.String, [src__frame.Frame])))();
  let TraceToString = () => (TraceToString = dart.constFn(dart.fnType(core.String, [src__trace.Trace])))();
  let dynamicAndChainTovoid$ = () => (dynamicAndChainTovoid$ = dart.constFn(dart.fnType(dart.void, [dart.dynamic, src__chain.Chain])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let StringToFrame = () => (StringToFrame = dart.constFn(dart.fnType(src__frame.Frame, [core.String])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let JSArrayOfFrame = () => (JSArrayOfFrame = dart.constFn(_interceptors.JSArray$(src__frame.Frame)))();
  let FrameToFrame = () => (FrameToFrame = dart.constFn(dart.fnType(src__frame.Frame, [src__frame.Frame])))();
  let VoidToFrame = () => (VoidToFrame = dart.constFn(dart.fnType(src__frame.Frame, [])))();
  let dynamicAnddynamicToFrame = () => (dynamicAnddynamicToFrame = dart.constFn(dart.fnType(src__frame.Frame, [dart.dynamic, dart.dynamic])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__lazy_chain.ChainThunk = dart.typedef('ChainThunk', () => dart.fnType(src__chain.Chain, []));
  const _thunk = Symbol('_thunk');
  const _inner = Symbol('_inner');
  const _chain = Symbol('_chain');
  src__lazy_chain.LazyChain = class LazyChain extends core.Object {
    get [_chain]() {
      if (this[_inner] == null) this[_inner] = this[_thunk]();
      return this[_inner];
    }
    get traces() {
      return this[_chain].traces;
    }
    get terse() {
      return this[_chain].terse;
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      return new src__lazy_chain.LazyChain.new(dart.fn(() => this[_chain].foldFrames(predicate, {terse: terse}), VoidToChain()));
    }
    toTrace() {
      return new src__lazy_trace.LazyTrace.new(dart.fn(() => this[_chain].toTrace(), VoidToTrace()));
    }
    toString() {
      return dart.toString(this[_chain]);
    }
  };
  (src__lazy_chain.LazyChain.new = function(thunk) {
    this[_inner] = null;
    this[_thunk] = thunk;
  }).prototype = src__lazy_chain.LazyChain.prototype;
  dart.addTypeTests(src__lazy_chain.LazyChain);
  src__lazy_chain.LazyChain[dart.implements] = () => [src__chain.Chain];
  dart.setMethodSignature(src__lazy_chain.LazyChain, () => ({
    __proto__: dart.getMethods(src__lazy_chain.LazyChain.__proto__),
    foldFrames: dart.fnType(src__chain.Chain, [FrameTobool()], {terse: core.bool}),
    toTrace: dart.fnType(src__trace.Trace, [])
  }));
  dart.setGetterSignature(src__lazy_chain.LazyChain, () => ({
    __proto__: dart.getGetters(src__lazy_chain.LazyChain.__proto__),
    [_chain]: dart.fnType(src__chain.Chain, []),
    traces: dart.fnType(core.List$(src__trace.Trace), []),
    terse: dart.fnType(src__chain.Chain, [])
  }));
  dart.setFieldSignature(src__lazy_chain.LazyChain, () => ({
    __proto__: dart.getFields(src__lazy_chain.LazyChain.__proto__),
    [_thunk]: dart.finalFieldType(VoidToChain()),
    [_inner]: dart.fieldType(src__chain.Chain)
  }));
  dart.defineExtensionMethods(src__lazy_chain.LazyChain, ['toString']);
  src__stack_zone_specification._ChainHandler = dart.typedef('_ChainHandler', () => dart.fnType(dart.void, [dart.dynamic, src__chain.Chain]));
  const _onError = Symbol('_onError');
  const _errorZone = Symbol('_errorZone');
  const _chains = Symbol('_chains');
  const _currentNode = Symbol('_currentNode');
  const _disabled = Symbol('_disabled');
  const _handleUncaughtError = Symbol('_handleUncaughtError');
  const _registerCallback = Symbol('_registerCallback');
  const _registerUnaryCallback = Symbol('_registerUnaryCallback');
  const _registerBinaryCallback = Symbol('_registerBinaryCallback');
  const _errorCallback = Symbol('_errorCallback');
  const _createNode = Symbol('_createNode');
  const _trimVMChain = Symbol('_trimVMChain');
  const _run = Symbol('_run');
  const _currentTrace = Symbol('_currentTrace');
  src__stack_zone_specification.StackZoneSpecification = class StackZoneSpecification extends core.Object {
    get [_disabled]() {
      return dart.equals(async.Zone.current._get(src__stack_zone_specification.StackZoneSpecification.disableKey), true);
    }
    toSpec() {
      return async.ZoneSpecification.new({handleUncaughtError: ZoneAndZoneDelegateAndZone__Tovoid()._check(dart.test(this[_errorZone]) ? dart.bind(this, _handleUncaughtError) : null), registerCallback: dart.bind(this, _registerCallback), registerUnaryCallback: dart.bind(this, _registerUnaryCallback), registerBinaryCallback: dart.bind(this, _registerBinaryCallback), errorCallback: dart.bind(this, _errorCallback)});
    }
    currentChain(level) {
      if (level === void 0) level = 0;
      return this[_createNode](dart.notNull(level) + 1).toChain();
    }
    chainFor(trace) {
      if (src__chain.Chain.is(trace)) return trace;
      let t = trace;
      t == null ? trace = core.StackTrace.current : t;
      let l = this[_chains]._get(trace);
      let previous = l != null ? l : this[_currentNode];
      if (previous == null) {
        if (src__trace.Trace.is(trace)) return new src__chain.Chain.new(JSArrayOfTrace().of([trace]));
        return new src__lazy_chain.LazyChain.new(dart.fn(() => src__chain.Chain.parse(dart.toString(trace)), VoidToChain()));
      } else {
        if (!src__trace.Trace.is(trace)) {
          let original = trace;
          trace = new src__lazy_trace.LazyTrace.new(dart.fn(() => src__trace.Trace.parse(this[_trimVMChain](original)), VoidToTrace()));
        }
        return new src__stack_zone_specification._Node.new(trace, previous).toChain();
      }
    }
    [_registerCallback](R, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerCallback(R, zone, f);
      let node = this[_createNode](1);
      return parent.registerCallback(R, zone, dart.fn(() => this[_run](R, f, node), dart.fnType(R, [])));
    }
    [_registerUnaryCallback](R, T, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerUnaryCallback(R, T, zone, f);
      let node = this[_createNode](1);
      return parent.registerUnaryCallback(R, T, zone, dart.fn(arg => this[_run](R, dart.fn(() => f(arg), dart.fnType(R, [])), node), dart.fnType(R, [T])));
    }
    [_registerBinaryCallback](R, T1, T2, self, parent, zone, f) {
      if (f == null || dart.test(this[_disabled])) return parent.registerBinaryCallback(R, T1, T2, zone, dart.fnType(R, [T1, T2])._check(f));
      let node = this[_createNode](1);
      return parent.registerBinaryCallback(R, T1, T2, zone, dart.fn((arg1, arg2) => this[_run](R, dart.fn(() => R._check(dart.dcall(f, arg1, arg2)), dart.fnType(R, [])), node), dart.fnType(R, [T1, T2])));
    }
    [_handleUncaughtError](self, parent, zone, error, stackTrace) {
      if (dart.test(this[_disabled])) {
        parent.handleUncaughtError(zone, error, stackTrace);
        return;
      }
      let stackChain = this.chainFor(stackTrace);
      if (this[_onError] == null) {
        parent.handleUncaughtError(zone, error, stackChain);
        return;
      }
      try {
        self.parent.runBinary(dart.void, dart.dynamic, src__chain.Chain, this[_onError], error, stackChain);
      } catch (newError) {
        let newStackTrace = dart.stackTrace(newError);
        if (core.identical(newError, error)) {
          parent.handleUncaughtError(zone, error, stackChain);
        } else {
          parent.handleUncaughtError(zone, newError, newStackTrace);
        }
      }
    }
    [_errorCallback](self, parent, zone, error, stackTrace) {
      if (dart.test(this[_disabled])) return parent.errorCallback(zone, error, stackTrace);
      if (stackTrace == null) {
        stackTrace = this[_createNode](2).toChain();
      } else {
        if (this[_chains]._get(stackTrace) == null) this[_chains]._set(stackTrace, this[_createNode](2));
      }
      let asyncError = parent.errorCallback(zone, error, stackTrace);
      return asyncError == null ? new async.AsyncError.new(error, stackTrace) : asyncError;
    }
    [_createNode](level) {
      if (level === void 0) level = 0;
      return new src__stack_zone_specification._Node.new(this[_currentTrace](dart.notNull(level) + 1), this[_currentNode]);
    }
    [_run](T, f, node) {
      let previousNode = this[_currentNode];
      this[_currentNode] = node;
      try {
        return f();
      } catch (e) {
        let stackTrace = dart.stackTrace(e);
        let t = this[_chains]._get(stackTrace);
        t == null ? this[_chains]._set(stackTrace, node) : t;
        dart.rethrow(e);
      } finally {
        this[_currentNode] = previousNode;
      }
    }
    [_currentTrace](level) {
      if (level === void 0) level = null;
      let t = level;
      t == null ? level = 0 : t;
      let stackTrace = core.StackTrace.current;
      return new src__lazy_trace.LazyTrace.new(dart.fn(() => {
        let text = this[_trimVMChain](stackTrace);
        let trace = src__trace.Trace.parse(text);
        return new src__trace.Trace.new(trace.frames[$skip](dart.notNull(level) + (dart.test(src__utils.inJS) ? 2 : 1)), {original: text});
      }, VoidToTrace()));
    }
    [_trimVMChain](trace) {
      let text = dart.toString(trace);
      let index = text[$indexOf]("<asynchronous suspension>\n");
      return index === -1 ? text : text[$substring](0, index);
    }
  };
  (src__stack_zone_specification.StackZoneSpecification.new = function(onError, opts) {
    let errorZone = opts && 'errorZone' in opts ? opts.errorZone : true;
    this[_chains] = new (ExpandoOf_Node()).new("stack chains");
    this[_currentNode] = null;
    this[_onError] = onError;
    this[_errorZone] = errorZone;
  }).prototype = src__stack_zone_specification.StackZoneSpecification.prototype;
  dart.addTypeTests(src__stack_zone_specification.StackZoneSpecification);
  dart.setMethodSignature(src__stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getMethods(src__stack_zone_specification.StackZoneSpecification.__proto__),
    toSpec: dart.fnType(async.ZoneSpecification, []),
    currentChain: dart.fnType(src__chain.Chain, [], [core.int]),
    chainFor: dart.fnType(src__chain.Chain, [core.StackTrace]),
    [_registerCallback]: dart.gFnType(R => [dart.fnType(R, []), [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [])]]),
    [_registerUnaryCallback]: dart.gFnType((R, T) => [dart.fnType(R, [T]), [async.Zone, async.ZoneDelegate, async.Zone, dart.fnType(R, [T])]]),
    [_registerBinaryCallback]: dart.gFnType((R, T1, T2) => [dart.fnType(R, [T1, T2]), [async.Zone, async.ZoneDelegate, async.Zone, core.Function]]),
    [_handleUncaughtError]: dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, dart.dynamic, core.StackTrace]),
    [_errorCallback]: dart.fnType(async.AsyncError, [async.Zone, async.ZoneDelegate, async.Zone, core.Object, core.StackTrace]),
    [_createNode]: dart.fnType(src__stack_zone_specification._Node, [], [core.int]),
    [_run]: dart.gFnType(T => [T, [dart.fnType(T, []), src__stack_zone_specification._Node]]),
    [_currentTrace]: dart.fnType(src__trace.Trace, [], [core.int]),
    [_trimVMChain]: dart.fnType(core.String, [core.StackTrace])
  }));
  dart.setGetterSignature(src__stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getGetters(src__stack_zone_specification.StackZoneSpecification.__proto__),
    [_disabled]: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__stack_zone_specification.StackZoneSpecification, () => ({
    __proto__: dart.getFields(src__stack_zone_specification.StackZoneSpecification.__proto__),
    [_chains]: dart.finalFieldType(ExpandoOf_Node()),
    [_onError]: dart.finalFieldType(dynamicAndChainTovoid()),
    [_currentNode]: dart.fieldType(src__stack_zone_specification._Node),
    [_errorZone]: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(src__stack_zone_specification.StackZoneSpecification, {
    /*src__stack_zone_specification.StackZoneSpecification.disableKey*/get disableKey() {
      return new core.Object.new();
    }
  });
  src__stack_zone_specification._Node = class _Node extends core.Object {
    toChain() {
      let nodes = JSArrayOfTrace().of([]);
      let node = this;
      while (node != null) {
        nodes[$add](node.trace);
        node = node.previous;
      }
      return new src__chain.Chain.new(nodes);
    }
  };
  (src__stack_zone_specification._Node.new = function(trace, previous) {
    if (previous === void 0) previous = null;
    this.previous = previous;
    this.trace = src__trace.Trace.from(trace);
  }).prototype = src__stack_zone_specification._Node.prototype;
  dart.addTypeTests(src__stack_zone_specification._Node);
  dart.setMethodSignature(src__stack_zone_specification._Node, () => ({
    __proto__: dart.getMethods(src__stack_zone_specification._Node.__proto__),
    toChain: dart.fnType(src__chain.Chain, [])
  }));
  dart.setFieldSignature(src__stack_zone_specification._Node, () => ({
    __proto__: dart.getFields(src__stack_zone_specification._Node.__proto__),
    trace: dart.finalFieldType(src__trace.Trace),
    previous: dart.finalFieldType(src__stack_zone_specification._Node)
  }));
  src__chain.ChainHandler = dart.typedef('ChainHandler', () => dart.fnType(dart.void, [dart.dynamic, src__chain.Chain]));
  dart.defineLazy(src__chain, {
    /*src__chain._specKey*/get _specKey() {
      return new core.Object.new();
    }
  });
  src__chain.Chain = class Chain extends core.Object {
    get traces() {
      return this[traces$];
    }
    set traces(value) {
      super.traces = value;
    }
    static get _currentSpec() {
      return src__stack_zone_specification.StackZoneSpecification._check(async.Zone.current._get(src__chain._specKey));
    }
    static capture(T, callback, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let when = opts && 'when' in opts ? opts.when : true;
      let errorZone = opts && 'errorZone' in opts ? opts.errorZone : true;
      if (!dart.test(errorZone) && onError != null) {
        dart.throw(new core.ArgumentError.value(onError, "onError", "must be null if errorZone is false"));
      }
      if (!dart.test(when)) {
        let newOnError = null;
        if (onError != null) {
          newOnError = dart.fn((error, stackTrace) => {
            dart.dcall(onError, error, stackTrace == null ? src__chain.Chain.current() : src__chain.Chain.forTrace(core.StackTrace._check(stackTrace)));
          }, dynamicAnddynamicToNull());
        }
        return async.runZoned(T, callback, {onError: core.Function._check(newOnError)});
      }
      let spec = new src__stack_zone_specification.StackZoneSpecification.new(onError, {errorZone: errorZone});
      return async.runZoned(T, dart.fn(() => {
        try {
          return callback();
        } catch (error) {
          let stackTrace = dart.stackTrace(error);
          async.Zone.current.handleUncaughtError(error, stackTrace);
          return null;
        }
      }, dart.fnType(T, [])), {zoneSpecification: spec.toSpec(), zoneValues: new _js_helper.LinkedMap.from([src__chain._specKey, spec, src__stack_zone_specification.StackZoneSpecification.disableKey, false])});
    }
    static disable(T, callback, opts) {
      let when = opts && 'when' in opts ? opts.when : true;
      let zoneValues = dart.test(when) ? new (LinkedMapOfObject$bool()).from([src__chain._specKey, null, src__stack_zone_specification.StackZoneSpecification.disableKey, true]) : null;
      return async.runZoned(T, callback, {zoneValues: zoneValues});
    }
    static track(futureOrStream) {
      return futureOrStream;
    }
    static current(level) {
      if (level === void 0) level = 0;
      if (src__chain.Chain._currentSpec != null) return src__chain.Chain._currentSpec.currentChain(dart.notNull(level) + 1);
      let chain = src__chain.Chain.forTrace(core.StackTrace.current);
      return new src__lazy_chain.LazyChain.new(dart.fn(() => {
        let first = new src__trace.Trace.new(chain.traces[$first].frames[$skip](dart.notNull(level) + (dart.test(src__utils.inJS) ? 2 : 1)), {original: dart.toString(chain.traces[$first].original)});
        return new src__chain.Chain.new((() => {
          let _ = JSArrayOfTrace().of([first]);
          _[$addAll](chain.traces[$skip](1));
          return _;
        })());
      }, VoidToChain()));
    }
    static forTrace(trace) {
      if (src__chain.Chain.is(trace)) return trace;
      if (src__chain.Chain._currentSpec != null) return src__chain.Chain._currentSpec.chainFor(trace);
      if (src__trace.Trace.is(trace)) return new src__chain.Chain.new(JSArrayOfTrace().of([trace]));
      return new src__lazy_chain.LazyChain.new(dart.fn(() => src__chain.Chain.parse(dart.toString(trace)), VoidToChain()));
    }
    static parse(chain) {
      if (chain[$isEmpty]) return new src__chain.Chain.new(JSArrayOfTrace().of([]));
      if (chain[$contains]("<asynchronous suspension>\n")) {
        return new src__chain.Chain.new(chain[$split]("<asynchronous suspension>\n")[$map](src__trace.Trace, dart.fn(trace => new src__trace.Trace.parseVM(trace), StringToTrace())));
      }
      if (!chain[$contains]("===== asynchronous gap ===========================\n")) return new src__chain.Chain.new(JSArrayOfTrace().of([src__trace.Trace.parse(chain)]));
      return new src__chain.Chain.new(chain[$split]("===== asynchronous gap ===========================\n")[$map](src__trace.Trace, dart.fn(trace => new src__trace.Trace.parseFriendly(trace), StringToTrace())));
    }
    get terse() {
      return this.foldFrames(dart.fn(_ => false, FrameTobool()), {terse: true});
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      let foldedTraces = this.traces[$map](src__trace.Trace, dart.fn(trace => trace.foldFrames(predicate, {terse: terse}), TraceToTrace()));
      let nonEmptyTraces = foldedTraces[$where](dart.fn(trace => {
        if (dart.notNull(trace.frames[$length]) > 1) return true;
        if (dart.test(trace.frames[$isEmpty])) return false;
        if (!dart.test(terse)) return false;
        return trace.frames[$single].line != null;
      }, TraceTobool()));
      if (dart.test(nonEmptyTraces[$isEmpty]) && dart.test(foldedTraces[$isNotEmpty])) {
        return new src__chain.Chain.new(JSArrayOfTrace().of([foldedTraces[$last]]));
      }
      return new src__chain.Chain.new(nonEmptyTraces);
    }
    toTrace() {
      return new src__trace.Trace.new(this.traces[$expand](src__frame.Frame, dart.fn(trace => trace.frames, TraceToListOfFrame())));
    }
    toString() {
      let longest = this.traces[$map](core.int, dart.fn(trace => trace.frames[$map](core.int, dart.fn(frame => frame.location.length, FrameToint()))[$fold](core.int, 0, dart.gbind(math.max, core.int)), TraceToint()))[$fold](core.int, 0, dart.gbind(math.max, core.int));
      return this.traces[$map](core.String, dart.fn(trace => trace.frames[$map](core.String, dart.fn(frame => dart.str`${frame.location[$padRight](longest)}  ${frame.member}\n`, FrameToString()))[$join](), TraceToString()))[$join]("===== asynchronous gap ===========================\n");
    }
  };
  (src__chain.Chain.new = function(traces) {
    this[traces$] = ListOfTrace().unmodifiable(traces);
  }).prototype = src__chain.Chain.prototype;
  dart.addTypeTests(src__chain.Chain);
  const traces$ = Symbol("Chain.traces");
  src__chain.Chain[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(src__chain.Chain, () => ({
    __proto__: dart.getMethods(src__chain.Chain.__proto__),
    foldFrames: dart.fnType(src__chain.Chain, [FrameTobool()], {terse: core.bool}),
    toTrace: dart.fnType(src__trace.Trace, [])
  }));
  dart.setStaticMethodSignature(src__chain.Chain, () => ({
    capture: dart.gFnType(T => [T, [dart.fnType(T, [])], {onError: dynamicAndChainTovoid$(), when: core.bool, errorZone: core.bool}]),
    disable: dart.gFnType(T => [T, [dart.fnType(T, [])], {when: core.bool}]),
    track: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(src__chain.Chain, () => ({
    __proto__: dart.getGetters(src__chain.Chain.__proto__),
    terse: dart.fnType(src__chain.Chain, [])
  }));
  dart.setFieldSignature(src__chain.Chain, () => ({
    __proto__: dart.getFields(src__chain.Chain.__proto__),
    traces: dart.finalFieldType(ListOfTrace())
  }));
  dart.defineExtensionMethods(src__chain.Chain, ['toString']);
  src__vm_trace.VMTrace = class VMTrace extends core.Object {
    get frames() {
      return this[frames$];
    }
    set frames(value) {
      super.frames = value;
    }
    toString() {
      let i = 1;
      return this.frames[$map](core.String, dart.fn(frame => {
        let number = dart.str`#${i++}`[$padRight](8);
        let member = frame.member[$replaceAllMapped](core.RegExp.new("[^.]+\\.<async>"), dart.fn(match => dart.str`${match._get(1)}.<${match._get(1)}_async_body>`, MatchToString()))[$replaceAll]("<fn>", "<anonymous closure>");
        let line = frame.line == null ? 0 : frame.line;
        let column = frame.column == null ? 0 : frame.column;
        return dart.str`${number}${member} (${frame.uri}:${line}:${column})\n`;
      }, FrameToString()))[$join]();
    }
  };
  (src__vm_trace.VMTrace.new = function(frames) {
    this[frames$] = frames;
  }).prototype = src__vm_trace.VMTrace.prototype;
  dart.addTypeTests(src__vm_trace.VMTrace);
  const frames$ = Symbol("VMTrace.frames");
  src__vm_trace.VMTrace[dart.implements] = () => [core.StackTrace];
  dart.setFieldSignature(src__vm_trace.VMTrace, () => ({
    __proto__: dart.getFields(src__vm_trace.VMTrace.__proto__),
    frames: dart.finalFieldType(ListOfFrame())
  }));
  dart.defineExtensionMethods(src__vm_trace.VMTrace, ['toString']);
  src__lazy_trace.TraceThunk = dart.typedef('TraceThunk', () => dart.fnType(src__trace.Trace, []));
  const _thunk$ = Symbol('_thunk');
  const _inner$ = Symbol('_inner');
  const _trace = Symbol('_trace');
  src__lazy_trace.LazyTrace = class LazyTrace extends core.Object {
    get [_trace]() {
      if (this[_inner$] == null) this[_inner$] = this[_thunk$]();
      return this[_inner$];
    }
    get frames() {
      return this[_trace].frames;
    }
    get original() {
      return this[_trace].original;
    }
    get vmTrace() {
      return this[_trace].vmTrace;
    }
    get terse() {
      return new src__lazy_trace.LazyTrace.new(dart.fn(() => this[_trace].terse, VoidToTrace()));
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      return new src__lazy_trace.LazyTrace.new(dart.fn(() => this[_trace].foldFrames(predicate, {terse: terse}), VoidToTrace()));
    }
    toString() {
      return dart.toString(this[_trace]);
    }
    set frames(_) {
      return dart.throw(new core.UnimplementedError.new());
    }
  };
  (src__lazy_trace.LazyTrace.new = function(thunk) {
    this[_inner$] = null;
    this[_thunk$] = thunk;
  }).prototype = src__lazy_trace.LazyTrace.prototype;
  dart.addTypeTests(src__lazy_trace.LazyTrace);
  src__lazy_trace.LazyTrace[dart.implements] = () => [src__trace.Trace];
  dart.setMethodSignature(src__lazy_trace.LazyTrace, () => ({
    __proto__: dart.getMethods(src__lazy_trace.LazyTrace.__proto__),
    foldFrames: dart.fnType(src__trace.Trace, [FrameTobool()], {terse: core.bool})
  }));
  dart.setGetterSignature(src__lazy_trace.LazyTrace, () => ({
    __proto__: dart.getGetters(src__lazy_trace.LazyTrace.__proto__),
    [_trace]: dart.fnType(src__trace.Trace, []),
    frames: dart.fnType(core.List$(src__frame.Frame), []),
    original: dart.fnType(core.StackTrace, []),
    vmTrace: dart.fnType(core.StackTrace, []),
    terse: dart.fnType(src__trace.Trace, [])
  }));
  dart.setSetterSignature(src__lazy_trace.LazyTrace, () => ({
    __proto__: dart.getSetters(src__lazy_trace.LazyTrace.__proto__),
    frames: dart.fnType(dart.void, [ListOfFrame()])
  }));
  dart.setFieldSignature(src__lazy_trace.LazyTrace, () => ({
    __proto__: dart.getFields(src__lazy_trace.LazyTrace.__proto__),
    [_thunk$]: dart.finalFieldType(VoidToTrace()),
    [_inner$]: dart.fieldType(src__trace.Trace)
  }));
  dart.defineExtensionMethods(src__lazy_trace.LazyTrace, ['toString']);
  dart.defineLazy(src__trace, {
    /*src__trace._terseRegExp*/get _terseRegExp() {
      return core.RegExp.new("(-patch)?([/\\\\].*)?$");
    },
    /*src__trace._v8Trace*/get _v8Trace() {
      return core.RegExp.new("\\n    ?at ");
    },
    /*src__trace._v8TraceLine*/get _v8TraceLine() {
      return core.RegExp.new("    ?at ");
    },
    /*src__trace._firefoxSafariTrace*/get _firefoxSafariTrace() {
      return core.RegExp.new("^" + "(" + "([.0-9A-Za-z_$/<]|\\(.*\\))*" + "@" + ")?" + "[^\\s]*" + ":\\d*" + "$", {multiLine: true});
    },
    /*src__trace._friendlyTrace*/get _friendlyTrace() {
      return core.RegExp.new("^[^\\s<][^\\s]*( \\d+(:\\d+)?)?[ \\t]+[^\\s]+$", {multiLine: true});
    }
  });
  src__trace.Trace = class Trace extends core.Object {
    get frames() {
      return this[frames$0];
    }
    set frames(value) {
      super.frames = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    static format(stackTrace, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : true;
      let trace = src__trace.Trace.from(stackTrace);
      if (dart.test(terse)) trace = trace.terse;
      return dart.toString(trace);
    }
    static current(level) {
      if (level === void 0) level = 0;
      if (dart.notNull(level) < 0) {
        dart.throw(new core.ArgumentError.new("Argument [level] must be greater than or equal " + "to 0."));
      }
      let trace = src__trace.Trace.from(core.StackTrace.current);
      return new src__lazy_trace.LazyTrace.new(dart.fn(() => new src__trace.Trace.new(trace.frames[$skip](dart.notNull(level) + (dart.test(src__utils.inJS) ? 2 : 1)), {original: dart.toString(trace.original)}), VoidToTrace()));
    }
    static from(trace) {
      if (trace == null) {
        dart.throw(new core.ArgumentError.new("Cannot create a Trace from null."));
      }
      if (src__trace.Trace.is(trace)) return trace;
      if (src__chain.Chain.is(trace)) return trace.toTrace();
      return new src__lazy_trace.LazyTrace.new(dart.fn(() => src__trace.Trace.parse(dart.toString(trace)), VoidToTrace()));
    }
    static parse(trace) {
      try {
        if (trace[$isEmpty]) return new src__trace.Trace.new(JSArrayOfFrame().of([]));
        if (trace[$contains](src__trace._v8Trace)) return new src__trace.Trace.parseV8(trace);
        if (trace[$contains]("\tat ")) return new src__trace.Trace.parseJSCore(trace);
        if (trace[$contains](src__trace._firefoxSafariTrace)) {
          return new src__trace.Trace.parseFirefox(trace);
        }
        if (trace[$contains]("===== asynchronous gap ===========================\n")) return src__chain.Chain.parse(trace).toTrace();
        if (trace[$contains](src__trace._friendlyTrace)) {
          return new src__trace.Trace.parseFriendly(trace);
        }
        return new src__trace.Trace.parseVM(trace);
      } catch (error) {
        if (core.FormatException.is(error)) {
          dart.throw(new core.FormatException.new(dart.str`${error.message}\nStack trace:\n${trace}`));
        } else
          throw error;
      }
    }
    static _parseVM(trace) {
      let lines = trace[$trim]()[$replaceAll]("<asynchronous suspension>\n", '')[$split]("\n");
      let frames = lines[$take](dart.notNull(lines[$length]) - 1)[$map](src__frame.Frame, dart.fn(line => src__frame.Frame.parseVM(line), StringToFrame()))[$toList]();
      if (!lines[$last][$endsWith](".da")) {
        frames[$add](src__frame.Frame.parseVM(lines[$last]));
      }
      return frames;
    }
    get vmTrace() {
      return new src__vm_trace.VMTrace.new(this.frames);
    }
    get terse() {
      return this.foldFrames(dart.fn(_ => false, FrameTobool()), {terse: true});
    }
    foldFrames(predicate, opts) {
      let terse = opts && 'terse' in opts ? opts.terse : false;
      if (dart.test(terse)) {
        let oldPredicate = predicate;
        predicate = dart.fn(frame => {
          if (dart.test(oldPredicate(frame))) return true;
          if (dart.test(frame.isCore)) return true;
          if (frame.package === 'stack_trace') return true;
          if (!frame.member[$contains]('<async>')) return false;
          return frame.line == null;
        }, FrameTobool());
      }
      let newFrames = JSArrayOfFrame().of([]);
      for (let frame of this.frames[$reversed]) {
        if (src__unparsed_frame.UnparsedFrame.is(frame) || !dart.test(predicate(frame))) {
          newFrames[$add](frame);
        } else if (dart.test(newFrames[$isEmpty]) || !dart.test(predicate(newFrames[$last]))) {
          newFrames[$add](new src__frame.Frame.new(frame.uri, frame.line, frame.column, frame.member));
        }
      }
      if (dart.test(terse)) {
        newFrames = newFrames[$map](src__frame.Frame, dart.fn(frame => {
          if (src__unparsed_frame.UnparsedFrame.is(frame) || !dart.test(predicate(frame))) return frame;
          let library = frame.library[$replaceAll](src__trace._terseRegExp, '');
          return new src__frame.Frame.new(core.Uri.parse(library), null, null, frame.member);
        }, FrameToFrame()))[$toList]();
        if (dart.notNull(newFrames[$length]) > 1 && dart.test(predicate(newFrames[$first]))) {
          newFrames[$removeAt](0);
        }
      }
      return new src__trace.Trace.new(newFrames[$reversed], {original: dart.toString(this.original)});
    }
    toString() {
      let longest = this.frames[$map](core.int, dart.fn(frame => frame.location.length, FrameToint()))[$fold](core.int, 0, dart.gbind(math.max, core.int));
      return this.frames[$map](core.String, dart.fn(frame => {
        if (src__unparsed_frame.UnparsedFrame.is(frame)) return dart.str`${frame}\n`;
        return dart.str`${frame.location[$padRight](longest)}  ${frame.member}\n`;
      }, FrameToString()))[$join]();
    }
  };
  (src__trace.Trace.parseVM = function(trace) {
    src__trace.Trace.new.call(this, src__trace.Trace._parseVM(trace), {original: trace});
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.parseV8 = function(trace) {
    src__trace.Trace.new.call(this, trace[$split]("\n")[$skip](1)[$skipWhile](dart.fn(line => !line[$startsWith](src__trace._v8TraceLine), StringTobool()))[$map](src__frame.Frame, dart.fn(line => src__frame.Frame.parseV8(line), StringToFrame())), {original: trace});
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.parseJSCore = function(trace) {
    src__trace.Trace.new.call(this, trace[$split]("\n")[$where](dart.fn(line => line !== "\tat ", StringTobool()))[$map](src__frame.Frame, dart.fn(line => src__frame.Frame.parseV8(line), StringToFrame())), {original: trace});
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.parseIE = function(trace) {
    src__trace.Trace.parseV8.call(this, trace);
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.parseFirefox = function(trace) {
    src__trace.Trace.new.call(this, trace[$trim]()[$split]("\n")[$where](dart.fn(line => line[$isNotEmpty] && line !== '[native code]', StringTobool()))[$map](src__frame.Frame, dart.fn(line => src__frame.Frame.parseFirefox(line), StringToFrame())), {original: trace});
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.parseSafari = function(trace) {
    src__trace.Trace.parseFirefox.call(this, trace);
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.parseSafari6_1 = function(trace) {
    src__trace.Trace.parseSafari.call(this, trace);
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.parseSafari6_0 = function(trace) {
    src__trace.Trace.new.call(this, trace[$trim]()[$split]("\n")[$where](dart.fn(line => line !== '[native code]', StringTobool()))[$map](src__frame.Frame, dart.fn(line => src__frame.Frame.parseFirefox(line), StringToFrame())), {original: trace});
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.parseFriendly = function(trace) {
    src__trace.Trace.new.call(this, trace[$isEmpty] ? JSArrayOfFrame().of([]) : trace[$trim]()[$split]("\n")[$where](dart.fn(line => !line[$startsWith]('====='), StringTobool()))[$map](src__frame.Frame, dart.fn(line => src__frame.Frame.parseFriendly(line), StringToFrame())), {original: trace});
  }).prototype = src__trace.Trace.prototype;
  (src__trace.Trace.new = function(frames, opts) {
    let original = opts && 'original' in opts ? opts.original : null;
    this[frames$0] = ListOfFrame().unmodifiable(frames);
    this[original$] = core.StackTrace.fromString(original);
  }).prototype = src__trace.Trace.prototype;
  dart.addTypeTests(src__trace.Trace);
  const frames$0 = Symbol("Trace.frames");
  const original$ = Symbol("Trace.original");
  src__trace.Trace[dart.implements] = () => [core.StackTrace];
  dart.setMethodSignature(src__trace.Trace, () => ({
    __proto__: dart.getMethods(src__trace.Trace.__proto__),
    foldFrames: dart.fnType(src__trace.Trace, [FrameTobool()], {terse: core.bool})
  }));
  dart.setStaticMethodSignature(src__trace.Trace, () => ({
    format: dart.fnType(core.String, [core.StackTrace], {terse: core.bool}),
    _parseVM: dart.fnType(core.List$(src__frame.Frame), [core.String])
  }));
  dart.setGetterSignature(src__trace.Trace, () => ({
    __proto__: dart.getGetters(src__trace.Trace.__proto__),
    vmTrace: dart.fnType(core.StackTrace, []),
    terse: dart.fnType(src__trace.Trace, [])
  }));
  dart.setFieldSignature(src__trace.Trace, () => ({
    __proto__: dart.getFields(src__trace.Trace.__proto__),
    frames: dart.finalFieldType(ListOfFrame()),
    original: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(src__trace.Trace, ['toString']);
  dart.defineLazy(src__frame, {
    /*src__frame._vmFrame*/get _vmFrame() {
      return core.RegExp.new('^#\\d+\\s+(\\S.*) \\((.+?)((?::\\d+){0,2})\\)$');
    },
    /*src__frame._v8Frame*/get _v8Frame() {
      return core.RegExp.new('^\\s*at (?:(\\S.*?)(?: \\[as [^\\]]+\\])? \\((.*)\\)|(.*))$');
    },
    /*src__frame._v8UrlLocation*/get _v8UrlLocation() {
      return core.RegExp.new('^(.*):(\\d+):(\\d+)|native$');
    },
    /*src__frame._v8EvalLocation*/get _v8EvalLocation() {
      return core.RegExp.new('^eval at (?:\\S.*?) \\((.*)\\)(?:, .*?:\\d+:\\d+)?$');
    },
    /*src__frame._firefoxSafariFrame*/get _firefoxSafariFrame() {
      return core.RegExp.new('^' + '(?:' + '([^@(/]*)' + '(?:\\(.*\\))?' + '((?:/[^/]*)*)' + '(?:\\(.*\\))?' + '@' + ')?' + '(.*?)' + ':' + '(\\d*)' + '(?::(\\d*))?' + '$');
    },
    /*src__frame._friendlyFrame*/get _friendlyFrame() {
      return core.RegExp.new('^(\\S+)(?: (\\d+)(?::(\\d+))?)?\\s+([^\\d].*)$');
    },
    /*src__frame._asyncBody*/get _asyncBody() {
      return core.RegExp.new('<(<anonymous closure>|[^>]+)_async_body>');
    },
    /*src__frame._initialDot*/get _initialDot() {
      return core.RegExp.new("^\\.");
    }
  });
  src__frame.Frame = class Frame extends core.Object {
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get member() {
      return this[member$];
    }
    set member(value) {
      super.member = value;
    }
    get isCore() {
      return this.uri.scheme === 'dart';
    }
    get library() {
      if (this.uri.scheme === 'data') return "data:...";
      return path$.prettyUri(this.uri);
    }
    get package() {
      if (this.uri.scheme !== 'package') return null;
      return this.uri.path[$split]('/')[$first];
    }
    get location() {
      if (this.line == null) return this.library;
      if (this.column == null) return dart.str`${this.library} ${this.line}`;
      return dart.str`${this.library} ${this.line}:${this.column}`;
    }
    static caller(level) {
      if (level === void 0) level = 1;
      if (dart.notNull(level) < 0) {
        dart.throw(new core.ArgumentError.new("Argument [level] must be greater than or equal " + "to 0."));
      }
      return src__trace.Trace.current(dart.notNull(level) + 1).frames[$first];
    }
    static parseVM(frame) {
      return src__frame.Frame._catchFormatException(frame, dart.fn(() => {
        if (frame === '...') {
          return new src__frame.Frame.new(core.Uri.new(), null, null, '...');
        }
        let match = src__frame._vmFrame.firstMatch(frame);
        if (match == null) return new src__unparsed_frame.UnparsedFrame.new(frame);
        let member = match._get(1)[$replaceAll](src__frame._asyncBody, "<async>")[$replaceAll]("<anonymous closure>", "<fn>");
        let uri = core.Uri.parse(match._get(2));
        let lineAndColumn = match._get(3)[$split](':');
        let line = dart.notNull(lineAndColumn[$length]) > 1 ? core.int.parse(lineAndColumn[$_get](1)) : null;
        let column = dart.notNull(lineAndColumn[$length]) > 2 ? core.int.parse(lineAndColumn[$_get](2)) : null;
        return new src__frame.Frame.new(uri, line, column, member);
      }, VoidToFrame()));
    }
    static parseV8(frame) {
      return src__frame.Frame._catchFormatException(frame, dart.fn(() => {
        let match = src__frame._v8Frame.firstMatch(frame);
        if (match == null) return new src__unparsed_frame.UnparsedFrame.new(frame);
        function parseLocation(location, member) {
          let evalMatch = src__frame._v8EvalLocation.firstMatch(core.String._check(location));
          while (evalMatch != null) {
            location = evalMatch._get(1);
            evalMatch = src__frame._v8EvalLocation.firstMatch(core.String._check(location));
          }
          if (dart.equals(location, 'native')) {
            return new src__frame.Frame.new(core.Uri.parse('native'), null, null, core.String._check(member));
          }
          let urlMatch = src__frame._v8UrlLocation.firstMatch(core.String._check(location));
          if (urlMatch == null) return new src__unparsed_frame.UnparsedFrame.new(frame);
          return new src__frame.Frame.new(src__frame.Frame._uriOrPathToUri(urlMatch._get(1)), core.int.parse(urlMatch._get(2)), core.int.parse(urlMatch._get(3)), core.String._check(member));
        }
        dart.fn(parseLocation, dynamicAnddynamicToFrame());
        if (match._get(2) != null) {
          return parseLocation(match._get(2), match._get(1)[$replaceAll]("<anonymous>", "<fn>")[$replaceAll]("Anonymous function", "<fn>")[$replaceAll]("(anonymous function)", "<fn>"));
        } else {
          return parseLocation(match._get(3), "<fn>");
        }
      }, VoidToFrame()));
    }
    static parseJSCore(frame) {
      return src__frame.Frame.parseV8(frame);
    }
    static parseIE(frame) {
      return src__frame.Frame.parseV8(frame);
    }
    static parseFirefox(frame) {
      return src__frame.Frame._catchFormatException(frame, dart.fn(() => {
        let match = src__frame._firefoxSafariFrame.firstMatch(frame);
        if (match == null) return new src__unparsed_frame.UnparsedFrame.new(frame);
        let uri = src__frame.Frame._uriOrPathToUri(match._get(3));
        let member = null;
        if (match._get(1) != null) {
          member = match._get(1);
          member = dart.dsend(member, '+', ListOfString().filled('/'[$allMatches](match._get(2))[$length], ".<fn>")[$join]());
          if (dart.equals(member, '')) member = '<fn>';
          member = dart.dsend(member, 'replaceFirst', src__frame._initialDot, '');
        } else {
          member = '<fn>';
        }
        let line = match._get(4) === '' ? null : core.int.parse(match._get(4));
        let column = match._get(5) == null || match._get(5) === '' ? null : core.int.parse(match._get(5));
        return new src__frame.Frame.new(uri, line, column, core.String._check(member));
      }, VoidToFrame()));
    }
    static parseSafari6_0(frame) {
      return src__frame.Frame.parseFirefox(frame);
    }
    static parseSafari6_1(frame) {
      return src__frame.Frame.parseFirefox(frame);
    }
    static parseSafari(frame) {
      return src__frame.Frame.parseFirefox(frame);
    }
    static parseFriendly(frame) {
      return src__frame.Frame._catchFormatException(frame, dart.fn(() => {
        let match = src__frame._friendlyFrame.firstMatch(frame);
        if (match == null) {
          dart.throw(new core.FormatException.new(dart.str`Couldn't parse package:stack_trace stack trace line '${frame}'.`));
        }
        let uri = match._get(1) === 'data:...' ? core.Uri.dataFromString('') : core.Uri.parse(match._get(1));
        if (uri.scheme === '') {
          uri = path$.toUri(path$.absolute(path$.fromUri(uri)));
        }
        let line = match._get(2) == null ? null : core.int.parse(match._get(2));
        let column = match._get(3) == null ? null : core.int.parse(match._get(3));
        return new src__frame.Frame.new(uri, line, column, match._get(4));
      }, VoidToFrame()));
    }
    static _uriOrPathToUri(uriOrPath) {
      if (uriOrPath[$contains](src__frame.Frame._uriRegExp)) {
        return core.Uri.parse(uriOrPath);
      } else if (uriOrPath[$contains](src__frame.Frame._windowsRegExp)) {
        return core.Uri.file(uriOrPath, {windows: true});
      } else if (uriOrPath[$startsWith]('/')) {
        return core.Uri.file(uriOrPath, {windows: false});
      }
      if (uriOrPath[$contains]('\\')) return path$.windows.toUri(uriOrPath);
      return core.Uri.parse(uriOrPath);
    }
    static _catchFormatException(text, body) {
      try {
        return body();
      } catch (_) {
        if (core.FormatException.is(_)) {
          return new src__unparsed_frame.UnparsedFrame.new(text);
        } else
          throw _;
      }
    }
    toString() {
      return dart.str`${this.location} in ${this.member}`;
    }
  };
  (src__frame.Frame.new = function(uri, line, column, member) {
    this[uri$] = uri;
    this[line$] = line;
    this[column$] = column;
    this[member$] = member;
  }).prototype = src__frame.Frame.prototype;
  dart.addTypeTests(src__frame.Frame);
  const uri$ = Symbol("Frame.uri");
  const line$ = Symbol("Frame.line");
  const column$ = Symbol("Frame.column");
  const member$ = Symbol("Frame.member");
  dart.setStaticMethodSignature(src__frame.Frame, () => ({
    _uriOrPathToUri: dart.fnType(core.Uri, [core.String]),
    _catchFormatException: dart.fnType(src__frame.Frame, [core.String, VoidToFrame()])
  }));
  dart.setGetterSignature(src__frame.Frame, () => ({
    __proto__: dart.getGetters(src__frame.Frame.__proto__),
    isCore: dart.fnType(core.bool, []),
    library: dart.fnType(core.String, []),
    package: dart.fnType(core.String, []),
    location: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__frame.Frame, () => ({
    __proto__: dart.getFields(src__frame.Frame.__proto__),
    uri: dart.finalFieldType(core.Uri),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int),
    member: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__frame.Frame, ['toString']);
  dart.defineLazy(src__frame.Frame, {
    /*src__frame.Frame._uriRegExp*/get _uriRegExp() {
      return core.RegExp.new('^[a-zA-Z][-+.a-zA-Z\\d]*://');
    },
    /*src__frame.Frame._windowsRegExp*/get _windowsRegExp() {
      return core.RegExp.new('^([a-zA-Z]:[\\\\/]|\\\\\\\\)');
    }
  });
  src__unparsed_frame.UnparsedFrame = class UnparsedFrame extends core.Object {
    get uri() {
      return this[uri];
    }
    set uri(value) {
      super.uri = value;
    }
    get line() {
      return this[line];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column];
    }
    set column(value) {
      super.column = value;
    }
    get isCore() {
      return this[isCore];
    }
    set isCore(value) {
      super.isCore = value;
    }
    get library() {
      return this[library];
    }
    set library(value) {
      super.library = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get location() {
      return this[location];
    }
    set location(value) {
      super.location = value;
    }
    get member() {
      return this[member$0];
    }
    set member(value) {
      super.member = value;
    }
    toString() {
      return this.member;
    }
  };
  (src__unparsed_frame.UnparsedFrame.new = function(member) {
    this[uri] = core.Uri.new({path: "unparsed"});
    this[line] = null;
    this[column] = null;
    this[isCore] = false;
    this[library] = "unparsed";
    this[package$] = null;
    this[location] = "unparsed";
    this[member$0] = member;
  }).prototype = src__unparsed_frame.UnparsedFrame.prototype;
  dart.addTypeTests(src__unparsed_frame.UnparsedFrame);
  const uri = Symbol("UnparsedFrame.uri");
  const line = Symbol("UnparsedFrame.line");
  const column = Symbol("UnparsedFrame.column");
  const isCore = Symbol("UnparsedFrame.isCore");
  const library = Symbol("UnparsedFrame.library");
  const package$ = Symbol("UnparsedFrame.package");
  const location = Symbol("UnparsedFrame.location");
  const member$0 = Symbol("UnparsedFrame.member");
  src__unparsed_frame.UnparsedFrame[dart.implements] = () => [src__frame.Frame];
  dart.setFieldSignature(src__unparsed_frame.UnparsedFrame, () => ({
    __proto__: dart.getFields(src__unparsed_frame.UnparsedFrame.__proto__),
    uri: dart.finalFieldType(core.Uri),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int),
    isCore: dart.finalFieldType(core.bool),
    library: dart.finalFieldType(core.String),
    package: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.String),
    member: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__unparsed_frame.UnparsedFrame, ['toString']);
  dart.trackLibraries("packages/stack_trace/src/chain.ddc", {
    "package:stack_trace/src/lazy_chain.dart": src__lazy_chain,
    "package:stack_trace/src/stack_zone_specification.dart": src__stack_zone_specification,
    "package:stack_trace/src/chain.dart": src__chain,
    "package:stack_trace/src/vm_trace.dart": src__vm_trace,
    "package:stack_trace/src/lazy_trace.dart": src__lazy_trace,
    "package:stack_trace/src/trace.dart": src__trace,
    "package:stack_trace/src/frame.dart": src__frame,
    "package:stack_trace/src/unparsed_frame.dart": src__unparsed_frame
  }, '{"version":3,"sourceRoot":"","sources":["trace.dart","frame.dart","lazy_chain.dart","stack_zone_specification.dart","chain.dart","vm_trace.dart","lazy_trace.dart","unparsed_frame.dart"],"names":[],"mappings":"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","file":"chain.ddc.js"}');
  // Exports:
  return {
    src__lazy_chain: src__lazy_chain,
    src__stack_zone_specification: src__stack_zone_specification,
    src__chain: src__chain,
    src__vm_trace: src__vm_trace,
    src__lazy_trace: src__lazy_trace,
    src__trace: src__trace,
    src__frame: src__frame,
    src__unparsed_frame: src__unparsed_frame
  };
});

//# sourceMappingURL=chain.ddc.js.map
