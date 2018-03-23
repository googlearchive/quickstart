define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const meta = Object.create(_root);
  dart.defineLazy(meta, {
    /*meta.alwaysThrows*/get alwaysThrows() {
      return dart.const(new meta._AlwaysThrows.new());
    },
    /*meta.checked*/get checked() {
      return dart.const(new meta._Checked.new());
    },
    /*meta.experimental*/get experimental() {
      return dart.const(new meta._Experimental.new());
    },
    /*meta.factory*/get factory() {
      return dart.const(new meta._Factory.new());
    },
    /*meta.immutable*/get immutable() {
      return dart.const(new meta.Immutable.new());
    },
    /*meta.literal*/get literal() {
      return dart.const(new meta._Literal.new());
    },
    /*meta.mustCallSuper*/get mustCallSuper() {
      return dart.const(new meta._MustCallSuper.new());
    },
    /*meta.optionalTypeArgs*/get optionalTypeArgs() {
      return dart.const(new meta._OptionalTypeArgs.new());
    },
    /*meta.protected*/get protected() {
      return dart.const(new meta._Protected.new());
    },
    /*meta.required*/get required() {
      return dart.const(new meta.Required.new());
    },
    /*meta.virtual*/get virtual() {
      return dart.const(new meta._Virtual.new());
    },
    /*meta.visibleForOverriding*/get visibleForOverriding() {
      return dart.const(new meta._VisibleForOverriding.new());
    },
    /*meta.visibleForTesting*/get visibleForTesting() {
      return dart.const(new meta._VisibleForTesting.new());
    }
  });
  meta.Immutable = class Immutable extends core.Object {
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (meta.Immutable.new = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$] = reason;
  }).prototype = meta.Immutable.prototype;
  dart.addTypeTests(meta.Immutable);
  const reason$ = Symbol("Immutable.reason");
  dart.setFieldSignature(meta.Immutable, () => ({
    __proto__: dart.getFields(meta.Immutable.__proto__),
    reason: dart.finalFieldType(core.String)
  }));
  meta.Required = class Required extends core.Object {
    get reason() {
      return this[reason$0];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (meta.Required.new = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$0] = reason;
  }).prototype = meta.Required.prototype;
  dart.addTypeTests(meta.Required);
  const reason$0 = Symbol("Required.reason");
  dart.setFieldSignature(meta.Required, () => ({
    __proto__: dart.getFields(meta.Required.__proto__),
    reason: dart.finalFieldType(core.String)
  }));
  meta._AlwaysThrows = class _AlwaysThrows extends core.Object {};
  (meta._AlwaysThrows.new = function() {
  }).prototype = meta._AlwaysThrows.prototype;
  dart.addTypeTests(meta._AlwaysThrows);
  meta._Checked = class _Checked extends core.Object {};
  (meta._Checked.new = function() {
  }).prototype = meta._Checked.prototype;
  dart.addTypeTests(meta._Checked);
  meta._Experimental = class _Experimental extends core.Object {};
  (meta._Experimental.new = function() {
  }).prototype = meta._Experimental.prototype;
  dart.addTypeTests(meta._Experimental);
  meta._Factory = class _Factory extends core.Object {};
  (meta._Factory.new = function() {
  }).prototype = meta._Factory.prototype;
  dart.addTypeTests(meta._Factory);
  meta._Literal = class _Literal extends core.Object {};
  (meta._Literal.new = function() {
  }).prototype = meta._Literal.prototype;
  dart.addTypeTests(meta._Literal);
  meta._MustCallSuper = class _MustCallSuper extends core.Object {};
  (meta._MustCallSuper.new = function() {
  }).prototype = meta._MustCallSuper.prototype;
  dart.addTypeTests(meta._MustCallSuper);
  meta._OptionalTypeArgs = class _OptionalTypeArgs extends core.Object {};
  (meta._OptionalTypeArgs.new = function() {
  }).prototype = meta._OptionalTypeArgs.prototype;
  dart.addTypeTests(meta._OptionalTypeArgs);
  meta._Protected = class _Protected extends core.Object {};
  (meta._Protected.new = function() {
  }).prototype = meta._Protected.prototype;
  dart.addTypeTests(meta._Protected);
  meta._Virtual = class _Virtual extends core.Object {};
  (meta._Virtual.new = function() {
  }).prototype = meta._Virtual.prototype;
  dart.addTypeTests(meta._Virtual);
  meta._VisibleForOverriding = class _VisibleForOverriding extends core.Object {};
  (meta._VisibleForOverriding.new = function() {
  }).prototype = meta._VisibleForOverriding.prototype;
  dart.addTypeTests(meta._VisibleForOverriding);
  meta._VisibleForTesting = class _VisibleForTesting extends core.Object {};
  (meta._VisibleForTesting.new = function() {
  }).prototype = meta._VisibleForTesting.prototype;
  dart.addTypeTests(meta._VisibleForTesting);
  dart.trackLibraries("packages/meta/meta.ddc", {
    "package:meta/meta.dart": meta
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;;MAgDoB,iBAAY;YAAG,gBAAM,sBAAa;;MAQvC,YAAO;YAAG,gBAAM,iBAAQ;;MAsBnB,iBAAY;YAAG,gBAAM,sBAAa;;MAYvC,YAAO;YAAG,gBAAM,iBAAQ;;MAYvB,cAAS;YAAG,gBAAM,kBAAS;;MAa5B,YAAO;YAAG,gBAAM,iBAAQ;;MAelB,kBAAa;YAAG,gBAAM,uBAAc;;MAMjC,qBAAgB;YAAG,gBAAM,0BAAiB;;MAkBjD,cAAS;YAAG,gBAAM,mBAAU;;MAe9B,aAAQ;YAAG,gBAAM,iBAAQ;;MAGzB,YAAO;YAAG,gBAAM,iBAAQ;;MAWX,yBAAoB;YAC5C,gBAAM,8BAAqB;;MAWN,sBAAiB;YAAG,gBAAM,2BAAkB;;;;IAOtD;;;;;;;iCAGI,MAAW;2BAAN;iBAAM,GAAN,MAAM;EAAE;;;;;;;;IAgBjB;;;;;;;gCAGG,MAAW;2BAAN;kBAAM,GAAN,MAAM;EAAE;;;;;;;;;EAIR;;;;EAIL;;;;EAIK;;;;EAIL;;;;EAIA;;;;EAIM;;;;EAIG;;;;EAIP;;;;EAIF;;;;EAIa;;;;EAIH","file":"meta.ddc.js"}');
  // Exports:
  return {
    meta: meta
  };
});

//# sourceMappingURL=meta.ddc.js.map
