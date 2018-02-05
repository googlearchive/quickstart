// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'application_ref.dart';
export 'application_ref.dart';
import 'dart:async';
import 'dart:html';
import 'package:meta/meta.dart';
import '../facade/exceptions.dart' show BaseException, ExceptionHandler;
import '../facade/lang.dart' show assertionsEnabled;
import '../platform/dom/shared_styles_host.dart';
import 'application_tokens.dart' show PLATFORM_INITIALIZER, APP_INITIALIZER;
import 'change_detection/change_detector_ref.dart';
import 'change_detection/constants.dart';
import 'di.dart';
import 'linker/app_view.dart' show lastGuardedView, caughtException, caughtStack, AppView;
import 'linker/app_view_utils.dart';
import 'linker/component_factory.dart' show ComponentRef, ComponentFactory;
import 'linker/component_resolver.dart';
import 'linker/view_ref.dart';
import 'render/api.dart' show sharedStylesHost;
import 'testability/testability.dart' show TestabilityRegistry, Testability;
import 'zone/ng_zone.dart' show NgZone, NgZoneError;
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../facade/exceptions.template.dart' as _ref0;
import '../facade/lang.template.dart' as _ref1;
import '../platform/dom/shared_styles_host.template.dart' as _ref2;
import 'application_tokens.template.dart' as _ref3;
import 'change_detection/change_detector_ref.template.dart' as _ref4;
import 'change_detection/constants.template.dart' as _ref5;
import 'di.template.dart' as _ref6;
import 'linker/app_view.template.dart' as _ref7;
import 'linker/app_view_utils.template.dart' as _ref8;
import 'linker/component_factory.template.dart' as _ref9;
import 'linker/component_resolver.template.dart' as _ref10;
import 'linker/view_ref.template.dart' as _ref11;
import 'render/api.template.dart' as _ref12;
import 'testability/testability.template.dart' as _ref13;
import 'zone/ng_zone.template.dart' as _ref14;

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
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
  _ref9.initReflector();
  _ref10.initReflector();
  _ref11.initReflector();
  _ref12.initReflector();
  _ref13.initReflector();
  _ref14.initReflector();
  _ngRef.registerFactory(
    PlatformRefImpl,
    () => new PlatformRefImpl(),
  );

  _ngRef.registerFactory(
    ApplicationRefImpl,
    (PlatformRefImpl p0, NgZone p1, Injector p2) => new ApplicationRefImpl(p0, p1, p2),
  );
  _ngRef.registerDependencies(
    ApplicationRefImpl,
    const [
      const [
        PlatformRefImpl,
      ],
      const [
        NgZone,
      ],
      const [
        Injector,
      ],
    ],
  );
}
