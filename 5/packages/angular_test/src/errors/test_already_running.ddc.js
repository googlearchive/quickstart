define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__errors__test_already_running = Object.create(_root);
  src__errors__test_already_running.TestAlreadyRunningError = class TestAlreadyRunningError extends core.Error {
    toString() {
      return '' + 'Another instance of an `NgTestFixture` is still executing!\n\n' + 'NgTestBed supports *one* test executing at a time to avoid timing ' + 'conflicts or stability issues related to sharing a browser DOM.\n\n' + 'When you are done with a test, make sure to dispose fixtures:\n' + '  tearDown(() => disposeAnyRunningTest())\n\n' + 'NOTE: `disposeAnyRunningTest` returns a Future that must complete ' + '*before* executing another test - `tearDown` handles this for you ' + 'if returned like the example above.';
    }
  };
  (src__errors__test_already_running.TestAlreadyRunningError.new = function() {
    src__errors__test_already_running.TestAlreadyRunningError.__proto__.new.call(this);
  }).prototype = src__errors__test_already_running.TestAlreadyRunningError.prototype;
  dart.addTypeTests(src__errors__test_already_running.TestAlreadyRunningError);
  dart.defineExtensionMethods(src__errors__test_already_running.TestAlreadyRunningError, ['toString']);
  dart.trackLibraries("packages/angular_test/src/errors/test_already_running.ddc", {
    "package:angular_test/src/errors/test_already_running.dart": src__errors__test_already_running
  }, '{"version":3,"sourceRoot":"","sources":["test_already_running.dart"],"names":[],"mappings":";;;;;;;;;AAOI,YAAO,MACH,mEACA,uEACA,wEACA,oEACA,kDACA,uEACA,uEACA;IACN;;;;EACF","file":"test_already_running.ddc.js"}');
  // Exports:
  return {
    src__errors__test_already_running: src__errors__test_already_running
  };
});

//# sourceMappingURL=test_already_running.ddc.js.map
