define(['dart_sdk', 'packages/angular/src/core/di.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/debug/by.template', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/linker/app_view.template', 'packages/angular/src/core/linker/exceptions.template', 'packages/angular/src/core/linker/view_type.template', 'packages/angular/src/di/injector/empty.template'], function(dart_sdk, di, api, by, change_detection, app_view, exceptions, view_type, empty) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di$46template = di.src__core__di$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__debug__debug_node$46template = by.src__debug__debug_node$46template;
  const src__core__change_detection__change_detection$46template = change_detection.src__core__change_detection__change_detection$46template;
  const src__core__linker__app_view$46template = app_view.src__core__linker__app_view$46template;
  const src__core__linker__component_factory$46template = app_view.src__core__linker__component_factory$46template;
  const src__core__linker__template_ref$46template = app_view.src__core__linker__template_ref$46template;
  const src__core__linker__view_container$46template = app_view.src__core__linker__view_container$46template;
  const src__core__linker__exceptions$46template = exceptions.src__core__linker__exceptions$46template;
  const src__core__linker__view_type$46template = view_type.src__core__linker__view_type$46template;
  const src__di__injector__injector$46template = empty.src__di__injector__injector$46template;
  const _root = Object.create(null);
  const src__debug__debug_context$46template = Object.create(_root);
  const src__debug__debug_app_view$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__debug__debug_context$46template, {
    /*src__debug__debug_context$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__debug__debug_context$46template.initReflector = function() {
    if (dart.test(src__debug__debug_context$46template._visited)) {
      return;
    }
    src__debug__debug_context$46template._visited = true;
    src__debug__debug_app_view$46template.initReflector();
    src__core__di$46template.initReflector();
    src__core__render__api$46template.initReflector();
  };
  dart.fn(src__debug__debug_context$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__debug__debug_app_view$46template, {
    /*src__debug__debug_app_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__debug__debug_app_view$46template.initReflector = function() {
    if (dart.test(src__debug__debug_app_view$46template._visited)) {
      return;
    }
    src__debug__debug_app_view$46template._visited = true;
    src__debug__debug_context$46template.initReflector();
    src__debug__debug_context$46template.initReflector();
    src__debug__debug_node$46template.initReflector();
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__exceptions$46template.initReflector();
    src__core__linker__template_ref$46template.initReflector();
    src__core__linker__view_container$46template.initReflector();
    src__core__linker__view_type$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
  };
  dart.fn(src__debug__debug_app_view$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/debug/debug_app_view.template.ddc", {
    "package:angular/src/debug/debug_context.template.dart": src__debug__debug_context$46template,
    "package:angular/src/debug/debug_app_view.template.dart": src__debug__debug_app_view$46template
  }, '{"version":3,"sourceRoot":"","sources":["debug_context.template.dart","debug_app_view.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;MAcI,6CAAQ;YAAG;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAM,mDAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,+CAAa;EACrB;;;MCcI,8CAAQ;YAAG;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAM,kDAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,sEAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,0DAAa;AACnB,IAAO,qDAAa;AACpB,IAAO,+CAAa;AACpB,IAAO,oDAAa;EACtB","file":"debug_app_view.template.ddc.js"}');
  // Exports:
  return {
    src__debug__debug_context$46template: src__debug__debug_context$46template,
    src__debug__debug_app_view$46template: src__debug__debug_app_view$46template
  };
});

//# sourceMappingURL=debug_app_view.template.ddc.js.map
