define(['dart_sdk', 'packages/angular/src/platform/dom/events/event_manager'], function(dart_sdk, event_manager) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__platform__dom__events__event_manager = event_manager.src__platform__dom__events__event_manager;
  const _root = Object.create(null);
  const src__platform__dom__events__dom_events = Object.create(_root);
  const $addEventListener = dartx.addEventListener;
  let EventTodynamic = () => (EventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.Event])))();
  src__platform__dom__events__dom_events.DomEventsPlugin = class DomEventsPlugin extends src__platform__dom__events__event_manager.EventManagerPlugin {
    addEventListener(element, eventName, callback) {
      html.Element._check(element);
      EventTodynamic()._check(callback);
      element[$addEventListener](eventName, callback);
      return null;
    }
    supports(eventName) {
      return true;
    }
  };
  (src__platform__dom__events__dom_events.DomEventsPlugin.new = function() {
    src__platform__dom__events__dom_events.DomEventsPlugin.__proto__.new.call(this);
  }).prototype = src__platform__dom__events__dom_events.DomEventsPlugin.prototype;
  dart.addTypeTests(src__platform__dom__events__dom_events.DomEventsPlugin);
  dart.setMethodSignature(src__platform__dom__events__dom_events.DomEventsPlugin, () => ({
    __proto__: dart.getMethods(src__platform__dom__events__dom_events.DomEventsPlugin.__proto__),
    addEventListener: dart.fnType(core.Function, [core.Object, core.String, core.Object]),
    supports: dart.fnType(core.bool, [core.String])
  }));
  dart.trackLibraries("packages/angular/src/platform/dom/events/dom_events.ddc", {
    "package:angular/src/platform/dom/events/dom_events.dart": src__platform__dom__events__dom_events
  }, '{"version":3,"sourceRoot":"","sources":["dom_events.dart"],"names":[],"mappings":";;;;;;;;;;;;qBAUI,OAAyB,EACzB,SAAgB,EAGhB,QAA+B;0BAJb;8BAIR;AAEV,aAAO,mBAAiB,CAAC,SAAS,EAAE,QAAQ;AAC5C,YAAO;IACT;aAIc,SAAgB;YAAK;IAAI;;;;EACzC","file":"dom_events.ddc.js"}');
  // Exports:
  return {
    src__platform__dom__events__dom_events: src__platform__dom__events__dom_events
  };
});

//# sourceMappingURL=dom_events.ddc.js.map
