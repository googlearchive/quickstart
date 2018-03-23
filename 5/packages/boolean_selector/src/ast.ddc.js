define(['dart_sdk', 'packages/source_span/src/file'], function(dart_sdk, file) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__file = file.src__file;
  const _root = Object.create(null);
  const src__ast = Object.create(_root);
  const src__visitor = Object.create(_root);
  const $hashCode = dartx.hashCode;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  let FileSpanAndFileSpanToFileSpan = () => (FileSpanAndFileSpanToFileSpan = dart.constFn(dart.fnType(src__file.FileSpan, [src__file.FileSpan, src__file.FileSpan])))();
  src__ast.Node = class Node extends core.Object {};
  (src__ast.Node.new = function() {
  }).prototype = src__ast.Node.prototype;
  dart.addTypeTests(src__ast.Node);
  src__ast.VariableNode = class VariableNode extends core.Object {
    get span() {
      return this[span$];
    }
    set span(value) {
      super.span = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get variables() {
      return JSArrayOfString().of([this.name]);
    }
    accept(visitor) {
      return visitor.visitVariable(this);
    }
    toString() {
      return this.name;
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.VariableNode.is(other) && this.name == other.name;
    }
    get hashCode() {
      return dart.hashCode(this.name);
    }
  };
  (src__ast.VariableNode.new = function(name, span) {
    if (span === void 0) span = null;
    this[name$] = name;
    this[span$] = span;
  }).prototype = src__ast.VariableNode.prototype;
  dart.addTypeTests(src__ast.VariableNode);
  const span$ = Symbol("VariableNode.span");
  const name$ = Symbol("VariableNode.name");
  src__ast.VariableNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.VariableNode, () => ({
    __proto__: dart.getMethods(src__ast.VariableNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.VariableNode, () => ({
    __proto__: dart.getGetters(src__ast.VariableNode.__proto__),
    variables: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setFieldSignature(src__ast.VariableNode, () => ({
    __proto__: dart.getFields(src__ast.VariableNode.__proto__),
    span: dart.finalFieldType(src__file.FileSpan),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__ast.VariableNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.VariableNode, ['hashCode']);
  src__ast.NotNode = class NotNode extends core.Object {
    get span() {
      return this[span$0];
    }
    set span(value) {
      super.span = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get variables() {
      return this.child.variables;
    }
    accept(visitor) {
      return visitor.visitNot(this);
    }
    toString() {
      return src__ast.VariableNode.is(this.child) || src__ast.NotNode.is(this.child) ? dart.str`!${this.child}` : dart.str`!(${this.child})`;
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.NotNode.is(other) && dart.equals(this.child, other.child);
    }
    get hashCode() {
      return ~dart.notNull(dart.hashCode(this.child)) >>> 0;
    }
  };
  (src__ast.NotNode.new = function(child, span) {
    if (span === void 0) span = null;
    this[child$] = child;
    this[span$0] = span;
  }).prototype = src__ast.NotNode.prototype;
  dart.addTypeTests(src__ast.NotNode);
  const span$0 = Symbol("NotNode.span");
  const child$ = Symbol("NotNode.child");
  src__ast.NotNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.NotNode, () => ({
    __proto__: dart.getMethods(src__ast.NotNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.NotNode, () => ({
    __proto__: dart.getGetters(src__ast.NotNode.__proto__),
    variables: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setFieldSignature(src__ast.NotNode, () => ({
    __proto__: dart.getFields(src__ast.NotNode.__proto__),
    span: dart.finalFieldType(src__file.FileSpan),
    child: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__ast.NotNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.NotNode, ['hashCode']);
  src__ast.OrNode = class OrNode extends core.Object {
    get span() {
      return src__ast._expandSafe(this.left.span, this.right.span);
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.left.variables;
        yield* this.right.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitOr(this);
    }
    toString() {
      let string1 = src__ast.AndNode.is(this.left) || src__ast.ConditionalNode.is(this.left) ? dart.str`(${this.left})` : this.left;
      let string2 = src__ast.AndNode.is(this.right) || src__ast.ConditionalNode.is(this.right) ? dart.str`(${this.right})` : this.right;
      return dart.str`${string1} || ${string2}`;
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.OrNode.is(other) && dart.equals(this.left, other.left) && dart.equals(this.right, other.right);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.left)) ^ dart.notNull(dart.hashCode(this.right))) >>> 0;
    }
  };
  (src__ast.OrNode.new = function(left, right) {
    this[left$] = left;
    this[right$] = right;
  }).prototype = src__ast.OrNode.prototype;
  dart.addTypeTests(src__ast.OrNode);
  const left$ = Symbol("OrNode.left");
  const right$ = Symbol("OrNode.right");
  src__ast.OrNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.OrNode, () => ({
    __proto__: dart.getMethods(src__ast.OrNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.OrNode, () => ({
    __proto__: dart.getGetters(src__ast.OrNode.__proto__),
    span: dart.fnType(src__file.FileSpan, []),
    variables: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setFieldSignature(src__ast.OrNode, () => ({
    __proto__: dart.getFields(src__ast.OrNode.__proto__),
    left: dart.finalFieldType(src__ast.Node),
    right: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__ast.OrNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.OrNode, ['hashCode']);
  src__ast.AndNode = class AndNode extends core.Object {
    get span() {
      return src__ast._expandSafe(this.left.span, this.right.span);
    }
    get left() {
      return this[left$0];
    }
    set left(value) {
      super.left = value;
    }
    get right() {
      return this[right$0];
    }
    set right(value) {
      super.right = value;
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.left.variables;
        yield* this.right.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitAnd(this);
    }
    toString() {
      let string1 = src__ast.OrNode.is(this.left) || src__ast.ConditionalNode.is(this.left) ? dart.str`(${this.left})` : this.left;
      let string2 = src__ast.OrNode.is(this.right) || src__ast.ConditionalNode.is(this.right) ? dart.str`(${this.right})` : this.right;
      return dart.str`${string1} && ${string2}`;
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.AndNode.is(other) && dart.equals(this.left, other.left) && dart.equals(this.right, other.right);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.left)) ^ dart.notNull(dart.hashCode(this.right))) >>> 0;
    }
  };
  (src__ast.AndNode.new = function(left, right) {
    this[left$0] = left;
    this[right$0] = right;
  }).prototype = src__ast.AndNode.prototype;
  dart.addTypeTests(src__ast.AndNode);
  const left$0 = Symbol("AndNode.left");
  const right$0 = Symbol("AndNode.right");
  src__ast.AndNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.AndNode, () => ({
    __proto__: dart.getMethods(src__ast.AndNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.AndNode, () => ({
    __proto__: dart.getGetters(src__ast.AndNode.__proto__),
    span: dart.fnType(src__file.FileSpan, []),
    variables: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setFieldSignature(src__ast.AndNode, () => ({
    __proto__: dart.getFields(src__ast.AndNode.__proto__),
    left: dart.finalFieldType(src__ast.Node),
    right: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__ast.AndNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.AndNode, ['hashCode']);
  src__ast.ConditionalNode = class ConditionalNode extends core.Object {
    get span() {
      return src__ast._expandSafe(this.condition.span, this.whenFalse.span);
    }
    get condition() {
      return this[condition$];
    }
    set condition(value) {
      super.condition = value;
    }
    get whenTrue() {
      return this[whenTrue$];
    }
    set whenTrue(value) {
      super.whenTrue = value;
    }
    get whenFalse() {
      return this[whenFalse$];
    }
    set whenFalse(value) {
      super.whenFalse = value;
    }
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this.condition.variables;
        yield* this.whenTrue.variables;
        yield* this.whenFalse.variables;
      }).bind(this));
    }
    accept(visitor) {
      return visitor.visitConditional(this);
    }
    toString() {
      let conditionString = src__ast.ConditionalNode.is(this.condition) ? dart.str`(${this.condition})` : this.condition;
      let trueString = src__ast.ConditionalNode.is(this.whenTrue) ? dart.str`(${this.whenTrue})` : this.whenTrue;
      return dart.str`${conditionString} ? ${trueString} : ${this.whenFalse}`;
    }
    _equals(other) {
      if (other == null) return false;
      return src__ast.ConditionalNode.is(other) && dart.equals(this.condition, other.condition) && dart.equals(this.whenTrue, other.whenTrue) && dart.equals(this.whenFalse, other.whenFalse);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.condition)) ^ dart.notNull(dart.hashCode(this.whenTrue)) ^ dart.notNull(dart.hashCode(this.whenFalse))) >>> 0;
    }
  };
  (src__ast.ConditionalNode.new = function(condition, whenTrue, whenFalse) {
    this[condition$] = condition;
    this[whenTrue$] = whenTrue;
    this[whenFalse$] = whenFalse;
  }).prototype = src__ast.ConditionalNode.prototype;
  dart.addTypeTests(src__ast.ConditionalNode);
  const condition$ = Symbol("ConditionalNode.condition");
  const whenTrue$ = Symbol("ConditionalNode.whenTrue");
  const whenFalse$ = Symbol("ConditionalNode.whenFalse");
  src__ast.ConditionalNode[dart.implements] = () => [src__ast.Node];
  dart.setMethodSignature(src__ast.ConditionalNode, () => ({
    __proto__: dart.getMethods(src__ast.ConditionalNode.__proto__),
    accept: dart.fnType(dart.dynamic, [src__visitor.Visitor])
  }));
  dart.setGetterSignature(src__ast.ConditionalNode, () => ({
    __proto__: dart.getGetters(src__ast.ConditionalNode.__proto__),
    span: dart.fnType(src__file.FileSpan, []),
    variables: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setFieldSignature(src__ast.ConditionalNode, () => ({
    __proto__: dart.getFields(src__ast.ConditionalNode.__proto__),
    condition: dart.finalFieldType(src__ast.Node),
    whenTrue: dart.finalFieldType(src__ast.Node),
    whenFalse: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__ast.ConditionalNode, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__ast.ConditionalNode, ['hashCode']);
  src__ast._expandSafe = function(start, end) {
    if (start == null || end == null) return null;
    if (!dart.equals(start.file, end.file)) return null;
    return start.expand(end);
  };
  dart.fn(src__ast._expandSafe, FileSpanAndFileSpanToFileSpan());
  const _is_Visitor_default = Symbol('_is_Visitor_default');
  src__visitor.Visitor$ = dart.generic(T => {
    class Visitor extends core.Object {}
    (Visitor.new = function() {
    }).prototype = Visitor.prototype;
    dart.addTypeTests(Visitor);
    Visitor.prototype[_is_Visitor_default] = true;
    return Visitor;
  });
  src__visitor.Visitor = src__visitor.Visitor$();
  dart.addTypeTests(src__visitor.Visitor, _is_Visitor_default);
  src__visitor.RecursiveVisitor = class RecursiveVisitor extends core.Object {
    visitVariable(node) {}
    visitNot(node) {
      node.child.accept(this);
    }
    visitOr(node) {
      node.left.accept(this);
      node.right.accept(this);
    }
    visitAnd(node) {
      node.left.accept(this);
      node.right.accept(this);
    }
    visitConditional(node) {
      node.condition.accept(this);
      node.whenTrue.accept(this);
      node.whenFalse.accept(this);
    }
  };
  (src__visitor.RecursiveVisitor.new = function() {
  }).prototype = src__visitor.RecursiveVisitor.prototype;
  dart.addTypeTests(src__visitor.RecursiveVisitor);
  src__visitor.RecursiveVisitor[dart.implements] = () => [src__visitor.Visitor];
  dart.setMethodSignature(src__visitor.RecursiveVisitor, () => ({
    __proto__: dart.getMethods(src__visitor.RecursiveVisitor.__proto__),
    visitVariable: dart.fnType(dart.void, [src__ast.VariableNode]),
    visitNot: dart.fnType(dart.void, [src__ast.NotNode]),
    visitOr: dart.fnType(dart.void, [src__ast.OrNode]),
    visitAnd: dart.fnType(dart.void, [src__ast.AndNode]),
    visitConditional: dart.fnType(dart.void, [src__ast.ConditionalNode])
  }));
  dart.trackLibraries("packages/boolean_selector/src/ast.ddc", {
    "package:boolean_selector/src/ast.dart": src__ast,
    "package:boolean_selector/src/visitor.dart": src__visitor
  }, '{"version":3,"sourceRoot":"","sources":["ast.dart","visitor.dart"],"names":[],"mappings":"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","file":"ast.ddc.js"}');
  // Exports:
  return {
    src__ast: src__ast,
    src__visitor: src__visitor
  };
});

//# sourceMappingURL=ast.ddc.js.map
