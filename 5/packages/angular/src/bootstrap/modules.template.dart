// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'modules.dart';
export 'modules.dart';
import 'dart:html';
import 'dart:math';
import 'package:angular/src/core/application_ref.dart';
import 'package:angular/src/core/application_tokens.dart';
import 'package:angular/src/core/di.dart';
import 'package:angular/src/core/linker/app_view_utils.dart';
import 'package:angular/src/core/linker/component_loader.dart';
import 'package:angular/src/core/linker/component_resolver.dart';
import 'package:angular/src/core/linker/dynamic_component_loader.dart';
import 'package:angular/src/core/testability/testability.dart';
import 'package:angular/src/core/zone.dart';
import 'package:angular/src/di/providers.dart';
import 'package:angular/src/facade/exception_handler.dart';
import 'package:angular/src/facade/lang.dart';
import 'package:angular/src/platform/browser/exceptions.dart';
import 'package:angular/src/platform/dom/events/dom_events.dart';
import 'package:angular/src/platform/dom/events/event_manager.dart';
import 'package:angular/src/platform/dom/events/hammer_gestures.dart';
import 'package:angular/src/platform/dom/events/key_events.dart';
import 'package:angular/src/security/dom_sanitization_service.dart';
import 'package:angular/src/security/dom_sanitization_service_impl.dart';
import 'package:meta/meta.dart';
import 'modules.template.dart' as ng;
import 'modules.template.dart' as _ref0;
import 'package:angular/src/core/application_ref.template.dart' as _ref1;
import 'package:angular/src/core/application_tokens.template.dart' as _ref2;
import 'package:angular/src/core/di.template.dart' as _ref3;
import 'package:angular/src/core/linker/app_view_utils.template.dart' as _ref4;
import 'package:angular/src/core/linker/component_loader.template.dart' as _ref5;
import 'package:angular/src/core/linker/component_resolver.template.dart' as _ref6;
import 'package:angular/src/core/linker/dynamic_component_loader.template.dart' as _ref7;
import 'package:angular/src/core/testability/testability.template.dart' as _ref8;
import 'package:angular/src/core/zone.template.dart' as _ref9;
import 'package:angular/src/di/providers.template.dart' as _ref10;
import 'package:angular/src/facade/exception_handler.template.dart' as _ref11;
import 'package:angular/src/facade/lang.template.dart' as _ref12;
import 'package:angular/src/platform/browser/exceptions.template.dart' as _ref13;
import 'package:angular/src/platform/dom/events/dom_events.template.dart' as _ref14;
import 'package:angular/src/platform/dom/events/event_manager.template.dart' as _ref15;
import 'package:angular/src/platform/dom/events/hammer_gestures.template.dart' as _ref16;
import 'package:angular/src/platform/dom/events/key_events.template.dart' as _ref17;
import 'package:angular/src/security/dom_sanitization_service.template.dart' as _ref18;
import 'package:angular/src/security/dom_sanitization_service_impl.template.dart' as _ref19;
// *** EXPERIMENTAL ** Injector Generator [START]
import 'package:angular/src/di/injector/injector.dart' as _i1;
import 'package:angular/src/platform/browser/exceptions.dart' as _i2;
import 'package:angular/src/security/dom_sanitization_service_impl.dart' as _i3;
import 'package:angular/src/core/application_ref.dart' as _i4;
import 'package:angular/src/core/linker/app_view_utils.dart' as _i5;
import 'package:angular/src/core/linker/component_loader.dart' as _i6;
import 'package:angular/src/platform/dom/events/event_manager.dart' as _i7;
import 'package:angular/src/security/dom_sanitization_service.dart' as _i8;
import 'package:angular/src/core/zone/ng_zone.dart' as _i9;
import 'package:angular/src/bootstrap/modules.dart' as _i10;
import 'package:angular/src/core/security.dart' as _i11;
import 'package:angular/src/facade/exception_handler.dart' as _i12;
import 'package:angular/src/core/testability/testability.dart' as _i13;

