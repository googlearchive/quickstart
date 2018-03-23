define(['dart_sdk', 'packages/angular/src/di/providers'], function(dart_sdk, providers) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const src__di__module = Object.create(_root);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  let ProviderOfObject = () => (ProviderOfObject = dart.constFn(src__di__providers.Provider$(core.Object)))();
  let ListOfModule = () => (ListOfModule = dart.constFn(core.List$(src__di__module.Module)))();
  let ListOfProviderOfObject = () => (ListOfProviderOfObject = dart.constFn(core.List$(ProviderOfObject())))();
  let JSArrayOfProviderOfObject = () => (JSArrayOfProviderOfObject = dart.constFn(_interceptors.JSArray$(ProviderOfObject())))();
  let ModuleToListOfProviderOfObject = () => (ModuleToListOfProviderOfObject = dart.constFn(dart.fnType(ListOfProviderOfObject(), [src__di__module.Module])))();
  let const$;
  let const$0;
  src__di__module.Module = class Module extends core.Object {
    get include() {
      return this[include$];
    }
    set include(value) {
      super.include = value;
    }
    get provide() {
      return this[provide$];
    }
    set provide(value) {
      super.provide = value;
    }
    static new(opts) {
      return new src__di__module.Module.__(opts);
    }
  };
  (src__di__module.Module.__ = function(opts) {
    let include = opts && 'include' in opts ? opts.include : const$ || (const$ = dart.constList([], src__di__module.Module));
    let provide = opts && 'provide' in opts ? opts.provide : const$0 || (const$0 = dart.constList([], ProviderOfObject()));
    this[include$] = include;
    this[provide$] = provide;
  }).prototype = src__di__module.Module.prototype;
  dart.addTypeTests(src__di__module.Module);
  const include$ = Symbol("Module.include");
  const provide$ = Symbol("Module.provide");
  dart.setFieldSignature(src__di__module.Module, () => ({
    __proto__: dart.getFields(src__di__module.Module.__proto__),
    include: dart.finalFieldType(ListOfModule()),
    provide: dart.finalFieldType(ListOfProviderOfObject())
  }));
  src__di__module.internalModuleToList = function(module) {
    let result = JSArrayOfProviderOfObject().of([]);
    let includes = module.include;
    for (let i = 0, l = includes[$length]; i < dart.notNull(l); i++) {
      result[$addAll](src__di__module.internalModuleToList(includes[$_get](i)));
    }
    let provides = module.provide;
    for (let i = 0, l = provides[$length]; i < dart.notNull(l); i++) {
      result[$add](provides[$_get](i));
    }
    return result;
  };
  dart.fn(src__di__module.internalModuleToList, ModuleToListOfProviderOfObject());
  dart.trackLibraries("packages/angular/src/di/module.ddc", {
    "package:angular/src/di/module.dart": src__di__module
  }, '{"version":3,"sourceRoot":"","sources":["module.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IA8CqB;;;;;;IACU;;;;;;;AAMxB;IAAQ;;;QAGN,qDAAS;QACT,qDAAS;IADT,cAAO,GAAP,OAAO;IACP,cAAO,GAAP,OAAO;EACZ;;;;;;;;;kDAMwC,MAAa;AACvD,QAAM,SAAS;AACf,QAAM,WAAW,MAAM,QAAQ;AAC/B,aAAS,IAAI,GAAG,IAAI,QAAQ,SAAO,EAAE,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,IAAI;AAC/C,YAAM,SAAO,CAAC,oCAAoB,CAAC,QAAQ,QAAC,CAAC;;AAE/C,QAAM,WAAW,MAAM,QAAQ;AAC/B,aAAS,IAAI,GAAG,IAAI,QAAQ,SAAO,EAAE,AAAE,CAAD,gBAAG,CAAC,GAAE,CAAC,IAAI;AAC/C,YAAM,MAAI,CAAC,QAAQ,QAAC,CAAC;;AAEvB,UAAO,OAAM;EACf","file":"module.ddc.js"}');
  // Exports:
  return {
    src__di__module: src__di__module
  };
});

//# sourceMappingURL=module.ddc.js.map
