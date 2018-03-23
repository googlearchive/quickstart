define(['dart_sdk', 'packages/angular/src/platform/browser/tools/common_tools', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, common_tools, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__platform__browser__tools__common_tools = common_tools.src__platform__browser__tools__common_tools;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const _root = Object.create(null);
  const src__platform__browser__tools__tools = Object.create(_root);
  let __ToNull = () => (__ToNull = dart.constFn(dart.fnType(core.Null, [], [dart.dynamic])))();
  let MapOfString$__ToNull = () => (MapOfString$__ToNull = dart.constFn(core.Map$(core.String, __ToNull())))();
  let IdentityMapOfString$MapOfString$__ToNull = () => (IdentityMapOfString$MapOfString$__ToNull = dart.constFn(_js_helper.IdentityMap$(core.String, MapOfString$__ToNull())))();
  let IdentityMapOfString$__ToNull = () => (IdentityMapOfString$__ToNull = dart.constFn(_js_helper.IdentityMap$(core.String, __ToNull())))();
  let ComponentRefTovoid = () => (ComponentRefTovoid = dart.constFn(dart.fnType(dart.void, [src__core__linker__component_factory.ComponentRef])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  src__platform__browser__tools__tools.enableDebugTools = function(ref) {
    let tools = new src__platform__browser__tools__common_tools.AngularTools.new(ref);
    js.context._set('ng', js.JsObject.jsify(new (IdentityMapOfString$MapOfString$__ToNull()).from(['profiler', new (IdentityMapOfString$__ToNull()).from(['timeChangeDetection', dart.fn(config => {
          if (config === void 0) config = null;
          tools.profiler.timeChangeDetection(config);
        }, __ToNull())])])));
  };
  dart.fn(src__platform__browser__tools__tools.enableDebugTools, ComponentRefTovoid());
  src__platform__browser__tools__tools.disableDebugTools = function() {
    js.context.deleteProperty('ng');
  };
  dart.fn(src__platform__browser__tools__tools.disableDebugTools, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/browser/tools/tools.ddc", {
    "package:angular/src/platform/browser/tools/tools.dart": src__platform__browser__tools__tools
  }, '{"version":3,"sourceRoot":"","sources":["tools.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;mEAgBsB,GAAgB;AACpC,QAAM,QAAQ,IAAI,4DAAY,CAAC,GAAG;AAClC,cAAO,MAAC,MAAQ,AAAI,iBAAc,CAAC,uDACjC,YAAY,2CACV,uBAAuB,QAAE,MAAM;iCAAN;AACvB,eAAK,SAAS,oBAAoB,CAAC,MAAM;;EAIjD;;;AAIE,cAAO,eAAe,CAAC;EACzB","file":"tools.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__tools__tools: src__platform__browser__tools__tools
  };
});

//# sourceMappingURL=tools.ddc.js.map
