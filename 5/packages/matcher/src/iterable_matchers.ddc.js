define(['dart_sdk', 'packages/matcher/src/core_matchers', 'packages/matcher/src/interfaces'], function(dart_sdk, core_matchers, interfaces) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__util = core_matchers.src__util;
  const src__description = core_matchers.src__description;
  const src__core_matchers = core_matchers.src__core_matchers;
  const src__interfaces = interfaces.src__interfaces;
  const _root = Object.create(null);
  const src__iterable_matchers = Object.create(_root);
  const $_get = dartx._get;
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $iterator = dartx.iterator;
  let dynamicToMatcher = () => (dynamicToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [dart.dynamic])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let IterableToMatcher = () => (IterableToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [core.Iterable])))();
  let ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  let ListOfMatcher = () => (ListOfMatcher = dart.constFn(core.List$(src__interfaces.Matcher)))();
  let IterableOfSAndFnAndStringToMatcher = () => (IterableOfSAndFnAndStringToMatcher = dart.constFn(dart.gFnType((S, T) => [src__interfaces.Matcher, [core.Iterable$(S), dart.fnType(core.bool, [S, T]), core.String]])))();
  src__iterable_matchers.everyElement = function(matcher) {
    return new src__iterable_matchers._EveryElement.new(src__util.wrapMatcher(matcher));
  };
  dart.fn(src__iterable_matchers.everyElement, dynamicToMatcher());
  const _matcher = Symbol('_matcher');
  src__iterable_matchers._IterableMatcher = class _IterableMatcher extends src__interfaces.Matcher {
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (!core.Iterable.is(item)) {
        return mismatchDescription.addDescriptionOf(item).add(' not an Iterable');
      } else {
        return super.describeMismatch(item, mismatchDescription, matchState, verbose);
      }
    }
  };
  (src__iterable_matchers._IterableMatcher.new = function() {
    src__iterable_matchers._IterableMatcher.__proto__.new.call(this);
  }).prototype = src__iterable_matchers._IterableMatcher.prototype;
  dart.addTypeTests(src__iterable_matchers._IterableMatcher);
  src__iterable_matchers._EveryElement = class _EveryElement extends src__iterable_matchers._IterableMatcher {
    matches(item, matchState) {
      if (!core.Iterable.is(item)) {
        return false;
      }
      let i = 0;
      for (let element of core.Iterable._check(item)) {
        if (!dart.test(this[_matcher].matches(element, matchState))) {
          src__util.addStateInfo(matchState, new _js_helper.LinkedMap.from(['index', i, 'element', element]));
          return false;
        }
        ++i;
      }
      return true;
    }
    describe(description) {
      return description.add('every element(').addDescriptionOf(this[_matcher]).add(')');
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (matchState[$_get]('index') != null) {
        let index = matchState[$_get]('index');
        let element = matchState[$_get]('element');
        mismatchDescription.add('has value ').addDescriptionOf(element).add(' which ');
        let subDescription = new src__description.StringDescription.new();
        this[_matcher].describeMismatch(element, subDescription, core.Map._check(matchState[$_get]('state')), verbose);
        if (dart.notNull(subDescription.length) > 0) {
          mismatchDescription.add(subDescription.toString());
        } else {
          mismatchDescription.add("doesn't match ");
          this[_matcher].describe(mismatchDescription);
        }
        mismatchDescription.add(dart.str` at index ${index}`);
        return mismatchDescription;
      }
      return super.describeMismatch(item, mismatchDescription, matchState, verbose);
    }
  };
  (src__iterable_matchers._EveryElement.new = function(matcher) {
    this[_matcher] = matcher;
    src__iterable_matchers._EveryElement.__proto__.new.call(this);
  }).prototype = src__iterable_matchers._EveryElement.prototype;
  dart.addTypeTests(src__iterable_matchers._EveryElement);
  dart.setMethodSignature(src__iterable_matchers._EveryElement, () => ({
    __proto__: dart.getMethods(src__iterable_matchers._EveryElement.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__iterable_matchers._EveryElement, () => ({
    __proto__: dart.getFields(src__iterable_matchers._EveryElement.__proto__),
    [_matcher]: dart.finalFieldType(src__interfaces.Matcher)
  }));
  src__iterable_matchers.anyElement = function(matcher) {
    return new src__iterable_matchers._AnyElement.new(src__util.wrapMatcher(matcher));
  };
  dart.fn(src__iterable_matchers.anyElement, dynamicToMatcher());
  src__iterable_matchers._AnyElement = class _AnyElement extends src__iterable_matchers._IterableMatcher {
    matches(item, matchState) {
      return core.bool._check(dart.dsend(item, 'any', dart.fn(e => this[_matcher].matches(e, matchState), dynamicTobool())));
    }
    describe(description) {
      return description.add('some element ').addDescriptionOf(this[_matcher]);
    }
  };
  (src__iterable_matchers._AnyElement.new = function(matcher) {
    this[_matcher] = matcher;
    src__iterable_matchers._AnyElement.__proto__.new.call(this);
  }).prototype = src__iterable_matchers._AnyElement.prototype;
  dart.addTypeTests(src__iterable_matchers._AnyElement);
  dart.setMethodSignature(src__iterable_matchers._AnyElement, () => ({
    __proto__: dart.getMethods(src__iterable_matchers._AnyElement.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__iterable_matchers._AnyElement, () => ({
    __proto__: dart.getFields(src__iterable_matchers._AnyElement.__proto__),
    [_matcher]: dart.finalFieldType(src__interfaces.Matcher)
  }));
  src__iterable_matchers.orderedEquals = function(expected) {
    return new src__iterable_matchers._OrderedEquals.new(expected);
  };
  dart.fn(src__iterable_matchers.orderedEquals, IterableToMatcher());
  const _expected = Symbol('_expected');
  src__iterable_matchers._OrderedEquals = class _OrderedEquals extends src__interfaces.Matcher {
    matches(item, matchState) {
      return core.Iterable.is(item) && dart.test(this[_matcher].matches(item, matchState));
    }
    describe(description) {
      return description.add('equals ').addDescriptionOf(this[_expected]).add(' ordered');
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      if (!core.Iterable.is(item)) {
        return mismatchDescription.add('is not an Iterable');
      } else {
        return this[_matcher].describeMismatch(item, mismatchDescription, matchState, verbose);
      }
    }
  };
  (src__iterable_matchers._OrderedEquals.new = function(expected) {
    this[_matcher] = null;
    this[_expected] = expected;
    src__iterable_matchers._OrderedEquals.__proto__.new.call(this);
    this[_matcher] = src__core_matchers.equals(this[_expected], 1);
  }).prototype = src__iterable_matchers._OrderedEquals.prototype;
  dart.addTypeTests(src__iterable_matchers._OrderedEquals);
  dart.setMethodSignature(src__iterable_matchers._OrderedEquals, () => ({
    __proto__: dart.getMethods(src__iterable_matchers._OrderedEquals.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__iterable_matchers._OrderedEquals, () => ({
    __proto__: dart.getFields(src__iterable_matchers._OrderedEquals.__proto__),
    [_expected]: dart.finalFieldType(core.Iterable),
    [_matcher]: dart.fieldType(src__interfaces.Matcher)
  }));
  src__iterable_matchers.unorderedEquals = function(expected) {
    return new src__iterable_matchers._UnorderedEquals.new(expected);
  };
  dart.fn(src__iterable_matchers.unorderedEquals, IterableToMatcher());
  const _expectedValues = Symbol('_expectedValues');
  const _test = Symbol('_test');
  src__iterable_matchers._UnorderedMatches = class _UnorderedMatches extends src__interfaces.Matcher {
    [_test](item) {
      if (core.Iterable.is(item)) {
        let list = item[$toList]();
        if (dart.notNull(this[_expected][$length]) > dart.notNull(list[$length])) {
          return dart.str`has too few elements (${list[$length]} < ${this[_expected][$length]})`;
        } else if (dart.notNull(this[_expected][$length]) < dart.notNull(list[$length])) {
          return dart.str`has too many elements (${list[$length]} > ${this[_expected][$length]})`;
        }
        let matched = ListOfbool().filled(list[$length], false);
        let expectedPosition = 0;
        for (let expectedMatcher of this[_expected]) {
          let actualPosition = 0;
          let gotMatch = false;
          for (let actualElement of list) {
            if (!dart.test(matched[$_get](actualPosition))) {
              if (dart.test(expectedMatcher.matches(actualElement, new _js_helper.LinkedMap.new()))) {
                matched[$_set](actualPosition, gotMatch = true);
                break;
              }
            }
            ++actualPosition;
          }
          if (!gotMatch) {
            return dart.toString(new src__description.StringDescription.new().add('has no match for ').addDescriptionOf(expectedMatcher).add(dart.str` at index ${expectedPosition}`));
          }
          ++expectedPosition;
        }
        return null;
      } else {
        return 'not iterable';
      }
    }
    matches(item, mismatchState) {
      return this[_test](item) == null;
    }
    describe(description) {
      return description.add('matches ').addAll('[', ', ', ']', this[_expected]).add(' unordered');
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      return mismatchDescription.add(this[_test](item));
    }
  };
  (src__iterable_matchers._UnorderedMatches.new = function(expected) {
    this[_expected] = expected[$map](src__interfaces.Matcher, src__util.wrapMatcher)[$toList]();
    src__iterable_matchers._UnorderedMatches.__proto__.new.call(this);
  }).prototype = src__iterable_matchers._UnorderedMatches.prototype;
  dart.addTypeTests(src__iterable_matchers._UnorderedMatches);
  dart.setMethodSignature(src__iterable_matchers._UnorderedMatches, () => ({
    __proto__: dart.getMethods(src__iterable_matchers._UnorderedMatches.__proto__),
    [_test]: dart.fnType(core.String, [dart.dynamic]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description])
  }));
  dart.setFieldSignature(src__iterable_matchers._UnorderedMatches, () => ({
    __proto__: dart.getFields(src__iterable_matchers._UnorderedMatches.__proto__),
    [_expected]: dart.finalFieldType(ListOfMatcher())
  }));
  src__iterable_matchers._UnorderedEquals = class _UnorderedEquals extends src__iterable_matchers._UnorderedMatches {
    describe(description) {
      return description.add('equals ').addDescriptionOf(this[_expectedValues]).add(' unordered');
    }
  };
  (src__iterable_matchers._UnorderedEquals.new = function(expected) {
    this[_expectedValues] = expected[$toList]();
    src__iterable_matchers._UnorderedEquals.__proto__.new.call(this, expected[$map](dart.dynamic, src__core_matchers.equals));
  }).prototype = src__iterable_matchers._UnorderedEquals.prototype;
  dart.addTypeTests(src__iterable_matchers._UnorderedEquals);
  dart.setFieldSignature(src__iterable_matchers._UnorderedEquals, () => ({
    __proto__: dart.getFields(src__iterable_matchers._UnorderedEquals.__proto__),
    [_expectedValues]: dart.finalFieldType(core.List)
  }));
  src__iterable_matchers.unorderedMatches = function(expected) {
    return new src__iterable_matchers._UnorderedMatches.new(expected);
  };
  dart.fn(src__iterable_matchers.unorderedMatches, IterableToMatcher());
  src__iterable_matchers.pairwiseCompare = function(S, T, expected, comparator, description) {
    return new (src__iterable_matchers._PairwiseCompare$(S, T)).new(expected, comparator, description);
  };
  dart.fn(src__iterable_matchers.pairwiseCompare, IterableOfSAndFnAndStringToMatcher());
  src__iterable_matchers._Comparator$ = dart.generic((S, T) => {
    const _Comparator = dart.typedef('_Comparator', () => dart.fnType(core.bool, [S, T]));
    return _Comparator;
  });
  src__iterable_matchers._Comparator = src__iterable_matchers._Comparator$();
  const _comparator = Symbol('_comparator');
  const _description = Symbol('_description');
  const _is__PairwiseCompare_default = Symbol('_is__PairwiseCompare_default');
  src__iterable_matchers._PairwiseCompare$ = dart.generic((S, T) => {
    let IterableOfS = () => (IterableOfS = dart.constFn(core.Iterable$(S)))();
    let SAndTTobool = () => (SAndTTobool = dart.constFn(dart.fnType(core.bool, [S, T])))();
    class _PairwiseCompare extends src__iterable_matchers._IterableMatcher {
      matches(item, matchState) {
        if (core.Iterable.is(item)) {
          if (item[$length] != this[_expected][$length]) return false;
          let iterator = item[$iterator];
          let i = 0;
          for (let e of this[_expected]) {
            iterator.moveNext();
            if (!dart.test(this[_comparator](e, T._check(iterator.current)))) {
              src__util.addStateInfo(matchState, new _js_helper.LinkedMap.from(['index', i, 'expected', e, 'actual', iterator.current]));
              return false;
            }
            i++;
          }
          return true;
        } else {
          return false;
        }
      }
      describe(description) {
        return description.add(dart.str`pairwise ${this[_description]} `).addDescriptionOf(this[_expected]);
      }
      describeMismatch(item, mismatchDescription, matchState, verbose) {
        if (!core.Iterable.is(item)) {
          return mismatchDescription.add('is not an Iterable');
        } else if (!dart.equals(dart.dload(item, 'length'), this[_expected][$length])) {
          return mismatchDescription.add(dart.str`has length ${dart.dload(item, 'length')} instead of ${this[_expected][$length]}`);
        } else {
          return mismatchDescription.add('has ').addDescriptionOf(matchState[$_get]("actual")).add(dart.str` which is not ${this[_description]} `).addDescriptionOf(matchState[$_get]("expected")).add(dart.str` at index ${matchState[$_get]("index")}`);
        }
      }
    }
    (_PairwiseCompare.new = function(expected, comparator, description) {
      this[_expected] = expected;
      this[_comparator] = comparator;
      this[_description] = description;
      _PairwiseCompare.__proto__.new.call(this);
    }).prototype = _PairwiseCompare.prototype;
    dart.addTypeTests(_PairwiseCompare);
    _PairwiseCompare.prototype[_is__PairwiseCompare_default] = true;
    dart.setMethodSignature(_PairwiseCompare, () => ({
      __proto__: dart.getMethods(_PairwiseCompare.__proto__),
      matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
      describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description]),
      describeMismatch: dart.fnType(src__interfaces.Description, [dart.dynamic, src__interfaces.Description, core.Map, core.bool])
    }));
    dart.setFieldSignature(_PairwiseCompare, () => ({
      __proto__: dart.getFields(_PairwiseCompare.__proto__),
      [_expected]: dart.finalFieldType(IterableOfS()),
      [_comparator]: dart.finalFieldType(SAndTTobool()),
      [_description]: dart.finalFieldType(core.String)
    }));
    return _PairwiseCompare;
  });
  src__iterable_matchers._PairwiseCompare = src__iterable_matchers._PairwiseCompare$();
  dart.addTypeTests(src__iterable_matchers._PairwiseCompare, _is__PairwiseCompare_default);
  src__iterable_matchers.containsAllInOrder = function(expected) {
    return new src__iterable_matchers._ContainsAllInOrder.new(expected);
  };
  dart.fn(src__iterable_matchers.containsAllInOrder, IterableToMatcher());
  src__iterable_matchers._ContainsAllInOrder = class _ContainsAllInOrder extends core.Object {
    [_test](item, matchState) {
      if (!core.Iterable.is(item)) return 'not an iterable';
      let matchers = this[_expected][$map](src__interfaces.Matcher, src__util.wrapMatcher)[$toList]();
      let matcherIndex = 0;
      for (let value of core.Iterable._check(item)) {
        if (dart.test(matchers[$_get](matcherIndex).matches(value, matchState))) matcherIndex++;
        if (matcherIndex === matchers[$length]) return null;
      }
      return dart.toString(new src__description.StringDescription.new().add('did not find a value matching ').addDescriptionOf(matchers[$_get](matcherIndex)).add(' following expected prior values'));
    }
    matches(item, matchState) {
      return this[_test](item, matchState) == null;
    }
    describe(description) {
      return description.add('contains in order(').addDescriptionOf(this[_expected]).add(')');
    }
    describeMismatch(item, mismatchDescription, matchState, verbose) {
      return mismatchDescription.add(this[_test](item, matchState));
    }
  };
  (src__iterable_matchers._ContainsAllInOrder.new = function(expected) {
    this[_expected] = expected;
  }).prototype = src__iterable_matchers._ContainsAllInOrder.prototype;
  dart.addTypeTests(src__iterable_matchers._ContainsAllInOrder);
  src__iterable_matchers._ContainsAllInOrder[dart.implements] = () => [src__interfaces.Matcher];
  dart.setMethodSignature(src__iterable_matchers._ContainsAllInOrder, () => ({
    __proto__: dart.getMethods(src__iterable_matchers._ContainsAllInOrder.__proto__),
    [_test]: dart.fnType(core.String, [dart.dynamic, core.Map]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map]),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description]),
    describeMismatch: dart.fnType(src__interfaces.Description, [dart.dynamic, src__interfaces.Description, core.Map, core.bool])
  }));
  dart.setFieldSignature(src__iterable_matchers._ContainsAllInOrder, () => ({
    __proto__: dart.getFields(src__iterable_matchers._ContainsAllInOrder.__proto__),
    [_expected]: dart.finalFieldType(core.Iterable)
  }));
  dart.trackLibraries("packages/matcher/src/iterable_matchers.ddc", {
    "package:matcher/src/iterable_matchers.dart": src__iterable_matchers
  }, '{"version":3,"sourceRoot":"","sources":["iterable_matchers.dart"],"names":[],"mappings":"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","file":"iterable_matchers.ddc.js"}');
  // Exports:
  return {
    src__iterable_matchers: src__iterable_matchers
  };
});

//# sourceMappingURL=iterable_matchers.ddc.js.map
