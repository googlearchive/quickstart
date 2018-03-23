define(['dart_sdk', 'packages/test/src/runner/environment', 'packages/async/async'], function(dart_sdk, environment, async) {
  'use strict';
  const core = dart_sdk.core;
  const async$ = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runner__environment = environment.src__runner__environment;
  const src__cancelable_operation = async.src__cancelable_operation;
  const _root = Object.create(null);
  const src__runner__plugin__environment = Object.create(_root);
  src__runner__plugin__environment.PluginEnvironment = class PluginEnvironment extends core.Object {
    get supportsDebugging() {
      return this[supportsDebugging];
    }
    set supportsDebugging(value) {
      super.supportsDebugging = value;
    }
    get onRestart() {
      return async$.StreamController.broadcast().stream;
    }
    get observatoryUrl() {
      return null;
    }
    get remoteDebuggerUrl() {
      return null;
    }
    displayPause() {
      return dart.throw(new core.UnsupportedError.new("PluginEnvironment.displayPause is not supported."));
    }
  };
  (src__runner__plugin__environment.PluginEnvironment.new = function() {
    this[supportsDebugging] = false;
  }).prototype = src__runner__plugin__environment.PluginEnvironment.prototype;
  dart.addTypeTests(src__runner__plugin__environment.PluginEnvironment);
  const supportsDebugging = Symbol("PluginEnvironment.supportsDebugging");
  src__runner__plugin__environment.PluginEnvironment[dart.implements] = () => [src__runner__environment.Environment];
  dart.setMethodSignature(src__runner__plugin__environment.PluginEnvironment, () => ({
    __proto__: dart.getMethods(src__runner__plugin__environment.PluginEnvironment.__proto__),
    displayPause: dart.fnType(src__cancelable_operation.CancelableOperation, [])
  }));
  dart.setGetterSignature(src__runner__plugin__environment.PluginEnvironment, () => ({
    __proto__: dart.getGetters(src__runner__plugin__environment.PluginEnvironment.__proto__),
    onRestart: dart.fnType(async$.Stream, []),
    observatoryUrl: dart.fnType(core.Uri, []),
    remoteDebuggerUrl: dart.fnType(core.Uri, [])
  }));
  dart.setFieldSignature(src__runner__plugin__environment.PluginEnvironment, () => ({
    __proto__: dart.getFields(src__runner__plugin__environment.PluginEnvironment.__proto__),
    supportsDebugging: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/test/src/runner/plugin/environment.ddc", {
    "package:test/src/runner/plugin/environment.dart": src__runner__plugin__environment
  }, '{"version":3,"sourceRoot":"","sources":["environment.dart"],"names":[],"mappings":";;;;;;;;;;;IAYQ;;;;;;;YACkB,AAAI,kCAA0B,SAAS;;;YAIrC;IAAI;;YAED;IAAI;;YAEK,YAAM,IAAI,yBAAgB,CAC5D;IAAmD;;;IAVjD,uBAAiB,GAAG;EAGD","file":"environment.ddc.js"}');
  // Exports:
  return {
    src__runner__plugin__environment: src__runner__plugin__environment
  };
});

//# sourceMappingURL=environment.ddc.js.map
