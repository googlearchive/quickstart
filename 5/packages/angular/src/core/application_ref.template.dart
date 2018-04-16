// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'application_ref.dart';
export 'application_ref.dart';
import 'dart:async';
import 'dart:html';
import 'package:angular/src/core/change_detection/host.dart';
import 'package:angular/src/runtime.dart';
import 'package:meta/meta.dart';
import '../facade/exception_handler.dart' show ExceptionHandler;
import 'change_detection/host.dart';
import 'di.dart';
import 'linker/component_factory.dart' show ComponentRef, ComponentFactory;
import 'testability/testability.dart' show TestabilityRegistry, Testability;
import 'zone/ng_zone.dart' show NgZone, NgZoneError;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../facade/exception_handler.template.dart' as _ref0;
import 'change_detection/host.template.dart' as _ref1;
import 'di.template.dart' as _ref2;
import 'linker/component_factory.template.dart' as _ref3;
import 'package:angular/src/core/change_detection/host.template.dart' as _ref4;
import 'package:angular/src/runtime.template.dart' as _ref5;
import 'testability/testability.template.dart' as _ref6;
import 'zone/ng_zone.template.dart' as _ref7;
import 'package:angular/src/core/zone/ng_zone.dart' as _i1;
import 'package:angular/src/di/injector/injector.dart' as _i2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(ApplicationRefImpl, (_i1.NgZone p0, _i2.Injector p1) => new ApplicationRefImpl(p0, p1));
  _ngRef.registerDependencies(ApplicationRefImpl, const [
    const [_i1.NgZone],
    const [_i2.Injector]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
}
