define(['dart_sdk', 'packages/boolean_selector/src/parser', 'packages/boolean_selector/src/evaluator', 'packages/boolean_selector/src/ast', 'packages/boolean_selector/src/validator'], function(dart_sdk, parser, evaluator, ast, validator) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__parser = parser.src__parser;
  const src__evaluator = evaluator.src__evaluator;
  const src__ast = ast.src__ast;
  const src__validator = validator.src__validator;
  const _root = Object.create(null);
  const src__intersection_selector = Object.create(_root);
  const src__union_selector = Object.create(_root);
  const src__impl = Object.create(_root);
  const src__all = Object.create(_root);
  const src__none = Object.create(_root);
  const boolean_selector = Object.create(_root);
  const $toList = dartx.toList;
  const $addAll = dartx.addAll;
  let SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  const _selector1 = Symbol('_selector1');
  const _selector2 = Symbol('_selector2');
  src__intersection_selector.IntersectionSelector = class IntersectionSelector extends core.Object {
    get variables() {
      return new (SyncIterableOfString()).new((function* variables() {
        yield* this[_selector1].variables;
        yield* this[_selector2].variables;
      }).bind(this));
    }
    evaluate(semantics) {
      return dart.test(this[_selector1].evaluate(semantics)) && dart.test(this[_selector2].evaluate(semantics));
    }
    intersection(other) {
      return new src__intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      return new src__union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector1].validate(isDefined);
      this[_selector2].validate(isDefined);
    }
    toString() {
      return dart.str`(${this[_selector1]}) && (${this[_selector2]})`;
    }
    _equals(other) {
      if (other == null) return false;
      return src__intersection_selector.IntersectionSelector.is(other) && dart.equals(this[_selector1], other[_selector1]) && dart.equals(this[_selector2], other[_selector2]);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this[_selector1])) ^ dart.notNull(dart.hashCode(this[_selector2]))) >>> 0;
    }
  };
  (src__intersection_selector.IntersectionSelector.new = function(selector1, selector2) {
    this[_selector1] = selector1;
    this[_selector2] = selector2;
  }).prototype = src__intersection_selector.IntersectionSelector.prototype;
  dart.addTypeTests(src__intersection_selector.IntersectionSelector);
  src__intersection_selector.IntersectionSelector[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getMethods(src__intersection_selector.IntersectionSelector.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [StringTobool()])
  }));
  dart.setGetterSignature(src__intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getGetters(src__intersection_selector.IntersectionSelector.__proto__),
    variables: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setFieldSignature(src__intersection_selector.IntersectionSelector, () => ({
    __proto__: dart.getFields(src__intersection_selector.IntersectionSelector.__proto__),
    [_selector1]: dart.finalFieldType(boolean_selector.BooleanSelector),
    [_selector2]: dart.finalFieldType(boolean_selector.BooleanSelector)
  }));
  dart.defineExtensionMethods(src__intersection_selector.IntersectionSelector, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__intersection_selector.IntersectionSelector, ['hashCode']);
  const _selector1$ = Symbol('_selector1');
  const _selector2$ = Symbol('_selector2');
  src__union_selector.UnionSelector = class UnionSelector extends core.Object {
    get variables() {
      let _ = this[_selector1$].variables[$toList]();
      _[$addAll](this[_selector2$].variables);
      return _;
    }
    evaluate(semantics) {
      return dart.test(this[_selector1$].evaluate(semantics)) || dart.test(this[_selector2$].evaluate(semantics));
    }
    intersection(other) {
      return new src__intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      return new src__union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector1$].validate(isDefined);
      this[_selector2$].validate(isDefined);
    }
    toString() {
      return dart.str`(${this[_selector1$]}) && (${this[_selector2$]})`;
    }
    _equals(other) {
      if (other == null) return false;
      return src__union_selector.UnionSelector.is(other) && dart.equals(this[_selector1$], other[_selector1$]) && dart.equals(this[_selector2$], other[_selector2$]);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this[_selector1$])) ^ dart.notNull(dart.hashCode(this[_selector2$]))) >>> 0;
    }
  };
  (src__union_selector.UnionSelector.new = function(selector1, selector2) {
    this[_selector1$] = selector1;
    this[_selector2$] = selector2;
  }).prototype = src__union_selector.UnionSelector.prototype;
  dart.addTypeTests(src__union_selector.UnionSelector);
  src__union_selector.UnionSelector[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__union_selector.UnionSelector, () => ({
    __proto__: dart.getMethods(src__union_selector.UnionSelector.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [StringTobool()])
  }));
  dart.setGetterSignature(src__union_selector.UnionSelector, () => ({
    __proto__: dart.getGetters(src__union_selector.UnionSelector.__proto__),
    variables: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__union_selector.UnionSelector, () => ({
    __proto__: dart.getFields(src__union_selector.UnionSelector.__proto__),
    [_selector1$]: dart.finalFieldType(boolean_selector.BooleanSelector),
    [_selector2$]: dart.finalFieldType(boolean_selector.BooleanSelector)
  }));
  dart.defineExtensionMethods(src__union_selector.UnionSelector, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__union_selector.UnionSelector, ['hashCode']);
  const _selector = Symbol('_selector');
  src__impl.BooleanSelectorImpl = class BooleanSelectorImpl extends core.Object {
    get variables() {
      return this[_selector].variables;
    }
    evaluate(semantics) {
      return core.bool._check(this[_selector].accept(new src__evaluator.Evaluator.new(semantics)));
    }
    intersection(other) {
      if (dart.equals(other, boolean_selector.BooleanSelector.all)) return this;
      if (dart.equals(other, boolean_selector.BooleanSelector.none)) return other;
      return src__impl.BooleanSelectorImpl.is(other) ? new src__impl.BooleanSelectorImpl.__(new src__ast.AndNode.new(this[_selector], other[_selector])) : new src__intersection_selector.IntersectionSelector.new(this, other);
    }
    union(other) {
      if (dart.equals(other, boolean_selector.BooleanSelector.all)) return other;
      if (dart.equals(other, boolean_selector.BooleanSelector.none)) return this;
      return src__impl.BooleanSelectorImpl.is(other) ? new src__impl.BooleanSelectorImpl.__(new src__ast.OrNode.new(this[_selector], other[_selector])) : new src__union_selector.UnionSelector.new(this, other);
    }
    validate(isDefined) {
      this[_selector].accept(new src__validator.Validator.new(isDefined));
    }
    toString() {
      return dart.toString(this[_selector]);
    }
    _equals(other) {
      if (other == null) return false;
      return src__impl.BooleanSelectorImpl.is(other) && dart.equals(this[_selector], other[_selector]);
    }
    get hashCode() {
      return dart.hashCode(this[_selector]);
    }
  };
  (src__impl.BooleanSelectorImpl.parse = function(selector) {
    this[_selector] = new src__parser.Parser.new(selector).parse();
  }).prototype = src__impl.BooleanSelectorImpl.prototype;
  (src__impl.BooleanSelectorImpl.__ = function(selector) {
    this[_selector] = selector;
  }).prototype = src__impl.BooleanSelectorImpl.prototype;
  dart.addTypeTests(src__impl.BooleanSelectorImpl);
  src__impl.BooleanSelectorImpl[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getMethods(src__impl.BooleanSelectorImpl.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [StringTobool()])
  }));
  dart.setGetterSignature(src__impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getGetters(src__impl.BooleanSelectorImpl.__proto__),
    variables: dart.fnType(core.Iterable$(core.String), [])
  }));
  dart.setFieldSignature(src__impl.BooleanSelectorImpl, () => ({
    __proto__: dart.getFields(src__impl.BooleanSelectorImpl.__proto__),
    [_selector]: dart.finalFieldType(src__ast.Node)
  }));
  dart.defineExtensionMethods(src__impl.BooleanSelectorImpl, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__impl.BooleanSelectorImpl, ['hashCode']);
  let const$;
  src__all.All = class All extends core.Object {
    get variables() {
      return this[variables];
    }
    set variables(value) {
      super.variables = value;
    }
    evaluate(semantics) {
      return true;
    }
    intersection(other) {
      return other;
    }
    union(other) {
      return this;
    }
    validate(isDefined) {}
    toString() {
      return "<all>";
    }
  };
  (src__all.All.new = function() {
    this[variables] = const$ || (const$ = dart.constList([], core.String));
  }).prototype = src__all.All.prototype;
  dart.addTypeTests(src__all.All);
  const variables = Symbol("All.variables");
  src__all.All[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__all.All, () => ({
    __proto__: dart.getMethods(src__all.All.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [StringTobool()])
  }));
  dart.setFieldSignature(src__all.All, () => ({
    __proto__: dart.getFields(src__all.All.__proto__),
    variables: dart.finalFieldType(IterableOfString())
  }));
  dart.defineExtensionMethods(src__all.All, ['toString']);
  let const$0;
  src__none.None = class None extends core.Object {
    get variables() {
      return this[variables$];
    }
    set variables(value) {
      super.variables = value;
    }
    evaluate(semantics) {
      return false;
    }
    intersection(other) {
      return this;
    }
    union(other) {
      return other;
    }
    validate(isDefined) {}
    toString() {
      return "<none>";
    }
  };
  (src__none.None.new = function() {
    this[variables$] = const$0 || (const$0 = dart.constList([], core.String));
  }).prototype = src__none.None.prototype;
  dart.addTypeTests(src__none.None);
  const variables$ = Symbol("None.variables");
  src__none.None[dart.implements] = () => [boolean_selector.BooleanSelector];
  dart.setMethodSignature(src__none.None, () => ({
    __proto__: dart.getMethods(src__none.None.__proto__),
    evaluate: dart.fnType(core.bool, [dart.dynamic]),
    intersection: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    union: dart.fnType(boolean_selector.BooleanSelector, [boolean_selector.BooleanSelector]),
    validate: dart.fnType(dart.void, [StringTobool()])
  }));
  dart.setFieldSignature(src__none.None, () => ({
    __proto__: dart.getFields(src__none.None.__proto__),
    variables: dart.finalFieldType(IterableOfString())
  }));
  dart.defineExtensionMethods(src__none.None, ['toString']);
  boolean_selector.BooleanSelector = class BooleanSelector extends core.Object {
    static parse(selector) {
      return new src__impl.BooleanSelectorImpl.parse(selector);
    }
  };
  (boolean_selector.BooleanSelector[dart.mixinNew] = function() {
  }).prototype = boolean_selector.BooleanSelector.prototype;
  dart.addTypeTests(boolean_selector.BooleanSelector);
  dart.defineLazy(boolean_selector.BooleanSelector, {
    /*boolean_selector.BooleanSelector.all*/get all() {
      return dart.const(new src__all.All.new());
    },
    /*boolean_selector.BooleanSelector.none*/get none() {
      return dart.const(new src__none.None.new());
    }
  });
  dart.trackLibraries("packages/boolean_selector/boolean_selector.ddc", {
    "package:boolean_selector/src/intersection_selector.dart": src__intersection_selector,
    "package:boolean_selector/src/union_selector.dart": src__union_selector,
    "package:boolean_selector/src/impl.dart": src__impl,
    "package:boolean_selector/src/all.dart": src__all,
    "package:boolean_selector/src/none.dart": src__none,
    "package:boolean_selector/boolean_selector.dart": boolean_selector
  }, '{"version":3,"sourceRoot":"","sources":["src/intersection_selector.dart","src/union_selector.dart","src/impl.dart","src/all.dart","src/none.dart","boolean_selector.dart"],"names":[],"mappings":"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","file":"boolean_selector.ddc.js"}');
  // Exports:
  return {
    src__intersection_selector: src__intersection_selector,
    src__union_selector: src__union_selector,
    src__impl: src__impl,
    src__all: src__all,
    src__none: src__none,
    boolean_selector: boolean_selector
  };
});

//# sourceMappingURL=boolean_selector.ddc.js.map
