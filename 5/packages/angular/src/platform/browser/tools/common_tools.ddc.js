define(['dart_sdk', 'packages/angular/src/core/application_ref'], function(dart_sdk, application_ref) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const _root = Object.create(null);
  const src__platform__browser__tools__common_tools = Object.create(_root);
  const $console = dartx.console;
  const $toStringAsFixed = dartx.toStringAsFixed;
  src__platform__browser__tools__common_tools.ChangeDetectionPerfRecord = class ChangeDetectionPerfRecord extends core.Object {
    get msPerTick() {
      return this[msPerTick$];
    }
    set msPerTick(value) {
      this[msPerTick$] = value;
    }
    get numTicks() {
      return this[numTicks$];
    }
    set numTicks(value) {
      super.numTicks = value;
    }
  };
  (src__platform__browser__tools__common_tools.ChangeDetectionPerfRecord.new = function(msPerTick, numTicks) {
    this[msPerTick$] = msPerTick;
    this[numTicks$] = numTicks;
  }).prototype = src__platform__browser__tools__common_tools.ChangeDetectionPerfRecord.prototype;
  dart.addTypeTests(src__platform__browser__tools__common_tools.ChangeDetectionPerfRecord);
  const msPerTick$ = Symbol("ChangeDetectionPerfRecord.msPerTick");
  const numTicks$ = Symbol("ChangeDetectionPerfRecord.numTicks");
  dart.setFieldSignature(src__platform__browser__tools__common_tools.ChangeDetectionPerfRecord, () => ({
    __proto__: dart.getFields(src__platform__browser__tools__common_tools.ChangeDetectionPerfRecord.__proto__),
    msPerTick: dart.fieldType(core.num),
    numTicks: dart.finalFieldType(core.int)
  }));
  src__platform__browser__tools__common_tools.AngularTools = class AngularTools extends core.Object {
    get profiler() {
      return this[profiler];
    }
    set profiler(value) {
      super.profiler = value;
    }
  };
  (src__platform__browser__tools__common_tools.AngularTools.new = function(ref) {
    this[profiler] = new src__platform__browser__tools__common_tools.AngularProfiler.new(ref);
  }).prototype = src__platform__browser__tools__common_tools.AngularTools.prototype;
  dart.addTypeTests(src__platform__browser__tools__common_tools.AngularTools);
  const profiler = Symbol("AngularTools.profiler");
  dart.setFieldSignature(src__platform__browser__tools__common_tools.AngularTools, () => ({
    __proto__: dart.getFields(src__platform__browser__tools__common_tools.AngularTools.__proto__),
    profiler: dart.finalFieldType(src__platform__browser__tools__common_tools.AngularProfiler)
  }));
  src__platform__browser__tools__common_tools.AngularProfiler = class AngularProfiler extends core.Object {
    get appRef() {
      return this[appRef];
    }
    set appRef(value) {
      super.appRef = value;
    }
    timeChangeDetection(config) {
      let record = config != null && dart.dtest(dart.dindex(config, "record"));
      let profileName = 'Change Detection';
      let isProfilerAvailable = dart.bind(html.window[$console], 'profile') !== null;
      if (record && isProfilerAvailable) {
        html.window[$console].profile(profileName);
      }
      let perf = html.window.performance;
      let start = perf.now();
      let numTicks = 0;
      while (numTicks < 5 || dart.notNull(perf.now()) - dart.notNull(start) < 500) {
        this.appRef.tick();
        numTicks++;
      }
      let end = perf.now();
      if (record && isProfilerAvailable) {
        dart.dcall(dart.bind(html.window[$console], 'profileEnd'), profileName);
      }
      let msPerTick = (dart.notNull(end) - dart.notNull(start)) / numTicks;
      core.print(dart.str`ran ${numTicks} change detection cycles`);
      core.print(dart.str`${msPerTick[$toStringAsFixed](2)} ms per check`);
      return new src__platform__browser__tools__common_tools.ChangeDetectionPerfRecord.new(msPerTick, numTicks);
    }
  };
  (src__platform__browser__tools__common_tools.AngularProfiler.new = function(ref) {
    this[appRef] = src__core__application_ref.ApplicationRef._check(ref.injector.get(dart.wrapType(src__core__application_ref.ApplicationRef)));
  }).prototype = src__platform__browser__tools__common_tools.AngularProfiler.prototype;
  dart.addTypeTests(src__platform__browser__tools__common_tools.AngularProfiler);
  const appRef = Symbol("AngularProfiler.appRef");
  dart.setMethodSignature(src__platform__browser__tools__common_tools.AngularProfiler, () => ({
    __proto__: dart.getMethods(src__platform__browser__tools__common_tools.AngularProfiler.__proto__),
    timeChangeDetection: dart.fnType(src__platform__browser__tools__common_tools.ChangeDetectionPerfRecord, [dart.dynamic])
  }));
  dart.setFieldSignature(src__platform__browser__tools__common_tools.AngularProfiler, () => ({
    __proto__: dart.getFields(src__platform__browser__tools__common_tools.AngularProfiler.__proto__),
    appRef: dart.finalFieldType(src__core__application_ref.ApplicationRef)
  }));
  dart.trackLibraries("packages/angular/src/platform/browser/tools/common_tools.ddc", {
    "package:angular/src/platform/browser/tools/common_tools.dart": src__platform__browser__tools__common_tools
  }, '{"version":3,"sourceRoot":"","sources":["common_tools.dart"],"names":[],"mappings":";;;;;;;;;;;;IAOM;;;;;;IACM;;;;;;;wFACgB,SAAc,EAAE,QAAa;IAAxB,gBAAS,GAAT,SAAS;IAAO,eAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;IAMlC;;;;;;;2EACT,GAAgB;IAAI,cAAQ,GAAG,IAAI,+DAAe,CAAC,GAAG;EAAC;;;;;;;;IAM/C;;;;;;wBAmByB,MAAc;AAE1D,UAAI,SAAS,AAAe,MAAT,IAAI,+BAAQ,MAAM,EAAC;AACtC,UAAI,cAAc;AAGlB,UAAI,gCAAsB,WAAM,UAAQ,iBAAY;AACpD,UAAI,MAAM,IAAI,mBAAmB,EAAE;AACjC,mBAAM,UAAQ,QAAQ,CAAC,WAAW;;AAEpC,UAAI,OAAO,WAAM,YAAY;AAC7B,UAAI,QAAQ,IAAI,IAAI;AACpB,UAAI,WAAW;AACf,aAAO,AAAS,QAAD,GAAG,KAAiB,AAAS,aAApB,IAAI,IAAI,mBAAK,KAAK,IAAI,KAAK;AACjD,mBAAM,KAAK;AACX,gBAAQ;;AAEV,UAAI,MAAM,IAAI,IAAI;AAClB,UAAI,MAAM,IAAI,mBAAmB,EAAE;AAQjC,6BAAE,WAAM,UAAQ,iBAAyB,WAAW;;AAEtD,UAAI,YAA0B,CAAT,aAAJ,GAAG,iBAAG,KAAK,KAAI,QAAQ;AACxC,gBAAK,CAAC,eAAM,QAAQ;AACpB,gBAAK,CAAC,WAAG,SAAS,kBAAgB,CAAC;AACnC,YAAO,KAAI,yEAAyB,CAAC,SAAS,EAAE,QAAQ;IAC1D;;8EAhDgB,GAAgB;IAAI,YAAM,oDAAG,GAAG,SAAS,IAAI,CAAC,wDAAc;EAAC","file":"common_tools.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__tools__common_tools: src__platform__browser__tools__common_tools
  };
});

//# sourceMappingURL=common_tools.ddc.js.map
