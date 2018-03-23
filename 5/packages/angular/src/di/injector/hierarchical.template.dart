// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hierarchical.dart';
export 'hierarchical.dart';
import 'package:angular/src/runtime.dart';
import 'package:meta/meta.dart';
import '../errors.dart' as errors;
import 'empty.dart';
import 'injector.dart';
import '../errors.template.dart' as _ref0;
import 'empty.template.dart' as _ref1;
import 'injector.template.dart' as _ref2;
import 'package:angular/src/runtime.template.dart' as _ref3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
