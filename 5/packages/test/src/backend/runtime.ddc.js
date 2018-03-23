define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__backend__runtime = Object.create(_root);
  const $firstWhere = dartx.firstWhere;
  const $_get = dartx._get;
  const $contains = dartx.contains;
  let RuntimeTobool = () => (RuntimeTobool = dart.constFn(dart.fnType(core.bool, [src__backend__runtime.Runtime])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  src__backend__runtime.Runtime = class Runtime extends core.Object {
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
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get isChild() {
      return this.parent != null;
    }
    get isDartVM() {
      return this[isDartVM$];
    }
    set isDartVM(value) {
      super.isDartVM = value;
    }
    get isBrowser() {
      return this[isBrowser$];
    }
    set isBrowser(value) {
      super.isBrowser = value;
    }
    get isJS() {
      return this[isJS$];
    }
    set isJS(value) {
      super.isJS = value;
    }
    get isBlink() {
      return this[isBlink$];
    }
    set isBlink(value) {
      super.isBlink = value;
    }
    get isHeadless() {
      return this[isHeadless$];
    }
    set isHeadless(value) {
      super.isHeadless = value;
    }
    get root() {
      return this.parent != null ? this.parent : this;
    }
    static deserialize(serialized) {
      if (typeof serialized == 'string') {
        return src__backend__runtime.Runtime.builtIn[$firstWhere](dart.fn(platform => platform.identifier == serialized, RuntimeTobool()));
      }
      let map = core.Map.as(serialized);
      let parent = map[$_get]("parent");
      if (parent != null) {
        return new src__backend__runtime.Runtime._child(core.String._check(map[$_get]("name")), core.String._check(map[$_get]("identifier")), src__backend__runtime.Runtime.deserialize(parent));
      }
      return new src__backend__runtime.Runtime.new(core.String._check(map[$_get]("name")), core.String._check(map[$_get]("identifier")), {isDartVM: core.bool._check(map[$_get]("isDartVM")), isBrowser: core.bool._check(map[$_get]("isBrowser")), isJS: core.bool._check(map[$_get]("isJS")), isBlink: core.bool._check(map[$_get]("isBlink")), isHeadless: core.bool._check(map[$_get]("isHeadless"))});
    }
    serialize() {
      if (dart.test(src__backend__runtime.Runtime.builtIn[$contains](this))) return this.identifier;
      if (this.parent != null) {
        return new (IdentityMapOfString$Object()).from(["name", this.name, "identifier", this.identifier, "parent", this.parent.serialize()]);
      }
      return new (IdentityMapOfString$Object()).from(["name", this.name, "identifier", this.identifier, "isDartVM", this.isDartVM, "isBrowser", this.isBrowser, "isJS", this.isJS, "isBlink", this.isBlink, "isHeadless", this.isHeadless]);
    }
    extend(name, identifier) {
      if (this.parent == null) return new src__backend__runtime.Runtime._child(name, identifier, this);
      dart.throw(new core.StateError.new("A child platform may not be extended."));
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__runtime.Runtime.new = function(name, identifier, opts) {
    let isDartVM = opts && 'isDartVM' in opts ? opts.isDartVM : false;
    let isBrowser = opts && 'isBrowser' in opts ? opts.isBrowser : false;
    let isJS = opts && 'isJS' in opts ? opts.isJS : false;
    let isBlink = opts && 'isBlink' in opts ? opts.isBlink : false;
    let isHeadless = opts && 'isHeadless' in opts ? opts.isHeadless : false;
    this[name$] = name;
    this[identifier$] = identifier;
    this[isDartVM$] = isDartVM;
    this[isBrowser$] = isBrowser;
    this[isJS$] = isJS;
    this[isBlink$] = isBlink;
    this[isHeadless$] = isHeadless;
    this[parent$] = null;
  }).prototype = src__backend__runtime.Runtime.prototype;
  (src__backend__runtime.Runtime._child = function(name, identifier, parent) {
    this[name$] = name;
    this[identifier$] = identifier;
    this[parent$] = parent;
    this[isDartVM$] = parent.isDartVM;
    this[isBrowser$] = parent.isBrowser;
    this[isJS$] = parent.isJS;
    this[isBlink$] = parent.isBlink;
    this[isHeadless$] = parent.isHeadless;
  }).prototype = src__backend__runtime.Runtime.prototype;
  dart.addTypeTests(src__backend__runtime.Runtime);
  const name$ = Symbol("Runtime.name");
  const identifier$ = Symbol("Runtime.identifier");
  const parent$ = Symbol("Runtime.parent");
  const isDartVM$ = Symbol("Runtime.isDartVM");
  const isBrowser$ = Symbol("Runtime.isBrowser");
  const isJS$ = Symbol("Runtime.isJS");
  const isBlink$ = Symbol("Runtime.isBlink");
  const isHeadless$ = Symbol("Runtime.isHeadless");
  dart.setMethodSignature(src__backend__runtime.Runtime, () => ({
    __proto__: dart.getMethods(src__backend__runtime.Runtime.__proto__),
    serialize: dart.fnType(core.Object, []),
    extend: dart.fnType(src__backend__runtime.Runtime, [core.String, core.String])
  }));
  dart.setGetterSignature(src__backend__runtime.Runtime, () => ({
    __proto__: dart.getGetters(src__backend__runtime.Runtime.__proto__),
    isChild: dart.fnType(core.bool, []),
    root: dart.fnType(src__backend__runtime.Runtime, [])
  }));
  dart.setFieldSignature(src__backend__runtime.Runtime, () => ({
    __proto__: dart.getFields(src__backend__runtime.Runtime.__proto__),
    name: dart.finalFieldType(core.String),
    identifier: dart.finalFieldType(core.String),
    parent: dart.finalFieldType(src__backend__runtime.Runtime),
    isDartVM: dart.finalFieldType(core.bool),
    isBrowser: dart.finalFieldType(core.bool),
    isJS: dart.finalFieldType(core.bool),
    isBlink: dart.finalFieldType(core.bool),
    isHeadless: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__backend__runtime.Runtime, ['toString']);
  dart.defineLazy(src__backend__runtime.Runtime, {
    /*src__backend__runtime.Runtime.vm*/get vm() {
      return dart.const(new src__backend__runtime.Runtime.new("VM", "vm", {isDartVM: true}));
    },
    /*src__backend__runtime.Runtime.dartium*/get dartium() {
      return dart.const(new src__backend__runtime.Runtime.new("Dartium", "dartium", {isBrowser: true, isBlink: true, isDartVM: true}));
    },
    /*src__backend__runtime.Runtime.contentShell*/get contentShell() {
      return dart.const(new src__backend__runtime.Runtime.new("Dartium Content Shell", "content-shell", {isBrowser: true, isBlink: true, isDartVM: true, isHeadless: true}));
    },
    /*src__backend__runtime.Runtime.chrome*/get chrome() {
      return dart.const(new src__backend__runtime.Runtime.new("Chrome", "chrome", {isBrowser: true, isJS: true, isBlink: true}));
    },
    /*src__backend__runtime.Runtime.phantomJS*/get phantomJS() {
      return dart.const(new src__backend__runtime.Runtime.new("PhantomJS", "phantomjs", {isBrowser: true, isJS: true, isBlink: true, isHeadless: true}));
    },
    /*src__backend__runtime.Runtime.firefox*/get firefox() {
      return dart.const(new src__backend__runtime.Runtime.new("Firefox", "firefox", {isBrowser: true, isJS: true}));
    },
    /*src__backend__runtime.Runtime.safari*/get safari() {
      return dart.const(new src__backend__runtime.Runtime.new("Safari", "safari", {isBrowser: true, isJS: true}));
    },
    /*src__backend__runtime.Runtime.internetExplorer*/get internetExplorer() {
      return dart.const(new src__backend__runtime.Runtime.new("Internet Explorer", "ie", {isBrowser: true, isJS: true}));
    },
    /*src__backend__runtime.Runtime.nodeJS*/get nodeJS() {
      return dart.const(new src__backend__runtime.Runtime.new("Node.js", "node", {isJS: true}));
    },
    /*src__backend__runtime.Runtime.builtIn*/get builtIn() {
      return dart.constList([src__backend__runtime.Runtime.vm, src__backend__runtime.Runtime.dartium, src__backend__runtime.Runtime.contentShell, src__backend__runtime.Runtime.chrome, src__backend__runtime.Runtime.phantomJS, src__backend__runtime.Runtime.firefox, src__backend__runtime.Runtime.safari, src__backend__runtime.Runtime.internetExplorer, src__backend__runtime.Runtime.nodeJS], src__backend__runtime.Runtime);
    }
  });
  dart.trackLibraries("packages/test/src/backend/runtime.ddc", {
    "package:test/src/backend/runtime.dart": src__backend__runtime
  }, '{"version":3,"sourceRoot":"","sources":["runtime.dart"],"names":[],"mappings":"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","file":"runtime.ddc.js"}');
  // Exports:
  return {
    src__backend__runtime: src__backend__runtime
  };
});

//# sourceMappingURL=runtime.ddc.js.map
