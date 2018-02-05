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

library pageloader.core;

import 'dart:async';
import 'dart:collection';
import 'dart:mirrors';

import 'package:stack_trace/stack_trace.dart' as st;

import 'annotations.dart';
import 'interfaces.dart';

bool _foldPredicate(st.Frame frame) =>
    frame.isCore ||
    frame.library.contains('package:test/') ||
    frame.library.contains('package:pageloader/') ||
    frame.library.contains('package:unittest/') ||
    frame.library.contains('package:stack_trace/');

Future capture(callback()) {
  var completer = new Completer();
  () async {
    try {
      var value = await callback();
      completer.complete(value);
    } catch (e, s) {
      var chain = new st.Chain.forTrace(s).foldFrames(_foldPredicate);
      completer.completeError(e, chain);
    }
  }();
  return completer.future;
}

Future noOpExecuteSyncedFn(Future fn()) => fn();

/// Mechanism for specifying hierarchical page objects using annotations on
/// fields in simple Dart objects.
abstract class BasePageLoader implements PageLoader {
  final bool useShadowDom;
  final SyncedExecutionFn executeSyncedFn;

  BasePageLoader(
      {this.useShadowDom: true, this.executeSyncedFn: noOpExecuteSyncedFn});

  /// Creates a new instance of [type] and binds annotated fields to
  /// corresponding [PageLoaderElement]s.
  Future<T> getInstanceInternal<T>(Type type, [PageLoaderElement context]) {
    if (context == null) {
      context = globalContext;
    }
    return _getInstance(reflectClass(type), context, true);
  }

  Future<T> _getInstance<T>(
          ClassMirror type, PageLoaderElement context, bool displayCheck) =>
      capture(() =>
          new _ClassInfo<T>(type).getInstance(context, this, displayCheck));

  Future executeSynced(Future fn(), bool sync) {
    if (sync) {
      return executeSyncedFn(fn);
    } else {
      return fn();
    }
  }
}

typedef Future<T> _LazyFunction<T>();

class _Lazy<T> implements Lazy<T> {
  final _LazyFunction _call;

  _Lazy(this._call);

  @override
  Future<T> call() => _call();
}

class _ClassInfo<T> {
  static final Map<Type, Map<ClassMirror, _ClassInfo>> _classInfoCache =
      <Type, Map<ClassMirror, _ClassInfo>>{};

  final ClassMirror _class;
  final Iterable<_FieldInfo> _fields;

  final Finder _finder;
  final Iterable<Filter> _filters;
  final bool _displayCheck;

  factory _ClassInfo(ClassMirror type) {
    _classInfoCache.putIfAbsent(T, () => <ClassMirror, _ClassInfo<T>>{});
    return _classInfoCache[T].putIfAbsent(type, () {
      Finder finder = null;
      List<Filter> filters = <Filter>[];
      bool displayCheck = true;
      for (InstanceMirror metadatum in type.metadata) {
        if (!metadatum.hasReflectee) {
          continue;
        }
        var datum = metadatum.reflectee;
        if (datum is Finder) {
          if (finder != null) {
            throw new PageLoaderException(
                '${type.simpleName} has more than one finder');
          }
          finder = datum;
        } else if (datum is Filter) {
          filters.add(datum);
        } else if (datum == disableDisplayedCheck) {
          displayCheck = false;
        }
      }

      if (finder == null) {
        if (filters.isNotEmpty) {
          throw new PageLoaderException(
              '${type.simpleName} has Filter annotations but no Finder annotation');
        }
      }
      if (finder == root && filters.isEmpty) {
        throw new PageLoaderException(
            'Useless @root annotation of ${type.simpleName}');
      }

      return new _ClassInfo<T>._(
          type, _fieldInfos(type), finder, filters, displayCheck);
    });
  }

  _ClassInfo._(this._class, this._fields, this._finder, this._filters,
      this._displayCheck);

  static Iterable<_FieldInfo> _fieldInfos(ClassMirror type) {
    var infos = <_FieldInfo>[];

    for (var current in _allTypes(type)) {
      for (DeclarationMirror decl in current.declarations.values) {
        _FieldInfo info = new _FieldInfo(decl);
        if (info != null) {
          infos.add(info);
        }
      }
    }

    return infos;
  }

