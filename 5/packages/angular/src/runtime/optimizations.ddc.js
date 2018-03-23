define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__runtime__optimizations = Object.create(_root);
  let ObjectToT = () => (ObjectToT = dart.constFn(dart.gFnType(T => [T, [core.Object]])))();
  dart.copyProperties(src__runtime__optimizations, {
    get _assertionsEnabled() {
      let enabled = false;
      if (!dart.test(enabled = true)) dart.assertFailed();
      return enabled;
    }
  });
  dart.copyProperties(src__runtime__optimizations, {
    get isDevMode() {
      return src__runtime__optimizations._assertionsEnabled;
    }
  });
  src__runtime__optimizations.unsafeCast = function(T, any) {
    return T._check(any);
  };
  dart.fn(src__runtime__optimizations.unsafeCast, ObjectToT());
  dart.trackLibraries("packages/angular/src/runtime/optimizations.ddc", {
    "package:angular/src/runtime/optimizations.dart": src__runtime__optimizations
  }, '{"version":3,"sourceRoot":"","sources":["optimizations.dart"],"names":[],"mappings":";;;;;;;;;;AASE,UAAI,UAAU;AACd,qBAAO,OAAO,GAAG;AACjB,YAAO,QAAO;IAChB;;;;YAUsB,+CAAkB;;;uDAgBxB,GAAU;oBAAK,GAAG","file":"optimizations.ddc.js"}');
  // Exports:
  return {
    src__runtime__optimizations: src__runtime__optimizations
  };
});

//# sourceMappingURL=optimizations.ddc.js.map
