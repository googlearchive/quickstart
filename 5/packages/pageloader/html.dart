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

/// PageLoader HTML provides the necessary bindings to support using PageLoader
/// Objects in tests that run within the browser.
library pageloader.html;

import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'dart:mirrors' hide Comment;
import 'dart:svg' show SvgElement;

import 'src/core.dart';
import 'src/interfaces.dart';

export 'src/interfaces.dart';

/// execute [fn] as a separate microtask and return a [Future] that completes
// normally when that [Future] completes (normally or with an error).
Future _microtask(fn()) => new Future.microtask(fn).whenComplete(() {});

class HtmlPageLoader extends BasePageLoader {
  HtmlPageLoaderElement _globalContext;

  @override
  HtmlPageLoaderElement get globalContext => _globalContext;

  _HtmlMouse _mouse;

  @override
  _HtmlMouse get mouse => _mouse;

  HtmlPageLoader(Node globalContext,
      {bool useShadowDom: true,
      SyncedExecutionFn executeSyncedFn: noOpExecuteSyncedFn})
      : super(useShadowDom: useShadowDom, executeSyncedFn: executeSyncedFn) {
    this._globalContext = new HtmlPageLoaderElement(globalContext, this);
    this._mouse = new _HtmlMouse(this);
  }

  @override
  Future<T> getInstance<T>(Type type, [dynamic context]) async {
    if (context != null) {
      if (context is Node) {
        context = new HtmlPageLoaderElement(context, this);
      } else if (context is! HtmlPageLoaderElement) {
        throw new PageLoaderException('Invalid context: $context');
      }
    }
    return getInstanceInternal(type, context);
  }
}

class _HtmlMouse implements PageLoaderMouse {
  final HtmlPageLoader loader;

  int clientX = 0;
  int clientY = 0;

  _HtmlMouse(this.loader);

  @override
  Future down(MouseButton button,
          {PageLoaderElement eventTarget, bool sync: true}) =>
      loader.executeSynced(
          () => dispatchEvent('mousedown', eventTarget, button), sync);

  @override
  Future moveTo(PageLoaderElement element, int xOffset, int yOffset,
          {PageLoaderElement eventTarget, bool sync: true}) =>
      loader.executeSynced(() {
        if (element is _ElementPageLoaderElement) {
          clientX =
              (element.node.getBoundingClientRect().left + xOffset).ceil();
          clientY = (element.node.getBoundingClientRect().top + yOffset).ceil();
        }
        return dispatchEvent('mousemove', eventTarget);
      }, sync);

  @override
  Future up(MouseButton button,
          {PageLoaderElement eventTarget, bool sync: true}) =>
      loader.executeSynced(() => dispatchEvent('mouseup', eventTarget), sync);

  int get pageX => window.pageXOffset + clientX;
  int get pageY => window.pageYOffset + clientY;
  int get _borderWidth => (window.outerWidth - window.innerWidth) ~/ 2;
  int get screenX => window.screenLeft + _borderWidth + clientX;
  int get screenY =>
      window.screenTop +
      window.outerHeight -
      window.innerHeight -
      _borderWidth +
      clientY;

  Future dispatchEvent(String type, _ElementPageLoaderElement eventTarget,
      [MouseButton button = MouseButton.primary]) async {
    var event = new MouseEvent(type,
        button: button.value,
        clientX: clientX,
        clientY: clientY,
        screenX: screenX,
        screenY: screenY);

    if (eventTarget != null) {
      await _microtask(() => eventTarget.node.dispatchEvent(event));
    } else {
      await _microtask(() => currentElement.dispatchEvent(event));
    }
  }

  Element get currentElement {
    var element = document.elementFromPoint(pageX, pageY);
    if (element == null) {
      element = document.body;
    }
    return element;
  }
}

abstract class HtmlPageLoaderElement implements PageLoaderElement {
  @override
  final HtmlPageLoader loader;

  dynamic get node;

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

