// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'style_sanitizer.dart';
export 'style_sanitizer.dart';
import 'package:angular/src/runtime.dart';
import 'package:logging/logging.dart';
import 'url_sanitizer.dart';
import 'package:angular/src/runtime.template.dart' as _ref0;
import 'url_sanitizer.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
}
