define(['dart_sdk', 'packages/matcher/src/interfaces', 'packages/stack_trace/src/chain'], function(dart_sdk, interfaces, chain) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interfaces = interfaces.src__interfaces;
  const src__frame = chain.src__frame;
  const src__chain = chain.src__chain;
  const _root = Object.create(null);
  const src__util = Object.create(_root);
  const src__pretty_print = Object.create(_root);
  const src__description = Object.create(_root);
  const src__core_matchers = Object.create(_root);
  const $join = dartx.join;
  const $map = dartx.map;
  const $keys = dartx.keys;
  const $clear = dartx.clear;
  const $_set = dartx._set;
  const $addAll = dartx.addAll;
  const $replaceAll = dartx.replaceAll;
  const $_get = dartx._get;
  const $replaceAllMapped = dartx.replaceAllMapped;
  const $runes = dartx.runes;
  const $padLeft = dartx.padLeft;
  const $toUpperCase = dartx.toUpperCase;
  const $toRadixString = dartx.toRadixString;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $replaceRange = dartx.replaceRange;
  const $contains = dartx.contains;
  const $split = dartx.split;
  const $toString = dartx.toString;
  const $startsWith = dartx.startsWith;
  const $runtimeType = dartx.runtimeType;
  const $compareTo = dartx.compareTo;
  const $iterator = dartx.iterator;
  const $toSet = dartx.toSet;
  const $containsKey = dartx.containsKey;
  const $codeUnitAt = dartx.codeUnitAt;
  const $substring = dartx.substring;
  const $indexOf = dartx.indexOf;
  const $any = dartx.any;
  let MapAndMapTovoid = () => (MapAndMapTovoid = dart.constFn(dart.fnType(dart.void, [core.Map, core.Map])))();
  let ObjectTobool = () => (ObjectTobool = dart.constFn(dart.fnType(core.bool, [core.Object])))();
  let NullTobool = () => (NullTobool = dart.constFn(dart.fnType(core.bool, [core.Null])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let dynamicToMatcher = () => (dynamicToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let dynamicToString = () => (dynamicToString = dart.constFn(dart.fnType(core.String, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let dynamicAndintAndSet__ToString = () => (dynamicAndintAndSet__ToString = dart.constFn(dart.fnType(core.String, [dart.dynamic, core.int, core.Set, core.bool])))();
  let dynamic__ToString = () => (dynamic__ToString = dart.constFn(dart.fnType(core.String, [dart.dynamic], {maxLineLength: core.int, maxItems: core.int})))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let dynamic__ToMatcher = () => (dynamic__ToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic], [core.int])))();
  let dynamicAnddynamicAndString__ToListOfString = () => (dynamicAnddynamicAndString__ToListOfString = dart.constFn(dart.fnType(ListOfString(), [dart.dynamic, dart.dynamic, core.String, core.int])))();
  let Fn__ToMatcher = () => (Fn__ToMatcher = dart.constFn(dart.gFnType(T => [src__interfaces.Matcher, [dart.fnType(core.bool, [T])], [core.String]])))();
  let FrameTobool = () => (FrameTobool = dart.constFn(dart.fnType(core.bool, [src__frame.Frame])))();
  src__util._Predicate$ = dart.generic(T => {
    const _Predicate = dart.typedef('_Predicate', () => dart.fnType(core.bool, [T]));
    return _Predicate;
  });
  src__util._Predicate = src__util._Predicate$();
  dart.defineLazy(src__util, {
    /*src__util._escapeMap*/get _escapeMap() {
      return dart.constMap(core.String, core.String, ['\n', '\\n', '\r', '\\r', '\f', '\\f', '\b', '\\b', '\t', '\\t', '\v', '\\v', '', '\\x7F']);
    },
    /*src__util._escapeRegExp*/get _escapeRegExp() {
      return core.RegExp.new(dart.str`[\\x00-\\x07\\x0E-\\x1F${src__util._escapeMap[$keys][$map](core.String, src__util._getHexLiteral)[$join]()}]`);
    }
  });
  src__util.addStateInfo = function(matchState, values) {
    let innerState = core.Map.from(matchState);
    matchState[$clear]();
    matchState[$_set]('state', innerState);
    matchState[$addAll](values);
  };
  dart.fn(src__util.addStateInfo, MapAndMapTovoid());
  src__util.wrapMatcher = function(x) {
    if (src__interfaces.Matcher.is(x)) {
      return x;
    } else if (ObjectTobool().is(x)) {
      return src__core_matchers.predicate(core.Object, x);
    } else if (NullTobool().is(x)) {
      return src__core_matchers.predicate(dart.dynamic, dart.fn(a => core.bool._check(dart.dcall(x, a)), dynamicTobool()));
    } else {
      return src__core_matchers.equals(x);
    }
  };
  dart.fn(src__util.wrapMatcher, dynamicToMatcher());
  src__util.escape = function(str) {
    str = str[$replaceAll]('\\', '\\\\');
    return str[$replaceAllMapped](src__util._escapeRegExp, dart.fn(match => {
      let mapped = src__util._escapeMap[$_get](match._get(0));
      if (mapped != null) return mapped;
      return src__util._getHexLiteral(match._get(0));
    }, MatchToString()));
  };
  dart.fn(src__util.escape, StringToString());
  src__util._getHexLiteral = function(input) {
    let rune = input[$runes].single;
    return '\\x' + rune[$toRadixString](16)[$toUpperCase]()[$padLeft](2, '0');
  };
  dart.fn(src__util._getHexLiteral, StringToString());
  src__pretty_print.prettyPrint = function(object, opts) {
    let maxLineLength = opts && 'maxLineLength' in opts ? opts.maxLineLength : null;
    let maxItems = opts && 'maxItems' in opts ? opts.maxItems : null;
    function _prettyPrint(object, indent, seen, top) {
      if (src__interfaces.Matcher.is(object)) {
        let description = new src__description.StringDescription.new();
        object.describe(description);
        return dart.str`<${description}>`;
      }
      if (dart.test(seen.contains(object))) return "(recursive)";
      seen = seen.union(core.Set.from([object]));
      function pp(child) {
        return _prettyPrint(child, dart.notNull(indent) + 2, seen, false);
      }
      dart.fn(pp, dynamicToString());
      if (core.Iterable.is(object)) {
        let type = core.List.is(object) ? "" : dart.notNull(src__pretty_print._typeName(object)) + ":";
        let strings = object[$map](core.String, pp)[$toList]();
        if (maxItems != null && dart.notNull(strings[$length]) > dart.notNull(maxItems)) {
          strings[$replaceRange](dart.notNull(maxItems) - 1, strings[$length], JSArrayOfString().of(['...']));
        }
        let singleLine = dart.str`${type}[${strings[$join](', ')}]`;
        if ((maxLineLength == null || singleLine.length + dart.notNull(indent) <= dart.notNull(maxLineLength)) && !singleLine[$contains]("\n")) {
          return singleLine;
        }
        return dart.str`${type}[\n` + dart.notNull(strings[$map](core.String, dart.fn(string => dart.notNull(src__pretty_print._indent(dart.notNull(indent) + 2)) + dart.notNull(string), StringToString()))[$join](",\n")) + "\n" + dart.notNull(src__pretty_print._indent(indent)) + "]";
      } else if (core.Map.is(object)) {
        let strings = object[$keys][$map](core.String, dart.fn(key => dart.str`${pp(key)}: ${pp(object[$_get](key))}`, dynamicToString()))[$toList]();
        if (maxItems != null && dart.notNull(strings[$length]) > dart.notNull(maxItems)) {
          strings[$replaceRange](dart.notNull(maxItems) - 1, strings[$length], JSArrayOfString().of(['...']));
        }
        let singleLine = dart.str`{${strings[$join](", ")}}`;
        if ((maxLineLength == null || singleLine.length + dart.notNull(indent) <= dart.notNull(maxLineLength)) && !singleLine[$contains]("\n")) {
          return singleLine;
        }
        return "{\n" + dart.notNull(strings[$map](core.String, dart.fn(string => dart.notNull(src__pretty_print._indent(dart.notNull(indent) + 2)) + dart.notNull(string), StringToString()))[$join](",\n")) + "\n" + dart.notNull(src__pretty_print._indent(indent)) + "}";
      } else if (typeof object == 'string') {
        let lines = object[$split]("\n");
        return "'" + dart.notNull(lines[$map](core.String, src__pretty_print._escapeString)[$join](dart.str`\\n'\n${src__pretty_print._indent(dart.notNull(indent) + 2)}'`)) + "'";
      } else {
        let value = dart.toString(object)[$replaceAll]("\n", dart.notNull(src__pretty_print._indent(indent)) + "\n");
        let defaultToString = value[$startsWith]("Instance of ");
        if (dart.test(top)) value = dart.str`<${value}>`;
        if (typeof object == 'number' || typeof object == 'boolean' || core.Function.is(object) || object == null || defaultToString) {
          return value;
        } else {
          return dart.str`${src__pretty_print._typeName(object)}:${value}`;
        }
      }
    }
    dart.fn(_prettyPrint, dynamicAndintAndSet__ToString());
    return _prettyPrint(object, 0, new collection._HashSet.new(), true);
  };
  dart.fn(src__pretty_print.prettyPrint, dynamic__ToString());
  src__pretty_print._indent = function(length) {
    return ListOfString().filled(length, ' ')[$join]('');
  };
  dart.fn(src__pretty_print._indent, intToString());
  src__pretty_print._typeName = function(x) {
    try {
      if (x == null) return "null";
      let type = dart.toString(dart.runtimeType(x));
      return type[$startsWith]("_") ? "?" : type;
    } catch (e) {
      return "?";
    }
  };
  dart.fn(src__pretty_print._typeName, dynamicToString());
  src__pretty_print._escapeString = function(source) {
    return src__util.escape(source)[$replaceAll]("'", "\\'");
  };
  dart.fn(src__pretty_print._escapeString, StringToString());
  const _out = Symbol('_out');
  src__description.StringDescription = class StringDescription extends core.Object {
    get length() {
      return this[_out].length;
    }
    toString() {
      return dart.toString(this[_out]);
    }
    add(text) {
      this[_out].write(text);
      return this;
    }
    replace(text) {
      this[_out].clear();
      return this.add(text);
    }
    addDescriptionOf(value) {
      if (src__interfaces.Matcher.is(value)) {
        value.describe(this);
      } else {
        this.add(src__pretty_print.prettyPrint(value, {maxLineLength: 80, maxItems: 25}));
      }
      return this;
    }
    addAll(start, separator, end, list) {
      let separate = false;
      this.add(start);
      for (let item of list) {
        if (separate) {
          this.add(separator);
        }
        this.addDescriptionOf(item);
        separate = true;
      }
      this.add(end);
      return this;
    }
  };
  (src__description.StringDescription.new = function(init) {
    if (init === void 0) init = '';
    this[_out] = new core.StringBuffer.new();
    this[_out].write(init);
  }).prototype = src__description.StringDescription.prototype;
  dart.addTypeTests(src__description.StringDescription);
  src__description.StringDescription[dart.implements] = () => [src__interfaces.Description];
  dart.setMethodSignature(src__description.StringDescription, () => ({
    __proto__: dart.getMethods(src__description.StringDescription.__proto__),
    add: dart.fnType(src__interfaces.Description, [core.String]),
    replace: dart.fnType(src__interfaces.Description, [core.String]),
    addDescriptionOf: dart.fnType(src__interfaces.Description, [dart.dynamic]),
    addAll: dart.fnType(src__interfaces.Description, [core.String, core.String, core.String, core.Iterable])
  }));
  dart.setGetterSignature(src__description.StringDescription, () => ({
    __proto__: dart.getGetters(src__description.StringDescription.__proto__),
    length: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__description.StringDescription, () => ({
    __proto__: dart.getFields(src__description.StringDescription.__proto__),
    [_out]: dart.finalFieldType(core.StringBuffer)
  }));
  dart.defineExtensionMethods(src__description.StringDescription, ['toString']);
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.isEmpty*/get isEmpty() {
      return dart.const(new src__core_matchers._Empty.new());
    }
  });
  src__core_matchers._Empty = class _Empty extends src__interfaces.Matcher {
    matches(item, matchState) {
      return core.bool._check(dart.dload(item, 'isEmpty'));
    }
    describe(description) {
      return description.add('empty');
    }
  };
  (src__core_matchers._Empty.new = function() {
    src__core_matchers._Empty.__proto__.new.call(this);
  }).prototype = src__core_matchers._Empty.prototype;
  dart.addTypeTests(src__core_matchers._Empty);
  dart.setMethodSignature(src__core_matchers._Empty, () => ({
    __proto__: dart.getMethods(src__core_matchers._Empty.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.isNotEmpty*/get isNotEmpty() {
      return dart.const(new src__core_matchers._NotEmpty.new());
    }
  });
  src__core_matchers._NotEmpty = class _NotEmpty extends src__interfaces.Matcher {
    matches(item, matchState) {
      return core.bool._check(dart.dload(item, 'isNotEmpty'));
    }
    describe(description) {
      return description.add('non-empty');
    }
  };
  (src__core_matchers._NotEmpty.new = function() {
    src__core_matchers._NotEmpty.__proto__.new.call(this);
  }).prototype = src__core_matchers._NotEmpty.prototype;
  dart.addTypeTests(src__core_matchers._NotEmpty);
  dart.setMethodSignature(src__core_matchers._NotEmpty, () => ({
    __proto__: dart.getMethods(src__core_matchers._NotEmpty.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.isNull*/get isNull() {
      return dart.const(new src__core_matchers._IsNull.new());
    },
    /*src__core_matchers.isNotNull*/get isNotNull() {
      return dart.const(new src__core_matchers._IsNotNull.new());
    }
  });
  src__core_matchers._IsNull = class _IsNull extends src__interfaces.Matcher {
    matches(item, matchState) {
      return item == null;
    }
    describe(description) {
      return description.add('null');
    }
  };
  (src__core_matchers._IsNull.new = function() {
    src__core_matchers._IsNull.__proto__.new.call(this);
  }).prototype = src__core_matchers._IsNull.prototype;
  dart.addTypeTests(src__core_matchers._IsNull);
  dart.setMethodSignature(src__core_matchers._IsNull, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsNull.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  src__core_matchers._IsNotNull = class _IsNotNull extends src__interfaces.Matcher {
    matches(item, matchState) {
      return item != null;
    }
    describe(description) {
      return description.add('not null');
    }
  };
  (src__core_matchers._IsNotNull.new = function() {
    src__core_matchers._IsNotNull.__proto__.new.call(this);
  }).prototype = src__core_matchers._IsNotNull.prototype;
  dart.addTypeTests(src__core_matchers._IsNotNull);
  dart.setMethodSignature(src__core_matchers._IsNotNull, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsNotNull.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.isTrue*/get isTrue() {
      return dart.const(new src__core_matchers._IsTrue.new());
    },
    /*src__core_matchers.isFalse*/get isFalse() {
      return dart.const(new src__core_matchers._IsFalse.new());
    }
  });
  src__core_matchers._IsTrue = class _IsTrue extends src__interfaces.Matcher {
    matches(item, matchState) {
      return dart.equals(item, true);
    }
    describe(description) {
      return description.add('true');
    }
  };
  (src__core_matchers._IsTrue.new = function() {
    src__core_matchers._IsTrue.__proto__.new.call(this);
  }).prototype = src__core_matchers._IsTrue.prototype;
  dart.addTypeTests(src__core_matchers._IsTrue);
  dart.setMethodSignature(src__core_matchers._IsTrue, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsTrue.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  src__core_matchers._IsFalse = class _IsFalse extends src__interfaces.Matcher {
    matches(item, matchState) {
      return dart.equals(item, false);
    }
    describe(description) {
      return description.add('false');
    }
  };
  (src__core_matchers._IsFalse.new = function() {
    src__core_matchers._IsFalse.__proto__.new.call(this);
  }).prototype = src__core_matchers._IsFalse.prototype;
  dart.addTypeTests(src__core_matchers._IsFalse);
  dart.setMethodSignature(src__core_matchers._IsFalse, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsFalse.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.isNaN*/get isNaN() {
      return dart.const(new src__core_matchers._IsNaN.new());
    },
    /*src__core_matchers.isNotNaN*/get isNotNaN() {
      return dart.const(new src__core_matchers._IsNotNaN.new());
    }
  });
  src__core_matchers._IsNaN = class _IsNaN extends src__interfaces.Matcher {
    matches(item, matchState) {
      return core.double.NAN[$compareTo](core.num._check(item)) === 0;
    }
    describe(description) {
      return description.add('NaN');
    }
  };
  (src__core_matchers._IsNaN.new = function() {
    src__core_matchers._IsNaN.__proto__.new.call(this);
  }).prototype = src__core_matchers._IsNaN.prototype;
  dart.addTypeTests(src__core_matchers._IsNaN);
  dart.setMethodSignature(src__core_matchers._IsNaN, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsNaN.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  src__core_matchers._IsNotNaN = class _IsNotNaN extends src__interfaces.Matcher {
    matches(item, matchState) {
      return core.double.NAN[$compareTo](core.num._check(item)) !== 0;
    }
    describe(description) {
      return description.add('not NaN');
    }
  };
  (src__core_matchers._IsNotNaN.new = function() {
    src__core_matchers._IsNotNaN.__proto__.new.call(this);
  }).prototype = src__core_matchers._IsNotNaN.prototype;
  dart.addTypeTests(src__core_matchers._IsNotNaN);
  dart.setMethodSignature(src__core_matchers._IsNotNaN, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsNotNaN.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  src__core_matchers.same = function(expected) {
    return new src__core_matchers._IsSameAs.new(expected);
  };
  dart.fn(src__core_matchers.same, dynamicToMatcher());
  const _expected = Symbol('_expected');
  src__core_matchers._IsSameAs = class _IsSameAs extends src__interfaces.Matcher {
    matches(item, matchState) {
      return core.identical(item, this[_expected]);
    }
    describe(description) {
      return description.add('same instance as ').addDescriptionOf(this[_expected]);
    }
  };
  (src__core_matchers._IsSameAs.new = function(expected) {
    this[_expected] = expected;
    src__core_matchers._IsSameAs.__proto__.new.call(this);
  }).prototype = src__core_matchers._IsSameAs.prototype;
  dart.addTypeTests(src__core_matchers._IsSameAs);
  dart.setMethodSignature(src__core_matchers._IsSameAs, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsSameAs.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__core_matchers._IsSameAs, () => ({
    __proto__: dart.getFields(src__core_matchers._IsSameAs.__proto__),
    [_expected]: dart.finalFieldType(dart.dynamic)
  }));
  src__core_matchers.equals = function(expected, limit) {
    if (limit === void 0) limit = 100;
    return typeof expected == 'string' ? new src__core_matchers._StringEqualsMatcher.new(expected) : new src__core_matchers._DeepMatcher.new(expected, limit);
  };
  dart.fn(src__core_matchers.equals, dynamic__ToMatcher());
  src__core_matchers._RecursiveMatcher = dart.typedef('_RecursiveMatcher', () => dart.fnType(core.List$(core.String), [dart.dynamic, dart.dynamic, core.String, core.int]));
  const _limit = Symbol('_limit');
  const _compareIterables = Symbol('_compareIterables');
  const _compareSets = Symbol('_compareSets');
  const _recursiveMatch = Symbol('_recursiveMatch');
  const _match = Symbol('_match');
  src__core_matchers._DeepMatcher = class _DeepMatcher extends src__interfaces.Matcher {
    [_compareIterables](expected, actual, matcher, depth, location) {
      if (core.Iterable.is(actual)) {
        let expectedIterator = expected[$iterator];
        let actualIterator = actual[$iterator];
        for (let index = 0;; index++) {
          let expectedNext = expectedIterator.moveNext();
          let actualNext = actualIterator.moveNext();
          if (!dart.test(expectedNext) && !dart.test(actualNext)) return null;
          let newLocation = dart.str`${location}[${index}]`;
          if (!dart.test(expectedNext)) return JSArrayOfString().of(['longer than expected', newLocation]);
          if (!dart.test(actualNext)) return JSArrayOfString().of(['shorter than expected', newLocation]);
          let rp = dart.dcall(matcher, expectedIterator.current, actualIterator.current, newLocation, depth);
          if (rp != null) return rp;
        }
      } else {
        return JSArrayOfString().of(['is not Iterable', location]);
      }
    }
    [_compareSets](expected, actual, matcher, depth, location) {
      if (core.Iterable.is(actual)) {
        let other = actual[$toSet]();
        for (let expectedElement of expected) {
          if (dart.test(other.every(dart.fn(actualElement => dart.dcall(matcher, expectedElement, actualElement, location, depth) != null, dynamicTobool())))) {
            return JSArrayOfString().of([dart.str`does not contain ${expectedElement}`, location]);
          }
        }
        if (dart.notNull(other.length) > dart.notNull(expected.length)) {
          return JSArrayOfString().of(['larger than expected', location]);
        } else if (dart.notNull(other.length) < dart.notNull(expected.length)) {
          return JSArrayOfString().of(['smaller than expected', location]);
        } else {
          return null;
        }
      } else {
        return JSArrayOfString().of(['is not Iterable', location]);
      }
    }
    [_recursiveMatch](expected, actual, location, depth) {
      if (src__interfaces.Matcher.is(expected)) {
        let matchState = new _js_helper.LinkedMap.new();
        if (dart.test(expected.matches(actual, matchState))) return null;
        let description = new src__description.StringDescription.new();
        expected.describe(description);
        return JSArrayOfString().of([dart.str`does not match ${description}`, location]);
      } else {
        try {
          if (dart.equals(expected, actual)) return null;
        } catch (e) {
          return JSArrayOfString().of([dart.str`== threw "${e}"`, location]);
        }
      }
      if (dart.notNull(depth) > dart.notNull(this[_limit])) return JSArrayOfString().of(['recursion depth limit exceeded', location]);
      if (depth === 0 || dart.notNull(this[_limit]) > 1) {
        if (core.Set.is(expected)) {
          return this[_compareSets](expected, actual, dart.bind(this, _recursiveMatch), dart.notNull(depth) + 1, location);
        } else if (core.Iterable.is(expected)) {
          return this[_compareIterables](expected, actual, dart.bind(this, _recursiveMatch), dart.notNull(depth) + 1, location);
        } else if (core.Map.is(expected)) {
          if (!core.Map.is(actual)) return JSArrayOfString().of(['expected a map', location]);
          let map = core.Map.as(actual);
          let err = expected[$length] == map[$length] ? '' : 'has different length and ';
          for (let key of expected[$keys]) {
            if (!dart.test(map[$containsKey](key))) {
              return JSArrayOfString().of([dart.str`${err}is missing map key '${key}'`, location]);
            }
          }
          for (let key of map[$keys]) {
            if (!dart.test(expected[$containsKey](key))) {
              return JSArrayOfString().of([dart.str`${err}has extra map key '${key}'`, location]);
            }
          }
          for (let key of expected[$keys]) {
            let rp = this[_recursiveMatch](expected[$_get](key), map[$_get](key), dart.str`${location}['${key}']`, dart.notNull(depth) + 1);
            if (rp != null) return rp;
          }
          return null;
        }
      }
      let description = new src__description.StringDescription.new();
      if (dart.notNull(depth) > 0) {
        description.add('was ').addDescriptionOf(actual).add(' instead of ').addDescriptionOf(expected);
        return JSArrayOfString().of([description.toString(), location]);
      }
      return JSArrayOfString().of(["", location]);
    }
    [_match](expected, actual, matchState) {
      let rp = this[_recursiveMatch](expected, actual, '', 0);
      if (rp == null) return null;
      let reason = null;
      if (rp[$_get](0).length > 0) {
        if (rp[$_get](1).length > 0) {
          reason = dart.str`${rp[$_get](0)} at location ${rp[$_get](1)}`;
        } else {
          reason = rp[$_get](0);
        }
      } else {
        reason = '';
      }
      src__util.addStateInfo(matchState, new _js_helper.LinkedMap.from(['reason', reason]));
      return reason;
    }
    matches(item, matchState) {
      return this[_match](this[_expected], item, matchState) == null;
    }
    describe(description) {
      return description.addDescriptionOf(this[_expected]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      let l = matchState[$_get]('reason');
      let reason = l != null ? l : '';
      if (dart.equals(dart.dload(reason, 'length'), 0) && dart.notNull(mismatchDescription.length) > 0) {
        mismatchDescription.add('is ').addDescriptionOf(item);
      } else {
        mismatchDescription.add(core.String._check(reason));
      }
      return mismatchDescription;
    }
  };
  (src__core_matchers._DeepMatcher.new = function(expected, limit) {
    if (limit === void 0) limit = 1000;
    this[_expected] = expected;
    this[_limit] = limit;
    src__core_matchers._DeepMatcher.__proto__.new.call(this);
  }).prototype = src__core_matchers._DeepMatcher.prototype;
  dart.addTypeTests(src__core_matchers._DeepMatcher);
  dart.setMethodSignature(src__core_matchers._DeepMatcher, () => ({
    __proto__: dart.getMethods(src__core_matchers._DeepMatcher.__proto__),
    [_compareIterables]: dart.fnType(core.List$(core.String), [core.Iterable, core.Object, dynamicAnddynamicAndString__ToListOfString(), core.int, core.String]),
    [_compareSets]: dart.fnType(core.List$(core.String), [core.Set, core.Object, dynamicAnddynamicAndString__ToListOfString(), core.int, core.String]),
    [_recursiveMatch]: dart.fnType(core.List$(core.String), [core.Object, core.Object, core.String, core.int]),
    [_match]: dart.fnType(core.String, [dart.dynamic, dart.dynamic, core.Map]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__core_matchers._DeepMatcher, () => ({
    __proto__: dart.getFields(src__core_matchers._DeepMatcher.__proto__),
    [_expected]: dart.finalFieldType(dart.dynamic),
    [_limit]: dart.finalFieldType(core.int)
  }));
  const _value = Symbol('_value');
  src__core_matchers._StringEqualsMatcher = class _StringEqualsMatcher extends src__interfaces.Matcher {
    get showActualValue() {
      return true;
    }
    matches(item, matchState) {
      return core.identical(this[_value], item);
    }
    describe(description) {
      return description.addDescriptionOf(this[_value]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (!(typeof item == 'string')) {
        return mismatchDescription.addDescriptionOf(item).add('is not a string');
      } else {
        let buff = new core.StringBuffer.new();
        buff.write('is different.');
        let escapedItem = src__util.escape(core.String._check(item));
        let escapedValue = src__util.escape(this[_value]);
        let minLength = escapedItem.length < escapedValue.length ? escapedItem.length : escapedValue.length;
        let start = 0;
        for (; start < minLength; start++) {
          if (escapedValue[$codeUnitAt](start) !== escapedItem[$codeUnitAt](start)) {
            break;
          }
        }
        if (start === minLength) {
          if (escapedValue.length < escapedItem.length) {
            buff.write(' Both strings start the same, but the actual value also' + ' has the following trailing characters: ');
            src__core_matchers._StringEqualsMatcher._writeTrailing(buff, escapedItem, escapedValue.length);
          } else {
            buff.write(' Both strings start the same, but the actual value is' + ' missing the following trailing characters: ');
            src__core_matchers._StringEqualsMatcher._writeTrailing(buff, escapedValue, escapedItem.length);
          }
        } else {
          buff.write('\nExpected: ');
          src__core_matchers._StringEqualsMatcher._writeLeading(buff, escapedValue, start);
          src__core_matchers._StringEqualsMatcher._writeTrailing(buff, escapedValue, start);
          buff.write('\n  Actual: ');
          src__core_matchers._StringEqualsMatcher._writeLeading(buff, escapedItem, start);
          src__core_matchers._StringEqualsMatcher._writeTrailing(buff, escapedItem, start);
          buff.write('\n          ');
          for (let i = start > 10 ? 14 : start; i > 0; i--)
            buff.write(' ');
          buff.write(dart.str`^\n Differ at offset ${start}`);
        }
        return mismatchDescription.add(buff.toString());
      }
    }
    static _writeLeading(buff, s, start) {
      if (dart.notNull(start) > 10) {
        buff.write('... ');
        buff.write(s[$substring](dart.notNull(start) - 10, start));
      } else {
        buff.write(s[$substring](0, start));
      }
    }
    static _writeTrailing(buff, s, start) {
      if (dart.notNull(start) + 10 > s.length) {
        buff.write(s[$substring](start));
      } else {
        buff.write(s[$substring](start, dart.notNull(start) + 10));
        buff.write(' ...');
      }
    }
  };
  (src__core_matchers._StringEqualsMatcher.new = function(value) {
    this[_value] = value;
    src__core_matchers._StringEqualsMatcher.__proto__.new.call(this);
  }).prototype = src__core_matchers._StringEqualsMatcher.prototype;
  dart.addTypeTests(src__core_matchers._StringEqualsMatcher);
  dart.setMethodSignature(src__core_matchers._StringEqualsMatcher, () => ({
    __proto__: dart.getMethods(src__core_matchers._StringEqualsMatcher.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setStaticMethodSignature(src__core_matchers._StringEqualsMatcher, () => ({
    _writeLeading: dart.fnType(dart.void, [core.StringBuffer, core.String, core.int]),
    _writeTrailing: dart.fnType(dart.void, [core.StringBuffer, core.String, core.int])
  }));
  dart.setGetterSignature(src__core_matchers._StringEqualsMatcher, () => ({
    __proto__: dart.getGetters(src__core_matchers._StringEqualsMatcher.__proto__),
    showActualValue: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__core_matchers._StringEqualsMatcher, () => ({
    __proto__: dart.getFields(src__core_matchers._StringEqualsMatcher.__proto__),
    [_value]: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.anything*/get anything() {
      return dart.const(new src__core_matchers._IsAnything.new());
    }
  });
  src__core_matchers._IsAnything = class _IsAnything extends src__interfaces.Matcher {
    matches(item, matchState) {
      return true;
    }
    describe(description) {
      return description.add('anything');
    }
  };
  (src__core_matchers._IsAnything.new = function() {
    src__core_matchers._IsAnything.__proto__.new.call(this);
  }).prototype = src__core_matchers._IsAnything.prototype;
  dart.addTypeTests(src__core_matchers._IsAnything);
  dart.setMethodSignature(src__core_matchers._IsAnything, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsAnything.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  const _is_isInstanceOf_default = Symbol('_is_isInstanceOf_default');
  src__core_matchers.isInstanceOf$ = dart.generic(T => {
    class isInstanceOf extends src__interfaces.Matcher {
      matches(obj, matchState) {
        return T.is(obj);
      }
      describe(description) {
        return description.add(dart.str`an instance of ${dart.wrapType(T)}`);
      }
    }
    (isInstanceOf.new = function() {
      isInstanceOf.__proto__.new.call(this);
    }).prototype = isInstanceOf.prototype;
    dart.addTypeTests(isInstanceOf);
    isInstanceOf.prototype[_is_isInstanceOf_default] = true;
    dart.setMethodSignature(isInstanceOf, () => ({
      __proto__: dart.getMethods(isInstanceOf.__proto__),
      matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
      describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
    }));
    return isInstanceOf;
  });
  src__core_matchers.isInstanceOf = src__core_matchers.isInstanceOf$();
  dart.addTypeTests(src__core_matchers.isInstanceOf, _is_isInstanceOf_default);
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.returnsNormally*/get returnsNormally() {
      return dart.const(new src__core_matchers._ReturnsNormally.new());
    }
  });
  src__core_matchers._ReturnsNormally = class _ReturnsNormally extends src__interfaces.Matcher {
    matches(f, matchState) {
      try {
        dart.dcall(f);
        return true;
      } catch (e) {
        let s = dart.stackTrace(e);
        src__util.addStateInfo(matchState, new _js_helper.LinkedMap.from(['exception', e, 'stack', s]));
        return false;
      }
    }
    describe(description) {
      return description.add("return normally");
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      mismatchDescription.add('threw ').addDescriptionOf(matchState[$_get]('exception'));
      if (dart.test(verbose)) {
        mismatchDescription.add(' at ').add(dart.toString(matchState[$_get]('stack')));
      }
      return mismatchDescription;
    }
  };
  (src__core_matchers._ReturnsNormally.new = function() {
    src__core_matchers._ReturnsNormally.__proto__.new.call(this);
  }).prototype = src__core_matchers._ReturnsNormally.prototype;
  dart.addTypeTests(src__core_matchers._ReturnsNormally);
  dart.setMethodSignature(src__core_matchers._ReturnsNormally, () => ({
    __proto__: dart.getMethods(src__core_matchers._ReturnsNormally.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  const _name = Symbol('_name');
  src__core_matchers.TypeMatcher = class TypeMatcher extends src__interfaces.Matcher {
    describe(description) {
      return description.add(this[_name]);
    }
  };
  (src__core_matchers.TypeMatcher.new = function(name) {
    this[_name] = name;
    src__core_matchers.TypeMatcher.__proto__.new.call(this);
  }).prototype = src__core_matchers.TypeMatcher.prototype;
  dart.addTypeTests(src__core_matchers.TypeMatcher);
  dart.setMethodSignature(src__core_matchers.TypeMatcher, () => ({
    __proto__: dart.getMethods(src__core_matchers.TypeMatcher.__proto__),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__core_matchers.TypeMatcher, () => ({
    __proto__: dart.getFields(src__core_matchers.TypeMatcher.__proto__),
    [_name]: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.isMap*/get isMap() {
      return dart.const(new src__core_matchers._IsMap.new());
    }
  });
  src__core_matchers._IsMap = class _IsMap extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.Map.is(item);
    }
  };
  (src__core_matchers._IsMap.new = function() {
    src__core_matchers._IsMap.__proto__.new.call(this, "Map");
  }).prototype = src__core_matchers._IsMap.prototype;
  dart.addTypeTests(src__core_matchers._IsMap);
  dart.setMethodSignature(src__core_matchers._IsMap, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsMap.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__core_matchers, {
    /*src__core_matchers.isList*/get isList() {
      return dart.const(new src__core_matchers._IsList.new());
    }
  });
  src__core_matchers._IsList = class _IsList extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.List.is(item);
    }
  };
  (src__core_matchers._IsList.new = function() {
    src__core_matchers._IsList.__proto__.new.call(this, "List");
  }).prototype = src__core_matchers._IsList.prototype;
  dart.addTypeTests(src__core_matchers._IsList);
  dart.setMethodSignature(src__core_matchers._IsList, () => ({
    __proto__: dart.getMethods(src__core_matchers._IsList.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  src__core_matchers.hasLength = function(matcher) {
    return new src__core_matchers._HasLength.new(src__util.wrapMatcher(matcher));
  };
  dart.fn(src__core_matchers.hasLength, dynamicToMatcher());
  const _matcher = Symbol('_matcher');
  src__core_matchers._HasLength = class _HasLength extends src__interfaces.Matcher {
    matches(item, matchState) {
      try {
        if (dart.dtest(dart.dsend(dart.dsend(dart.dload(item, 'length'), '*', dart.dload(item, 'length')), '>=', 0))) {
          return this[_matcher].matches(dart.dload(item, 'length'), matchState);
        }
      } catch (e) {
      }
      return false;
    }
    describe(description) {
      return description.add('an object with length of ').addDescriptionOf(this[_matcher]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      try {
        if (dart.dtest(dart.dsend(dart.dsend(dart.dload(item, 'length'), '*', dart.dload(item, 'length')), '>=', 0))) {
          return mismatchDescription.add('has length of ').addDescriptionOf(dart.dload(item, 'length'));
        }
      } catch (e) {
      }
      return mismatchDescription.add('has no length property');
    }
  };
  (src__core_matchers._HasLength.new = function(matcher) {
    if (matcher === void 0) matcher = null;
    this[_matcher] = matcher;
    src__core_matchers._HasLength.__proto__.new.call(this);
  }).prototype = src__core_matchers._HasLength.prototype;
  dart.addTypeTests(src__core_matchers._HasLength);
  dart.setMethodSignature(src__core_matchers._HasLength, () => ({
    __proto__: dart.getMethods(src__core_matchers._HasLength.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__core_matchers._HasLength, () => ({
    __proto__: dart.getFields(src__core_matchers._HasLength.__proto__),
    [_matcher]: dart.finalFieldType(src__interfaces.Matcher)
  }));
  src__core_matchers.contains = function(expected) {
    return new src__core_matchers._Contains.new(expected);
  };
  dart.fn(src__core_matchers.contains, dynamicToMatcher());
  src__core_matchers._Contains = class _Contains extends src__interfaces.Matcher {
    matches(item, matchState) {
      if (typeof item == 'string') {
        return item[$indexOf](core.Pattern._check(this[_expected])) >= 0;
      } else if (core.Iterable.is(item)) {
        if (src__interfaces.Matcher.is(this[_expected])) {
          return item[$any](dart.fn(e => core.bool._check(dart.dsend(this[_expected], 'matches', e, matchState)), dynamicTobool()));
        } else {
          return item[$contains](this[_expected]);
        }
      } else if (core.Map.is(item)) {
        return item[$containsKey](this[_expected]);
      }
      return false;
    }
    describe(description) {
      return description.add('contains ').addDescriptionOf(this[_expected]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (typeof item == 'string' || core.Iterable.is(item) || core.Map.is(item)) {
        return super.describeMismatch(item, mismatchDescription, matchState, verbose);
      } else {
        return mismatchDescription.add('is not a string, map or iterable');
      }
    }
  };
  (src__core_matchers._Contains.new = function(expected) {
    this[_expected] = expected;
    src__core_matchers._Contains.__proto__.new.call(this);
  }).prototype = src__core_matchers._Contains.prototype;
  dart.addTypeTests(src__core_matchers._Contains);
  dart.setMethodSignature(src__core_matchers._Contains, () => ({
    __proto__: dart.getMethods(src__core_matchers._Contains.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__core_matchers._Contains, () => ({
    __proto__: dart.getFields(src__core_matchers._Contains.__proto__),
    [_expected]: dart.finalFieldType(dart.dynamic)
  }));
  src__core_matchers.isIn = function(expected) {
    return new src__core_matchers._In.new(expected);
  };
  dart.fn(src__core_matchers.isIn, dynamicToMatcher());
  src__core_matchers._In = class _In extends src__interfaces.Matcher {
    matches(item, matchState) {
      if (typeof this[_expected] == 'string') {
        return core.bool._check(dart.dsend(dart.dsend(this[_expected], 'indexOf', item), '>=', 0));
      } else if (core.Iterable.is(this[_expected])) {
        return core.bool._check(dart.dsend(this[_expected], 'any', dart.fn(e => dart.equals(e, item), dynamicTobool())));
      } else if (core.Map.is(this[_expected])) {
        return core.bool._check(dart.dsend(this[_expected], 'containsKey', item));
      }
      return false;
    }
    describe(description) {
      return description.add('is in ').addDescriptionOf(this[_expected]);
    }
  };
  (src__core_matchers._In.new = function(expected) {
    this[_expected] = expected;
    src__core_matchers._In.__proto__.new.call(this);
  }).prototype = src__core_matchers._In.prototype;
  dart.addTypeTests(src__core_matchers._In);
  dart.setMethodSignature(src__core_matchers._In, () => ({
    __proto__: dart.getMethods(src__core_matchers._In.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__core_matchers._In, () => ({
    __proto__: dart.getFields(src__core_matchers._In.__proto__),
    [_expected]: dart.finalFieldType(dart.dynamic)
  }));
  src__core_matchers.predicate = function(T, f, description) {
    if (description === void 0) description = 'satisfies function';
    return new (src__core_matchers._Predicate$(T)).new(f, description);
  };
  dart.fn(src__core_matchers.predicate, Fn__ToMatcher());
  src__core_matchers._PredicateFunction$ = dart.generic(T => {
    const _PredicateFunction = dart.typedef('_PredicateFunction', () => dart.fnType(core.bool, [T]));
    return _PredicateFunction;
  });
  src__core_matchers._PredicateFunction = src__core_matchers._PredicateFunction$();
  const _description = Symbol('_description');
  const _is__Predicate_default = Symbol('_is__Predicate_default');
  src__core_matchers._Predicate$ = dart.generic(T => {
    let TTobool = () => (TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    class _Predicate extends src__interfaces.Matcher {
      matches(item, matchState) {
        return this[_matcher](T.as(item));
      }
      describe(description) {
        return description.add(this[_description]);
      }
    }
    (_Predicate.new = function(matcher, description) {
      this[_matcher] = matcher;
      this[_description] = description;
      _Predicate.__proto__.new.call(this);
    }).prototype = _Predicate.prototype;
    dart.addTypeTests(_Predicate);
    _Predicate.prototype[_is__Predicate_default] = true;
    dart.setMethodSignature(_Predicate, () => ({
      __proto__: dart.getMethods(_Predicate.__proto__),
      matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
      describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
    }));
    dart.setFieldSignature(_Predicate, () => ({
      __proto__: dart.getFields(_Predicate.__proto__),
      [_matcher]: dart.finalFieldType(TTobool()),
      [_description]: dart.finalFieldType(core.String)
    }));
    return _Predicate;
  });
  src__core_matchers._Predicate = src__core_matchers._Predicate$();
  dart.addTypeTests(src__core_matchers._Predicate, _is__Predicate_default);
  const _featureDescription = Symbol('_featureDescription');
  const _featureName = Symbol('_featureName');
  src__core_matchers.CustomMatcher = class CustomMatcher extends src__interfaces.Matcher {
    featureValueOf(actual) {
      return actual;
    }
    matches(item, matchState) {
      try {
        let f = this.featureValueOf(item);
        if (dart.test(this[_matcher].matches(f, matchState))) return true;
        src__util.addStateInfo(matchState, new _js_helper.LinkedMap.from(['custom.feature', f]));
      } catch (exception) {
        let stack = dart.stackTrace(exception);
        src__util.addStateInfo(matchState, new _js_helper.LinkedMap.from(['custom.exception', dart.toString(exception), 'custom.stack', dart.toString(src__chain.Chain.forTrace(stack).foldFrames(dart.fn(frame => frame.package === 'test' || frame.package === 'stream_channel' || frame.package === 'matcher', FrameTobool()), {terse: true}))]));
      }
      return false;
    }
    describe(description) {
      return description.add(this[_featureDescription]).add(' ').addDescriptionOf(this[_matcher]);
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (matchState[$_get]('custom.exception') != null) {
        mismatchDescription.add('threw ').addDescriptionOf(matchState[$_get]('custom.exception')).add('\n').add(dart.toString(matchState[$_get]('custom.stack')));
        return mismatchDescription;
      }
      mismatchDescription.add('has ').add(this[_featureName]).add(' with value ').addDescriptionOf(matchState[$_get]('custom.feature'));
      let innerDescription = new src__description.StringDescription.new();
      this[_matcher].describeMismatch(matchState[$_get]('custom.feature'), innerDescription, core.Map._check(matchState[$_get]('state')), verbose);
      if (dart.notNull(innerDescription.length) > 0) {
        mismatchDescription.add(' which ').add(innerDescription.toString());
      }
      return mismatchDescription;
    }
  };
  (src__core_matchers.CustomMatcher.new = function(featureDescription, featureName, matcher) {
    this[_featureDescription] = featureDescription;
    this[_featureName] = featureName;
    this[_matcher] = src__util.wrapMatcher(matcher);
    src__core_matchers.CustomMatcher.__proto__.new.call(this);
  }).prototype = src__core_matchers.CustomMatcher.prototype;
  dart.addTypeTests(src__core_matchers.CustomMatcher);
  dart.setMethodSignature(src__core_matchers.CustomMatcher, () => ({
    __proto__: dart.getMethods(src__core_matchers.CustomMatcher.__proto__),
    featureValueOf: dart.fnType(dart.dynamic, [dart.dynamic]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__core_matchers.CustomMatcher, () => ({
    __proto__: dart.getFields(src__core_matchers.CustomMatcher.__proto__),
    [_featureDescription]: dart.finalFieldType(core.String),
    [_featureName]: dart.finalFieldType(core.String),
    [_matcher]: dart.finalFieldType(src__interfaces.Matcher)
  }));
  dart.trackLibraries("packages/matcher/src/core_matchers.ddc", {
    "package:matcher/src/util.dart": src__util,
    "package:matcher/src/pretty_print.dart": src__pretty_print,
    "package:matcher/src/description.dart": src__description,
    "package:matcher/src/core_matchers.dart": src__core_matchers
  }, '{"version":3,"sourceRoot":"","sources":["util.dart","pretty_print.dart","description.dart","core_matchers.dart"],"names":[],"mappings":"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","file":"core_matchers.ddc.js"}');
  // Exports:
  return {
    src__util: src__util,
    src__pretty_print: src__pretty_print,
    src__description: src__description,
    src__core_matchers: src__core_matchers
  };
});

//# sourceMappingURL=core_matchers.ddc.js.map
