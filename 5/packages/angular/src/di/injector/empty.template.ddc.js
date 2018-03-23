define(['dart_sdk', 'packages/angular/src/core/di/decorators.template', 'packages/angular/src/core/di/opaque_token.template', 'packages/angular/src/di/errors.template', 'packages/angular/src/di/module.template', 'packages/angular/src/di/providers.template', 'packages/angular/src/di/reflector.template', 'packages/angular/src/runtime.template'], function(dart_sdk, decorators, opaque_token, errors, module, providers, reflector, runtime) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__decorators$46template = decorators.src__core__di__decorators$46template;
  const src__core__di__opaque_token$46template = opaque_token.src__core__di__opaque_token$46template;
  const src__di__errors$46template = errors.src__di__errors$46template;
  const src__di__module$46template = module.src__di__module$46template;
  const src__di__providers$46template = providers.src__di__providers$46template;
  const src__di__reflector$46template = reflector.src__di__reflector$46template;
  const src__runtime$46template = runtime.src__runtime$46template;
  const _root = Object.create(null);
  const src__di__injector__runtime$46template = Object.create(_root);
  const src__di__injector__map$46template = Object.create(_root);
  const src__di__injector__empty$46template = Object.create(_root);
  const src__di__injector__hierarchical$46template = Object.create(_root);
  const src__di__injector__injector$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__di__injector__runtime$46template, {
    /*src__di__injector__runtime$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__injector__runtime$46template.initReflector = function() {
    if (dart.test(src__di__injector__runtime$46template._visited)) {
      return;
    }
    src__di__injector__runtime$46template._visited = true;
    src__core__di__decorators$46template.initReflector();
    src__core__di__opaque_token$46template.initReflector();
    src__di__errors$46template.initReflector();
    src__di__module$46template.initReflector();
    src__di__providers$46template.initReflector();
    src__di__reflector$46template.initReflector();
    src__di__injector__empty$46template.initReflector();
    src__di__injector__hierarchical$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.fn(src__di__injector__runtime$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__di__injector__map$46template, {
    /*src__di__injector__map$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__injector__map$46template.initReflector = function() {
    if (dart.test(src__di__injector__map$46template._visited)) {
      return;
    }
    src__di__injector__map$46template._visited = true;
    src__di__injector__empty$46template.initReflector();
    src__di__injector__hierarchical$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
  };
  dart.fn(src__di__injector__map$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__di__injector__empty$46template, {
    /*src__di__injector__empty$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__injector__empty$46template.initReflector = function() {
    if (dart.test(src__di__injector__empty$46template._visited)) {
      return;
    }
    src__di__injector__empty$46template._visited = true;
    src__di__injector__hierarchical$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
  };
  dart.fn(src__di__injector__empty$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__di__injector__hierarchical$46template, {
    /*src__di__injector__hierarchical$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__injector__hierarchical$46template.initReflector = function() {
    if (dart.test(src__di__injector__hierarchical$46template._visited)) {
      return;
    }
    src__di__injector__hierarchical$46template._visited = true;
    src__di__errors$46template.initReflector();
    src__di__injector__empty$46template.initReflector();
    src__di__injector__injector$46template.initReflector();
    src__runtime$46template.initReflector();
  };
  dart.fn(src__di__injector__hierarchical$46template.initReflector, VoidTovoid());
  dart.defineLazy(src__di__injector__injector$46template, {
    /*src__di__injector__injector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__di__injector__injector$46template.initReflector = function() {
    if (dart.test(src__di__injector__injector$46template._visited)) {
      return;
    }
    src__di__injector__injector$46template._visited = true;
    src__core__di__opaque_token$46template.initReflector();
    src__di__errors$46template.initReflector();
    src__di__module$46template.initReflector();
    src__di__injector__empty$46template.initReflector();
    src__di__injector__hierarchical$46template.initReflector();
    src__di__injector__map$46template.initReflector();
    src__di__injector__runtime$46template.initReflector();
  };
  dart.fn(src__di__injector__injector$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/di/injector/empty.template.ddc", {
    "package:angular/src/di/injector/runtime.template.dart": src__di__injector__runtime$46template,
    "package:angular/src/di/injector/map.template.dart": src__di__injector__map$46template,
    "package:angular/src/di/injector/empty.template.dart": src__di__injector__empty$46template,
    "package:angular/src/di/injector/hierarchical.template.dart": src__di__injector__hierarchical$46template,
    "package:angular/src/di/injector/injector.template.dart": src__di__injector__injector$46template
  }, '{"version":3,"sourceRoot":"","sources":["runtime.template.dart","map.template.dart","empty.template.dart","hierarchical.template.dart","injector.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;MA4BI,8CAAQ;YAAG;;;;;AAEb,kBAAI,8CAAQ,GAAE;AACZ;;AAEF,qDAAW;AAEX,IAAM,kDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,2CAAa;AACnB,IAAM,2CAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,qCAAa;EACrB;;;MC9BI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,iDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,oDAAa;EACrB;;;MCZI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,wDAAa;AACnB,IAAM,oDAAa;EACrB;;;MCLI,mDAAQ;YAAG;;;;;AAEb,kBAAI,mDAAQ,GAAE;AACZ;;AAEF,0DAAW;AAEX,IAAM,wCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,oDAAa;AACnB,IAAM,qCAAa;EACrB;;;MCNI,+CAAQ;YAAG;;;;;AAEb,kBAAI,+CAAQ,GAAE;AACZ;;AAEF,sDAAW;AAEX,IAAM,oDAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,wDAAa;AACnB,IAAM,+CAAa;AACnB,IAAM,mDAAa;EACrB","file":"empty.template.ddc.js"}');
  // Exports:
  return {
    src__di__injector__runtime$46template: src__di__injector__runtime$46template,
    src__di__injector__map$46template: src__di__injector__map$46template,
    src__di__injector__empty$46template: src__di__injector__empty$46template,
    src__di__injector__hierarchical$46template: src__di__injector__hierarchical$46template,
    src__di__injector__injector$46template: src__di__injector__injector$46template
  };
});

//# sourceMappingURL=empty.template.ddc.js.map
