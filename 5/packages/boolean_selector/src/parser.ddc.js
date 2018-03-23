define(['dart_sdk', 'packages/boolean_selector/src/scanner', 'packages/boolean_selector/src/token', 'packages/source_span/src/span_exception', 'packages/boolean_selector/src/ast'], function(dart_sdk, scanner, token, span_exception, ast) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__scanner = scanner.src__scanner;
  const src__token = token.src__token;
  const src__span_exception = span_exception.src__span_exception;
  const src__ast = ast.src__ast;
  const _root = Object.create(null);
  const src__parser = Object.create(_root);
  const _scanner = Symbol('_scanner');
  const _conditional = Symbol('_conditional');
  const _or = Symbol('_or');
  const _and = Symbol('_and');
  const _simpleExpression = Symbol('_simpleExpression');
  src__parser.Parser = class Parser extends core.Object {
    parse() {
      let selector = this[_conditional]();
      if (!dart.equals(this[_scanner].peek().type, src__token.TokenType.endOfFile)) {
        dart.throw(new src__span_exception.SourceSpanFormatException.new("Expected end of input.", this[_scanner].peek().span));
      }
      return selector;
    }
    [_conditional]() {
      let condition = this[_or]();
      if (!dart.test(this[_scanner].scan(src__token.TokenType.questionMark))) return condition;
      let whenTrue = this[_conditional]();
      if (!dart.test(this[_scanner].scan(src__token.TokenType.colon))) {
        dart.throw(new src__span_exception.SourceSpanFormatException.new('Expected ":".', this[_scanner].peek().span));
      }
      let whenFalse = this[_conditional]();
      return new src__ast.ConditionalNode.new(condition, whenTrue, whenFalse);
    }
    [_or]() {
      let left = this[_and]();
      if (!dart.test(this[_scanner].scan(src__token.TokenType.or))) return left;
      return new src__ast.OrNode.new(left, this[_or]());
    }
    [_and]() {
      let left = this[_simpleExpression]();
      if (!dart.test(this[_scanner].scan(src__token.TokenType.and))) return left;
      return new src__ast.AndNode.new(left, this[_and]());
    }
    [_simpleExpression]() {
      let token = this[_scanner].next();
      switch (token.type) {
        case src__token.TokenType.not:
        {
          let child = this[_simpleExpression]();
          return new src__ast.NotNode.new(child, token.span.expand(child.span));
        }
        case src__token.TokenType.leftParen:
        {
          let child = this[_conditional]();
          if (!dart.test(this[_scanner].scan(src__token.TokenType.rightParen))) {
            dart.throw(new src__span_exception.SourceSpanFormatException.new('Expected ")".', this[_scanner].peek().span));
          }
          return child;
        }
        case src__token.TokenType.identifier:
        {
          return new src__ast.VariableNode.new(src__token.IdentifierToken.as(token).name, token.span);
        }
        default:
        {
          dart.throw(new src__span_exception.SourceSpanFormatException.new("Expected expression.", token.span));
        }
      }
    }
  };
  (src__parser.Parser.new = function(selector) {
    this[_scanner] = new src__scanner.Scanner.new(selector);
  }).prototype = src__parser.Parser.prototype;
  dart.addTypeTests(src__parser.Parser);
  dart.setMethodSignature(src__parser.Parser, () => ({
    __proto__: dart.getMethods(src__parser.Parser.__proto__),
    parse: dart.fnType(src__ast.Node, []),
    [_conditional]: dart.fnType(src__ast.Node, []),
    [_or]: dart.fnType(src__ast.Node, []),
    [_and]: dart.fnType(src__ast.Node, []),
    [_simpleExpression]: dart.fnType(src__ast.Node, [])
  }));
  dart.setFieldSignature(src__parser.Parser, () => ({
    __proto__: dart.getFields(src__parser.Parser.__proto__),
    [_scanner]: dart.finalFieldType(src__scanner.Scanner)
  }));
  dart.trackLibraries("packages/boolean_selector/src/parser.ddc", {
    "package:boolean_selector/src/parser.dart": src__parser
  }, '{"version":3,"sourceRoot":"","sources":["parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;AA0BI,UAAI,WAAW,kBAAY;AAE3B,uBAAI,cAAQ,KAAK,OAAO,EAAI,oBAAS,UAAU,GAAE;AAC/C,mBAAM,IAAI,iDAAyB,CAC/B,0BAA0B,cAAQ,KAAK,OAAO;;AAGpD,YAAO,SAAQ;IACjB;;AAQE,UAAI,YAAY,SAAG;AACnB,qBAAK,cAAQ,KAAK,CAAC,oBAAS,aAAa,IAAG,MAAO,UAAS;AAE5D,UAAI,WAAW,kBAAY;AAC3B,qBAAK,cAAQ,KAAK,CAAC,oBAAS,MAAM,IAAG;AACnC,mBAAM,IAAI,iDAAyB,CAC/B,iBAAiB,cAAQ,KAAK,OAAO;;AAG3C,UAAI,YAAY,kBAAY;AAC5B,YAAO,KAAI,4BAAe,CAAC,SAAS,EAAE,QAAQ,EAAE,SAAS;IAC3D;;AAOE,UAAI,OAAO,UAAI;AACf,qBAAK,cAAQ,KAAK,CAAC,oBAAS,GAAG,IAAG,MAAO,KAAI;AAC7C,YAAO,KAAI,mBAAM,CAAC,IAAI,EAAE,SAAG;IAC7B;;AAOE,UAAI,OAAO,uBAAiB;AAC5B,qBAAK,cAAQ,KAAK,CAAC,oBAAS,IAAI,IAAG,MAAO,KAAI;AAC9C,YAAO,KAAI,oBAAO,CAAC,IAAI,EAAE,UAAI;IAC/B;;AASE,UAAI,QAAQ,cAAQ,KAAK;AACzB,cAAQ,KAAK,KAAK;YACX,qBAAS,IAAI;;AAChB,cAAI,QAAQ,uBAAiB;AAC7B,gBAAO,KAAI,oBAAO,CAAC,KAAK,EAAE,KAAK,KAAK,OAAO,CAAC,KAAK,KAAK;;YAEnD,qBAAS,UAAU;;AACtB,cAAI,QAAQ,kBAAY;AACxB,yBAAK,cAAQ,KAAK,CAAC,oBAAS,WAAW,IAAG;AACxC,uBAAM,IAAI,iDAAyB,CAC/B,iBAAiB,cAAQ,KAAK,OAAO;;AAE3C,gBAAO,MAAK;;YAET,qBAAS,WAAW;;AACvB,gBAAO,KAAI,yBAAY,+BAAE,KAAK,MAAyB,EAAE,KAAK,KAAK;;;;AAGnE,qBAAM,IAAI,iDAAyB,CAAC,wBAAwB,KAAK,KAAK;;;IAE5E;;qCAlFO,QAAe;IAAI,cAAQ,GAAG,IAAI,wBAAO,CAAC,QAAQ;EAAC","file":"parser.ddc.js"}');
  // Exports:
  return {
    src__parser: src__parser
  };
});

//# sourceMappingURL=parser.ddc.js.map
