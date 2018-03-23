define(['dart_sdk', 'packages/angular/src/common/directives/core_directives'], function(dart_sdk, core_directives) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__common__directives__core_directives = core_directives.src__common__directives__core_directives;
  const _root = Object.create(null);
  const src__common__common_directives = Object.create(_root);
  dart.defineLazy(src__common__common_directives, {
    /*src__common__common_directives.coreDirectives*/get coreDirectives() {
      return src__common__directives__core_directives.CORE_DIRECTIVES;
    },
    /*src__common__common_directives.COMMON_DIRECTIVES*/get COMMON_DIRECTIVES() {
      return src__common__common_directives.coreDirectives;
    }
  });
  dart.trackLibraries("packages/angular/src/common/common_directives.ddc", {
    "package:angular/src/common/common_directives.dart": src__common__common_directives
  }, '{"version":3,"sourceRoot":"","sources":["common_directives.dart"],"names":[],"mappings":";;;;;;;;;MAuDM,6CAAc;YAAG,yDAAe;;MAGhC,gDAAiB;YAAG,8CAAc","file":"common_directives.ddc.js"}');
  // Exports:
  return {
    src__common__common_directives: src__common__common_directives
  };
});

//# sourceMappingURL=common_directives.ddc.js.map
