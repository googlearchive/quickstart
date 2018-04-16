// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'dynamic_component_loader.dart';
export 'dynamic_component_loader.dart';
import 'dart:async';
import 'package:angular/src/runtime.dart';
import '../di.dart';
import 'component_factory.dart' show ComponentRef;
import 'component_loader.dart' show ComponentLoader;
import 'component_resolver.dart' show typeToFactory;
import 'view_container_ref.dart' show ViewContainerRef;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import '../di.template.dart' as _ref0;
import 'component_factory.template.dart' as _ref1;
import 'component_loader.template.dart' as _ref2;
import 'component_resolver.template.dart' as _ref3;
import 'package:angular/src/runtime.template.dart' as _ref4;
import 'view_container_ref.template.dart' as _ref5;
import 'package:angular/src/core/linker/component_loader.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(SlowComponentLoader, (_i1.ComponentLoader p0) => new SlowComponentLoader(p0));
  _ngRef.registerDependencies(SlowComponentLoader, const [
    const [_i1.ComponentLoader]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
