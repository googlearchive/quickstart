define(['dart_sdk', 'packages/source_span/src/span_exception', 'packages/boolean_selector/src/ast'], function(dart_sdk, span_exception, ast) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__span_exception = span_exception.src__span_exception;
  const src__visitor = ast.src__visitor;
  const _root = Object.create(null);
  const src__validator = Object.create(_root);
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  src__validator._IsDefined = dart.typedef('_IsDefined', () => dart.fnType(core.bool, [core.String]));
  const _isDefined = Symbol('_isDefined');
  src__validator.Validator = class Validator extends src__visitor.RecursiveVisitor {
    visitVariable(node) {
      if (dart.test(this[_isDefined](node.name))) return;
      dart.throw(new src__span_exception.SourceSpanFormatException.new("Undefined variable.", node.span));
    }
  };
  (src__validator.Validator.new = function(isDefined) {
    this[_isDefined] = isDefined;
    src__validator.Validator.__proto__.new.call(this);
  }).prototype = src__validator.Validator.prototype;
  dart.addTypeTests(src__validator.Validator);
  dart.setFieldSignature(src__validator.Validator, () => ({
    __proto__: dart.getFields(src__validator.Validator.__proto__),
    [_isDefined]: dart.finalFieldType(StringTobool())
  }));
  dart.trackLibraries("packages/boolean_selector/src/validator.ddc", {
    "package:boolean_selector/src/validator.dart": src__validator
  }, '{"version":3,"sourceRoot":"","sources":["validator.dart"],"names":[],"mappings":";;;;;;;;;;;;;kBAiBqB,IAAiB;AAClC,oBAAI,gBAAU,CAAC,IAAI,KAAK,IAAG;AAC3B,iBAAM,IAAI,iDAAyB,CAAC,uBAAuB,IAAI,KAAK;IACtE;;2CALe,SAAU;IAAV,gBAAU,GAAV,SAAU;;EAAC","file":"validator.ddc.js"}');
  // Exports:
  return {
    src__validator: src__validator
  };
});

//# sourceMappingURL=validator.ddc.js.map
