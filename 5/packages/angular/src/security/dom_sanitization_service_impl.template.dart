// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dom_sanitization_service_impl.dart';
export 'dom_sanitization_service_impl.dart';
import '../core/di.dart' show Injectable;
import '../core/security.dart';
import 'dom_sanitization_service.dart';
import 'html_sanitizer.dart';
import 'style_sanitizer.dart';
import 'url_sanitizer.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../core/di.template.dart' as _ref0;
import '../core/security.template.dart' as _ref1;
import 'dom_sanitization_service.template.dart' as _ref2;
import 'html_sanitizer.template.dart' as _ref3;
import 'style_sanitizer.template.dart' as _ref4;
import 'url_sanitizer.template.dart' as _ref5;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(DomSanitizationServiceImpl, () => new DomSanitizationServiceImpl());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
