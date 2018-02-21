// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hammer_gestures.dart';
export 'hammer_gestures.dart';
import 'dart:html';
import 'dart:js' as js;
import "package:angular/src/core/di.dart" show Injectable, Inject, OpaqueToken;
import 'package:angular/src/facade/exceptions.dart' show BaseException;
import './hammer_common.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import './hammer_common.template.dart' as _ref0;
import 'package:angular/src/core/di.template.dart' as _ref1;
import 'package:angular/src/facade/exceptions.template.dart' as _ref2;
import 'package:angular/src/platform/dom/events/hammer_gestures.dart' as _i1;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerFactory(HammerGestureConfig, () => new HammerGestureConfig());
  _ngRef.registerFactory(HammerGesturesPlugin, (_i1.HammerGestureConfig p0) => new HammerGesturesPlugin(p0));
  _ngRef.registerDependencies(HammerGesturesPlugin, const [
    const [const _ngRef.Inject(const _ngRef.OpaqueToken<dynamic>('HammerGestureConfig'))]
  ]);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
