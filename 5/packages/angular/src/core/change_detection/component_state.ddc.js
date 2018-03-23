define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__change_detection__component_state = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const _stateChangeCallback = Symbol('_stateChangeCallback');
  src__core__change_detection__component_state.ComponentState = class ComponentState extends core.Object {
    setState(fn) {
      fn();
      this.deliverStateChanges();
    }
    set stateChangeCallback(callback) {
      this[_stateChangeCallback] = callback;
    }
    deliverStateChanges() {
      if (this[_stateChangeCallback] != null) {
        this[_stateChangeCallback]();
      }
    }
  };
  (src__core__change_detection__component_state.ComponentState.new = function() {
    this[_stateChangeCallback] = null;
  }).prototype = src__core__change_detection__component_state.ComponentState.prototype;
  dart.addTypeTests(src__core__change_detection__component_state.ComponentState);
  dart.setMethodSignature(src__core__change_detection__component_state.ComponentState, () => ({
    __proto__: dart.getMethods(src__core__change_detection__component_state.ComponentState.__proto__),
    setState: dart.fnType(dart.void, [VoidTovoid()]),
    deliverStateChanges: dart.fnType(dart.void, [])
  }));
  dart.setSetterSignature(src__core__change_detection__component_state.ComponentState, () => ({
    __proto__: dart.getSetters(src__core__change_detection__component_state.ComponentState.__proto__),
    stateChangeCallback: dart.fnType(dart.void, [VoidTovoid()])
  }));
  dart.setFieldSignature(src__core__change_detection__component_state.ComponentState, () => ({
    __proto__: dart.getFields(src__core__change_detection__component_state.ComponentState.__proto__),
    [_stateChangeCallback]: dart.fieldType(VoidTovoid())
  }));
  src__core__change_detection__component_state.ComponentStateCallback = dart.typedef('ComponentStateCallback', () => dart.fnType(dart.void, []));
  dart.trackLibraries("packages/angular/src/core/change_detection/component_state.ddc", {
    "package:angular/src/core/change_detection/component_state.dart": src__core__change_detection__component_state
  }, '{"version":3,"sourceRoot":"","sources":["component_state.dart"],"names":[],"mappings":";;;;;;;;;;aAgBgB,EAAS;AACrB,QAAE;AACF,8BAAmB;IACrB;4BAMwB,QAA+B;AACrD,gCAAoB,GAAG,QAAQ;IACjC;;AAME,UAAI,0BAAoB,IAAI,MAAM;AAChC,kCAAoB;;IAExB;;;IA9BuB,0BAAoB;EA+B7C","file":"component_state.ddc.js"}');
  // Exports:
  return {
    src__core__change_detection__component_state: src__core__change_detection__component_state
  };
});

//# sourceMappingURL=component_state.ddc.js.map
