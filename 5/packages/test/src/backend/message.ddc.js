define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__backend__message = Object.create(_root);
  src__backend__message.Message = class Message extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (src__backend__message.Message.new = function(type, text) {
    this[type$] = type;
    this[text$] = text;
  }).prototype = src__backend__message.Message.prototype;
  (src__backend__message.Message.print = function(text) {
    this[text$] = text;
    this[type$] = src__backend__message.MessageType.print;
  }).prototype = src__backend__message.Message.prototype;
  (src__backend__message.Message.skip = function(text) {
    this[text$] = text;
    this[type$] = src__backend__message.MessageType.skip;
  }).prototype = src__backend__message.Message.prototype;
  dart.addTypeTests(src__backend__message.Message);
  const type$ = Symbol("Message.type");
  const text$ = Symbol("Message.text");
  dart.setFieldSignature(src__backend__message.Message, () => ({
    __proto__: dart.getFields(src__backend__message.Message.__proto__),
    type: dart.finalFieldType(src__backend__message.MessageType),
    text: dart.finalFieldType(core.String)
  }));
  src__backend__message.MessageType = class MessageType extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    static parse(name) {
      switch (name) {
        case "print":
        {
          return src__backend__message.MessageType.print;
        }
        case "skip":
        {
          return src__backend__message.MessageType.skip;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new(dart.str`Invalid message type "${name}".`));
        }
      }
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__message.MessageType.__ = function(name) {
    this[name$] = name;
  }).prototype = src__backend__message.MessageType.prototype;
  dart.addTypeTests(src__backend__message.MessageType);
  const name$ = Symbol("MessageType.name");
  dart.setFieldSignature(src__backend__message.MessageType, () => ({
    __proto__: dart.getFields(src__backend__message.MessageType.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__backend__message.MessageType, ['toString']);
  dart.defineLazy(src__backend__message.MessageType, {
    /*src__backend__message.MessageType.print*/get print() {
      return dart.const(new src__backend__message.MessageType.__("print"));
    },
    /*src__backend__message.MessageType.skip*/get skip() {
      return dart.const(new src__backend__message.MessageType.__("skip"));
    }
  });
  dart.trackLibraries("packages/test/src/backend/message.ddc", {
    "package:test/src/backend/message.dart": src__backend__message
  }, '{"version":3,"sourceRoot":"","sources":["message.dart"],"names":[],"mappings":";;;;;;;;IAUoB;;;;;;IAEL;;;;;;;gDAEL,IAAS,EAAE,IAAS;IAAf,WAAI,GAAJ,IAAI;IAAO,WAAI,GAAJ,IAAI;EAAC;kDAEf,IAAS;IAAJ,WAAI,GAAJ,IAAI;IAAI,WAAI,GAAG,iCAAW,MAAM;;iDACtC,IAAS;IAAJ,WAAI,GAAJ,IAAI;IAAI,WAAI,GAAG,iCAAW,KAAK;;;;;;;;;;;IAWpC;;;;;;iBAEa,IAAW;AAAE,AACrC,cAAQ,IAAI;YACL;;AACH,gBAAO,kCAAW,MAAM;;YACrB;;AACH,gBAAO,kCAAW,KAAK;;;;AAEvB,qBAAM,IAAI,sBAAa,CAAC,iCAAwB,IAAI;;;IAE1D;;YAIqB,UAAI;;;mDAFL,IAAS;IAAJ,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;MAnBjB,uCAAK;YAAG,gBAAM,oCAAa,CAAC;;MAG5B,sCAAI;YAAG,gBAAM,oCAAa,CAAC","file":"message.ddc.js"}');
  // Exports:
  return {
    src__backend__message: src__backend__message
  };
});

//# sourceMappingURL=message.ddc.js.map
