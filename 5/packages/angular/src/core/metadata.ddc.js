define(['dart_sdk', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view'], function(dart_sdk, constants, view) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const _root = Object.create(null);
  const src__core__metadata__visibility = Object.create(_root);
  const src__core__metadata = Object.create(_root);
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  src__core__metadata__visibility.Visibility = class Visibility extends core.Object {
    toString() {
      return {
        0: "Visibility.local",
        1: "Visibility.all"
      }[this.index];
    }
  };
  (src__core__metadata__visibility.Visibility.new = function(x) {
    this.index = x;
  }).prototype = src__core__metadata__visibility.Visibility.prototype;
  dart.addTypeTests(src__core__metadata__visibility.Visibility);
  dart.setFieldSignature(src__core__metadata__visibility.Visibility, () => ({
    __proto__: dart.getFields(src__core__metadata__visibility.Visibility.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__core__metadata__visibility.Visibility, ['toString']);
  src__core__metadata__visibility.Visibility.local = dart.const(new src__core__metadata__visibility.Visibility.new(0));
  src__core__metadata__visibility.Visibility.all = dart.const(new src__core__metadata__visibility.Visibility.new(1));
  src__core__metadata__visibility.Visibility.values = dart.constList([src__core__metadata__visibility.Visibility.local, src__core__metadata__visibility.Visibility.all], src__core__metadata__visibility.Visibility);
  src__core__metadata.Directive = class Directive extends core.Object {
    get selector() {
      return this[selector$];
    }
    set selector(value) {
      super.selector = value;
    }
    get host() {
      return this[host$];
    }
    set host(value) {
      super.host = value;
    }
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get exportAs() {
      return this[exportAs$];
    }
    set exportAs(value) {
      super.exportAs = value;
    }
    get visibility() {
      return this[visibility$];
    }
    set visibility(value) {
      super.visibility = value;
    }
  };
  (src__core__metadata.Directive.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let host = opts && 'host' in opts ? opts.host : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : src__core__metadata__visibility.Visibility.local;
    this[selector$] = selector;
    this[host$] = host;
    this[providers$] = providers;
    this[exportAs$] = exportAs;
    this[visibility$] = visibility;
  }).prototype = src__core__metadata.Directive.prototype;
  dart.addTypeTests(src__core__metadata.Directive);
  const selector$ = Symbol("Directive.selector");
  const host$ = Symbol("Directive.host");
  const providers$ = Symbol("Directive.providers");
  const exportAs$ = Symbol("Directive.exportAs");
  const visibility$ = Symbol("Directive.visibility");
  dart.setFieldSignature(src__core__metadata.Directive, () => ({
    __proto__: dart.getFields(src__core__metadata.Directive.__proto__),
    selector: dart.finalFieldType(core.String),
    host: dart.finalFieldType(MapOfString$String()),
    providers: dart.finalFieldType(ListOfObject()),
    exportAs: dart.finalFieldType(core.String),
    visibility: dart.finalFieldType(src__core__metadata__visibility.Visibility)
  }));
  src__core__metadata.Component = class Component extends src__core__metadata.Directive {
    get changeDetection() {
      return this[changeDetection$];
    }
    set changeDetection(value) {
      super.changeDetection = value;
    }
    get viewProviders() {
      return this[viewProviders$];
    }
    set viewProviders(value) {
      super.viewProviders = value;
    }
    get exports() {
      return this[exports$];
    }
    set exports(value) {
      super.exports = value;
    }
    get templateUrl() {
      return this[templateUrl$];
    }
    set templateUrl(value) {
      super.templateUrl = value;
    }
    get template() {
      return this[template$];
    }
    set template(value) {
      super.template = value;
    }
    get preserveWhitespace() {
      return this[preserveWhitespace$];
    }
    set preserveWhitespace(value) {
      super.preserveWhitespace = value;
    }
    get styleUrls() {
      return this[styleUrls$];
    }
    set styleUrls(value) {
      super.styleUrls = value;
    }
    get styles() {
      return this[styles$];
    }
    set styles(value) {
      super.styles = value;
    }
    get directives() {
      return this[directives$];
    }
    set directives(value) {
      super.directives = value;
    }
    get pipes() {
      return this[pipes$];
    }
    set pipes(value) {
      super.pipes = value;
    }
    get encapsulation() {
      return this[encapsulation$];
    }
    set encapsulation(value) {
      super.encapsulation = value;
    }
  };
  (src__core__metadata.Component.new = function(opts) {
    let selector = opts && 'selector' in opts ? opts.selector : null;
    let host = opts && 'host' in opts ? opts.host : null;
    let exportAs = opts && 'exportAs' in opts ? opts.exportAs : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let visibility = opts && 'visibility' in opts ? opts.visibility : src__core__metadata__visibility.Visibility.local;
    let viewProviders = opts && 'viewProviders' in opts ? opts.viewProviders : null;
    let exports = opts && 'exports' in opts ? opts.exports : null;
    let changeDetection = opts && 'changeDetection' in opts ? opts.changeDetection : src__core__change_detection__constants.ChangeDetectionStrategy.Default;
    let templateUrl = opts && 'templateUrl' in opts ? opts.templateUrl : null;
    let template = opts && 'template' in opts ? opts.template : null;
    let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : false;
    let styleUrls = opts && 'styleUrls' in opts ? opts.styleUrls : null;
    let styles = opts && 'styles' in opts ? opts.styles : null;
    let directives = opts && 'directives' in opts ? opts.directives : null;
    let pipes = opts && 'pipes' in opts ? opts.pipes : null;
    let encapsulation = opts && 'encapsulation' in opts ? opts.encapsulation : null;
    this[viewProviders$] = viewProviders;
    this[exports$] = exports;
    this[changeDetection$] = changeDetection;
    this[templateUrl$] = templateUrl;
    this[template$] = template;
    this[preserveWhitespace$] = preserveWhitespace;
    this[styleUrls$] = styleUrls;
    this[styles$] = styles;
    this[directives$] = directives;
    this[pipes$] = pipes;
    this[encapsulation$] = encapsulation;
    src__core__metadata.Component.__proto__.new.call(this, {selector: selector, host: host, exportAs: exportAs, providers: providers, visibility: visibility});
  }).prototype = src__core__metadata.Component.prototype;
  dart.addTypeTests(src__core__metadata.Component);
  const changeDetection$ = Symbol("Component.changeDetection");
  const viewProviders$ = Symbol("Component.viewProviders");
  const exports$ = Symbol("Component.exports");
  const templateUrl$ = Symbol("Component.templateUrl");
  const template$ = Symbol("Component.template");
  const preserveWhitespace$ = Symbol("Component.preserveWhitespace");
  const styleUrls$ = Symbol("Component.styleUrls");
  const styles$ = Symbol("Component.styles");
  const directives$ = Symbol("Component.directives");
  const pipes$ = Symbol("Component.pipes");
  const encapsulation$ = Symbol("Component.encapsulation");
  dart.setFieldSignature(src__core__metadata.Component, () => ({
    __proto__: dart.getFields(src__core__metadata.Component.__proto__),
    changeDetection: dart.finalFieldType(core.int),
    viewProviders: dart.finalFieldType(ListOfObject()),
    exports: dart.finalFieldType(ListOfObject()),
    templateUrl: dart.finalFieldType(core.String),
    template: dart.finalFieldType(core.String),
    preserveWhitespace: dart.finalFieldType(core.bool),
    styleUrls: dart.finalFieldType(ListOfString()),
    styles: dart.finalFieldType(ListOfString()),
    directives: dart.finalFieldType(ListOfObject()),
    pipes: dart.finalFieldType(ListOfObject()),
    encapsulation: dart.finalFieldType(src__core__metadata__view.ViewEncapsulation)
  }));
  src__core__metadata.Pipe = class Pipe extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get pure() {
      return this[pure$];
    }
    set pure(value) {
      super.pure = value;
    }
  };
  (src__core__metadata.Pipe.new = function(name, opts) {
    let pure = opts && 'pure' in opts ? opts.pure : true;
    this[name$] = name;
    this[pure$] = pure;
  }).prototype = src__core__metadata.Pipe.prototype;
  dart.addTypeTests(src__core__metadata.Pipe);
  const name$ = Symbol("Pipe.name");
  const pure$ = Symbol("Pipe.pure");
  dart.setFieldSignature(src__core__metadata.Pipe, () => ({
    __proto__: dart.getFields(src__core__metadata.Pipe.__proto__),
    name: dart.finalFieldType(core.String),
    pure: dart.finalFieldType(core.bool)
  }));
  src__core__metadata.Attribute = class Attribute extends core.Object {
    get attributeName() {
      return this[attributeName$];
    }
    set attributeName(value) {
      super.attributeName = value;
    }
  };
  (src__core__metadata.Attribute.new = function(attributeName) {
    this[attributeName$] = attributeName;
  }).prototype = src__core__metadata.Attribute.prototype;
  dart.addTypeTests(src__core__metadata.Attribute);
  const attributeName$ = Symbol("Attribute.attributeName");
  dart.setFieldSignature(src__core__metadata.Attribute, () => ({
    __proto__: dart.getFields(src__core__metadata.Attribute.__proto__),
    attributeName: dart.finalFieldType(core.String)
  }));
  src__core__metadata._Query = class _Query extends core.Object {
    get selector() {
      return this[selector$0];
    }
    set selector(value) {
      super.selector = value;
    }
    get descendants() {
      return this[descendants$];
    }
    set descendants(value) {
      super.descendants = value;
    }
    get first() {
      return this[first$];
    }
    set first(value) {
      super.first = value;
    }
    get read() {
      return this[read$];
    }
    set read(value) {
      super.read = value;
    }
  };
  (src__core__metadata._Query.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    this[selector$0] = selector;
    this[descendants$] = descendants;
    this[first$] = first;
    this[read$] = read;
  }).prototype = src__core__metadata._Query.prototype;
  dart.addTypeTests(src__core__metadata._Query);
  const selector$0 = Symbol("_Query.selector");
  const descendants$ = Symbol("_Query.descendants");
  const first$ = Symbol("_Query.first");
  const read$ = Symbol("_Query.read");
  dart.setFieldSignature(src__core__metadata._Query, () => ({
    __proto__: dart.getFields(src__core__metadata._Query.__proto__),
    selector: dart.finalFieldType(core.Object),
    descendants: dart.finalFieldType(core.bool),
    first: dart.finalFieldType(core.bool),
    read: dart.finalFieldType(core.Object)
  }));
  src__core__metadata.ContentChildren = class ContentChildren extends src__core__metadata._Query {};
  (src__core__metadata.ContentChildren.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : true;
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata.ContentChildren.__proto__.new.call(this, selector, {descendants: descendants, read: read});
  }).prototype = src__core__metadata.ContentChildren.prototype;
  dart.addTypeTests(src__core__metadata.ContentChildren);
  src__core__metadata.ContentChild = class ContentChild extends src__core__metadata._Query {};
  (src__core__metadata.ContentChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata.ContentChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
  }).prototype = src__core__metadata.ContentChild.prototype;
  dart.addTypeTests(src__core__metadata.ContentChild);
  src__core__metadata._ViewQuery = class _ViewQuery extends src__core__metadata._Query {};
  (src__core__metadata._ViewQuery.new = function(selector, opts) {
    let descendants = opts && 'descendants' in opts ? opts.descendants : false;
    let first = opts && 'first' in opts ? opts.first : false;
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata._ViewQuery.__proto__.new.call(this, selector, {descendants: descendants, first: first, read: read});
  }).prototype = src__core__metadata._ViewQuery.prototype;
  dart.addTypeTests(src__core__metadata._ViewQuery);
  src__core__metadata.ViewChildren = class ViewChildren extends src__core__metadata._ViewQuery {};
  (src__core__metadata.ViewChildren.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata.ViewChildren.__proto__.new.call(this, selector, {descendants: true, read: read});
  }).prototype = src__core__metadata.ViewChildren.prototype;
  dart.addTypeTests(src__core__metadata.ViewChildren);
  src__core__metadata.ViewChild = class ViewChild extends src__core__metadata._ViewQuery {};
  (src__core__metadata.ViewChild.new = function(selector, opts) {
    let read = opts && 'read' in opts ? opts.read : null;
    src__core__metadata.ViewChild.__proto__.new.call(this, selector, {descendants: true, first: true, read: read});
  }).prototype = src__core__metadata.ViewChild.prototype;
  dart.addTypeTests(src__core__metadata.ViewChild);
  src__core__metadata.Input = class Input extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (src__core__metadata.Input.new = function(bindingPropertyName) {
    if (bindingPropertyName === void 0) bindingPropertyName = null;
    this[bindingPropertyName$] = bindingPropertyName;
  }).prototype = src__core__metadata.Input.prototype;
  dart.addTypeTests(src__core__metadata.Input);
  const bindingPropertyName$ = Symbol("Input.bindingPropertyName");
  dart.setFieldSignature(src__core__metadata.Input, () => ({
    __proto__: dart.getFields(src__core__metadata.Input.__proto__),
    bindingPropertyName: dart.finalFieldType(core.String)
  }));
  src__core__metadata.Output = class Output extends core.Object {
    get bindingPropertyName() {
      return this[bindingPropertyName$0];
    }
    set bindingPropertyName(value) {
      super.bindingPropertyName = value;
    }
  };
  (src__core__metadata.Output.new = function(bindingPropertyName) {
    if (bindingPropertyName === void 0) bindingPropertyName = null;
    this[bindingPropertyName$0] = bindingPropertyName;
  }).prototype = src__core__metadata.Output.prototype;
  dart.addTypeTests(src__core__metadata.Output);
  const bindingPropertyName$0 = Symbol("Output.bindingPropertyName");
  dart.setFieldSignature(src__core__metadata.Output, () => ({
    __proto__: dart.getFields(src__core__metadata.Output.__proto__),
    bindingPropertyName: dart.finalFieldType(core.String)
  }));
  src__core__metadata.HostBinding = class HostBinding extends core.Object {
    get hostPropertyName() {
      return this[hostPropertyName$];
    }
    set hostPropertyName(value) {
      super.hostPropertyName = value;
    }
  };
  (src__core__metadata.HostBinding.new = function(hostPropertyName) {
    if (hostPropertyName === void 0) hostPropertyName = null;
    this[hostPropertyName$] = hostPropertyName;
  }).prototype = src__core__metadata.HostBinding.prototype;
  dart.addTypeTests(src__core__metadata.HostBinding);
  const hostPropertyName$ = Symbol("HostBinding.hostPropertyName");
  dart.setFieldSignature(src__core__metadata.HostBinding, () => ({
    __proto__: dart.getFields(src__core__metadata.HostBinding.__proto__),
    hostPropertyName: dart.finalFieldType(core.String)
  }));
  src__core__metadata.HostListener = class HostListener extends core.Object {
    get eventName() {
      return this[eventName$];
    }
    set eventName(value) {
      super.eventName = value;
    }
    get args() {
      return this[args$];
    }
    set args(value) {
      super.args = value;
    }
  };
  (src__core__metadata.HostListener.new = function(eventName, args) {
    if (args === void 0) args = null;
    this[eventName$] = eventName;
    this[args$] = args;
  }).prototype = src__core__metadata.HostListener.prototype;
  dart.addTypeTests(src__core__metadata.HostListener);
  const eventName$ = Symbol("HostListener.eventName");
  const args$ = Symbol("HostListener.args");
  dart.setFieldSignature(src__core__metadata.HostListener, () => ({
    __proto__: dart.getFields(src__core__metadata.HostListener.__proto__),
    eventName: dart.finalFieldType(core.String),
    args: dart.finalFieldType(ListOfString())
  }));
  dart.trackLibraries("packages/angular/src/core/metadata.ddc", {
    "package:angular/src/core/metadata/visibility.dart": src__core__metadata__visibility,
    "package:angular/src/core/metadata.dart": src__core__metadata
  }, '{"version":3,"sourceRoot":"","sources":["metadata.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgFe;;;;;;IAmGa;;;;;;IAsBP;;;;;;IAmBN;;;;;;IAOI;;;;;;;;QAGA;QAEN;QACJ;QACA;QACA,8DAAY,0CAAU,MAAM;IALlB,eAAQ,GAAR,QAAQ;IAEd,WAAI,GAAJ,IAAI;IACR,gBAAS,GAAT,SAAS;IACT,eAAQ,GAAR,QAAQ;IACR,iBAAU,GAAV,UAAU;EACf;;;;;;;;;;;;;;;;IAkCQ;;;;;;IAiCS;;;;;;IAiBA;;;;;;IAEN;;;;;;IACA;;;;;;IAQF;;;;;;IACQ;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACK;;;;;;;;QAGf;QAEiB;QACjB;QACF;QACM,8DAAY,0CAAU,MAAM;QAClC;QACA;QACA,6EAAiB,8DAAuB,QAAQ;QAChD;QACA;QACA,sFAAoB;QACpB;QACA;QACA;QACA;QACA;IAVA,oBAAa,GAAb,aAAa;IACb,cAAO,GAAP,OAAO;IACP,sBAAe,GAAf,eAAe;IACf,kBAAW,GAAX,WAAW;IACX,eAAQ,GAAR,QAAQ;IACR,yBAAkB,GAAlB,kBAAkB;IAClB,gBAAS,GAAT,SAAS;IACT,aAAM,GAAN,MAAM;IACN,iBAAU,GAAV,UAAU;IACV,YAAK,GAAL,KAAK;IACL,oBAAa,GAAb,aAAa;AACf,sEACa,QAAQ,QACZ,IAAI,YACA,QAAQ,aACP,SAAS,cACR,UAAU;EACvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASM;;;;;;IACF;;;;;;;2CAEA,IAAS;QAAQ,4CAAM;IAAlB,WAAI,GAAJ,IAAI;IAAQ,WAAI,GAAJ,IAAI;EAAQ;;;;;;;;;;IA2B3B;;;;;;;gDAEG,aAAkB;IAAb,oBAAa,GAAb,aAAa;EAAC;;;;;;;;IAkHtB;;;;;;IAGF;;;;;;IAGA;;;;;;IAGE;;;;;;;6CAGX,QAAa;QACR,iEAAa;QACb,+CAAO;QACP;IAHA,gBAAQ,GAAR,QAAQ;IACR,kBAAW,GAAX,WAAW;IACX,YAAK,GAAL,KAAK;IACL,WAAI,GAAJ,IAAI;EACT;;;;;;;;;;;;;;sDAuBA,QAAe;QACV,iEAAa;QACX;AACJ,iEACG,QAAQ,gBACK,WAAW,QAClB,IAAI;EACX;;;mDAuBL,QAAe;QACR;AACJ,8DACG,QAAQ,gBACK,aACN,YACD,IAAI;EACX;;;iDAwCL,QAAe;QACV,iEAAa;QACb,+CAAO;QACL;AACJ,4DACG,QAAQ,gBACK,WAAW,SACjB,KAAK,QACN,IAAI;EACX;;;mDAuFL,QAAe;QACR;AACJ,8DACG,QAAQ,gBACK,YACP,IAAI;EACX;;;gDA6EL,QAAe;QACR;AACJ,2DACG,QAAQ,gBACK,aACN,YACD,IAAI;EACX;;;IA2CM;;;;;;;4CACA,mBAAwB;wCAAnB;8BAAmB,GAAnB,mBAAmB;EAAE;;;;;;;;IAmD1B;;;;;;;6CACC,mBAAwB;wCAAnB;+BAAmB,GAAnB,mBAAmB;EAAE;;;;;;;;IA+D3B;;;;;;;kDACM,gBAAqB;qCAAhB;2BAAgB,GAAhB,gBAAgB;EAAE;;;;;;;;IAkC7B;;;;;;IACM;;;;;;;mDACA,SAAc,EAAG,IAAS;yBAAJ;IAAjB,gBAAS,GAAT,SAAS;IAAQ,WAAI,GAAJ,IAAI;EAAE","file":"metadata.ddc.js"}');
  // Exports:
  return {
    src__core__metadata__visibility: src__core__metadata__visibility,
    src__core__metadata: src__core__metadata
  };
});

//# sourceMappingURL=metadata.ddc.js.map
