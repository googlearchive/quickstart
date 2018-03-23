define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__security__html_sanitizer = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $innerHtml = dartx.innerHtml;
  const $children = dartx.children;
  const $clear = dartx.clear;
  const $keys = dartx.keys;
  const $attributes = dartx.attributes;
  const $startsWith = dartx.startsWith;
  const $remove = dartx.remove;
  let VoidToNode = () => (VoidToNode = dart.constFn(dart.fnType(html.Node, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let ElementAndStringTovoid = () => (ElementAndStringTovoid = dart.constFn(dart.fnType(dart.void, [html.Element, core.String])))();
  let ElementTovoid = () => (ElementTovoid = dart.constFn(dart.fnType(dart.void, [html.Element])))();
  dart.defineLazy(src__security__html_sanitizer, {
    /*src__security__html_sanitizer._inertElement*/get _inertElement() {
      return null;
    },
    set _inertElement(_) {}
  });
  src__security__html_sanitizer._getInertElement = function() {
    if (src__security__html_sanitizer._inertElement == null) {
      let templateEl = html.TemplateElement.new();
      if (templateEl !== null) {
        src__security__html_sanitizer._inertElement = html.document[$createElement]('div');
        templateEl[$append](src__security__html_sanitizer._inertElement);
      } else {
        src__security__html_sanitizer._inertElement = html.DocumentFragment.new();
      }
    }
    return src__security__html_sanitizer._inertElement;
  };
  dart.fn(src__security__html_sanitizer._getInertElement, VoidToNode());
  src__security__html_sanitizer.sanitizeHtmlInternal = function(value) {
    let element = html.Element._check(src__security__html_sanitizer._getInertElement());
    element[$innerHtml] = value;
    src__security__html_sanitizer.mXSSProtection(element, value);
    let safeHtml = element[$innerHtml];
    let t = element[$children];
    t == null ? null : t[$clear]();
    return safeHtml;
  };
  dart.fn(src__security__html_sanitizer.sanitizeHtmlInternal, StringToString());
  src__security__html_sanitizer.mXSSProtection = function(containerElement, unsafeHtml) {
    let mXSSAttempts = 5;
    let parsedHtml = unsafeHtml;
    do {
      if (mXSSAttempts === 0) {
        dart.throw(core.Exception.new('Failed to sanitize html because the input is unstable'));
      }
      if (mXSSAttempts === 1) {
        src__security__html_sanitizer.stripCustomNsAttrs(containerElement);
      }
      mXSSAttempts--;
      unsafeHtml = parsedHtml;
      containerElement[$innerHtml] = unsafeHtml;
      parsedHtml = containerElement[$innerHtml];
    } while (unsafeHtml != parsedHtml);
  };
  dart.fn(src__security__html_sanitizer.mXSSProtection, ElementAndStringTovoid());
  src__security__html_sanitizer.stripCustomNsAttrs = function(element) {
    for (let attrName of element[$attributes][$keys]) {
      if (attrName === 'xmlns:ns1' || attrName[$startsWith]('ns1:')) {
        element[$attributes][$remove](attrName);
      }
    }
    for (let n of element.childNodes) {
      if (html.Element.is(n)) src__security__html_sanitizer.stripCustomNsAttrs(n);
    }
  };
  dart.fn(src__security__html_sanitizer.stripCustomNsAttrs, ElementTovoid());
  dart.trackLibraries("packages/angular/src/security/html_sanitizer.ddc", {
    "package:angular/src/security/html_sanitizer.dart": src__security__html_sanitizer
  }, '{"version":3,"sourceRoot":"","sources":["html_sanitizer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;MAEK,2CAAa;;;;;;AAGhB,QAAI,2CAAa,IAAI,MAAM;AAEzB,UAAgB,aAAa,AAAI,wBAAe;AAChD,UAAI,UAAU,KAAI,MAAM;AAEtB,sDAAgB,aAAQ,gBAAc,CAAC;AACvC,kBAAU,SAAO,CAAC,2CAAa;aAC1B;AACL,sDAAgB,AAAI,yBAAgB;;;AAGxC,UAAO,4CAAa;EACtB;;gEAO4B,KAAY;AACtC,QAAQ,8BAAU,8CAAgB;AAClC,WAAO,YAAU,GAAG,KAAK;AACzB,gDAAc,CAAC,OAAO,EAAE,KAAK;AAC7B,QAAO,WAAW,OAAO,YAAU;AACnC,mBAAO,WAAS;;AAChB,UAAO,SAAQ;EACjB;;0DAOoB,gBAAwB,EAAE,UAAiB;AAC7D,QAAI,eAAe;AACnB,QAAO,aAAa,UAAU;AAC9B,OAAG;AACD,UAAI,YAAY,KAAI,GAAG;AACrB,mBAAM,AAAI,kBAAS,CACf;;AAEN,UAAI,YAAY,KAAI,GAAG;AAErB,wDAAkB,CAAC,gBAAgB;;AAErC,kBAAY;AACZ,gBAAU,GAAG,UAAU;AACvB,sBAAgB,YAAU,GAAG,UAAU;AACvC,gBAAU,GAAG,gBAAgB,YAAU;aAChC,UAAU,IAAI,UAAU;EACnC;;8DAQwB,OAAe;AACrC,aAAS,WAAY,QAAO,aAAW,OAAK,EAAE;AAC5C,UAAI,QAAQ,KAAI,eAAe,QAAQ,aAAW,CAAC,SAAS;AAC1D,eAAO,aAAW,SAAO,CAAC,QAAQ;;;AAGtC,aAAS,IAAK,QAAO,WAAW,EAAE;AAChC,0BAAI,CAAC,GAAa,gDAAkB,CAAC,CAAC;;EAE1C","file":"html_sanitizer.ddc.js"}');
  // Exports:
  return {
    src__security__html_sanitizer: src__security__html_sanitizer
  };
});

//# sourceMappingURL=html_sanitizer.ddc.js.map
