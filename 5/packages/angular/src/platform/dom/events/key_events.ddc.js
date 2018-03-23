define(['dart_sdk', 'packages/angular/src/platform/dom/events/event_manager'], function(dart_sdk, event_manager) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__platform__dom__events__event_manager = event_manager.src__platform__dom__events__event_manager;
  const _root = Object.create(null);
  const src__platform__dom__events__key_events = Object.create(_root);
  const $_get = dartx._get;
  const $split = dartx.split;
  const $toLowerCase = dartx.toLowerCase;
  const $removeAt = dartx.removeAt;
  const $length = dartx.length;
  const $removeLast = dartx.removeLast;
  const $remove = dartx.remove;
  const $containsKey = dartx.containsKey;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let KeyboardEventTobool = () => (KeyboardEventTobool = dart.constFn(dart.fnType(core.bool, [html.KeyboardEvent])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  dart.defineLazy(src__platform__dom__events__key_events, {
    /*src__platform__dom__events__key_events.modifierKeys*/get modifierKeys() {
      return JSArrayOfString().of(["alt", "control", "meta", "shift"]);
    },
    set modifierKeys(_) {},
    /*src__platform__dom__events__key_events.modifierKeyGetters*/get modifierKeyGetters() {
      return new (IdentityMapOfString$dynamic()).from(["alt", dart.fn(event => event.altKey, KeyboardEventTobool()), "control", dart.fn(event => event.ctrlKey, KeyboardEventTobool()), "meta", dart.fn(event => event.metaKey, KeyboardEventTobool()), "shift", dart.fn(event => event.shiftKey, KeyboardEventTobool())]);
    },
    set modifierKeyGetters(_) {},
    /*src__platform__dom__events__key_events._keyCodeToKeyMap*/get _keyCodeToKeyMap() {
      return dart.constMap(core.int, core.String, [8, 'Backspace', 9, 'Tab', 12, 'Clear', 13, 'Enter', 16, 'Shift', 17, 'Control', 18, 'Alt', 19, 'Pause', 20, 'CapsLock', 27, 'Escape', 32, ' ', 33, 'PageUp', 34, 'PageDown', 35, 'End', 36, 'Home', 37, 'ArrowLeft', 38, 'ArrowUp', 39, 'ArrowRight', 40, 'ArrowDown', 45, 'Insert', 46, 'Delete', 65, 'a', 66, 'b', 67, 'c', 68, 'd', 69, 'e', 70, 'f', 71, 'g', 72, 'h', 73, 'i', 74, 'j', 75, 'k', 76, 'l', 77, 'm', 78, 'n', 79, 'o', 80, 'p', 81, 'q', 82, 'r', 83, 's', 84, 't', 85, 'u', 86, 'v', 87, 'w', 88, 'x', 89, 'y', 90, 'z', 91, 'OS', 93, 'ContextMenu', 96, '0', 97, '1', 98, '2', 99, '3', 100, '4', 101, '5', 102, '6', 103, '7', 104, '8', 105, '9', 106, '*', 107, '+', 109, '-', 110, '.', 111, '/', 112, 'F1', 113, 'F2', 114, 'F3', 115, 'F4', 116, 'F5', 117, 'F6', 118, 'F7', 119, 'F8', 120, 'F9', 121, 'F10', 122, 'F11', 123, 'F12', 144, 'NumLock', 145, 'ScrollLock']);
    }
  });
  src__platform__dom__events__key_events.KeyEventsPlugin = class KeyEventsPlugin extends src__platform__dom__events__event_manager.EventManagerPlugin {
    supports(eventName) {
      return src__platform__dom__events__key_events.KeyEventsPlugin.parseEventName(eventName) != null;
    }
    addEventListener(element, eventName, handler) {
      let parsedEvent = src__platform__dom__events__key_events.KeyEventsPlugin.parseEventName(eventName);
      let outsideHandler = src__platform__dom__events__key_events.KeyEventsPlugin.eventCallback(element, parsedEvent[$_get]('fullKey'), handler);
      return core.Function._check(this.manager.getZone().runOutsideAngular(dart.fn(() => dart.dload(dart.dsend(dart.dindex(dart.dload(element, 'on'), parsedEvent[$_get]('domEventName')), 'listen', outsideHandler), 'cancel'), VoidTodynamic())));
    }
    static parseEventName(eventName) {
      let parts = eventName[$toLowerCase]()[$split](".");
      let domEventName = parts[$removeAt](0);
      if (parts[$length] === 0 || !(domEventName === "keydown" || domEventName === "keyup")) {
        return null;
      }
      let key = src__platform__dom__events__key_events.KeyEventsPlugin._normalizeKey(parts[$removeLast]());
      let fullKey = "";
      for (let modifierName of src__platform__dom__events__key_events.modifierKeys) {
        if (dart.test(parts[$remove](modifierName))) {
          fullKey = dart.notNull(fullKey) + (dart.notNull(modifierName) + ".");
        }
      }
      fullKey = dart.notNull(fullKey) + dart.notNull(key);
      if (parts[$length] !== 0 || key.length === 0) {
        return null;
      }
      return new (IdentityMapOfString$String()).from(['domEventName', domEventName, 'fullKey', fullKey]);
    }
    static getEventFullKey(event) {
      let fullKey = "";
      let key = src__platform__dom__events__key_events.KeyEventsPlugin.getEventKey(event);
      key = key[$toLowerCase]();
      if (key === " ") {
        key = "space";
      } else if (key === ".") {
        key = "dot";
      }
      for (let modifierName of src__platform__dom__events__key_events.modifierKeys) {
        if (modifierName != key) {
          let modifierGetter = src__platform__dom__events__key_events.modifierKeyGetters[$_get](modifierName);
          if (dart.equals(dart.dcall(modifierGetter, event), true)) {
            fullKey = dart.notNull(fullKey) + (dart.notNull(modifierName) + ".");
          }
        }
      }
      fullKey = dart.notNull(fullKey) + dart.notNull(key);
      return fullKey;
    }
    static getEventKey(e) {
      let event = html.KeyboardEvent._check(e);
      let keyCode = event.keyCode;
      return dart.test(src__platform__dom__events__key_events._keyCodeToKeyMap[$containsKey](keyCode)) ? src__platform__dom__events__key_events._keyCodeToKeyMap[$_get](keyCode) : 'Unidentified';
    }
    static eventCallback(element, fullKey, handler) {
      return dart.fn(event => {
        if (core.identical(src__platform__dom__events__key_events.KeyEventsPlugin.getEventFullKey(html.KeyboardEvent._check(event)), fullKey)) {
          dart.dcall(handler, event);
        }
      }, dynamicToNull());
    }
    static _normalizeKey(keyName) {
      switch (keyName) {
        case "esc":
        {
          return "escape";
        }
        default:
        {
          return keyName;
        }
      }
    }
  };
  (src__platform__dom__events__key_events.KeyEventsPlugin.new = function() {
    src__platform__dom__events__key_events.KeyEventsPlugin.__proto__.new.call(this);
  }).prototype = src__platform__dom__events__key_events.KeyEventsPlugin.prototype;
  dart.addTypeTests(src__platform__dom__events__key_events.KeyEventsPlugin);
  dart.setMethodSignature(src__platform__dom__events__key_events.KeyEventsPlugin, () => ({
    __proto__: dart.getMethods(src__platform__dom__events__key_events.KeyEventsPlugin.__proto__),
    supports: dart.fnType(core.bool, [core.String]),
    addEventListener: dart.fnType(core.Function, [dart.dynamic, core.String, core.Function])
  }));
  dart.setStaticMethodSignature(src__platform__dom__events__key_events.KeyEventsPlugin, () => ({
    parseEventName: dart.fnType(core.Map$(core.String, core.String), [core.String]),
    getEventFullKey: dart.fnType(core.String, [html.KeyboardEvent]),
    getEventKey: dart.fnType(core.String, [dart.dynamic]),
    eventCallback: dart.fnType(core.Function, [dart.dynamic, dart.dynamic, core.Function]),
    _normalizeKey: dart.fnType(core.String, [core.String])
  }));
  dart.trackLibraries("packages/angular/src/platform/dom/events/key_events.ddc", {
    "package:angular/src/platform/dom/events/key_events.dart": src__platform__dom__events__key_events
  }, '{"version":3,"sourceRoot":"","sources":["key_events.dart"],"names":[],"mappings":"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","file":"key_events.ddc.js"}');
  // Exports:
  return {
    src__platform__dom__events__key_events: src__platform__dom__events__key_events
  };
});

//# sourceMappingURL=key_events.ddc.js.map
