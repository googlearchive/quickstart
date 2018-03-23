define(['dart_sdk', 'packages/source_span/src/location_mixin', 'packages/source_span/src/location'], function(dart_sdk, location_mixin, location) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__location_mixin = location_mixin.src__location_mixin;
  const src__location = location.src__location;
  const src__span_with_context = location.src__span_with_context;
  const src__span = location.src__span;
  const src__span_mixin = location.src__span_mixin;
  const _root = Object.create(null);
  const src__file = Object.create(_root);
  const $runes = dartx.runes;
  const $codeUnits = dartx.codeUnits;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $first = dartx.first;
  const $last = dartx.last;
  const $truncate = dartx.truncate;
  const $sublist = dartx.sublist;
  const $compareTo = dartx.compareTo;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  dart.defineLazy(src__file, {
    /*src__file._LF*/get _LF() {
      return 10;
    },
    /*src__file._CR*/get _CR() {
      return 13;
    }
  });
  const _decodedChars = Symbol('_decodedChars');
  const _lineStarts = Symbol('_lineStarts');
  const _cachedLine = Symbol('_cachedLine');
  const _isNearCachedLine = Symbol('_isNearCachedLine');
  const _binarySearch = Symbol('_binarySearch');
  src__file.SourceFile = class SourceFile extends core.Object {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get length() {
      return this[_decodedChars][$length];
    }
    get lines() {
      return this[_lineStarts][$length];
    }
    span(start, end) {
      if (end === void 0) end = null;
      if (end == null) end = dart.notNull(this.length) - 1;
      return new src__file._FileSpan.new(this, start, end);
    }
    location(offset) {
      return new src__file.FileLocation.__(this, offset);
    }
    getLine(offset) {
      if (dart.notNull(offset) < 0) {
        dart.throw(new core.RangeError.new(dart.str`Offset may not be negative, was ${offset}.`));
      } else if (dart.notNull(offset) > dart.notNull(this.length)) {
        dart.throw(new core.RangeError.new(dart.str`Offset ${offset} must not be greater than the number ` + dart.str`of characters in the file, ${this.length}.`));
      }
      if (dart.notNull(offset) < dart.notNull(this[_lineStarts][$first])) return -1;
      if (dart.notNull(offset) >= dart.notNull(this[_lineStarts][$last])) return dart.notNull(this[_lineStarts][$length]) - 1;
      if (dart.test(this[_isNearCachedLine](offset))) return this[_cachedLine];
      this[_cachedLine] = dart.notNull(this[_binarySearch](offset)) - 1;
      return this[_cachedLine];
    }
    [_isNearCachedLine](offset) {
      if (this[_cachedLine] == null) return false;
      if (dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](this[_cachedLine]))) return false;
      if (dart.notNull(this[_cachedLine]) >= dart.notNull(this[_lineStarts][$length]) - 1 || dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](dart.notNull(this[_cachedLine]) + 1))) {
        return true;
      }
      if (dart.notNull(this[_cachedLine]) >= dart.notNull(this[_lineStarts][$length]) - 2 || dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](dart.notNull(this[_cachedLine]) + 2))) {
        this[_cachedLine] = dart.notNull(this[_cachedLine]) + 1;
        return true;
      }
      return false;
    }
    [_binarySearch](offset) {
      let min = 0;
      let max = dart.notNull(this[_lineStarts][$length]) - 1;
      while (min < max) {
        let half = min + ((max - min) / 2)[$truncate]();
        if (dart.notNull(this[_lineStarts][$_get](half)) > dart.notNull(offset)) {
          max = half;
        } else {
          min = half + 1;
        }
      }
      return max;
    }
    getColumn(offset, opts) {
      let line = opts && 'line' in opts ? opts.line : null;
      if (dart.notNull(offset) < 0) {
        dart.throw(new core.RangeError.new(dart.str`Offset may not be negative, was ${offset}.`));
      } else if (dart.notNull(offset) > dart.notNull(this.length)) {
        dart.throw(new core.RangeError.new(dart.str`Offset ${offset} must be not be greater than the ` + dart.str`number of characters in the file, ${this.length}.`));
      }
      if (line == null) {
        line = this.getLine(offset);
      } else if (dart.notNull(line) < 0) {
        dart.throw(new core.RangeError.new(dart.str`Line may not be negative, was ${line}.`));
      } else if (dart.notNull(line) >= dart.notNull(this.lines)) {
        dart.throw(new core.RangeError.new(dart.str`Line ${line} must be less than the number of ` + dart.str`lines in the file, ${this.lines}.`));
      }
      let lineStart = this[_lineStarts][$_get](line);
      if (dart.notNull(lineStart) > dart.notNull(offset)) {
        dart.throw(new core.RangeError.new(dart.str`Line ${line} comes after offset ${offset}.`));
      }
      return dart.notNull(offset) - dart.notNull(lineStart);
    }
    getOffset(line, column) {
      if (column === void 0) column = null;
      if (column == null) column = 0;
      if (dart.notNull(line) < 0) {
        dart.throw(new core.RangeError.new(dart.str`Line may not be negative, was ${line}.`));
      } else if (dart.notNull(line) >= dart.notNull(this.lines)) {
        dart.throw(new core.RangeError.new(dart.str`Line ${line} must be less than the number of ` + dart.str`lines in the file, ${this.lines}.`));
      } else if (dart.notNull(column) < 0) {
        dart.throw(new core.RangeError.new(dart.str`Column may not be negative, was ${column}.`));
      }
      let result = dart.notNull(this[_lineStarts][$_get](line)) + dart.notNull(column);
      if (result > dart.notNull(this.length) || dart.notNull(line) + 1 < dart.notNull(this.lines) && result >= dart.notNull(this[_lineStarts][$_get](dart.notNull(line) + 1))) {
        dart.throw(new core.RangeError.new(dart.str`Line ${line} doesn't have ${column} columns.`));
      }
      return result;
    }
    getText(start, end) {
      if (end === void 0) end = null;
      return core.String.fromCharCodes(this[_decodedChars][$sublist](start, end));
    }
  };
  (src__file.SourceFile.new = function(text, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    src__file.SourceFile.decoded.call(this, text[$runes], {url: url});
  }).prototype = src__file.SourceFile.prototype;
  (src__file.SourceFile.fromString = function(text, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    src__file.SourceFile.decoded.call(this, text[$codeUnits], {url: url});
  }).prototype = src__file.SourceFile.prototype;
  (src__file.SourceFile.decoded = function(decodedChars, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    this[_lineStarts] = JSArrayOfint().of([0]);
    this[_cachedLine] = null;
    this[url$] = core.Uri._check(typeof url == 'string' ? core.Uri.parse(url) : url);
    this[_decodedChars] = typed_data.Uint32List.fromList(decodedChars[$toList]());
    for (let i = 0; i < dart.notNull(this[_decodedChars][$length]); i++) {
      let c = this[_decodedChars][$_get](i);
      if (c === 13) {
        let j = i + 1;
        if (j >= dart.notNull(this[_decodedChars][$length]) || this[_decodedChars][$_get](j) !== 10) c = 10;
      }
      if (c === 10) this[_lineStarts][$add](i + 1);
    }
  }).prototype = src__file.SourceFile.prototype;
  dart.addTypeTests(src__file.SourceFile);
  const url$ = Symbol("SourceFile.url");
  dart.setMethodSignature(src__file.SourceFile, () => ({
    __proto__: dart.getMethods(src__file.SourceFile.__proto__),
    span: dart.fnType(src__file.FileSpan, [core.int], [core.int]),
    location: dart.fnType(src__file.FileLocation, [core.int]),
    getLine: dart.fnType(core.int, [core.int]),
    [_isNearCachedLine]: dart.fnType(core.bool, [core.int]),
    [_binarySearch]: dart.fnType(core.int, [core.int]),
    getColumn: dart.fnType(core.int, [core.int], {line: core.int}),
    getOffset: dart.fnType(core.int, [core.int], [core.int]),
    getText: dart.fnType(core.String, [core.int], [core.int])
  }));
  dart.setGetterSignature(src__file.SourceFile, () => ({
    __proto__: dart.getGetters(src__file.SourceFile.__proto__),
    length: dart.fnType(core.int, []),
    lines: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__file.SourceFile, () => ({
    __proto__: dart.getFields(src__file.SourceFile.__proto__),
    url: dart.finalFieldType(core.Uri),
    [_lineStarts]: dart.finalFieldType(ListOfint()),
    [_decodedChars]: dart.finalFieldType(typed_data.Uint32List),
    [_cachedLine]: dart.fieldType(core.int)
  }));
  src__file.FileLocation = class FileLocation extends src__location_mixin.SourceLocationMixin {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get sourceUrl() {
      return this.file.url;
    }
    get line() {
      return this.file.getLine(this.offset);
    }
    get column() {
      return this.file.getColumn(this.offset);
    }
    pointSpan() {
      return new src__file._FileSpan.new(this.file, this.offset, this.offset);
    }
  };
  (src__file.FileLocation.__ = function(file, offset) {
    this[file$] = file;
    this[offset$] = offset;
    if (dart.notNull(this.offset) < 0) {
      dart.throw(new core.RangeError.new(dart.str`Offset may not be negative, was ${this.offset}.`));
    } else if (dart.notNull(this.offset) > dart.notNull(this.file.length)) {
      dart.throw(new core.RangeError.new(dart.str`Offset ${this.offset} must not be greater than the number ` + dart.str`of characters in the file, ${this.file.length}.`));
    }
  }).prototype = src__file.FileLocation.prototype;
  dart.addTypeTests(src__file.FileLocation);
  const file$ = Symbol("FileLocation.file");
  const offset$ = Symbol("FileLocation.offset");
  src__file.FileLocation[dart.implements] = () => [src__location.SourceLocation];
  dart.setMethodSignature(src__file.FileLocation, () => ({
    __proto__: dart.getMethods(src__file.FileLocation.__proto__),
    pointSpan: dart.fnType(src__file.FileSpan, [])
  }));
  dart.setGetterSignature(src__file.FileLocation, () => ({
    __proto__: dart.getGetters(src__file.FileLocation.__proto__),
    sourceUrl: dart.fnType(core.Uri, []),
    line: dart.fnType(core.int, []),
    column: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__file.FileLocation, () => ({
    __proto__: dart.getFields(src__file.FileLocation.__proto__),
    file: dart.finalFieldType(src__file.SourceFile),
    offset: dart.finalFieldType(core.int)
  }));
  src__file.FileSpan = class FileSpan extends core.Object {};
  (src__file.FileSpan.new = function() {
  }).prototype = src__file.FileSpan.prototype;
  dart.addTypeTests(src__file.FileSpan);
  src__file.FileSpan[dart.implements] = () => [src__span_with_context.SourceSpanWithContext];
  const _start = Symbol('_start');
  const _end = Symbol('_end');
  src__file._FileSpan = class _FileSpan extends src__span_mixin.SourceSpanMixin {
    get sourceUrl() {
      return this.file.url;
    }
    get length() {
      return dart.notNull(this[_end]) - dart.notNull(this[_start]);
    }
    get start() {
      return new src__file.FileLocation.__(this.file, this[_start]);
    }
    get end() {
      return new src__file.FileLocation.__(this.file, this[_end]);
    }
    get text() {
      return this.file.getText(this[_start], this[_end]);
    }
    get context() {
      return this.file.getText(this.file.getOffset(this.start.line), this.end.line === dart.notNull(this.file.lines) - 1 ? null : this.file.getOffset(dart.notNull(this.end.line) + 1));
    }
    compareTo(other) {
      src__span.SourceSpan._check(other);
      if (!src__file._FileSpan.is(other)) return super.compareTo(other);
      let otherFile = src__file._FileSpan._check(other);
      let result = this[_start][$compareTo](otherFile[_start]);
      return result === 0 ? this[_end][$compareTo](otherFile[_end]) : result;
    }
    union(other) {
      if (!src__file.FileSpan.is(other)) return super.union(other);
      let span = src__file._FileSpan._check(this.expand(src__file.FileSpan._check(other)));
      if (src__file._FileSpan.is(other)) {
        if (dart.notNull(this[_start]) > dart.notNull(other[_end]) || dart.notNull(other[_start]) > dart.notNull(this[_end])) {
          dart.throw(new core.ArgumentError.new(dart.str`Spans ${this} and ${other} are disjoint.`));
        }
      } else {
        if (dart.notNull(this[_start]) > dart.notNull(other.end.offset) || dart.notNull(other.start.offset) > dart.notNull(this[_end])) {
          dart.throw(new core.ArgumentError.new(dart.str`Spans ${this} and ${other} are disjoint.`));
        }
      }
      return span;
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__file.FileSpan.is(other)) return super._equals(other);
      if (!src__file._FileSpan.is(other)) {
        return super._equals(other) && dart.equals(this.sourceUrl, dart.dload(other, 'sourceUrl'));
      }
      return core.identical(this[_start], dart.dload(other, _start)) && core.identical(this[_end], dart.dload(other, _end)) && dart.equals(this.sourceUrl, dart.dload(other, 'sourceUrl'));
    }
    get hashCode() {
      return super.hashCode;
    }
    expand(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new(dart.str`Source URLs "${this.sourceUrl}" and ` + dart.str` "${other.sourceUrl}" don't match.`));
      }
      if (src__file._FileSpan.is(other)) {
        let start = math.min(core.int, this[_start], other[_start]);
        let end = math.max(core.int, this[_end], other[_end]);
        return new src__file._FileSpan.new(this.file, start, end);
      } else {
        let start = math.min(core.int, this[_start], other.start.offset);
        let end = math.max(core.int, this[_end], other.end.offset);
        return new src__file._FileSpan.new(this.file, start, end);
      }
    }
  };
  (src__file._FileSpan.new = function(file, start, end) {
    this.file = file;
    this[_start] = start;
    this[_end] = end;
    if (dart.notNull(this[_end]) < dart.notNull(this[_start])) {
      dart.throw(new core.ArgumentError.new(dart.str`End ${this[_end]} must come after start ${this[_start]}.`));
    } else if (dart.notNull(this[_end]) > dart.notNull(this.file.length)) {
      dart.throw(new core.RangeError.new(dart.str`End ${this[_end]} must not be greater than the number ` + dart.str`of characters in the file, ${this.file.length}.`));
    } else if (dart.notNull(this[_start]) < 0) {
      dart.throw(new core.RangeError.new(dart.str`Start may not be negative, was ${this[_start]}.`));
    }
  }).prototype = src__file._FileSpan.prototype;
  dart.addTypeTests(src__file._FileSpan);
  src__file._FileSpan[dart.implements] = () => [src__file.FileSpan];
  dart.setMethodSignature(src__file._FileSpan, () => ({
    __proto__: dart.getMethods(src__file._FileSpan.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    expand: dart.fnType(src__file.FileSpan, [src__file.FileSpan])
  }));
  dart.setGetterSignature(src__file._FileSpan, () => ({
    __proto__: dart.getGetters(src__file._FileSpan.__proto__),
    start: dart.fnType(src__file.FileLocation, []),
    end: dart.fnType(src__file.FileLocation, []),
    text: dart.fnType(core.String, []),
    context: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__file._FileSpan, () => ({
    __proto__: dart.getFields(src__file._FileSpan.__proto__),
    file: dart.finalFieldType(src__file.SourceFile),
    [_start]: dart.finalFieldType(core.int),
    [_end]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__file._FileSpan, ['compareTo', '_equals']);
  dart.defineExtensionAccessors(src__file._FileSpan, ['hashCode']);
  dart.trackLibraries("packages/source_span/src/file.ddc", {
    "package:source_span/src/file.dart": src__file
  }, '{"version":3,"sourceRoot":"","sources":["file.dart"],"names":[],"mappings":"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","file":"file.ddc.js"}');
  // Exports:
  return {
    src__file: src__file
  };
});

//# sourceMappingURL=file.ddc.js.map
