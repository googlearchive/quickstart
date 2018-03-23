// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'element.dart';
export 'element.dart';
import 'package:meta/meta.dart';
import '../../core/linker/app_view.dart';
import 'hierarchical.dart';
import 'injector.dart';
import '../../core/linker/app_view.template.dart' as _ref0;
import 'hierarchical.template.dart' as _ref1;
import 'injector.template.dart' as _ref2;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
