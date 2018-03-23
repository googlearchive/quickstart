// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'number_pipe.dart';
export 'number_pipe.dart';
import 'package:intl/intl.dart';
import 'package:angular/di.dart' show PipeTransform, Pipe;
import 'package:angular/src/facade/exceptions.dart' show BaseException;
import 'invalid_pipe_argument_exception.dart';
import 'invalid_pipe_argument_exception.template.dart' as _ref0;
import 'package:angular/di.template.dart' as _ref1;
import 'package:angular/src/facade/exceptions.template.dart' as _ref2;

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
