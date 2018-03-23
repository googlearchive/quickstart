define(['dart_sdk', 'packages/source_span/src/location'], function(dart_sdk, location) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__span = location.src__span;
  const src__location = location.src__location;
  const _root = Object.create(null);
  const src__location_mixin = Object.create(_root);
  const $abs = dartx.abs;
  const $runtimeType = dartx.runtimeType;
  const $compareTo = dartx.compareTo;
  src__location_mixin.SourceLocationMixin = class SourceLocationMixin extends core.Object {
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
  (src__location_mixin.SourceLocationMixin.new = function() {
  }).prototype = src__location_mixin.SourceLocationMixin.prototype;
  dart.addTypeTests(src__location_mixin.SourceLocationMixin);
  src__location_mixin.SourceLocationMixin[dart.implements] = () => [src__location.SourceLocation];
  dart.setMethodSignature(src__location_mixin.SourceLocationMixin, () => ({
    __proto__: dart.getMethods(src__location_mixin.SourceLocationMixin.__proto__),
    distance: dart.fnType(core.int, [src__location.SourceLocation]),
    pointSpan: dart.fnType(src__span.SourceSpan, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(src__location_mixin.SourceLocationMixin, () => ({
    __proto__: dart.getGetters(src__location_mixin.SourceLocationMixin.__proto__),
    toolString: dart.fnType(core.String, [])
  }));
  dart.defineExtensionMethods(src__location_mixin.SourceLocationMixin, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__location_mixin.SourceLocationMixin, ['hashCode']);
  dart.trackLibraries("packages/source_span/src/location_mixin.ddc", {
    "package:source_span/src/location_mixin.dart": src__location_mixin
  }, '{"version":3,"sourceRoot":"","sources":["location_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAiBI,UAAI,SAAS,cAAS,IAAI,OAAO,mBAAmB,cAAS;AAC7D,YAAO,YAAE,MAAM,IAAQ,aAAL,SAAI,IAAG,KAAY,aAAP,WAAM,IAAG;IACzC;aAEa,KAAoB;AAC/B,uBAAI,cAAS,EAAI,KAAK,UAAU,GAAE;AAChC,mBAAM,IAAI,sBAAa,CAAC,wBAAiB,cAAS,WAC9C,YAAK,KAAK,UAAU;;AAE1B,YAAO,EAAQ,aAAP,WAAM,iBAAG,KAAK,OAAO,QAAK;IACpC;;YAE0B,AAAI,yBAAU,CAAC,MAAM,MAAM;IAAG;cAE1C,KAAoB;0CAAL;AAC3B,uBAAI,cAAS,EAAI,KAAK,UAAU,GAAE;AAChC,mBAAM,IAAI,sBAAa,CAAC,wBAAiB,cAAS,WAC9C,YAAK,KAAK,UAAU;;AAE1B,YAAc,cAAP,WAAM,iBAAG,KAAK,OAAO;IAC9B;YAEiB,KAAK;UAAL,KAAK;YAEW,iCAD7B,KAAK,iBACL,cAAS,EAAI,KAAK,UAAU,KAC5B,WAAM,IAAI,KAAK,OAAO;;;YAEa,4BAAnB,cAAS,kBAAY,WAAM;;;YAE1B,aAAG,kBAAW,KAAG,WAAM,IAAE,eAAU;IAAE;;;EAC5D","file":"location_mixin.ddc.js"}');
  // Exports:
  return {
    src__location_mixin: src__location_mixin
  };
});

//# sourceMappingURL=location_mixin.ddc.js.map
