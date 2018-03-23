define(['dart_sdk', 'packages/test/src/backend/runtime', 'packages/test/src/backend/operating_system', 'packages/boolean_selector/boolean_selector', 'packages/source_span/src/span_exception', 'packages/source_span/src/location', 'packages/test/src/backend/suite_platform'], function(dart_sdk, runtime, operating_system, boolean_selector, span_exception, location, suite_platform) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__backend__runtime = runtime.src__backend__runtime;
  const src__backend__operating_system = operating_system.src__backend__operating_system;
  const boolean_selector$ = boolean_selector.boolean_selector;
  const src__span_exception = span_exception.src__span_exception;
  const src__span = location.src__span;
  const src__backend__suite_platform = suite_platform.src__backend__suite_platform;
  const _root = Object.create(null);
  const src__backend__platform_selector = Object.create(_root);
  const $map = dartx.map;
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  let RuntimeToString = () => (RuntimeToString = dart.constFn(dart.fnType(core.String, [src__backend__runtime.Runtime])))();
  let OperatingSystemToString = () => (OperatingSystemToString = dart.constFn(dart.fnType(core.String, [src__backend__operating_system.OperatingSystem])))();
  let VoidToBooleanSelector = () => (VoidToBooleanSelector = dart.constFn(dart.fnType(boolean_selector$.BooleanSelector, [])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  dart.defineLazy(src__backend__platform_selector, {
    /*src__backend__platform_selector._universalValidVariables*/get _universalValidVariables() {
      let _ = SetOfString().from(["posix", "dart-vm", "browser", "js", "blink", "google"]);
      _.addAll(src__backend__runtime.Runtime.builtIn[$map](core.String, dart.fn(runtime => runtime.identifier, RuntimeToString())));
      _.addAll(src__backend__operating_system.OperatingSystem.all[$map](core.String, dart.fn(os => os.identifier, OperatingSystemToString())));
      return _;
    }
  });
  const _inner = Symbol('_inner');
  const _span = Symbol('_span');
  src__backend__platform_selector.PlatformSelector = class PlatformSelector extends core.Object {
    static _wrapFormatException(T, body, span) {
      if (span == null) return body();
      try {
        return body();
      } catch (error) {
        if (core.FormatException.is(error)) {
          dart.throw(new src__span_exception.SourceSpanFormatException.new(error.message, span));
        } else
          throw error;
      }
    }
    validate(validVariables) {
      if (this === src__backend__platform_selector.PlatformSelector.all) return;
      src__backend__platform_selector.PlatformSelector._wrapFormatException(dart.void, dart.fn(() => this[_inner].validate(dart.fn(name => dart.test(src__backend__platform_selector._universalValidVariables.contains(name)) || dart.test(validVariables.contains(name)), StringTobool())), VoidTovoid()), this[_span]);
    }
    evaluate(platform) {
      return this[_inner].evaluate(dart.fn(variable => {
        if (dart.equals(variable, platform.runtime.identifier)) return true;
        if (dart.equals(variable, (() => {
          let t = platform.runtime.parent;
          return t == null ? null : t.identifier;
        })())) return true;
        if (dart.equals(variable, platform.os.identifier)) return true;
        switch (variable) {
          case "dart-vm":
          {
            return platform.runtime.isDartVM;
          }
          case "browser":
          {
            return platform.runtime.isBrowser;
          }
          case "js":
          {
            return platform.runtime.isJS;
          }
          case "blink":
          {
            return platform.runtime.isBlink;
          }
          case "posix":
          {
            return platform.os.isPosix;
          }
          case "google":
          {
            return platform.inGoogle;
          }
          default:
          {
            return false;
          }
        }
      }, dynamicTobool()));
    }
    intersection(other) {
      if (dart.equals(other, src__backend__platform_selector.PlatformSelector.all)) return this;
      return new src__backend__platform_selector.PlatformSelector.__(this[_inner].intersection(other[_inner]));
    }
    toString() {
      return dart.toString(this[_inner]);
    }
    _equals(other) {
      if (other == null) return false;
      return src__backend__platform_selector.PlatformSelector.is(other) && dart.equals(this[_inner], other[_inner]);
    }
    get hashCode() {
      return dart.hashCode(this[_inner]);
    }
  };
  (src__backend__platform_selector.PlatformSelector.parse = function(selector, span) {
    if (span === void 0) span = null;
    this[_inner] = src__backend__platform_selector.PlatformSelector._wrapFormatException(boolean_selector$.BooleanSelector, dart.fn(() => boolean_selector$.BooleanSelector.parse(selector), VoidToBooleanSelector()), span);
    this[_span] = span;
  }).prototype = src__backend__platform_selector.PlatformSelector.prototype;
  (src__backend__platform_selector.PlatformSelector.__ = function(inner) {
    this[_inner] = inner;
    this[_span] = null;
  }).prototype = src__backend__platform_selector.PlatformSelector.prototype;
  dart.addTypeTests(src__backend__platform_selector.PlatformSelector);
  dart.setMethodSignature(src__backend__platform_selector.PlatformSelector, () => ({
    __proto__: dart.getMethods(src__backend__platform_selector.PlatformSelector.__proto__),
    validate: dart.fnType(dart.void, [SetOfString()]),
    evaluate: dart.fnType(core.bool, [src__backend__suite_platform.SuitePlatform]),
    intersection: dart.fnType(src__backend__platform_selector.PlatformSelector, [src__backend__platform_selector.PlatformSelector])
  }));
  dart.setStaticMethodSignature(src__backend__platform_selector.PlatformSelector, () => ({_wrapFormatException: dart.gFnType(T => [T, [dart.fnType(T, []), src__span.SourceSpan]])}));
  dart.setFieldSignature(src__backend__platform_selector.PlatformSelector, () => ({
    __proto__: dart.getFields(src__backend__platform_selector.PlatformSelector.__proto__),
    [_inner]: dart.finalFieldType(boolean_selector$.BooleanSelector),
    [_span]: dart.finalFieldType(src__span.SourceSpan)
  }));
  dart.defineExtensionMethods(src__backend__platform_selector.PlatformSelector, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__backend__platform_selector.PlatformSelector, ['hashCode']);
  dart.defineLazy(src__backend__platform_selector.PlatformSelector, {
    /*src__backend__platform_selector.PlatformSelector.all*/get all() {
      return dart.const(new src__backend__platform_selector.PlatformSelector.__(boolean_selector$.BooleanSelector.all));
    }
  });
  dart.trackLibraries("packages/test/src/backend/platform_selector.ddc", {
    "package:test/src/backend/platform_selector.dart": src__backend__platform_selector
  }, '{"version":3,"sourceRoot":"","sources":["platform_selector.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;MAYM,wDAAwB;cAAG,AAAI,kBAAgB,CACjD,CAAC,SAAS,WAAW,WAAW,MAAM,SAAS;eACxC,6BAAO,QAAQ,MAAI,cAAC,QAAC,OAAO,IAAK,OAAO,WAAW;eACnD,8CAAe,IAAI,MAAI,cAAC,QAAC,EAAE,IAAK,EAAE,WAAW;;;;;;;mCAiCrB,IAAQ,EAAE,IAAe;AACxD,UAAI,IAAI,IAAI,MAAM,MAAO,KAAI;AAE7B,UAAI;AACF,cAAO,KAAI;eACe;AAA1B,4CAAiC;AACjC,qBAAM,IAAI,iDAAyB,CAAC,KAAK,QAAQ,EAAE,IAAI;;;;IAE3D;aAKc,cAA0B;AACtC,UAAI,AAAU,SAAM,oDAAG,EAAG;AAE1B,2EAAoB,YAChB,cAAM,YAAM,SAAS,CAAC,QAAC,IAAI,IACiB,UAAxC,wDAAwB,SAAS,CAAC,IAAI,gBACtC,cAAc,SAAS,CAAC,IAAI,qCAChC,WAAK;IACX;aAKc,QAAsB;AAClC,YAAO,aAAM,SAAS,CAAC,QAAC,QAAQ;AAC9B,wBAAI,QAAQ,EAAI,QAAQ,QAAQ,WAAW,GAAE,MAAO;AACpD,wBAAI,QAAQ;kBAAI,QAAQ,QAAQ,OAAO;;eAAc,MAAO;AAC5D,wBAAI,QAAQ,EAAI,QAAQ,GAAG,WAAW,GAAE,MAAO;AAC/C,gBAAQ,QAAQ;cACT;;AACH,kBAAO,SAAQ,QAAQ,SAAS;;cAC7B;;AACH,kBAAO,SAAQ,QAAQ,UAAU;;cAC9B;;AACH,kBAAO,SAAQ,QAAQ,KAAK;;cACzB;;AACH,kBAAO,SAAQ,QAAQ,QAAQ;;cAC5B;;AACH,kBAAO,SAAQ,GAAG,QAAQ;;cACvB;;AACH,kBAAO,SAAQ,SAAS;;;;AAExB,kBAAO;;;;IAGf;iBAI8B,KAAsB;AAClD,sBAAI,KAAK,EAAI,gDAAgB,IAAI,GAAE,MAAO;AAC1C,YAAO,KAAI,mDAAkB,CAAC,YAAM,aAAa,CAAC,KAAK,QAAO;IAChE;;2BAEqB,YAAM;IAAW;YAErB,KAAK;UAAL,KAAK;YACQ,qDAA1B,KAAK,iBAAwB,YAAM,EAAI,KAAK,QAAO;;;2BAEnC,YAAM;IAAS;;qEAzEZ,QAAe,EAAG,IAAe;yBAAJ;IAC9C,YAAM,GAAG,qEAAoB,oCACzB,cAAM,AAAI,uCAAqB,CAAC,QAAQ,6BAAG,IAAI;IACnD,WAAK,GAAG,IAAI;;kEAEY,KAAM;IAAN,YAAM,GAAN,KAAM;IAAI,WAAK,GAAG;EAAI;;;;;;;;;;;;;;;;;MAjBvC,oDAAG;YAAG,gBAAM,mDAAkB,CAAC,iCAAe,IAAI","file":"platform_selector.ddc.js"}');
  // Exports:
  return {
    src__backend__platform_selector: src__backend__platform_selector
  };
});

//# sourceMappingURL=platform_selector.ddc.js.map