  factory HtmlPageLoaderElement(Node node, HtmlPageLoader loader) {
    if (node is Element) {
      return new _ElementPageLoaderElement(node, loader);
    }
    if (node is Document) {
      return new _DocumentPageLoaderElement(node, loader);
    }
    if (node is ShadowRoot) {
      if (loader.useShadowDom) {
        return new _ShadowRootPageLoaderElement(node, loader);
      }
      throw new PageLoaderException(
          'Cannot create element for ShadowRoot when useShadowDom is false');
    }
    throw new PageLoaderException(
        'Unable to create PageLoaderElement for $node');
  }

  HtmlPageLoaderElement._(this.loader,
      {this.attributes: const _EmptyAttributes(),
      this.computedStyle: const _EmptyAttributes(),
      this.properties: const _EmptyAttributes(),
      this.seleniumAttributes: const _EmptyAttributes(),
      this.style: const _EmptyAttributes()});

  @override
  Future<String> get innerText async => node.text.trim();

  // TODO(DrMarcII) consider normalizing string
  @override
  Future<String> get visibleText async => _normalize(_elementText(node));

  @override
  Stream<HtmlPageLoaderElement> getElementsByCss(String selector) =>
      _fromNodeList(node.querySelectorAll(selector));

  Stream<HtmlPageLoaderElement> _fromNodeList(List<Node> nodes) async* {
    for (var node in nodes) {
      yield new HtmlPageLoaderElement(node, loader);
    }
  }

  @override
  int get hashCode => node.hashCode;

  @override
  bool operator ==(other) =>
      other != null &&
      other.runtimeType == runtimeType &&
      other.node == node &&
      other.loader == loader;

  @override
  String toString() => '$runtimeType<$node>';

  Future type(String keys,
          {bool sync: true, bool focusBefore: true, bool blurAfter: true}) =>
      loader.executeSynced(() => _fireKeyPressEvents(node, keys.length), sync);

  // KeyEvent doesn't work in Dartium due to:
  // https://code.google.com/p/dart/issues/detail?id=13902
  // There is no reliable way to set the actual key values, so we just fire a number of
  // key presses instead.
  Future _fireKeyPressEvents(Element element, int numKeys) async {
    for (int i = 0; i < numKeys; ++i) {
      await _microtask(
          () => element.dispatchEvent(new KeyboardEvent('keypress')));
    }
  }

  @override
  Future<bool> get isFocused async => document.activeElement == node;

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
  Future<PageLoaderElement> get shadowRoot async =>
      throw new PageLoaderException('$runtimeType.shadowRoot is unsupported');

  @override
  Future blur({bool sync: true}) async =>
      throw new PageLoaderException('$runtimeType.blur() is unsupported');

  @override
  Future focus({bool sync: true}) async =>
      throw new PageLoaderException('$runtimeType.focus() is unsupported');
}

class _ElementPageLoaderElement extends HtmlPageLoaderElement {
  final Element node;

  _ElementPageLoaderElement(Element node, HtmlPageLoader loader)
      : this.node = node,
        super._(loader,
            attributes: new _ElementAttributes(node),
            computedStyle: new _ElementComputedStyle(node),
            properties: new _NodeProperties(node),
            seleniumAttributes: new _ElementSeleniumAttributes(node),
            style: new _ElementStyle(node));

  @override
  Future<PageLoaderElement> get shadowRoot async {
    if (loader.useShadowDom) {
      if (node.shadowRoot != null) {
        return new HtmlPageLoaderElement(node.shadowRoot, loader);
      }
      throw new PageLoaderException('$this does not have a shadowRoot');
    }
    return this;
  }

  @override
  Future<String> get name async => node.tagName.toLowerCase();
  // TODO(DrMarcII): implement this to recurse up the tree to see if displayed
  @override
  Future<bool> get displayed async => node.getComputedStyle().display != 'none';

  @override
  Stream<String> get classes => new Stream.fromIterable(node.classes);

  @override
  Future<Rectangle> getBoundingClientRect() async =>
      node.getBoundingClientRect();

  @override
  Future<Rectangle> get offset async => node.offset;