_i1.Injector minimalApp$Injector([_i1.Injector parent]) => new _Injector$minimalApp._(parent);

class _Injector$minimalApp extends _i1.GeneratedInjector {
  _Injector$minimalApp._([_i1.Injector parent]) : super(parent);

  _i2.BrowserExceptionHandler _field0;

  _i3.DomSanitizationServiceImpl _field2;

  _i4.ApplicationRefImpl _field3;

  dynamic _field4;

  dynamic _field5;

  _i5.AppViewUtils _field6;

  _i6.ComponentLoader _field7;

  _i7.EventManager _field9;

  dynamic _field10;

  _i2.BrowserExceptionHandler _getBrowserExceptionHandler$0() => _field0 ??= new _i2.BrowserExceptionHandler();
  dynamic _getExisting$1() => inject(_i8.DomSanitizationService);
  _i3.DomSanitizationServiceImpl _getDomSanitizationServiceImpl$2() => _field2 ??= new _i3.DomSanitizationServiceImpl();
  _i4.ApplicationRefImpl _getApplicationRefImpl$3() => _field3 ??= new _i4.ApplicationRefImpl(inject(_i4.PlatformRefImpl), inject(_i9.NgZone), inject(_i1.Injector));
  dynamic _getdynamic$4() => _field4 ??= _i10.createNgZone();
  dynamic _getdynamic$5() => _field5 ??= _i10.createRandomAppId();
  _i5.AppViewUtils _getAppViewUtils$6() => _field6 ??= new _i5.AppViewUtils(inject(const _i1.OpaqueToken<dynamic>('APP_ID')), inject(_i11.SanitizationService), inject(_i7.EventManager));
  _i6.ComponentLoader _getComponentLoader$7() => _field7 ??= new _i6.ComponentLoader();
  dynamic _getdynamic$8() => null;
  _i7.EventManager _getEventManager$9() => _field9 ??= new _i7.EventManager(inject(const _i1.OpaqueToken<dynamic>('EventManagerPlugins')), inject(_i9.NgZone));
  dynamic _getdynamic$10() => _field10 ??= _i10.createEventPlugins();
  _i1.Injector _getInjector$11() => this;
  @override
  Object injectFromSelfOptional(Object token, [Object orElse = _i1.throwIfNotFound]) {
    if (identical(token, _i12.ExceptionHandler)) {
      return _getBrowserExceptionHandler$0();
    }
    if (identical(token, _i11.SanitizationService)) {
      return _getExisting$1();
    }
    if (identical(token, _i8.DomSanitizationService)) {
      return _getDomSanitizationServiceImpl$2();
    }
    if (identical(token, _i4.ApplicationRef)) {
      return _getApplicationRefImpl$3();
    }
    if (identical(token, _i9.NgZone)) {
      return _getdynamic$4();
    }
    if (identical(token, const _i1.OpaqueToken<dynamic>('APP_ID'))) {
      return _getdynamic$5();
    }
    if (identical(token, _i5.AppViewUtils)) {
      return _getAppViewUtils$6();
    }
    if (identical(token, _i6.ComponentLoader)) {
      return _getComponentLoader$7();
    }
    if (identical(token, _i13.Testability)) {
      return _getdynamic$8();
    }
    if (identical(token, _i7.EventManager)) {
      return _getEventManager$9();
    }
    if (identical(token, const _i1.OpaqueToken<dynamic>('EventManagerPlugins'))) {
      return _getdynamic$10();
    }
    if (identical(token, _i1.Injector)) {
      return _getInjector$11();
    }
    return orElse;
  }
}
// *** EXPERIMENTAL ** Injector Generator [END]

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
  _ref15.initReflector();
  _ref16.initReflector();
  _ref17.initReflector();
  _ref18.initReflector();
  _ref19.initReflector();
}
