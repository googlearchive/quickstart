// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'run.dart';
export 'run.dart';
import 'dart:async';
import 'dart:html';
import 'package:meta/meta.dart';
import '../core/application_ref.dart';
import '../core/application_tokens.dart';
import '../core/di.dart' show ReflectiveInjector;
import '../core/linker.dart' show ComponentFactory, ComponentRef, SlowComponentLoader;
import '../core/linker/app_view_utils.dart';
import '../core/linker/component_resolver.dart' show typeToFactory;
import '../core/render/api.dart';
import '../core/testability/testability.dart';
import '../core/zone.dart';
import '../di/injector/empty.dart';
import '../di/injector/hierarchical.dart';
import '../di/injector/injector.dart';
import '../platform/browser_common.dart';
import '../platform/dom/events/event_manager.dart';
import '../platform/dom/shared_styles_host.dart';
import '../runtime.dart';
import '../security/dom_sanitization_service.dart';
import 'modules.dart';
import '../core/application_ref.template.dart' as _ref0;
import '../core/application_tokens.template.dart' as _ref1;
import '../core/di.template.dart' as _ref2;
import '../core/linker.template.dart' as _ref3;
import '../core/linker/app_view_utils.template.dart' as _ref4;
import '../core/linker/component_resolver.template.dart' as _ref5;
import '../core/render/api.template.dart' as _ref6;
import '../core/testability/testability.template.dart' as _ref7;
import '../core/zone.template.dart' as _ref8;
import '../di/injector/empty.template.dart' as _ref9;
import '../di/injector/hierarchical.template.dart' as _ref10;
import '../di/injector/injector.template.dart' as _ref11;
import '../platform/browser_common.template.dart' as _ref12;
import '../platform/dom/events/event_manager.template.dart' as _ref13;
import '../platform/dom/shared_styles_host.template.dart' as _ref14;
import '../runtime.template.dart' as _ref15;
import '../security/dom_sanitization_service.template.dart' as _ref16;
import 'modules.template.dart' as _ref17;

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
}
