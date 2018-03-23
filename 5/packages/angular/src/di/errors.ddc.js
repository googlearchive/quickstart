define(['dart_sdk', 'packages/angular/src/runtime/optimizations'], function(dart_sdk, optimizations) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const _root = Object.create(null);
  const src__di__errors = Object.create(_root);
  const $add = dartx.add;
  const $removeLast = dartx.removeLast;
  const $isNotEmpty = dartx.isNotEmpty;
  const $isEmpty = dartx.isEmpty;
  const $join = dartx.join;
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let ObjectToError = () => (ObjectToError = dart.constFn(dart.fnType(core.Error, [core.Object])))();
  let ObjectToString = () => (ObjectToString = dart.constFn(dart.fnType(core.String, [core.Object])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  dart.defineLazy(src__di__errors, {
    /*src__di__errors._tokenStack*/get _tokenStack() {
      return null;
    },
    set _tokenStack(_) {}
  });
  src__di__errors.debugInjectorEnter = function(token) {
    if (!dart.test(src__runtime__optimizations.isDevMode)) {
      return;
    }
    if (src__di__errors._tokenStack == null) {
      src__di__errors._tokenStack = JSArrayOfObject().of([token]);
    } else {
      src__di__errors._tokenStack[$add](token);
    }
  };
  dart.fn(src__di__errors.debugInjectorEnter, ObjectTovoid());
  src__di__errors.debugInjectorLeave = function(token) {
    if (!dart.test(src__runtime__optimizations.isDevMode)) {
      return;
    }
    if (!dart.test(src__di__errors.InjectionError.enableBetterErrors)) {
      return;
    }
    src__di__errors._tokenStack[$removeLast]();
  };
  dart.fn(src__di__errors.debugInjectorLeave, ObjectTovoid());
  src__di__errors.noProviderError = function(token) {
    if (dart.test(src__runtime__optimizations.isDevMode)) {
      let error = new src__di__errors.NoProviderError.__(token, src__di__errors._tokenStack);
      src__di__errors._tokenStack = null;
      return error;
    }
    return new core.ArgumentError.new(src__di__errors._noProviderError(token));
  };
  dart.fn(src__di__errors.noProviderError, ObjectToError());
  src__di__errors._noProviderError = function(token) {
    return dart.str`No provider found for ${token}`;
  };
  dart.fn(src__di__errors._noProviderError, ObjectToString());
  src__di__errors.InjectionError = class InjectionError extends core.AssertionError {};
  (src__di__errors.InjectionError.__ = function() {
    src__di__errors.InjectionError.__proto__.new.call(this);
  }).prototype = src__di__errors.InjectionError.prototype;
  dart.addTypeTests(src__di__errors.InjectionError);
  dart.defineLazy(src__di__errors.InjectionError, {
    /*src__di__errors.InjectionError.enableBetterErrors*/get enableBetterErrors() {
      return true;
    },
    set enableBetterErrors(_) {}
  });
  let const$;
  src__di__errors.NoProviderError = class NoProviderError extends src__di__errors.InjectionError {
    static _withAdjacentDeduped(input, token) {
      if (input == null) {
        return const$ || (const$ = dart.constList([], core.Object));
      }
      let output = [];
      let lastElement = new core.Object.new();
      for (let element of input) {
        if (!core.identical(lastElement, element)) {
          output[$add](lastElement = element);
        }
      }
      if (dart.test(output[$isNotEmpty])) {
        output[$removeLast]();
      }
      return output;
    }
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    get path() {
      return this[path];
    }
    set path(value) {
      super.path = value;
    }
    toString() {
      return dart.test(this.path[$isEmpty]) ? src__di__errors._noProviderError(this.token) : dart.notNull(src__di__errors._noProviderError(this.token)) + (dart.str`: ${this.path[$join](' -> ')} -> ${this.token}.\n` + '**NOTE**: This path is not exhaustive, and nodes may be missing ' + 'in between the "->" delimiters. There is ongoing work to improve ' + 'this error message and include all the nodes where possible. ');
    }
  };
  (src__di__errors.NoProviderError.__ = function(token, stack) {
    this[token$] = token;
    this[path] = src__di__errors.NoProviderError._withAdjacentDeduped(stack, token);
    src__di__errors.NoProviderError.__proto__.__.call(this);
  }).prototype = src__di__errors.NoProviderError.prototype;
  dart.addTypeTests(src__di__errors.NoProviderError);
  const token$ = Symbol("NoProviderError.token");
  const path = Symbol("NoProviderError.path");
  dart.setStaticMethodSignature(src__di__errors.NoProviderError, () => ({_withAdjacentDeduped: dart.fnType(core.List$(core.Object), [ListOfObject(), core.Object])}));
  dart.setFieldSignature(src__di__errors.NoProviderError, () => ({
    __proto__: dart.getFields(src__di__errors.NoProviderError.__proto__),
    token: dart.finalFieldType(core.Object),
    path: dart.finalFieldType(ListOfObject())
  }));
  dart.defineExtensionMethods(src__di__errors.NoProviderError, ['toString']);
  dart.trackLibraries("packages/angular/src/di/errors.ddc", {
    "package:angular/src/di/errors.dart": src__di__errors
  }, '{"version":3,"sourceRoot":"","sources":["errors.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MAIa,2BAAW;;;;;gDAaA,KAAY;AAElC,mBAAK,qCAAS,GAAE;AACd;;AAEF,QAAI,2BAAW,IAAI,MAAM;AACvB,oCAAc,sBAAC,KAAK;WACf;AACL,iCAAW,MAAI,CAAC,KAAK;;EAEzB;;gDAGwB,KAAY;AAElC,mBAAK,qCAAS,GAAE;AACd;;AAGF,mBAAK,8BAAc,mBAAmB,GAAE;AACtC;;AAEF,+BAAW,aAAW;EACxB;;6CAGsB,KAAY;AAGhC,kBAAI,qCAAS,GAAE;AACb,UAAM,QAAQ,IAAI,kCAAiB,CAAC,KAAK,EAAE,2BAAW;AAEtD,oCAAc;AACd,YAAO,MAAK;;AAEd,UAAO,KAAI,sBAAa,CAAC,gCAAgB,CAAC,KAAK;EACjD;;8CAEwB,KAAY;UAAK,kCAAwB,KAAK;EAAC;;;;;EAcnD;;;MAFN,iDAAkB;YAAG;;;;;;gCAQQ,KAAkB,EAAE,KAAY;AACvE,UAAI,KAAK,IAAI,MAAM;AACjB,cAAO;;AAET,UAAM,SAAS;AACf,UAAI,cAAc,IAAI,eAAM;AAC5B,eAAW,UAAW,MAAK,EAAE;AAC3B,aAAK,eAAU,WAAW,EAAE,OAAO,GAAG;AACpC,gBAAM,MAAI,CAAC,WAAW,GAAG,OAAO;;;AAIpC,oBAAI,MAAM,aAAW,GAAE;AACrB,cAAM,aAAW;;AAEnB,YAAO,OAAM;IACf;IAGa;;;;;;IAGM;;;;;;;uBAOE,SAAI,UAAQ,IAC3B,gCAAgB,CAAC,UAAK,IACE,aAAxB,gCAAgB,CAAC,UAAK,MACpB,aAAK,SAAI,OAAK,CAAC,cAAa,UAAK,QACjC,qEACA,sEACA;IAA+D;;iDAXrD,KAAU,EAAE,KAAkB;IAAzB,YAAK,GAAL,KAAK;IACtB,UAAI,GAAG,oDAAoB,CAAC,KAAK,EAAE,KAAK;AACxC;EAAS","file":"errors.ddc.js"}');
  // Exports:
  return {
    src__di__errors: src__di__errors
  };
});

//# sourceMappingURL=errors.ddc.js.map
