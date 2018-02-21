// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'component_loader.dart';
export 'component_loader.dart';
import 'package:meta/meta.dart';
import '../../di/injector/injector.dart';
import '../di/decorators.dart';
import 'component_factory.dart';
import 'view_container_ref.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../../di/injector/injector.template.dart' as _ref0;
import '../di/decorators.template.dart' as _ref1;
import 'component_factory.template.dart' as _ref2;
import 'view_container_ref.template.dart' as _ref3;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(ComponentLoader, () => new ComponentLoader());
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
