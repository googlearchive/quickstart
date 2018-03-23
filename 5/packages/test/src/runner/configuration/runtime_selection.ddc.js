define(['dart_sdk', 'packages/source_span/src/location'], function(dart_sdk, location) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__span = location.src__span;
  const _root = Object.create(null);
  const src__runner__configuration__runtime_selection = Object.create(_root);
  const $hashCode = dartx.hashCode;
  src__runner__configuration__runtime_selection.RuntimeSelection = class RuntimeSelection extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get span() {
      return this[span$];
    }
    set span(value) {
      super.span = value;
    }
    _equals(other) {
      if (other == null) return false;
      return src__runner__configuration__runtime_selection.RuntimeSelection.is(other) && other.name == this.name;
    }
    get hashCode() {
      return dart.hashCode(this.name);
    }
  };
  (src__runner__configuration__runtime_selection.RuntimeSelection.new = function(name, span) {
    if (span === void 0) span = null;
    this[name$] = name;
    this[span$] = span;
  }).prototype = src__runner__configuration__runtime_selection.RuntimeSelection.prototype;
  dart.addTypeTests(src__runner__configuration__runtime_selection.RuntimeSelection);
  const name$ = Symbol("RuntimeSelection.name");
  const span$ = Symbol("RuntimeSelection.span");
  dart.setFieldSignature(src__runner__configuration__runtime_selection.RuntimeSelection, () => ({
    __proto__: dart.getFields(src__runner__configuration__runtime_selection.RuntimeSelection.__proto__),
    name: dart.finalFieldType(core.String),
    span: dart.finalFieldType(src__span.SourceSpan)
  }));
  dart.defineExtensionMethods(src__runner__configuration__runtime_selection.RuntimeSelection, ['_equals']);
  dart.defineExtensionAccessors(src__runner__configuration__runtime_selection.RuntimeSelection, ['hashCode']);
  dart.trackLibraries("packages/test/src/runner/configuration/runtime_selection.ddc", {
    "package:test/src/runner/configuration/runtime_selection.dart": src__runner__configuration__runtime_selection
  }, '{"version":3,"sourceRoot":"","sources":["runtime_selection.dart"],"names":[],"mappings":";;;;;;;;;;IASe;;;;;;IAKI;;;;;;YAIA,KAAK;UAAL,KAAK;YAA+B,mEAA1B,KAAK,KAAwB,KAAK,KAAK,IAAI,SAAI;;;2BAEtD,SAAI;IAAS;;iFAJhB,IAAS,EAAG,IAAS;yBAAJ;IAAZ,WAAI,GAAJ,IAAI;IAAQ,WAAI,GAAJ,IAAI;EAAE","file":"runtime_selection.ddc.js"}');
  // Exports:
  return {
    src__runner__configuration__runtime_selection: src__runner__configuration__runtime_selection
  };
});

//# sourceMappingURL=runtime_selection.ddc.js.map
