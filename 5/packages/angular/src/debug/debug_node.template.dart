// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'debug_node.dart';
export 'debug_node.dart';
import "package:angular/src/core/application_ref.dart" show ApplicationRef;
import "package:angular/src/core/di.dart" show Injector;
import "package:angular/src/core/render/api.dart" show RenderDebugInfo;
import "package:angular/src/core/zone/ng_zone.dart" show NgZone;
import 'by.template.dart' as _ref0;
import 'package:angular/src/core/application_ref.template.dart' as _ref1;
import 'package:angular/src/core/di.template.dart' as _ref2;
import 'package:angular/src/core/render/api.template.dart' as _ref3;
import 'package:angular/src/core/zone/ng_zone.template.dart' as _ref4;

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
  _ref4.initReflector();
}
