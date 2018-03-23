// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'directives.dart';
export 'directives.dart';
import 'directives/core_directives.template.dart' as _ref0;
import 'directives/ng_class.template.dart' as _ref1;
import 'directives/ng_for.template.dart' as _ref2;
import 'directives/ng_if.template.dart' as _ref3;
import 'directives/ng_style.template.dart' as _ref4;
import 'directives/ng_switch.template.dart' as _ref5;
import 'directives/ng_template_outlet.template.dart' as _ref6;

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
}
