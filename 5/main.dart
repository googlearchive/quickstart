import 'package:angular/angular.dart';

import 'package:angular_app/app_component.dart';

import 'main.template.dart' as ng;

void main() {
  bootstrapStatic(AppComponent, [], ng.initReflector);
}
