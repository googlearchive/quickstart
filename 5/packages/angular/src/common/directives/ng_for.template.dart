// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'ng_for.dart';
export 'ng_for.dart';
import 'package:angular/core.dart' show DoCheck, Directive, Input;
import '../../core/change_detection/differs/default_iterable_differ.dart' show DefaultIterableDiffer, CollectionChangeRecord, TrackByFn;
import '../../core/linker.dart' show ViewContainerRef, ViewRef, TemplateRef, EmbeddedViewRef;
import '../../core/change_detection/differs/default_iterable_differ.template.dart' as _ref0;
import '../../core/linker.template.dart' as _ref1;
import 'package:angular/core.template.dart' as _ref2;

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
