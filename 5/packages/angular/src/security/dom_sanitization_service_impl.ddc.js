define(['dart_sdk', 'packages/angular/src/core/security', 'packages/angular/src/security/html_sanitizer', 'packages/angular/src/security/style_sanitizer', 'packages/angular/src/security/url_sanitizer', 'packages/angular/src/security/dom_sanitization_service'], function(dart_sdk, security, html_sanitizer, style_sanitizer, url_sanitizer, dom_sanitization_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__security = security.src__core__security;
  const src__security__html_sanitizer = html_sanitizer.src__security__html_sanitizer;
  const src__security__style_sanitizer = style_sanitizer.src__security__style_sanitizer;
  const src__security__url_sanitizer = url_sanitizer.src__security__url_sanitizer;
  const src__security__dom_sanitization_service = dom_sanitization_service.src__security__dom_sanitization_service;
  const _root = Object.create(null);
  const src__security__dom_sanitization_service_impl = Object.create(_root);
  const $toString = dartx.toString;
  const _checkNotSafeValue = Symbol('_checkNotSafeValue');
  src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl = class DomSanitizationServiceImpl extends core.Object {
    sanitize(ctx, value) {
      if (value == null) return null;
      switch (ctx) {
        case src__core__security.TemplateSecurityContext.none:
        {
          return core.String._check(value);
        }
        case src__core__security.TemplateSecurityContext.html:
        {
          if (src__security__dom_sanitization_service_impl.SafeHtmlImpl.is(value)) {
            return value.changingThisWillBypassSecurityTrust;
          }
          this[_checkNotSafeValue](value, 'HTML');
          return src__security__html_sanitizer.sanitizeHtmlInternal(dart.toString(value));
        }
        case src__core__security.TemplateSecurityContext.style:
        {
          if (src__security__dom_sanitization_service_impl.SafeStyleImpl.is(value)) {
            return value.changingThisWillBypassSecurityTrust;
          }
          this[_checkNotSafeValue](value, 'Style');
          return src__security__style_sanitizer.internalSanitizeStyle(core.String._check(value));
        }
        case src__core__security.TemplateSecurityContext.script:
        {
          if (src__security__dom_sanitization_service_impl.SafeScriptImpl.is(value)) {
            return value.changingThisWillBypassSecurityTrust;
          }
          this[_checkNotSafeValue](value, 'Script');
          dart.throw(new core.UnsupportedError.new('unsafe value used in a script context'));
        }
        case src__core__security.TemplateSecurityContext.url:
        {
          if (src__security__dom_sanitization_service_impl.SafeUrlImpl.is(value)) {
            return value.changingThisWillBypassSecurityTrust;
          }
          this[_checkNotSafeValue](value, 'URL');
          return src__security__url_sanitizer.internalSanitizeUrl(dart.toString(value));
        }
        case src__core__security.TemplateSecurityContext.resourceUrl:
        {
          if (src__security__dom_sanitization_service_impl.SafeResourceUrlImpl.is(value)) {
            return value.changingThisWillBypassSecurityTrust;
          }
          this[_checkNotSafeValue](value, 'ResourceURL');
          dart.throw(new core.UnsupportedError.new('unsafe value used in a resource URL context'));
        }
        default:
        {
          dart.throw(new core.UnsupportedError.new(dart.str`Unexpected SecurityContext ${ctx}`));
        }
      }
    }
    [_checkNotSafeValue](value, expectedType) {
      if (src__security__dom_sanitization_service_impl.SafeValueImpl.is(value)) {
        dart.throw(new core.UnsupportedError.new(dart.str`Required a safe ${expectedType}, ` + dart.str`got a ${value.getTypeName()}`));
      }
    }
    sanitizeHtml(value) {
      if (value == null) return null;
      if (src__security__dom_sanitization_service_impl.SafeHtmlImpl.is(value)) return value.changingThisWillBypassSecurityTrust;
      if (src__core__security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new(dart.str`Unexpected SecurityContext ${value}, expecting html`));
      return src__security__html_sanitizer.sanitizeHtmlInternal(core.String._check(value));
    }
    sanitizeStyle(value) {
      if (value == null) return null;
      if (src__security__dom_sanitization_service_impl.SafeStyleImpl.is(value)) {
        return value.changingThisWillBypassSecurityTrust;
      }
      if (src__core__security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new(dart.str`Unexpected SecurityContext ${value}, ` + 'expecting style'));
      if (value == null) return null;
      return src__security__style_sanitizer.internalSanitizeStyle(typeof value == 'string' ? value : dart.toString(value));
    }
    sanitizeScript(value) {
      if (value == null) return null;
      if (src__security__dom_sanitization_service_impl.SafeScriptImpl.is(value)) {
        return value.changingThisWillBypassSecurityTrust;
      }
      if (src__core__security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new(dart.str`Unexpected SecurityContext ${value}, expecting script`));
      dart.throw(new core.UnsupportedError.new('Security violation in script binding.'));
    }
    sanitizeUrl(value) {
      if (value == null) return null;
      if (src__security__dom_sanitization_service_impl.SafeUrlImpl.is(value)) return value.changingThisWillBypassSecurityTrust;
      if (src__core__security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new(dart.str`Unexpected SecurityContext ${value}, ` + 'expecting url'));
      return src__security__url_sanitizer.internalSanitizeUrl(dart.toString(value));
    }
    sanitizeResourceUrl(value) {
      if (value == null) return null;
      if (src__security__dom_sanitization_service_impl.SafeResourceUrlImpl.is(value)) {
        return value.changingThisWillBypassSecurityTrust;
      }
      if (src__core__security.SafeValue.is(value)) dart.throw(new core.UnsupportedError.new(dart.str`Unexpected SecurityContext ${value}, ` + 'expecting resource url'));
      dart.throw(new core.UnsupportedError.new('Security violation in resource url. Create SafeValue'));
    }
    bypassSecurityTrustHtml(value) {
      return new src__security__dom_sanitization_service_impl.SafeHtmlImpl.new(value != null ? value : '');
    }
    bypassSecurityTrustStyle(value) {
      return new src__security__dom_sanitization_service_impl.SafeStyleImpl.new(value != null ? value : '');
    }
    bypassSecurityTrustScript(value) {
      return new src__security__dom_sanitization_service_impl.SafeScriptImpl.new(value != null ? value : '');
    }
    bypassSecurityTrustUrl(value) {
      return new src__security__dom_sanitization_service_impl.SafeUrlImpl.new(value != null ? value : '');
    }
    bypassSecurityTrustResourceUrl(value) {
      return new src__security__dom_sanitization_service_impl.SafeResourceUrlImpl.new(value != null ? value : '');
    }
  };
  (src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl.new = function() {
  }).prototype = src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl);
  src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl[dart.implements] = () => [src__security__dom_sanitization_service.DomSanitizationService];
  dart.setMethodSignature(src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl, () => ({
    __proto__: dart.getMethods(src__security__dom_sanitization_service_impl.DomSanitizationServiceImpl.__proto__),
    sanitize: dart.fnType(core.String, [src__core__security.TemplateSecurityContext, dart.dynamic]),
    [_checkNotSafeValue]: dart.fnType(dart.void, [dart.dynamic, core.String]),
    sanitizeHtml: dart.fnType(core.String, [dart.dynamic]),
    sanitizeStyle: dart.fnType(core.String, [dart.dynamic]),
    sanitizeScript: dart.fnType(core.String, [dart.dynamic]),
    sanitizeUrl: dart.fnType(core.String, [dart.dynamic]),
    sanitizeResourceUrl: dart.fnType(core.String, [dart.dynamic]),
    bypassSecurityTrustHtml: dart.fnType(src__security__dom_sanitization_service.SafeHtml, [core.String]),
    bypassSecurityTrustStyle: dart.fnType(src__security__dom_sanitization_service.SafeStyle, [core.String]),
    bypassSecurityTrustScript: dart.fnType(src__security__dom_sanitization_service.SafeScript, [core.String]),
    bypassSecurityTrustUrl: dart.fnType(src__security__dom_sanitization_service.SafeUrl, [core.String]),
    bypassSecurityTrustResourceUrl: dart.fnType(src__security__dom_sanitization_service.SafeResourceUrl, [core.String])
  }));
  src__security__dom_sanitization_service_impl.SafeValueImpl = class SafeValueImpl extends core.Object {
    get changingThisWillBypassSecurityTrust() {
      return this[changingThisWillBypassSecurityTrust$];
    }
    set changingThisWillBypassSecurityTrust(value) {
      super.changingThisWillBypassSecurityTrust = value;
    }
    toString() {
      return this.changingThisWillBypassSecurityTrust;
    }
  };
  (src__security__dom_sanitization_service_impl.SafeValueImpl.new = function(changingThisWillBypassSecurityTrust) {
    this[changingThisWillBypassSecurityTrust$] = changingThisWillBypassSecurityTrust;
  }).prototype = src__security__dom_sanitization_service_impl.SafeValueImpl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service_impl.SafeValueImpl);
  const changingThisWillBypassSecurityTrust$ = Symbol("SafeValueImpl.changingThisWillBypassSecurityTrust");
  src__security__dom_sanitization_service_impl.SafeValueImpl[dart.implements] = () => [src__core__security.SafeValue];
  dart.setFieldSignature(src__security__dom_sanitization_service_impl.SafeValueImpl, () => ({
    __proto__: dart.getFields(src__security__dom_sanitization_service_impl.SafeValueImpl.__proto__),
    changingThisWillBypassSecurityTrust: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__security__dom_sanitization_service_impl.SafeValueImpl, ['toString']);
  src__security__dom_sanitization_service_impl.SafeHtmlImpl = class SafeHtmlImpl extends src__security__dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return 'HTML';
    }
  };
  (src__security__dom_sanitization_service_impl.SafeHtmlImpl.new = function(value) {
    src__security__dom_sanitization_service_impl.SafeHtmlImpl.__proto__.new.call(this, value);
  }).prototype = src__security__dom_sanitization_service_impl.SafeHtmlImpl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service_impl.SafeHtmlImpl);
  src__security__dom_sanitization_service_impl.SafeHtmlImpl[dart.implements] = () => [src__security__dom_sanitization_service.SafeHtml];
  dart.setMethodSignature(src__security__dom_sanitization_service_impl.SafeHtmlImpl, () => ({
    __proto__: dart.getMethods(src__security__dom_sanitization_service_impl.SafeHtmlImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  src__security__dom_sanitization_service_impl.SafeStyleImpl = class SafeStyleImpl extends src__security__dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return 'Style';
    }
  };
  (src__security__dom_sanitization_service_impl.SafeStyleImpl.new = function(value) {
    src__security__dom_sanitization_service_impl.SafeStyleImpl.__proto__.new.call(this, value);
  }).prototype = src__security__dom_sanitization_service_impl.SafeStyleImpl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service_impl.SafeStyleImpl);
  src__security__dom_sanitization_service_impl.SafeStyleImpl[dart.implements] = () => [src__security__dom_sanitization_service.SafeStyle];
  dart.setMethodSignature(src__security__dom_sanitization_service_impl.SafeStyleImpl, () => ({
    __proto__: dart.getMethods(src__security__dom_sanitization_service_impl.SafeStyleImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  src__security__dom_sanitization_service_impl.SafeScriptImpl = class SafeScriptImpl extends src__security__dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return 'Script';
    }
  };
  (src__security__dom_sanitization_service_impl.SafeScriptImpl.new = function(value) {
    src__security__dom_sanitization_service_impl.SafeScriptImpl.__proto__.new.call(this, value);
  }).prototype = src__security__dom_sanitization_service_impl.SafeScriptImpl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service_impl.SafeScriptImpl);
  src__security__dom_sanitization_service_impl.SafeScriptImpl[dart.implements] = () => [src__security__dom_sanitization_service.SafeScript];
  dart.setMethodSignature(src__security__dom_sanitization_service_impl.SafeScriptImpl, () => ({
    __proto__: dart.getMethods(src__security__dom_sanitization_service_impl.SafeScriptImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  src__security__dom_sanitization_service_impl.SafeUrlImpl = class SafeUrlImpl extends src__security__dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return 'URL';
    }
  };
  (src__security__dom_sanitization_service_impl.SafeUrlImpl.new = function(value) {
    src__security__dom_sanitization_service_impl.SafeUrlImpl.__proto__.new.call(this, value);
  }).prototype = src__security__dom_sanitization_service_impl.SafeUrlImpl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service_impl.SafeUrlImpl);
  src__security__dom_sanitization_service_impl.SafeUrlImpl[dart.implements] = () => [src__security__dom_sanitization_service.SafeUrl];
  dart.setMethodSignature(src__security__dom_sanitization_service_impl.SafeUrlImpl, () => ({
    __proto__: dart.getMethods(src__security__dom_sanitization_service_impl.SafeUrlImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  src__security__dom_sanitization_service_impl.SafeResourceUrlImpl = class SafeResourceUrlImpl extends src__security__dom_sanitization_service_impl.SafeValueImpl {
    getTypeName() {
      return 'ResourceURL';
    }
  };
  (src__security__dom_sanitization_service_impl.SafeResourceUrlImpl.new = function(value) {
    src__security__dom_sanitization_service_impl.SafeResourceUrlImpl.__proto__.new.call(this, value);
  }).prototype = src__security__dom_sanitization_service_impl.SafeResourceUrlImpl.prototype;
  dart.addTypeTests(src__security__dom_sanitization_service_impl.SafeResourceUrlImpl);
  src__security__dom_sanitization_service_impl.SafeResourceUrlImpl[dart.implements] = () => [src__security__dom_sanitization_service.SafeResourceUrl];
  dart.setMethodSignature(src__security__dom_sanitization_service_impl.SafeResourceUrlImpl, () => ({
    __proto__: dart.getMethods(src__security__dom_sanitization_service_impl.SafeResourceUrlImpl.__proto__),
    getTypeName: dart.fnType(core.String, [])
  }));
  dart.trackLibraries("packages/angular/src/security/dom_sanitization_service_impl.ddc", {
    "package:angular/src/security/dom_sanitization_service_impl.dart": src__security__dom_sanitization_service_impl
  }, '{"version":3,"sourceRoot":"","sources":["dom_sanitization_service_impl.dart"],"names":[],"mappings":"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","file":"dom_sanitization_service_impl.ddc.js"}');
  // Exports:
  return {
    src__security__dom_sanitization_service_impl: src__security__dom_sanitization_service_impl
  };
});

//# sourceMappingURL=dom_sanitization_service_impl.ddc.js.map
