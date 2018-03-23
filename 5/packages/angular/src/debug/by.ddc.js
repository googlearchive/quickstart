define(['dart_sdk', 'packages/angular/src/core/application_ref', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/di/injector/empty', 'packages/angular/src/core/render/api'], function(dart_sdk, application_ref, ng_zone, empty, api) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__application_ref = application_ref.src__core__application_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__core__render__api = api.src__core__render__api;
  const _root = Object.create(null);
  const src__debug__by = Object.create(_root);
  const src__debug__debug_node = Object.create(_root);
  const $matches = dartx.matches;
  const $indexOf = dartx.indexOf;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $removeAt = dartx.removeAt;
  const $sublist = dartx.sublist;
  const $addAll = dartx.addAll;
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $values = dartx.values;
  const $_set = dartx._set;
  const $containsKey = dartx.containsKey;
  const $remove = dartx.remove;
  let DebugElementTobool = () => (DebugElementTobool = dart.constFn(dart.fnType(core.bool, [src__debug__debug_node.DebugElement])))();
  let DebugNodeTobool = () => (DebugNodeTobool = dart.constFn(dart.fnType(core.bool, [src__debug__debug_node.DebugNode])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfDebugNode = () => (JSArrayOfDebugNode = dart.constFn(_interceptors.JSArray$(src__debug__debug_node.DebugNode)))();
  let ListOfDebugNode = () => (ListOfDebugNode = dart.constFn(core.List$(src__debug__debug_node.DebugNode)))();
  let JSArrayOfDebugElement = () => (JSArrayOfDebugElement = dart.constFn(_interceptors.JSArray$(src__debug__debug_node.DebugElement)))();
  let DebugElementTobool$ = () => (DebugElementTobool$ = dart.constFn(dart.fnType(core.bool, [src__debug__debug_node.DebugElement])))();
  let DebugNodeTobool$ = () => (DebugNodeTobool$ = dart.constFn(dart.fnType(core.bool, [src__debug__debug_node.DebugNode])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let DebugElementTodynamic = () => (DebugElementTodynamic = dart.constFn(dart.fnType(dart.dynamic, [src__debug__debug_node.DebugElement])))();
  let ListOfDebugElement = () => (ListOfDebugElement = dart.constFn(core.List$(src__debug__debug_node.DebugElement)))();
  let ListOfDebugElementTodynamic = () => (ListOfDebugElementTodynamic = dart.constFn(dart.fnType(dart.dynamic, [ListOfDebugElement()])))();
  let DebugElementAndFnAndListOfDebugElementTovoid = () => (DebugElementAndFnAndListOfDebugElementTovoid = dart.constFn(dart.fnType(dart.void, [src__debug__debug_node.DebugElement, DebugElementTobool$(), ListOfDebugElement()])))();
  let DebugNodeAndFnAndListOfDebugNodeTovoid = () => (DebugNodeAndFnAndListOfDebugNodeTovoid = dart.constFn(dart.fnType(dart.void, [src__debug__debug_node.DebugNode, DebugNodeTobool$(), ListOfDebugNode()])))();
  let LinkedMapOfdynamic$DebugNode = () => (LinkedMapOfdynamic$DebugNode = dart.constFn(_js_helper.LinkedMap$(dart.dynamic, src__debug__debug_node.DebugNode)))();
  let dynamicToDebugNode = () => (dynamicToDebugNode = dart.constFn(dart.fnType(src__debug__debug_node.DebugNode, [dart.dynamic])))();
  let VoidToListOfDebugNode = () => (VoidToListOfDebugNode = dart.constFn(dart.fnType(ListOfDebugNode(), [])))();
  let DebugNodeTovoid = () => (DebugNodeTovoid = dart.constFn(dart.fnType(dart.void, [src__debug__debug_node.DebugNode])))();
  src__debug__by.By = class By extends core.Object {
    static all() {
      return dart.fn(debugElement => true, DebugElementTobool());
    }
    static css(selector) {
      return dart.fn(debugElement => {
        let node = html.Node._check(debugElement.nativeElement);
        return html.Element.is(node) && dart.test(node[$matches](selector));
      }, DebugElementTobool());
    }
    static directive(type) {
      return dart.fn(debugElement => !(debugElement.providerTokens[$indexOf](type) === -1), DebugElementTobool());
    }
    static nodeDirective(type) {
      return dart.fn(debugNode => !(debugNode.providerTokens[$indexOf](type) === -1), DebugNodeTobool());
    }
  };
  (src__debug__by.By.new = function() {
  }).prototype = src__debug__by.By.prototype;
  dart.addTypeTests(src__debug__by.By);
  dart.setStaticMethodSignature(src__debug__by.By, () => ({
    all: dart.fnType(dart.fnType(core.bool, [src__debug__debug_node.DebugElement]), []),
    css: dart.fnType(dart.fnType(core.bool, [src__debug__debug_node.DebugElement]), [core.String]),
    directive: dart.fnType(dart.fnType(core.bool, [src__debug__debug_node.DebugElement]), [core.Type]),
    nodeDirective: dart.fnType(dart.fnType(core.bool, [src__debug__debug_node.DebugNode]), [core.Type])
  }));
  src__debug__debug_node.Predicate$ = dart.generic(T => {
    const Predicate = dart.typedef('Predicate', () => dart.fnType(core.bool, [T]));
    return Predicate;
  });
  src__debug__debug_node.Predicate = src__debug__debug_node.Predicate$();
  const _debugInfo = Symbol('_debugInfo');
  src__debug__debug_node.DebugNode = class DebugNode extends core.Object {
    get nativeNode() {
      return this[nativeNode$];
    }
    set nativeNode(value) {
      this[nativeNode$] = value;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      this[parent$] = value;
    }
    get injector() {
      return this[_debugInfo] == null ? null : this[_debugInfo].injector;
    }
    get componentInstance() {
      return this[_debugInfo] == null ? null : this[_debugInfo].component;
    }
    get locals() {
      return this[_debugInfo] == null ? null : this[_debugInfo].locals;
    }
    get providerTokens() {
      return this[_debugInfo] == null ? null : this[_debugInfo].providerTokens;
    }
    get source() {
      return this[_debugInfo] == null ? null : this[_debugInfo].source;
    }
    inject(token) {
      return this.injector.get(token);
    }
    get applicationRef() {
      return this.injector.get(dart.wrapType(src__core__application_ref.ApplicationRef));
    }
    get zone() {
      return this.injector.get(dart.wrapType(src__core__zone__ng_zone.NgZone));
    }
    getLocal(name) {
      return this.locals[$_get](name);
    }
  };
  (src__debug__debug_node.DebugNode.new = function(nativeNode, parent, debugInfo) {
    this[nativeNode$] = null;
    this[parent$] = null;
    this[_debugInfo] = debugInfo;
    this.nativeNode = nativeNode;
    if (parent != null && src__debug__debug_node.DebugElement.is(parent)) {
      parent.addChild(this);
    } else {
      this.parent = null;
    }
  }).prototype = src__debug__debug_node.DebugNode.prototype;
  dart.addTypeTests(src__debug__debug_node.DebugNode);
  const nativeNode$ = Symbol("DebugNode.nativeNode");
  const parent$ = Symbol("DebugNode.parent");
  dart.setMethodSignature(src__debug__debug_node.DebugNode, () => ({
    __proto__: dart.getMethods(src__debug__debug_node.DebugNode.__proto__),
    inject: dart.fnType(dart.dynamic, [dart.dynamic]),
    getLocal: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setGetterSignature(src__debug__debug_node.DebugNode, () => ({
    __proto__: dart.getGetters(src__debug__debug_node.DebugNode.__proto__),
    injector: dart.fnType(src__di__injector__injector.Injector, []),
    componentInstance: dart.fnType(dart.dynamic, []),
    locals: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    providerTokens: dart.fnType(core.List, []),
    source: dart.fnType(core.String, []),
    applicationRef: dart.fnType(dart.dynamic, []),
    zone: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__debug__debug_node.DebugNode, () => ({
    __proto__: dart.getFields(src__debug__debug_node.DebugNode.__proto__),
    [_debugInfo]: dart.finalFieldType(src__core__render__api.RenderDebugInfo),
    nativeNode: dart.fieldType(dart.dynamic),
    parent: dart.fieldType(src__debug__debug_node.DebugElement)
  }));
  src__debug__debug_node.DebugElement = class DebugElement extends src__debug__debug_node.DebugNode {
    get name() {
      return this[name];
    }
    set name(value) {
      this[name] = value;
    }
    get properties() {
      return this[properties];
    }
    set properties(value) {
      this[properties] = value;
    }
    get childNodes() {
      return this[childNodes];
    }
    set childNodes(value) {
      this[childNodes] = value;
    }
    get nativeElement() {
      return this[nativeElement];
    }
    set nativeElement(value) {
      this[nativeElement] = value;
    }
    addChild(child) {
      if (child == null) return;
      this.childNodes[$add](child);
      child.parent = this;
    }
    removeChild(child) {
      let childIndex = this.childNodes[$indexOf](child);
      if (childIndex !== -1) {
        child.parent = null;
        this.childNodes[$removeAt](childIndex);
      }
    }
    get attributes() {
      return core.Map._check(dart.dload(this.nativeElement, 'attributes'));
    }
    insertChildrenAfter(child, newChildren) {
      let siblingIndex = this.childNodes[$indexOf](child);
      if (!(siblingIndex === -1)) {
        let previousChildren = this.childNodes[$sublist](0, dart.notNull(siblingIndex) + 1);
        let _ = ListOfDebugNode().from(previousChildren);
        _[$addAll](newChildren);
        _[$addAll](this.childNodes[$sublist](dart.notNull(siblingIndex) + 1));
        this.childNodes = _;
        for (let i = 0; i < dart.notNull(newChildren[$length]); ++i) {
          let newChild = newChildren[$_get](i);
          let t = newChild.parent;
          t == null ? null : t.removeChild(newChild);
          newChild.parent = this;
        }
      }
    }
    query(predicate) {
      let results = this.queryAll(predicate);
      return dart.notNull(results[$length]) > 0 ? results[$_get](0) : null;
    }
    queryAll(predicate) {
      let matches = JSArrayOfDebugElement().of([]);
      src__debug__debug_node._queryElementChildren(this, predicate, matches);
      return matches;
    }
    queryAllNodes(predicate) {
      let matches = JSArrayOfDebugNode().of([]);
      src__debug__debug_node._queryNodeChildren(this, predicate, matches);
      return matches;
    }
    get children() {
      let children = JSArrayOfDebugElement().of([]);
      for (let node of this.childNodes) {
        if (src__debug__debug_node.DebugElement.is(node)) {
          children[$add](node);
        }
      }
      return children;
    }
  };
  (src__debug__debug_node.DebugElement.new = function(nativeNode, parent, _debugInfo) {
    this[name] = null;
    this[properties] = null;
    this[childNodes] = null;
    this[nativeElement] = null;
    src__debug__debug_node.DebugElement.__proto__.new.call(this, nativeNode, src__debug__debug_node.DebugNode._check(parent), _debugInfo);
    this.properties = new (IdentityMapOfString$dynamic()).new();
    this.childNodes = JSArrayOfDebugNode().of([]);
    this.nativeElement = nativeNode;
  }).prototype = src__debug__debug_node.DebugElement.prototype;
  dart.addTypeTests(src__debug__debug_node.DebugElement);
  const name = Symbol("DebugElement.name");
  const properties = Symbol("DebugElement.properties");
  const childNodes = Symbol("DebugElement.childNodes");
  const nativeElement = Symbol("DebugElement.nativeElement");
  dart.setMethodSignature(src__debug__debug_node.DebugElement, () => ({
    __proto__: dart.getMethods(src__debug__debug_node.DebugElement.__proto__),
    addChild: dart.fnType(dart.void, [src__debug__debug_node.DebugNode]),
    removeChild: dart.fnType(dart.void, [src__debug__debug_node.DebugNode]),
    insertChildrenAfter: dart.fnType(dart.void, [src__debug__debug_node.DebugNode, ListOfDebugNode()]),
    query: dart.fnType(src__debug__debug_node.DebugElement, [DebugElementTobool$()]),
    queryAll: dart.fnType(core.List$(src__debug__debug_node.DebugElement), [DebugElementTobool$()]),
    queryAllNodes: dart.fnType(core.List$(src__debug__debug_node.DebugNode), [DebugNodeTobool$()])
  }));
  dart.setGetterSignature(src__debug__debug_node.DebugElement, () => ({
    __proto__: dart.getGetters(src__debug__debug_node.DebugElement.__proto__),
    attributes: dart.fnType(core.Map, []),
    children: dart.fnType(core.List$(src__debug__debug_node.DebugElement), [])
  }));
  dart.setFieldSignature(src__debug__debug_node.DebugElement, () => ({
    __proto__: dart.getFields(src__debug__debug_node.DebugElement.__proto__),
    name: dart.fieldType(core.String),
    properties: dart.fieldType(MapOfString$dynamic()),
    childNodes: dart.fieldType(ListOfDebugNode()),
    nativeElement: dart.fieldType(dart.dynamic)
  }));
  src__debug__debug_node.asNativeElements = function(debugEls) {
    return debugEls[$map](dart.dynamic, dart.fn(el => el.nativeElement, DebugElementTodynamic()))[$toList]();
  };
  dart.fn(src__debug__debug_node.asNativeElements, ListOfDebugElementTodynamic());
  src__debug__debug_node._queryElementChildren = function(element, predicate, matches) {
    for (let node of element.childNodes) {
      if (src__debug__debug_node.DebugElement.is(node)) {
        if (dart.test(predicate(node))) {
          matches[$add](node);
        }
        src__debug__debug_node._queryElementChildren(node, predicate, matches);
      }
    }
  };
  dart.fn(src__debug__debug_node._queryElementChildren, DebugElementAndFnAndListOfDebugElementTovoid());
  src__debug__debug_node._queryNodeChildren = function(parentNode, predicate, matches) {
    if (src__debug__debug_node.DebugElement.is(parentNode)) {
      for (let node of parentNode.childNodes) {
        if (dart.test(predicate(node))) {
          matches[$add](node);
        }
        if (src__debug__debug_node.DebugElement.is(node)) {
          src__debug__debug_node._queryNodeChildren(node, predicate, matches);
        }
      }
    }
  };
  dart.fn(src__debug__debug_node._queryNodeChildren, DebugNodeAndFnAndListOfDebugNodeTovoid());
  dart.defineLazy(src__debug__debug_node, {
    /*src__debug__debug_node._nativeNodeToDebugNode*/get _nativeNodeToDebugNode() {
      return new (LinkedMapOfdynamic$DebugNode()).new();
    },
    set _nativeNodeToDebugNode(_) {}
  });
  src__debug__debug_node.getDebugNode = function(nativeNode) {
    return src__debug__debug_node._nativeNodeToDebugNode[$_get](nativeNode);
  };
  dart.fn(src__debug__debug_node.getDebugNode, dynamicToDebugNode());
  src__debug__debug_node.getAllDebugNodes = function() {
    return src__debug__debug_node._nativeNodeToDebugNode[$values][$toList]();
  };
  dart.fn(src__debug__debug_node.getAllDebugNodes, VoidToListOfDebugNode());
  src__debug__debug_node.indexDebugNode = function(node) {
    src__debug__debug_node._nativeNodeToDebugNode[$_set](node.nativeNode, node);
  };
  dart.fn(src__debug__debug_node.indexDebugNode, DebugNodeTovoid());
  src__debug__debug_node.removeDebugNodeFromIndex = function(node) {
    dart.test(src__debug__debug_node._nativeNodeToDebugNode[$containsKey](node.nativeNode)) && (src__debug__debug_node._nativeNodeToDebugNode[$remove](node.nativeNode) != null || true);
  };
  dart.fn(src__debug__debug_node.removeDebugNodeFromIndex, DebugNodeTovoid());
  src__debug__debug_node.inspectNativeElement = function(element) {
    return src__debug__debug_node.getDebugNode(element);
  };
  dart.fn(src__debug__debug_node.inspectNativeElement, dynamicToDebugNode());
  dart.trackLibraries("packages/angular/src/debug/by.ddc", {
    "package:angular/src/debug/by.dart": src__debug__by,
    "package:angular/src/debug/debug_node.dart": src__debug__debug_node
  }, '{"version":3,"sourceRoot":"","sources":["by.dart","debug_node.dart"],"names":[],"mappings":"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","file":"by.ddc.js"}');
  // Exports:
  return {
    src__debug__by: src__debug__by,
    src__debug__debug_node: src__debug__debug_node
  };
});

//# sourceMappingURL=by.ddc.js.map
