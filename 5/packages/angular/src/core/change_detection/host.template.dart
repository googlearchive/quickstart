// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'host.dart';
export 'host.dart';
import 'dart:async';
import 'dart:html';
import 'package:meta/meta.dart';
import 'package:angular/src/runtime.dart';
import 'package:angular/src/core/linker/app_view.dart';
import 'package:angular/src/core/linker/view_ref.dart';
import 'change_detection.dart';
import 'constants.dart';
import 'change_detection.template.dart' as _ref0;
import 'constants.template.dart' as _ref1;
import 'package:angular/src/core/linker/app_view.template.dart' as _ref2;
import 'package:angular/src/core/linker/view_ref.template.dart' as _ref3;
import 'package:angular/src/runtime.template.dart' as _ref4;

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
}