  static Iterable<ClassMirror> _allTypes(ClassMirror type) {
    var typesToProcess = new ListQueue<ClassMirror>()..addLast(type);
    var allTypes = new Set<ClassMirror>();

    while (typesToProcess.isNotEmpty) {
      var current = typesToProcess.removeFirst();
      if (!allTypes.contains(current)) {
        allTypes.add(current);

        if (current.superclass != null) {
          typesToProcess.addLast(current.superclass);
        }

        try {
          if (current.mixin != null && current.mixin != current) {
            typesToProcess.addLast(current.mixin);
            print(
                'Warning: mixin ${current.mixin.simpleName} used by ${current.simpleName}'
                ' is not supported when compiled to JS.');
          }
        } catch (e) {}
      }
    }

    return allTypes;
  }

  Future<T> getInstance(PageLoaderElement context, BasePageLoader loader,
      bool displayCheck) async {
    if (!_displayCheck) {
      displayCheck = false;
    }
    if (_finder != null) {
      context =
          await _getElement(context, _finder, _filters, displayCheck, true);
    }
    InstanceMirror page = _reflectedInstance();

    for (var fieldInfo in _fields) {
      await fieldInfo.setField(page, context, loader, displayCheck);
    }
    return page.reflectee as T;
  }

  InstanceMirror _reflectedInstance() {
    for (DeclarationMirror constructor in _class.declarations.values) {
      if (constructor is MethodMirror &&
          constructor.isConstructor &&
          constructor.parameters.isEmpty) {
        return _class.newInstance(constructor.constructorName, []);
      }
    }
    throw new PageLoaderException('$_class has no acceptable constructors');
  }
}

abstract class _FieldInfo {
  final Symbol _fieldName;

  factory _FieldInfo(DeclarationMirror field) {
    Finder finder;
    List<Filter> filters = <Filter>[];
    bool required = true;
    bool displayCheck = true;
    TypeMirror type;
    Symbol name;
    bool lazy = false;
    bool list = false;
    bool injected = false;

    for (InstanceMirror metadatum in field.metadata) {
      if (!metadatum.hasReflectee) {
        continue;
      }
      var datum = metadatum.reflectee;

      if (datum is Finder) {
        if (finder == null) {
          finder = datum;
        } else {
          throw new PageLoaderException(
              '${field.simpleName} has more than one Finder');
        }
      } else if (datum is Filter) {
        filters.add(datum);
      } else if (datum == optional) {
        required = false;
      } else if (datum == disableDisplayedCheck) {
        displayCheck = false;
      } else if (datum == inject) {
        injected = true;
      }
    }
    if (finder == null) {
      if (filters.isNotEmpty || !required || !displayCheck) {
        throw new PageLoaderException(
            '${field.simpleName} has PageLoader annotations but no Finder annotation');
      }
      if (!injected) {
        // no processing required for this field
        return null;
      }
    } else if (injected) {
      throw new PageLoaderException(
          '${field.simpleName} has both @inject and a Finder annotation');
    }

    if (field is VariableMirror) {
      if (field.isFinal || field.isStatic) {
        throw new PageLoaderException('${field.simpleName} is not settable');
      }

      type = field.type;
      name = field.simpleName;
    } else if (field is MethodMirror) {
      if (!field.isSetter || field.isStatic || field.isPrivate) {
        throw new PageLoaderException('${field.simpleName} is not settable');
      }
      type = field.parameters.first.type;
      // HACK to get correct symbol name for operating with setField.
      String nameStr = field.simpleName.toString();
      nameStr =
          nameStr.substring(nameStr.indexOf('"') + 1, nameStr.indexOf('='));
      name = new Symbol(nameStr);
    } else {
      throw new PageLoaderException('${field.simpleName} is not settable');
    }

    if (injected) {
      if (type.simpleName == #PageLoader) {
        return new _InjectedPageLoaderFieldInfo(name);
      } else {
        throw new PageLoaderException(
            'Injected ${field.simpleName} has uninjectable type $type');
      }
    }

    if (type.simpleName == #Lazy) {
      lazy = true;
      type = type.typeArguments.isNotEmpty
          ? type.typeArguments.single
          : reflectClass(PageLoaderElement);
    }

    if (type.simpleName == #List) {
      if (!required) {
        throw new PageLoaderException(
            'List ${field.simpleName} has @optional annotation');
      }
      list = true;
      type = type.typeArguments.isNotEmpty
          ? type.typeArguments.single
          : reflectClass(PageLoaderElement);
    }

    if (type.simpleName == #dynamic) {
      type = reflectClass(PageLoaderElement);
    }

    var fieldInfo;
    if (list) {
      fieldInfo = new _ListFieldInfo(name, finder, filters, type, displayCheck);
    } else {
      fieldInfo = new _BasicFieldInfo(
          name, finder, filters, type, displayCheck, required);
    }
    if (lazy) {
      fieldInfo = new _LazyFieldInfo(fieldInfo);
    }
    return fieldInfo;
  }

