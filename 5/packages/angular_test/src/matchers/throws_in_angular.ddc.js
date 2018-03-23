define(['dart_sdk', 'packages/test/src/backend/declarer', 'packages/matcher/src/interfaces', 'packages/angular/src/facade/exception_handler'], function(dart_sdk, declarer, interfaces, exception_handler) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__frontend__throws_matcher = declarer.src__frontend__throws_matcher;
  const src__interfaces = interfaces.src__interfaces;
  const src__facade__exceptions = exception_handler.src__facade__exceptions;
  const _root = Object.create(null);
  const src__matchers__throws_in_angular = Object.create(_root);
  let MatcherToMatcher = () => (MatcherToMatcher = dart.constFn(dart.fnType(src__interfaces.Matcher, [src__interfaces.Matcher])))();
  src__matchers__throws_in_angular.throwsInAngular = function(matcher) {
    return src__frontend__throws_matcher.throwsA(new src__matchers__throws_in_angular._OrWrapped.new(matcher));
  };
  dart.fn(src__matchers__throws_in_angular.throwsInAngular, MatcherToMatcher());
  const _typeMatcher = Symbol('_typeMatcher');
  src__matchers__throws_in_angular._OrWrapped = class _OrWrapped extends src__interfaces.Matcher {
    describe(description) {
      return description.add('Matches ').addDescriptionOf(this[_typeMatcher]).add(' or an Angular exception that wraps another exception');
    }
    matches(item, _) {
      while (src__facade__exceptions.WrappedException.is(item)) {
        item = dart.dload(item, 'originalException');
      }
      return this[_typeMatcher].matches(item, _);
    }
  };
  (src__matchers__throws_in_angular._OrWrapped.new = function(typeMatcher) {
    this[_typeMatcher] = typeMatcher;
    src__matchers__throws_in_angular._OrWrapped.__proto__.new.call(this);
  }).prototype = src__matchers__throws_in_angular._OrWrapped.prototype;
  dart.addTypeTests(src__matchers__throws_in_angular._OrWrapped);
  dart.setMethodSignature(src__matchers__throws_in_angular._OrWrapped, () => ({
    __proto__: dart.getMethods(src__matchers__throws_in_angular._OrWrapped.__proto__),
    describe: dart.fnType(src__interfaces.Description, [src__interfaces.Description]),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.setFieldSignature(src__matchers__throws_in_angular._OrWrapped, () => ({
    __proto__: dart.getFields(src__matchers__throws_in_angular._OrWrapped.__proto__),
    [_typeMatcher]: dart.finalFieldType(src__interfaces.Matcher)
  }));
  dart.trackLibraries("packages/angular_test/src/matchers/throws_in_angular.ddc", {
    "package:angular_test/src/matchers/throws_in_angular.dart": src__matchers__throws_in_angular
  }, '{"version":3,"sourceRoot":"","sources":["throws_in_angular.dart"],"names":[],"mappings":";;;;;;;;;;;8DAkBwB,OAAe;UAAK,sCAAO,CAAC,IAAI,+CAAU,CAAC,OAAO;EAAE;;;;aAQrD,WAAuB;YAAK,YAAW,IACpD,CAAC,4BACY,CAAC,kBAAY,KAC1B,CAAC;IAAwD;YAGpD,IAAI,EAAE,CAAC;AAClB,yDAAO,IAAI,GAAsB;AAC/B,YAAI,cAAG,IAAI;;AAEb,YAAO,mBAAY,QAAQ,CAAC,IAAI,EAAE,CAAC;IACrC;;8DAdgB,WAAY;IAAZ,kBAAY,GAAZ,WAAY;;EAAC","file":"throws_in_angular.ddc.js"}');
  // Exports:
  return {
    src__matchers__throws_in_angular: src__matchers__throws_in_angular
  };
});

//# sourceMappingURL=throws_in_angular.ddc.js.map
