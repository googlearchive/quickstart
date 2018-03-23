define(['dart_sdk', 'packages/async/src/result/capture_sink', 'packages/collection/src/queue_list', 'packages/async/src/subscription_stream', 'packages/async/src/stream_splitter', 'packages/async/src/stream_completer', 'packages/async/src/async_memoizer'], function(dart_sdk, capture_sink, queue_list, subscription_stream, stream_splitter, stream_completer, async_memoizer) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__result__result = capture_sink.src__result__result;
  const src__queue_list = queue_list.src__queue_list;
  const src__subscription_stream = subscription_stream.src__subscription_stream;
  const src__stream_splitter = stream_splitter.src__stream_splitter;
  const src__stream_completer = stream_completer.src__stream_completer;
  const src__async_memoizer = async_memoizer.src__async_memoizer;
  const _root = Object.create(null);
  const src__stream_queue = Object.create(_root);
  const src__async_cache = Object.create(_root);
  const src__cancelable_operation = Object.create(_root);
  const src__byte_collector = Object.create(_root);
  const async$ = Object.create(_root);
  const $length = dartx.length;
  const $add = dartx.add;
  const $setRange = dartx.setRange;
  let QueueOf_EventRequest = () => (QueueOf_EventRequest = dart.constFn(collection.Queue$(src__stream_queue._EventRequest)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let VoidToNull$ = () => (VoidToNull$ = dart.constFn(dart.fnType(core.Null, [])))();
  let _HashSetOfStreamQueue = () => (_HashSetOfStreamQueue = dart.constFn(collection._HashSet$(src__stream_queue.StreamQueue)))();
  let SetOfStreamQueue = () => (SetOfStreamQueue = dart.constFn(core.Set$(src__stream_queue.StreamQueue)))();
  let CompleterOfint = () => (CompleterOfint = dart.constFn(async.Completer$(core.int)))();
  let CompleterOfbool = () => (CompleterOfbool = dart.constFn(async.Completer$(core.bool)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let dynamicToNull$ = () => (dynamicToNull$ = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicToNull$0 = () => (dynamicToNull$0 = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamicAnddynamicToNull$ = () => (dynamicAnddynamicToNull$ = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let VoidToFutureOr = () => (VoidToFutureOr = dart.constFn(dart.fnType(async.FutureOr, [])))();
  let VoidToFutureOr$ = () => (VoidToFutureOr$ = dart.constFn(dart.fnType(async.FutureOr, [])))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamSubscriptionOfListOfint = () => (StreamSubscriptionOfListOfint = dart.constFn(async.StreamSubscription$(ListOfint())))();
  let StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List = () => (StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [StreamSubscriptionOfListOfint(), FutureOfUint8List()])))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  let StreamOfListOfintToFutureOfUint8List = () => (StreamOfListOfintToFutureOfUint8List = dart.constFn(dart.fnType(FutureOfUint8List(), [StreamOfListOfint()])))();
  let CancelableOperationOfUint8List = () => (CancelableOperationOfUint8List = dart.constFn(src__cancelable_operation.CancelableOperation$(typed_data.Uint8List)))();
  let StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List = () => (StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List = dart.constFn(dart.fnType(CancelableOperationOfUint8List(), [StreamSubscriptionOfListOfint(), FutureOfUint8List()])))();
  let StreamOfListOfintToCancelableOperationOfUint8List = () => (StreamOfListOfintToCancelableOperationOfUint8List = dart.constFn(dart.fnType(CancelableOperationOfUint8List(), [StreamOfListOfint()])))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let CompleterOfUint8List = () => (CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))();
  let ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  let VoidToNull$0 = () => (VoidToNull$0 = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamOfListOfintAndFnToT = () => (StreamOfListOfintAndFnToT = dart.constFn(dart.gFnType(T => [T, [StreamOfListOfint(), dart.fnType(T, [StreamSubscriptionOfListOfint(), FutureOfUint8List()])]])))();
  let ListOfListOfint = () => (ListOfListOfint = dart.constFn(core.List$(ListOfint())))();
  let intAndListOfListOfintToUint8List = () => (intAndListOfListOfintToUint8List = dart.constFn(dart.fnType(typed_data.Uint8List, [core.int, ListOfListOfint()])))();
  const _isDone = Symbol('_isDone');
  const _isClosed = Symbol('_isClosed');
  const _eventsReceived = Symbol('_eventsReceived');
  const _eventQueue = Symbol('_eventQueue');
  const _requestQueue = Symbol('_requestQueue');
  const _addRequest = Symbol('_addRequest');
  const _failClosed = Symbol('_failClosed');
  const _cancel = Symbol('_cancel');
  const _pause = Symbol('_pause');
  const _updateRequests = Symbol('_updateRequests');
  const _addResult = Symbol('_addResult');
  const _close = Symbol('_close');
  const _ensureListening = Symbol('_ensureListening');
  const _is_StreamQueue_default = Symbol('_is_StreamQueue_default');
  src__stream_queue.StreamQueue$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _StreamQueueOfT = () => (_StreamQueueOfT = dart.constFn(src__stream_queue._StreamQueue$(T)))();
    let _HasNextRequestOfT = () => (_HasNextRequestOfT = dart.constFn(src__stream_queue._HasNextRequest$(T)))();
    let _LookAheadRequestOfT = () => (_LookAheadRequestOfT = dart.constFn(src__stream_queue._LookAheadRequest$(T)))();
    let _NextRequestOfT = () => (_NextRequestOfT = dart.constFn(src__stream_queue._NextRequest$(T)))();
    let _PeekRequestOfT = () => (_PeekRequestOfT = dart.constFn(src__stream_queue._PeekRequest$(T)))();
    let _RestRequestOfT = () => (_RestRequestOfT = dart.constFn(src__stream_queue._RestRequest$(T)))();
    let _SkipRequestOfT = () => (_SkipRequestOfT = dart.constFn(src__stream_queue._SkipRequest$(T)))();
    let _TakeRequestOfT = () => (_TakeRequestOfT = dart.constFn(src__stream_queue._TakeRequest$(T)))();
    let _TransactionRequestOfT = () => (_TransactionRequestOfT = dart.constFn(src__stream_queue._TransactionRequest$(T)))();
    let _CancelRequestOfT = () => (_CancelRequestOfT = dart.constFn(src__stream_queue._CancelRequest$(T)))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    let StreamQueueOfT = () => (StreamQueueOfT = dart.constFn(src__stream_queue.StreamQueue$(T)))();
    let StreamQueueOfTToFutureOfbool = () => (StreamQueueOfTToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [StreamQueueOfT()])))();
    class StreamQueue extends core.Object {
      get eventsDispatched() {
        return dart.notNull(this[_eventsReceived]) - dart.notNull(this[_eventQueue].length);
      }
      static new(source) {
        return new (_StreamQueueOfT()).new(source);
      }
      get hasNext() {
        if (!dart.test(this[_isClosed])) {
          let hasNextRequest = new (_HasNextRequestOfT()).new();
          this[_addRequest](hasNextRequest);
          return hasNextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      lookAhead(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed])) {
          let request = new (_LookAheadRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      get next() {
        if (!dart.test(this[_isClosed])) {
          let nextRequest = new (_NextRequestOfT()).new();
          this[_addRequest](nextRequest);
          return nextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      get peek() {
        if (!dart.test(this[_isClosed])) {
          let nextRequest = new (_PeekRequestOfT()).new();
          this[_addRequest](nextRequest);
          return nextRequest.future;
        }
        dart.throw(this[_failClosed]());
      }
      get rest() {
        if (dart.test(this[_isClosed])) {
          dart.throw(this[_failClosed]());
        }
        let request = new (_RestRequestOfT()).new(this);
        this[_isClosed] = true;
        this[_addRequest](request);
        return request.stream;
      }
      skip(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed])) {
          let request = new (_SkipRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      take(count) {
        if (dart.notNull(count) < 0) dart.throw(new core.RangeError.range(count, 0, null, "count"));
        if (!dart.test(this[_isClosed])) {
          let request = new (_TakeRequestOfT()).new(count);
          this[_addRequest](request);
          return request.future;
        }
        dart.throw(this[_failClosed]());
      }
      startTransaction() {
        if (dart.test(this[_isClosed])) dart.throw(this[_failClosed]());
        let request = new (_TransactionRequestOfT()).new(this);
        this[_addRequest](request);
        return request.transaction;
      }
      withTransaction(callback) {
        let transaction = this.startTransaction();
        let queue = transaction.newQueue();
        return callback(queue).then(core.bool, dart.fn(result => {
          if (dart.test(result)) {
            transaction.commit(queue);
          } else {
            transaction.reject();
          }
          return result;
        }, boolTobool()), {onError: dart.fn(error => {
            transaction.commit(queue);
            dart.throw(error);
          }, dynamicToNull())});
      }
      cancelable(S, callback) {
        let transaction = this.startTransaction();
        let completer = new (src__cancelable_operation.CancelableCompleter$(S)).new({onCancel: dart.fn(() => {
            transaction.reject();
          }, VoidToNull())});
        let queue = transaction.newQueue();
        completer.complete(callback(queue).whenComplete(dart.fn(() => {
          if (!dart.test(completer.isCanceled)) transaction.commit(queue);
        }, VoidToNull())));
        return completer.operation;
      }
      cancel(opts) {
        let immediate = opts && 'immediate' in opts ? opts.immediate : false;
        if (dart.test(this[_isClosed])) dart.throw(this[_failClosed]());
        this[_isClosed] = true;
        if (!dart.test(immediate)) {
          let request = new (_CancelRequestOfT()).new(this);
          this[_addRequest](request);
          return request.future;
        }
        if (dart.test(this[_isDone]) && dart.test(this[_eventQueue].isEmpty)) return async.Future.value();
        return this[_cancel]();
      }
      [_updateRequests]() {
        while (dart.test(this[_requestQueue].isNotEmpty)) {
          if (dart.test(this[_requestQueue].first.update(this[_eventQueue], this[_isDone]))) {
            this[_requestQueue].removeFirst();
          } else {
            return;
          }
        }
        if (!dart.test(this[_isDone])) {
          this[_pause]();
        }
      }
      [_addResult](result) {
        ResultOfT()._check(result);
        this[_eventsReceived] = dart.notNull(this[_eventsReceived]) + 1;
        this[_eventQueue].add(result);
        this[_updateRequests]();
      }
      [_close]() {
        this[_isDone] = true;
        this[_updateRequests]();
      }
      [_failClosed]() {
        return new core.StateError.new("Already cancelled");
      }
      [_addRequest](request) {
        _EventRequestOfT()._check(request);
        if (dart.test(this[_requestQueue].isEmpty)) {
          if (dart.test(request.update(this[_eventQueue], this[_isDone]))) return;
          this[_ensureListening]();
        }
        this[_requestQueue].add(request);
      }
    }
    (StreamQueue.__ = function() {
      this[_isDone] = false;
      this[_isClosed] = false;
      this[_eventsReceived] = 0;
      this[_eventQueue] = new (QueueListOfResultOfT()).new();
      this[_requestQueue] = QueueOf_EventRequest().new();
    }).prototype = StreamQueue.prototype;
    dart.addTypeTests(StreamQueue);
    StreamQueue.prototype[_is_StreamQueue_default] = true;
    dart.setMethodSignature(StreamQueue, () => ({
      __proto__: dart.getMethods(StreamQueue.__proto__),
      lookAhead: dart.fnType(async.Future$(core.List$(T)), [core.int]),
      skip: dart.fnType(async.Future$(core.int), [core.int]),
      take: dart.fnType(async.Future$(core.List$(T)), [core.int]),
      startTransaction: dart.fnType(src__stream_queue.StreamQueueTransaction$(T), []),
      withTransaction: dart.fnType(async.Future$(core.bool), [StreamQueueOfTToFutureOfbool()]),
      cancelable: dart.gFnType(S => [src__cancelable_operation.CancelableOperation$(S), [dart.fnType(async.Future$(S), [StreamQueueOfT()])]]),
      cancel: dart.fnType(async.Future, [], {immediate: core.bool}),
      [_updateRequests]: dart.fnType(dart.void, []),
      [_addResult]: dart.fnType(dart.void, [core.Object]),
      [_close]: dart.fnType(dart.void, []),
      [_failClosed]: dart.fnType(core.Error, []),
      [_addRequest]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(StreamQueue, () => ({
      __proto__: dart.getGetters(StreamQueue.__proto__),
      eventsDispatched: dart.fnType(core.int, []),
      hasNext: dart.fnType(async.Future$(core.bool), []),
      next: dart.fnType(async.Future$(T), []),
      peek: dart.fnType(async.Future$(T), []),
      rest: dart.fnType(async.Stream$(T), [])
    }));
    dart.setFieldSignature(StreamQueue, () => ({
      __proto__: dart.getFields(StreamQueue.__proto__),
      [_isDone]: dart.fieldType(core.bool),
      [_isClosed]: dart.fieldType(core.bool),
      [_eventsReceived]: dart.fieldType(core.int),
      [_eventQueue]: dart.finalFieldType(QueueListOfResultOfT()),
      [_requestQueue]: dart.finalFieldType(QueueOf_EventRequest())
    }));
    return StreamQueue;
  });
  src__stream_queue.StreamQueue = src__stream_queue.StreamQueue$();
  dart.addTypeTests(src__stream_queue.StreamQueue, _is_StreamQueue_default);
  const _sourceStream = Symbol('_sourceStream');
  const _subscription = Symbol('_subscription');
  const _extractStream = Symbol('_extractStream');
  const _is__StreamQueue_default = Symbol('_is__StreamQueue_default');
  src__stream_queue._StreamQueue$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let SubscriptionStreamOfT = () => (SubscriptionStreamOfT = dart.constFn(src__subscription_stream.SubscriptionStream$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class _StreamQueue extends src__stream_queue.StreamQueue$(T) {
      [_cancel]() {
        if (dart.test(this[_isDone])) return null;
        if (this[_subscription] == null) this[_subscription] = this[_sourceStream].listen(null);
        let future = this[_subscription].cancel();
        this[_close]();
        return future;
      }
      [_ensureListening]() {
        if (dart.test(this[_isDone])) return;
        if (this[_subscription] == null) {
          this[_subscription] = this[_sourceStream].listen(dart.fn(data => {
            this[_addResult](ResultOfT().value(data));
          }, TToNull()), {onError: dart.fn((error, stackTrace) => {
              this[_addResult](ResultOfT().error(error, stackTrace));
            }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
              this[_subscription] = null;
              this[_close]();
            }, VoidToNull$())});
        } else {
          this[_subscription].resume();
        }
      }
      [_pause]() {
        this[_subscription].pause();
      }
      [_extractStream]() {
        if (!dart.test(this[_isClosed])) dart.assertFailed();
        if (dart.test(this[_isDone])) {
          return StreamOfT().empty();
        }
        this[_isDone] = true;
        if (this[_subscription] == null) {
          return this[_sourceStream];
        }
        let subscription = this[_subscription];
        this[_subscription] = null;
        let wasPaused = subscription.isPaused;
        let result = new (SubscriptionStreamOfT()).new(subscription);
        if (dart.test(wasPaused)) subscription.resume();
        return result;
      }
    }
    (_StreamQueue.new = function(sourceStream) {
      this[_subscription] = null;
      this[_sourceStream] = sourceStream;
      _StreamQueue.__proto__.__.call(this);
    }).prototype = _StreamQueue.prototype;
    dart.addTypeTests(_StreamQueue);
    _StreamQueue.prototype[_is__StreamQueue_default] = true;
    dart.setMethodSignature(_StreamQueue, () => ({
      __proto__: dart.getMethods(_StreamQueue.__proto__),
      [_cancel]: dart.fnType(async.Future, []),
      [_ensureListening]: dart.fnType(dart.void, []),
      [_pause]: dart.fnType(dart.void, []),
      [_extractStream]: dart.fnType(async.Stream$(T), [])
    }));
    dart.setFieldSignature(_StreamQueue, () => ({
      __proto__: dart.getFields(_StreamQueue.__proto__),
      [_sourceStream]: dart.finalFieldType(StreamOfT()),
      [_subscription]: dart.fieldType(StreamSubscriptionOfT())
    }));
    return _StreamQueue;
  });
  src__stream_queue._StreamQueue = src__stream_queue._StreamQueue$();
  dart.addTypeTests(src__stream_queue._StreamQueue, _is__StreamQueue_default);
  const _parent = Symbol('_parent');
  const _splitter = Symbol('_splitter');
  const _queues = Symbol('_queues');
  const _committed = Symbol('_committed');
  const _rejected = Symbol('_rejected');
  const _assertActive = Symbol('_assertActive');
  const _done = Symbol('_done');
  const _is_StreamQueueTransaction_default = Symbol('_is_StreamQueueTransaction_default');
  src__stream_queue.StreamQueueTransaction$ = dart.generic(T => {
    let StreamSplitterOfT = () => (StreamSplitterOfT = dart.constFn(src__stream_splitter.StreamSplitter$(T)))();
    let StreamQueueOfT = () => (StreamQueueOfT = dart.constFn(src__stream_queue.StreamQueue$(T)))();
    class StreamQueueTransaction extends core.Object {
      newQueue() {
        let queue = StreamQueueOfT().new(this[_splitter].split());
        this[_queues].add(queue);
        return queue;
      }
      commit(queue) {
        StreamQueueOfT()._check(queue);
        this[_assertActive]();
        if (!dart.test(this[_queues].contains(queue))) {
          dart.throw(new core.ArgumentError.new("Queue doesn't belong to this transaction."));
        } else if (dart.test(queue[_requestQueue].isNotEmpty)) {
          dart.throw(new core.StateError.new("A queue with pending requests can't be committed."));
        }
        this[_committed] = true;
        for (let j = 0; j < dart.notNull(queue.eventsDispatched); j++) {
          this[_parent][_eventQueue].removeFirst();
        }
        this[_done]();
      }
      reject() {
        this[_assertActive]();
        this[_rejected] = true;
        this[_done]();
      }
      [_done]() {
        this[_splitter].close();
        for (let queue of this[_queues]) {
          queue[_cancel]();
        }
        let currentRequest = this[_parent][_requestQueue].first;
        if (src__stream_queue._TransactionRequest.is(currentRequest) && dart.equals(currentRequest.transaction, this)) {
          this[_parent][_requestQueue].removeFirst();
          this[_parent][_updateRequests]();
        }
      }
      [_assertActive]() {
        if (dart.test(this[_committed])) {
          dart.throw(new core.StateError.new("This transaction has already been accepted."));
        } else if (dart.test(this[_rejected])) {
          dart.throw(new core.StateError.new("This transaction has already been rejected."));
        }
      }
    }
    (StreamQueueTransaction.__ = function(parent, source) {
      this[_queues] = new (_HashSetOfStreamQueue()).new();
      this[_committed] = false;
      this[_rejected] = false;
      this[_parent] = parent;
      this[_splitter] = new (StreamSplitterOfT()).new(source);
    }).prototype = StreamQueueTransaction.prototype;
    dart.addTypeTests(StreamQueueTransaction);
    StreamQueueTransaction.prototype[_is_StreamQueueTransaction_default] = true;
    dart.setMethodSignature(StreamQueueTransaction, () => ({
      __proto__: dart.getMethods(StreamQueueTransaction.__proto__),
      newQueue: dart.fnType(src__stream_queue.StreamQueue$(T), []),
      commit: dart.fnType(dart.void, [core.Object]),
      reject: dart.fnType(dart.void, []),
      [_done]: dart.fnType(dart.void, []),
      [_assertActive]: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(StreamQueueTransaction, () => ({
      __proto__: dart.getFields(StreamQueueTransaction.__proto__),
      [_parent]: dart.finalFieldType(StreamQueueOfT()),
      [_splitter]: dart.finalFieldType(StreamSplitterOfT()),
      [_queues]: dart.finalFieldType(SetOfStreamQueue()),
      [_committed]: dart.fieldType(core.bool),
      [_rejected]: dart.fieldType(core.bool)
    }));
    return StreamQueueTransaction;
  });
  src__stream_queue.StreamQueueTransaction = src__stream_queue.StreamQueueTransaction$();
  dart.addTypeTests(src__stream_queue.StreamQueueTransaction, _is_StreamQueueTransaction_default);
  const _is__EventRequest_default = Symbol('_is__EventRequest_default');
  src__stream_queue._EventRequest$ = dart.generic(T => {
    class _EventRequest extends core.Object {}
    (_EventRequest.new = function() {
    }).prototype = _EventRequest.prototype;
    dart.addTypeTests(_EventRequest);
    _EventRequest.prototype[_is__EventRequest_default] = true;
    return _EventRequest;
  });
  src__stream_queue._EventRequest = src__stream_queue._EventRequest$();
  dart.addTypeTests(src__stream_queue._EventRequest, _is__EventRequest_default);
  const _completer = Symbol('_completer');
  const _is__NextRequest_default = Symbol('_is__NextRequest_default');
  src__stream_queue._NextRequest$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _NextRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events.isNotEmpty)) {
          events.removeFirst().complete(this[_completer]);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer].completeError(new core.StateError.new("No elements"), core.StackTrace.current);
          return true;
        }
        return false;
      }
    }
    (_NextRequest.new = function() {
      this[_completer] = CompleterOfT().new();
    }).prototype = _NextRequest.prototype;
    dart.addTypeTests(_NextRequest);
    _NextRequest.prototype[_is__NextRequest_default] = true;
    _NextRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_NextRequest, () => ({
      __proto__: dart.getMethods(_NextRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_NextRequest, () => ({
      __proto__: dart.getGetters(_NextRequest.__proto__),
      future: dart.fnType(async.Future$(T), [])
    }));
    dart.setFieldSignature(_NextRequest, () => ({
      __proto__: dart.getFields(_NextRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfT())
    }));
    return _NextRequest;
  });
  src__stream_queue._NextRequest = src__stream_queue._NextRequest$();
  dart.addTypeTests(src__stream_queue._NextRequest, _is__NextRequest_default);
  const _is__PeekRequest_default = Symbol('_is__PeekRequest_default');
  src__stream_queue._PeekRequest$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _PeekRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events.isNotEmpty)) {
          events.first.complete(this[_completer]);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer].completeError(new core.StateError.new("No elements"), core.StackTrace.current);
          return true;
        }
        return false;
      }
    }
    (_PeekRequest.new = function() {
      this[_completer] = CompleterOfT().new();
    }).prototype = _PeekRequest.prototype;
    dart.addTypeTests(_PeekRequest);
    _PeekRequest.prototype[_is__PeekRequest_default] = true;
    _PeekRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_PeekRequest, () => ({
      __proto__: dart.getMethods(_PeekRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_PeekRequest, () => ({
      __proto__: dart.getGetters(_PeekRequest.__proto__),
      future: dart.fnType(async.Future$(T), [])
    }));
    dart.setFieldSignature(_PeekRequest, () => ({
      __proto__: dart.getFields(_PeekRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfT())
    }));
    return _PeekRequest;
  });
  src__stream_queue._PeekRequest = src__stream_queue._PeekRequest$();
  dart.addTypeTests(src__stream_queue._PeekRequest, _is__PeekRequest_default);
  const _eventsToSkip = Symbol('_eventsToSkip');
  const _is__SkipRequest_default = Symbol('_is__SkipRequest_default');
  src__stream_queue._SkipRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _SkipRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_eventsToSkip]) > 0) {
          if (dart.test(events.isEmpty)) {
            if (dart.test(isDone)) break;
            return false;
          }
          this[_eventsToSkip] = dart.notNull(this[_eventsToSkip]) - 1;
          let event = events.removeFirst();
          if (dart.test(event.isError)) {
            this[_completer].completeError(event.asError.error, event.asError.stackTrace);
            return true;
          }
        }
        this[_completer].complete(this[_eventsToSkip]);
        return true;
      }
    }
    (_SkipRequest.new = function(eventsToSkip) {
      this[_completer] = CompleterOfint().new();
      this[_eventsToSkip] = eventsToSkip;
    }).prototype = _SkipRequest.prototype;
    dart.addTypeTests(_SkipRequest);
    _SkipRequest.prototype[_is__SkipRequest_default] = true;
    _SkipRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_SkipRequest, () => ({
      __proto__: dart.getMethods(_SkipRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_SkipRequest, () => ({
      __proto__: dart.getGetters(_SkipRequest.__proto__),
      future: dart.fnType(async.Future$(core.int), [])
    }));
    dart.setFieldSignature(_SkipRequest, () => ({
      __proto__: dart.getFields(_SkipRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfint()),
      [_eventsToSkip]: dart.fieldType(core.int)
    }));
    return _SkipRequest;
  });
  src__stream_queue._SkipRequest = src__stream_queue._SkipRequest$();
  dart.addTypeTests(src__stream_queue._SkipRequest, _is__SkipRequest_default);
  const _eventsToTake = Symbol('_eventsToTake');
  const _list = Symbol('_list');
  const _is__ListRequest_default = Symbol('_is__ListRequest_default');
  src__stream_queue._ListRequest$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let CompleterOfListOfT = () => (CompleterOfListOfT = dart.constFn(async.Completer$(ListOfT())))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _ListRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
    }
    (_ListRequest.new = function(eventsToTake) {
      this[_completer] = CompleterOfListOfT().new();
      this[_list] = JSArrayOfT().of([]);
      this[_eventsToTake] = eventsToTake;
    }).prototype = _ListRequest.prototype;
    dart.addTypeTests(_ListRequest);
    _ListRequest.prototype[_is__ListRequest_default] = true;
    _ListRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setGetterSignature(_ListRequest, () => ({
      __proto__: dart.getGetters(_ListRequest.__proto__),
      future: dart.fnType(async.Future$(core.List$(T)), [])
    }));
    dart.setFieldSignature(_ListRequest, () => ({
      __proto__: dart.getFields(_ListRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfListOfT()),
      [_list]: dart.finalFieldType(ListOfT()),
      [_eventsToTake]: dart.finalFieldType(core.int)
    }));
    return _ListRequest;
  });
  src__stream_queue._ListRequest = src__stream_queue._ListRequest$();
  dart.addTypeTests(src__stream_queue._ListRequest, _is__ListRequest_default);
  const _is__TakeRequest_default = Symbol('_is__TakeRequest_default');
  src__stream_queue._TakeRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _TakeRequest extends src__stream_queue._ListRequest$(T) {
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_list][$length]) < dart.notNull(this[_eventsToTake])) {
          if (dart.test(events.isEmpty)) {
            if (dart.test(isDone)) break;
            return false;
          }
          let event = events.removeFirst();
          if (dart.test(event.isError)) {
            event.asError.complete(this[_completer]);
            return true;
          }
          this[_list][$add](event.asValue.value);
        }
        this[_completer].complete(this[_list]);
        return true;
      }
    }
    (_TakeRequest.new = function(eventsToTake) {
      _TakeRequest.__proto__.new.call(this, eventsToTake);
    }).prototype = _TakeRequest.prototype;
    dart.addTypeTests(_TakeRequest);
    _TakeRequest.prototype[_is__TakeRequest_default] = true;
    dart.setMethodSignature(_TakeRequest, () => ({
      __proto__: dart.getMethods(_TakeRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    return _TakeRequest;
  });
  src__stream_queue._TakeRequest = src__stream_queue._TakeRequest$();
  dart.addTypeTests(src__stream_queue._TakeRequest, _is__TakeRequest_default);
  const _is__LookAheadRequest_default = Symbol('_is__LookAheadRequest_default');
  src__stream_queue._LookAheadRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    class _LookAheadRequest extends src__stream_queue._ListRequest$(T) {
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_list][$length]) < dart.notNull(this[_eventsToTake])) {
          if (events.length == this[_list][$length]) {
            if (dart.test(isDone)) break;
            return false;
          }
          let event = events.elementAt(this[_list][$length]);
          if (dart.test(event.isError)) {
            event.asError.complete(this[_completer]);
            return true;
          }
          this[_list][$add](event.asValue.value);
        }
        this[_completer].complete(this[_list]);
        return true;
      }
    }
    (_LookAheadRequest.new = function(eventsToTake) {
      _LookAheadRequest.__proto__.new.call(this, eventsToTake);
    }).prototype = _LookAheadRequest.prototype;
    dart.addTypeTests(_LookAheadRequest);
    _LookAheadRequest.prototype[_is__LookAheadRequest_default] = true;
    dart.setMethodSignature(_LookAheadRequest, () => ({
      __proto__: dart.getMethods(_LookAheadRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    return _LookAheadRequest;
  });
  src__stream_queue._LookAheadRequest = src__stream_queue._LookAheadRequest$();
  dart.addTypeTests(src__stream_queue._LookAheadRequest, _is__LookAheadRequest_default);
  const _streamQueue = Symbol('_streamQueue');
  const _is__CancelRequest_default = Symbol('_is__CancelRequest_default');
  src__stream_queue._CancelRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _CancelRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(this[_streamQueue][_isDone])) {
          this[_completer].complete();
        } else {
          this[_streamQueue][_ensureListening]();
          this[_completer].complete(this[_streamQueue][_extractStream]().listen(null).cancel());
        }
        return true;
      }
    }
    (_CancelRequest.new = function(streamQueue) {
      this[_completer] = async.Completer.new();
      this[_streamQueue] = streamQueue;
    }).prototype = _CancelRequest.prototype;
    dart.addTypeTests(_CancelRequest);
    _CancelRequest.prototype[_is__CancelRequest_default] = true;
    _CancelRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_CancelRequest, () => ({
      __proto__: dart.getMethods(_CancelRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_CancelRequest, () => ({
      __proto__: dart.getGetters(_CancelRequest.__proto__),
      future: dart.fnType(async.Future, [])
    }));
    dart.setFieldSignature(_CancelRequest, () => ({
      __proto__: dart.getFields(_CancelRequest.__proto__),
      [_completer]: dart.finalFieldType(async.Completer),
      [_streamQueue]: dart.finalFieldType(src__stream_queue.StreamQueue)
    }));
    return _CancelRequest;
  });
  src__stream_queue._CancelRequest = src__stream_queue._CancelRequest$();
  dart.addTypeTests(src__stream_queue._CancelRequest, _is__CancelRequest_default);
  const _is__RestRequest_default = Symbol('_is__RestRequest_default');
  src__stream_queue._RestRequest$ = dart.generic(T => {
    let StreamCompleterOfT = () => (StreamCompleterOfT = dart.constFn(src__stream_completer.StreamCompleter$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    let StreamQueueOfT = () => (StreamQueueOfT = dart.constFn(src__stream_queue.StreamQueue$(T)))();
    class _RestRequest extends core.Object {
      get stream() {
        return this[_completer].stream;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events.isEmpty)) {
          if (dart.test(this[_streamQueue][_isDone])) {
            this[_completer].setEmpty();
          } else {
            this[_completer].setSourceStream(this[_streamQueue][_extractStream]());
          }
        } else {
          let controller = StreamControllerOfT().new();
          for (let event of events) {
            event.addTo(controller);
          }
          controller.addStream(this[_streamQueue][_extractStream](), {cancelOnError: false}).whenComplete(dart.bind(controller, 'close'));
          this[_completer].setSourceStream(controller.stream);
        }
        return true;
      }
    }
    (_RestRequest.new = function(streamQueue) {
      this[_completer] = new (StreamCompleterOfT()).new();
      this[_streamQueue] = streamQueue;
    }).prototype = _RestRequest.prototype;
    dart.addTypeTests(_RestRequest);
    _RestRequest.prototype[_is__RestRequest_default] = true;
    _RestRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_RestRequest, () => ({
      __proto__: dart.getMethods(_RestRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_RestRequest, () => ({
      __proto__: dart.getGetters(_RestRequest.__proto__),
      stream: dart.fnType(async.Stream$(T), [])
    }));
    dart.setFieldSignature(_RestRequest, () => ({
      __proto__: dart.getFields(_RestRequest.__proto__),
      [_completer]: dart.finalFieldType(StreamCompleterOfT()),
      [_streamQueue]: dart.finalFieldType(StreamQueueOfT())
    }));
    return _RestRequest;
  });
  src__stream_queue._RestRequest = src__stream_queue._RestRequest$();
  dart.addTypeTests(src__stream_queue._RestRequest, _is__RestRequest_default);
  const _is__HasNextRequest_default = Symbol('_is__HasNextRequest_default');
  src__stream_queue._HasNextRequest$ = dart.generic(T => {
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _HasNextRequest extends core.Object {
      get future() {
        return this[_completer].future;
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        if (dart.test(events.isNotEmpty)) {
          this[_completer].complete(true);
          return true;
        }
        if (dart.test(isDone)) {
          this[_completer].complete(false);
          return true;
        }
        return false;
      }
    }
    (_HasNextRequest.new = function() {
      this[_completer] = CompleterOfbool().new();
    }).prototype = _HasNextRequest.prototype;
    dart.addTypeTests(_HasNextRequest);
    _HasNextRequest.prototype[_is__HasNextRequest_default] = true;
    _HasNextRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_HasNextRequest, () => ({
      __proto__: dart.getMethods(_HasNextRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_HasNextRequest, () => ({
      __proto__: dart.getGetters(_HasNextRequest.__proto__),
      future: dart.fnType(async.Future$(core.bool), [])
    }));
    dart.setFieldSignature(_HasNextRequest, () => ({
      __proto__: dart.getFields(_HasNextRequest.__proto__),
      [_completer]: dart.finalFieldType(CompleterOfbool())
    }));
    return _HasNextRequest;
  });
  src__stream_queue._HasNextRequest = src__stream_queue._HasNextRequest$();
  dart.addTypeTests(src__stream_queue._HasNextRequest, _is__HasNextRequest_default);
  const _transaction = Symbol('_transaction');
  const _controller = Symbol('_controller');
  const _eventsSent = Symbol('_eventsSent');
  const _is__TransactionRequest_default = Symbol('_is__TransactionRequest_default');
  src__stream_queue._TransactionRequest$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamQueueTransactionOfT = () => (StreamQueueTransactionOfT = dart.constFn(src__stream_queue.StreamQueueTransaction$(T)))();
    let ResultOfT = () => (ResultOfT = dart.constFn(src__result__result.Result$(T)))();
    let QueueListOfResultOfT = () => (QueueListOfResultOfT = dart.constFn(src__queue_list.QueueList$(ResultOfT())))();
    let _EventRequestOfT = () => (_EventRequestOfT = dart.constFn(src__stream_queue._EventRequest$(T)))();
    class _TransactionRequest extends core.Object {
      get transaction() {
        return this[_transaction];
      }
      update(events, isDone) {
        QueueListOfResultOfT()._check(events);
        while (dart.notNull(this[_eventsSent]) < dart.notNull(events.length)) {
          events._get((() => {
            let x = this[_eventsSent];
            this[_eventsSent] = dart.notNull(x) + 1;
            return x;
          })()).addTo(this[_controller]);
        }
        if (dart.test(isDone) && !dart.test(this[_controller].isClosed)) this[_controller].close();
        return dart.test(this.transaction[_committed]) || dart.test(this[_transaction][_rejected]);
      }
    }
    (_TransactionRequest.new = function(parent) {
      this[_transaction] = null;
      this[_controller] = StreamControllerOfT().new({sync: true});
      this[_eventsSent] = 0;
      this[_transaction] = new (StreamQueueTransactionOfT()).__(parent, this[_controller].stream);
    }).prototype = _TransactionRequest.prototype;
    dart.addTypeTests(_TransactionRequest);
    _TransactionRequest.prototype[_is__TransactionRequest_default] = true;
    _TransactionRequest[dart.implements] = () => [_EventRequestOfT()];
    dart.setMethodSignature(_TransactionRequest, () => ({
      __proto__: dart.getMethods(_TransactionRequest.__proto__),
      update: dart.fnType(core.bool, [core.Object, core.bool])
    }));
    dart.setGetterSignature(_TransactionRequest, () => ({
      __proto__: dart.getGetters(_TransactionRequest.__proto__),
      transaction: dart.fnType(src__stream_queue.StreamQueueTransaction$(T), [])
    }));
    dart.setFieldSignature(_TransactionRequest, () => ({
      __proto__: dart.getFields(_TransactionRequest.__proto__),
      [_transaction]: dart.fieldType(StreamQueueTransactionOfT()),
      [_controller]: dart.finalFieldType(StreamControllerOfT()),
      [_eventsSent]: dart.fieldType(core.int)
    }));
    return _TransactionRequest;
  });
  src__stream_queue._TransactionRequest = src__stream_queue._TransactionRequest$();
  dart.addTypeTests(src__stream_queue._TransactionRequest, _is__TransactionRequest_default);
  const _duration = Symbol('_duration');
  const _cachedStreamSplitter = Symbol('_cachedStreamSplitter');
  const _cachedValueFuture = Symbol('_cachedValueFuture');
  const _stale = Symbol('_stale');
  const _startStaleTimer = Symbol('_startStaleTimer');
  const _is_AsyncCache_default = Symbol('_is_AsyncCache_default');
  src__async_cache.AsyncCache$ = dart.generic(T => {
    let AsyncCacheOfT = () => (AsyncCacheOfT = dart.constFn(src__async_cache.AsyncCache$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let VoidToFutureOfT = () => (VoidToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [])))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    let EventSinkOfT = () => (EventSinkOfT = dart.constFn(async.EventSink$(T)))();
    let EventSinkOfTToNull = () => (EventSinkOfTToNull = dart.constFn(dart.fnType(core.Null, [EventSinkOfT()])))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    let StreamSplitterOfT = () => (StreamSplitterOfT = dart.constFn(src__stream_splitter.StreamSplitter$(T)))();
    class AsyncCache extends core.Object {
      static ephemeral() {
        return new (AsyncCacheOfT()).new(core.Duration.ZERO);
      }
      fetch(callback) {
        return async.async(T, (function* fetch() {
          VoidToFutureOfT()._check(callback);
          if (this[_cachedStreamSplitter] != null) {
            dart.throw(new core.StateError.new('Previously used to cache via `fetchStream`'));
          }
          if (this[_cachedValueFuture] == null) {
            this[_cachedValueFuture] = callback();
            yield this[_cachedValueFuture];
            this[_startStaleTimer]();
          }
          return this[_cachedValueFuture];
        }).bind(this));
      }
      fetchStream(callback) {
        VoidToStreamOfT()._check(callback);
        if (this[_cachedValueFuture] != null) {
          dart.throw(new core.StateError.new('Previously used to cache via `fetch`'));
        }
        if (this[_cachedStreamSplitter] == null) {
          this[_cachedStreamSplitter] = new (StreamSplitterOfT()).new(callback().transform(T, StreamTransformerOfT$T().fromHandlers({handleDone: dart.fn(sink => {
              this[_startStaleTimer]();
              sink.close();
            }, EventSinkOfTToNull())})));
        }
        return this[_cachedStreamSplitter].split();
      }
      invalidate() {
        this[_cachedValueFuture] = null;
        let t = this[_cachedStreamSplitter];
        t == null ? null : t.close();
        this[_cachedStreamSplitter] = null;
        let t$ = this[_stale];
        t$ == null ? null : t$.cancel();
        this[_stale] = null;
      }
      [_startStaleTimer]() {
        this[_stale] = async.Timer.new(this[_duration], dart.bind(this, 'invalidate'));
      }
    }
    (AsyncCache.new = function(duration) {
      this[_cachedStreamSplitter] = null;
      this[_cachedValueFuture] = null;
      this[_stale] = null;
      this[_duration] = duration;
    }).prototype = AsyncCache.prototype;
    dart.addTypeTests(AsyncCache);
    AsyncCache.prototype[_is_AsyncCache_default] = true;
    dart.setMethodSignature(AsyncCache, () => ({
      __proto__: dart.getMethods(AsyncCache.__proto__),
      fetch: dart.fnType(async.Future$(T), [core.Object]),
      fetchStream: dart.fnType(async.Stream$(T), [core.Object]),
      invalidate: dart.fnType(dart.void, []),
      [_startStaleTimer]: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(AsyncCache, () => ({
      __proto__: dart.getFields(AsyncCache.__proto__),
      [_duration]: dart.finalFieldType(core.Duration),
      [_cachedStreamSplitter]: dart.fieldType(StreamSplitterOfT()),
      [_cachedValueFuture]: dart.fieldType(FutureOfT()),
      [_stale]: dart.fieldType(async.Timer)
    }));
    return AsyncCache;
  });
  src__async_cache.AsyncCache = src__async_cache.AsyncCache$();
  dart.addTypeTests(src__async_cache.AsyncCache, _is_AsyncCache_default);
  const _completer$ = Symbol('_completer');
  const _inner = Symbol('_inner');
  const _cancel$ = Symbol('_cancel');
  const _cancelMemo = Symbol('_cancelMemo');
  const _is_CancelableOperation_default = Symbol('_is_CancelableOperation_default');
  src__cancelable_operation.CancelableOperation$ = dart.generic(T => {
    let CancelableCompleterOfT = () => (CancelableCompleterOfT = dart.constFn(src__cancelable_operation.CancelableCompleter$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TTovoid = () => (TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class CancelableOperation extends core.Object {
      static fromFuture(inner, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let completer = new (CancelableCompleterOfT()).new({onCancel: onCancel});
        completer.complete(inner);
        return completer.operation;
      }
      get value() {
        return this[_completer$][_inner].future;
      }
      asStream() {
        let controller = StreamControllerOfT().new({sync: true, onCancel: dart.bind(this[_completer$], _cancel$)});
        this.value.then(core.Null, dart.fn(value => {
          controller.add(value);
          controller.close();
        }, TToNull()), {onError: dart.fn((error, stackTrace) => {
            controller.addError(error, core.StackTrace._check(stackTrace));
            controller.close();
          }, dynamicAnddynamicToNull())});
        return controller.stream;
      }
      valueOrCancellation(cancellationValue) {
        if (cancellationValue === void 0) cancellationValue = null;
        T._check(cancellationValue);
        let completer = CompleterOfT().sync();
        this.value.then(dart.void, dart.fn(result => completer.complete(result), TTovoid()), {onError: dart.bind(completer, 'completeError')});
        this[_completer$][_cancelMemo].future.then(core.Null, dart.fn(_ => {
          completer.complete(cancellationValue);
        }, dynamicToNull$()), {onError: dart.bind(completer, 'completeError')});
        return completer.future;
      }
      cancel() {
        return this[_completer$][_cancel$]();
      }
    }
    (CancelableOperation.__ = function(completer) {
      this[_completer$] = completer;
    }).prototype = CancelableOperation.prototype;
    dart.addTypeTests(CancelableOperation);
    CancelableOperation.prototype[_is_CancelableOperation_default] = true;
    dart.setMethodSignature(CancelableOperation, () => ({
      __proto__: dart.getMethods(CancelableOperation.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      valueOrCancellation: dart.fnType(async.Future, [], [core.Object]),
      cancel: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(CancelableOperation, () => ({
      __proto__: dart.getGetters(CancelableOperation.__proto__),
      value: dart.fnType(async.Future$(T), [])
    }));
    dart.setFieldSignature(CancelableOperation, () => ({
      __proto__: dart.getFields(CancelableOperation.__proto__),
      [_completer$]: dart.finalFieldType(CancelableCompleterOfT())
    }));
    return CancelableOperation;
  });
  src__cancelable_operation.CancelableOperation = src__cancelable_operation.CancelableOperation$();
  dart.addTypeTests(src__cancelable_operation.CancelableOperation, _is_CancelableOperation_default);
  const _onCancel = Symbol('_onCancel');
  const _operation = Symbol('_operation');
  const _isCompleted = Symbol('_isCompleted');
  const _isCanceled = Symbol('_isCanceled');
  const _is_CancelableCompleter_default = Symbol('_is_CancelableCompleter_default');
  src__cancelable_operation.CancelableCompleter$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let CancelableOperationOfT = () => (CancelableOperationOfT = dart.constFn(src__cancelable_operation.CancelableOperation$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    class CancelableCompleter extends core.Object {
      get operation() {
        return this[_operation];
      }
      get isCompleted() {
        return this[_isCompleted];
      }
      get isCanceled() {
        return this[_isCanceled];
      }
      complete(value) {
        if (value === void 0) value = null;
        if (dart.test(this[_isCompleted])) dart.throw(new core.StateError.new("Operation already completed"));
        this[_isCompleted] = true;
        if (!async.Future.is(value)) {
          if (dart.test(this[_isCanceled])) return;
          this[_inner].complete(FutureOrOfT()._check(value));
          return;
        }
        if (dart.test(this[_isCanceled])) {
          dart.dsend(value, 'catchError', dart.fn(_ => {
          }, dynamicToNull$0()));
          return;
        }
        dart.dsend(value, 'then', dart.fn(result => {
          if (dart.test(this[_isCanceled])) return;
          this[_inner].complete(FutureOrOfT()._check(result));
        }, dynamicToNull$0()), {onError: dart.fn((error, stackTrace) => {
            if (dart.test(this[_isCanceled])) return;
            this[_inner].completeError(error, core.StackTrace._check(stackTrace));
          }, dynamicAnddynamicToNull$())});
      }
      completeError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_isCompleted])) dart.throw(new core.StateError.new("Operation already completed"));
        this[_isCompleted] = true;
        if (dart.test(this[_isCanceled])) return;
        this[_inner].completeError(error, stackTrace);
      }
      [_cancel$]() {
        if (dart.test(this[_inner].isCompleted)) return async.Future.value();
        return this[_cancelMemo].runOnce(dart.fn(() => {
          this[_isCanceled] = true;
          if (this[_onCancel] != null) return this[_onCancel]();
        }, VoidToFutureOr()));
      }
    }
    (CancelableCompleter.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      this[_operation] = null;
      this[_isCompleted] = false;
      this[_isCanceled] = false;
      this[_cancelMemo] = new src__async_memoizer.AsyncMemoizer.new();
      this[_onCancel] = onCancel;
      this[_inner] = CompleterOfT().new();
      this[_operation] = new (CancelableOperationOfT()).__(this);
    }).prototype = CancelableCompleter.prototype;
    dart.addTypeTests(CancelableCompleter);
    CancelableCompleter.prototype[_is_CancelableCompleter_default] = true;
    dart.setMethodSignature(CancelableCompleter, () => ({
      __proto__: dart.getMethods(CancelableCompleter.__proto__),
      complete: dart.fnType(dart.void, [], [dart.dynamic]),
      completeError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_cancel$]: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(CancelableCompleter, () => ({
      __proto__: dart.getGetters(CancelableCompleter.__proto__),
      operation: dart.fnType(src__cancelable_operation.CancelableOperation$(T), []),
      isCompleted: dart.fnType(core.bool, []),
      isCanceled: dart.fnType(core.bool, [])
    }));
    dart.setFieldSignature(CancelableCompleter, () => ({
      __proto__: dart.getFields(CancelableCompleter.__proto__),
      [_inner]: dart.finalFieldType(CompleterOfT()),
      [_onCancel]: dart.finalFieldType(VoidToFutureOr$()),
      [_operation]: dart.fieldType(CancelableOperationOfT()),
      [_isCompleted]: dart.fieldType(core.bool),
      [_isCanceled]: dart.fieldType(core.bool),
      [_cancelMemo]: dart.finalFieldType(src__async_memoizer.AsyncMemoizer)
    }));
    return CancelableCompleter;
  });
  src__cancelable_operation.CancelableCompleter = src__cancelable_operation.CancelableCompleter$();
  dart.addTypeTests(src__cancelable_operation.CancelableCompleter, _is_CancelableCompleter_default);
  src__byte_collector.collectBytes = function(source) {
    return src__byte_collector._collectBytes(FutureOfUint8List(), source, dart.fn((_, result) => result, StreamSubscriptionOfListOfintAndFutureOfUint8ListToFutureOfUint8List()));
  };
  dart.fn(src__byte_collector.collectBytes, StreamOfListOfintToFutureOfUint8List());
  src__byte_collector.collectBytesCancelable = function(source) {
    return src__byte_collector._collectBytes(CancelableOperationOfUint8List(), source, dart.fn((subscription, result) => CancelableOperationOfUint8List().fromFuture(result, {onCancel: dart.bind(subscription, 'cancel')}), StreamSubscriptionOfListOfintAndFutureOfUint8ListToCancelableOperationOfUint8List()));
  };
  dart.fn(src__byte_collector.collectBytesCancelable, StreamOfListOfintToCancelableOperationOfUint8List());
  src__byte_collector._collectBytes = function(T, source, result) {
    let byteLists = JSArrayOfListOfint().of([]);
    let length = 0;
    let completer = CompleterOfUint8List().sync();
    let subscription = source.listen(dart.fn(bytes => {
      byteLists[$add](bytes);
      length = dart.notNull(length) + dart.notNull(bytes[$length]);
    }, ListOfintToNull()), {onError: dart.bind(completer, 'completeError'), onDone: dart.fn(() => {
        completer.complete(src__byte_collector._collect(length, byteLists));
      }, VoidToNull$0()), cancelOnError: true});
    return result(subscription, completer.future);
  };
  dart.fn(src__byte_collector._collectBytes, StreamOfListOfintAndFnToT());
  src__byte_collector._collect = function(length, byteLists) {
    let result = typed_data.Uint8List.new(length);
    let i = 0;
    for (let byteList of byteLists) {
      let end = i + dart.notNull(byteList[$length]);
      result[$setRange](i, end, byteList);
      i = end;
    }
    return result;
  };
  dart.fn(src__byte_collector._collect, intAndListOfListOfintToUint8List());
  dart.trackLibraries("packages/async/async.ddc", {
    "package:async/src/stream_queue.dart": src__stream_queue,
    "package:async/src/async_cache.dart": src__async_cache,
    "package:async/src/cancelable_operation.dart": src__cancelable_operation,
    "package:async/src/byte_collector.dart": src__byte_collector,
    "package:async/async.dart": async$
  }, '{"version":3,"sourceRoot":"","sources":["src/stream_queue.dart","src/async_cache.dart","src/cancelable_operation.dart","src/byte_collector.dart"],"names":[],"mappings":"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","file":"async.ddc.js"}');
  // Exports:
  return {
    src__stream_queue: src__stream_queue,
    src__async_cache: src__async_cache,
    src__cancelable_operation: src__cancelable_operation,
    src__byte_collector: src__byte_collector,
    async: async$
  };
});

//# sourceMappingURL=async.ddc.js.map
