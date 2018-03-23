define(['dart_sdk', 'packages/angular_test/src/errors/generic_type_missing.template', 'packages/angular_test/src/errors/test_already_running.template', 'packages/angular_test/src/errors/will_never_stabilize.template'], function(dart_sdk, generic_type_missing, test_already_running, will_never_stabilize) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__errors__generic_type_missing$46template = generic_type_missing.src__errors__generic_type_missing$46template;
  const src__errors__test_already_running$46template = test_already_running.src__errors__test_already_running$46template;
  const src__errors__will_never_stabilize$46template = will_never_stabilize.src__errors__will_never_stabilize$46template;
  const _root = Object.create(null);
  const src__errors$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__errors$46template, {
    /*src__errors$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__errors$46template.initReflector = function() {
    if (dart.test(src__errors$46template._visited)) {
      return;
    }
    src__errors$46template._visited = true;
    src__errors__generic_type_missing$46template.initReflector();
    src__errors__test_already_running$46template.initReflector();
    src__errors__will_never_stabilize$46template.initReflector();
  };
  dart.fn(src__errors$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_test/src/errors.template.ddc", {
    "package:angular_test/src/errors.template.dart": src__errors$46template
  }, '{"version":3,"sourceRoot":"","sources":["errors.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAWI,+BAAQ;YAAG;;;;;AAEb,kBAAI,+BAAQ,GAAE;AACZ;;AAEF,sCAAW;AAEX,IAAM,0DAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,0DAAa;EACrB","file":"errors.template.ddc.js"}');
  // Exports:
  return {
    src__errors$46template: src__errors$46template
  };
});

//# sourceMappingURL=errors.template.ddc.js.map
