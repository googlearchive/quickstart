define(['dart_sdk', 'packages/string_scanner/src/string_scanner'], function(dart_sdk, string_scanner) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__string_scanner = string_scanner.src__string_scanner;
  const _root = Object.create(null);
  const src__line_scanner = Object.create(_root);
  const $substring = dartx.substring;
  const $length = dartx.length;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $lastIndexOf = dartx.lastIndexOf;
  const $toList = dartx.toList;
  dart.defineLazy(src__line_scanner, {
    /*src__line_scanner._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n?|\\n");
    }
  });
  const _line = Symbol('_line');
  const _column = Symbol('_column');
  const _betweenCRLF = Symbol('_betweenCRLF');
  const _scanner = Symbol('_scanner');
  const _newlinesIn = Symbol('_newlinesIn');
  const _adjustLineAndColumn = Symbol('_adjustLineAndColumn');
  src__line_scanner.LineScanner = class LineScanner extends src__string_scanner.StringScanner {
    get line() {
      return this[_line];
    }
    get column() {
      return this[_column];
    }
    get state() {
      return new src__line_scanner.LineScannerState.__(this, this.position, this.line, this.column);
    }
    get [_betweenCRLF]() {
      return this.peekChar(-1) === 13 && this.peekChar() === 10;
    }
    set state(state) {
      if (!(state[_scanner] === this)) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      super.position = state.position;
      this[_line] = state.line;
      this[_column] = state.column;
    }
    set position(newPosition) {
      let oldPosition = this.position;
      super.position = newPosition;
      if (dart.notNull(newPosition) > dart.notNull(oldPosition)) {
        let newlines = this[_newlinesIn](this.string[$substring](oldPosition, newPosition));
        this[_line] = dart.notNull(this[_line]) + dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column] = dart.notNull(this[_column]) + (dart.notNull(newPosition) - dart.notNull(oldPosition));
        } else {
          this[_column] = dart.notNull(newPosition) - dart.notNull(newlines[$last].end);
        }
      } else {
        let newlines = this[_newlinesIn](this.string[$substring](newPosition, oldPosition));
        if (dart.test(this[_betweenCRLF])) newlines[$removeLast]();
        this[_line] = dart.notNull(this[_line]) - dart.notNull(newlines[$length]);
        if (dart.test(newlines[$isEmpty])) {
          this[_column] = dart.notNull(this[_column]) - (dart.notNull(oldPosition) - dart.notNull(newPosition));
        } else {
          this[_column] = dart.notNull(newPosition) - this.string[$lastIndexOf](src__line_scanner._newlineRegExp, newPosition) - 1;
        }
      }
    }
    get position() {
      return super.position;
    }
    scanChar(character) {
      if (!dart.test(super.scanChar(character))) return false;
      this[_adjustLineAndColumn](character);
      return true;
    }
    readChar() {
      let character = super.readChar();
      this[_adjustLineAndColumn](character);
      return character;
    }
    [_adjustLineAndColumn](character) {
      if (character === 10 || character === 13 && this.peekChar() !== 10) {
        this[_line] = dart.notNull(this[_line]) + 1;
        this[_column] = 0;
      } else {
        this[_column] = dart.notNull(this[_column]) + 1;
      }
    }
    scan(pattern) {
      if (!dart.test(super.scan(pattern))) return false;
      let newlines = this[_newlinesIn](this.lastMatch._get(0));
      this[_line] = dart.notNull(this[_line]) + dart.notNull(newlines[$length]);
      if (dart.test(newlines[$isEmpty])) {
        this[_column] = dart.notNull(this[_column]) + this.lastMatch._get(0).length;
      } else {
        this[_column] = this.lastMatch._get(0).length - dart.notNull(newlines[$last].end);
      }
      return true;
    }
    [_newlinesIn](text) {
      let newlines = src__line_scanner._newlineRegExp.allMatches(text)[$toList]();
      if (dart.test(this[_betweenCRLF])) newlines[$removeLast]();
      return newlines;
    }
  };
  (src__line_scanner.LineScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_line] = 0;
    this[_column] = 0;
    src__line_scanner.LineScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
  }).prototype = src__line_scanner.LineScanner.prototype;
  dart.addTypeTests(src__line_scanner.LineScanner);
  dart.setMethodSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getMethods(src__line_scanner.LineScanner.__proto__),
    [_adjustLineAndColumn]: dart.fnType(dart.void, [core.int]),
    [_newlinesIn]: dart.fnType(core.List$(core.Match), [core.String])
  }));
  dart.setGetterSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getGetters(src__line_scanner.LineScanner.__proto__),
    line: dart.fnType(core.int, []),
    column: dart.fnType(core.int, []),
    state: dart.fnType(src__line_scanner.LineScannerState, []),
    [_betweenCRLF]: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getSetters(src__line_scanner.LineScanner.__proto__),
    state: dart.fnType(dart.void, [src__line_scanner.LineScannerState])
  }));
  dart.setFieldSignature(src__line_scanner.LineScanner, () => ({
    __proto__: dart.getFields(src__line_scanner.LineScanner.__proto__),
    [_line]: dart.fieldType(core.int),
    [_column]: dart.fieldType(core.int)
  }));
  src__line_scanner.LineScannerState = class LineScannerState extends core.Object {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
  };
  (src__line_scanner.LineScannerState.__ = function(scanner, position, line, column) {
    this[_scanner] = scanner;
    this[position$] = position;
    this[line$] = line;
    this[column$] = column;
  }).prototype = src__line_scanner.LineScannerState.prototype;
  dart.addTypeTests(src__line_scanner.LineScannerState);
  const position$ = Symbol("LineScannerState.position");
  const line$ = Symbol("LineScannerState.line");
  const column$ = Symbol("LineScannerState.column");
  dart.setFieldSignature(src__line_scanner.LineScannerState, () => ({
    __proto__: dart.getFields(src__line_scanner.LineScannerState.__proto__),
    [_scanner]: dart.finalFieldType(src__line_scanner.LineScanner),
    position: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/string_scanner/src/line_scanner.ddc", {
    "package:string_scanner/src/line_scanner.dart": src__line_scanner
  }, '{"version":3,"sourceRoot":"","sources":["line_scanner.dart"],"names":[],"mappings":"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","file":"line_scanner.ddc.js"}');
  // Exports:
  return {
    src__line_scanner: src__line_scanner
  };
});

//# sourceMappingURL=line_scanner.ddc.js.map
