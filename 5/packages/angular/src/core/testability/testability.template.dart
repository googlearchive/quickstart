// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'testability.dart';
export 'testability.dart';
import 'dart:async';
import 'package:angular/src/core/di.dart' show Injectable;
import '../zone/ng_zone.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../zone/ng_zone.template.dart' as _ref0;
import 'package:angular/src/core/di.template.dart' as _ref1;
import 'package:angular/src/core/zone/ng_zone.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(Testability, (_i1.NgZone p0) => new Testability(p0));
  _ngRef.registerDependencies(Testability, const [
    const [_i1.NgZone]
  ]);
  _ngRef.registerFactory(TestabilityRegistry, () => new TestabilityRegistry());
  _ref0.initReflector();
  _ref1.initReflector();
}
