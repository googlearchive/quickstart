define(['dart_sdk', 'packages/angular/src/facade/exception_handler'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exception_handler = exception_handler.src__facade__exception_handler;
  const _root = Object.create(null);
  const src__platform__browser__exceptions = Object.create(_root);
  const $console = dartx.console;
  src__platform__browser__exceptions.BrowserExceptionHandler = class BrowserExceptionHandler extends core.Object {
    call(error, stack, reason) {
      if (stack === void 0) stack = null;
      if (reason === void 0) reason = null;
      return this.handle(error, stack, reason);
    }
    handle(exception, stack, reason) {
      if (stack === void 0) stack = null;
      if (reason === void 0) reason = null;
      html.window[$console].error(src__facade__exception_handler.ExceptionHandler.exceptionToString(exception, stack, reason));
    }
  };
  src__platform__browser__exceptions.BrowserExceptionHandler.prototype[dart._runtimeType] = src__platform__browser__exceptions.BrowserExceptionHandler;
  (src__platform__browser__exceptions.BrowserExceptionHandler.new = function callableClass() {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self);
      return self;
    }
  }).prototype = src__platform__browser__exceptions.BrowserExceptionHandler.prototype;
  dart.addTypeTests(src__platform__browser__exceptions.BrowserExceptionHandler);
  src__platform__browser__exceptions.BrowserExceptionHandler[dart.implements] = () => [src__facade__exception_handler.ExceptionHandler];
  dart.setMethodSignature(src__platform__browser__exceptions.BrowserExceptionHandler, () => ({
    __proto__: dart.getMethods(src__platform__browser__exceptions.BrowserExceptionHandler.__proto__),
    call: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, core.String]),
    handle: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, core.String])
  }));
  dart.trackLibraries("packages/angular/src/platform/browser/exceptions.ddc", {
    "package:angular/src/platform/browser/exceptions.dart": src__platform__browser__exceptions
  }, '{"version":3,"sourceRoot":"","sources":["exceptions.dart"],"names":[],"mappings":";;;;;;;;;;;SAUY,KAAK,EAAG,KAAK,EAAE,MAAa;4BAApB;6BAAc;YAAY,YAAM,CAAC,KAAK,EAAE,KAAK,EAAE,MAAM;IAAC;WAE5D,SAAS,EAAG,KAAK,EAAE,MAAa;4BAApB;6BAAc;AACpC,iBAAM,UAAQ,MAAM,CAAC,+CAAgB,kBAAkB,CACrD,SAAS,EACT,KAAK,EACL,MAAM;IAEV;;;;;;;;;;;;EAZ+B","file":"exceptions.ddc.js"}');
  // Exports:
  return {
    src__platform__browser__exceptions: src__platform__browser__exceptions
  };
});

//# sourceMappingURL=exceptions.ddc.js.map
