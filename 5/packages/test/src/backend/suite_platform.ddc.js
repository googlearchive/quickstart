define(['dart_sdk', 'packages/test/src/backend/operating_system', 'packages/test/src/backend/runtime'], function(dart_sdk, operating_system, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__backend__operating_system = operating_system.src__backend__operating_system;
  const src__backend__runtime = runtime.src__backend__runtime;
  const _root = Object.create(null);
  const src__backend__suite_platform = Object.create(_root);
  const $_get = dartx._get;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  src__backend__suite_platform.SuitePlatform = class SuitePlatform extends core.Object {
    get runtime() {
      return this[runtime$];
    }
    set runtime(value) {
      super.runtime = value;
    }
    get os() {
      return this[os$];
    }
    set os(value) {
      super.os = value;
    }
    get inGoogle() {
      return this[inGoogle$];
    }
    set inGoogle(value) {
      super.inGoogle = value;
    }
    static deserialize(serialized) {
      let map = core.Map.as(serialized);
      return new src__backend__suite_platform.SuitePlatform.new(src__backend__runtime.Runtime.deserialize(map[$_get]('runtime')), {os: src__backend__operating_system.OperatingSystem.find(core.String._check(map[$_get]('os'))), inGoogle: core.bool._check(map[$_get]('inGoogle'))});
    }
    serialize() {
      return new (IdentityMapOfString$Object()).from(['runtime', this.runtime.serialize(), 'os', this.os.identifier, 'inGoogle', this.inGoogle]);
    }
  };
  (src__backend__suite_platform.SuitePlatform.new = function(runtime, opts) {
    let os = opts && 'os' in opts ? opts.os : null;
    let inGoogle = opts && 'inGoogle' in opts ? opts.inGoogle : false;
    this[runtime$] = runtime;
    this[inGoogle$] = inGoogle;
    this[os$] = os != null ? os : src__backend__operating_system.OperatingSystem.none;
    if (dart.test(this.runtime.isBrowser) && !dart.equals(this.os, src__backend__operating_system.OperatingSystem.none)) {
      dart.throw(new core.ArgumentError.new(dart.str`No OS should be passed for runtime "${this.runtime}".`));
    }
  }).prototype = src__backend__suite_platform.SuitePlatform.prototype;
  dart.addTypeTests(src__backend__suite_platform.SuitePlatform);
  const runtime$ = Symbol("SuitePlatform.runtime");
  const os$ = Symbol("SuitePlatform.os");
  const inGoogle$ = Symbol("SuitePlatform.inGoogle");
  dart.setMethodSignature(src__backend__suite_platform.SuitePlatform, () => ({
    __proto__: dart.getMethods(src__backend__suite_platform.SuitePlatform.__proto__),
    serialize: dart.fnType(core.Object, [])
  }));
  dart.setFieldSignature(src__backend__suite_platform.SuitePlatform, () => ({
    __proto__: dart.getFields(src__backend__suite_platform.SuitePlatform.__proto__),
    runtime: dart.finalFieldType(src__backend__runtime.Runtime),
    os: dart.finalFieldType(src__backend__operating_system.OperatingSystem),
    inGoogle: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/test/src/backend/suite_platform.ddc", {
    "package:test/src/backend/suite_platform.dart": src__backend__suite_platform
  }, '{"version":3,"sourceRoot":"","sources":["suite_platform.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAUgB;;;;;;IAMQ;;;;;;IAGX;;;;;;uBAgBuB,UAAiB;AAAE,AACnD,UAAI,kBAAM,UAAU;AACpB,YAAO,KAAI,8CAAa,CAAC,AAAI,yCAAmB,CAAC,GAAG,QAAC,kBAC7C,8CAAe,KAAK,oBAAC,GAAG,QAAC,oCAAkB,GAAG,QAAC;IACzD;;YAIsB,0CAChB,WAAW,YAAO,UAAU,IAC5B,MAAM,OAAE,WAAW,EACnB,YAAY,aAAQ;IACrB;;6DArBS,OAAY;QAAmB;QAAS,wDAAU;IAA7C,cAAO,GAAP,OAAO;IAA4B,eAAQ,GAAR,QAAQ;IACxD,SAAE,GAAG,EAAE,WAAF,EAAE,GAAI,8CAAe,KAAK;AACnC,kBAAI,YAAO,UAAU,kBAAI,OAAO,EAAI,8CAAe,KAAK,GAAE;AACxD,iBAAM,IAAI,sBAAa,CAAC,+CAAsC,YAAO;;EAEzE","file":"suite_platform.ddc.js"}');
  // Exports:
  return {
    src__backend__suite_platform: src__backend__suite_platform
  };
});

//# sourceMappingURL=suite_platform.ddc.js.map
