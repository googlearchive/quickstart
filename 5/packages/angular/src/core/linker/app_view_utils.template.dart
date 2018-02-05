// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_view_utils.dart';
export 'app_view_utils.dart';
import 'package:angular/di.dart' show Injectable, Inject;
import 'package:angular/src/core/application_tokens.dart' show APP_ID;
import 'package:angular/src/core/change_detection/change_detection.dart' show devModeEqual;
import 'package:angular/src/core/metadata/view.dart' show ViewEncapsulation;
import 'package:angular/src/core/render/api.dart' show RenderComponentType;
import 'package:angular/src/core/security.dart' show SafeValue;
import 'package:angular/src/core/security.dart';
import 'package:angular/src/platform/dom/events/event_manager.dart' show EventManager;
import 'exceptions.dart' show ExpressionChangedAfterItHasBeenCheckedException;
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'exceptions.template.dart' as _ref0;
import 'package:angular/di.template.dart' as _ref1;
import 'package:angular/src/core/application_tokens.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/change_detection.template.dart' as _ref3;
import 'package:angular/src/core/metadata/view.template.dart' as _ref4;
import 'package:angular/src/core/render/api.template.dart' as _ref5;
import 'package:angular/src/core/security.template.dart' as _ref6;
import 'package:angular/src/core/security.template.dart' as _ref7;
import 'package:angular/src/platform/dom/events/event_manager.template.dart' as _ref8;

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
  _ngRef.registerFactory(
    AppViewUtils,
    (String p0, SanitizationService p1, EventManager p2) => new AppViewUtils(p0, p1, p2),
  );
  _ngRef.registerDependencies(
    AppViewUtils,
    const [
      const [
        const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>(r'APP_ID')),
      ],
      const [
        SanitizationService,
      ],
      const [
        EventManager,
      ],
    ],
  );
}
