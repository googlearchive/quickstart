define(['dart_sdk', 'packages/source_span/src/file', 'packages/string_scanner/src/utils', 'packages/string_scanner/src/exception', 'packages/string_scanner/src/string_scanner', 'packages/string_scanner/src/line_scanner'], function(dart_sdk, file, utils, exception, string_scanner, line_scanner) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__file = file.src__file;
  const src__utils = utils.src__utils;
  const src__exception = exception.src__exception;
  const src__string_scanner = string_scanner.src__string_scanner;
  const src__line_scanner = line_scanner.src__line_scanner;
  const _root = Object.create(null);
  const src__eager_span_scanner = Object.create(_root);
  const src__relative_span_scanner = Object.create(_root);
  const src__span_scanner = Object.create(_root);
  const $substring = dartx.substring;
  const $length = dartx.length;
  const $isEmpty = dartx.isEmpty;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $lastIndexOf = dartx.lastIndexOf;
  const $toList = dartx.toList;
  dart.defineLazy(src__eager_span_scanner, {
    /*src__eager_span_scanner._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n?|\\n");
    }
  });
  const _line = Symbol('_line');
  const _column = Symbol('_column');
  const _betweenCRLF = Symbol('_betweenCRLF');
  const _scanner = Symbol('_scanner');
  const _newlinesIn = Symbol('_newlinesIn');
  const _adjustLineAndColumn = Symbol('_adjustLineAndColumn');
  const _sourceFile = Symbol('_sourceFile');
  const _lastSpan = Symbol('_lastSpan');
  const _scanner$ = Symbol('_scanner');
  src__span_scanner.SpanScanner = class SpanScanner extends src__string_scanner.StringScanner {
    get line() {
      return this[_sourceFile].getLine(this.position);
    }
    get column() {
      return this[_sourceFile].getColumn(this.position);
    }
    get state() {
      return new src__span_scanner._SpanScannerState.new(this, this.position);
    }
    set state(state) {
      if (!src__span_scanner._SpanScannerState.is(state) || !(src__span_scanner._SpanScannerState.as(state)[_scanner$] === this)) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      this.position = state.position;
    }
    get lastSpan() {
      if (this.lastMatch == null) this[_lastSpan] = null;
      return this[_lastSpan];
    }
    get location() {
      return this[_sourceFile].location(this.position);
    }
    get emptySpan() {
      return this.location.pointSpan();
    }
    static eager(string, opts) {
      return new src__eager_span_scanner.EagerSpanScanner.new(string, opts);
    }
    static within(span) {
      return new src__relative_span_scanner.RelativeSpanScanner.new(span);
    }
    spanFrom(startState, endState) {
      if (endState === void 0) endState = null;
      let endPosition = endState == null ? this.position : endState.position;
      return this[_sourceFile].span(startState.position, endPosition);
    }
    matches(pattern) {
      if (!dart.test(super.matches(pattern))) {
        this[_lastSpan] = null;
        return false;
      }
      this[_lastSpan] = this[_sourceFile].span(this.position, this.lastMatch.end);
      return true;
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
      let span = this[_sourceFile].span(position, dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
  };
  (src__span_scanner.SpanScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_lastSpan] = null;
    this[_sourceFile] = new src__file.SourceFile.fromString(string, {url: sourceUrl});
    src__span_scanner.SpanScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
  }).prototype = src__span_scanner.SpanScanner.prototype;
  dart.addTypeTests(src__span_scanner.SpanScanner);
  src__span_scanner.SpanScanner[dart.implements] = () => [src__line_scanner.LineScanner];
  dart.setMethodSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getMethods(src__span_scanner.SpanScanner.__proto__),
    spanFrom: dart.fnType(src__file.FileSpan, [src__line_scanner.LineScannerState], [src__line_scanner.LineScannerState])
  }));
  dart.setGetterSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getGetters(src__span_scanner.SpanScanner.__proto__),
    line: dart.fnType(core.int, []),
    column: dart.fnType(core.int, []),
    state: dart.fnType(src__line_scanner.LineScannerState, []),
    lastSpan: dart.fnType(src__file.FileSpan, []),
    location: dart.fnType(src__file.FileLocation, []),
    emptySpan: dart.fnType(src__file.FileSpan, [])
  }));
  dart.setSetterSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getSetters(src__span_scanner.SpanScanner.__proto__),
    state: dart.fnType(dart.void, [src__line_scanner.LineScannerState])
  }));
  dart.setFieldSignature(src__span_scanner.SpanScanner, () => ({
    __proto__: dart.getFields(src__span_scanner.SpanScanner.__proto__),
    [_sourceFile]: dart.finalFieldType(src__file.SourceFile),
    [_lastSpan]: dart.fieldType(src__file.FileSpan)
  }));
  src__eager_span_scanner.EagerSpanScanner = class EagerSpanScanner extends src__span_scanner.SpanScanner {
    get line() {
      return this[_line];
    }
    get column() {
      return this[_column];
    }
    get state() {
      return new src__eager_span_scanner._EagerSpanScannerState.new(this, this.position, this.line, this.column);
    }
    get [_betweenCRLF]() {
      return this.peekChar(-1) === 13 && this.peekChar() === 10;
    }
    set state(state) {
      if (!src__eager_span_scanner._EagerSpanScannerState.is(state) || !(src__eager_span_scanner._EagerSpanScannerState.as(state)[_scanner] === this)) {
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
          this[_column] = dart.notNull(newPosition) - this.string[$lastIndexOf](src__eager_span_scanner._newlineRegExp, newPosition) - 1;
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
      let newlines = src__eager_span_scanner._newlineRegExp.allMatches(text)[$toList]();
      if (dart.test(this[_betweenCRLF])) newlines[$removeLast]();
      return newlines;
    }
  };
  (src__eager_span_scanner.EagerSpanScanner.new = function(string, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this[_line] = 0;
    this[_column] = 0;
    src__eager_span_scanner.EagerSpanScanner.__proto__.new.call(this, string, {sourceUrl: sourceUrl, position: position});
  }).prototype = src__eager_span_scanner.EagerSpanScanner.prototype;
  dart.addTypeTests(src__eager_span_scanner.EagerSpanScanner);
  dart.setMethodSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getMethods(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_adjustLineAndColumn]: dart.fnType(dart.void, [core.int]),
    [_newlinesIn]: dart.fnType(core.List$(core.Match), [core.String])
  }));
  dart.setGetterSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getGetters(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_betweenCRLF]: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__eager_span_scanner.EagerSpanScanner, () => ({
    __proto__: dart.getFields(src__eager_span_scanner.EagerSpanScanner.__proto__),
    [_line]: dart.fieldType(core.int),
    [_column]: dart.fieldType(core.int)
  }));
  src__eager_span_scanner._EagerSpanScannerState = class _EagerSpanScannerState extends core.Object {};
  (src__eager_span_scanner._EagerSpanScannerState.new = function(scanner, position, line, column) {
    this[_scanner] = scanner;
    this.position = position;
    this.line = line;
    this.column = column;
  }).prototype = src__eager_span_scanner._EagerSpanScannerState.prototype;
  dart.addTypeTests(src__eager_span_scanner._EagerSpanScannerState);
  src__eager_span_scanner._EagerSpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setFieldSignature(src__eager_span_scanner._EagerSpanScannerState, () => ({
    __proto__: dart.getFields(src__eager_span_scanner._EagerSpanScannerState.__proto__),
    [_scanner]: dart.finalFieldType(src__eager_span_scanner.EagerSpanScanner),
    position: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  const _sourceFile$ = Symbol('_sourceFile');
  const _startLocation = Symbol('_startLocation');
  const _lastSpan$ = Symbol('_lastSpan');
  const _scanner$0 = Symbol('_scanner');
  src__relative_span_scanner.RelativeSpanScanner = class RelativeSpanScanner extends src__string_scanner.StringScanner {
    get line() {
      return dart.notNull(this[_sourceFile$].getLine(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position))) - dart.notNull(this[_startLocation].line);
    }
    get column() {
      let line = this[_sourceFile$].getLine(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position));
      let column = this[_sourceFile$].getColumn(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position), {line: line});
      return line == this[_startLocation].line ? dart.notNull(column) - dart.notNull(this[_startLocation].column) : column;
    }
    get state() {
      return new src__relative_span_scanner._SpanScannerState.new(this, this.position);
    }
    set state(state) {
      if (!src__relative_span_scanner._SpanScannerState.is(state) || !(src__relative_span_scanner._SpanScannerState.as(state)[_scanner$0] === this)) {
        dart.throw(new core.ArgumentError.new("The given LineScannerState was not returned by " + "this LineScanner."));
      }
      this.position = state.position;
    }
    get lastSpan() {
      return this[_lastSpan$];
    }
    get location() {
      return this[_sourceFile$].location(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position));
    }
    get emptySpan() {
      return this.location.pointSpan();
    }
    spanFrom(startState, endState) {
      if (endState === void 0) endState = null;
      let endPosition = endState == null ? this.position : endState.position;
      return this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(startState.position), dart.notNull(this[_startLocation].offset) + dart.notNull(endPosition));
    }
    matches(pattern) {
      if (!dart.test(super.matches(pattern))) {
        this[_lastSpan$] = null;
        return false;
      }
      this[_lastSpan$] = this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(this.position), dart.notNull(this[_startLocation].offset) + dart.notNull(this.lastMatch.end));
      return true;
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
      if (length == null) length = match == null ? 1 : dart.notNull(match.end) - dart.notNull(match.start);
      let span = this[_sourceFile$].span(dart.notNull(this[_startLocation].offset) + dart.notNull(position), dart.notNull(this[_startLocation].offset) + dart.notNull(position) + dart.notNull(length));
      dart.throw(new src__exception.StringScannerException.new(message, span, this.string));
    }
  };
  (src__relative_span_scanner.RelativeSpanScanner.new = function(span) {
    this[_lastSpan$] = null;
    this[_sourceFile$] = span.file;
    this[_startLocation] = span.start;
    src__relative_span_scanner.RelativeSpanScanner.__proto__.new.call(this, span.text, {sourceUrl: span.sourceUrl});
  }).prototype = src__relative_span_scanner.RelativeSpanScanner.prototype;
  dart.addTypeTests(src__relative_span_scanner.RelativeSpanScanner);
  src__relative_span_scanner.RelativeSpanScanner[dart.implements] = () => [src__span_scanner.SpanScanner];
  dart.setMethodSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getMethods(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    spanFrom: dart.fnType(src__file.FileSpan, [src__line_scanner.LineScannerState], [src__line_scanner.LineScannerState])
  }));
  dart.setGetterSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getGetters(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    line: dart.fnType(core.int, []),
    column: dart.fnType(core.int, []),
    state: dart.fnType(src__line_scanner.LineScannerState, []),
    lastSpan: dart.fnType(src__file.FileSpan, []),
    location: dart.fnType(src__file.FileLocation, []),
    emptySpan: dart.fnType(src__file.FileSpan, [])
  }));
  dart.setSetterSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getSetters(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    state: dart.fnType(dart.void, [src__line_scanner.LineScannerState])
  }));
  dart.setFieldSignature(src__relative_span_scanner.RelativeSpanScanner, () => ({
    __proto__: dart.getFields(src__relative_span_scanner.RelativeSpanScanner.__proto__),
    [_sourceFile$]: dart.finalFieldType(src__file.SourceFile),
    [_startLocation]: dart.finalFieldType(src__file.FileLocation),
    [_lastSpan$]: dart.fieldType(src__file.FileSpan)
  }));
  src__relative_span_scanner._SpanScannerState = class _SpanScannerState extends core.Object {
    get line() {
      return this[_scanner$0][_sourceFile$].getLine(this.position);
    }
    get column() {
      return this[_scanner$0][_sourceFile$].getColumn(this.position);
    }
  };
  (src__relative_span_scanner._SpanScannerState.new = function(scanner, position) {
    this[_scanner$0] = scanner;
    this.position = position;
  }).prototype = src__relative_span_scanner._SpanScannerState.prototype;
  dart.addTypeTests(src__relative_span_scanner._SpanScannerState);
  src__relative_span_scanner._SpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setGetterSignature(src__relative_span_scanner._SpanScannerState, () => ({
    __proto__: dart.getGetters(src__relative_span_scanner._SpanScannerState.__proto__),
    line: dart.fnType(core.int, []),
    column: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__relative_span_scanner._SpanScannerState, () => ({
    __proto__: dart.getFields(src__relative_span_scanner._SpanScannerState.__proto__),
    [_scanner$0]: dart.finalFieldType(src__relative_span_scanner.RelativeSpanScanner),
    position: dart.finalFieldType(core.int)
  }));
  src__span_scanner._SpanScannerState = class _SpanScannerState extends core.Object {
    get line() {
      return this[_scanner$][_sourceFile].getLine(this.position);
    }
    get column() {
      return this[_scanner$][_sourceFile].getColumn(this.position);
    }
  };
  (src__span_scanner._SpanScannerState.new = function(scanner, position) {
    this[_scanner$] = scanner;
    this.position = position;
  }).prototype = src__span_scanner._SpanScannerState.prototype;
  dart.addTypeTests(src__span_scanner._SpanScannerState);
  src__span_scanner._SpanScannerState[dart.implements] = () => [src__line_scanner.LineScannerState];
  dart.setGetterSignature(src__span_scanner._SpanScannerState, () => ({
    __proto__: dart.getGetters(src__span_scanner._SpanScannerState.__proto__),
    line: dart.fnType(core.int, []),
    column: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__span_scanner._SpanScannerState, () => ({
    __proto__: dart.getFields(src__span_scanner._SpanScannerState.__proto__),
    [_scanner$]: dart.finalFieldType(src__span_scanner.SpanScanner),
    position: dart.finalFieldType(core.int)
  }));
  dart.trackLibraries("packages/string_scanner/src/eager_span_scanner.ddc", {
    "package:string_scanner/src/eager_span_scanner.dart": src__eager_span_scanner,
    "package:string_scanner/src/relative_span_scanner.dart": src__relative_span_scanner,
    "package:string_scanner/src/span_scanner.dart": src__span_scanner
  }, '{"version":3,"sourceRoot":"","sources":["eager_span_scanner.dart","span_scanner.dart","relative_span_scanner.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;MAaM,sCAAc;YAAG,AAAI,gBAAM,CAAC;;;;;;;;;;;;;;YCQhB,kBAAW,QAAQ,CAAC,aAAQ;IAAC;;YAC3B,kBAAW,UAAU,CAAC,aAAQ;IAAC;;YAEnB,KAAI,uCAAiB,CAAC,MAAM,aAAQ;IAAC;cAEzD,KAAsB;AAC9B,kDAAI,KAAK,OACJ,uCAAW,KAAK,YAA+B,KAAE,OAAO;AAC3D,mBAAM,IAAI,sBAAa,CAAC,oDACpB;;AAGN,mBAAa,GAAG,KAAK,SAAS;IAChC;;AAOE,UAAI,cAAS,IAAI,MAAM,eAAS,GAAG;AACnC,YAAO,gBAAS;IAClB;;YAI6B,kBAAW,SAAS,CAAC,aAAQ;IAAC;;YAGjC,cAAQ,UAAU;IAAE;iBAsBpB,MAAa;AACnC,8DADsB,MAAa;IACnB;kBAQO,IAAa;AAAI,oEAAjB,IAAa;IAAuB;aAI7C,UAA2B,EAAG,QAAyB;+BAAR;AAC/D,UAAI,cAAc,QAAQ,IAAI,OAAO,aAAQ,GAAG,QAAQ,SAAS;AACjE,YAAO,kBAAW,KAAK,CAAC,UAAU,SAAS,EAAE,WAAW;IAC1D;YAEa,OAAe;AAC1B,qBAAK,aAAa,CAAC,OAAO,IAAG;AAC3B,uBAAS,GAAG;AACZ,cAAO;;AAGT,qBAAS,GAAG,iBAAW,KAAK,CAAC,aAAQ,EAAE,cAAS,IAAI;AACpD,YAAO;IACT;UAEW,OAAc;UAAS;UAAW;UAAc;AACzD,kCAAiB,CAAC,WAAM,EAAE,KAAK,EAAE,QAAQ,EAAE,MAAM;AAEjD,UAAI,KAAK,IAAI,QAAQ,QAAQ,IAAI,QAAQ,MAAM,IAAI,MAAM,KAAK,GAAG,cAAS;AAC1E,UAAI,QAAQ,IAAI,MAAM;AACpB,gBAAQ,GAAG,KAAK,IAAI,OAAO,aAAa,GAAG,KAAK,MAAM;;AAExD,UAAI,MAAM,IAAI,MAAM,MAAM,GAAG,KAAK,IAAI,OAAO,IAAc,aAAV,KAAK,IAAI,iBAAG,KAAK,MAAM;AAExE,UAAI,OAAO,iBAAW,KAAK,CAAC,QAAQ,EAAW,aAAT,QAAQ,iBAAG,MAAM;AACvD,iBAAM,IAAI,yCAAsB,CAAC,OAAO,EAAE,IAAI,EAAE,WAAM;IACxD;;gDAtDY,MAAa;QAAG;QAAe;IAblC,eAAS;IAcZ,iBAAW,GAAG,IAAI,+BAAqB,CAAC,MAAM,QAAO,SAAS;AAC9D,2DAAM,MAAM,cAAa,SAAS,YAAY,QAAQ;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;YD1C7C,YAAK;;;YAGH,cAAO;;;YAIrB,KAAI,kDAAsB,CAAC,MAAM,aAAQ,EAAE,SAAI,EAAE,WAAM;IAAC;;YAEnC,AAAoB,cAAZ,CAAC,CAAC,OAAM,EAAG,IAAI,aAAQ,OAAM,EAAG;;cAEvD,KAAsB;AAC9B,6DAAI,KAAK,OACJ,kDAAW,KAAK,WAAoC,KAAE,OAAO;AAChE,mBAAM,IAAI,sBAAa,CAAC,oDACpB;;AAGN,oBAAc,GAAG,KAAK,SAAS;AAC/B,iBAAK,GAAG,KAAK,KAAK;AAClB,mBAAO,GAAG,KAAK,OAAO;IACxB;iBAEa,WAAe;AAC1B,UAAI,cAAc,aAAQ;AAC1B,oBAAc,GAAG,WAAW;AAE5B,UAAgB,aAAZ,WAAW,iBAAG,WAAW,GAAE;AAC7B,YAAI,WAAW,iBAAW,CAAC,WAAM,YAAU,CAAC,WAAW,EAAE,WAAW;AACpE,mBAAK,GA9CX,aA8CM,WAAK,iBAAI,QAAQ,SAAO;AACxB,sBAAI,QAAQ,UAAQ,GAAE;AACpB,uBAAO,GAhDf,aAgDQ,aAAO,KAAgB,aAAZ,WAAW,iBAAG,WAAW;eAC/B;AACL,uBAAO,GAAe,aAAZ,WAAW,iBAAG,QAAQ,OAAK,IAAI;;aAEtC;AACL,YAAI,WAAW,iBAAW,CAAC,WAAM,YAAU,CAAC,WAAW,EAAE,WAAW;AACpE,sBAAI,kBAAY,GAAE,QAAQ,aAAW;AAErC,mBAAK,GAxDX,aAwDM,WAAK,iBAAI,QAAQ,SAAO;AACxB,sBAAI,QAAQ,UAAQ,GAAE;AACpB,uBAAO,GA1Df,aA0DQ,aAAO,KAAgB,aAAZ,WAAW,iBAAG,WAAW;eAC/B;AACL,uBAAO,GAAe,AAC8B,aAD1C,WAAW,IACjB,WAAM,cAAY,CAAC,sCAAc,EAAE,WAAW,IAAI;;;IAG5D;;;;aAKc,SAAa;AACzB,qBAAK,cAAc,CAAC,SAAS,IAAG,MAAO;AACvC,gCAAoB,CAAC,SAAS;AAC9B,YAAO;IACT;;AAGE,UAAI,YAAY,cAAc;AAC9B,gCAAoB,CAAC,SAAS;AAC9B,YAAO,UAAS;IAClB;2BAG0B,SAAa;AACrC,UAAI,SAAS,KAAI,EAAG,IAAK,SAAS,KAAI,EAAG,IAAI,aAAQ,OAAM,EAAG,EAAG;AAC/D,mBAAK,GApFX,aAoFM,WAAK,IAAI;AACT,qBAAO,GAAG;aACL;AACL,qBAAO,GAvFb,aAuFM,aAAO,IAAI;;IAEf;SAEU,OAAe;AACvB,qBAAK,UAAU,CAAC,OAAO,IAAG,MAAO;AAEjC,UAAI,WAAW,iBAAW,CAAC,cAAS,MAAC;AACrC,iBAAK,GA/FT,aA+FI,WAAK,iBAAI,QAAQ,SAAO;AACxB,oBAAI,QAAQ,UAAQ,GAAE;AACpB,qBAAO,GAjGb,aAiGM,aAAO,IAAI,cAAS,MAAC,SAAS;aACzB;AACL,qBAAO,GAAG,AAAoB,cAAX,MAAC,SAAS,gBAAG,QAAQ,OAAK,IAAI;;AAGnD,YAAO;IACT;kBAIwB,IAAW;AACjC,UAAI,WAAW,sCAAc,WAAW,CAAC,IAAI,UAAQ;AACrD,oBAAI,kBAAY,GAAE,QAAQ,aAAW;AACrC,YAAO,SAAQ;IACjB;;2DA7CiB,MAAa;QAAG;QAAe;IAhD5C,WAAK,GAAG;IAGR,aAAO,GAAG;AA8CR,sEAAM,MAAM,cAAa,SAAS,YAAY,QAAQ;EAAC;;;;;;;;;;;;;;;;;iEAsDjC,OAAQ,EAAE,QAAa,EAAE,IAAS,EAAE,MAAW;IAA/C,cAAQ,GAAR,OAAQ;IAAO,aAAQ,GAAR,QAAQ;IAAO,SAAI,GAAJ,IAAI;IAAO,WAAM,GAAN,MAAM;EAAC;;;;;;;;;;;;;;;;YE5FN,cAAtD,kBAAW,QAAQ,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ,mBAChE,oBAAc,KAAK;;;AAGrB,UAAI,OAAO,kBAAW,QAAQ,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ;AAC/D,UAAI,SAAS,kBAAW,UAAU,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ,UACzD,IAAI;AACd,YAAO,KAAI,IAAI,oBAAc,KAAK,GACrB,aAAP,MAAM,iBAAG,oBAAc,OAAO,IAC9B,MAAM;IACd;;YAE8B,KAAI,gDAAiB,CAAC,MAAM,aAAQ;IAAC;cAEzD,KAAsB;AAC9B,2DAAI,KAAK,OACJ,gDAAW,KAAK,aAA+B,KAAE,OAAO;AAC3D,mBAAM,IAAI,sBAAa,CAAC,oDACpB;;AAGN,mBAAa,GAAG,KAAK,SAAS;IAChC;;YAEyB,iBAAS;;;YAI9B,mBAAW,SAAS,CAAuB,aAAtB,oBAAc,OAAO,iBAAG,aAAQ;IAAC;;YAEhC,cAAQ,UAAU;IAAE;aAO5B,UAA2B,EAAG,QAAyB;+BAAR;AAC/D,UAAI,cAAc,QAAQ,IAAI,OAAO,aAAQ,GAAG,QAAQ,SAAS;AACjE,YAAO,mBAAW,KAAK,CACG,aAAtB,oBAAc,OAAO,iBAAG,UAAU,SAAS,GACrB,aAAtB,oBAAc,OAAO,iBAAG,WAAW;IACzC;YAEa,OAAe;AAC1B,qBAAK,aAAa,CAAC,OAAO,IAAG;AAC3B,wBAAS,GAAG;AACZ,cAAO;;AAGT,sBAAS,GAAG,kBAAW,KAAK,CACF,aAAtB,oBAAc,OAAO,iBAAG,aAAQ,GACV,aAAtB,oBAAc,OAAO,iBAAG,cAAS,IAAI;AACzC,YAAO;IACT;UAEW,OAAc;UAAS;UAAW;UAAc;AACzD,kCAAiB,CAAC,WAAM,EAAE,KAAK,EAAE,QAAQ,EAAE,MAAM;AAEjD,UAAI,KAAK,IAAI,QAAQ,QAAQ,IAAI,QAAQ,MAAM,IAAI,MAAM,KAAK,GAAG,cAAS;AAC1E,UAAI,QAAQ,IAAI,MAAM;AACpB,gBAAQ,GAAG,KAAK,IAAI,OAAO,aAAa,GAAG,KAAK,MAAM;;AAExD,UAAI,MAAM,IAAI,MAAM,MAAM,GAAG,KAAK,IAAI,OAAO,IAAc,aAAV,KAAK,IAAI,iBAAG,KAAK,MAAM;AAExE,UAAI,OAAO,kBAAW,KAAK,CACD,aAAtB,oBAAc,OAAO,iBAAG,QAAQ,GACV,AAAW,aAAjC,oBAAc,OAAO,iBAAG,QAAQ,iBAAG,MAAM;AAC7C,iBAAM,IAAI,yCAAsB,CAAC,OAAO,EAAE,IAAI,EAAE,WAAM;IACxD;;iEArCoB,IAAa;IAPxB,gBAAS;IAQZ,kBAAW,GAAG,IAAI,KAAK;IACvB,oBAAc,GAAG,IAAI,MAAM;AAC3B,4EAAM,IAAI,KAAK,cAAa,IAAI,UAAU;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;YA2CjC,iBAAQ,cAAY,QAAQ,CAAC,aAAQ;IAAC;;YACpC,iBAAQ,cAAY,UAAU,CAAC,aAAQ;IAAC;;+DAEnC,OAAQ,EAAE,QAAa;IAAvB,gBAAQ,GAAR,OAAQ;IAAO,aAAQ,GAAR,QAAQ;EAAC;;;;;;;;;;;;;;;YDU/B,gBAAQ,aAAY,QAAQ,CAAC,aAAQ;IAAC;;YACpC,gBAAQ,aAAY,UAAU,CAAC,aAAQ;IAAC;;sDAEnC,OAAQ,EAAE,QAAa;IAAvB,eAAQ,GAAR,OAAQ;IAAO,aAAQ,GAAR,QAAQ;EAAC","file":"eager_span_scanner.ddc.js"}');
  // Exports:
  return {
    src__eager_span_scanner: src__eager_span_scanner,
    src__relative_span_scanner: src__relative_span_scanner,
    src__span_scanner: src__span_scanner
  };
});

//# sourceMappingURL=eager_span_scanner.ddc.js.map
