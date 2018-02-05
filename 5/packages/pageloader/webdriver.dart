// Copyright 2014 Google Inc. All rights reserved.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/// PageLoader WebDriver provides the necessary bindings to support using
/// PageLoader in WebDriver-based tests.
library pageloader.webdriver;

import 'dart:async';
import 'dart:math';

import 'package:webdriver/core.dart' as wd;

import 'src/core.dart';
import 'src/interfaces.dart';

export 'src/interfaces.dart';

class WebDriverPageLoader extends BasePageLoader {
  final wd.WebDriver driver;
  WebDriverPageLoaderElement _globalContext;
  var _mouse;
  @override
  _WebDriverMouse get mouse => _mouse;

  WebDriverPageLoader(wd.SearchContext globalContext,
      {bool useShadowDom: true,
      SyncedExecutionFn executeSyncedFn: noOpExecuteSyncedFn})
      : this.driver = globalContext.driver,
        super(useShadowDom: useShadowDom, executeSyncedFn: executeSyncedFn) {
    this._mouse = new _WebDriverMouse(this);
    this._globalContext = new WebDriverPageLoaderElement(globalContext, this);
  }

  @override
  WebDriverPageLoaderElement get globalContext => _globalContext;

  @override
  Future<T> getInstance<T>(Type type, [dynamic context]) async {
    if (context != null) {
      if (context is wd.SearchContext) {
        context = new WebDriverPageLoaderElement(context, this);
      } else if (context is! WebDriverPageLoaderElement) {
        throw new PageLoaderException('Invalid context: $context');
      }
    }
    return getInstanceInternal(type, context);
  }
}

class _WebDriverMouse implements PageLoaderMouse {
  final WebDriverPageLoader loader;
  wd.WebDriver get driver => loader.driver;

  _WebDriverMouse(this.loader);

  @override
  Future down(MouseButton button,
          {PageLoaderElement eventTarget, bool sync: true}) =>
      loader.executeSynced(() {
        if (eventTarget == null) {
          return driver.mouse.down(button);
        }
        return _fireEvent(eventTarget, 'mousedown', button);
      }, sync);

  @override
  Future moveTo(PageLoaderElement element, int xOffset, int yOffset,
          {PageLoaderElement eventTarget, bool sync: true}) =>
      loader.executeSynced(() {
        if (eventTarget == null && element is _WebElementPageLoaderElement) {
          return driver.mouse.moveTo(
              element: element.context, xOffset: xOffset, yOffset: yOffset);
        }
        return _fireEvent(eventTarget, 'mousemove');
      }, sync);

  @override
  Future up(MouseButton button,
          {PageLoaderElement eventTarget, bool sync: true}) =>
      loader.executeSynced(() {
        if (eventTarget == null) {
          return driver.mouse.up(button);
        }
        return _fireEvent(eventTarget, 'mouseup', button);
      }, sync);

  Future _fireEvent(PageLoaderElement eventTarget, String type,
          [MouseButton button]) =>
      driver.execute(
          "arguments[0].dispatchEvent(new MouseEvent(arguments[1], "
          "{'button' : arguments[2]}));",
          [
            (eventTarget as _WebElementPageLoaderElement).context,
            type,
            button?.value
          ]);
}

abstract class WebDriverPageLoaderElement implements PageLoaderElement {
  wd.SearchContext get context;
  @override
  final WebDriverPageLoader loader;

  @override
  final PageLoaderAttributes attributes;

  @override
  final PageLoaderAttributes computedStyle;

  @override
  final PageLoaderAttributes properties;

  @override
  @deprecated
  final PageLoaderAttributes seleniumAttributes;

  @override
  final PageLoaderAttributes style;

  factory WebDriverPageLoaderElement(
      wd.SearchContext context, WebDriverPageLoader loader) {
    if (context is wd.WebDriver) {
      return new _WebDriverPageLoaderElement(context, loader);
    }
    if (context is wd.WebElement) {
      return new _WebElementPageLoaderElement(context, loader);
    }
    throw new PageLoaderException(
        'Unable to create PageLoaderElement for $context');
  }

  WebDriverPageLoaderElement._(this.loader,
      {this.attributes: const _EmptyAttributes(),
      this.computedStyle: const _EmptyAttributes(),
      this.properties: const _EmptyAttributes(),
      this.seleniumAttributes: const _EmptyAttributes(),
      this.style: const _EmptyAttributes()});

  @override
  Stream<WebDriverPageLoaderElement> getElementsByCss(String selector) =>
      _fromContextStream(context.findElements(new wd.By.cssSelector(selector)));

