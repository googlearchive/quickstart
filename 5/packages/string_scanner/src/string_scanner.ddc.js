define(['dart_sdk', 'packages/string_scanner/src/utils', 'packages/source_span/src/file', 'packages/string_scanner/src/exception'], function(dart_sdk, utils, file, exception) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const src__file = file.src__file;
  const src__exception = exception.src__exception;
  const _root = Object.create(null);
  const src__string_scanner = Object.create(_root);
  const $substring = dartx.substring;
  const $codeUnitAt = dartx.codeUnitAt;
  const $replaceAll = dartx.replaceAll;
  const $toString = dartx.toString;
  const $matchAsPrefix = dartx.matchAsPrefix;
  dart.defineLazy(src__string_scanner, {
    /*src__string_scanner._slashAutoEscape*/get _slashAutoEscape() {
      return core.RegExp.new("/").pattern === "\\/";
    }
  });
  const _position = Symbol('_position');
  const _lastMatch = Symbol('_lastMatch');
  const _lastMatchPosition = Symbol('_lastMatchPosition');
  const _fail = Symbol('_fail');
  src__string_scanner.StringScanner = class StringScanner extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get string() {
      return this[string$];
    }
    set string(value) {
      super.string = value;
    }
    get position() {
      return this[_position];
    }
    set position(position) {
      if (dart.notNull(position) < 0 || dart.notNull(position) > this.string.length) {
        dart.throw(new core.ArgumentError.new(dart.str`Invalid position ${position}`));
      }
      this[_position] = position;
      this[_lastMatch] = null;
    }
    get lastMatch() {
      if (this[_position] != this[_lastMatchPosition]) this[_lastMatch] = null;
      return this[_lastMatch];
    }
    get rest() {
      return this.string[$substring](this.position);
    }
    get isDone() {
      return this.position === this.string.length;
    }
    readChar() {
      if (dart.test(this.isDone)) this[_fail]("more input");
      return this.string[$codeUnitAt]((() => {
        let x = this[_position];
        this[_position] = dart.notNull(x) + 1;
        return x;
      })());
    }
    peekChar(offset) {
      if (offset === void 0) offset = null;
      if (offset == null) offset = 0;
      let index = dart.notNull(this.position) + dart.notNull(offset);
      if (index < 0 || index >= this.string.length) return null;
      return this.string[$codeUnitAt](index);
    }
    scanChar(character) {
      if (dart.test(this.isDone)) return false;
      if (this.string[$codeUnitAt](this[_position]) !== character) return false;
      this[_position] = dart.notNull(this[_position]) + 1;
      return true;
    }
    expectChar(character, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scanChar(character))) return;
      if (name == null) {
        if (character === 92) {
          name = '"\\"';
        } else if (character === 34) {
          name = '"\\""';
        } else {
          name = dart.str`"${core.String.fromCharCode(character)}"`;
        }
      }
      this[_fail](name);
    }
    scan(pattern) {
      let success = this.matches(pattern);
      if (dart.test(success)) {
        this[_position] = this[_lastMatch].end;
        this[_lastMatchPosition] = this[_position];
      }
      return success;
    }
    expect(pattern, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      if (dart.test(this.scan(pattern))) return;
      if (name == null) {
        if (core.RegExp.is(pattern)) {
          let source = pattern.pattern;
          if (!dart.test(src__string_scanner._slashAutoEscape)) source = source[$replaceAll]("/", "\\/");
          name = dart.str`/${source}/`;
        } else {
          name = dart.toString(pattern)[$replaceAll]("\\", "\\\\")[$replaceAll]('"', '\\"');
          name = dart.str`"${name}"`;
        }
      }
      this[_fail](name);
    }
    expectDone() {
      if (dart.test(this.isDone)) return;
      this[_fail]("no more input");
    }
    matches(pattern) {
      this[_lastMatch] = pattern[$matchAsPrefix](this.string, this.position);
      this[_lastMatchPosition] = this[_position];
      return this[_lastMatch] != null;
    }
    substring(start, end) {
      if (end === void 0) end = null;
      if (end == null) end = this.position;
      return this.string[$substring](start, end);
    }
    error(message, opts) {
      let match = opts && 'match' in opts ? opts.match : null;
      let position = opts && 'position' in opts ? opts.position : null;
      let length = opts && 'length' in opts ? opts.length : null;
      src__utils.validateErrorArgs(this.string, match, position, length);
      if (match == null && position == null && length == null) match = this.lastMatch;
      if (position == null) {
        position = match == null ? this.position : match.start;
      }
      if (length == null) length = match == null ? 0 : dart.notNull(match.end) - dart.notNull(match.start);
      let sourceFile = new src__file.SourceFile.fromString(this.string, {url: this.sourceUrl});
      let span = sourceFile.span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
    [_fail](name) {
      this.error(dart.str`expected ${name}.`, {position: this.position, length: 0});
    }
  };
  (src__string_scanner.StringScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_position] = 0;
    this[_lastMatch] = null;
    this[_lastMatchPosition] = null;
    this[string$] = string;
    this[sourceUrl$] = core.Uri._check(typeof sourceUrl == 'string' ? core.Uri.parse(sourceUrl) : sourceUrl);
    if (position != null) this.position = position;
  }).prototype = src__string_scanner.StringScanner.prototype;
  dart.addTypeTests(src__string_scanner.StringScanner);
  const sourceUrl$ = Symbol("StringScanner.sourceUrl");
  const string$ = Symbol("StringScanner.string");
  dart.setMethodSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getMethods(src__string_scanner.StringScanner.__proto__),
    readChar: dart.fnType(core.int, []),
    peekChar: dart.fnType(core.int, [], [core.int]),
    scanChar: dart.fnType(core.bool, [core.int]),
    expectChar: dart.fnType(dart.void, [core.int], {name: core.String}),
    scan: dart.fnType(core.bool, [core.Pattern]),
    expect: dart.fnType(dart.void, [core.Pattern], {name: core.String}),
    expectDone: dart.fnType(dart.void, []),
    matches: dart.fnType(core.bool, [core.Pattern]),
    substring: dart.fnType(core.String, [core.int], [core.int]),
    error: dart.fnType(dart.void, [core.String], {match: core.Match, position: core.int, length: core.int}),
    [_fail]: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getGetters(src__string_scanner.StringScanner.__proto__),
    position: dart.fnType(core.int, []),
    lastMatch: dart.fnType(core.Match, []),
    rest: dart.fnType(core.String, []),
    isDone: dart.fnType(core.bool, [])
  }));
  dart.setSetterSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getSetters(src__string_scanner.StringScanner.__proto__),
    position: dart.fnType(dart.void, [core.int])
  }));
  dart.setFieldSignature(src__string_scanner.StringScanner, () => ({
    __proto__: dart.getFields(src__string_scanner.StringScanner.__proto__),
    sourceUrl: dart.finalFieldType(core.Uri),
    string: dart.finalFieldType(core.String),
    [_position]: dart.fieldType(core.int),
    [_lastMatch]: dart.fieldType(core.Match),
    [_lastMatchPosition]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/string_scanner/src/string_scanner.ddc", {
    "package:string_scanner/src/string_scanner.dart": src__string_scanner
  }, '{"version":3,"sourceRoot":"","sources":["string_scanner.dart"],"names":[],"mappings":"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","file":"string_scanner.ddc.js"}');
  // Exports:
  return {
    src__string_scanner: src__string_scanner
  };
});

//# sourceMappingURL=string_scanner.ddc.js.map
