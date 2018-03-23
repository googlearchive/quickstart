define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/core/linker/app_view'], function(dart_sdk, reflector, app_view) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const _root = Object.create(null);
  const src__core__linker__component_resolver = Object.create(_root);
  let FutureOfComponentFactory = () => (FutureOfComponentFactory = dart.constFn(async.Future$(src__core__linker__component_factory.ComponentFactory)))();
  src__core__linker__component_resolver.ComponentResolver = class ComponentResolver extends core.Object {
    static new() {
      return new src__core__linker__component_resolver.ComponentResolver.__();
    }
    resolveComponent(componentType) {
      let component = src__core__linker__component_factory.ComponentFactory.as(src__di__reflector.getComponent(componentType));
      if (component == null) {
        dart.throw(new core.StateError.new(dart.str`No precompiled component ${componentType} found`));
      }
      return FutureOfComponentFactory().value(component);
    }
  };
  (src__core__linker__component_resolver.ComponentResolver.__ = function() {
  }).prototype = src__core__linker__component_resolver.ComponentResolver.prototype;
  dart.addTypeTests(src__core__linker__component_resolver.ComponentResolver);
  dart.setMethodSignature(src__core__linker__component_resolver.ComponentResolver, () => ({
    __proto__: dart.getMethods(src__core__linker__component_resolver.ComponentResolver.__proto__),
    resolveComponent: dart.fnType(async.Future$(src__core__linker__component_factory.ComponentFactory), [core.Type])
  }));
  dart.trackLibraries("packages/angular/src/core/linker/component_resolver.ddc", {
    "package:angular/src/core/linker/component_resolver.dart": src__core__linker__component_resolver
  }, '{"version":3,"sourceRoot":"","sources":["component_resolver.dart"],"names":[],"mappings":";;;;;;;;;;;;;AAasC;IAAmB;qBAIJ,aAAkB;AACnE,UAAM,qEAAY,AAAU,+BAAY,CAAC,aAAa;AACtD,UAAI,SAAS,IAAI,MAAM;AACrB,mBAAM,IAAI,mBAAU,CAAC,oCAA2B,aAAa;;AAE/D,YAAO,AAAI,iCAA8B,CAAC,SAAS;IACrD;;;EAT2B","file":"component_resolver.ddc.js"}');
  // Exports:
  return {
    src__core__linker__component_resolver: src__core__linker__component_resolver
  };
});

//# sourceMappingURL=component_resolver.ddc.js.map
