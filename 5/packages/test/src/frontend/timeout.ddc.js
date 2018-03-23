define(['dart_sdk', 'packages/string_scanner/src/string_scanner'], function(dart_sdk, string_scanner) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__string_scanner = string_scanner.src__string_scanner;
  const _root = Object.create(null);
  const src__frontend__timeout = Object.create(_root);
  const $round = dartx.round;
  const $hashCode = dartx.hashCode;
  dart.defineLazy(src__frontend__timeout, {
    /*src__frontend__timeout._untilUnit*/get _untilUnit() {
      return core.RegExp.new("[^a-df-z\\s]+", {caseSensitive: false});
    },
    /*src__frontend__timeout._unit*/get _unit() {
      return core.RegExp.new("([um]s|[dhms])", {caseSensitive: false});
    },
    /*src__frontend__timeout._whitespace*/get _whitespace() {
      return core.RegExp.new("\\s+");
    }
  });
  src__frontend__timeout.Timeout = class Timeout extends core.Object {
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get scaleFactor() {
      return this[scaleFactor$];
    }
    set scaleFactor(value) {
      super.scaleFactor = value;
    }
    static parse(timeout) {
      let scanner = new src__string_scanner.StringScanner.new(timeout);
      if (dart.test(scanner.scan("none"))) {
        scanner.expectDone();
        return src__frontend__timeout.Timeout.none;
      }
      scanner.expect(src__frontend__timeout._untilUnit, {name: "number"});
      let number = core.double.parse(scanner.lastMatch._get(0));
      if (dart.test(scanner.scan("x")) || dart.test(scanner.scan("X"))) {
        scanner.expectDone();
        return new src__frontend__timeout.Timeout.factor(number);
      }
      let microseconds = 0.0;
      while (true) {
        scanner.expect(src__frontend__timeout._unit, {name: "unit"});
        microseconds = dart.notNull(microseconds) + dart.notNull(src__frontend__timeout.Timeout._microsecondsFor(number, scanner.lastMatch._get(0)));
        scanner.scan(src__frontend__timeout._whitespace);
        if (!dart.test(scanner.scan(src__frontend__timeout._untilUnit))) break;
        number = core.double.parse(scanner.lastMatch._get(0));
      }
      scanner.expectDone();
      return new src__frontend__timeout.Timeout.new(new core.Duration.new({microseconds: microseconds[$round]()}));
    }
    static _microsecondsFor(number, unit) {
      switch (unit) {
        case "d":
        {
          return dart.notNull(number) * 24 * 60 * 60 * 1000000;
        }
        case "h":
        {
          return dart.notNull(number) * 60 * 60 * 1000000;
        }
        case "m":
        {
          return dart.notNull(number) * 60 * 1000000;
        }
        case "s":
        {
          return dart.notNull(number) * 1000000;
        }
        case "ms":
        {
          return dart.notNull(number) * 1000;
        }
        case "us":
        {
          return number;
        }
        default:
        {
          dart.throw(new core.ArgumentError.new(dart.str`Unknown unit ${unit}.`));
        }
      }
    }
    merge(other) {
      if (this._equals(src__frontend__timeout.Timeout.none) || dart.equals(other, src__frontend__timeout.Timeout.none)) return src__frontend__timeout.Timeout.none;
      if (other.duration != null) return new src__frontend__timeout.Timeout.new(other.duration);
      if (this.duration != null) return new src__frontend__timeout.Timeout.new(this.duration['*'](other.scaleFactor));
      return new src__frontend__timeout.Timeout.factor(dart.notNull(this.scaleFactor) * dart.notNull(other.scaleFactor));
    }
    apply(base) {
      if (this._equals(src__frontend__timeout.Timeout.none)) return null;
      return this.duration == null ? base['*'](this.scaleFactor) : this.duration;
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.duration)) ^ 5 * dart.hashCode(this.scaleFactor)) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return src__frontend__timeout.Timeout.is(other) && dart.equals(other.duration, this.duration) && other.scaleFactor == this.scaleFactor;
    }
    toString() {
      if (this.duration != null) return dart.toString(this.duration);
      if (this.scaleFactor != null) return dart.str`${this.scaleFactor}x`;
      return "none";
    }
  };
  (src__frontend__timeout.Timeout.new = function(duration) {
    this[duration$] = duration;
    this[scaleFactor$] = null;
  }).prototype = src__frontend__timeout.Timeout.prototype;
  (src__frontend__timeout.Timeout.factor = function(scaleFactor) {
    this[scaleFactor$] = scaleFactor;
    this[duration$] = null;
  }).prototype = src__frontend__timeout.Timeout.prototype;
  (src__frontend__timeout.Timeout._none = function() {
    this[scaleFactor$] = null;
    this[duration$] = null;
  }).prototype = src__frontend__timeout.Timeout.prototype;
  dart.addTypeTests(src__frontend__timeout.Timeout);
  const duration$ = Symbol("Timeout.duration");
  const scaleFactor$ = Symbol("Timeout.scaleFactor");
  dart.setMethodSignature(src__frontend__timeout.Timeout, () => ({
    __proto__: dart.getMethods(src__frontend__timeout.Timeout.__proto__),
    merge: dart.fnType(src__frontend__timeout.Timeout, [src__frontend__timeout.Timeout]),
    apply: dart.fnType(core.Duration, [core.Duration])
  }));
  dart.setStaticMethodSignature(src__frontend__timeout.Timeout, () => ({_microsecondsFor: dart.fnType(core.double, [core.double, core.String])}));
  dart.setFieldSignature(src__frontend__timeout.Timeout, () => ({
    __proto__: dart.getFields(src__frontend__timeout.Timeout.__proto__),
    duration: dart.finalFieldType(core.Duration),
    scaleFactor: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(src__frontend__timeout.Timeout, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__frontend__timeout.Timeout, ['hashCode']);
  dart.defineLazy(src__frontend__timeout.Timeout, {
    /*src__frontend__timeout.Timeout.none*/get none() {
      return dart.const(new src__frontend__timeout.Timeout._none());
    }
  });
  dart.trackLibraries("packages/test/src/frontend/timeout.ddc", {
    "package:test/src/frontend/timeout.dart": src__frontend__timeout
  }, '{"version":3,"sourceRoot":"","sources":["timeout.dart"],"names":[],"mappings":";;;;;;;;;;;MAWM,iCAAU;YAAG,AAAI,gBAAM,CAAC,iCAAgC;;MAGxD,4BAAK;YAAG,AAAI,gBAAM,CAAC,kCAAkC;;MAGrD,kCAAW;YAAG,AAAI,gBAAM,CAAC;;;;IAed;;;;;;IAUL;;;;;;iBA0BY,OAAc;AAAE,AACpC,UAAI,UAAU,IAAI,qCAAa,CAAC,OAAO;AAGvC,oBAAI,OAAO,KAAK,CAAC,UAAS;AACxB,eAAO,WAAW;AAClB,cAAO,+BAAO,KAAK;;AAIrB,aAAO,OAAO,CAAC,iCAAU,SAAQ;AACjC,UAAI,SAAS,WAAM,MAAM,CAAC,OAAO,UAAU,MAAC;AAG5C,oBAAI,OAAO,KAAK,CAAC,mBAAQ,OAAO,KAAK,CAAC,OAAM;AAC1C,eAAO,WAAW;AAClB,cAAO,KAAI,qCAAc,CAAC,MAAM;;AAKlC,UAAI,eAAe;AACnB,aAAO,MAAM;AACX,eAAO,OAAO,CAAC,4BAAK,SAAQ;AAC5B,oBAAY,GA5FlB,aA4FM,YAAY,iBAAI,+CAAgB,CAAC,MAAM,EAAE,OAAO,UAAU,MAAC;AAE3D,eAAO,KAAK,CAAC,kCAAW;AAGxB,uBAAK,OAAO,KAAK,CAAC,iCAAU,IAAG;AAC/B,cAAM,GAAG,WAAM,MAAM,CAAC,OAAO,UAAU,MAAC;;AAG1C,aAAO,WAAW;AAClB,YAAO,KAAI,kCAAO,CAAC,IAAI,iBAAQ,gBAAe,YAAY,QAAM;IAClE;4BAG+B,MAAa,EAAE,IAAW;AACvD,cAAQ,IAAI;YACL;;AACH,gBAAc,AAAK,AAAK,AAAK,cAAtB,MAAM,IAAG,KAAK,KAAK,KAAK;;YAC5B;;AACH,gBAAc,AAAK,AAAK,cAAjB,MAAM,IAAG,KAAK,KAAK;;YACvB;;AACH,gBAAc,AAAK,cAAZ,MAAM,IAAG,KAAK;;YAClB;;AACH,gBAAc,cAAP,MAAM,IAAG;;YACb;;AACH,gBAAc,cAAP,MAAM,IAAG;;YACb;;AACH,gBAAO,OAAM;;;;AAEb,qBAAM,IAAI,sBAAa,CAAC,wBAAe,IAAI;;;IAEjD;UAQc,KAAa;AACzB,UAAI,aAAQ,mCAAI,iBAAI,KAAK,EAAI,mCAAI,GAAE,MAAO,oCAAI;AAC9C,UAAI,KAAK,SAAS,IAAI,MAAM,MAAO,KAAI,kCAAO,CAAC,KAAK,SAAS;AAC7D,UAAI,aAAQ,IAAI,MAAM,MAAO,KAAI,kCAAO,CAAC,AAAS,aAAD,MAAG,KAAK,YAAY;AACrE,YAAO,KAAI,qCAAc,CAAa,aAAZ,gBAAW,iBAAG,KAAK,YAAY;IAC3D;UAKe,IAAa;AAC1B,UAAI,aAAQ,mCAAI,GAAE,MAAO;AACzB,YAAO,cAAQ,IAAI,OAAO,AAAK,IAAD,MAAG,gBAAW,IAAG,aAAQ;IACzD;;YAEoB,EAAkB,2BAAlB,aAAQ,KAAY,AAAE,kBAAE,gBAAW;IAAS;YAE/C,KAAK;UAAL,KAAK;YAES,mCAD3B,KAAK,iBACL,KAAK,SAAS,EAAI,aAAQ,KAC1B,KAAK,YAAY,IAAI,gBAAW;;;AAGlC,UAAI,aAAQ,IAAI,MAAM,qBAAO,aAAQ;AACrC,UAAI,gBAAW,IAAI,MAAM,MAAO,YAAG,gBAAW;AAC9C,YAAO;IACT;;iDAhHc,QAAa;IAAR,eAAQ,GAAR,QAAQ;IAAI,kBAAW,GAAG;EAAI;oDAG5B,WAAgB;IAAX,kBAAW,GAAX,WAAW;IAAI,eAAQ,GAAG;EAAI;;IAGlD,kBAAW,GAAG;IACd,eAAQ,GAAG;EAAI;;;;;;;;;;;;;;;;;;MA1BR,mCAAI;YAAG,gBAAM,oCAAa","file":"timeout.ddc.js"}');
  // Exports:
  return {
    src__frontend__timeout: src__frontend__timeout
  };
});

//# sourceMappingURL=timeout.ddc.js.map
