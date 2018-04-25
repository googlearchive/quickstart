// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'testability.dart';
export 'testability.dart';
import 'dart:html';
import 'package:js/js.dart';
import 'package:js/js_util.dart' as js_util;
import 'package:angular/src/core/testability/testability.dart';
import 'package:angular/src/testability/js_api.dart';
import 'package:angular/src/core/testability/testability.template.dart' as _ref0;
import 'package:angular/src/testability/js_api.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