  @override
  Future click({bool sync: true}) => loader.executeSynced(() async {
        if (node is OptionElement) {
          return _clickOptionElement();
        }

        await _microtask(() =>
            node.dispatchEvent(new Event.eventType('MouseEvent', 'mousedown')));
        await _microtask(() =>
            node.dispatchEvent(new Event.eventType('MouseEvent', 'mouseup')));

        if (node is SvgElement) {
          return _microtask(() =>
              node.dispatchEvent(new Event.eventType('MouseEvent', 'click')));
        }

        return _microtask(node.click);
      }, sync);

  Future _clickOptionElement() {
    OptionElement option = node as OptionElement;
    option.selected = true;
    return _microtask(() => option.dispatchEvent(new Event('change')));
  }

  @override
  Future type(String keys,
          {bool sync: true, bool focusBefore: true, bool blurAfter: true}) =>
      loader.executeSynced(() async {
        if (focusBefore) await focus(sync: false);
        await _fireKeyPressEvents(node, keys.length);
        if (node is InputElement || node is TextAreaElement) {
          // suppress warning by hiding field
          dynamic node = this.node;
          node.value += keys;
          await _microtask(() => node.dispatchEvent(new TextEvent('input')));
          await _microtask(() => node.dispatchEvent(new TextEvent('change')));
        }
        if (blurAfter) await blur(sync: false);
      }, sync);

  @override
  Future clear(
          {bool sync: true, bool focusBefore: true, bool blurAfter: true}) =>
      loader.executeSynced(() async {
        if (node is InputElement || node is TextAreaElement) {
          dynamic node = this.node;
          if (focusBefore) await focus(sync: false);
          node.value = '';
          await _microtask(() => node.dispatchEvent(new TextEvent('input')));
          await _microtask(() => node.dispatchEvent(new TextEvent('change')));
          if (blurAfter) await blur(sync: false);
        } else {
          throw new PageLoaderException('$this does not support clear.');
        }
      }, sync);

  @override
  Future blur({bool sync: true}) =>
      loader.executeSynced(() => _microtask(node.blur), true);

  @override
  Future focus({bool sync: true}) =>
      loader.executeSynced(() => _microtask(node.focus), true);
}

class _ShadowRootPageLoaderElement extends HtmlPageLoaderElement {
  final ShadowRoot node;

  _ShadowRootPageLoaderElement(ShadowRoot _node, PageLoader loader)
      : this.node = _node,
        super._(loader, properties: new _NodeProperties(_node)) {
    assert(loader.useShadowDom);
  }

  @override
  Future<String> get name async => '__shadow_root__';
  @override
  Future<bool> get displayed async => true;
}

class _DocumentPageLoaderElement extends HtmlPageLoaderElement {
  final Document node;

  _DocumentPageLoaderElement(Document _node, PageLoader loader)
      : this.node = _node,
        super._(loader, properties: new _NodeProperties(_node));

  @override
  Future<String> get name async => '__document__';
  @override
  Future<bool> get displayed async => true;

  @override
  Future type(String keys,
          {bool sync: true, bool focusBefore: true, bool blurAfter: true}) =>
      loader.executeSynced(() async {
        // TODO(DrMarcII) consider whether this should be sent to
        // document.activeElement to more closely match WebDriver behavior.
        if (focusBefore) await _microtask(() => document.body.focus());
        await _fireKeyPressEvents(document.body, keys.length);
        if (blurAfter) await _microtask(() => document.body.blur());
      }, sync);
}

class _NodeProperties extends PageLoaderAttributes {
  final Node _node;

  _NodeProperties(this._node);

  @override
  Future<String> operator [](String name) async {
    try {
      return reflect(_node).getField(new Symbol(name)).reflectee?.toString();
    } catch (e) {
      return null;
    }
  }
}

class _ElementAttributes extends PageLoaderAttributes {
  final Element _node;

  _ElementAttributes(this._node);

  /// Based on algorithm from:
  /// https://dvcs.w3.org/hg/webdriver/raw-file/a9916dddac01/webdriver-spec.html#get-id-attribute
  @override
  Future<String> operator [](String name) async => _node.attributes[name];
}

