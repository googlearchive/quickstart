// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'debug_app_view.dart';
export 'debug_app_view.dart';
import 'dart:async';
import 'dart:convert';
import 'dart:html';
import 'dart:js_util' as js_util;
import 'package:js/js.dart' as js;
import 'package:meta/meta.dart';
import 'package:angular/src/core/change_detection/change_detection.dart' show ChangeDetectorState;
import 'package:angular/src/di/injector/injector.dart' show throwIfNotFound, Injector;
import 'package:angular/src/core/linker/app_view.dart';
import 'package:angular/src/core/linker/component_factory.dart';
import 'package:angular/src/core/linker/exceptions.dart' show ExpressionChangedAfterItHasBeenCheckedException, ViewWrappedException;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/linker/view_type.dart';
import 'package:angular/src/core/render/api.dart';
import 'debug_context.dart' show StaticNodeDebugInfo, DebugContext;
import 'debug_node.dart' show DebugElement, DebugNode, getDebugNode, indexDebugNode, inspectNativeElement, removeDebugNodeFromIndex;
import 'debug_context.template.dart' as _ref0;
import 'debug_context.template.dart' as _ref1;
import 'debug_node.template.dart' as _ref2;
import 'package:angular/src/core/change_detection/change_detection.template.dart' as _ref3;
import 'package:angular/src/core/linker/app_view.template.dart' as _ref4;
import 'package:angular/src/core/linker/app_view.template.dart' as _ref5;
import 'package:angular/src/core/linker/component_factory.template.dart' as _ref6;
import 'package:angular/src/core/linker/exceptions.template.dart' as _ref7;
import 'package:angular/src/core/linker/template_ref.template.dart' as _ref8;
import 'package:angular/src/core/linker/view_container.template.dart' as _ref9;
import 'package:angular/src/core/linker/view_type.template.dart' as _ref10;
import 'package:angular/src/core/render/api.template.dart' as _ref11;
import 'package:angular/src/di/injector/injector.template.dart' as _ref12;

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
}
