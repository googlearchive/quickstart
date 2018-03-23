define(['dart_sdk', 'packages/angular/src/common/directives/ng_class', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/common/directives/ng_template_outlet', 'packages/angular/src/common/directives/ng_style', 'packages/angular/src/common/directives/ng_switch'], function(dart_sdk, ng_class, ng_for, ng_if, ng_template_outlet, ng_style, ng_switch) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__directives__ng_class = ng_class.src__common__directives__ng_class;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__common__directives__ng_template_outlet = ng_template_outlet.src__common__directives__ng_template_outlet;
  const src__common__directives__ng_style = ng_style.src__common__directives__ng_style;
  const src__common__directives__ng_switch = ng_switch.src__common__directives__ng_switch;
  const _root = Object.create(null);
  const src__common__directives__core_directives = Object.create(_root);
  dart.defineLazy(src__common__directives__core_directives, {
    /*src__common__directives__core_directives.CORE_DIRECTIVES*/get CORE_DIRECTIVES() {
      return dart.constList([dart.wrapType(src__common__directives__ng_class.NgClass), dart.wrapType(src__common__directives__ng_for.NgFor), dart.wrapType(src__common__directives__ng_if.NgIf), dart.wrapType(src__common__directives__ng_template_outlet.NgTemplateOutlet), dart.wrapType(src__common__directives__ng_style.NgStyle), dart.wrapType(src__common__directives__ng_switch.NgSwitch), dart.wrapType(src__common__directives__ng_switch.NgSwitchWhen), dart.wrapType(src__common__directives__ng_switch.NgSwitchDefault)], core.Type);
    }
  });
  dart.trackLibraries("packages/angular/src/common/directives/core_directives.ddc", {
    "package:angular/src/common/directives/core_directives.dart": src__common__directives__core_directives
  }, '{"version":3,"sourceRoot":"","sources":["core_directives.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAQiB,wDAAe;YAAG,iBACjC,wDAAO,EACP,oDAAK,EACL,kDAAI,EACJ,2EAAgB,EAChB,wDAAO,EACP,0DAAQ,EACR,8DAAY,EACZ,iEAAe","file":"core_directives.ddc.js"}');
  // Exports:
  return {
    src__common__directives__core_directives: src__common__directives__core_directives
  };
});

//# sourceMappingURL=core_directives.ddc.js.map
