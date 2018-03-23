define(['dart_sdk', 'packages/logging/logging'], function(dart_sdk, logging) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logging$ = logging.logging;
  const _root = Object.create(null);
  const src__facade__exception_handler = Object.create(_root);
  const src__facade__exceptions = Object.create(_root);
  const $toString = dartx.toString;
  const $join = dartx.join;
  const _logger = Symbol('_logger');
  src__facade__exception_handler.ExceptionHandler = class ExceptionHandler extends core.Object {
    static _extractMessage(exception) {
      return src__facade__exceptions.WrappedException.is(exception) ? exception.wrapperMessage : dart.toString(exception);
    }
    static _findContext(exception) {
      try {
        return src__facade__exceptions.WrappedException.is(exception) ? (() => {
          let l = exception.context;
          return l != null ? l : src__facade__exception_handler.ExceptionHandler._findContext(exception.originalException);
        })() : null;
      } catch (_) {
        return null;
      }
    }
    static _findOriginalException(exception) {
      while (src__facade__exceptions.WrappedException.is(exception)) {
        exception = dart.dload(exception, 'originalException');
      }
      return exception;
    }
    static _findOriginalStackTrace(exception) {
      let stackTrace = null;
      while (src__facade__exceptions.WrappedException.is(exception)) {
        stackTrace = dart.dload(exception, 'originalStack');
        exception = dart.dload(exception, 'originalException');
      }
      return stackTrace;
    }
    static _longStackTrace(stackTrace) {
      return core.Iterable.is(stackTrace) ? stackTrace[$join]('\n\n-----async gap-----\n') : dart.toString(stackTrace);
    }
    static exceptionToString(exception, stackTrace, reason) {
      if (stackTrace === void 0) stackTrace = null;
      if (reason === void 0) reason = null;
      let originalStackTrace = src__facade__exception_handler.ExceptionHandler._findOriginalStackTrace(exception);
      let originalException = src__facade__exception_handler.ExceptionHandler._findOriginalException(exception);
      let context = src__facade__exception_handler.ExceptionHandler._findContext(exception);
      let buffer = new core.StringBuffer.new();
      buffer.writeln(dart.str`EXCEPTION: ${src__facade__exception_handler.ExceptionHandler._extractMessage(exception)}`);
      if (stackTrace != null) {
        buffer.writeln('STACKTRACE: ');
        buffer.writeln(src__facade__exception_handler.ExceptionHandler._longStackTrace(stackTrace));
      }
      if (reason != null) {
        buffer.writeln(dart.str`REASON: ${reason}`);
      }
      if (originalException != null) {
        buffer.writeln(dart.str`ORIGINAL EXCEPTION: ${src__facade__exception_handler.ExceptionHandler._extractMessage(originalException)}`);
      }
      if (originalStackTrace != null) {
        buffer.writeln('ORIGINAL STACKTRACE:');
        buffer.writeln(src__facade__exception_handler.ExceptionHandler._longStackTrace(originalStackTrace));
      }
      if (context != null) {
        buffer.writeln('ERROR CONTEXT:');
        buffer.writeln(context);
      }
      return buffer.toString();
    }
    call(exception, stackTrace, reason) {
      if (stackTrace === void 0) stackTrace = null;
      if (reason === void 0) reason = null;
      this[_logger].severe(src__facade__exception_handler.ExceptionHandler.exceptionToString(exception, stackTrace, reason));
    }
  };
  src__facade__exception_handler.ExceptionHandler.prototype[dart._runtimeType] = src__facade__exception_handler.ExceptionHandler;
  (src__facade__exception_handler.ExceptionHandler.new = function callableClass(logger) {
    if (typeof this !== "function") {
      function self(...args) {
        return self.call.apply(self, args);
      }
      self.__proto__ = this.__proto__;
      callableClass.call(self, logger);
      return self;
    }
    this[_logger] = logger;
  }).prototype = src__facade__exception_handler.ExceptionHandler.prototype;
  dart.addTypeTests(src__facade__exception_handler.ExceptionHandler);
  dart.setMethodSignature(src__facade__exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getMethods(src__facade__exception_handler.ExceptionHandler.__proto__),
    call: dart.fnType(dart.void, [dart.dynamic], [dart.dynamic, core.String])
  }));
  dart.setStaticMethodSignature(src__facade__exception_handler.ExceptionHandler, () => ({
    _extractMessage: dart.fnType(core.String, [dart.dynamic]),
    _findContext: dart.fnType(dart.dynamic, [dart.dynamic]),
    _findOriginalException: dart.fnType(dart.dynamic, [dart.dynamic]),
    _findOriginalStackTrace: dart.fnType(dart.dynamic, [dart.dynamic]),
    _longStackTrace: dart.fnType(core.String, [dart.dynamic]),
    exceptionToString: dart.fnType(core.String, [dart.dynamic], [dart.dynamic, core.String])
  }));
  dart.setFieldSignature(src__facade__exception_handler.ExceptionHandler, () => ({
    __proto__: dart.getFields(src__facade__exception_handler.ExceptionHandler.__proto__),
    [_logger]: dart.finalFieldType(logging$.Logger)
  }));
  const _message = Symbol('_message');
  src__facade__exceptions.BaseException = class BaseException extends core.Error {
    get message() {
      return this[_message];
    }
    toString() {
      return this.message;
    }
  };
  (src__facade__exceptions.BaseException.new = function(message) {
    if (message === void 0) message = null;
    this[_message] = message;
    src__facade__exceptions.BaseException.__proto__.new.call(this);
  }).prototype = src__facade__exceptions.BaseException.prototype;
  dart.addTypeTests(src__facade__exceptions.BaseException);
  dart.setGetterSignature(src__facade__exceptions.BaseException, () => ({
    __proto__: dart.getGetters(src__facade__exceptions.BaseException.__proto__),
    message: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__facade__exceptions.BaseException, () => ({
    __proto__: dart.getFields(src__facade__exceptions.BaseException.__proto__),
    [_message]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__facade__exceptions.BaseException, ['toString']);
  const _wrapperMessage = Symbol('_wrapperMessage');
  const _context = Symbol('_context');
  src__facade__exceptions.WrappedException = class WrappedException extends core.Error {
    get originalException() {
      return this[originalException$];
    }
    set originalException(value) {
      super.originalException = value;
    }
    get originalStack() {
      return this[originalStack$];
    }
    set originalStack(value) {
      super.originalStack = value;
    }
    get message() {
      return src__facade__exception_handler.ExceptionHandler.exceptionToString(this);
    }
    toString() {
      return this.message;
    }
    get context() {
      return this[_context];
    }
    get wrapperMessage() {
      return this[_wrapperMessage];
    }
  };
  (src__facade__exceptions.WrappedException.new = function(wrapperMessage, originalException, originalStack, context) {
    if (wrapperMessage === void 0) wrapperMessage = null;
    if (originalException === void 0) originalException = null;
    if (originalStack === void 0) originalStack = null;
    if (context === void 0) context = null;
    this[_wrapperMessage] = wrapperMessage;
    this[originalException$] = originalException;
    this[originalStack$] = originalStack;
    this[_context] = context;
    src__facade__exceptions.WrappedException.__proto__.new.call(this);
  }).prototype = src__facade__exceptions.WrappedException.prototype;
  dart.addTypeTests(src__facade__exceptions.WrappedException);
  const originalException$ = Symbol("WrappedException.originalException");
  const originalStack$ = Symbol("WrappedException.originalStack");
  dart.setGetterSignature(src__facade__exceptions.WrappedException, () => ({
    __proto__: dart.getGetters(src__facade__exceptions.WrappedException.__proto__),
    message: dart.fnType(core.String, []),
    context: dart.fnType(dart.dynamic, []),
    wrapperMessage: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__facade__exceptions.WrappedException, () => ({
    __proto__: dart.getFields(src__facade__exceptions.WrappedException.__proto__),
    [_context]: dart.finalFieldType(dart.dynamic),
    [_wrapperMessage]: dart.finalFieldType(core.String),
    originalException: dart.finalFieldType(dart.dynamic),
    originalStack: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__facade__exceptions.WrappedException, ['toString']);
  dart.trackLibraries("packages/angular/src/facade/exception_handler.ddc", {
    "package:angular/src/facade/exception_handler.dart": src__facade__exception_handler,
    "package:angular/src/facade/exceptions.dart": src__facade__exceptions
  }, '{"version":3,"sourceRoot":"","sources":["exception_handler.dart","exceptions.dart"],"names":[],"mappings":";;;;;;;;;;;;;2BA6BgC,SAAS;yDAAK,SAAS,IAC/C,SAAS,eAAe,iBACxB,SAAS;IAAW;wBAEN,SAAS;AAC3B,UAAI;AACF,2DAAO,SAAS;kBACV,SAAS,QAAQ;iCAAI,4DAAY,CAAC,SAAS,kBAAkB;eAC7D;eACC;AAAG,AACV,cAAO;;IAEX;kCAE8B,SAAS;AACrC,yDAAO,SAAS,GAAsB;AACpC,iBAAS,cAAG,SAAS;;AAEvB,YAAO,UAAS;IAClB;mCAE+B,SAAS;AACtC,UAAI;AACJ,yDAAO,SAAS,GAAsB;AACpC,kBAAU,cAAG,SAAS;AACtB,iBAAS,cAAG,SAAS;;AAEvB,YAAO,WAAU;IACnB;2BAE8B,UAAU;8BAAK,UAAU,IACjD,UAAU,OAAK,CAAC,6CAChB,UAAU;IAAW;6BAIzB,SAAS,EACT,UAAU,EACV,MAAa;iCADb;6BACO;AAEP,UAAM,qBAAqB,uEAAuB,CAAC,SAAS;AAC5D,UAAM,oBAAoB,sEAAsB,CAAC,SAAS;AAC1D,UAAM,UAAU,4DAAY,CAAC,SAAS;AACtC,UAAM,SAAS,IAAI,qBAAY;AAC/B,YAAM,QAAQ,CAAC,sBAAc,+DAAe,CAAC,SAAS;AACtD,UAAI,UAAU,IAAI,MAAM;AACtB,cAAM,QAAQ,CAAC;AACf,cAAM,QAAQ,CAAC,+DAAe,CAAC,UAAU;;AAE3C,UAAI,MAAM,IAAI,MAAM;AAClB,cAAM,QAAQ,CAAC,mBAAU,MAAM;;AAEjC,UAAI,iBAAiB,IAAI,MAAM;AAC7B,cAAM,QAAQ,CACZ,+BAAuB,+DAAe,CAAC,iBAAiB;;AAG5D,UAAI,kBAAkB,IAAI,MAAM;AAC9B,cAAM,QAAQ,CAAC;AACf,cAAM,QAAQ,CAAC,+DAAe,CAAC,kBAAkB;;AAEnD,UAAI,OAAO,IAAI,MAAM;AACnB,cAAM,QAAQ,CAAC;AACf,cAAM,QAAQ,CAAC,OAAO;;AAExB,YAAO,OAAM,SAAS;IACxB;SAUU,SAAS,EAAG,UAAU,EAAE,MAAa;iCAAzB;6BAAmB;AACvC,mBAAO,OAAO,CAAC,iEAAiB,CAAC,SAAS,EAAE,UAAU,EAAE,MAAM;IAChE;;;gFAR4B,MAAO;;;;;;+BAAP,MAAO;;;IAAP,aAAO,GAAP,MAAO;EAAC;;;;;;;;;;;;;;;;;;;;;YC1Fd,eAAQ;;;AAG5B,YAAO,aAAY;IACrB;;wDANoB,OAAQ;QAAR,OAAQ,aAAR,OAAQ;IAAR,cAAQ,GAAR,OAAQ;;EAAE;;;;;;;;;;;;;;IAYxB;;;;;;IACA;;;;;;;YAQgB,gDAAgB,kBAAkB,CAAC;IAAK;;YAEzC,aAAO;;;YAEL,eAAQ;;;YAEF,sBAAe;;;2DAXlC,cAAe,EACrB,iBAAsB,EACtB,aAAkB,EACb,OAAQ;QAHP,cAAe,aAAf,cAAe;sCAChB;kCACA;QACA,OAAQ,aAAR,OAAQ;IAHP,qBAAe,GAAf,cAAe;IAChB,wBAAiB,GAAjB,iBAAiB;IACjB,oBAAa,GAAb,aAAa;IACb,cAAQ,GAAR,OAAQ;;EAAE","file":"exception_handler.ddc.js"}');
  // Exports:
  return {
    src__facade__exception_handler: src__facade__exception_handler,
    src__facade__exceptions: src__facade__exceptions
  };
});

//# sourceMappingURL=exception_handler.ddc.js.map
