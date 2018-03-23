// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'key_events.dart';
export 'key_events.dart';
import "dart:html";
import "package:angular/src/core/di.dart" show Injectable;
import "event_manager.dart" show EventManagerPlugin;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'event_manager.template.dart' as _ref0;
import 'package:angular/src/core/di.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(KeyEventsPlugin, () => new KeyEventsPlugin());
  _ref0.initReflector();
  _ref1.initReflector();
}
