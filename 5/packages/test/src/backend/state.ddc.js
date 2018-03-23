define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__backend__state = Object.create(_root);
  src__backend__state.State = class State extends core.Object {
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get result() {
      return this[result$];
    }
    set result(value) {
      super.result = value;
    }
    get shouldBeDone() {
      return dart.equals(this.status, src__backend__state.Status.complete) && dart.test(this.result.isPassing);
    }
    _equals(other) {
      if (other == null) return false;
      return src__backend__state.State.is(other) && dart.equals(this.status, other.status) && dart.equals(this.result, other.result);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.status)) ^ 7 * dart.notNull(dart.hashCode(this.result))) >>> 0;
    }
    toString() {
      if (dart.equals(this.status, src__backend__state.Status.pending)) return "pending";
      if (dart.equals(this.status, src__backend__state.Status.complete)) return dart.toString(this.result);
      if (dart.equals(this.result, src__backend__state.Result.success)) return "running";
      return dart.str`running with ${this.result}`;
    }
  };
  (src__backend__state.State.new = function(status, result) {
    this[status$] = status;
    this[result$] = result;
  }).prototype = src__backend__state.State.prototype;
  dart.addTypeTests(src__backend__state.State);
  const status$ = Symbol("State.status");
  const result$ = Symbol("State.result");
  dart.setGetterSignature(src__backend__state.State, () => ({
    __proto__: dart.getGetters(src__backend__state.State.__proto__),
    shouldBeDone: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__backend__state.State, () => ({
    __proto__: dart.getFields(src__backend__state.State.__proto__),
    status: dart.finalFieldType(src__backend__state.Status),
    result: dart.finalFieldType(src__backend__state.Result)
  }));
  dart.defineExtensionMethods(src__backend__state.State, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__backend__state.State, ['hashCode']);
  src__backend__state.Status = class Status extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    static parse(name) {
      switch (name) {
        case "pending":
        {
          return src__backend__state.Status.pending;
        }
        case "running":
        {
          return src__backend__state.Status.running;
        }
        case "complete":
        {
          return src__backend__state.Status.complete;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new(dart.str`Invalid status name "${name}".`));
        }
      }
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__state.Status.__ = function(name) {
    this[name$] = name;
  }).prototype = src__backend__state.Status.prototype;
  dart.addTypeTests(src__backend__state.Status);
  const name$ = Symbol("Status.name");
  dart.setFieldSignature(src__backend__state.Status, () => ({
    __proto__: dart.getFields(src__backend__state.Status.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__backend__state.Status, ['toString']);
  dart.defineLazy(src__backend__state.Status, {
    /*src__backend__state.Status.pending*/get pending() {
      return dart.const(new src__backend__state.Status.__("pending"));
    },
    /*src__backend__state.Status.running*/get running() {
      return dart.const(new src__backend__state.Status.__("running"));
    },
    /*src__backend__state.Status.complete*/get complete() {
      return dart.const(new src__backend__state.Status.__("complete"));
    }
  });
  src__backend__state.Result = class Result extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get isPassing() {
      return this._equals(src__backend__state.Result.success) || this._equals(src__backend__state.Result.skipped);
    }
    get isFailing() {
      return !dart.test(this.isPassing);
    }
    static parse(name) {
      switch (name) {
        case "success":
        {
          return src__backend__state.Result.success;
        }
        case "skipped":
        {
          return src__backend__state.Result.skipped;
        }
        case "failure":
        {
          return src__backend__state.Result.failure;
        }
        case "error":
        {
          return src__backend__state.Result.error;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new(dart.str`Invalid result name "${name}".`));
        }
      }
    }
    toString() {
      return this.name;
    }
  };
  (src__backend__state.Result.__ = function(name) {
    this[name$0] = name;
  }).prototype = src__backend__state.Result.prototype;
  dart.addTypeTests(src__backend__state.Result);
  const name$0 = Symbol("Result.name");
  dart.setGetterSignature(src__backend__state.Result, () => ({
    __proto__: dart.getGetters(src__backend__state.Result.__proto__),
    isPassing: dart.fnType(core.bool, []),
    isFailing: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__backend__state.Result, () => ({
    __proto__: dart.getFields(src__backend__state.Result.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__backend__state.Result, ['toString']);
  dart.defineLazy(src__backend__state.Result, {
    /*src__backend__state.Result.success*/get success() {
      return dart.const(new src__backend__state.Result.__("success"));
    },
    /*src__backend__state.Result.skipped*/get skipped() {
      return dart.const(new src__backend__state.Result.__("skipped"));
    },
    /*src__backend__state.Result.failure*/get failure() {
      return dart.const(new src__backend__state.Result.__("failure"));
    },
    /*src__backend__state.Result.error*/get error() {
      return dart.const(new src__backend__state.Result.__("error"));
    }
  });
  dart.trackLibraries("packages/test/src/backend/state.ddc", {
    "package:test/src/backend/state.dart": src__backend__state
  }, '{"version":3,"sourceRoot":"","sources":["state.dart"],"names":[],"mappings":";;;;;;;;IAWe;;;;;;IAMA;;;;;;;YAQsC,aAA1B,WAAM,EAAI,0BAAM,SAAS,eAAI,WAAM,UAAU;;YAIrD,KAAK;UAAL,KAAK;YACuB,8BAAzC,KAAK,iBAAa,WAAM,EAAI,KAAK,OAAO,iBAAI,WAAM,EAAI,KAAK,OAAO;;;YAElD,EAAgB,2BAAhB,WAAM,KAAa,AAAE,+BAAE,WAAM;IAAU;;AAGzD,sBAAI,WAAM,EAAI,0BAAM,QAAQ,GAAE,MAAO;AACrC,sBAAI,WAAM,EAAI,0BAAM,SAAS,GAAE,qBAAO,WAAM;AAC5C,sBAAI,WAAM,EAAI,0BAAM,QAAQ,GAAE,MAAO;AACrC,YAAO,yBAAe,WAAM;IAC9B;;4CAZY,MAAW,EAAE,MAAW;IAAnB,aAAM,GAAN,MAAM;IAAO,aAAM,GAAN,MAAM;EAAC;;;;;;;;;;;;;;;;IAiCxB;;;;;;iBAEQ,IAAW;AAAE,AAChC,cAAQ,IAAI;YACL;;AACH,gBAAO,2BAAM,QAAQ;;YAClB;;AACH,gBAAO,2BAAM,QAAQ;;YAClB;;AACH,gBAAO,2BAAM,SAAS;;;;AAEtB,qBAAM,IAAI,sBAAa,CAAC,gCAAuB,IAAI;;;IAEzD;;YAIqB,UAAI;;;4CAFV,IAAS;IAAJ,WAAI,GAAJ,IAAI;EAAC;;;;;;;;;MA9BZ,kCAAO;YAAG,gBAAM,6BAAQ,CAAC;;MAGzB,kCAAO;YAAG,gBAAM,6BAAQ,CAAC;;MASzB,mCAAQ;YAAG,gBAAM,6BAAQ,CAAC;;;;IAgD1B;;;;;;;YAMS,AAAgB,cAAR,kCAAO,KAAI,aAAQ,kCAAO;;;YAMlC,YAAC,cAAS;;iBAEX,IAAW;AAAE,AAChC,cAAQ,IAAI;YACL;;AACH,gBAAO,2BAAM,QAAQ;;YAClB;;AACH,gBAAO,2BAAM,QAAQ;;YAClB;;AACH,gBAAO,2BAAM,QAAQ;;YAClB;;AACH,gBAAO,2BAAM,MAAM;;;;AAEnB,qBAAM,IAAI,sBAAa,CAAC,gCAAuB,IAAI;;;IAEzD;;YAIqB,UAAI;;;4CAFV,IAAS;IAAJ,YAAI,GAAJ,IAAI;EAAC;;;;;;;;;;;;;;MAjDZ,kCAAO;YAAG,gBAAM,6BAAQ,CAAC;;MAMzB,kCAAO;YAAG,gBAAM,6BAAQ,CAAC;;MAMzB,kCAAO;YAAG,gBAAM,6BAAQ,CAAC;;MAKzB,gCAAK;YAAG,gBAAM,6BAAQ,CAAC","file":"state.ddc.js"}');
  // Exports:
  return {
    src__backend__state: src__backend__state
  };
});

//# sourceMappingURL=state.ddc.js.map
