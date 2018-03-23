define(['dart_sdk', 'packages/source_span/src/utils', 'packages/path/path'], function(dart_sdk, utils, path) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const path$ = path.path;
  const _root = Object.create(null);
  const src__span_with_context = Object.create(_root);
  const src__span_mixin = Object.create(_root);
  const src__span = Object.create(_root);
  const src__location = Object.create(_root);
  const $contains = dartx.contains;
  const $substring = dartx.substring;
  const $isEmpty = dartx.isEmpty;
  const $indexOf = dartx.indexOf;
  const $first = dartx.first;
  const $split = dartx.split;
  const $endsWith = dartx.endsWith;
  const $codeUnitAt = dartx.codeUnitAt;
  const $times = dartx['*'];
  const $runtimeType = dartx.runtimeType;
  const $compareTo = dartx.compareTo;
  const $abs = dartx.abs;
  let ComparableOfSourceSpan = () => (ComparableOfSourceSpan = dart.constFn(core.Comparable$(src__span.SourceSpan)))();
  let ComparableOfSourceLocation = () => (ComparableOfSourceLocation = dart.constFn(core.Comparable$(src__location.SourceLocation)))();
  const _context = Symbol('_context');
  src__span_mixin.SourceSpanMixin = class SourceSpanMixin extends core.Object {
    get sourceUrl() {
      return this.start.sourceUrl;
    }
    get length() {
      return dart.notNull(this.end.offset) - dart.notNull(this.start.offset);
    }
    compareTo(other) {
      src__span.SourceSpan._check(other);
      let result = this.start.compareTo(other.start);
      return result === 0 ? this.end.compareTo(other.end) : result;
    }
    union(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new(dart.str`Source URLs "${this.sourceUrl}" and ` + dart.str` "${other.sourceUrl}" don't match.`));
      }
      let start = src__utils.min(this.start, other.start);
      let end = src__utils.max(this.end, other.end);
      let beginSpan = dart.equals(start, this.start) ? this : other;
      let endSpan = dart.equals(end, this.end) ? this : other;
      if (dart.notNull(beginSpan.end.compareTo(endSpan.start)) < 0) {
        dart.throw(new core.ArgumentError.new(dart.str`Spans ${this} and ${other} are disjoint.`));
      }
      let text = dart.notNull(beginSpan.text) + endSpan.text[$substring](beginSpan.end.distance(endSpan.start));
      return src__span.SourceSpan.new(src__location.SourceLocation._check(start), src__location.SourceLocation._check(end), text);
    }
    message(message, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let buffer = new core.StringBuffer.new();
      buffer.write(dart.str`line ${dart.notNull(this.start.line) + 1}, column ${dart.notNull(this.start.column) + 1}`);
      if (this.sourceUrl != null) buffer.write(dart.str` of ${path$.prettyUri(this.sourceUrl)}`);
      buffer.write(dart.str`: ${message}`);
      let highlight = this.highlight({color: color});
      if (!highlight[$isEmpty]) {
        buffer.writeln();
        buffer.write(highlight);
      }
      return buffer.toString();
    }
    highlight(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (dart.equals(color, true)) color = "[31m";
      if (dart.equals(color, false)) color = null;
      let column = this.start.column;
      let buffer = new core.StringBuffer.new();
      let textLine = null;
      if (src__span_with_context.SourceSpanWithContext.is(this)) {
        let context = src__span_with_context.SourceSpanWithContext.as(this).context;
        let lineStart = src__utils.findLineStart(context, this.text, column);
        if (lineStart != null && dart.notNull(lineStart) > 0) {
          buffer.write(context[$substring](0, lineStart));
          context = context[$substring](lineStart);
        }
        let endIndex = context[$indexOf]('\n');
        textLine = endIndex === -1 ? context : context[$substring](0, endIndex + 1);
        column = math.min(core.int, column, textLine.length);
      } else if (this.length === 0) {
        return "";
      } else {
        textLine = this.text[$split]("\n")[$first];
        column = 0;
      }
      let toColumn = math.min(core.int, dart.notNull(column) + dart.notNull(this.end.offset) - dart.notNull(this.start.offset), textLine.length);
      if (color != null) {
        buffer.write(textLine[$substring](0, column));
        buffer.write(color);
        buffer.write(textLine[$substring](column, toColumn));
        buffer.write("[0m");
        buffer.write(textLine[$substring](toColumn));
      } else {
        buffer.write(textLine);
      }
      if (!textLine[$endsWith]('\n')) buffer.write('\n');
      for (let i = 0; i < dart.notNull(column); i++) {
        if (textLine[$codeUnitAt](i) === 9) {
          buffer.writeCharCode(9);
        } else {
          buffer.writeCharCode(32);
        }
      }
      if (color != null) buffer.write(color);
      buffer.write('^'[$times](math.max(core.int, toColumn - dart.notNull(column), 1)));
      if (color != null) buffer.write("[0m");
      return buffer.toString();
    }
    _equals(other) {
      if (other == null) return false;
      return src__span.SourceSpan.is(other) && dart.equals(this.start, other.start) && dart.equals(this.end, other.end);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.start)) + 31 * dart.notNull(dart.hashCode(this.end));
    }
    toString() {
      return dart.str`<${this[$runtimeType]}: from ${this.start} to ${this.end} "${this.text}">`;
    }
  };
  (src__span_mixin.SourceSpanMixin.new = function() {
  }).prototype = src__span_mixin.SourceSpanMixin.prototype;
  dart.addTypeTests(src__span_mixin.SourceSpanMixin);
  src__span_mixin.SourceSpanMixin[dart.implements] = () => [src__span.SourceSpan];
  dart.setMethodSignature(src__span_mixin.SourceSpanMixin, () => ({
    __proto__: dart.getMethods(src__span_mixin.SourceSpanMixin.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    union: dart.fnType(src__span.SourceSpan, [src__span.SourceSpan]),
    message: dart.fnType(core.String, [core.String], {color: dart.dynamic}),
    highlight: dart.fnType(core.String, [], {color: dart.dynamic})
  }));
  dart.setGetterSignature(src__span_mixin.SourceSpanMixin, () => ({
    __proto__: dart.getGetters(src__span_mixin.SourceSpanMixin.__proto__),
    sourceUrl: dart.fnType(core.Uri, []),
    length: dart.fnType(core.int, [])
  }));
  dart.defineExtensionMethods(src__span_mixin.SourceSpanMixin, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__span_mixin.SourceSpanMixin, ['hashCode']);
  src__span.SourceSpanBase = class SourceSpanBase extends src__span_mixin.SourceSpanMixin {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (src__span.SourceSpanBase.new = function(start, end, text) {
    this[start$] = start;
    this[end$] = end;
    this[text$] = text;
    if (!dart.equals(this.end.sourceUrl, this.start.sourceUrl)) {
      dart.throw(new core.ArgumentError.new(dart.str`Source URLs "${this.start.sourceUrl}" and ` + dart.str` "${this.end.sourceUrl}" don't match.`));
    } else if (dart.notNull(this.end.offset) < dart.notNull(this.start.offset)) {
      dart.throw(new core.ArgumentError.new(dart.str`End ${this.end} must come after start ${this.start}.`));
    } else if (this.text.length !== this.start.distance(this.end)) {
      dart.throw(new core.ArgumentError.new(dart.str`Text "${this.text}" must be ${this.start.distance(this.end)} ` + 'characters long.'));
    }
  }).prototype = src__span.SourceSpanBase.prototype;
  dart.addTypeTests(src__span.SourceSpanBase);
  const start$ = Symbol("SourceSpanBase.start");
  const end$ = Symbol("SourceSpanBase.end");
  const text$ = Symbol("SourceSpanBase.text");
  dart.setFieldSignature(src__span.SourceSpanBase, () => ({
    __proto__: dart.getFields(src__span.SourceSpanBase.__proto__),
    start: dart.finalFieldType(src__location.SourceLocation),
    end: dart.finalFieldType(src__location.SourceLocation),
    text: dart.finalFieldType(core.String)
  }));
  src__span_with_context.SourceSpanWithContext = class SourceSpanWithContext extends src__span.SourceSpanBase {
    get context() {
      return this[_context];
    }
  };
  (src__span_with_context.SourceSpanWithContext.new = function(start, end, text, context) {
    this[_context] = context;
    src__span_with_context.SourceSpanWithContext.__proto__.new.call(this, start, end, text);
    if (!this.context[$contains](text)) {
      dart.throw(new core.ArgumentError.new(dart.str`The context line "${this.context}" must contain "${text}".`));
    }
    if (src__utils.findLineStart(this.context, text, start.column) == null) {
      dart.throw(new core.ArgumentError.new(dart.str`The span text "${text}" must start at ` + dart.str`column ${dart.notNull(start.column) + 1} in a line within "${this.context}".`));
    }
  }).prototype = src__span_with_context.SourceSpanWithContext.prototype;
  dart.addTypeTests(src__span_with_context.SourceSpanWithContext);
  dart.setGetterSignature(src__span_with_context.SourceSpanWithContext, () => ({
    __proto__: dart.getGetters(src__span_with_context.SourceSpanWithContext.__proto__),
    context: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__span_with_context.SourceSpanWithContext, () => ({
    __proto__: dart.getFields(src__span_with_context.SourceSpanWithContext.__proto__),
    [_context]: dart.finalFieldType(core.String)
  }));
  src__span.SourceSpan = class SourceSpan extends core.Object {
    get start() {
      return this[start];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end];
    }
    set end(value) {
      super.end = value;
    }
    get text() {
      return this[text];
    }
    set text(value) {
      super.text = value;
    }
    get sourceUrl() {
      return this[sourceUrl];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get length() {
      return this[length];
    }
    set length(value) {
      super.length = value;
    }
    static new(start, end, text) {
      return new src__span.SourceSpanBase.new(start, end, text);
    }
  };
  (src__span.SourceSpan[dart.mixinNew] = function() {
    this[start] = null;
    this[end] = null;
    this[text] = null;
    this[sourceUrl] = null;
    this[length] = null;
  }).prototype = src__span.SourceSpan.prototype;
  dart.addTypeTests(src__span.SourceSpan);
  const start = Symbol("SourceSpan.start");
  const end = Symbol("SourceSpan.end");
  const text = Symbol("SourceSpan.text");
  const sourceUrl = Symbol("SourceSpan.sourceUrl");
  const length = Symbol("SourceSpan.length");
  src__span.SourceSpan[dart.implements] = () => [ComparableOfSourceSpan()];
  dart.setFieldSignature(src__span.SourceSpan, () => ({
    __proto__: dart.getFields(src__span.SourceSpan.__proto__),
    start: dart.finalFieldType(src__location.SourceLocation),
    end: dart.finalFieldType(src__location.SourceLocation),
    text: dart.finalFieldType(core.String),
    sourceUrl: dart.finalFieldType(core.Uri),
    length: dart.finalFieldType(core.int)
  }));
  src__location.SourceLocation = class SourceLocation extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
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
    get toolString() {
      let source = this.sourceUrl == null ? 'unknown source' : this.sourceUrl;
      return dart.str`${source}:${dart.notNull(this.line) + 1}:${dart.notNull(this.column) + 1}`;
    }
    distance(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new(dart.str`Source URLs "${this.sourceUrl}" and ` + dart.str`"${other.sourceUrl}" don't match.`));
      }
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$abs]();
    }
    pointSpan() {
      return src__span.SourceSpan.new(this, this, "");
    }
    compareTo(other) {
      src__location.SourceLocation._check(other);
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new(dart.str`Source URLs "${this.sourceUrl}" and ` + dart.str`"${other.sourceUrl}" don't match.`));
      }
      return dart.notNull(this.offset) - dart.notNull(other.offset);
    }
    _equals(other) {
      if (other == null) return false;
      return src__location.SourceLocation.is(other) && dart.equals(this.sourceUrl, other.sourceUrl) && this.offset == other.offset;
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.sourceUrl)) + dart.notNull(this.offset);
    }
    toString() {
      return dart.str`<${this[$runtimeType]}: ${this.offset} ${this.toolString}>`;
    }
  };
  (src__location.SourceLocation.new = function(offset, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let column = opts && 'column' in opts ? opts.column : null;
    this[sourceUrl$] = core.Uri._check(typeof sourceUrl == 'string' ? core.Uri.parse(sourceUrl) : sourceUrl);
    this[offset$] = offset;
    this[line$] = line == null ? 0 : line;
    this[column$] = column == null ? offset : column;
    if (dart.notNull(offset) < 0) {
      dart.throw(new core.RangeError.new(dart.str`Offset may not be negative, was ${offset}.`));
    } else if (line != null && dart.notNull(line) < 0) {
      dart.throw(new core.RangeError.new(dart.str`Line may not be negative, was ${line}.`));
    } else if (column != null && dart.notNull(column) < 0) {
      dart.throw(new core.RangeError.new(dart.str`Column may not be negative, was ${column}.`));
    }
  }).prototype = src__location.SourceLocation.prototype;
  dart.addTypeTests(src__location.SourceLocation);
  const sourceUrl$ = Symbol("SourceLocation.sourceUrl");
  const offset$ = Symbol("SourceLocation.offset");
  const line$ = Symbol("SourceLocation.line");
  const column$ = Symbol("SourceLocation.column");
  src__location.SourceLocation[dart.implements] = () => [ComparableOfSourceLocation()];
  dart.setMethodSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getMethods(src__location.SourceLocation.__proto__),
    distance: dart.fnType(core.int, [src__location.SourceLocation]),
    pointSpan: dart.fnType(src__span.SourceSpan, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getGetters(src__location.SourceLocation.__proto__),
    toolString: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getFields(src__location.SourceLocation.__proto__),
    sourceUrl: dart.finalFieldType(core.Uri),
    offset: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__location.SourceLocation, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__location.SourceLocation, ['hashCode']);
  src__location.SourceLocationBase = class SourceLocationBase extends src__location.SourceLocation {};
  (src__location.SourceLocationBase.new = function(offset, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let column = opts && 'column' in opts ? opts.column : null;
    src__location.SourceLocationBase.__proto__.new.call(this, offset, {sourceUrl: sourceUrl, line: line, column: column});
  }).prototype = src__location.SourceLocationBase.prototype;
  dart.addTypeTests(src__location.SourceLocationBase);
  dart.trackLibraries("packages/source_span/src/location.ddc", {
    "package:source_span/src/span_with_context.dart": src__span_with_context,
    "package:source_span/src/span_mixin.dart": src__span_mixin,
    "package:source_span/src/span.dart": src__span,
    "package:source_span/src/location.dart": src__location
  }, '{"version":3,"sourceRoot":"","sources":["span_mixin.dart","span.dart","span_with_context.dart","location.dart"],"names":[],"mappings":"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","file":"location.ddc.js"}');
  // Exports:
  return {
    src__span_with_context: src__span_with_context,
    src__span_mixin: src__span_mixin,
    src__span: src__span,
    src__location: src__location
  };
});

//# sourceMappingURL=location.ddc.js.map
