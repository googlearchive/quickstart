// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'event_manager.dart';
export 'event_manager.dart';
import 'package:angular/src/core/di.dart' show Injectable, Inject, OpaqueToken;
import 'package:angular/src/core/zone/ng_zone.dart' show NgZone;
import 'package:angular/src/facade/exceptions.dart' show BaseException;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/src/core/di.template.dart' as _ref0;
import 'package:angular/src/core/zone/ng_zone.template.dart' as _ref1;
import 'package:angular/src/facade/exceptions.template.dart' as _ref2;
import 'package:angular/src/platform/dom/events/event_manager.dart' as _i1;
import 'package:angular/src/core/zone/ng_zone.dart' as _i2;
import 'package:angular/src/core/di/opaque_token.dart' as _i3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(EventManager, (List<_i1.EventManagerPlugin> p0, _i2.NgZone p1) => new EventManager(p0, p1));
  _ngRef.registerDependencies(EventManager, const [
    const [const _ngRef.Inject(const _i3.OpaqueToken<dynamic>('EventManagerPlugins'))],
    const [_i2.NgZone]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