  _FieldInfo._(this._fieldName);

  Future setField(InstanceMirror instance, PageLoaderElement context,
      BasePageLoader loader, bool displayCheck) async {
    try {
      instance.setField(
          _fieldName, await calculateFieldValue(context, loader, displayCheck));
    } catch (e) {
      throw new PageLoaderException(
          'Unable to load field $_fieldName caused by\n$e');
    }
  }

  Future calculateFieldValue(
      PageLoaderElement context, BasePageLoader loader, bool displayCheck);
}

class _BasicFieldInfo extends _ListFieldInfo {
  final bool _required;

  _BasicFieldInfo(Symbol fieldName, Finder finder, List<Filter> filters,
      ClassMirror instanceType, bool displayCheck, this._required)
      : super(fieldName, finder, filters, instanceType, displayCheck);

  @override
  Future calculateFieldValue(PageLoaderElement context, BasePageLoader loader,
      bool displayCheck) async {
    if (!_displayCheck) {
      displayCheck = false;
    }
    var element =
        await _getElement(context, _finder, _filters, displayCheck, _required);

    if (element != null && _instanceType.simpleName != #PageLoaderElement) {
      return loader._getInstance(_instanceType, element, displayCheck);
    }
    return element;
  }
}

class _ListFieldInfo extends _FieldInfo {
  final Finder _finder;
  final List<Filter> _filters;
  final ClassMirror _instanceType;
  final bool _displayCheck;

  _ListFieldInfo(Symbol fieldName, this._finder, this._filters,
      this._instanceType, this._displayCheck)
      : super._(fieldName);

  @override
  Future calculateFieldValue(PageLoaderElement context, BasePageLoader loader,
      bool displayCheck) async {
    if (!_displayCheck) {
      displayCheck = false;
    }

    if (_instanceType.simpleName == #PageLoaderElement) {
      return _getElements(context, _finder, _filters, displayCheck).toList();
    }
    var result = [];

    for (var el in await _getElements(context, _finder, _filters, displayCheck)
        .toList()) {
      result.add(await loader._getInstance(_instanceType, el, displayCheck));
    }

    return new UnmodifiableListView(result);
  }
}

class _LazyFieldInfo extends _FieldInfo {
  final _FieldInfo _impl;

  _LazyFieldInfo(_FieldInfo impl)
      : this._impl = impl,
        super._(impl._fieldName);

  @override
  Future calculateFieldValue(
      PageLoaderElement context, BasePageLoader loader, bool displayCheck) {
    return new Future.value(new _Lazy(
        () => _impl.calculateFieldValue(context, loader, displayCheck)));
  }
}

class _InjectedPageLoaderFieldInfo extends _FieldInfo {
  _InjectedPageLoaderFieldInfo(Symbol fieldName) : super._(fieldName);

  @override
  Future calculateFieldValue(PageLoaderElement context, BasePageLoader loader,
          bool displayCheck) =>
      new Future.value(loader);
}

Stream _getElements(PageLoaderElement context, Finder finder,
    List<Filter> filters, bool displayCheck) async* {
  var elements = finder.findElements(context);

  for (var filter in filters) {
    elements = filter.filter(elements);
  }

  if (!displayCheck) {
    yield* elements;
  } else {
    for (var el in await elements.toList()) {
      if (await el.displayed) {
        yield el;
      }
    }
  }
}

Future<PageLoaderElement> _getElement(PageLoaderElement context, Finder finder,
    List<Filter> filters, bool displayCheck, bool required) async {
  var elements =
      await _getElements(context, finder, filters, displayCheck).toList();

  if (elements.isEmpty) {
    if (!required) {
      return null;
    }
    throw new StateError('No element for finder: $finder');
  }
  return elements.single;
}
