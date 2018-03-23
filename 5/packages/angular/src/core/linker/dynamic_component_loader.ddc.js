define(['dart_sdk', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/di/injector/empty', 'packages/angular/src/core/linker/component_resolver'], function(dart_sdk, app_view, empty, component_resolver) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__view_container_ref = app_view.src__core__linker__view_container_ref;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__core__linker__component_resolver = component_resolver.src__core__linker__component_resolver;
  const _root = Object.create(null);
  const src__core__linker__dynamic_component_loader = Object.create(_root);
  const $remove = dartx.remove;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _loader = Symbol('_loader');
  const _resolver = Symbol('_resolver');
  src__core__linker__dynamic_component_loader.SlowComponentLoader = class SlowComponentLoader extends core.Object {
    load(T, type, injector) {
      return this[_resolver].resolveComponent(type).then(src__core__linker__component_factory.ComponentRef$(T), dart.fn(component => {
        let reference = this[_loader].loadDetached(T, src__core__linker__component_factory.ComponentFactory$(T)._check(component), {injector: injector});
        reference.onDestroy(dart.fn(() => {
          reference.location[$remove]();
        }, VoidToNull()));
        return reference;
      }, dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory])));
    }
    loadNextToLocation(T, type, location, injector) {
      if (injector === void 0) injector = null;
      return this[_resolver].resolveComponent(type).then(src__core__linker__component_factory.ComponentRef$(T), dart.fn(component => this[_loader].loadNextToLocation(T, src__core__linker__component_factory.ComponentFactory$(T)._check(component), location, {injector: injector}), dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [src__core__linker__component_factory.ComponentFactory])));
    }
  };
  (src__core__linker__dynamic_component_loader.SlowComponentLoader.new = function(loader, resolver) {
    this[_loader] = loader;
    this[_resolver] = resolver;
  }).prototype = src__core__linker__dynamic_component_loader.SlowComponentLoader.prototype;
  dart.addTypeTests(src__core__linker__dynamic_component_loader.SlowComponentLoader);
  dart.setMethodSignature(src__core__linker__dynamic_component_loader.SlowComponentLoader, () => ({
    __proto__: dart.getMethods(src__core__linker__dynamic_component_loader.SlowComponentLoader.__proto__),
    load: dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [core.Type, src__di__injector__injector.Injector]]),
    loadNextToLocation: dart.gFnType(T => [async.Future$(src__core__linker__component_factory.ComponentRef$(T)), [core.Type, src__core__linker__view_container_ref.ViewContainerRef], [src__di__injector__injector.Injector]])
  }));
  dart.setFieldSignature(src__core__linker__dynamic_component_loader.SlowComponentLoader, () => ({
    __proto__: dart.getFields(src__core__linker__dynamic_component_loader.SlowComponentLoader.__proto__),
    [_loader]: dart.finalFieldType(src__core__linker__component_loader.ComponentLoader),
    [_resolver]: dart.finalFieldType(src__core__linker__component_resolver.ComponentResolver)
  }));
  dart.trackLibraries("packages/angular/src/core/linker/dynamic_component_loader.ddc", {
    "package:angular/src/core/linker/dynamic_component_loader.dart": src__core__linker__dynamic_component_loader
  }, '{"version":3,"sourceRoot":"","sources":["dynamic_component_loader.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;YAiCkC,IAAS,EAAE,QAAiB;AAG1D,YAAO,gBAAS,iBAAiB,CAAC,IAAI,MAAM,wDAAC,QAAC,SAAS;AACrD,YAAM,YAAY,aAAO,aAAa,qEAAI,SAAS,cAAY,QAAQ;AACvE,iBAAS,UAAU,CAAC;AAClB,mBAAS,SAAS,SAAO;;AAE3B,cAAO,UAAS;;IAEpB;0BAME,IAAS,EACT,QAAyB,EACzB,QAAiB;+BAAR;AAIT,YAAO,gBAAS,iBAAiB,CAAC,IAAI,MAAM,wDAAC,QAAC,SAAS,IAC9C,aAAO,mBAAmB,qEAC/B,SAAS,GACT,QAAQ,aACE,QAAQ;IAGxB;;kFAlC+B,MAAO,EAAO,QAAS;IAAvB,aAAO,GAAP,MAAO;IAAO,eAAS,GAAT,QAAS;EAAC","file":"dynamic_component_loader.ddc.js"}');
  // Exports:
  return {
    src__core__linker__dynamic_component_loader: src__core__linker__dynamic_component_loader
  };
});

//# sourceMappingURL=dynamic_component_loader.ddc.js.map
