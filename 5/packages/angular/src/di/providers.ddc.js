define(['dart_sdk', 'packages/angular/src/runtime/optimizations'], function(dart_sdk, optimizations) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__runtime__optimizations = optimizations.src__runtime__optimizations;
  const _root = Object.create(null);
  const src__di__providers = Object.create(_root);
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let Object__ToProviderOfT = () => (Object__ToProviderOfT = dart.constFn(dart.gFnType(T => [src__di__providers.Provider$(T), [core.Object], {useClass: core.Type, useValue: core.Object, useExisting: core.Object, useFactory: core.Function, deps: ListOfObject(), multi: core.bool}])))();
  let ProviderAndRuntimeInjectorBuilderToObject = () => (ProviderAndRuntimeInjectorBuilderToObject = dart.constFn(dart.fnType(core.Object, [src__di__providers.Provider, src__di__providers.RuntimeInjectorBuilder])))();
  let ProviderOfTToListOfT = () => (ProviderOfTToListOfT = dart.constFn(dart.gFnType(T => [core.List$(T), [src__di__providers.Provider$(T)]])))();
  dart.defineLazy(src__di__providers, {
    /*src__di__providers.noValueProvided*/get noValueProvided() {
      return '__noValueProvided__';
    }
  });
  src__di__providers.RuntimeInjectorBuilder = class RuntimeInjectorBuilder extends core.Object {};
  (src__di__providers.RuntimeInjectorBuilder.new = function() {
  }).prototype = src__di__providers.RuntimeInjectorBuilder.prototype;
  dart.addTypeTests(src__di__providers.RuntimeInjectorBuilder);
  src__di__providers.provide = function(T, token, opts) {
    let useClass = opts && 'useClass' in opts ? opts.useClass : null;
    let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
    let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
    let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
    let deps = opts && 'deps' in opts ? opts.deps : null;
    let multi = opts && 'multi' in opts ? opts.multi : null;
    return src__di__providers.Provider$(T).new(token, {useClass: useClass, useValue: useValue, useExisting: useExisting, useFactory: useFactory, deps: deps, multi: multi});
  };
  dart.lazyFn(src__di__providers.provide, () => Object__ToProviderOfT());
  const _buildAtRuntime = Symbol('_buildAtRuntime');
  const _listOfMulti = Symbol('_listOfMulti');
  const _is_Provider_default = Symbol('_is_Provider_default');
  src__di__providers.Provider$ = dart.generic(T => {
    let ProviderOfT = () => (ProviderOfT = dart.constFn(src__di__providers.Provider$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    class Provider extends core.Object {
      get token() {
        return this[token$];
      }
      set token(value) {
        super.token = value;
      }
      get useClass() {
        return this[useClass$];
      }
      set useClass(value) {
        super.useClass = value;
      }
      get useValue() {
        return this[useValue$];
      }
      set useValue(value) {
        super.useValue = value;
      }
      get useExisting() {
        return this[useExisting$];
      }
      set useExisting(value) {
        super.useExisting = value;
      }
      get useFactory() {
        return this[useFactory$];
      }
      set useFactory(value) {
        super.useFactory = value;
      }
      get deps() {
        return this[deps$];
      }
      set deps(value) {
        super.deps = value;
      }
      get multi() {
        return this[multi$];
      }
      set multi(value) {
        super.multi = value;
      }
      static new(token, opts) {
        return new (ProviderOfT()).__(token, opts);
      }
      [_buildAtRuntime](builder) {
        if (!(this.useValue === "__noValueProvided__")) {
          return builder.useValue(this.useValue);
        }
        if (this.useFactory != null) {
          return builder.useFactory(this.useFactory, {deps: this.deps});
        }
        if (this.useExisting != null) {
          return builder.useExisting(this.useExisting);
        }
        return builder.useClass(this.useClass != null ? this.useClass : src__runtime__optimizations.unsafeCast(core.Type, this.token), {deps: this.deps});
      }
      [_listOfMulti]() {
        return JSArrayOfT().of([]);
      }
    }
    (Provider.__ = function(token, opts) {
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let useValue = opts && 'useValue' in opts ? opts.useValue : "__noValueProvided__";
      let useExisting = opts && 'useExisting' in opts ? opts.useExisting : null;
      let useFactory = opts && 'useFactory' in opts ? opts.useFactory : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      let multi = opts && 'multi' in opts ? opts.multi : false;
      this[token$] = token;
      this[useClass$] = useClass;
      this[useValue$] = useValue;
      this[useExisting$] = useExisting;
      this[useFactory$] = useFactory;
      this[deps$] = deps;
      this[multi$] = multi;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    const token$ = Symbol("Provider.token");
    const useClass$ = Symbol("Provider.useClass");
    const useValue$ = Symbol("Provider.useValue");
    const useExisting$ = Symbol("Provider.useExisting");
    const useFactory$ = Symbol("Provider.useFactory");
    const deps$ = Symbol("Provider.deps");
    const multi$ = Symbol("Provider.multi");
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      [_buildAtRuntime]: dart.fnType(core.Object, [src__di__providers.RuntimeInjectorBuilder]),
      [_listOfMulti]: dart.fnType(core.List$(T), [])
    }));
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      token: dart.finalFieldType(core.Object),
      useClass: dart.finalFieldType(core.Type),
      useValue: dart.finalFieldType(core.Object),
      useExisting: dart.finalFieldType(core.Object),
      useFactory: dart.finalFieldType(core.Function),
      deps: dart.finalFieldType(ListOfObject()),
      multi: dart.finalFieldType(core.bool)
    }));
    return Provider;
  });
  src__di__providers.Provider = src__di__providers.Provider$();
  dart.addTypeTests(src__di__providers.Provider, _is_Provider_default);
  src__di__providers.buildAtRuntime = function(provider, builder) {
    return provider[_buildAtRuntime](builder);
  };
  dart.fn(src__di__providers.buildAtRuntime, ProviderAndRuntimeInjectorBuilderToObject());
  src__di__providers.listOfMulti = function(T, provider) {
    return provider[_listOfMulti]();
  };
  dart.fn(src__di__providers.listOfMulti, ProviderOfTToListOfT());
  const _is_ClassProvider_default = Symbol('_is_ClassProvider_default');
  src__di__providers.ClassProvider$ = dart.generic(T => {
    let ClassProviderOfT = () => (ClassProviderOfT = dart.constFn(src__di__providers.ClassProvider$(T)))();
    class ClassProvider extends src__di__providers.Provider$(T) {
      static new(type, opts) {
        return new (ClassProviderOfT()).__(type, opts);
      }
      static forToken(token, opts) {
        return new (ClassProviderOfT()).__(token, opts);
      }
    }
    (ClassProvider.__ = function(token, opts) {
      let useClass = opts && 'useClass' in opts ? opts.useClass : null;
      let multi = opts && 'multi' in opts ? opts.multi : false;
      ClassProvider.__proto__.__.call(this, token, {useClass: core.Type._check((() => {
          let l = useClass;
          return l != null ? l : token;
        })()), multi: multi});
    }).prototype = ClassProvider.prototype;
    dart.addTypeTests(ClassProvider);
    ClassProvider.prototype[_is_ClassProvider_default] = true;
    return ClassProvider;
  });
  src__di__providers.ClassProvider = src__di__providers.ClassProvider$();
  dart.addTypeTests(src__di__providers.ClassProvider, _is_ClassProvider_default);
  const _is_ExistingProvider_default = Symbol('_is_ExistingProvider_default');
  src__di__providers.ExistingProvider$ = dart.generic(T => {
    let ExistingProviderOfT = () => (ExistingProviderOfT = dart.constFn(src__di__providers.ExistingProvider$(T)))();
    class ExistingProvider extends src__di__providers.Provider$(T) {
      static new(type, useExisting, opts) {
        return new (ExistingProviderOfT()).__(type, useExisting, opts);
      }
      static forToken(token, useExisting, opts) {
        return new (ExistingProviderOfT()).__(token, useExisting, opts);
      }
    }
    (ExistingProvider.__ = function(token, useExisting, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      ExistingProvider.__proto__.__.call(this, token, {useExisting: useExisting, multi: multi});
    }).prototype = ExistingProvider.prototype;
    dart.addTypeTests(ExistingProvider);
    ExistingProvider.prototype[_is_ExistingProvider_default] = true;
    return ExistingProvider;
  });
  src__di__providers.ExistingProvider = src__di__providers.ExistingProvider$();
  dart.addTypeTests(src__di__providers.ExistingProvider, _is_ExistingProvider_default);
  const _is_FactoryProvider_default = Symbol('_is_FactoryProvider_default');
  src__di__providers.FactoryProvider$ = dart.generic(T => {
    let FactoryProviderOfT = () => (FactoryProviderOfT = dart.constFn(src__di__providers.FactoryProvider$(T)))();
    class FactoryProvider extends src__di__providers.Provider$(T) {
      static new(type, useFactory, opts) {
        return new (FactoryProviderOfT()).__(type, useFactory, opts);
      }
      static forToken(token, useFactory, opts) {
        return new (FactoryProviderOfT()).__(token, useFactory, opts);
      }
    }
    (FactoryProvider.__ = function(token, useFactory, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      let deps = opts && 'deps' in opts ? opts.deps : null;
      FactoryProvider.__proto__.__.call(this, token, {useFactory: useFactory, multi: multi, deps: deps});
    }).prototype = FactoryProvider.prototype;
    dart.addTypeTests(FactoryProvider);
    FactoryProvider.prototype[_is_FactoryProvider_default] = true;
    return FactoryProvider;
  });
  src__di__providers.FactoryProvider = src__di__providers.FactoryProvider$();
  dart.addTypeTests(src__di__providers.FactoryProvider, _is_FactoryProvider_default);
  const _is_ValueProvider_default = Symbol('_is_ValueProvider_default');
  src__di__providers.ValueProvider$ = dart.generic(T => {
    let ValueProviderOfT = () => (ValueProviderOfT = dart.constFn(src__di__providers.ValueProvider$(T)))();
    class ValueProvider extends src__di__providers.Provider$(T) {
      static new(type, useValue, opts) {
        return new (ValueProviderOfT()).__(type, useValue, opts);
      }
      static forToken(token, useValue, opts) {
        return new (ValueProviderOfT()).__(token, useValue, opts);
      }
    }
    (ValueProvider.__ = function(token, useValue, opts) {
      let multi = opts && 'multi' in opts ? opts.multi : null;
      ValueProvider.__proto__.__.call(this, token, {useValue: useValue, multi: multi});
    }).prototype = ValueProvider.prototype;
    dart.addTypeTests(ValueProvider);
    ValueProvider.prototype[_is_ValueProvider_default] = true;
    return ValueProvider;
  });
  src__di__providers.ValueProvider = src__di__providers.ValueProvider$();
  dart.addTypeTests(src__di__providers.ValueProvider, _is_ValueProvider_default);
  dart.trackLibraries("packages/angular/src/di/providers.ddc", {
    "package:angular/src/di/providers.dart": src__di__providers
  }, '{"version":3,"sourceRoot":"","sources":["providers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAUa,kCAAe;YAAG;;;;;EAmB/B;;2CAQE,KAAY;QACP;QACE,wDAAU,qBAAe;QACzB;QACE;QACI;QACR;UAEH,AAAI,oCAAW,CACb,KAAK,aACK,QAAQ,YACR,QAAQ,eACL,WAAW,cACZ,UAAU,QAChB,IAAI,SACH,KAAK;EACb;;;;;;;;;MAcU;;;;;;MAUF;;;;;;MAcE;;;;;;MAKA;;;;;;MAYE;;;;;;MAGI;;;;;;MAoBR;;;;;;iBAYT,KAAY;AAOT,sCAPH,KAAY;MAOI;wBAiBK,OAA8B;AAEnD,cAAK,AAAU,aAAQ,KAAE,qBAAe,GAAG;AACzC,gBAAO,QAAO,SAAS,CAAC,aAAQ;;AAElC,YAAI,eAAU,IAAI,MAAM;AACtB,gBAAO,QAAO,WAAW,CAAC,eAAU,SAAQ,SAAI;;AAElD,YAAI,gBAAW,IAAI,MAAM;AACvB,gBAAO,QAAO,YAAY,CAAC,gBAAW;;AAExC,cAAO,QAAO,SAAS,CAAC,aAAQ,WAAR,aAAQ,GAAI,sCAAU,YAAO,UAAK,UAAS,SAAI;MACzE;;cAG0B;MAAK;;4BA5B7B,KAAU;UACL;UACA,wDAAU,qBAAe;UACzB;UACA;UACA;UACA,+CAAO;MANP,YAAK,GAAL,KAAK;MACL,eAAQ,GAAR,QAAQ;MACR,eAAQ,GAAR,QAAQ;MACR,kBAAW,GAAX,WAAW;MACX,iBAAU,GAAV,UAAU;MACV,WAAI,GAAJ,IAAI;MACJ,YAAK,GAAL,KAAK;IACV;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+CAyBkB,QAAiB,EAAE,OAA8B;AACrE,UAAO,SAAQ,iBAAgB,CAAC,OAAO;EACzC;;+CAGuB,QAAoB;UAAK,SAAQ,cAAa;EAAE;;;;;;iBAkBnE,IAAS;AAGN,2CAHH,IAAS;MAGY;sBAGrB,KAAoB;AAGjB,2CAHH,KAAoB;MAGC;;iCAIrB,KAAY;UACP;UACA,+CAAO;AACT,4CACG,KAAK;kBAEK,QAAQ;iCAAI,KAAK;sBACpB,KAAK;IACb;;;;;;;;;;;iBAWL,IAAS,EACT,WAAkB;AAEf,8CAHH,IAAS,EACT,WAAkB;MAEM;sBAGxB,KAAoB,EACpB,WAAkB;AAEf,8CAHH,KAAoB,EACpB,WAAkB;MAEM;;oCAIxB,KAAY,EACZ,WAAkB;UACb;AACF,+CACG,KAAK,gBACQ,WAAW,SACjB,KAAK;IACb;;;;;;;;;;;iBAgBL,IAAS,EACT,UAAmB;AAGhB,6CAJH,IAAS,EACT,UAAmB;MAGI;sBAGvB,KAAoB,EACpB,UAAmB;AAGhB,6CAJH,KAAoB,EACpB,UAAmB;MAGI;;mCAIvB,KAAY,EACZ,UAAmB;UACd;UACQ;AACV,8CACG,KAAK,eACO,UAAU,SACf,KAAK,QACN,IAAI;IACX;;;;;;;;;;;iBAkBL,IAAS,EACT,QAAU;AAEP,2CAHH,IAAS,EACT,QAAU;MAEW;sBAGrB,KAAoB,EACpB,QAAU;AAEP,2CAHH,KAAoB,EACpB,QAAU;MAEW;;iCAIrB,KAAY,EACZ,QAAU;UACL;AACF,4CACG,KAAK,aACK,QAAQ,SACX,KAAK;IACb","file":"providers.ddc.js"}');
  // Exports:
  return {
    src__di__providers: src__di__providers
  };
});

//# sourceMappingURL=providers.ddc.js.map
