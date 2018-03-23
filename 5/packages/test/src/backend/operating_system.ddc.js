define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__backend__operating_system = Object.create(_root);
  const $firstWhere = dartx.firstWhere;
  let OperatingSystemTobool = () => (OperatingSystemTobool = dart.constFn(dart.fnType(core.bool, [src__backend__operating_system.OperatingSystem])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  src__backend__operating_system.OperatingSystem = class OperatingSystem extends core.Object {
    static find(identifier) {
      return src__backend__operating_system.OperatingSystem.all[$firstWhere](dart.fn(platform => platform.identifier == identifier, OperatingSystemTobool()), {orElse: dart.fn(() => null, VoidToNull())});
    }
    static findByIoName(name) {
      switch (name) {
        case "windows":
        {
          return src__backend__operating_system.OperatingSystem.windows;
        }
        case "macos":
        {
          return src__backend__operating_system.OperatingSystem.macOS;
        }
        case "linux":
        {
          return src__backend__operating_system.OperatingSystem.linux;
        }
        case "android":
        {
          return src__backend__operating_system.OperatingSystem.android;
        }
        case "ios":
        {
          return src__backend__operating_system.OperatingSystem.iOS;
        }
        default:
        {
          return src__backend__operating_system.OperatingSystem.none;
        }
      }
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get identifier() {
      return this[identifier$];
    }
    set identifier(value) {
      super.identifier = value;
    }
    get isPosix() {
      return !this._equals(src__backend__operating_system.OperatingSystem.windows) && !this._equals(src__backend__operating_system.OperatingSystem.none);
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__operating_system.OperatingSystem.__ = function(name, identifier) {
    this[name$] = name;
    this[identifier$] = identifier;
  }).prototype = src__backend__operating_system.OperatingSystem.prototype;
  dart.addTypeTests(src__backend__operating_system.OperatingSystem);
  const name$ = Symbol("OperatingSystem.name");
  const identifier$ = Symbol("OperatingSystem.identifier");
  dart.setStaticMethodSignature(src__backend__operating_system.OperatingSystem, () => ({
    find: dart.fnType(src__backend__operating_system.OperatingSystem, [core.String]),
    findByIoName: dart.fnType(src__backend__operating_system.OperatingSystem, [core.String])
  }));
  dart.setGetterSignature(src__backend__operating_system.OperatingSystem, () => ({
    __proto__: dart.getGetters(src__backend__operating_system.OperatingSystem.__proto__),
    isPosix: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__backend__operating_system.OperatingSystem, () => ({
    __proto__: dart.getFields(src__backend__operating_system.OperatingSystem.__proto__),
    name: dart.finalFieldType(core.String),
    identifier: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__backend__operating_system.OperatingSystem, ['toString']);
  dart.defineLazy(src__backend__operating_system.OperatingSystem, {
    /*src__backend__operating_system.OperatingSystem.windows*/get windows() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("Windows", "windows"));
    },
    /*src__backend__operating_system.OperatingSystem.macOS*/get macOS() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("OS X", "mac-os"));
    },
    /*src__backend__operating_system.OperatingSystem.linux*/get linux() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("Linux", "linux"));
    },
    /*src__backend__operating_system.OperatingSystem.android*/get android() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("Android", "android"));
    },
    /*src__backend__operating_system.OperatingSystem.iOS*/get iOS() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("iOS", "ios"));
    },
    /*src__backend__operating_system.OperatingSystem.none*/get none() {
      return dart.const(new src__backend__operating_system.OperatingSystem.__("none", "none"));
    },
    /*src__backend__operating_system.OperatingSystem.all*/get all() {
      return dart.constList([src__backend__operating_system.OperatingSystem.windows, src__backend__operating_system.OperatingSystem.macOS, src__backend__operating_system.OperatingSystem.linux, src__backend__operating_system.OperatingSystem.android, src__backend__operating_system.OperatingSystem.iOS], src__backend__operating_system.OperatingSystem);
    }
  });
  dart.trackLibraries("packages/test/src/backend/operating_system.ddc", {
    "package:test/src/backend/operating_system.dart": src__backend__operating_system
  }, '{"version":3,"sourceRoot":"","sources":["operating_system.dart"],"names":[],"mappings":";;;;;;;;;;;gBA2C8B,UAAiB;YACzC,mDAAG,aAAW,CAAC,QAAC,QAAQ,IAAK,QAAQ,WAAW,IAAI,UAAU,qCAClD,cAAM;IAAK;wBAMS,IAAW;AAC7C,cAAQ,IAAI;YACL;;AACH,gBAAO,uDAAO;;YACX;;AACH,gBAAO,qDAAK;;YACT;;AACH,gBAAO,qDAAK;;YACT;;AACH,gBAAO,uDAAO;;YACX;;AACH,gBAAO,mDAAG;;;;AAEV,gBAAO,oDAAI;;;IAEjB;IAGa;;;;;;IAGA;;;;;;;YAGuB,EAAhB,aAAQ,sDAAO,MAAI,aAAQ,mDAAI;;;YAI9B,UAAI;;;gEAFD,IAAS,EAAE,UAAe;IAArB,WAAI,GAAJ,IAAI;IAAO,iBAAU,GAAV,UAAU;EAAC;;;;;;;;;;;;;;;;;;;MAlEtC,sDAAO;YAAG,gBAAM,iDAAiB,CAAC,WAAW;;MAG7C,oDAAK;YAAG,gBAAM,iDAAiB,CAAC,QAAQ;;MAGxC,oDAAK;YAAG,gBAAM,iDAAiB,CAAC,SAAS;;MAMzC,sDAAO;YAAG,gBAAM,iDAAiB,CAAC,WAAW;;MAM7C,kDAAG;YAAG,gBAAM,iDAAiB,CAAC,OAAO;;MAMrC,mDAAI;YAAG,gBAAM,iDAAiB,CAAC,QAAQ;;MAGvC,kDAAG;YAAG,iBAAO,sDAAO,EAAE,oDAAK,EAAE,oDAAK,EAAE,sDAAO,EAAE,kDAAG","file":"operating_system.ddc.js"}');
  // Exports:
  return {
    src__backend__operating_system: src__backend__operating_system
  };
});

//# sourceMappingURL=operating_system.ddc.js.map
