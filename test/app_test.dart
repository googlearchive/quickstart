@TestOn('browser')

import 'package:angular_app/app_component.dart';
import 'package:angular_app/app_component.template.dart' as ng;
import 'package:angular_test/angular_test.dart';
import 'package:test/test.dart';

void main() {
  final testBed =
      NgTestBed.forComponent<AppComponent>(ng.AppComponentNgFactory);
  NgTestFixture<AppComponent> fixture;

  setUp(() async {
    fixture = await testBed.create();
  });

  tearDown(disposeAnyRunningTest);

  test('Default greeting', () {
    expect(fixture.text, 'Hello Angular');
  });

  test('Greet world', () async {
    await fixture.update((c) => c.name = 'World');
    expect(fixture.text, 'Hello World');
  });

  test('Greet world HTML', () {
    final html = fixture.rootElement.innerHtml;
    expect(html, '<h1>Hello Angular</h1>');
  });
}
