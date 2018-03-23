define(['dart_sdk', 'packages/angular/src/core/render/api', 'packages/angular/src/di/injector/empty', 'packages/angular/src/debug/by', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/core/linker/exceptions', 'packages/angular/src/core/change_detection/constants'], function(dart_sdk, api, empty, by, view_type, app_view, exceptions, constants) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const convert = dart_sdk.convert;
  const js_util = dart_sdk.js_util;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__render__api = api.src__core__render__api;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__debug__debug_node = by.src__debug__debug_node;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__exceptions = exceptions.src__core__linker__exceptions;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const _root = Object.create(null);
  const src__debug__debug_context = Object.create(_root);
  const src__debug__debug_app_view = Object.create(_root);
  const $_get = dartx._get;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $add = dartx.add;
  const $replaceAll = dartx.replaceAll;
  const $text = dartx.text;
  const $replaceFirst = dartx.replaceFirst;
  const $append = dartx.append;
  const $isEmpty = dartx.isEmpty;
  const $split = dartx.split;
  const $createElement = dartx.createElement;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let StringAnddynamicToNull = () => (StringAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [core.String, dart.dynamic])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let ListOfNode = () => (ListOfNode = dart.constFn(core.List$(html.Node)))();
  let JSArrayOfDebugNode = () => (JSArrayOfDebugNode = dart.constFn(_interceptors.JSArray$(src__debug__debug_node.DebugNode)))();
  let ListOfStaticNodeDebugInfo = () => (ListOfStaticNodeDebugInfo = dart.constFn(core.List$(src__debug__debug_context.StaticNodeDebugInfo)))();
  let ListOfFuture = () => (ListOfFuture = dart.constFn(core.List$(async.Future)))();
  let DebugElementAndNodeAndViewContainerTovoid = () => (DebugElementAndNodeAndViewContainerTovoid = dart.constFn(dart.fnType(dart.void, [src__debug__debug_node.DebugElement, html.Node, src__core__linker__view_container.ViewContainer])))();
  let StringAnddynamicTovoid = () => (StringAnddynamicTovoid = dart.constFn(dart.fnType(dart.void, [core.String, dart.dynamic])))();
  let DebugAppViewAnddynamicAndint__Tovoid = () => (DebugAppViewAnddynamicAndint__Tovoid = dart.constFn(dart.fnType(dart.void, [src__debug__debug_app_view.DebugAppView, dart.dynamic, core.int, core.int, core.int])))();
  let AppViewAndDocumentAndString__ToElement = () => (AppViewAndDocumentAndString__ToElement = dart.constFn(dart.fnType(html.Element, [src__core__linker__app_view.AppView, html.Document, core.String, html.Element, core.int, core.int, core.int])))();
  let AppViewAndDocumentAndElement__ToDivElement = () => (AppViewAndDocumentAndElement__ToDivElement = dart.constFn(dart.fnType(html.DivElement, [src__core__linker__app_view.AppView, html.Document, html.Element, core.int, core.int, core.int])))();
  let AppViewAndDocumentAndElement__ToSpanElement = () => (AppViewAndDocumentAndElement__ToSpanElement = dart.constFn(dart.fnType(html.SpanElement, [src__core__linker__app_view.AppView, html.Document, html.Element, core.int, core.int, core.int])))();
  src__debug__debug_context.StaticNodeDebugInfo = class StaticNodeDebugInfo extends core.Object {
    get providerTokens() {
      return this[providerTokens$];
    }
    set providerTokens(value) {
      super.providerTokens = value;
    }
    get componentToken() {
      return this[componentToken$];
    }
    set componentToken(value) {
      super.componentToken = value;
    }
    get refTokens() {
      return this[refTokens$];
    }
    set refTokens(value) {
      super.refTokens = value;
    }
  };
  (src__debug__debug_context.StaticNodeDebugInfo.new = function(providerTokens, componentToken, refTokens) {
    this[providerTokens$] = providerTokens;
    this[componentToken$] = componentToken;
    this[refTokens$] = refTokens;
  }).prototype = src__debug__debug_context.StaticNodeDebugInfo.prototype;
  dart.addTypeTests(src__debug__debug_context.StaticNodeDebugInfo);
  const providerTokens$ = Symbol("StaticNodeDebugInfo.providerTokens");
  const componentToken$ = Symbol("StaticNodeDebugInfo.componentToken");
  const refTokens$ = Symbol("StaticNodeDebugInfo.refTokens");
  dart.setFieldSignature(src__debug__debug_context.StaticNodeDebugInfo, () => ({
    __proto__: dart.getFields(src__debug__debug_context.StaticNodeDebugInfo.__proto__),
    providerTokens: dart.finalFieldType(core.List),
    componentToken: dart.finalFieldType(dart.dynamic),
    refTokens: dart.finalFieldType(MapOfString$dynamic())
  }));
  const _view = Symbol('_view');
  const _nodeIndex = Symbol('_nodeIndex');
  const _tplRow = Symbol('_tplRow');
  const _tplCol = Symbol('_tplCol');
  const _staticNodeInfo = Symbol('_staticNodeInfo');
  let const$;
  const _is_DebugContext_default = Symbol('_is_DebugContext_default');
  src__debug__debug_context.DebugContext$ = dart.generic(T => {
    let DebugAppViewOfT = () => (DebugAppViewOfT = dart.constFn(src__debug__debug_app_view.DebugAppView$(T)))();
    class DebugContext extends core.Object {
      get [_staticNodeInfo]() {
        return this[_nodeIndex] != null ? this[_view].staticNodeDebugInfos[$_get](this[_nodeIndex]) : null;
      }
      get context() {
        return this[_view].ctx;
      }
      get component() {
        let staticNodeInfo = this[_staticNodeInfo];
        if ((staticNodeInfo == null ? null : staticNodeInfo.componentToken) != null) {
          return this.injector.get(staticNodeInfo.componentToken, null);
        }
        return null;
      }
      get injector() {
        return this[_view].injector(this[_nodeIndex]);
      }
      get renderNode() {
        if (this[_nodeIndex] != null && this[_view].allNodes != null) {
          return this[_view].allNodes[$_get](this[_nodeIndex]);
        }
        return this[_view].rootEl;
      }
      get providerTokens() {
        let staticNodeInfo = this[_staticNodeInfo];
        return staticNodeInfo == null ? const$ || (const$ = dart.constList([], dart.dynamic)) : staticNodeInfo.providerTokens;
      }
      get source() {
        let componentType = this[_view].componentType;
        return componentType == null ? dart.str`${this[_view]}` : dart.str`${componentType.templateUrl}:${this[_tplRow]}:${this[_tplCol]}`;
      }
      get locals() {
        let varValues = new (IdentityMapOfString$dynamic()).new();
        let debugInfos = this[_view].staticNodeDebugInfos;
        let infoCount = debugInfos[$length];
        for (let nodeIndex = 0; nodeIndex < dart.notNull(infoCount); nodeIndex++) {
          let staticNodeInfo = debugInfos[$_get](nodeIndex);
          if (staticNodeInfo == null) continue;
          let refs = staticNodeInfo.refTokens;
          refs[$forEach](dart.fn((refName, refToken) => {
            let varValue = null;
            if (refToken == null) {
              varValue = this[_view].allNodes != null ? this[_view].allNodes[$_get](nodeIndex) : null;
            } else {
              varValue = this[_view].injectorGet(refToken, nodeIndex, null);
            }
            varValues[$_set](refName, varValue);
          }, StringAnddynamicToNull()));
        }
        this[_view].locals == null ? null : this[_view].locals[$forEach](dart.fn((localName, localValue) => {
          varValues[$_set](localName, localValue);
        }, StringAnddynamicToNull()));
        return varValues;
      }
    }
    (DebugContext.new = function(view, nodeIndex, tplRow, tplCol) {
      this[_view] = view;
      this[_nodeIndex] = nodeIndex;
      this[_tplRow] = tplRow;
      this[_tplCol] = tplCol;
    }).prototype = DebugContext.prototype;
    dart.addTypeTests(DebugContext);
    DebugContext.prototype[_is_DebugContext_default] = true;
    DebugContext[dart.implements] = () => [src__core__render__api.RenderDebugInfo];
    dart.setGetterSignature(DebugContext, () => ({
      __proto__: dart.getGetters(DebugContext.__proto__),
      [_staticNodeInfo]: dart.fnType(src__debug__debug_context.StaticNodeDebugInfo, []),
      context: dart.fnType(T, []),
      component: dart.fnType(dart.dynamic, []),
      injector: dart.fnType(src__di__injector__injector.Injector, []),
      renderNode: dart.fnType(dart.dynamic, []),
      providerTokens: dart.fnType(core.List, []),
      source: dart.fnType(core.String, []),
      locals: dart.fnType(core.Map$(core.String, dart.dynamic), [])
    }));
    dart.setFieldSignature(DebugContext, () => ({
      __proto__: dart.getFields(DebugContext.__proto__),
      [_view]: dart.fieldType(DebugAppViewOfT()),
      [_nodeIndex]: dart.finalFieldType(core.int),
      [_tplRow]: dart.finalFieldType(core.int),
      [_tplCol]: dart.finalFieldType(core.int)
    }));
    return DebugContext;
  });
  src__debug__debug_context.DebugContext = src__debug__debug_context.DebugContext$();
  dart.addTypeTests(src__debug__debug_context.DebugContext, _is_DebugContext_default);
  dart.defineLazy(src__debug__debug_app_view, {
    /*src__debug__debug_app_view._templateBindingsExp*/get _templateBindingsExp() {
      return core.RegExp.new('^template bindings=(.*)$');
    },
    /*src__debug__debug_app_view._matchNewLine*/get _matchNewLine() {
      return core.RegExp.new('\\n');
    },
    /*src__debug__debug_app_view._templateCommentText*/get _templateCommentText() {
      return 'template bindings={}';
    },
    /*src__debug__debug_app_view.INSPECT_GLOBAL_NAME*/get INSPECT_GLOBAL_NAME() {
      return "ng.probe";
    },
    /*src__debug__debug_app_view._currentDebugContext*/get _currentDebugContext() {
      return null;
    },
    set _currentDebugContext(_) {}
  });
  const _resetDebug = Symbol('_resetDebug');
  const _rethrowWithContext = Symbol('_rethrowWithContext');
  let const$0;
  let const$1;
  let const$2;
  const _is_DebugAppView_default = Symbol('_is_DebugAppView_default');
  src__debug__debug_app_view.DebugAppView$ = dart.generic(T => {
    let DebugContextOfT = () => (DebugContextOfT = dart.constFn(src__debug__debug_context.DebugContext$(T)))();
    class DebugAppView extends src__core__linker__app_view.AppView$(T) {
      get staticNodeDebugInfos() {
        return this[staticNodeDebugInfos$];
      }
      set staticNodeDebugInfos(value) {
        super.staticNodeDebugInfos = value;
      }
      get allNodes() {
        return this[allNodes];
      }
      set allNodes(value) {
        this[allNodes] = value;
      }
      get deferredLoads() {
        return this[deferredLoads];
      }
      set deferredLoads(value) {
        super.deferredLoads = value;
      }
      create(context, projectableNodes) {
        T._check(context);
        this[_resetDebug]();
        try {
          return super.create(context, projectableNodes);
        } catch (e) {
          let s = dart.stackTrace(e);
          this[_rethrowWithContext](e, s);
          dart.rethrow(e);
        }
      }
      createHostView(hostInjector, projectableNodes) {
        this[_resetDebug]();
        try {
          return super.createHostView(hostInjector, projectableNodes);
        } catch (e) {
          let s = dart.stackTrace(e);
          this[_rethrowWithContext](e, s);
          dart.rethrow(e);
        }
      }
      injectorGet(token, nodeIndex, notFoundResult) {
        if (notFoundResult === void 0) notFoundResult = src__di__injector__injector.throwIfNotFound;
        this[_resetDebug]();
        try {
          return super.injectorGet(token, nodeIndex, notFoundResult);
        } catch (e) {
          let s = dart.stackTrace(e);
          this[_rethrowWithContext](e, s, {stopChangeDetection: false});
          dart.rethrow(e);
        }
      }
      init(rootNodesOrViewContainers, subscriptions, allNodesForDebug) {
        if (allNodesForDebug === void 0) allNodesForDebug = const$0 || (const$0 = dart.constList([], dart.dynamic));
        super.init(rootNodesOrViewContainers, subscriptions);
        this.allNodes = allNodesForDebug;
      }
      init0Dbg(e, allNodesForDebug) {
        if (allNodesForDebug === void 0) allNodesForDebug = const$1 || (const$1 = dart.constList([], dart.dynamic));
        this.viewData.rootNodesOrViewContainers = [e];
        this.allNodes = allNodesForDebug;
        if (this.viewData.type === src__core__linker__view_type.ViewType.COMPONENT) {
          this.dirtyParentQueriesInternal();
        }
        return;
        return;
        return;
      }
      destroy() {
        this[_resetDebug]();
        try {
          super.destroy();
          let nodeCount = this.allNodes[$length];
          for (let i = 0; i < dart.notNull(nodeCount); i++) {
            let debugNode = src__debug__debug_node.getDebugNode(this.allNodes[$_get](i));
            if (debugNode == null) continue;
            src__debug__debug_node.removeDebugNodeFromIndex(debugNode);
          }
        } catch (e) {
          let s = dart.stackTrace(e);
          this[_rethrowWithContext](e, s);
          dart.rethrow(e);
        }
      }
      detectChanges() {
        this[_resetDebug]();
        super.detectChanges();
      }
      [_resetDebug]() {
        src__debug__debug_app_view._currentDebugContext = null;
      }
      loadDeferred(loadComponentFunction, loadTemplateLibFunction, viewContainer, templateRef, initializer) {
        if (initializer === void 0) initializer = null;
        let load = super.loadDeferred(loadComponentFunction, loadTemplateLibFunction, viewContainer, templateRef, initializer);
        this.deferredLoads[$add](load);
        return load;
      }
      setBindingDebugInfo(renderElement, propertyName, propertyValue) {
        if (html.Comment.is(renderElement)) {
          let existingBindings = src__debug__debug_app_view._templateBindingsExp.firstMatch(renderElement[$text][$replaceAll](src__debug__debug_app_view._matchNewLine, ''));
          let parsedBindings = convert.JSON.decode(existingBindings._get(1));
          dart.dsetindex(parsedBindings, propertyName, propertyValue);
          let debugStr = (const$2 || (const$2 = dart.const(new convert.JsonEncoder.withIndent('  ')))).convert(parsedBindings);
          renderElement[$text] = "template bindings={}"[$replaceFirst]('{}', debugStr);
        } else {
          this.setAttr(html.Element._check(renderElement), propertyName, propertyValue);
        }
      }
      dbg(nodeIndex, rowNum, colNum) {
        return src__debug__debug_app_view._currentDebugContext = new src__debug__debug_context.DebugContext.new(this, nodeIndex, rowNum, colNum);
      }
      dbgIdx(element, nodeIndex) {
        let debugInfo = new (DebugContextOfT()).new(this, nodeIndex, 0, 0);
        if (html.Text.is(element)) return;
        let debugEl = null;
        if (html.Comment.is(element)) {
          debugEl = new src__debug__debug_node.DebugNode.new(element, src__debug__debug_node.getDebugNode(element.parentNode), debugInfo);
        } else {
          debugEl = new src__debug__debug_node.DebugElement.new(element, dart.dload(element, 'parentNode') == null ? null : src__debug__debug_node.getDebugNode(dart.dload(element, 'parentNode')), debugInfo);
          dart.dput(debugEl, 'name', html.Text.is(element) ? 'text' : dart.dsend(dart.dload(element, 'tagName'), 'toLowerCase'));
          src__debug__debug_app_view._currentDebugContext = debugInfo;
        }
        src__debug__debug_node.indexDebugNode(src__debug__debug_node.DebugNode._check(debugEl));
      }
      project(parentElement, index) {
        let debugParent = src__debug__debug_node.DebugElement._check(src__debug__debug_node.getDebugNode(parentElement));
        if (debugParent == null || !src__debug__debug_node.DebugElement.is(debugParent)) {
          super.project(parentElement, index);
          return;
        }
        let projectableNodes = this.viewData.projectableNodes;
        if (projectableNodes == null || dart.notNull(index) >= dart.notNull(projectableNodes[$length])) return;
        let projectables = core.List._check(projectableNodes[$_get](index));
        if (projectables == null) return;
        let projectableCount = projectables[$length];
        for (let i = 0; i < dart.notNull(projectableCount); i++) {
          let projectable = projectables[$_get](i);
          if (src__core__linker__view_container.ViewContainer.is(projectable)) {
            if (projectable.nestedViews == null) {
              let child = html.Node._check(projectable.nativeElement);
              parentElement[$append](child);
              debugParent.addChild(src__debug__debug_node.getDebugNode(child));
            } else {
              src__debug__debug_app_view._appendDebugNestedViewRenderNodes(debugParent, parentElement, projectable);
            }
          } else if (core.List.is(projectable)) {
            for (let n = 0, len = projectable[$length]; n < dart.notNull(len); n++) {
              let node = projectable[$_get](n);
              if (src__core__linker__view_container.ViewContainer.is(node)) {
                if (node.nestedViews == null) {
                  let child = html.Node._check(node.nativeElement);
                  parentElement[$append](child);
                  debugParent.addChild(src__debug__debug_node.getDebugNode(child));
                } else {
                  src__debug__debug_app_view._appendDebugNestedViewRenderNodes(debugParent, parentElement, node);
                }
              } else {
                parentElement[$append](html.Node._check(node));
                debugParent.addChild(src__debug__debug_node.getDebugNode(node));
              }
            }
          } else {
            let child = html.Node._check(projectable);
            parentElement[$append](child);
            debugParent.addChild(src__debug__debug_node.getDebugNode(child));
          }
        }
        src__core__linker__app_view.domRootRendererIsDirty = true;
      }
      detachViewNodes(viewRootNodes) {
        for (let node of viewRootNodes) {
          let debugNode = src__debug__debug_node.getDebugNode(node);
          if (debugNode != null && debugNode.parent != null) {
            debugNode.parent.removeChild(debugNode);
          }
        }
        super.detachViewNodes(ListOfNode()._check(viewRootNodes));
      }
      createElement(parentElement, name, debugInfo) {
        let nativeEl = super.createElement(parentElement, name, debugInfo);
        let debugEl = new src__debug__debug_node.DebugElement.new(nativeEl, src__debug__debug_node.getDebugNode(parentElement), debugInfo);
        debugEl.name = name;
        src__debug__debug_node.indexDebugNode(debugEl);
        return nativeEl;
      }
      attachViewAfter(node, viewRootNodes) {
        let debugNode = src__debug__debug_node.getDebugNode(node);
        if (debugNode != null) {
          let debugParent = debugNode == null ? null : debugNode.parent;
          if (dart.notNull(viewRootNodes[$length]) > 0 && debugParent != null) {
            let debugViewRootNodes = JSArrayOfDebugNode().of([]);
            let rootNodeCount = viewRootNodes[$length];
            for (let n = 0; n < dart.notNull(rootNodeCount); n++) {
              let debugNode = src__debug__debug_node.getDebugNode(viewRootNodes[$_get](n));
              if (debugNode == null) continue;
              debugViewRootNodes[$add](debugNode);
            }
            debugParent.insertChildrenAfter(debugNode, debugViewRootNodes);
          }
        }
        super.attachViewAfter(node, viewRootNodes);
      }
      [_rethrowWithContext](e, stack, opts) {
        let stopChangeDetection = opts && 'stopChangeDetection' in opts ? opts.stopChangeDetection : true;
        if (!src__core__linker__exceptions.ViewWrappedException.is(e)) {
          if (dart.test(stopChangeDetection) && !src__core__linker__exceptions.ExpressionChangedAfterItHasBeenCheckedException.is(e)) {
            this.cdState = src__core__change_detection__constants.ChangeDetectorState.Errored;
          }
          if (src__debug__debug_app_view._currentDebugContext != null) {
            dart.throw(new src__core__linker__exceptions.ViewWrappedException.new(e, stack, src__debug__debug_app_view._currentDebugContext));
          }
        }
      }
    }
    (DebugAppView.new = function(type, locals, parentView, parentIndex, cdMode, staticNodeDebugInfos) {
      this[allNodes] = null;
      this[deferredLoads] = JSArrayOfFuture().of([]);
      this[staticNodeDebugInfos$] = staticNodeDebugInfos;
      DebugAppView.__proto__.new.call(this, type, locals, parentView, parentIndex, cdMode);
      this.viewData.updateSkipChangeDetectionFlag();
      if (!dart.test(src__debug__debug_app_view.DebugAppView._ngProbeInitialized)) {
        src__debug__debug_app_view.DebugAppView._ngProbeInitialized = true;
        src__debug__debug_app_view._setGlobalVar("ng.probe", src__debug__debug_node.inspectNativeElement);
      }
    }).prototype = DebugAppView.prototype;
    dart.addTypeTests(DebugAppView);
    DebugAppView.prototype[_is_DebugAppView_default] = true;
    const staticNodeDebugInfos$ = Symbol("DebugAppView.staticNodeDebugInfos");
    const allNodes = Symbol("DebugAppView.allNodes");
    const deferredLoads = Symbol("DebugAppView.deferredLoads");
    dart.setMethodSignature(DebugAppView, () => ({
      __proto__: dart.getMethods(DebugAppView.__proto__),
      create: dart.fnType(src__core__linker__component_factory.ComponentRef$(T), [core.Object, core.List]),
      init: dart.fnType(dart.void, [core.List, core.List], [core.List]),
      init0Dbg: dart.fnType(dart.void, [dart.dynamic], [core.List]),
      [_resetDebug]: dart.fnType(dart.void, []),
      setBindingDebugInfo: dart.fnType(dart.void, [dart.dynamic, core.String, core.String]),
      dbg: dart.fnType(src__debug__debug_context.DebugContext, [core.int, core.int, core.int]),
      dbgIdx: dart.fnType(dart.void, [dart.dynamic, core.int]),
      detachViewNodes: dart.fnType(dart.void, [core.List]),
      [_rethrowWithContext]: dart.fnType(dart.void, [dart.dynamic, dart.dynamic], {stopChangeDetection: core.bool})
    }));
    dart.setFieldSignature(DebugAppView, () => ({
      __proto__: dart.getFields(DebugAppView.__proto__),
      staticNodeDebugInfos: dart.finalFieldType(ListOfStaticNodeDebugInfo()),
      allNodes: dart.fieldType(core.List),
      deferredLoads: dart.finalFieldType(ListOfFuture())
    }));
    return DebugAppView;
  });
  src__debug__debug_app_view.DebugAppView = src__debug__debug_app_view.DebugAppView$();
  dart.defineLazy(src__debug__debug_app_view.DebugAppView, {
    /*src__debug__debug_app_view.DebugAppView._ngProbeInitialized*/get _ngProbeInitialized() {
      return false;
    },
    set _ngProbeInitialized(_) {}
  });
  dart.addTypeTests(src__debug__debug_app_view.DebugAppView, _is_DebugAppView_default);
  src__debug__debug_app_view._appendDebugNestedViewRenderNodes = function(debugParent, targetElement, appElement) {
    targetElement[$append](html.Node.as(appElement.nativeElement));
    let nestedViews = appElement.nestedViews;
    if (nestedViews == null || dart.test(nestedViews[$isEmpty])) return;
    let nestedViewCount = nestedViews[$length];
    for (let viewIndex = 0; viewIndex < dart.notNull(nestedViewCount); viewIndex++) {
      let projectables = nestedViews[$_get](viewIndex).viewData.rootNodesOrViewContainers;
      let projectableCount = projectables[$length];
      for (let i = 0; i < dart.notNull(projectableCount); i++) {
        let projectable = projectables[$_get](i);
        if (src__core__linker__view_container.ViewContainer.is(projectable)) {
          src__debug__debug_app_view._appendDebugNestedViewRenderNodes(debugParent, targetElement, projectable);
        } else {
          let child = html.Node._check(projectable);
          targetElement[$append](child);
          debugParent.addChild(src__debug__debug_node.getDebugNode(child));
        }
      }
    }
  };
  dart.fn(src__debug__debug_app_view._appendDebugNestedViewRenderNodes, DebugElementAndNodeAndViewContainerTovoid());
  src__debug__debug_app_view._setGlobalVar = function(path, value) {
    let parts = path[$split]('.');
    let obj = html.window;
    for (let i = 0; i < dart.notNull(parts[$length]) - 1; i++) {
      let name = parts[$_get](i);
      if (!dart.dtest(js_util.callMethod(obj, 'hasOwnProperty', [name]))) {
        js_util.setProperty(obj, name, js_util.newObject());
      }
      obj = js_util.getProperty(obj, name);
    }
    js_util.setProperty(obj, parts[$_get](dart.notNull(parts[$length]) - 1), core.Function.is(value) ? js.allowInterop(core.Function, value) : value);
  };
  dart.fn(src__debug__debug_app_view._setGlobalVar, StringAnddynamicTovoid());
  src__debug__debug_app_view.dbgElm = function(view, element, nodeIndex, rowNum, colNum) {
    let debugInfo = new src__debug__debug_context.DebugContext.new(view, nodeIndex, rowNum, colNum);
    if (html.Text.is(element)) return;
    let debugEl = null;
    if (html.Comment.is(element)) {
      debugEl = new src__debug__debug_node.DebugNode.new(element, src__debug__debug_node.getDebugNode(element.parentNode), debugInfo);
    } else {
      debugEl = new src__debug__debug_node.DebugElement.new(element, dart.dload(element, 'parentNode') == null ? null : src__debug__debug_node.getDebugNode(dart.dload(element, 'parentNode')), debugInfo);
      dart.dput(debugEl, 'name', html.Text.is(element) ? 'text' : dart.dsend(dart.dload(element, 'tagName'), 'toLowerCase'));
      src__debug__debug_app_view._currentDebugContext = debugInfo;
    }
    src__debug__debug_node.indexDebugNode(src__debug__debug_node.DebugNode._check(debugEl));
  };
  dart.fn(src__debug__debug_app_view.dbgElm, DebugAppViewAnddynamicAndint__Tovoid());
  src__debug__debug_app_view.createAndAppendDbg = function(view, doc, tagName, parent, nodeIndex, line, column) {
    let elm = doc[$createElement](tagName);
    parent[$append](elm);
    src__debug__debug_app_view.dbgElm(src__debug__debug_app_view.DebugAppView._check(view), elm, nodeIndex, line, column);
    return elm;
    return null;
    return null;
    return null;
  };
  dart.fn(src__debug__debug_app_view.createAndAppendDbg, AppViewAndDocumentAndString__ToElement());
  src__debug__debug_app_view.createDivAndAppendDbg = function(view, doc, parent, nodeIndex, line, column) {
    let elm = doc[$createElement]('div');
    parent[$append](elm);
    src__debug__debug_app_view.dbgElm(src__debug__debug_app_view.DebugAppView._check(view), elm, nodeIndex, line, column);
    return html.DivElement._check(elm);
    return null;
    return null;
    return null;
  };
  dart.fn(src__debug__debug_app_view.createDivAndAppendDbg, AppViewAndDocumentAndElement__ToDivElement());
  src__debug__debug_app_view.createSpanAndAppendDbg = function(view, doc, parent, nodeIndex, line, column) {
    let elm = doc[$createElement]('span');
    parent[$append](elm);
    src__debug__debug_app_view.dbgElm(src__debug__debug_app_view.DebugAppView._check(view), elm, nodeIndex, line, column);
    return html.SpanElement._check(elm);
    return null;
    return null;
    return null;
  };
  dart.fn(src__debug__debug_app_view.createSpanAndAppendDbg, AppViewAndDocumentAndElement__ToSpanElement());
  dart.trackLibraries("packages/angular/src/debug/debug_app_view.ddc", {
    "package:angular/src/debug/debug_context.dart": src__debug__debug_context,
    "package:angular/src/debug/debug_app_view.dart": src__debug__debug_app_view
  }, '{"version":3,"sourceRoot":"","sources":["debug_context.dart","debug_app_view.dart"],"names":[],"mappings":"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","file":"debug_app_view.ddc.js"}');
  // Exports:
  return {
    src__debug__debug_context: src__debug__debug_context,
    src__debug__debug_app_view: src__debug__debug_app_view
  };
});

//# sourceMappingURL=debug_app_view.ddc.js.map
