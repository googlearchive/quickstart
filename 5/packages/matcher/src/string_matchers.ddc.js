define(['dart_sdk', 'packages/matcher/src/interfaces'], function(dart_sdk, interfaces) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__interfaces = interfaces.src__interfaces;
  const _root = Object.create(null);
  const src__string_matchers = Object.create(_root);
  const $toLowerCase = dartx.toLowerCase;
  const $startsWith = dartx.startsWith;
  const $endsWith = dartx.endsWith;
  const $indexOf = dartx.indexOf;
  const $_get = dartx._get;
  const $trim = dartx.trim;
  let StringToMatcher = () => (StringToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [core.String])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ListOfStringToMatcher = () => (ListOfStringToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [ListOfString()])))();
  let dynamicToMatcher = () => (dynamicToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  src__string_matchers.equalsIgnoringCase = function(value) {
    return new src__string_matchers._IsEqualIgnoringCase.new(value);
  };
  dart.fn(src__string_matchers.equalsIgnoringCase, StringToMatcher());
  const _value = Symbol('_value');
  const _matchValue = Symbol('_matchValue');
  src__string_matchers._StringMatcher = class _StringMatcher extends src__interfaces.Matcher {
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (!(typeof item == 'string')) {
        return mismatchDescription.addDescriptionOf(item).add(' not a string');
      } else {
        return super.describeMismatch(item, mismatchDescription, matchState, verbose);
      }
    }
  };
  (src__string_matchers._StringMatcher.new = function() {
    src__string_matchers._StringMatcher.__proto__.new.call(this);
  }).prototype = src__string_matchers._StringMatcher.prototype;
  dart.addTypeTests(src__string_matchers._StringMatcher);
  src__string_matchers._IsEqualIgnoringCase = class _IsEqualIgnoringCase extends src__string_matchers._StringMatcher {
    matches(item, matchState) {
      return typeof item == 'string' && this[_matchValue] === item[$toLowerCase]();
    }
    describe(description) {
      return description.addDescriptionOf(this[_value]).add(' ignoring case');
    }
  };
  (src__string_matchers._IsEqualIgnoringCase.new = function(value) {
    this[_value] = value;
    this[_matchValue] = value[$toLowerCase]();
    src__string_matchers._IsEqualIgnoringCase.__proto__.new.call(this);
  }).prototype = src__string_matchers._IsEqualIgnoringCase.prototype;
  dart.addTypeTests(src__string_matchers._IsEqualIgnoringCase);
  dart.setMethodSignature(src__string_matchers._IsEqualIgnoringCase, () => ({
    __proto__: dart.getMethods(src__string_matchers._IsEqualIgnoringCase.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__string_matchers._IsEqualIgnoringCase, () => ({
    __proto__: dart.getFields(src__string_matchers._IsEqualIgnoringCase.__proto__),
    [_value]: dart.finalFieldType(core.String),
    [_matchValue]: dart.finalFieldType(core.String)
  }));
  src__string_matchers.equalsIgnoringWhitespace = function(value) {
    return new src__string_matchers._IsEqualIgnoringWhitespace.new(value);
  };
  dart.fn(src__string_matchers.equalsIgnoringWhitespace, StringToMatcher());
  src__string_matchers._IsEqualIgnoringWhitespace = class _IsEqualIgnoringWhitespace extends src__string_matchers._StringMatcher {
    matches(item, matchState) {
      return typeof item == 'string' && this[_matchValue] == src__string_matchers.collapseWhitespace(item);
    }
    describe(description) {
      return description.addDescriptionOf(this[_matchValue]).add(' ignoring whitespace');
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (typeof item == 'string') {
        return mismatchDescription.add('is ').addDescriptionOf(src__string_matchers.collapseWhitespace(item)).add(' with whitespace compressed');
      } else {
        return super.describeMismatch(item, mismatchDescription, matchState, verbose);
      }
    }
  };
  (src__string_matchers._IsEqualIgnoringWhitespace.new = function(value) {
    this[_value] = value;
    this[_matchValue] = src__string_matchers.collapseWhitespace(value);
    src__string_matchers._IsEqualIgnoringWhitespace.__proto__.new.call(this);
  }).prototype = src__string_matchers._IsEqualIgnoringWhitespace.prototype;
  dart.addTypeTests(src__string_matchers._IsEqualIgnoringWhitespace);
  dart.setMethodSignature(src__string_matchers._IsEqualIgnoringWhitespace, () => ({
    __proto__: dart.getMethods(src__string_matchers._IsEqualIgnoringWhitespace.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__string_matchers._IsEqualIgnoringWhitespace, () => ({
    __proto__: dart.getFields(src__string_matchers._IsEqualIgnoringWhitespace.__proto__),
    [_value]: dart.finalFieldType(core.String),
    [_matchValue]: dart.finalFieldType(core.String)
  }));
  src__string_matchers.startsWith = function(prefixString) {
    return new src__string_matchers._StringStartsWith.new(prefixString);
  };
  dart.fn(src__string_matchers.startsWith, StringToMatcher());
  const _prefix = Symbol('_prefix');
  src__string_matchers._StringStartsWith = class _StringStartsWith extends src__string_matchers._StringMatcher {
    matches(item, matchState) {
      return typeof item == 'string' && item[$startsWith](this[_prefix]);
    }
    describe(description) {
      return description.add('a string starting with ').addDescriptionOf(this[_prefix]);
    }
  };
  (src__string_matchers._StringStartsWith.new = function(prefix) {
    this[_prefix] = prefix;
    src__string_matchers._StringStartsWith.__proto__.new.call(this);
  }).prototype = src__string_matchers._StringStartsWith.prototype;
  dart.addTypeTests(src__string_matchers._StringStartsWith);
  dart.setMethodSignature(src__string_matchers._StringStartsWith, () => ({
    __proto__: dart.getMethods(src__string_matchers._StringStartsWith.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__string_matchers._StringStartsWith, () => ({
    __proto__: dart.getFields(src__string_matchers._StringStartsWith.__proto__),
    [_prefix]: dart.finalFieldType(core.String)
  }));
  src__string_matchers.endsWith = function(suffixString) {
    return new src__string_matchers._StringEndsWith.new(suffixString);
  };
  dart.fn(src__string_matchers.endsWith, StringToMatcher());
  const _suffix = Symbol('_suffix');
  src__string_matchers._StringEndsWith = class _StringEndsWith extends src__string_matchers._StringMatcher {
    matches(item, matchState) {
      return typeof item == 'string' && item[$endsWith](this[_suffix]);
    }
    describe(description) {
      return description.add('a string ending with ').addDescriptionOf(this[_suffix]);
    }
  };
  (src__string_matchers._StringEndsWith.new = function(suffix) {
    this[_suffix] = suffix;
    src__string_matchers._StringEndsWith.__proto__.new.call(this);
  }).prototype = src__string_matchers._StringEndsWith.prototype;
  dart.addTypeTests(src__string_matchers._StringEndsWith);
  dart.setMethodSignature(src__string_matchers._StringEndsWith, () => ({
    __proto__: dart.getMethods(src__string_matchers._StringEndsWith.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__string_matchers._StringEndsWith, () => ({
    __proto__: dart.getFields(src__string_matchers._StringEndsWith.__proto__),
    [_suffix]: dart.finalFieldType(core.String)
  }));
  src__string_matchers.stringContainsInOrder = function(substrings) {
    return new src__string_matchers._StringContainsInOrder.new(substrings);
  };
  dart.fn(src__string_matchers.stringContainsInOrder, ListOfStringToMatcher());
  const _substrings = Symbol('_substrings');
  src__string_matchers._StringContainsInOrder = class _StringContainsInOrder extends src__string_matchers._StringMatcher {
    matches(item, matchState) {
      if (typeof item == 'string') {
        let from_index = 0;
        for (let s of this[_substrings]) {
          from_index = item[$indexOf](s, from_index);
          if (from_index < 0) return false;
        }
        return true;
      } else {
        return false;
      }
    }
    describe(description) {
      return description.addAll('a string containing ', ', ', ' in order', this[_substrings]);
    }
  };
  (src__string_matchers._StringContainsInOrder.new = function(substrings) {
    this[_substrings] = substrings;
    src__string_matchers._StringContainsInOrder.__proto__.new.call(this);
  }).prototype = src__string_matchers._StringContainsInOrder.prototype;
  dart.addTypeTests(src__string_matchers._StringContainsInOrder);
  dart.setMethodSignature(src__string_matchers._StringContainsInOrder, () => ({
    __proto__: dart.getMethods(src__string_matchers._StringContainsInOrder.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__string_matchers._StringContainsInOrder, () => ({
    __proto__: dart.getFields(src__string_matchers._StringContainsInOrder.__proto__),
    [_substrings]: dart.finalFieldType(ListOfString())
  }));
  src__string_matchers.matches = function(re) {
    return new src__string_matchers._MatchesRegExp.new(re);
  };
  dart.fn(src__string_matchers.matches, dynamicToMatcher());
  const _regexp = Symbol('_regexp');
  src__string_matchers._MatchesRegExp = class _MatchesRegExp extends src__string_matchers._StringMatcher {
    matches(item, matchState) {
      return typeof item == 'string' ? this[_regexp].hasMatch(item) : false;
    }
    describe(description) {
      return description.add(dart.str`match '${this[_regexp].pattern}'`);
    }
  };
  (src__string_matchers._MatchesRegExp.new = function(re) {
    this[_regexp] = null;
    src__string_matchers._MatchesRegExp.__proto__.new.call(this);
    if (typeof re == 'string') {
      this[_regexp] = core.RegExp.new(re);
    } else if (core.RegExp.is(re)) {
      this[_regexp] = re;
    } else {
      dart.throw(new core.ArgumentError.new('matches requires a regexp or string'));
    }
  }).prototype = src__string_matchers._MatchesRegExp.prototype;
  dart.addTypeTests(src__string_matchers._MatchesRegExp);
  dart.setMethodSignature(src__string_matchers._MatchesRegExp, () => ({
    __proto__: dart.getMethods(src__string_matchers._MatchesRegExp.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__string_matchers._MatchesRegExp, () => ({
    __proto__: dart.getFields(src__string_matchers._MatchesRegExp.__proto__),
    [_regexp]: dart.fieldType(core.RegExp)
  }));
  src__string_matchers.collapseWhitespace = function(string) {
    let result = new core.StringBuffer.new();
    let skipSpace = true;
    for (let i = 0; i < string.length; i++) {
      let character = string[$_get](i);
      if (dart.test(src__string_matchers._isWhitespace(character))) {
        if (!skipSpace) {
          result.write(' ');
          skipSpace = true;
        }
      } else {
        result.write(character);
        skipSpace = false;
      }
    }
    return result.toString()[$trim]();
  };
  dart.fn(src__string_matchers.collapseWhitespace, StringToString());
  src__string_matchers._isWhitespace = function(ch) {
    return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
  };
  dart.fn(src__string_matchers._isWhitespace, StringTobool());
  dart.trackLibraries("packages/matcher/src/string_matchers.ddc", {
    "package:matcher/src/string_matchers.dart": src__string_matchers
  }, '{"version":3,"sourceRoot":"","sources":["string_matchers.dart"],"names":[],"mappings":"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","file":"string_matchers.ddc.js"}');
  // Exports:
  return {
    src__string_matchers: src__string_matchers
  };
});

//# sourceMappingURL=string_matchers.ddc.js.map
