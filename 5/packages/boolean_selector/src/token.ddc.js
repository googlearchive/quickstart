define(['dart_sdk', 'packages/source_span/src/file'], function(dart_sdk, file) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__file = file.src__file;
  const _root = Object.create(null);
  const src__token = Object.create(_root);
  src__token.Token = class Token extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get span() {
      return this[span$];
    }
    set span(value) {
      super.span = value;
    }
  };
  (src__token.Token.new = function(type, span) {
    this[type$] = type;
    this[span$] = span;
  }).prototype = src__token.Token.prototype;
  dart.addTypeTests(src__token.Token);
  const type$ = Symbol("Token.type");
  const span$ = Symbol("Token.span");
  dart.setFieldSignature(src__token.Token, () => ({
    __proto__: dart.getFields(src__token.Token.__proto__),
    type: dart.finalFieldType(src__token.TokenType),
    span: dart.finalFieldType(src__file.FileSpan)
  }));
  src__token.IdentifierToken = class IdentifierToken extends core.Object {
    get type() {
      return this[type];
    }
    set type(value) {
      super.type = value;
    }
    get span() {
      return this[span$0];
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
    toString() {
      return dart.str`identifier "${this.name}"`;
    }
  };
  (src__token.IdentifierToken.new = function(name, span) {
    this[type] = src__token.TokenType.identifier;
    this[name$] = name;
    this[span$0] = span;
  }).prototype = src__token.IdentifierToken.prototype;
  dart.addTypeTests(src__token.IdentifierToken);
  const type = Symbol("IdentifierToken.type");
  const span$0 = Symbol("IdentifierToken.span");
  const name$ = Symbol("IdentifierToken.name");
  src__token.IdentifierToken[dart.implements] = () => [src__token.Token];
  dart.setFieldSignature(src__token.IdentifierToken, () => ({
    __proto__: dart.getFields(src__token.IdentifierToken.__proto__),
    type: dart.finalFieldType(src__token.TokenType),
    span: dart.finalFieldType(src__file.FileSpan),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__token.IdentifierToken, ['toString']);
  src__token.TokenType = class TokenType extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (src__token.TokenType.__ = function(name) {
    this[name$0] = name;
  }).prototype = src__token.TokenType.prototype;
  dart.addTypeTests(src__token.TokenType);
  const name$0 = Symbol("TokenType.name");
  dart.setFieldSignature(src__token.TokenType, () => ({
    __proto__: dart.getFields(src__token.TokenType.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__token.TokenType, ['toString']);
  dart.defineLazy(src__token.TokenType, {
    /*src__token.TokenType.leftParen*/get leftParen() {
      return dart.const(new src__token.TokenType.__("left paren"));
    },
    /*src__token.TokenType.rightParen*/get rightParen() {
      return dart.const(new src__token.TokenType.__("right paren"));
    },
    /*src__token.TokenType.or*/get or() {
      return dart.const(new src__token.TokenType.__("or"));
    },
    /*src__token.TokenType.and*/get and() {
      return dart.const(new src__token.TokenType.__("and"));
    },
    /*src__token.TokenType.not*/get not() {
      return dart.const(new src__token.TokenType.__("not"));
    },
    /*src__token.TokenType.questionMark*/get questionMark() {
      return dart.const(new src__token.TokenType.__("question mark"));
    },
    /*src__token.TokenType.colon*/get colon() {
      return dart.const(new src__token.TokenType.__("colon"));
    },
    /*src__token.TokenType.identifier*/get identifier() {
      return dart.const(new src__token.TokenType.__("identifier"));
    },
    /*src__token.TokenType.endOfFile*/get endOfFile() {
      return dart.const(new src__token.TokenType.__("end of file"));
    }
  });
  dart.trackLibraries("packages/boolean_selector/src/token.ddc", {
    "package:boolean_selector/src/token.dart": src__token
  }, '{"version":3,"sourceRoot":"","sources":["token.dart"],"names":[],"mappings":";;;;;;;;;IASkB;;;;;;IAOD;;;;;;;mCAET,IAAS,EAAE,IAAS;IAAf,WAAI,GAAJ,IAAI;IAAO,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;;IAKrB;;;;;;IACS;;;;;;IAGF;;;;;;;YAIQ,wBAAc,SAAI;IAAE;;6CAFzB,IAAS,EAAE,IAAS;IAN9B,UAAI,GAAG,oBAAS,WAAW;IAMZ,WAAI,GAAJ,IAAI;IAAO,YAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;;IAmCxB;;;;;;;YAIQ,UAAI;;;sCAFP,IAAS;IAAJ,YAAI,GAAJ,IAAI;EAAC;;;;;;;;;MA7Bf,8BAAS;YAAG,gBAAM,uBAAW,CAAC;;MAG9B,+BAAU;YAAG,gBAAM,uBAAW,CAAC;;MAG/B,uBAAE;YAAG,gBAAM,uBAAW,CAAC;;MAGvB,wBAAG;YAAG,gBAAM,uBAAW,CAAC;;MAGxB,wBAAG;YAAG,gBAAM,uBAAW,CAAC;;MAGxB,iCAAY;YAAG,gBAAM,uBAAW,CAAC;;MAGjC,0BAAK;YAAG,gBAAM,uBAAW,CAAC;;MAG1B,+BAAU;YAAG,gBAAM,uBAAW,CAAC;;MAG/B,8BAAS;YAAG,gBAAM,uBAAW,CAAC","file":"token.ddc.js"}');
  // Exports:
  return {
    src__token: src__token
  };
});

//# sourceMappingURL=token.ddc.js.map
