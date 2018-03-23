// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dom_events.dart';
export 'dom_events.dart';
import 'dart:html' show Element, Event;
import 'package:angular/di.dart' show Injectable;
import 'event_manager.dart' show EventManagerPlugin;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'event_manager.template.dart' as _ref0;
import 'package:angular/di.template.dart' as _ref1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DomEventsPlugin, () => new DomEventsPlugin());
  _ref0.initReflector();
  _ref1.initReflector();
}
