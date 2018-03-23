// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'linker.dart';
export 'linker.dart';
import 'linker/component_factory.template.dart' as _ref0;
import 'linker/component_loader.template.dart' as _ref1;
import 'linker/component_resolver.template.dart' as _ref2;
import 'linker/dynamic_component_loader.template.dart' as _ref3;
import 'linker/element_ref.template.dart' as _ref4;
import 'linker/exceptions.template.dart' as _ref5;
import 'linker/query_list.template.dart' as _ref6;
import 'linker/template_ref.template.dart' as _ref7;
import 'linker/view_container_ref.template.dart' as _ref8;
import 'linker/view_ref.template.dart' as _ref9;

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
