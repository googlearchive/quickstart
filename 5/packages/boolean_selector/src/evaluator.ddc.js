define(['dart_sdk', 'packages/collection/src/empty_unmodifiable_set', 'packages/boolean_selector/src/ast'], function(dart_sdk, empty_unmodifiable_set, ast) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__wrappers = empty_unmodifiable_set.src__wrappers;
  const src__visitor = ast.src__visitor;
  const src__ast = ast.src__ast;
  const _root = Object.create(null);
  const src__evaluator = Object.create(_root);
  const $contains = dartx.contains;
  const $toSet = dartx.toSet;
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let VisitorOfbool = () => (VisitorOfbool = dart.constFn(src__visitor.Visitor$(core.bool)))();
  src__evaluator._Semantics = dart.typedef('_Semantics', () => dart.fnType(core.bool, [core.String]));
  const _semantics = Symbol('_semantics');
  src__evaluator.Evaluator = class Evaluator extends core.Object {
    visitVariable(node) {
      return this[_semantics](node.name);
    }
    visitNot(node) {
      return !dart.dtest(node.child.accept(this));
    }
    visitOr(node) {
      return dart.dtest(node.left.accept(this)) || dart.dtest(node.right.accept(this));
    }
    visitAnd(node) {
      return dart.dtest(node.left.accept(this)) && dart.dtest(node.right.accept(this));
    }
    visitConditional(node) {
      return core.bool._check(dart.dtest(node.condition.accept(this)) ? node.whenTrue.accept(this) : node.whenFalse.accept(this));
    }
  };
  (src__evaluator.Evaluator.new = function(semantics) {
    this[_semantics] = core.Iterable.is(semantics) ? dart.bind(src__wrappers.DelegatingIterable.typed(dart.dynamic, semantics[$toSet]()), $contains) : StringTobool().as(semantics);
  }).prototype = src__evaluator.Evaluator.prototype;
  dart.addTypeTests(src__evaluator.Evaluator);
  src__evaluator.Evaluator[dart.implements] = () => [VisitorOfbool()];
  dart.setMethodSignature(src__evaluator.Evaluator, () => ({
    __proto__: dart.getMethods(src__evaluator.Evaluator.__proto__),
    visitVariable: dart.fnType(core.bool, [src__ast.VariableNode]),
    visitNot: dart.fnType(core.bool, [src__ast.NotNode]),
    visitOr: dart.fnType(core.bool, [src__ast.OrNode]),
    visitAnd: dart.fnType(core.bool, [src__ast.AndNode]),
    visitConditional: dart.fnType(core.bool, [src__ast.ConditionalNode])
  }));
  dart.setFieldSignature(src__evaluator.Evaluator, () => ({
    __proto__: dart.getFields(src__evaluator.Evaluator.__proto__),
    [_semantics]: dart.finalFieldType(StringTobool())
  }));
  dart.trackLibraries("packages/boolean_selector/src/evaluator.ddc", {
    "package:boolean_selector/src/evaluator.dart": src__evaluator
  }, '{"version":3,"sourceRoot":"","sources":["evaluator.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;kBAsBqB,IAAiB;YAAK,iBAAU,CAAC,IAAI,KAAK;IAAC;aAEhD,IAAY;YAAK,aAAC,IAAI,MAAM,OAAO,CAAC;IAAK;YAE1C,IAAW;YACG,YAAvB,IAAI,KAAK,OAAO,CAAC,qBAAS,IAAI,MAAM,OAAO,CAAC;IAAK;aAEvC,IAAY;YACC,YAAvB,IAAI,KAAK,OAAO,CAAC,qBAAS,IAAI,MAAM,OAAO,CAAC;IAAK;qBAE/B,IAAoB;yCAAK,IAAI,UAAU,OAAO,CAAC,SAC/D,IAAI,SAAS,OAAO,CAAC,QACrB,IAAI,UAAU,OAAO,CAAC;IAAK;;2CAjBvB,SAAS;IACb,gBAAU,oBAAG,SAAS,cAChB,gCAAkB,MAAM,eAAC,SAAS,QAAM,oCACxC,SAAS;EAAc","file":"evaluator.ddc.js"}');
  // Exports:
  return {
    src__evaluator: src__evaluator
  };
});

//# sourceMappingURL=evaluator.ddc.js.map
