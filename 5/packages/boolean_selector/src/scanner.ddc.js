define(['dart_sdk', 'packages/string_scanner/src/eager_span_scanner', 'packages/boolean_selector/src/token'], function(dart_sdk, eager_span_scanner, token) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__span_scanner = eager_span_scanner.src__span_scanner;
  const src__token = token.src__token;
  const _root = Object.create(null);
  const src__scanner = Object.create(_root);
  dart.defineLazy(src__scanner, {
    /*src__scanner._whitespaceAndSingleLineComments*/get _whitespaceAndSingleLineComments() {
      return core.RegExp.new("([ \\t\\n]+|//[^\\n]*(\\n|$))+");
    },
    /*src__scanner._multiLineCommentBody*/get _multiLineCommentBody() {
      return core.RegExp.new("([^/*]|/[^*]|\\*[^/])+");
    },
    /*src__scanner._hyphenatedIdentifier*/get _hyphenatedIdentifier() {
      return core.RegExp.new("[a-zA-Z_-][a-zA-Z0-9_-]*");
    }
  });
  const _scanner = Symbol('_scanner');
  const _next = Symbol('_next');
  const _endOfFileEmitted = Symbol('_endOfFileEmitted');
  const _getNext = Symbol('_getNext');
  const _consumeWhitespace = Symbol('_consumeWhitespace');
  const _scanOperator = Symbol('_scanOperator');
  const _scanOr = Symbol('_scanOr');
  const _scanAnd = Symbol('_scanAnd');
  const _scanIdentifier = Symbol('_scanIdentifier');
  const _multiLineComment = Symbol('_multiLineComment');
  src__scanner.Scanner = class Scanner extends core.Object {
    peek() {
      if (this[_next] == null) this[_next] = this[_getNext]();
      return this[_next];
    }
    next() {
      let token = this[_next] == null ? this[_getNext]() : this[_next];
      this[_endOfFileEmitted] = dart.equals(token.type, src__token.TokenType.endOfFile);
      this[_next] = null;
      return token;
    }
    scan(type) {
      if (!dart.equals(this.peek().type, type)) return false;
      this.next();
      return true;
    }
    [_getNext]() {
      if (dart.test(this[_endOfFileEmitted])) dart.throw(new core.StateError.new("No more tokens."));
      this[_consumeWhitespace]();
      if (dart.test(this[_scanner].isDone)) {
        return new src__token.Token.new(src__token.TokenType.endOfFile, this[_scanner].spanFrom(this[_scanner].state));
      }
      switch (this[_scanner].peekChar()) {
        case 40:
        {
          return this[_scanOperator](src__token.TokenType.leftParen);
        }
        case 41:
        {
          return this[_scanOperator](src__token.TokenType.rightParen);
        }
        case 63:
        {
          return this[_scanOperator](src__token.TokenType.questionMark);
        }
        case 58:
        {
          return this[_scanOperator](src__token.TokenType.colon);
        }
        case 33:
        {
          return this[_scanOperator](src__token.TokenType.not);
        }
        case 124:
        {
          return this[_scanOr]();
        }
        case 38:
        {
          return this[_scanAnd]();
        }
        default:
        {
          return this[_scanIdentifier]();
        }
      }
    }
    [_scanOperator](type) {
      let start = this[_scanner].state;
      this[_scanner].readChar();
      return new src__token.Token.new(type, this[_scanner].spanFrom(start));
    }
    [_scanOr]() {
      let start = this[_scanner].state;
      this[_scanner].expect("||");
      return new src__token.Token.new(src__token.TokenType.or, this[_scanner].spanFrom(start));
    }
    [_scanAnd]() {
      let start = this[_scanner].state;
      this[_scanner].expect("&&");
      return new src__token.Token.new(src__token.TokenType.and, this[_scanner].spanFrom(start));
    }
    [_scanIdentifier]() {
      this[_scanner].expect(src__scanner._hyphenatedIdentifier, {name: "expression"});
      return new src__token.IdentifierToken.new(this[_scanner].lastMatch._get(0), this[_scanner].lastSpan);
    }
    [_consumeWhitespace]() {
      while (dart.test(this[_scanner].scan(src__scanner._whitespaceAndSingleLineComments)) || dart.test(this[_multiLineComment]())) {
      }
    }
    [_multiLineComment]() {
      if (!dart.test(this[_scanner].scan("/*"))) return false;
      while (dart.test(this[_scanner].scan(src__scanner._multiLineCommentBody)) || dart.test(this[_multiLineComment]())) {
      }
      this[_scanner].expect("*/");
      return true;
    }
  };
  (src__scanner.Scanner.new = function(selector) {
    this[_next] = null;
    this[_endOfFileEmitted] = false;
    this[_scanner] = new src__span_scanner.SpanScanner.new(selector);
  }).prototype = src__scanner.Scanner.prototype;
  dart.addTypeTests(src__scanner.Scanner);
  dart.setMethodSignature(src__scanner.Scanner, () => ({
    __proto__: dart.getMethods(src__scanner.Scanner.__proto__),
    peek: dart.fnType(src__token.Token, []),
    next: dart.fnType(src__token.Token, []),
    scan: dart.fnType(core.bool, [src__token.TokenType]),
    [_getNext]: dart.fnType(src__token.Token, []),
    [_scanOperator]: dart.fnType(src__token.Token, [src__token.TokenType]),
    [_scanOr]: dart.fnType(src__token.Token, []),
    [_scanAnd]: dart.fnType(src__token.Token, []),
    [_scanIdentifier]: dart.fnType(src__token.Token, []),
    [_consumeWhitespace]: dart.fnType(dart.void, []),
    [_multiLineComment]: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__scanner.Scanner, () => ({
    __proto__: dart.getFields(src__scanner.Scanner.__proto__),
    [_scanner]: dart.finalFieldType(src__span_scanner.SpanScanner),
    [_next]: dart.fieldType(src__token.Token),
    [_endOfFileEmitted]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/boolean_selector/src/scanner.ddc", {
    "package:boolean_selector/src/scanner.dart": src__scanner
  }, '{"version":3,"sourceRoot":"","sources":["scanner.dart"],"names":[],"mappings":";;;;;;;;;;MAWM,6CAAgC;YAClC,AAAI,gBAAM,CAAC;;MAMT,kCAAqB;YAAG,AAAI,gBAAM,CAAC;;MAMnC,kCAAqB;YAAG,AAAI,gBAAM,CAAC;;;;;;;;;;;;;;;AAoBrC,UAAI,WAAK,IAAI,MAAM,WAAK,GAAG,cAAQ;AACnC,YAAO,YAAK;IACd;;AAOE,UAAI,QAAQ,WAAK,IAAI,OAAO,cAAQ,KAAK,WAAK;AAC9C,6BAAiB,eAAG,KAAK,KAAK,EAAI,oBAAS,UAAU;AACrD,iBAAK,GAAG;AACR,YAAO,MAAK;IACd;SAOU,IAAc;AACtB,uBAAI,SAAI,OAAO,EAAI,IAAI,GAAE,MAAO;AAChC,eAAI;AACJ,YAAO;IACT;;AAIE,oBAAI,uBAAiB,GAAE,WAAM,IAAI,mBAAU,CAAC;AAE5C,8BAAkB;AAClB,oBAAI,cAAQ,OAAO,GAAE;AACnB,cAAO,KAAI,oBAAK,CAAC,oBAAS,UAAU,EAAE,cAAQ,SAAS,CAAC,cAAQ,MAAM;;AAGxE,cAAQ,cAAQ,SAAS;YAClB;;AACH,gBAAO,oBAAa,CAAC,oBAAS,UAAU;;YACrC;;AACH,gBAAO,oBAAa,CAAC,oBAAS,WAAW;;YACtC;;AACH,gBAAO,oBAAa,CAAC,oBAAS,aAAa;;YACxC;;AACH,gBAAO,oBAAa,CAAC,oBAAS,MAAM;;YACjC;;AACH,gBAAO,oBAAa,CAAC,oBAAS,IAAI;;YAC/B;;AACH,gBAAO,cAAO;;YACX;;AACH,gBAAO,eAAQ;;;;AAEf,gBAAO,sBAAe;;;IAE5B;oBAMoB,IAAc;AAChC,UAAI,QAAQ,cAAQ,MAAM;AAC1B,oBAAQ,SAAS;AACjB,YAAO,KAAI,oBAAK,CAAC,IAAI,EAAE,cAAQ,SAAS,CAAC,KAAK;IAChD;;AAME,UAAI,QAAQ,cAAQ,MAAM;AAC1B,oBAAQ,OAAO,CAAC;AAChB,YAAO,KAAI,oBAAK,CAAC,oBAAS,GAAG,EAAE,cAAQ,SAAS,CAAC,KAAK;IACxD;;AAME,UAAI,QAAQ,cAAQ,MAAM;AAC1B,oBAAQ,OAAO,CAAC;AAChB,YAAO,KAAI,oBAAK,CAAC,oBAAS,IAAI,EAAE,cAAQ,SAAS,CAAC,KAAK;IACzD;;AAIE,oBAAQ,OAAO,CAAC,kCAAqB,SAAQ;AAC7C,YAAO,KAAI,8BAAe,CAAC,cAAQ,UAAU,MAAC,IAAI,cAAQ,SAAS;IACrE;;AAKE,uBAAO,cAAQ,KAAK,CAAC,6CAAgC,gBACjD,uBAAiB,KAAI;;IAG3B;;AAME,qBAAK,cAAQ,KAAK,CAAC,QAAO,MAAO;AAEjC,uBAAO,cAAQ,KAAK,CAAC,kCAAqB,gBAAK,uBAAiB,KAAI;;AAGpE,oBAAQ,OAAO,CAAC;AAEhB,YAAO;IACT;;uCArHQ,QAAe;IALjB,WAAK;IAGN,uBAAiB,GAAG;IAEE,cAAQ,GAAG,IAAI,iCAAW,CAAC,QAAQ;EAAC","file":"scanner.ddc.js"}');
  // Exports:
  return {
    src__scanner: src__scanner
  };
});

//# sourceMappingURL=scanner.ddc.js.map
