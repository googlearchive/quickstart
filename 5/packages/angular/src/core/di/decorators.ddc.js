define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__di__decorators = Object.create(_root);
  src__core__di__decorators.Inject = class Inject extends core.Object {
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
    toString() {
      return dart.str`@Inject(${this.token})`;
    }
  };
  (src__core__di__decorators.Inject.new = function(token) {
    this[token$] = token;
  }).prototype = src__core__di__decorators.Inject.prototype;
  dart.addTypeTests(src__core__di__decorators.Inject);
  const token$ = Symbol("Inject.token");
  dart.setFieldSignature(src__core__di__decorators.Inject, () => ({
    __proto__: dart.getFields(src__core__di__decorators.Inject.__proto__),
    token: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__core__di__decorators.Inject, ['toString']);
  src__core__di__decorators.Injectable = class Injectable extends core.Object {};
  (src__core__di__decorators.Injectable.new = function() {
  }).prototype = src__core__di__decorators.Injectable.prototype;
  dart.addTypeTests(src__core__di__decorators.Injectable);
  src__core__di__decorators.Optional = class Optional extends core.Object {};
  (src__core__di__decorators.Optional.new = function() {
  }).prototype = src__core__di__decorators.Optional.prototype;
  dart.addTypeTests(src__core__di__decorators.Optional);
  src__core__di__decorators.Self = class Self extends core.Object {};
  (src__core__di__decorators.Self.new = function() {
  }).prototype = src__core__di__decorators.Self.prototype;
  dart.addTypeTests(src__core__di__decorators.Self);
  src__core__di__decorators.SkipSelf = class SkipSelf extends core.Object {};
  (src__core__di__decorators.SkipSelf.new = function() {
  }).prototype = src__core__di__decorators.SkipSelf.prototype;
  dart.addTypeTests(src__core__di__decorators.SkipSelf);
  src__core__di__decorators.Host = class Host extends core.Object {};
  (src__core__di__decorators.Host.new = function() {
  }).prototype = src__core__di__decorators.Host.prototype;
  dart.addTypeTests(src__core__di__decorators.Host);
  dart.trackLibraries("packages/angular/src/core/di/decorators.ddc", {
    "package:angular/src/core/di/decorators.dart": src__core__di__decorators
  }, '{"version":3,"sourceRoot":"","sources":["decorators.dart"],"names":[],"mappings":";;;;;;;;IAwCQ;;;;;;;YAKe,oBAAU,UAAK;IAAE;;mDAHzB,KAAU;IAAL,YAAK,GAAL,KAAK;EAAC;;;;;;;;;;EA6DN;;;;EAsBF;;;;EA0BJ;;;;EA0BI;;;;EAyDJ","file":"decorators.ddc.js"}');
  // Exports:
  return {
    src__core__di__decorators: src__core__di__decorators
  };
});

//# sourceMappingURL=decorators.ddc.js.map
