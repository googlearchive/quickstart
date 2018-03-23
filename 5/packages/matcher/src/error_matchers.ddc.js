define(['dart_sdk', 'packages/matcher/src/core_matchers'], function(dart_sdk, core_matchers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core_matchers = core_matchers.src__core_matchers;
  const _root = Object.create(null);
  const src__error_matchers = Object.create(_root);
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isArgumentError*/get isArgumentError() {
      return dart.const(new src__error_matchers._ArgumentError.new());
    }
  });
  src__error_matchers._ArgumentError = class _ArgumentError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.ArgumentError.is(item);
    }
  };
  (src__error_matchers._ArgumentError.new = function() {
    src__error_matchers._ArgumentError.__proto__.new.call(this, "ArgumentError");
  }).prototype = src__error_matchers._ArgumentError.prototype;
  dart.addTypeTests(src__error_matchers._ArgumentError);
  dart.setMethodSignature(src__error_matchers._ArgumentError, () => ({
    __proto__: dart.getMethods(src__error_matchers._ArgumentError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isConcurrentModificationError*/get isConcurrentModificationError() {
      return dart.const(new src__error_matchers._ConcurrentModificationError.new());
    }
  });
  src__error_matchers._ConcurrentModificationError = class _ConcurrentModificationError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.ConcurrentModificationError.is(item);
    }
  };
  (src__error_matchers._ConcurrentModificationError.new = function() {
    src__error_matchers._ConcurrentModificationError.__proto__.new.call(this, "ConcurrentModificationError");
  }).prototype = src__error_matchers._ConcurrentModificationError.prototype;
  dart.addTypeTests(src__error_matchers._ConcurrentModificationError);
  dart.setMethodSignature(src__error_matchers._ConcurrentModificationError, () => ({
    __proto__: dart.getMethods(src__error_matchers._ConcurrentModificationError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isCyclicInitializationError*/get isCyclicInitializationError() {
      return dart.const(new src__error_matchers._CyclicInitializationError.new());
    }
  });
  src__error_matchers._CyclicInitializationError = class _CyclicInitializationError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.CyclicInitializationError.is(item);
    }
  };
  (src__error_matchers._CyclicInitializationError.new = function() {
    src__error_matchers._CyclicInitializationError.__proto__.new.call(this, "CyclicInitializationError");
  }).prototype = src__error_matchers._CyclicInitializationError.prototype;
  dart.addTypeTests(src__error_matchers._CyclicInitializationError);
  dart.setMethodSignature(src__error_matchers._CyclicInitializationError, () => ({
    __proto__: dart.getMethods(src__error_matchers._CyclicInitializationError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isException*/get isException() {
      return dart.const(new src__error_matchers._Exception.new());
    }
  });
  src__error_matchers._Exception = class _Exception extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.Exception.is(item);
    }
  };
  (src__error_matchers._Exception.new = function() {
    src__error_matchers._Exception.__proto__.new.call(this, "Exception");
  }).prototype = src__error_matchers._Exception.prototype;
  dart.addTypeTests(src__error_matchers._Exception);
  dart.setMethodSignature(src__error_matchers._Exception, () => ({
    __proto__: dart.getMethods(src__error_matchers._Exception.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isFormatException*/get isFormatException() {
      return dart.const(new src__error_matchers._FormatException.new());
    }
  });
  src__error_matchers._FormatException = class _FormatException extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.FormatException.is(item);
    }
  };
  (src__error_matchers._FormatException.new = function() {
    src__error_matchers._FormatException.__proto__.new.call(this, "FormatException");
  }).prototype = src__error_matchers._FormatException.prototype;
  dart.addTypeTests(src__error_matchers._FormatException);
  dart.setMethodSignature(src__error_matchers._FormatException, () => ({
    __proto__: dart.getMethods(src__error_matchers._FormatException.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isNoSuchMethodError*/get isNoSuchMethodError() {
      return dart.const(new src__error_matchers._NoSuchMethodError.new());
    }
  });
  src__error_matchers._NoSuchMethodError = class _NoSuchMethodError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.NoSuchMethodError.is(item);
    }
  };
  (src__error_matchers._NoSuchMethodError.new = function() {
    src__error_matchers._NoSuchMethodError.__proto__.new.call(this, "NoSuchMethodError");
  }).prototype = src__error_matchers._NoSuchMethodError.prototype;
  dart.addTypeTests(src__error_matchers._NoSuchMethodError);
  dart.setMethodSignature(src__error_matchers._NoSuchMethodError, () => ({
    __proto__: dart.getMethods(src__error_matchers._NoSuchMethodError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isNullThrownError*/get isNullThrownError() {
      return dart.const(new src__error_matchers._NullThrownError.new());
    }
  });
  src__error_matchers._NullThrownError = class _NullThrownError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.NullThrownError.is(item);
    }
  };
  (src__error_matchers._NullThrownError.new = function() {
    src__error_matchers._NullThrownError.__proto__.new.call(this, "NullThrownError");
  }).prototype = src__error_matchers._NullThrownError.prototype;
  dart.addTypeTests(src__error_matchers._NullThrownError);
  dart.setMethodSignature(src__error_matchers._NullThrownError, () => ({
    __proto__: dart.getMethods(src__error_matchers._NullThrownError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isRangeError*/get isRangeError() {
      return dart.const(new src__error_matchers._RangeError.new());
    }
  });
  src__error_matchers._RangeError = class _RangeError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.RangeError.is(item);
    }
  };
  (src__error_matchers._RangeError.new = function() {
    src__error_matchers._RangeError.__proto__.new.call(this, "RangeError");
  }).prototype = src__error_matchers._RangeError.prototype;
  dart.addTypeTests(src__error_matchers._RangeError);
  dart.setMethodSignature(src__error_matchers._RangeError, () => ({
    __proto__: dart.getMethods(src__error_matchers._RangeError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isStateError*/get isStateError() {
      return dart.const(new src__error_matchers._StateError.new());
    }
  });
  src__error_matchers._StateError = class _StateError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.StateError.is(item);
    }
  };
  (src__error_matchers._StateError.new = function() {
    src__error_matchers._StateError.__proto__.new.call(this, "StateError");
  }).prototype = src__error_matchers._StateError.prototype;
  dart.addTypeTests(src__error_matchers._StateError);
  dart.setMethodSignature(src__error_matchers._StateError, () => ({
    __proto__: dart.getMethods(src__error_matchers._StateError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isUnimplementedError*/get isUnimplementedError() {
      return dart.const(new src__error_matchers._UnimplementedError.new());
    }
  });
  src__error_matchers._UnimplementedError = class _UnimplementedError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.UnimplementedError.is(item);
    }
  };
  (src__error_matchers._UnimplementedError.new = function() {
    src__error_matchers._UnimplementedError.__proto__.new.call(this, "UnimplementedError");
  }).prototype = src__error_matchers._UnimplementedError.prototype;
  dart.addTypeTests(src__error_matchers._UnimplementedError);
  dart.setMethodSignature(src__error_matchers._UnimplementedError, () => ({
    __proto__: dart.getMethods(src__error_matchers._UnimplementedError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.defineLazy(src__error_matchers, {
    /*src__error_matchers.isUnsupportedError*/get isUnsupportedError() {
      return dart.const(new src__error_matchers._UnsupportedError.new());
    }
  });
  src__error_matchers._UnsupportedError = class _UnsupportedError extends src__core_matchers.TypeMatcher {
    matches(item, matchState) {
      return core.UnsupportedError.is(item);
    }
  };
  (src__error_matchers._UnsupportedError.new = function() {
    src__error_matchers._UnsupportedError.__proto__.new.call(this, "UnsupportedError");
  }).prototype = src__error_matchers._UnsupportedError.prototype;
  dart.addTypeTests(src__error_matchers._UnsupportedError);
  dart.setMethodSignature(src__error_matchers._UnsupportedError, () => ({
    __proto__: dart.getMethods(src__error_matchers._UnsupportedError.__proto__),
    matches: dart.fnType(core.bool, [dart.dynamic, core.Map])
  }));
  dart.trackLibraries("packages/matcher/src/error_matchers.ddc", {
    "package:matcher/src/error_matchers.dart": src__error_matchers
  }, '{"version":3,"sourceRoot":"","sources":["error_matchers.dart"],"names":[],"mappings":";;;;;;;;;MAQc,mCAAe;YAAG,gBAAM,sCAAc;;;;YAIrC,IAAI,EAAE,UAAc;mCAAK,IAAI;IAAiB;;;AADlC,gEAAM;EAAgB;;;;;;;MAKnC,iDAA6B;YACvC,gBAAM,oDAA4B;;;;YAIvB,IAAI,EAAE,UAAc;iDAAK,IAAI;IAA+B;;;AADlC,8EAAM;EAA8B;;;;;;;MAK/D,+CAA2B;YAAG,gBAAM,kDAA0B;;;;YAI7D,IAAI,EAAE,UAAc;+CAAK,IAAI;IAA6B;;;AADlC,4EAAM;EAA4B;;;;;;;MAK3D,+BAAW;YAAG,gBAAM,kCAAU;;;;YAI7B,IAAI,EAAE,UAAc;+BAAK,IAAI;IAAa;;;AADlC,4DAAM;EAAY;;;;;;;MAK3B,qCAAiB;YAAG,gBAAM,wCAAgB;;;;YAIzC,IAAI,EAAE,UAAc;qCAAK,IAAI;IAAmB;;;AADlC,kEAAM;EAAkB;;;;;;;MAKvC,uCAAmB;YAAG,gBAAM,0CAAkB;;;;YAI7C,IAAI,EAAE,UAAc;uCAAK,IAAI;IAAqB;;;AADlC,oEAAM;EAAoB;;;;;;;MAK3C,qCAAiB;YAAG,gBAAM,wCAAgB;;;;YAIzC,IAAI,EAAE,UAAc;qCAAK,IAAI;IAAmB;;;AADlC,kEAAM;EAAkB;;;;;;;MAKvC,gCAAY;YAAG,gBAAM,mCAAW;;;;YAI/B,IAAI,EAAE,UAAc;gCAAK,IAAI;IAAc;;;AADlC,6DAAM;EAAa;;;;;;;MAK7B,gCAAY;YAAG,gBAAM,mCAAW;;;;YAI/B,IAAI,EAAE,UAAc;gCAAK,IAAI;IAAc;;;AADlC,6DAAM;EAAa;;;;;;;MAK7B,wCAAoB;YAAG,gBAAM,2CAAmB;;;;YAI/C,IAAI,EAAE,UAAc;wCAAK,IAAI;IAAsB;;;AADlC,qEAAM;EAAqB;;;;;;;MAK7C,sCAAkB;YAAG,gBAAM,yCAAiB;;;;YAI3C,IAAI,EAAE,UAAc;sCAAK,IAAI;IAAoB;;;AADlC,mEAAM;EAAmB","file":"error_matchers.ddc.js"}');
  // Exports:
  return {
    src__error_matchers: src__error_matchers
  };
});

//# sourceMappingURL=error_matchers.ddc.js.map
