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

library pageloader.annotations;

import 'dart:async';

import 'interfaces.dart';

// Utility Annotations

/// Normally if an element is not found, an exception is thrown.  This makes
/// it difficult to test for the absence of something in the DOM.  To allow an
/// element to be absent from the DOM, annotate it with this.
const optional = const _Optional();

class _Optional {
  const _Optional();

  @override
  String toString() => '@optional';
}

/// Used to annotate PageLoader-type fields that should have the instance of PageLoader
/// injected.
const inject = const _Inject();

class _Inject {
  const _Inject();

  @override
  String toString() => '@inject';
}

/// By default PageLoader ensures that all elements are displayed.
/// Adding @disableDisplayedCheck to an annotated field or class will disable this check from this
/// point onwards.
const disableDisplayedCheck = const _DisableDisplayedCheck();

class _DisableDisplayedCheck {
  const _DisableDisplayedCheck();

  @override
  String toString() => '@disableDisplayedCheck';
}

// Finder Annotations

class ById implements Finder {
  final String _id;

  const ById(this._id);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) =>
      context.getElementsByCss('#$_id');

  @override
  String toString() => '@ById("$_id")';
}

class ByTagName implements Finder {
  final String _name;

  const ByTagName(this._name);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) =>
      context.getElementsByCss(_name);

  @override
  String toString() => '@ByTagName("$_name")';
}

class ByCss implements Finder {
  final String _locator;

  const ByCss(this._locator);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) =>
      context.getElementsByCss(_locator);

  @override
  String toString() => '@ByCss("$_locator")';
}

/// Finds the first matching element, if there is one.
///
/// Useful to match the root of some component defined recursively.
class FirstByCss extends ByCss {
  const FirstByCss(String locator) : super(locator);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) =>
      super.findElements(context).take(1);
}

class ByClass implements Finder {
  final String _class;

  const ByClass(this._class);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) =>
      context.getElementsByCss('.$_class');

  String toString() => '@ByClass("$_class")';
}

/// Finds elements with the given tag name. Unlike [ByTagName],
/// this will also find the current Root if it is the given tag.
class EnsureTag implements Finder {
  final String _name;

  const EnsureTag(this._name);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) async* {
    if ((await context.name) == this._name) {
      yield context;
    }
    yield* context.getElementsByCss(this._name);
  }

  @override
  String toString() => '@EnsureTag("$_name")';
}

/// Traverses into the shadow dom of the elements found by [of] (or of the
/// current scope if [of] not provided), and then finds elements using [find]
/// if provided.
class InShadowDom implements Finder {
  final Finder of;
  final Finder find;

  const InShadowDom({this.of: root, this.find: root});

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) async* {
    for (var el
        in await of.findElements(context).map((e) => e.shadowRoot).toList()) {
      yield* find.findElements(await el);
    }
  }

  @override
  String toString() => '@InShadowDom(of: $of, find: $find)';
}

/// Matches the root [PageLoaderElement] being used for constructing the
/// current page object.
const root = const _Root();

class _Root implements Finder {
  const _Root();

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) async* {
    yield context;
  }

  @override
  String toString() => '@root';
}

/// Return all of the elements found by all of the provided Finders.
/// Note: this does not de-dup elements. The order of the returned
/// elements is based on the order of the finders.
class All implements Finder {
  final List<Finder> _finders;

  const All(this._finders);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) async* {
    for (var finder in _finders) {
      yield* finder.findElements(context);
    }
  }

  @override
  String toString() => '@All($_finders)';
}

/// Return the elements located by a series of finders and filters running in
/// sequence. For example, @Chain(const [finderA, finderB, filterX]) will find
/// all elements that match B inside an element that matches A and then filter
/// by X.
/// Note: this does not de-dup elements.
class Chain implements Finder {
  final List _annotations;

  const Chain(this._annotations);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) {
    var elements = () async* {
      yield context;
    }();

    for (var annotation in _annotations) {
      if (annotation is Filter) {
        elements = annotation.filter(elements);
      } else if (annotation is Finder) {
        elements = (els) async* {
          for (var el in await els.toList()) {
            yield* annotation.findElements(el);
          }
        }(elements);
      }
    }

    return elements;
  }

  @override
  String toString() => '@Chain($_annotations)';
}

/// Evaluates the nested annotation from the global context for the PageLoader
/// instance being used.
class Global implements Finder {
  final Finder _finder;

  const Global([this._finder = root]);

  @override
  Stream<PageLoaderElement> findElements(PageLoaderElement context) =>
      _finder.findElements(context.loader.globalContext);

  @override
  String toString() => '@Global($_finder)';
}

// Filters

/// Filters element based on visibility.
class IsDisplayed extends ElementFilter {
  final bool _displayed;

  const IsDisplayed([this._displayed = true]);

  @override
  Future<bool> keep(PageLoaderElement element) async =>
      (await element.displayed) == _displayed;

  @override
  String toString() => '@IsDisplayed($_displayed)';
}

/// Keeps only [PageLoaderElement]s that have the given attribute with the
/// given value.
class WithAttribute extends ElementFilter {
  final String _attribute;
  final String _value;

  const WithAttribute(this._attribute, this._value);

  @override
  Future<bool> keep(PageLoaderElement element) async =>
      (await element.attributes[_attribute]) == _value;

  String toString() => '@WithAttribute($_attribute, $_value)';
}

/// Keeps only [PageLoaderElement]s that have the given property with the
/// given value.
class WithProperty extends ElementFilter {
  final String _property;
  final String _value;

  const WithProperty(this._property, this._value);

  @override
  Future<bool> keep(PageLoaderElement element) async =>
      (await element.properties[_property]) == _value;

  String toString() => '@WithProperty($_property, $_value)';
}

/// Keeps only [PageLoaderElement]s that have the given attribute with the
/// given value.
///
/// Note: this is primarily inteaded for transition to separate WithAttribute
/// WithProperty Filters that differentiate between attributes/properties.
class WithSeleniumAttribute extends ElementFilter {
  final String _attribute;
  final String _value;

  const WithSeleniumAttribute(this._attribute, this._value);

  @override
  Future<bool> keep(PageLoaderElement element) async =>
      (await element.seleniumAttributes[_attribute]) == _value;

  String toString() => '@WithSeleniumAttribute($_attribute, $_value)';
}

/// Keeps only [PageLoaderElement]s that correspond to the given tag.
class IsTag extends ElementFilter {
  final String _name;

  const IsTag(this._name);

  @override
  Future<bool> keep(PageLoaderElement element) async =>
      (await element.name) == _name;

  String toString() => '@IsTag("$_name")';
}

/// Keeps only [PageLoaderElement]s with the given class.
class WithClass extends ElementFilter {
  final String _class;

  const WithClass(this._class);

  @override
  Future<bool> keep(PageLoaderElement element) async =>
      await element.classes.contains(_class);

  String toString() => '@WithClass($_class)';
}

/// Keeps only [PageLoaderElement]s with the given inner text.
class WithInnerText extends ElementFilter {
  final String _text;

  const WithInnerText(this._text);

  @override
  Future<bool> keep(PageLoaderElement element) async =>
      (await element.innerText).contains(_text);

  String toString() => '@WithInnerText($_text)';
}

/// Keeps only [PageLoaderElement]s with the given visible text.
class WithVisibleText extends ElementFilter {
  final String _text;

  const WithVisibleText(this._text);

  @override
  Future<bool> keep(PageLoaderElement element) async =>
      (await element.visibleText).contains(_text);

  String toString() => '@WithVisibleText($_text)';
}
