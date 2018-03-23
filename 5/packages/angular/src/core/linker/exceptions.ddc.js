define(['dart_sdk', 'packages/angular/src/facade/exception_handler'], function(dart_sdk, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__facade__exceptions = exception_handler.src__facade__exceptions;
  const _root = Object.create(null);
  const src__core__linker__exceptions = Object.create(_root);
  src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException = class ExpressionChangedAfterItHasBeenCheckedException extends src__facade__exceptions.BaseException {};
  (src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException.new = function(oldValue, currValue, context) {
    src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException.__proto__.new.call(this, "Expression has changed after it was checked. " + dart.str`Previous value: '${oldValue}'. Current value: '${currValue}'`);
  }).prototype = src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException.prototype;
  dart.addTypeTests(src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException);
  src__core__linker__exceptions.ViewWrappedException = class ViewWrappedException extends src__facade__exceptions.WrappedException {};
  (src__core__linker__exceptions.ViewWrappedException.new = function(originalException, originalStack, context) {
    src__core__linker__exceptions.ViewWrappedException.__proto__.new.call(this, dart.str`Error in ${dart.dload(context, 'source')}`, originalException, originalStack, context);
  }).prototype = src__core__linker__exceptions.ViewWrappedException.prototype;
  dart.addTypeTests(src__core__linker__exceptions.ViewWrappedException);
  src__core__linker__exceptions.ViewDestroyedException = class ViewDestroyedException extends src__facade__exceptions.BaseException {};
  (src__core__linker__exceptions.ViewDestroyedException.new = function(details) {
    src__core__linker__exceptions.ViewDestroyedException.__proto__.new.call(this, dart.str`Attempt to use a destroyed view: ${details}`);
  }).prototype = src__core__linker__exceptions.ViewDestroyedException.prototype;
  dart.addTypeTests(src__core__linker__exceptions.ViewDestroyedException);
  dart.trackLibraries("packages/angular/src/core/linker/exceptions.ddc", {
    "package:angular/src/core/linker/exceptions.dart": src__core__linker__exceptions
  }, '{"version":3,"sourceRoot":"","sources":["exceptions.dart"],"names":[],"mappings":";;;;;;;;;gGAoCM,QAAgB,EAAE,SAAiB,EAAE,OAAe;AAClD,2GAAM,kDACF,4BAAmB,QAAQ,sBAAoB,SAAS;EAAG;;;qEASjE,iBAAyB,EAAE,aAAqB,EAAE,OAAe;AAC/D,gFAAM,+BAAY,OAAO,eAAW,iBAAiB,EAAE,aAAa,EAChE,OAAO;EAAC;;;uEASK,OAAc;AAC/B,kFAAM,4CAAmC,OAAO;EAAE","file":"exceptions.ddc.js"}');
  // Exports:
  return {
    src__core__linker__exceptions: src__core__linker__exceptions
  };
});

//# sourceMappingURL=exceptions.ddc.js.map
