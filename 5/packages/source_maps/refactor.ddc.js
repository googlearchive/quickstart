define(['dart_sdk', 'packages/source_maps/printer', 'packages/source_span/src/location', 'packages/source_span/src/file'], function(dart_sdk, printer, location, file) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const printer$ = printer.printer;
  const src__location = location.src__location;
  const src__file = file.src__file;
  const _root = Object.create(null);
  const refactor = Object.create(_root);
  const $length = dartx.length;
  const $add = dartx.add;
  const $sort = dartx.sort;
  const $substring = dartx.substring;
  const $compareTo = dartx.compareTo;
  const $codeUnitAt = dartx.codeUnitAt;
  let JSArrayOf_TextEdit = () => (JSArrayOf_TextEdit = dart.constFn(_interceptors.JSArray$(refactor._TextEdit)))();
  let ListOf_TextEdit = () => (ListOf_TextEdit = dart.constFn(core.List$(refactor._TextEdit)))();
  let ComparableOf_TextEdit = () => (ComparableOf_TextEdit = dart.constFn(core.Comparable$(refactor._TextEdit)))();
  let StringAndintToString = () => (StringAndintToString = dart.constFn(dart.fnType(core.String, [core.String, core.int])))();
  const _edits = Symbol('_edits');
  const _loc = Symbol('_loc');
  refactor.TextEditTransaction = class TextEditTransaction extends core.Object {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get original() {
      return this[original$];
    }
    set original(value) {
      super.original = value;
    }
    get hasEdits() {
      return dart.notNull(this[_edits][$length]) > 0;
    }
    edit(begin, end, replacement) {
      this[_edits][$add](new refactor._TextEdit.new(begin, end, replacement));
    }
    [_loc](offset) {
      return this.file != null ? this.file.location(offset) : null;
    }
    commit() {
      let printer = new printer$.NestedPrinter.new();
      if (this[_edits][$length] === 0) {
        printer.add(this.original, {location: this[_loc](0), isOriginal: true});
        return printer;
      }
      this[_edits][$sort]();
      let consumed = 0;
      for (let edit of this[_edits]) {
        if (dart.notNull(consumed) > dart.notNull(edit.begin)) {
          let sb = new core.StringBuffer.new();
          sb.write(this.file.location(edit.begin).toolString);
          sb.write(': overlapping edits. Insert at offset ');
          sb.write(edit.begin);
          sb.write(' but have consumed ');
          sb.write(consumed);
          sb.write(' input characters. List of edits:');
          for (let e of this[_edits]) {
            sb.write('\n    ');
            sb.write(e);
          }
          dart.throw(new core.UnsupportedError.new(sb.toString()));
        }
        let betweenEdits = this.original[$substring](consumed, edit.begin);
        printer.add(betweenEdits, {location: this[_loc](consumed), isOriginal: true});
        printer.add(edit.replace, {location: this[_loc](edit.begin)});
        consumed = edit.end;
      }
      printer.add(this.original[$substring](consumed), {location: this[_loc](consumed), isOriginal: true});
      return printer;
    }
  };
  (refactor.TextEditTransaction.new = function(original, file) {
    this[_edits] = JSArrayOf_TextEdit().of([]);
    this[original$] = original;
    this[file$] = file;
  }).prototype = refactor.TextEditTransaction.prototype;
  dart.addTypeTests(refactor.TextEditTransaction);
  const file$ = Symbol("TextEditTransaction.file");
  const original$ = Symbol("TextEditTransaction.original");
  dart.setMethodSignature(refactor.TextEditTransaction, () => ({
    __proto__: dart.getMethods(refactor.TextEditTransaction.__proto__),
    edit: dart.fnType(dart.void, [core.int, core.int, dart.dynamic]),
    [_loc]: dart.fnType(src__location.SourceLocation, [core.int]),
    commit: dart.fnType(printer$.NestedPrinter, [])
  }));
  dart.setGetterSignature(refactor.TextEditTransaction, () => ({
    __proto__: dart.getGetters(refactor.TextEditTransaction.__proto__),
    hasEdits: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(refactor.TextEditTransaction, () => ({
    __proto__: dart.getFields(refactor.TextEditTransaction.__proto__),
    file: dart.finalFieldType(src__file.SourceFile),
    original: dart.finalFieldType(core.String),
    [_edits]: dart.finalFieldType(ListOf_TextEdit())
  }));
  refactor._TextEdit = class _TextEdit extends core.Object {
    get length() {
      return dart.notNull(this.end) - dart.notNull(this.begin);
    }
    toString() {
      return dart.str`(Edit @ ${this.begin},${this.end}: "${this.replace}")`;
    }
    compareTo(other) {
      refactor._TextEdit._check(other);
      let diff = dart.notNull(this.begin) - dart.notNull(other.begin);
      if (diff !== 0) return diff;
      return dart.notNull(this.end) - dart.notNull(other.end);
    }
  };
  (refactor._TextEdit.new = function(begin, end, replace) {
    this.begin = begin;
    this.end = end;
    this.replace = replace;
  }).prototype = refactor._TextEdit.prototype;
  dart.addTypeTests(refactor._TextEdit);
  refactor._TextEdit[dart.implements] = () => [ComparableOf_TextEdit()];
  dart.setMethodSignature(refactor._TextEdit, () => ({
    __proto__: dart.getMethods(refactor._TextEdit.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(refactor._TextEdit, () => ({
    __proto__: dart.getGetters(refactor._TextEdit.__proto__),
    length: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(refactor._TextEdit, () => ({
    __proto__: dart.getFields(refactor._TextEdit.__proto__),
    begin: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int),
    replace: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(refactor._TextEdit, ['toString', 'compareTo']);
  refactor.guessIndent = function(code, charOffset) {
    let lineStart = 0;
    for (let i = dart.notNull(charOffset) - 1; i >= 0; i--) {
      let c = code[$codeUnitAt](i);
      if (c === 10 || c === 13) {
        lineStart = i + 1;
        break;
      }
    }
    let whitespaceEnd = code.length;
    for (let i = lineStart; i < code.length; i++) {
      let c = code[$codeUnitAt](i);
      if (c !== 32 && c !== 9) {
        whitespaceEnd = i;
        break;
      }
    }
    return code[$substring](lineStart, whitespaceEnd);
  };
  dart.fn(refactor.guessIndent, StringAndintToString());
  dart.defineLazy(refactor, {
    /*refactor._CR*/get _CR() {
      return 13;
    },
    /*refactor._LF*/get _LF() {
      return 10;
    },
    /*refactor._TAB*/get _TAB() {
      return 9;
    },
    /*refactor._SPACE*/get _SPACE() {
      return 32;
    }
  });
  dart.trackLibraries("packages/source_maps/refactor.ddc", {
    "package:source_maps/refactor.dart": refactor
  }, '{"version":3,"sourceRoot":"","sources":["refactor.dart"],"names":[],"mappings":"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","file":"refactor.ddc.js"}');
  // Exports:
  return {
    refactor: refactor
  };
});

//# sourceMappingURL=refactor.ddc.js.map
