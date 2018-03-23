define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/angular/src/platform/dom/events/dom_events', 'packages/angular/src/platform/dom/events/event_manager.template', 'packages/angular/di.template'], function(dart_sdk, reflector, dom_events, event_manager, di) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__platform__dom__events__dom_events = dom_events.src__platform__dom__events__dom_events;
  const src__platform__dom__events__event_manager$46template = event_manager.src__platform__dom__events__event_manager$46template;
  const di$46template = di.di$46template;
  const _root = Object.create(null);
  const src__platform__dom__events__dom_events$46template = Object.create(_root);
  let VoidToDomEventsPlugin = () => (VoidToDomEventsPlugin = dart.constFn(dart.fnType(src__platform__dom__events__dom_events.DomEventsPlugin, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__platform__dom__events__dom_events$46template, {
    /*src__platform__dom__events__dom_events$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__platform__dom__events__dom_events$46template.initReflector = function() {
    if (dart.test(src__platform__dom__events__dom_events$46template._visited)) {
      return;
    }
    src__platform__dom__events__dom_events$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__platform__dom__events__dom_events.DomEventsPlugin), dart.fn(() => new src__platform__dom__events__dom_events.DomEventsPlugin.new(), VoidToDomEventsPlugin()));
    src__platform__dom__events__event_manager$46template.initReflector();
    di$46template.initReflector();
  };
  dart.fn(src__platform__dom__events__dom_events$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular/src/platform/dom/events/dom_events.template.ddc", {
    "package:angular/src/platform/dom/events/dom_events.template.dart": src__platform__dom__events__dom_events$46template
  }, '{"version":3,"sourceRoot":"","sources":["dom_events.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAcI,0DAAQ;YAAG;;;;;AAEb,kBAAI,0DAAQ,GAAE;AACZ;;AAEF,iEAAW;AAEX,IAAO,kCAAe,CAAC,qEAAe,EAAE,cAAM,IAAI,0DAAe;AACjE,IAAM,kEAAa;AACnB,IAAM,2BAAa;EACrB","file":"dom_events.template.ddc.js"}');
  // Exports:
  return {
    src__platform__dom__events__dom_events$46template: src__platform__dom__events__dom_events$46template
  };
});

//# sourceMappingURL=dom_events.template.ddc.js.map
