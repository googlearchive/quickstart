define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/platform/dom/events/key_events', 'packages/angular/src/platform/dom/events/event_manager.template', 'packages/angular/src/core/di.template'], function(dart_sdk, reflector, key_events, event_manager, di) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__platform__dom__events__key_events = key_events.src__platform__dom__events__key_events;
  const src__platform__dom__events__event_manager$46template = event_manager.src__platform__dom__events__event_manager$46template;
  const src__core__di$46template = di.src__core__di$46template;
  const _root = Object.create(null);
  const src__platform__dom__events__key_events$46template = Object.create(_root);
  let VoidToKeyEventsPlugin = () => (VoidToKeyEventsPlugin = dart.constFn(dart.fnType(src__platform__dom__events__key_events.KeyEventsPlugin, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__dom__events__key_events$46template, {
    /*src__platform__dom__events__key_events$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__dom__events__key_events$46template.initReflector = function() {
    if (dart.test(src__platform__dom__events__key_events$46template._visited)) {
      return;
    }
    src__platform__dom__events__key_events$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__platform__dom__events__key_events.KeyEventsPlugin), dart.fn(() => new src__platform__dom__events__key_events.KeyEventsPlugin.new(), VoidToKeyEventsPlugin()));
    src__platform__dom__events__event_manager$46template.initReflector();
    src__core__di$46template.initReflector();
  };
  dart.fn(src__platform__dom__events__key_events$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/dom/events/key_events.template.ddc", {
    "package:angular/src/platform/dom/events/key_events.template.dart": src__platform__dom__events__key_events$46template
  }, '{"version":3,"sourceRoot":"","sources":["key_events.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAcI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAO,kCAAe,CAAC,qEAAe,EAAE,cAAM,IAAI,0DAAe;AACjE,IAAM,kEAAa;AACnB,IAAM,sCAAa;EACrB","file":"key_events.template.ddc.js"}');
  // Exports:
  return {
    src__platform__dom__events__key_events$46template: src__platform__dom__events__key_events$46template
  };
});

//# sourceMappingURL=key_events.template.ddc.js.map