  Stream<WebDriverPageLoaderElement> _fromContextStream(Stream contexts) =>
      contexts.map((e) => new WebDriverPageLoaderElement(e, loader));

  @override
  int get hashCode => context.hashCode;

  @override
  bool operator ==(Object other) =>
      other != null &&
      other.runtimeType == runtimeType &&
      (other as WebDriverPageLoaderElement).context == context &&
      (other as WebDriverPageLoaderElement).loader == loader;

  @override
  String toString() => '$runtimeType<${context.toString()}>';

  @override
  Future<bool> get isFocused async {
    if (context is wd.WebElement) {
      return (await context.driver.activeElement) == context;
    }
    throw new PageLoaderException('$runtimeType.isFocused is unsupported');
  }

  @override
  Stream<String> get classes async* {}

  @override
  Future<Rectangle> getBoundingClientRect() => throw new PageLoaderException(
      '$runtimeType.getBoundingClientRect() is unsupported');

  @override
  Future<Rectangle> get offset =>
      throw new PageLoaderException('$runtimeType.offset is unsupported');

  @override
  Future clear(
          {bool sync: true,
          bool focusBefore: true,
          bool blurAfter: true}) async =>
      throw new PageLoaderException('$runtimeType.clear() is unsupported');

  @override
  Future click({bool sync: true}) async =>
      throw new PageLoaderException('$runtimeType.click() is unsupported');

  @override
  Future type(String keys,
          {bool sync: true,
          bool focusBefore: true,
          bool blurAfter: true}) async =>
      throw new PageLoaderException('$runtimeType.type() is unsupported');

  @override
  Future<PageLoaderElement> get shadowRoot async =>
      throw new PageLoaderException('$runtimeType.shadowRoot is unsupported');

  @override
  Future blur({bool sync: true}) async =>
      throw new PageLoaderException('$runtimeType.blur() is unsupported');

  @override
  Future focus({bool sync: true}) async =>
      throw new PageLoaderException('$runtimeType.focus() is unsupported');
}

class _WebElementPageLoaderElement extends WebDriverPageLoaderElement {
  final wd.WebElement context;

  _WebElementPageLoaderElement(
      wd.WebElement context, WebDriverPageLoader loader)
      : this.context = context,
        super._(loader,
            attributes: new _ElementAttributes(context),
            computedStyle: new _ElementComputedStyle(context),
            properties: new _ElementProperties(context),
            seleniumAttributes: new _ElementSeleniumAttributes(context),
            style: new _ElementStyle(context));

  @override
  Future<WebDriverPageLoaderElement> get shadowRoot async {
    if (loader.useShadowDom) {
      if ((await context.driver
          .execute('return arguments[0].shadowRoot != null;', [context]))) {
        return new _ShadowRootPageLoaderElement(context, loader);
      }
      throw new PageLoaderException('$this does not have a shadowRoot');
    }
    return this;
  }

  @override
  Future<String> get name => context.name;

  @override
  Future<String> get innerText async => (await context.driver
          .execute('return arguments[0].textContent;', [context]))
      .trim();

  @override
  Future<String> get visibleText => context.text;

  @override
  Future<bool> get displayed => context.displayed;

  @override
  Stream<String> get classes async* {
    String classAttr = await seleniumAttributes['class'];
    if (classAttr != null && classAttr != '') {
      yield* new Stream.fromIterable(classAttr.split(' '));
    }
  }

  @override
  Future<Rectangle> getBoundingClientRect() async {
    Map<String, num> rect = await context.driver
        .execute('return arguments[0].getBoundingClientRect();', [context]);
    return new Rectangle<num>(
        rect['left'], rect['top'], rect['width'], rect['height']);
  }

  @override
  Future<Rectangle> get offset async {
    Map<String, num> rect = await context.driver.execute(
        '''return {
          left: arguments[0].offsetLeft,
          top: arguments[0].offsetTop,
          width: arguments[0].offsetWidth,
          height: arguments[0].offsetHeight
        }''',
        [context]);
    return new Rectangle<num>(
        rect['left'], rect['top'], rect['width'], rect['height']);
  }

  @override
  Future clear(
          {bool sync: true, bool focusBefore: true, bool blurAfter: true}) =>
      loader.executeSynced(() async {
        if (focusBefore) await focus(sync: false);
        await context.clear();
        if (blurAfter) await blur(sync: false);
      }, sync);

  @override
  Future click({bool sync: true}) => loader.executeSynced(context.click, sync);

  @override
  Future type(String keys,
          {bool sync: true, bool focusBefore: true, bool blurAfter: true}) =>
      loader.executeSynced(() async {
        if (focusBefore) await focus(sync: false);
        await context.sendKeys(keys);
        if (blurAfter) await blur(sync: false);
      }, sync);

