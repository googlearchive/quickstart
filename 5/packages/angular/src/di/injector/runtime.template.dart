// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'runtime.dart';
export 'runtime.dart';
import 'package:angular/src/runtime.dart';
import '../../core/di/decorators.dart';
import '../../core/di/opaque_token.dart';
import '../errors.dart' as errors;
import '../module.dart';
import '../providers.dart';
import '../reflector.dart' as reflector;
import 'empty.dart';
import 'hierarchical.dart';
import 'injector.dart';
import '../../core/di/decorators.template.dart' as _ref0;
import '../../core/di/opaque_token.template.dart' as _ref1;
import '../errors.template.dart' as _ref2;
import '../module.template.dart' as _ref3;
import '../providers.template.dart' as _ref4;
import '../reflector.template.dart' as _ref5;
import 'empty.template.dart' as _ref6;
import 'hierarchical.template.dart' as _ref7;
import 'injector.template.dart' as _ref8;
import 'package:angular/src/runtime.template.dart' as _ref9;

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
}
