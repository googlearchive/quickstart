define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/security/dom_sanitization_service_impl', 'packages/angular/src/core/di.template', 'packages/angular/src/core/security.template', 'packages/angular/src/security/dom_sanitization_service.template', 'packages/angular/src/security/html_sanitizer.template', 'packages/angular/src/security/style_sanitizer.template', 'packages/angular/src/security/url_sanitizer.template'], function(dart_sdk, reflector, dom_sanitization_service_impl, di, security, dom_sanitization_service, html_sanitizer, style_sanitizer, url_sanitizer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__security__dom_sanitization_service_impl = dom_sanitization_service_impl.src__security__dom_sanitization_service_impl;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__security$46template = security.src__core__security$46template;
  const src__security__dom_sanitization_service$46template = dom_sanitization_service.src__security__dom_sanitization_service$46template;
  const src__security__html_sanitizer$46template = html_sanitizer.src__security__html_sanitizer$46template;
  const src__security__style_sanitizer$46template = style_sanitizer.src__security__style_sanitizer$46template;
  const src__security__url_sanitizer$46template = url_sanitizer.src__security__url_sanitizer$46template;
  const _root = Object.create(null);
  const src__security__dom_sanitization_service_impl$46template = Object.create(_root);
  let VoidToDomSanitizationServiceImpl = () => (VoidToDomSanitizationServiceImpl = dart.constFn(dart.fnType(src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__security__dom_sanitization_service_impl$46template, {
    /*src__security__dom_sanitization_service_impl$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__security__dom_sanitization_service_impl$46template.initReflector = function() {
    if (dart.test(src__security__dom_sanitization_service_impl$46template._visited)) {
      return;
    }
    src__security__dom_sanitization_service_impl$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl), dart.fn(() => new src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl.new(), VoidToDomSanitizationServiceImpl()));
    src__core__di$46template.initReflector();
    src__core__security$46template.initReflector();
    src__security__dom_sanitization_service$46template.initReflector();
    src__security__html_sanitizer$46template.initReflector();
    src__security__style_sanitizer$46template.initReflector();
    src__security__url_sanitizer$46template.initReflector();
  };
  dart.fn(src__security__dom_sanitization_service_impl$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/security/dom_sanitization_service_impl.template.ddc", {
    "package:angular/src/security/dom_sanitization_service_impl.template.dart": src__security__dom_sanitization_service_impl$46template
  }, '{"version":3,"sourceRoot":"","sources":["dom_sanitization_service_impl.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAqBI,gEAAQ;YAAG;;;;;AAEb,kBAAI,gEAAQ,GAAE;AACZ;;AAEF,uEAAW;AAEX,IAAO,kCAAe,CAAC,sFAA0B,EAAE,cAAM,IAAI,2EAA0B;AACvF,IAAM,sCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,gEAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,qDAAa;EACrB","file":"dom_sanitization_service_impl.template.ddc.js"}');
  // Exports:
  return {
    src__security__dom_sanitization_service_impl$46template: src__security__dom_sanitization_service_impl$46template
  };
});

//# sourceMappingURL=dom_sanitization_service_impl.template.ddc.js.map
