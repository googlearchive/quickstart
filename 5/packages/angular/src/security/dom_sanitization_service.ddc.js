define(['dart_sdk', 'packages/angular/src/core/security'], function(dart_sdk, security) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__security = security.src__core__security;
  const _root = Object.create(null);
  const src__security__dom_sanitization_service = Object.create(_root);
  src__security__dom_sanitization_service.SafeHtml = class SafeHtml extends src__core__security.SafeValue {};
  (src__security__dom_sanitization_service.SafeHtml.new = function() {
  }).prototype = src__security__dom_sanitization_service.SafeHtml.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service.SafeHtml);
  src__security__dom_sanitization_service.SafeStyle = class SafeStyle extends src__core__security.SafeValue {};
  (src__security__dom_sanitization_service.SafeStyle.new = function() {
  }).prototype = src__security__dom_sanitization_service.SafeStyle.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service.SafeStyle);
  src__security__dom_sanitization_service.SafeScript = class SafeScript extends src__core__security.SafeValue {};
  (src__security__dom_sanitization_service.SafeScript.new = function() {
  }).prototype = src__security__dom_sanitization_service.SafeScript.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service.SafeScript);
  src__security__dom_sanitization_service.SafeUrl = class SafeUrl extends src__core__security.SafeValue {};
  (src__security__dom_sanitization_service.SafeUrl.new = function() {
  }).prototype = src__security__dom_sanitization_service.SafeUrl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service.SafeUrl);
  src__security__dom_sanitization_service.SafeResourceUrl = class SafeResourceUrl extends src__core__security.SafeValue {};
  (src__security__dom_sanitization_service.SafeResourceUrl.new = function() {
  }).prototype = src__security__dom_sanitization_service.SafeResourceUrl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service.SafeResourceUrl);
  src__security__dom_sanitization_service.DomSanitizationService = class DomSanitizationService extends core.Object {};
  (src__security__dom_sanitization_service.DomSanitizationService.new = function() {
  }).prototype = src__security__dom_sanitization_service.DomSanitizationService.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service.DomSanitizationService);
  src__security__dom_sanitization_service.DomSanitizationService[dart.implements] = () => [src__core__security.SanitizationService];
  dart.trackLibraries("packages/angular/src/security/dom_sanitization_service.ddc", {
    "package:angular/src/security/dom_sanitization_service.dart": src__security__dom_sanitization_service
  }, '{"version":3,"sourceRoot":"","sources":["dom_sanitization_service.dart"],"names":[],"mappings":";;;;;;;;;;EAI2C;;;;EAEC;;;;EAEC;;;;EAEH;;;;EAEQ;;;;EAiFlD","file":"dom_sanitization_service.ddc.js"}');
  // Exports:
  return {
    src__security__dom_sanitization_service: src__security__dom_sanitization_service
  };
});

//# sourceMappingURL=dom_sanitization_service.ddc.js.map
