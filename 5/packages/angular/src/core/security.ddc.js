define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__security = Object.create(_root);
  src__core__security.TemplateSecurityContext = class TemplateSecurityContext extends core.Object {
    toString() {
      return {
        0: "TemplateSecurityContext.none",
        1: "TemplateSecurityContext.html",
        2: "TemplateSecurityContext.style",
        3: "TemplateSecurityContext.script",
        4: "TemplateSecurityContext.url",
        5: "TemplateSecurityContext.resourceUrl"
      }[this.index];
    }
  };
  (src__core__security.TemplateSecurityContext.new = function(x) {
    this.index = x;
  }).prototype = src__core__security.TemplateSecurityContext.prototype;
  dart.addTypeTests(src__core__security.TemplateSecurityContext);
  dart.setFieldSignature(src__core__security.TemplateSecurityContext, () => ({
    __proto__: dart.getFields(src__core__security.TemplateSecurityContext.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__security.TemplateSecurityContext, ['toString']);
  src__core__security.TemplateSecurityContext.none = dart.const(new src__core__security.TemplateSecurityContext.new(0));
  src__core__security.TemplateSecurityContext.html = dart.const(new src__core__security.TemplateSecurityContext.new(1));
  src__core__security.TemplateSecurityContext.style = dart.const(new src__core__security.TemplateSecurityContext.new(2));
  src__core__security.TemplateSecurityContext.script = dart.const(new src__core__security.TemplateSecurityContext.new(3));
  src__core__security.TemplateSecurityContext.url = dart.const(new src__core__security.TemplateSecurityContext.new(4));
  src__core__security.TemplateSecurityContext.resourceUrl = dart.const(new src__core__security.TemplateSecurityContext.new(5));
  src__core__security.TemplateSecurityContext.values = dart.constList([src__core__security.TemplateSecurityContext.none, src__core__security.TemplateSecurityContext.html, src__core__security.TemplateSecurityContext.style, src__core__security.TemplateSecurityContext.script, src__core__security.TemplateSecurityContext.url, src__core__security.TemplateSecurityContext.resourceUrl], src__core__security.TemplateSecurityContext);
  src__core__security.SanitizationService = class SanitizationService extends core.Object {};
  (src__core__security.SanitizationService.new = function() {
  }).prototype = src__core__security.SanitizationService.prototype;
  dart.addTypeTests(src__core__security.SanitizationService);
  src__core__security.SafeValue = class SafeValue extends core.Object {};
  (src__core__security.SafeValue.new = function() {
  }).prototype = src__core__security.SafeValue.prototype;
  dart.addTypeTests(src__core__security.SafeValue);
  dart.trackLibraries("packages/angular/src/core/security.ddc", {
    "package:angular/src/core/security.dart": src__core__security
  }, '{"version":3,"sourceRoot":"","sources":["security.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA8CA;;;;EAE0B","file":"security.ddc.js"}');
  // Exports:
  return {
    src__core__security: src__core__security
  };
});

//# sourceMappingURL=security.ddc.js.map
