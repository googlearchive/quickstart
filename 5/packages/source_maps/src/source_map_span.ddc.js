define(['dart_sdk', 'packages/source_span/src/location', 'packages/source_span/src/file'], function(dart_sdk, location, file) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location = location.src__location;
  const src__span = location.src__span;
  const src__file = file.src__file;
  const _root = Object.create(null);
  const src__source_map_span = Object.create(_root);
  const $replaceAll = dartx.replaceAll;
  const $compareTo = dartx.compareTo;
  src__source_map_span.SourceMapSpan = class SourceMapSpan extends src__span.SourceSpanBase {
    get isIdentifier() {
      return this[isIdentifier$];
    }
    set isIdentifier(value) {
      super.isIdentifier = value;
    }
  };
  (src__source_map_span.SourceMapSpan.new = function(start, end, text, opts) {
    let isIdentifier = opts && 'isIdentifier' in opts ? opts.isIdentifier : false;
    this[isIdentifier$] = isIdentifier;
    src__source_map_span.SourceMapSpan.__proto__.new.call(this, start, end, text);
  }).prototype = src__source_map_span.SourceMapSpan.prototype;
  (src__source_map_span.SourceMapSpan.identifier = function(start, text) {
    src__source_map_span.SourceMapSpan.new.call(this, start, new src__location.SourceLocation.new(dart.notNull(start.offset) + text.length, {sourceUrl: start.sourceUrl, line: start.line, column: dart.notNull(start.column) + text.length}), text, {isIdentifier: true});
  }).prototype = src__source_map_span.SourceMapSpan.prototype;
  dart.addTypeTests(src__source_map_span.SourceMapSpan);
  const isIdentifier$ = Symbol("SourceMapSpan.isIdentifier");
  dart.setFieldSignature(src__source_map_span.SourceMapSpan, () => ({
    __proto__: dart.getFields(src__source_map_span.SourceMapSpan.__proto__),
    isIdentifier: dart.finalFieldType(core.bool)
  }));
  const _inner = Symbol('_inner');
  src__source_map_span.SourceMapFileSpan = class SourceMapFileSpan extends core.Object {
    get isIdentifier() {
      return this[isIdentifier$0];
    }
    set isIdentifier(value) {
      super.isIdentifier = value;
    }
    get file() {
      return this[_inner].file;
    }
    get start() {
      return this[_inner].start;
    }
    get end() {
      return this[_inner].end;
    }
    get text() {
      return this[_inner].text;
    }
    get context() {
      return this[_inner].context;
    }
    get sourceUrl() {
      return this[_inner].sourceUrl;
    }
    get length() {
      return this[_inner].length;
    }
    compareTo(other) {
      src__span.SourceSpan._check(other);
      return this[_inner].compareTo(other);
    }
    highlight(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      return this[_inner].highlight({color: color});
    }
    union(other) {
      return this[_inner].union(other);
    }
    expand(other) {
      return this[_inner].expand(other);
    }
    message(message, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      return this[_inner].message(message, {color: color});
    }
    toString() {
      return dart.toString(this[_inner])[$replaceAll]("FileSpan", "SourceMapFileSpan");
    }
  };
  (src__source_map_span.SourceMapFileSpan.new = function(inner, opts) {
    let isIdentifier = opts && 'isIdentifier' in opts ? opts.isIdentifier : false;
    this[_inner] = inner;
    this[isIdentifier$0] = isIdentifier;
  }).prototype = src__source_map_span.SourceMapFileSpan.prototype;
  dart.addTypeTests(src__source_map_span.SourceMapFileSpan);
  const isIdentifier$0 = Symbol("SourceMapFileSpan.isIdentifier");
  src__source_map_span.SourceMapFileSpan[dart.implements] = () => [src__source_map_span.SourceMapSpan, src__file.FileSpan];
  dart.setMethodSignature(src__source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getMethods(src__source_map_span.SourceMapFileSpan.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    highlight: dart.fnType(core.String, [], {color: dart.dynamic}),
    union: dart.fnType(src__span.SourceSpan, [src__span.SourceSpan]),
    expand: dart.fnType(src__file.FileSpan, [src__file.FileSpan]),
    message: dart.fnType(core.String, [core.String], {color: dart.dynamic})
  }));
  dart.setGetterSignature(src__source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getGetters(src__source_map_span.SourceMapFileSpan.__proto__),
    file: dart.fnType(src__file.SourceFile, []),
    start: dart.fnType(src__file.FileLocation, []),
    end: dart.fnType(src__file.FileLocation, []),
    text: dart.fnType(core.String, []),
    context: dart.fnType(core.String, []),
    sourceUrl: dart.fnType(core.Uri, []),
    length: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__source_map_span.SourceMapFileSpan, () => ({
    __proto__: dart.getFields(src__source_map_span.SourceMapFileSpan.__proto__),
    [_inner]: dart.finalFieldType(src__file.FileSpan),
    isIdentifier: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__source_map_span.SourceMapFileSpan, ['compareTo', 'toString']);
  dart.trackLibraries("packages/source_maps/src/source_map_span.ddc", {
    "package:source_maps/src/source_map_span.dart": src__source_map_span
  }, '{"version":3,"sourceRoot":"","sources":["source_map_span.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAgBa;;;;;;;qDAEG,KAAoB,EAAE,GAAkB,EAAE,IAAW;QACzD,oEAAc;IAAd,mBAAY,GAAZ,YAAY;AAChB,gEAAM,KAAK,EAAE,GAAG,EAAE,IAAI;EAAC;4DAMJ,KAAoB,EAAE,IAAW;sDAEhD,KAAK,EACL,IAAI,gCAAc,CAAc,aAAb,KAAK,OAAO,IAAG,IAAI,OAAO,cAC9B,KAAK,UAAU,QACpB,KAAK,KAAK,UACK,aAAb,KAAK,OAAO,IAAG,IAAI,OAAO,IACtC,IAAI,iBACU;EAAK;;;;;;;;;IAMlB;;;;;;;YAEY,aAAM,KAAK;;;YACR,aAAM,MAAM;;;YACd,aAAM,IAAI;;;YACf,aAAM,KAAK;;;YACR,aAAM,QAAQ;;;YACf,aAAM,UAAU;;;YACnB,aAAM,OAAO;;cAIjB,KAAgB;kCAAL;YAAU,aAAM,UAAU,CAAC,KAAK;IAAC;;UACxC;YAAW,aAAM,UAAU,SAAQ,KAAK;IAAC;UAC1C,KAAgB;YAAK,aAAM,MAAM,CAAC,KAAK;IAAC;WACzC,KAAc;YAAK,aAAM,OAAO,CAAC,KAAK;IAAC;YACxC,OAAc;UAAG;YAC5B,aAAM,QAAQ,CAAC,OAAO,UAAS,KAAK;IAAC;;2BAErC,YAAM,cAAsB,CAAC,YAAY;IAAoB;;yDAT1C,KAAM;QAAQ,oEAAc;IAA5B,YAAM,GAAN,KAAM;IAAQ,oBAAY,GAAZ,YAAY;EAAS","file":"source_map_span.ddc.js"}');
  // Exports:
  return {
    src__source_map_span: src__source_map_span
  };
});

//# sourceMappingURL=source_map_span.ddc.js.map
