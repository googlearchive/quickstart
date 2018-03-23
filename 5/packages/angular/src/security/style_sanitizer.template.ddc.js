define(['dart_sdk', 'packages/angular/src/runtime.template', 'packages/angular/src/security/url_sanitizer.template'], function(dart_sdk, runtime, url_sanitizer) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__security__url_sanitizer$46template = url_sanitizer.src__security__url_sanitizer$46template;
  const _root = Object.create(null);
  const src__security__style_sanitizer$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__security__style_sanitizer$46template, {
    /*src__security__style_sanitizer$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__security__style_sanitizer$46template.initReflector = function() {
    if (dart.test(src__security__style_sanitizer$46template._visited)) {
      return;
    }
    src__security__style_sanitizer$46template._visited = true;
    src__runtime$46template.initReflector();
    src__security__url_sanitizer$46template.initReflector();
  };
  dart.fn(src__security__style_sanitizer$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/security/style_sanitizer.template.ddc", {
    "package:angular/src/security/style_sanitizer.template.dart": src__security__style_sanitizer$46template
  }, '{"version":3,"sourceRoot":"","sources":["style_sanitizer.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAaI,kDAAQ;YAAG;;;;;AAEb,kBAAI,kDAAQ,GAAE;AACZ;;AAEF,yDAAW;AAEX,IAAM,qCAAa;AACnB,IAAM,qDAAa;EACrB","file":"style_sanitizer.template.ddc.js"}');
  // Exports:
  return {
    src__security__style_sanitizer$46template: src__security__style_sanitizer$46template
  };
});

//# sourceMappingURL=style_sanitizer.template.ddc.js.map
