define(['dart_sdk', 'packages/source_maps/builder', 'packages/source_span/src/file', 'packages/source_span/src/location', 'packages/source_maps/src/source_map_span'], function(dart_sdk, builder, file, location, source_map_span) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const builder$ = builder.builder;
  const src__file = file.src__file;
  const src__location = location.src__location;
  const src__span = location.src__span;
  const src__source_map_span = source_map_span.src__source_map_span;
  const _root = Object.create(null);
  const printer$ = Object.create(_root);
  const $runes = dartx.runes;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  dart.defineLazy(printer$, {
    /*printer$._LF*/get _LF() {
      return 10;
    },
    /*printer$._CR*/get _CR() {
      return 13;
    }
  });
  const _buff = Symbol('_buff');
  const _maps = Symbol('_maps');
  const _loc = Symbol('_loc');
  const _line = Symbol('_line');
  const _column = Symbol('_column');
  printer$.Printer = class Printer extends core.Object {
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get text() {
      return dart.toString(this[_buff]);
    }
    get map() {
      return this[_maps].toJson(this.filename);
    }
    add(str, opts) {
      let projectMarks = opts && 'projectMarks' in opts ? opts.projectMarks : false;
      let chars = str[$runes].toList();
      let length = chars[$length];
      for (let i = 0; i < dart.notNull(length); i++) {
        let c = chars[$_get](i);
        if (c === 10 || c === 13 && (i + 1 === length || chars[$_get](i + 1) !== 10)) {
          this[_line] = dart.notNull(this[_line]) + 1;
          this[_column] = 0;
          if (dart.dtest(projectMarks) && this[_loc] != null) {
            if (src__file.FileLocation.is(this[_loc])) {
              let file = src__file.FileLocation.as(this[_loc]).file;
              this.mark(file.location(file.getOffset(dart.notNull(this[_loc].line) + 1)));
            } else {
              this.mark(new src__location.SourceLocation.new(0, {sourceUrl: this[_loc].sourceUrl, line: dart.notNull(this[_loc].line) + 1, column: 0}));
            }
          }
        } else {
          this[_column] = dart.notNull(this[_column]) + 1;
        }
      }
      this[_buff].write(str);
    }
    addSpaces(total) {
      for (let i = 0; i < dart.notNull(total); i++)
        this[_buff].write(' ');
      this[_column] = dart.notNull(this[_column]) + dart.notNull(total);
    }
    mark(mark) {
      let loc = null;
      let identifier = null;
      if (src__location.SourceLocation.is(mark)) {
        loc = mark;
      } else if (src__span.SourceSpan.is(mark)) {
        loc = mark.start;
        if (src__source_map_span.SourceMapSpan.is(mark) && dart.test(mark.isIdentifier)) identifier = mark.text;
      }
      this[_maps].addLocation(src__location.SourceLocation._check(loc), new src__location.SourceLocation.new(this[_buff].length, {line: this[_line], column: this[_column]}), core.String._check(identifier));
      this[_loc] = src__location.SourceLocation._check(loc);
    }
  };
  (printer$.Printer.new = function(filename) {
    this[_buff] = new core.StringBuffer.new();
    this[_maps] = new builder$.SourceMapBuilder.new();
    this[_loc] = null;
    this[_line] = 0;
    this[_column] = 0;
    this[filename$] = filename;
  }).prototype = printer$.Printer.prototype;
  dart.addTypeTests(printer$.Printer);
  const filename$ = Symbol("Printer.filename");
  dart.setMethodSignature(printer$.Printer, () => ({
    __proto__: dart.getMethods(printer$.Printer.__proto__),
    add: dart.fnType(dart.void, [core.String], {projectMarks: dart.dynamic}),
    addSpaces: dart.fnType(dart.void, [core.int]),
    mark: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(printer$.Printer, () => ({
    __proto__: dart.getGetters(printer$.Printer.__proto__),
    text: dart.fnType(core.String, []),
    map: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(printer$.Printer, () => ({
    __proto__: dart.getFields(printer$.Printer.__proto__),
    filename: dart.finalFieldType(core.String),
    [_buff]: dart.finalFieldType(core.StringBuffer),
    [_maps]: dart.finalFieldType(builder$.SourceMapBuilder),
    [_loc]: dart.fieldType(src__location.SourceLocation),
    [_line]: dart.fieldType(core.int),
    [_column]: dart.fieldType(core.int)
  }));
  const _items = Symbol('_items');
  const _flush = Symbol('_flush');
  const _appendString = Symbol('_appendString');
  const _indent = Symbol('_indent');
  printer$.NestedPrinter = class NestedPrinter extends core.Object {
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      this[indent$] = value;
    }
    add(object, opts) {
      let location = opts && 'location' in opts ? opts.location : null;
      let span = opts && 'span' in opts ? opts.span : null;
      let isOriginal = opts && 'isOriginal' in opts ? opts.isOriginal : false;
      if (!(typeof object == 'string') || location != null || span != null || dart.test(isOriginal)) {
        this[_flush]();
        if (!(location == null || span == null)) dart.assertFailed();
        if (location != null) this[_items][$add](location);
        if (span != null) this[_items][$add](span);
        if (dart.test(isOriginal)) this[_items][$add](printer$.NestedPrinter._ORIGINAL);
      }
      if (typeof object == 'string') {
        this[_appendString](object);
      } else {
        this[_items][$add](object);
      }
    }
    insertIndent() {
      return this[_indent](this.indent);
    }
    addLine(line, opts) {
      let location = opts && 'location' in opts ? opts.location : null;
      let span = opts && 'span' in opts ? opts.span : null;
      if (location != null || span != null) {
        this[_flush]();
        if (!(location == null || span == null)) dart.assertFailed();
        if (location != null) this[_items][$add](location);
        if (span != null) this[_items][$add](span);
      }
      if (line == null) return;
      if (line !== '') {
        this[_indent](this.indent);
        this[_appendString](line);
      }
      this[_appendString]('\n');
    }
    [_appendString](s) {
      if (this[_buff] == null) this[_buff] = new core.StringBuffer.new();
      this[_buff].write(s);
    }
    [_flush]() {
      if (this[_buff] != null) {
        this[_items][$add](dart.toString(this[_buff]));
        this[_buff] = null;
      }
    }
    [_indent](indent) {
      for (let i = 0; i < dart.notNull(indent); i++)
        this[_appendString]('  ');
    }
    toString() {
      this[_flush]();
      return (() => {
        let _ = new core.StringBuffer.new();
        _.writeAll(this[_items]);
        return _;
      })().toString();
    }
    get printer() {
      return this[printer];
    }
    set printer(value) {
      this[printer] = value;
    }
    get text() {
      return this.printer.text;
    }
    get map() {
      return this.printer.map;
    }
    build(filename) {
      this.writeTo(this.printer = new printer$.Printer.new(filename));
    }
    writeTo(printer) {
      this[_flush]();
      let propagate = false;
      for (let item of this[_items]) {
        if (printer$.NestedItem.is(item)) {
          item.writeTo(printer);
        } else if (typeof item == 'string') {
          printer.add(item, {projectMarks: propagate});
          propagate = false;
        } else if (src__location.SourceLocation.is(item) || src__span.SourceSpan.is(item)) {
          printer.mark(item);
        } else if (dart.equals(item, printer$.NestedPrinter._ORIGINAL)) {
          propagate = true;
        } else {
          dart.throw(new core.UnsupportedError.new(dart.str`Unknown item type: ${item}`));
        }
      }
    }
  };
  (printer$.NestedPrinter.new = function(indent) {
    if (indent === void 0) indent = 0;
    this[_items] = [];
    this[_buff] = null;
    this[printer] = null;
    this[indent$] = indent;
  }).prototype = printer$.NestedPrinter.prototype;
  dart.addTypeTests(printer$.NestedPrinter);
  const indent$ = Symbol("NestedPrinter.indent");
  const printer = Symbol("NestedPrinter.printer");
  printer$.NestedPrinter[dart.implements] = () => [printer$.NestedItem];
  dart.setMethodSignature(printer$.NestedPrinter, () => ({
    __proto__: dart.getMethods(printer$.NestedPrinter.__proto__),
    add: dart.fnType(dart.void, [dart.dynamic], {location: src__location.SourceLocation, span: src__span.SourceSpan, isOriginal: core.bool}),
    insertIndent: dart.fnType(dart.void, []),
    addLine: dart.fnType(dart.void, [core.String], {location: src__location.SourceLocation, span: src__span.SourceSpan}),
    [_appendString]: dart.fnType(dart.void, [core.String]),
    [_flush]: dart.fnType(dart.void, []),
    [_indent]: dart.fnType(dart.void, [core.int]),
    build: dart.fnType(dart.void, [core.String]),
    writeTo: dart.fnType(dart.void, [printer$.Printer])
  }));
  dart.setGetterSignature(printer$.NestedPrinter, () => ({
    __proto__: dart.getGetters(printer$.NestedPrinter.__proto__),
    text: dart.fnType(core.String, []),
    map: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(printer$.NestedPrinter, () => ({
    __proto__: dart.getFields(printer$.NestedPrinter.__proto__),
    [_items]: dart.fieldType(core.List),
    [_buff]: dart.fieldType(core.StringBuffer),
    indent: dart.fieldType(core.int),
    printer: dart.fieldType(printer$.Printer)
  }));
  dart.defineExtensionMethods(printer$.NestedPrinter, ['toString']);
  dart.defineLazy(printer$.NestedPrinter, {
    /*printer$.NestedPrinter._ORIGINAL*/get _ORIGINAL() {
      return new core.Object.new();
    }
  });
  printer$.NestedItem = class NestedItem extends core.Object {};
  (printer$.NestedItem.new = function() {
  }).prototype = printer$.NestedItem.prototype;
  dart.addTypeTests(printer$.NestedItem);
  dart.trackLibraries("packages/source_maps/printer.ddc", {
    "package:source_maps/printer.dart": printer$
  }, '{"version":3,"sourceRoot":"","sources":["printer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;MAYU,YAAG;YAAG;;MACN,YAAG;YAAG;;;;;;;;;IAKD;;;;;;;2BAGM,WAAK;IAAW;;YACjB,YAAK,OAAO,CAAC,aAAQ;IAAC;QAkB/B,GAAU;UAAG,oEAAc;AAClC,UAAI,QAAQ,GAAG,QAAM,OAAO;AAC5B,UAAI,SAAS,KAAK,SAAO;AACzB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,MAAM,GAAE,CAAC,IAAI;AAC/B,YAAI,IAAI,KAAK,QAAC,CAAC;AACf,YAAI,CAAC,KAAI,EAAG,IAAK,CAAC,KAAI,EAAG,KAAK,AAAA,AAAE,CAAD,GAAG,MAAK,MAAM,IAAI,KAAK,QAAC,AAAE,CAAD,GAAG,OAAM,EAAG,GAAI;AAEtE,qBAAK,gBAAL,WAAK,IA/Cb;AAgDQ,uBAAO,GAAG;AACV,yBAAI,YAAY,KAAI,UAAI,IAAI,MAAM;AAChC,0CAAI,UAAI,GAAkB;AACxB,kBAAI,iCAAQ,UAAI,MAAsB;AACtC,uBAAI,CAAC,IAAI,SAAS,CAAC,IAAI,UAAU,CAAW,aAAV,UAAI,KAAK,IAAG;mBACzC;AACL,uBAAI,CAAC,IAAI,gCAAc,CAAC,eACT,UAAI,UAAU,QAAkB,aAAV,UAAI,KAAK,IAAG,WAAW;;;eAG3D;AACL,uBAAO,gBAAP,aAAO,IA3Df;;;AA8DI,iBAAK,MAAM,CAAC,GAAG;IACjB;cAKe,KAAS;AACtB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,KAAK,GAAE,CAAC;AAAI,mBAAK,MAAM,CAAC;AAC5C,mBAAO,GAtEX,aAsEI,aAAO,iBAAI,KAAK;IAClB;SAOU,IAAI;AACZ,UAAI;AACJ,UAAI,aAAa;AACjB,0CAAI,IAAI,GAAoB;AAC1B,WAAG,GAAG,IAAI;YACL,6BAAI,IAAI,GAAgB;AAC7B,WAAG,GAAG,IAAI,MAAM;AAChB,kDAAI,IAAI,eAAqB,IAAI,aAAa,GAAE,UAAU,GAAG,IAAI,KAAK;;AAExE,iBAAK,YAAY,qCACb,GAAG,GACH,IAAI,gCAAc,CAAC,WAAK,OAAO,SAAQ,WAAK,UAAU,aAAO,uBAC7D,UAAU;AACd,gBAAI,uCAAG,GAAG;IACZ;;mCA3DQ,QAAa;IAdF,WAAK,GAAG,IAAI,qBAAY;IACpB,WAAK,GAAG,IAAI,6BAAgB;IAKpC,UAAI;IAGf,WAAK,GAAG;IAGR,aAAO,GAAG;IAED,eAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgFlB;;;;;;QAuBK,MAAM;UAAkB;UAAqB;UAC7C,8DAAY;AACnB,mBAAI,MAAM,iBAAe,QAAQ,IAAI,QAAQ,IAAI,IAAI,kBAAQ,UAAU,GAAE;AACvE,oBAAM;AACN,cAAO,AAAiB,QAAT,IAAI,QAAQ,IAAI,IAAI;AACnC,YAAI,QAAQ,IAAI,MAAM,YAAM,MAAI,CAAC,QAAQ;AACzC,YAAI,IAAI,IAAI,MAAM,YAAM,MAAI,CAAC,IAAI;AACjC,sBAAI,UAAU,GAAE,YAAM,MAAI,CAAC,gCAAS;;AAGtC,iBAAI,MAAM,cAAY;AACpB,2BAAa,CAAC,MAAM;aACf;AACL,oBAAM,MAAI,CAAC,MAAM;;IAErB;;YAGuB,cAAO,CAAC,WAAM;IAAC;YAYzB,IAAW;UAAkB;UAAqB;AAC7D,UAAI,QAAQ,IAAI,QAAQ,IAAI,IAAI,MAAM;AACpC,oBAAM;AACN,cAAO,AAAiB,QAAT,IAAI,QAAQ,IAAI,IAAI;AACnC,YAAI,QAAQ,IAAI,MAAM,YAAM,MAAI,CAAC,QAAQ;AACzC,YAAI,IAAI,IAAI,MAAM,YAAM,MAAI,CAAC,IAAI;;AAEnC,UAAI,IAAI,IAAI,MAAM;AAClB,UAAI,IAAI,KAAI,IAAI;AAEd,qBAAO,CAAC,WAAM;AACd,2BAAa,CAAC,IAAI;;AAEpB,yBAAa,CAAC;IAChB;oBAGmB,CAAQ;AACzB,UAAI,WAAK,IAAI,MAAM,WAAK,GAAG,IAAI,qBAAY;AAC3C,iBAAK,MAAM,CAAC,CAAC;IACf;;AAIE,UAAI,WAAK,IAAI,MAAM;AACjB,oBAAM,MAAI,eAAC,WAAK;AAChB,mBAAK,GAAG;;IAEZ;cAEa,MAAU;AACrB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,MAAM,GAAE,CAAC;AAAI,2BAAa,CAAC;IACjD;;AAKE,kBAAM;AACN,YAAO;gBAAC,IAAI,qBAAY;mBAAa,YAAM;;mBAAW;IACxD;IAGQ;;;;;;;YAGW,aAAO,KAAK;;;YAGb,aAAO,IAAI;;UAKlB,QAAe;AACxB,kBAAO,CAAC,YAAO,GAAG,IAAI,oBAAO,CAAC,QAAQ;IACxC;YAGa,OAAe;AAC1B,kBAAM;AACN,UAAK,YAAY;AACjB,eAAS,OAAQ,aAAM,EAAE;AACvB,mCAAI,IAAI,GAAgB;AACtB,cAAI,QAAQ,CAAC,OAAO;cACf,YAAI,IAAI,cAAY;AACzB,iBAAO,IAAI,CAAC,IAAI,iBAAgB,SAAS;AACzC,mBAAS,GAAG;cACP,qCAAI,IAAI,6BAAsB,IAAI,GAAgB;AACvD,iBAAO,KAAK,CAAC,IAAI;cACZ,iBAAI,IAAI,EAAI,gCAAS,GAAE;AAI5B,mBAAS,GAAG;eACP;AACL,qBAAM,IAAI,yBAAgB,CAAC,8BAAqB,IAAI;;;IAG1D;;yCA7He,MAAe;2BAAV,SAAS;IAZxB,YAAM,GAAG;IAGD,WAAK;IAkGV,aAAO;IAzFK,aAAM,GAAN,MAAM;EAAM;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAFnB,gCAAS;YAAG,KAAI,eAAM;;;;;EAsIrC","file":"printer.ddc.js"}');
  // Exports:
  return {
    printer: printer$
  };
});

//# sourceMappingURL=printer.ddc.js.map
