define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__core__app_view_consts = Object.create(_root);
  dart.defineLazy(src__core__app_view_consts, {
    /*src__core__app_view_consts.MAX_INTERPOLATION_VALUES*/get MAX_INTERPOLATION_VALUES() {
      return 9;
    },
    /*src__core__app_view_consts.namespaceUris*/get namespaceUris() {
      return dart.constMap(core.String, core.String, ['xlink', 'http://www.w3.org/1999/xlink', 'svg', 'http://www.w3.org/2000/svg', 'xhtml', 'http://www.w3.org/1999/xhtml']);
    }
  });
  dart.trackLibraries("packages/angular/src/core/app_view_consts.ddc", {
    "package:angular/src/core/app_view_consts.dart": src__core__app_view_consts
  }, '{"version":3,"sourceRoot":"","sources":["app_view_consts.dart"],"names":[],"mappings":";;;;;;;;MAAM,mDAAwB;YAAG;;MAG3B,wCAAa;YAAG,0CACpB,SAAS,gCACT,OAAO,8BACP,SAAS","file":"app_view_consts.ddc.js"}');
  // Exports:
  return {
    src__core__app_view_consts: src__core__app_view_consts
  };
});

//# sourceMappingURL=app_view_consts.ddc.js.map
