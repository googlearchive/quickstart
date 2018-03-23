define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__metadata__lifecycle_hooks = Object.create(_root);
  src__core__metadata__lifecycle_hooks.LifecycleHooks = class LifecycleHooks extends core.Object {
    toString() {
      return {
        0: "LifecycleHooks.OnInit",
        1: "LifecycleHooks.OnDestroy",
        2: "LifecycleHooks.DoCheck",
        3: "LifecycleHooks.OnChanges",
        4: "LifecycleHooks.AfterChanges",
        5: "LifecycleHooks.AfterContentInit",
        6: "LifecycleHooks.AfterContentChecked",
        7: "LifecycleHooks.AfterViewInit",
        8: "LifecycleHooks.AfterViewChecked"
      }[this.index];
    }
  };
  (src__core__metadata__lifecycle_hooks.LifecycleHooks.new = function(x) {
    this.index = x;
  }).prototype = src__core__metadata__lifecycle_hooks.LifecycleHooks.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.LifecycleHooks);
  dart.setFieldSignature(src__core__metadata__lifecycle_hooks.LifecycleHooks, () => ({
    __proto__: dart.getFields(src__core__metadata__lifecycle_hooks.LifecycleHooks.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__metadata__lifecycle_hooks.LifecycleHooks, ['toString']);
  src__core__metadata__lifecycle_hooks.LifecycleHooks.OnInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(0));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.OnDestroy = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(1));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.DoCheck = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(2));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.OnChanges = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(3));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterChanges = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(4));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterContentInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(5));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterContentChecked = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(6));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterViewInit = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(7));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterViewChecked = dart.const(new src__core__metadata__lifecycle_hooks.LifecycleHooks.new(8));
  src__core__metadata__lifecycle_hooks.LifecycleHooks.values = dart.constList([src__core__metadata__lifecycle_hooks.LifecycleHooks.OnInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.OnDestroy, src__core__metadata__lifecycle_hooks.LifecycleHooks.DoCheck, src__core__metadata__lifecycle_hooks.LifecycleHooks.OnChanges, src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterChanges, src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterContentInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterContentChecked, src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterViewInit, src__core__metadata__lifecycle_hooks.LifecycleHooks.AfterViewChecked], src__core__metadata__lifecycle_hooks.LifecycleHooks);
  src__core__metadata__lifecycle_hooks.OnChanges = class OnChanges extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnChanges.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnChanges.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnChanges);
  src__core__metadata__lifecycle_hooks.AfterChanges = class AfterChanges extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterChanges.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterChanges.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterChanges);
  src__core__metadata__lifecycle_hooks.OnInit = class OnInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnInit);
  src__core__metadata__lifecycle_hooks.OnDestroy = class OnDestroy extends core.Object {};
  (src__core__metadata__lifecycle_hooks.OnDestroy.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.OnDestroy.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.OnDestroy);
  src__core__metadata__lifecycle_hooks.DoCheck = class DoCheck extends core.Object {};
  (src__core__metadata__lifecycle_hooks.DoCheck.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.DoCheck.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.DoCheck);
  src__core__metadata__lifecycle_hooks.AfterContentInit = class AfterContentInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterContentInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterContentInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterContentInit);
  src__core__metadata__lifecycle_hooks.AfterContentChecked = class AfterContentChecked extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterContentChecked.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterContentChecked.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterContentChecked);
  src__core__metadata__lifecycle_hooks.AfterViewInit = class AfterViewInit extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterViewInit.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterViewInit.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterViewInit);
  src__core__metadata__lifecycle_hooks.AfterViewChecked = class AfterViewChecked extends core.Object {};
  (src__core__metadata__lifecycle_hooks.AfterViewChecked.new = function() {
  }).prototype = src__core__metadata__lifecycle_hooks.AfterViewChecked.prototype;
  dart.addTypeTests(src__core__metadata__lifecycle_hooks.AfterViewChecked);
  dart.trackLibraries("packages/angular/src/core/metadata/lifecycle_hooks.ddc", {
    "package:angular/src/core/metadata/lifecycle_hooks.dart": src__core__metadata__lifecycle_hooks
  }, '{"version":3,"sourceRoot":"","sources":["lifecycle_hooks.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAwDA;;;;EAWA;;;;EA4CA;;;;EA4CA;;;;EAoEA;;;;EAsDA;;;;EAsDA;;;;EAmDA;;;;EAmDA","file":"lifecycle_hooks.ddc.js"}');
  // Exports:
  return {
    src__core__metadata__lifecycle_hooks: src__core__metadata__lifecycle_hooks
  };
});

//# sourceMappingURL=lifecycle_hooks.ddc.js.map
