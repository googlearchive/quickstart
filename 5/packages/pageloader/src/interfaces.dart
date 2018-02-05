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

library pageloader.interfaces;

import 'dart:async';
import 'dart:math';
import 'package:webdriver/core.dart' show MouseButton;

export 'package:webdriver/core.dart' show MouseButton;

typedef Future<T> SyncedExecutionFn<T>(Future<T> fn());

abstract class Lazy<T> {
  Future<T> call();
}

abstract class PageLoader {
  bool get useShadowDom;
  PageLoaderElement get globalContext;

  Future<T> getInstance<T>(Type type, [dynamic context]);

  PageLoaderMouse get mouse;
}

abstract class PageLoaderMouse {
  /// Press [button] on the mouse at its current location. If [eventTarget] is
  /// specified, PageLoader will attempt to fire the corresponding mouse events
  /// on that target, otherwise it will fire the events on the target that is
  /// under the current mouse location.
  Future down(MouseButton button,
      {PageLoaderElement eventTarget, bool sync: true});

  /// Release [button] on the mouse at its current location. If [eventTarget] is
  /// specified, PageLoader will attempt to fire the corresponding mouse events
  /// on that target, otherwise it will fire the events on the target that is
  /// under the current mouse location.
  Future up(MouseButton button,
      {PageLoaderElement eventTarget, bool sync: true});

  /// Move the mouse to a location relative to [element]. If [eventTarget] is
  /// specified, PageLoader will attempt to fire the corresponding mouse events
  /// on that target, otherwise it will fire the events on the target that is
  /// under the current mouse location.
  Future moveTo(PageLoaderElement element, int xOffset, int yOffset,
      {PageLoaderElement eventTarget, bool sync: true});
}

/// Base class for anything in the DOM that users can interact with via
/// pageloader (e.g. HTML Nodes, the document itself, etc).
abstract class PageLoaderElement {
  /// The [PageLoader] instance associated with this element.
  PageLoader get loader;

  /// The shadow root hosted by this element.
  Future<PageLoaderElement> get shadowRoot;

  /// The text content of this element.
  ///
  /// This should return the value of `<element>.innerText` (see
  /// https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText), but
  /// behaviour may vary for the different pageloader implementations.
  Future<String> get innerText;

  /// Visible text within this element.
  ///
  /// This should return the value of webdriver's getText() call (see
  /// http://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebElement.html#getText--),
  /// but behaviour may vary for the different pageloader implementations.
  Future<String> get visibleText;

  /// The tag name of the node represented by this element.
  Future<String> get name;

  /// Properties associated with this element.
  ///
  /// Warning: the set of properties available may differ slightly between
  /// HTML-backed PageLoader (which uses Dart properties) and WebDriver-backed
  /// PageLoader (which uses JS properties).
  PageLoaderAttributes get properties;

  /// Attributes associated with this element.
  PageLoaderAttributes get attributes;

  /// Attributes/properties associated with this element. This corresponds to the Selenium
  /// WebDriver's get attribute endpoint.
  ///
  /// Note: this intended primarily for transition to new attributes/properties implementations
  /// that will accurately distinguish between attributes and properties.
  @deprecated
  PageLoaderAttributes get seleniumAttributes;

  /// CSS properties of this element after applying the active stylesheets and
  /// resolving any basic computation, such as converting a percentage into an
  /// absolute length.
  PageLoaderAttributes get computedStyle;

  /// This element's inline style attributes.
  PageLoaderAttributes get style;

  /// Whether this element is displayed.
  Future<bool> get displayed;

  /// CSS classes associated with this element.
  Stream<String> get classes;

  /// Whether this element is focused.
  Future<bool> get isFocused;

  /// The offset of this element relative to its parent.
  Future<Rectangle> get offset;

  /// The smallest bounding rectangle that encompasses this element's padding,
  /// scrollbar, and border.
  Future<Rectangle> getBoundingClientRect();

  /// Returns the elements within this element that match the given CSS
  /// selector.
  Stream<PageLoaderElement> getElementsByCss(String selector);

  /// Clears the text of this element, if possible (e.g. for text fields).
  ///
  /// [focusBefore] indicates whether to focus this element before clearing.
  /// [blurAfter] indicates whether to blur this element after clearing.
  Future clear({bool sync: true, bool focusBefore: true, bool blurAfter: true});

  /// Clicks on the element.
  Future click({bool sync: true});

  /// Types [keys] into this element, if possible (e.g. for an input element).
  ///
  /// [focusBefore] indicates whether to focus this element before typing.
  /// [blurAfter] indicates whether to blur this element after typing.
  Future type(String keys,
      {bool sync: true, bool focusBefore: true, bool blurAfter: true});

  /// Focuses the element.
  Future focus({bool sync: true});

  /// Blurs the element (= lose focus).
  Future blur({bool sync: true});
}

abstract class PageLoaderAttributes {
  Future<String> operator [](String name);
}

abstract class Finder {
  Stream<PageLoaderElement> findElements(PageLoaderElement context);
}

abstract class Filter {
  const Filter();

  Stream<PageLoaderElement> filter(Stream<PageLoaderElement> elements);
}

abstract class ElementFilter implements Filter {
  const ElementFilter();

  @override
  Stream<PageLoaderElement> filter(Stream<PageLoaderElement> elements) async* {
    for (PageLoaderElement el in await elements.toList()) {
      if (await keep(el)) {
        yield el;
      }
    }
  }

  Future<bool> keep(PageLoaderElement element);
}

class PageLoaderException {
  final String message;

  const PageLoaderException(this.message);

  @override
  String toString() => 'PageLoaderException: $message';
}
