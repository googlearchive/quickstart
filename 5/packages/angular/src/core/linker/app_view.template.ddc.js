define(['dart_sdk', 'packages/angular/src/di/injector/empty.template', 'packages/angular/src/core/linker/element_ref.template', 'packages/angular/src/facade/exception_handler.template', 'packages/angular/src/runtime.template', 'packages/angular/src/core/linker/view_type.template', 'packages/angular/src/core/change_detection/change_detector_ref.template', 'packages/angular/src/core/linker/app_view_utils.template', 'packages/angular/src/core/change_detection/constants.template', 'packages/angular/src/core/linker/exceptions.template', 'packages/angular/src/core/app_view_consts.template', 'packages/angular/src/core/change_detection/change_detection.template', 'packages/angular/src/core/change_detection/component_state.template', 'packages/angular/src/core/render/api.template', 'packages/angular/src/di/errors.template', 'packages/angular/src/platform/dom/shared_styles_host.template', 'packages/angular/src/core/di.template', 'packages/angular/src/di/reflector.template', 'packages/angular/src/di/reflector', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/di/decorators.template'], function(dart_sdk, empty, element_ref, exception_handler, runtime, view_type, change_detector_ref, app_view_utils, constants, exceptions, app_view_consts, change_detection, component_state, api, errors, shared_styles_host, di, reflector, reflector$, app_view, decorators) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__injector__hierarchical$46template = empty.src__di__injector__hierarchical$46template;
  const src__di__injector__injector$46template = empty.src__di__injector__injector$46template;
  const src__core__linker__element_ref$46template = element_ref.src__core__linker__element_ref$46template;
  const src__facade__exceptions$46template = exception_handler.src__facade__exceptions$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const src__core__linker__view_type$46template = view_type.src__core__linker__view_type$46template;
  const src__core__change_detection__change_detector_ref$46template = change_detector_ref.src__core__change_detection__change_detector_ref$46template;
  const src__core__linker__app_view_utils$46template = app_view_utils.src__core__linker__app_view_utils$46template;
  const src__core__change_detection__constants$46template = constants.src__core__change_detection__constants$46template;
  const src__core__linker__exceptions$46template = exceptions.src__core__linker__exceptions$46template;
  const src__core__app_view_consts$46template = app_view_consts.src__core__app_view_consts$46template;
  const src__core__change_detection__change_detection$46template = change_detection.src__core__change_detection__change_detection$46template;
  const src__core__change_detection__component_state$46template = component_state.src__core__change_detection__component_state$46template;
  const src__core__render__api$46template = api.src__core__render__api$46template;
  const src__di__errors$46template = errors.src__di__errors$46template;
  const src__platform__dom__shared_styles_host$46template = shared_styles_host.src__platform__dom__shared_styles_host$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const src__di__reflector$46template = reflector.src__di__reflector$46template;
  const src__di__reflector = reflector$.src__di__reflector;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const src__core__di__decorators$46template = decorators.src__core__di__decorators$46template;
  const _root = Object.create(null);
  const src__di__injector__element$46template = Object.create(_root);
  const src__core__linker__view_container_ref$46template = Object.create(_root);
  const src__core__linker__view_container$46template = Object.create(_root);
  const src__core__linker__view_ref$46template = Object.create(_root);
  const src__core__linker__template_ref$46template = Object.create(_root);
  const src__core__linker__app_view$46template = Object.create(_root);
  const src__core__linker__component_factory$46template = Object.create(_root);
  const src__core__linker__component_loader$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToComponentLoader = () => (VoidToComponentLoader = dart.constFn(dart.fnType(src__core__linker__component_loader.ComponentLoader, [])))();
  dart.defineLazy(src__di__injector__element$46template, {
    /*src__di__injector__element$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__injector__element$46template.initReflector = function() {
    if (dart.test(src__di__injector__element$46template._visited)) {
      return;
    }
    src__di__injector__element$46template._visited = true;
    src__core__linker__app_view$46template.initReflector();
    src__di__injector__hierarchical$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
  };
  dart.fn(src__di__injector__element$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__core__linker__view_container_ref$46template, {
    /*src__core__linker__view_container_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__view_container_ref$46template.initReflector = function() {
    if (dart.test(src__core__linker__view_container_ref$46template._visited)) {
      return;
    }
    src__core__linker__view_container_ref$46template._visited = true;
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__component_loader$46template.initReflector();
    src__core__linker__element_ref$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__core__linker__template_ref$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
  };
  dart.fn(src__core__linker__view_container_ref$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__core__linker__view_container$46template, {
    /*src__core__linker__view_container$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__view_container$46template.initReflector = function() {
    if (dart.test(src__core__linker__view_container$46template._visited)) {
      return;
    }
    src__core__linker__view_container$46template._visited = true;
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__component_loader$46template.initReflector();
    src__core__linker__element_ref$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__facade__exceptions$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__linker__template_ref$46template.initReflector();
    src__core__linker__view_container_ref$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
    src__core__linker__view_type$46template.initReflector();
  };
  dart.fn(src__core__linker__view_container$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__core__linker__view_ref$46template, {
    /*src__core__linker__view_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__view_ref$46template.initReflector = function() {
    if (dart.test(src__core__linker__view_ref$46template._visited)) {
      return;
    }
    src__core__linker__view_ref$46template._visited = true;
    src__core__change_detection__change_detector_ref$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__change_detection__constants$46template.initReflector();
  };
  dart.fn(src__core__linker__view_ref$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__core__linker__template_ref$46template, {
    /*src__core__linker__template_ref$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__template_ref$46template.initReflector = function() {
    if (dart.test(src__core__linker__template_ref$46template._visited)) {
      return;
    }
    src__core__linker__template_ref$46template._visited = true;
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__element_ref$46template.initReflector();
    src__core__linker__view_container$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
  };
  dart.fn(src__core__linker__template_ref$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__core__linker__app_view$46template, {
    /*src__core__linker__app_view$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__app_view$46template.initReflector = function() {
    if (dart.test(src__core__linker__app_view$46template._visited)) {
      return;
    }
    src__core__linker__app_view$46template._visited = true;
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__exceptions$46template.initReflector();
    src__core__app_view_consts$46template.initReflector();
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__change_detection__component_state$46template.initReflector();
    src__core__render__api$46template.initReflector();
    src__di__errors$46template.initReflector();
    src__di__injector__element$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__platform__dom__shared_styles_host$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__linker__template_ref$46template.initReflector();
    src__core__linker__view_container$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
    src__core__linker__view_type$46template.initReflector();
  };
  dart.fn(src__core__linker__app_view$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__core__linker__component_factory$46template, {
    /*src__core__linker__component_factory$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__component_factory$46template.initReflector = function() {
    if (dart.test(src__core__linker__component_factory$46template._visited)) {
      return;
    }
    src__core__linker__component_factory$46template._visited = true;
    src__core__change_detection__change_detection$46template.initReflector();
    src__core__linker__app_view$46template.initReflector();
    src__core__linker__app_view_utils$46template.initReflector();
    src__core__di$46template.initReflector();
    src__di__reflector$46template.initReflector();
    src__runtime$46template.initReflector();
    src__core__linker__view_ref$46template.initReflector();
  };
  dart.fn(src__core__linker__component_factory$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__core__linker__component_loader$46template, {
    /*src__core__linker__component_loader$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__core__linker__component_loader$46template.initReflector = function() {
    if (dart.test(src__core__linker__component_loader$46template._visited)) {
      return;
    }
    src__core__linker__component_loader$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__core__linker__component_loader.ComponentLoader), dart.fn(() => new src__core__linker__component_loader.ComponentLoader.new(), VoidToComponentLoader()));
    src__di__injector__injector$46template.initReflector();
    src__core__di__decorators$46template.initReflector();
    src__core__linker__component_factory$46template.initReflector();
    src__core__linker__view_container_ref$46template.initReflector();
  };
  dart.fn(src__core__linker__component_loader$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/core/linker/app_view.template.ddc", {
    "package:angular/src/di/injector/element.template.dart": src__di__injector__element$46template,
    "package:angular/src/core/linker/view_container_ref.template.dart": src__core__linker__view_container_ref$46template,
    "package:angular/src/core/linker/view_container.template.dart": src__core__linker__view_container$46template,
    "package:angular/src/core/linker/view_ref.template.dart": src__core__linker__view_ref$46template,
    "package:angular/src/core/linker/template_ref.template.dart": src__core__linker__template_ref$46template,
    "package:angular/src/core/linker/app_view.template.dart": src__core__linker__app_view$46template,
    "package:angular/src/core/linker/component_factory.template.dart": src__core__linker__component_factory$46template,
    "package:angular/src/core/linker/component_loader.template.dart": src__core__linker__component_loader$46template
  }, '{"version":3,"sourceRoot":"","sources":["../../di/injector/element.template.dart","view_container_ref.template.dart","view_container.template.dart","view_ref.template.dart","template_ref.template.dart","app_view.template.dart","component_factory.template.dart","component_loader.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAeI,8CAAQ;YAAG;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,oDAAa;EACrB;;;MCLI,yDAAQ;YAAG;;;;;AAEb,kBAAI,yDAAQ,GAAE;AACZ;;AAEF,gEAAW;AAEX,IAAM,6DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,oDAAa;EACrB;;;MCHI,qDAAQ;YAAG;;;;;AAEb,kBAAI,qDAAQ,GAAE;AACZ;;AAEF,4DAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,4DAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,8DAAa;AACnB,IAAM,oDAAa;AACnB,IAAO,qDAAa;EACtB;;;MC/BI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,yEAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,+DAAa;EACrB;;;MCZI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,uDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,oDAAa;EACrB;;;MCgBI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,0DAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,sDAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,sEAAa;AACnB,IAAM,qEAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,mDAAa;AACnB,IAAM,oDAAa;AACnB,IAAO,+DAAa;AACpB,IAAO,qCAAa;AACpB,IAAO,wDAAa;AACpB,IAAO,0DAAa;AACpB,IAAO,oDAAa;AACpB,IAAO,qDAAa;EACtB;;;MC3CI,wDAAQ;YAAG;;;;;AAEb,kBAAI,wDAAQ,GAAE;AACZ;;AAEF,+DAAW;AAEX,IAAM,sEAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,2CAAa;AACnB,IAAM,qCAAa;AACnB,IAAM,oDAAa;EACrB;;;MCnBI,uDAAQ;YAAG;;;;;AAEb,kBAAI,uDAAQ,GAAE;AACZ;;AAEF,8DAAW;AAEX,IAAO,kCAAe,CAAC,kEAAe,EAAE,cAAM,IAAI,uDAAe;AACjE,IAAM,oDAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,6DAAa;AACnB,IAAM,8DAAa;EACrB","file":"app_view.template.ddc.js"}');
  // Exports:
  return {
    src__di__injector__element$46template: src__di__injector__element$46template,
    src__core__linker__view_container_ref$46template: src__core__linker__view_container_ref$46template,
    src__core__linker__view_container$46template: src__core__linker__view_container$46template,
    src__core__linker__view_ref$46template: src__core__linker__view_ref$46template,
    src__core__linker__template_ref$46template: src__core__linker__template_ref$46template,
    src__core__linker__app_view$46template: src__core__linker__app_view$46template,
    src__core__linker__component_factory$46template: src__core__linker__component_factory$46template,
    src__core__linker__component_loader$46template: src__core__linker__component_loader$46template
  };
});

//# sourceMappingURL=app_view.template.ddc.js.map
