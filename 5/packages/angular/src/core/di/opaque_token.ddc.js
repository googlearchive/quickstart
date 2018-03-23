define(['dart_sdk', 'packages/angular/src/runtime/optimizations'], function(dart_sdk, optimizations) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const _root = Object.create(null);
  const src__core__di__opaque_token = Object.create(_root);
  const $toString = dartx.toString;
  const _desc = Symbol('_desc');
  const _is_OpaqueToken_default = Symbol('_is_OpaqueToken_default');
  src__core__di__opaque_token.OpaqueToken$ = dart.generic(T => {
    class OpaqueToken extends core.Object {
      toString() {
        if (dart.test(src__runtime__optimizations.isDevMode)) {
          return dart.str`OpaqueToken (${super.toString()}) <${dart.wrapType(T)}>('${this[_desc]}')`;
        }
        return super.toString();
      }
    }
    (OpaqueToken.new = function(desc) {
      if (desc === void 0) desc = '';
      this[_desc] = desc;
    }).prototype = OpaqueToken.prototype;
    dart.addTypeTests(OpaqueToken);
    OpaqueToken.prototype[_is_OpaqueToken_default] = true;
    dart.setMethodSignature(OpaqueToken, () => ({
      __proto__: dart.getMethods(OpaqueToken.__proto__),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setFieldSignature(OpaqueToken, () => ({
      __proto__: dart.getFields(OpaqueToken.__proto__),
      [_desc]: dart.finalFieldType(core.String)
    }));
    dart.defineExtensionMethods(OpaqueToken, ['toString']);
    return OpaqueToken;
  });
  src__core__di__opaque_token.OpaqueToken = src__core__di__opaque_token.OpaqueToken$();
  dart.addTypeTests(src__core__di__opaque_token.OpaqueToken, _is_OpaqueToken_default);
  const _is_MultiToken_default = Symbol('_is_MultiToken_default');
  src__core__di__opaque_token.MultiToken$ = dart.generic(T => {
    class MultiToken extends src__core__di__opaque_token.OpaqueToken$(T) {
      toString() {
        if (dart.test(src__runtime__optimizations.isDevMode)) {
          return dart.str`MultiToken (${super.toString()}) <${dart.wrapType(T)}>('${this[_desc]}')`;
        }
        return super.toString();
      }
    }
    (MultiToken.new = function(description) {
      if (description === void 0) description = '';
      MultiToken.__proto__.new.call(this, description);
    }).prototype = MultiToken.prototype;
    dart.addTypeTests(MultiToken);
    MultiToken.prototype[_is_MultiToken_default] = true;
    dart.defineExtensionMethods(MultiToken, ['toString']);
    return MultiToken;
  });
  src__core__di__opaque_token.MultiToken = src__core__di__opaque_token.MultiToken$();
  dart.addTypeTests(src__core__di__opaque_token.MultiToken, _is_MultiToken_default);
  dart.trackLibraries("packages/angular/src/core/di/opaque_token.ddc", {
    "package:angular/src/core/di/opaque_token.dart": src__core__di__opaque_token
  }, '{"version":3,"sourceRoot":"","sources":["opaque_token.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AA+CI,sBAAI,qCAAS,GAAE;AACb,gBAAO,yBAAgB,cAAc,QAAO,gBAAC,MAAI,WAAK;;AAExD,cAAO,eAAc;MACvB;;gCARwB,IAAK;UAAL,IAAK,aAAL,IAAK,GAAG;MAAR,WAAK,GAAL,IAAK;IAAO;;;;;;;;;;;;;;;;;;;;;AAqElC,sBAAI,qCAAS,GAAE;AACb,gBAAO,wBAAe,cAAc,QAAO,gBAAC,MAAI,WAAK;;AAEvD,cAAO,eAAc;MACvB;;+BARkB,WAAuB;kCAAhB,cAAc;AAAO,0CAAM,WAAW;IAAC","file":"opaque_token.ddc.js"}');
  // Exports:
  return {
    src__core__di__opaque_token: src__core__di__opaque_token
  };
});

//# sourceMappingURL=opaque_token.ddc.js.map
