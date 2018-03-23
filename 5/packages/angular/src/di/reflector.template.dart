// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'reflector.dart';
export 'reflector.dart';
import 'package:angular/src/runtime.dart';
import '../core/di/decorators.template.dart' as _ref0;
import '../core/di/opaque_token.template.dart' as _ref1;
import 'package:angular/src/runtime.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