  @override
  Future blur({bool sync: true}) => loader.executeSynced(
      () => context.driver.execute('arguments[0].blur();', [context]), sync);

  @override
  Future focus({bool sync: true}) => loader.executeSynced(
      () => context.driver.execute('arguments[0].focus();', [context]), sync);
}

class _WebDriverPageLoaderElement extends WebDriverPageLoaderElement {
  final wd.WebDriver context;

  _WebDriverPageLoaderElement(wd.WebDriver context, WebDriverPageLoader loader)
      : this.context = context,
        super._(loader, properties: new _DocumentProperties(context));

  @override
  Future<String> get name async => '__document__';

  @override
  Future type(String keys,
          {bool sync: true, bool focusBefore: true, bool blurAfter: true}) =>
      loader.executeSynced(() => context.keyboard.sendKeys(keys), sync);

  @override
  Future<bool> get displayed async => true;

  @override
  Future<String> get innerText async =>
      (await context.execute('return arguments[0].textContent;', [await _root]))
          .trim();

  @override
  Future<String> get visibleText async => (await _root).text;

  Future<wd.WebElement> get _root =>
      context.findElement(const wd.By.cssSelector(':root'));
}

class _ShadowRootPageLoaderElement extends WebDriverPageLoaderElement {
  final wd.WebElement context;

  _ShadowRootPageLoaderElement(
      wd.WebElement context, WebDriverPageLoader loader)
      : this.context = context,
        super._(loader, properties: new _ShadowRootProperties(context)) {
    assert(loader.useShadowDom);
  }

  @override
  Future<String> get name async => '__shadow_root__';

  @override
  Future<String> get visibleText => context.text;

  @override
  Future<String> get innerText async => (await _execute('.textContent')).trim();

  @override
  Future<bool> get displayed => context.displayed;

  @override
  Stream<WebDriverPageLoaderElement> getElementsByCss(String selector) async* {
    yield* _fromContextStream(new Stream.fromIterable(
        await _execute('.querySelectorAll("$selector")')));
  }

  Future _execute(String script) {
    return context.driver
        .execute('return arguments[0].shadowRoot$script;', [context]);
  }
}

@deprecated
class _ElementSeleniumAttributes extends PageLoaderAttributes {
  final wd.WebElement _node;

  _ElementSeleniumAttributes(this._node);

  @override
  Future<String> operator [](String name) => _node.attributes[name];
}

class _ElementAttributes extends PageLoaderAttributes {
  final wd.WebElement _node;

  _ElementAttributes(this._node);

  @override
  Future<String> operator [](String name) async => (await _node.driver.execute(
          """
var attr = arguments[0].attributes["$name"];
if(attr) {
  return attr.value;
}
return null;
""",
          [_node]))
      ?.toString();
}

class _ElementProperties extends PageLoaderAttributes {
  final wd.WebElement _node;

  _ElementProperties(this._node);

  @override
  Future<String> operator [](String name) async =>
      (await _node.driver.execute('return arguments[0]["$name"];', [_node]))
          ?.toString();
}

class _ElementComputedStyle extends PageLoaderAttributes {
  final wd.WebElement _node;

  _ElementComputedStyle(this._node);

  @override
  Future<String> operator [](String name) async => (await _node.driver.execute(
          'return window.getComputedStyle(arguments[0]).${_cssPropName(name)};',
          [_node]))
      ?.toString();
}

class _ElementStyle extends PageLoaderAttributes {
  final wd.WebElement _node;

  _ElementStyle(this._node);

  @override
  Future<String> operator [](String name) async => (await _node.driver
          .execute('return arguments[0].style.${_cssPropName(name)};', [_node]))
      ?.toString();
}

/// Convert hyphenated-properties to camelCase.
String _cssPropName(String name) => name.splitMapJoin(new RegExp(r'-(\w)'),
    onMatch: (m) => m.group(1).toUpperCase(), onNonMatch: (m) => m);

class _EmptyAttributes implements PageLoaderAttributes {
  const _EmptyAttributes();

  @override
  Future<String> operator [](String name) async => null;
}

class _DocumentProperties extends PageLoaderAttributes {
  final wd.WebDriver _driver;

  _DocumentProperties(this._driver);

  @override
  Future<String> operator [](String name) async =>
      (await _driver.execute('return document["$name"];', const []))
          ?.toString();
}

class _ShadowRootProperties extends PageLoaderAttributes {
  final wd.WebElement _node;

  _ShadowRootProperties(this._node);

  @override
  Future<String> operator [](String name) async => (await _node.driver
          .execute('return arguments[0].shadowRoot.["$name"];', [_node]))
      ?.toString();
}