@deprecated
class _ElementSeleniumAttributes extends PageLoaderAttributes {
  static const _BOOLEAN_ATTRIBUTES = const [
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'compact',
    'complete',
    'controls',
    'declare',
    'defaultchecked',
    'defaultselected',
    'defer',
    'disabled',
    'draggable',
    'ended',
    'formnovalidate',
    'hidden',
    'indeterminate',
    'iscontenteditable',
    'ismap',
    'itemscope',
    'loop',
    'multiple',
    'muted',
    'nohref',
    'noresize',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'paused',
    'pubdate',
    'readonly',
    'required',
    'reversed',
    'scoped',
    'seamless',
    'seeking',
    'selected',
    'spellcheck',
    'truespeed',
    'willvalidate'
  ];

  final Element _node;

  _ElementSeleniumAttributes(this._node);

  /// Based on algorithm from:
  /// https://dvcs.w3.org/hg/webdriver/raw-file/a9916dddac01/webdriver-spec.html#get-id-attribute
  @override
  Future<String> operator [](String name) async {
    var result;
    var lcName = name.toLowerCase();

    // 1
    if (lcName == 'style') {
      return _node.style.cssText;
    }
    // 2
    if (_node.attributes.containsKey(name)) {
      // 2.1
      result = _node.attributes[name];
      // 2.2
      if (_BOOLEAN_ATTRIBUTES.contains(name)) {
        return 'true';
      }
      // 2.3 skip to 7
    } else {
      // 3
      if (_node is OptionElement && lcName == 'value') {
        return _node.text;
      }
      // 4
      if (lcName == 'selected') {
        if (_node is CheckboxInputElement) {
          return (_node as CheckboxInputElement).checked ? 'true' : null;
        }
        if (_node is RadioButtonInputElement) {
          return (_node as RadioButtonInputElement).checked ? 'true' : null;
        }
      }
      // 5
      if (_node is AnchorElement && name == 'href') {
        return (_node as AnchorElement).href;
      }
      // 5
      if (_node is ImageElement && name == 'src') {
        return (_node as ImageElement).src;
      }
      // 6
      if (name == 'class') {
        return this['className'];
      }
      // 6
      if (name == 'readonly') {
        return this['readOnly'];
      }
    }
    // 7
    try {
      //  7.1
      result = reflect(_node).getField(new Symbol(name)).reflectee;
    } catch (e) {/* 7.2 - 7.3 ignore and default to attribute value or null*/}

    if (result is bool) {
      return result ? 'true' : null;
    }
    if (result is CssStyleDeclaration) {
      return result.cssText;
    }
    if (result == null) {
      return null;
    }
    return result.toString();
  }
}

class _ElementComputedStyle extends PageLoaderAttributes {
  final Element _node;

  _ElementComputedStyle(this._node);

  @override
  Future<String> operator [](String name) async =>
      _node.getComputedStyle().getPropertyValue(name);
}

class _ElementStyle extends PageLoaderAttributes {
  final Element _node;

  _ElementStyle(this._node);

  @override
  Future<String> operator [](String name) async =>
      _node.style.getPropertyValue(name);
}

class _EmptyAttributes implements PageLoaderAttributes {
  const _EmptyAttributes();

  @override
  Future<String> operator [](String name) async => null;
}

String _elementText(n) {
  hasShadowRoot(n) => n is Element && n.shadowRoot != null;
  if (n is Iterable) return n.map((nn) => _elementText(nn)).join("");
  if (n is Comment) return '';
  if (n is ContentElement) return _elementText(n.getDistributedNodes());
  if (hasShadowRoot(n)) return _elementText(n.shadowRoot.nodes);
  if (n.nodes == null || n.nodes.isEmpty) return n.text;
  return _elementText(n.nodes);
}

final _nonBreaking = new RegExp(r'^[\S\xa0]$');

String _normalize(String string) {
  var skipWS = true;
  var addWS = false;
  var buffer = new StringBuffer();
  for (int i = 0; i < string.length; i++) {
    var char = string[i];
    if (char.contains(_nonBreaking)) {
      if (addWS) {
        buffer.write(' ');
        addWS = false;
      }
      if (char == '\xa0') {
        buffer.write(' ');
      } else {
        buffer.write(char);
      }
      skipWS = false;
    } else if (!skipWS) {
      addWS = true;
      skipWS = true;
    }
  }
  return buffer.toString();
}
