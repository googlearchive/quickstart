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
import '../facade/exceptions.dart' show BaseException, ExceptionHandler;
import '../platform/dom/shared_styles_host.dart';
import 'application_tokens.dart' show APP_INITIALIZER;
import 'change_detection/host.dart';
import 'di.dart';
import 'linker/app_view.dart' show AppView;
import 'linker/app_view_utils.dart';
import 'linker/component_factory.dart' show ComponentRef, ComponentFactory;
import 'linker/component_resolver.dart' show typeToFactory;
import 'render/api.dart' show sharedStylesHost;
import 'testability/testability.dart' show TestabilityRegistry, Testability;
import 'zone/ng_zone.dart' show NgZone, NgZoneError;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../facade/exceptions.template.dart' as _ref0;
import '../platform/dom/shared_styles_host.template.dart' as _ref1;
import 'application_tokens.template.dart' as _ref2;
import 'change_detection/host.template.dart' as _ref3;
import 'di.template.dart' as _ref4;
import 'linker/app_view.template.dart' as _ref5;
import 'linker/app_view_utils.template.dart' as _ref6;
import 'linker/component_factory.template.dart' as _ref7;
import 'linker/component_resolver.template.dart' as _ref8;
import 'package:angular/src/core/change_detection/host.template.dart' as _ref9;
import 'package:angular/src/runtime.template.dart' as _ref10;
import 'render/api.template.dart' as _ref11;
import 'testability/testability.template.dart' as _ref12;
import 'zone/ng_zone.template.dart' as _ref13;
import 'package:angular/src/core/application_ref.dart' as _i1;
import 'package:angular/src/core/zone/ng_zone.dart' as _i2;
import 'package:angular/src/di/injector/injector.dart' as _i3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(PlatformRefImpl, () => new PlatformRefImpl());
  _ngRef.registerFactory(ApplicationRefImpl, (_i1.PlatformRefImpl p0, _i2.NgZone p1, _i3.Injector p2) => new ApplicationRefImpl(p0, p1, p2));
  _ngRef.registerDependencies(ApplicationRefImpl, const [
    const [_i1.PlatformRefImpl],
    const [_i2.NgZone],
    const [_i3.Injector]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
}
