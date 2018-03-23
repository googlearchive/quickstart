// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'debug_context.dart';
export 'debug_context.dart';
import "package:angular/src/core/di.dart" show Injector;
import "package:angular/src/core/render/api.dart" show RenderDebugInfo;
import "debug_app_view.dart";
import 'debug_app_view.template.dart' as _ref0;
import 'package:angular/src/core/di.template.dart' as _ref1;
import 'package:angular/src/core/render/api.template.dart' as _ref2;

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
