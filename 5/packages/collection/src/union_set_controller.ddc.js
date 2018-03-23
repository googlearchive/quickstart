define(['dart_sdk', 'packages/collection/src/union_set'], function(dart_sdk, union_set) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__union_set = union_set.src__union_set;
  const _root = Object.create(null);
  const src__union_set_controller = Object.create(_root);
  const _set = Symbol('_set');
  const _sets = Symbol('_sets');
  const _is_UnionSetController_default = Symbol('_is_UnionSetController_default');
  src__union_set_controller.UnionSetController$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let _HashSetOfSetOfE = () => (_HashSetOfSetOfE = dart.constFn(collection._HashSet$(SetOfE())))();
    let UnionSetOfE = () => (UnionSetOfE = dart.constFn(src__union_set.UnionSet$(E)))();
    let SetOfSetOfE = () => (SetOfSetOfE = dart.constFn(core.Set$(SetOfE())))();
    class UnionSetController extends core.Object {
      get set() {
        return this[_set];
      }
      add(component) {
        SetOfE()._check(component);
        this[_sets].add(component);
      }
      remove(component) {
        SetOfE()._check(component);
        return this[_sets].remove(component);
      }
    }
    (UnionSetController.new = function(opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_set] = null;
      this[_sets] = new (_HashSetOfSetOfE()).new();
      this[_set] = new (UnionSetOfE()).new(this[_sets], {disjoint: disjoint});
    }).prototype = UnionSetController.prototype;
    dart.addTypeTests(UnionSetController);
    UnionSetController.prototype[_is_UnionSetController_default] = true;
    dart.setMethodSignature(UnionSetController, () => ({
      __proto__: dart.getMethods(UnionSetController.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(UnionSetController, () => ({
      __proto__: dart.getGetters(UnionSetController.__proto__),
      set: dart.fnType(src__union_set.UnionSet$(E), [])
    }));
    dart.setFieldSignature(UnionSetController, () => ({
      __proto__: dart.getFields(UnionSetController.__proto__),
      [_set]: dart.fieldType(UnionSetOfE()),
      [_sets]: dart.finalFieldType(SetOfSetOfE())
    }));
    return UnionSetController;
  });
  src__union_set_controller.UnionSetController = src__union_set_controller.UnionSetController$();
  dart.addTypeTests(src__union_set_controller.UnionSetController, _is_UnionSetController_default);
  dart.trackLibraries("packages/collection/src/union_set_controller.ddc", {
    "package:collection/src/union_set_controller.dart": src__union_set_controller
  }, '{"version":3,"sourceRoot":"","sources":["union_set_controller.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;cAyByB,WAAI;;UAmBlB,SAAgB;wBAAT;AACd,mBAAK,IAAI,CAAC,SAAS;MACrB;aAMY,SAAgB;wBAAT;cAAc,YAAK,OAAO,CAAC,SAAS;MAAC;;;UAhB/B,wDAAU;MAVvB,UAAI;MAGV,WAAK,GAAG;AAQZ,gBAAI,GAAG,IAAI,mBAAW,CAAC,WAAK,aAAY,QAAQ;IAClD","file":"union_set_controller.ddc.js"}');
  // Exports:
  return {
    src__union_set_controller: src__union_set_controller
  };
});

//# sourceMappingURL=union_set_controller.ddc.js.map
