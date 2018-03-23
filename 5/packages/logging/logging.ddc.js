define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const logging = Object.create(_root);
  const $_set = dartx._set;
  const $putIfAbsent = dartx.putIfAbsent;
  const $startsWith = dartx.startsWith;
  const $lastIndexOf = dartx.lastIndexOf;
  const $substring = dartx.substring;
  const $toString = dartx.toString;
  const $compareTo = dartx.compareTo;
  let UnmodifiableMapViewOfString$Logger = () => (UnmodifiableMapViewOfString$Logger = dart.constFn(collection.UnmodifiableMapView$(core.String, logging.Logger)))();
  let VoidToLogger = () => (VoidToLogger = dart.constFn(dart.fnType(logging.Logger, [])))();
  let IdentityMapOfString$Logger = () => (IdentityMapOfString$Logger = dart.constFn(_js_helper.IdentityMap$(core.String, logging.Logger)))();
  let StreamControllerOfLogRecord = () => (StreamControllerOfLogRecord = dart.constFn(async.StreamController$(logging.LogRecord)))();
  let MapOfString$Logger = () => (MapOfString$Logger = dart.constFn(core.Map$(core.String, logging.Logger)))();
  let ComparableOfLevel = () => (ComparableOfLevel = dart.constFn(core.Comparable$(logging.Level)))();
  dart.defineLazy(logging, {
    /*logging.hierarchicalLoggingEnabled*/get hierarchicalLoggingEnabled() {
      return false;
    },
    set hierarchicalLoggingEnabled(_) {},
    /*logging.recordStackTraceAtLevel*/get recordStackTraceAtLevel() {
      return logging.Level.OFF;
    },
    set recordStackTraceAtLevel(_) {},
    /*logging._rootLevel*/get _rootLevel() {
      return logging.Level.INFO;
    },
    set _rootLevel(_) {}
  });
  const _children = Symbol('_children');
  const _level = Symbol('_level');
  const _controller = Symbol('_controller');
  const _getStream = Symbol('_getStream');
  const _publish = Symbol('_publish');
  logging.Logger = class Logger extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get fullName() {
      return this.parent == null || this.parent.name === '' ? this.name : dart.str`${this.parent.fullName}.${this.name}`;
    }
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    static new(name) {
      return logging.Logger._loggers[$putIfAbsent](name, dart.fn(() => logging.Logger._named(name), VoidToLogger()));
    }
    static detached(name) {
      return new logging.Logger._internal(name, null, new (IdentityMapOfString$Logger()).new());
    }
    static _named(name) {
      if (name[$startsWith]('.')) {
        dart.throw(new core.ArgumentError.new("name shouldn't start with a '.'"));
      }
      let dot = name[$lastIndexOf]('.');
      let parent = null;
      let thisName = null;
      if (dot === -1) {
        if (name !== '') parent = logging.Logger.new('');
        thisName = name;
      } else {
        parent = logging.Logger.new(name[$substring](0, dot));
        thisName = name[$substring](dot + 1);
      }
      return new logging.Logger._internal(thisName, parent, new (IdentityMapOfString$Logger()).new());
    }
    get level() {
      if (dart.test(logging.hierarchicalLoggingEnabled)) {
        if (this[_level] != null) return this[_level];
        if (this.parent != null) return this.parent.level;
      }
      return logging._rootLevel;
    }
    set level(value) {
      if (dart.test(logging.hierarchicalLoggingEnabled) && this.parent != null) {
        this[_level] = value;
      } else {
        if (this.parent != null) {
          dart.throw(new core.UnsupportedError.new('Please set "hierarchicalLoggingEnabled" to true if you want to ' + 'change the level on a non-root logger.'));
        }
        logging._rootLevel = value;
      }
    }
    get onRecord() {
      return this[_getStream]();
    }
    clearListeners() {
      if (dart.test(logging.hierarchicalLoggingEnabled) || this.parent == null) {
        if (this[_controller] != null) {
          this[_controller].close();
          this[_controller] = null;
        }
      } else {
        logging.Logger.root.clearListeners();
      }
    }
    isLoggable(value) {
      return value['>='](this.level);
    }
    log(logLevel, message, error, stackTrace, zone) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      if (zone === void 0) zone = null;
      let object = null;
      if (dart.test(this.isLoggable(logLevel))) {
        if (core.Function.is(message)) message = dart.dcall(message);
        if (!(typeof message == 'string')) {
          object = message;
          message = dart.toString(message);
        }
        if (stackTrace == null && dart.test(logLevel['>='](logging.recordStackTraceAtLevel))) {
          try {
            dart.throw(dart.str`autogenerated stack trace for ${logLevel} ${message}`);
          } catch (e) {
            let t = dart.stackTrace(e);
            stackTrace = t;
            if (error == null) error = e;
          }
        }
        if (zone == null) zone = async.Zone.current;
        let record = new logging.LogRecord.new(logLevel, core.String._check(message), this.fullName, error, stackTrace, zone, object);
        if (dart.test(logging.hierarchicalLoggingEnabled)) {
          let target = this;
          while (target != null) {
            target[_publish](record);
            target = target.parent;
          }
        } else {
          logging.Logger.root[_publish](record);
        }
      }
    }
    finest(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.FINEST, message, error, stackTrace);
    }
    finer(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.FINER, message, error, stackTrace);
    }
    fine(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.FINE, message, error, stackTrace);
    }
    config(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.CONFIG, message, error, stackTrace);
    }
    info(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.INFO, message, error, stackTrace);
    }
    warning(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.WARNING, message, error, stackTrace);
    }
    severe(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.SEVERE, message, error, stackTrace);
    }
    shout(message, error, stackTrace) {
      if (error === void 0) error = null;
      if (stackTrace === void 0) stackTrace = null;
      return this.log(logging.Level.SHOUT, message, error, stackTrace);
    }
    [_getStream]() {
      if (dart.test(logging.hierarchicalLoggingEnabled) || this.parent == null) {
        if (this[_controller] == null) {
          this[_controller] = StreamControllerOfLogRecord().broadcast({sync: true});
        }
        return this[_controller].stream;
      } else {
        return logging.Logger.root[_getStream]();
      }
    }
    [_publish](record) {
      if (this[_controller] != null) {
        this[_controller].add(record);
      }
    }
  };
  (logging.Logger._internal = function(name, parent, children) {
    this[_level] = null;
    this[_controller] = null;
    this[name$] = name;
    this[parent$] = parent;
    this[_children] = children;
    this[children$] = new (UnmodifiableMapViewOfString$Logger()).new(children);
    if (this.parent != null) this.parent[_children][$_set](this.name, this);
  }).prototype = logging.Logger.prototype;
  dart.addTypeTests(logging.Logger);
  const name$ = Symbol("Logger.name");
  const parent$ = Symbol("Logger.parent");
  const children$ = Symbol("Logger.children");
  dart.setMethodSignature(logging.Logger, () => ({
    __proto__: dart.getMethods(logging.Logger.__proto__),
    clearListeners: dart.fnType(dart.void, []),
    isLoggable: dart.fnType(core.bool, [logging.Level]),
    log: dart.fnType(dart.void, [logging.Level, dart.dynamic], [core.Object, core.StackTrace, async.Zone]),
    finest: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    finer: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    fine: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    config: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    info: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    warning: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    severe: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    shout: dart.fnType(dart.void, [dart.dynamic], [core.Object, core.StackTrace]),
    [_getStream]: dart.fnType(async.Stream$(logging.LogRecord), []),
    [_publish]: dart.fnType(dart.void, [logging.LogRecord])
  }));
  dart.setGetterSignature(logging.Logger, () => ({
    __proto__: dart.getGetters(logging.Logger.__proto__),
    fullName: dart.fnType(core.String, []),
    level: dart.fnType(logging.Level, []),
    onRecord: dart.fnType(async.Stream$(logging.LogRecord), [])
  }));
  dart.setSetterSignature(logging.Logger, () => ({
    __proto__: dart.getSetters(logging.Logger.__proto__),
    level: dart.fnType(dart.void, [logging.Level])
  }));
  dart.setFieldSignature(logging.Logger, () => ({
    __proto__: dart.getFields(logging.Logger.__proto__),
    name: dart.finalFieldType(core.String),
    parent: dart.finalFieldType(logging.Logger),
    [_level]: dart.fieldType(logging.Level),
    [_children]: dart.finalFieldType(MapOfString$Logger()),
    children: dart.finalFieldType(MapOfString$Logger()),
    [_controller]: dart.fieldType(StreamControllerOfLogRecord())
  }));
  dart.defineLazy(logging.Logger, {
    /*logging.Logger.root*/get root() {
      return logging.Logger.new('');
    },
    /*logging.Logger._loggers*/get _loggers() {
      return new (IdentityMapOfString$Logger()).new();
    }
  });
  logging.LoggerHandler = dart.typedef('LoggerHandler', () => dart.fnType(dart.void, [dart.dynamic]));
  logging.Level = class Level extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    _equals(other) {
      if (other == null) return false;
      return logging.Level.is(other) && this.value == other.value;
    }
    ['<'](other) {
      return dart.notNull(this.value) < dart.notNull(other.value);
    }
    ['<='](other) {
      return dart.notNull(this.value) <= dart.notNull(other.value);
    }
    ['>'](other) {
      return dart.notNull(this.value) > dart.notNull(other.value);
    }
    ['>='](other) {
      return dart.notNull(this.value) >= dart.notNull(other.value);
    }
    compareTo(other) {
      logging.Level._check(other);
      return dart.notNull(this.value) - dart.notNull(other.value);
    }
    get hashCode() {
      return this.value;
    }
    toString() {
      return this.name;
    }
  };
  (logging.Level.new = function(name, value) {
    this[name$0] = name;
    this[value$] = value;
  }).prototype = logging.Level.prototype;
  dart.addTypeTests(logging.Level);
  const name$0 = Symbol("Level.name");
  const value$ = Symbol("Level.value");
  logging.Level[dart.implements] = () => [ComparableOfLevel()];
  dart.setMethodSignature(logging.Level, () => ({
    __proto__: dart.getMethods(logging.Level.__proto__),
    '<': dart.fnType(core.bool, [logging.Level]),
    '<=': dart.fnType(core.bool, [logging.Level]),
    '>': dart.fnType(core.bool, [logging.Level]),
    '>=': dart.fnType(core.bool, [logging.Level]),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setFieldSignature(logging.Level, () => ({
    __proto__: dart.getFields(logging.Level.__proto__),
    name: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(logging.Level, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(logging.Level, ['hashCode']);
  dart.defineLazy(logging.Level, {
    /*logging.Level.ALL*/get ALL() {
      return dart.const(new logging.Level.new('ALL', 0));
    },
    /*logging.Level.OFF*/get OFF() {
      return dart.const(new logging.Level.new('OFF', 2000));
    },
    /*logging.Level.FINEST*/get FINEST() {
      return dart.const(new logging.Level.new('FINEST', 300));
    },
    /*logging.Level.FINER*/get FINER() {
      return dart.const(new logging.Level.new('FINER', 400));
    },
    /*logging.Level.FINE*/get FINE() {
      return dart.const(new logging.Level.new('FINE', 500));
    },
    /*logging.Level.CONFIG*/get CONFIG() {
      return dart.const(new logging.Level.new('CONFIG', 700));
    },
    /*logging.Level.INFO*/get INFO() {
      return dart.const(new logging.Level.new('INFO', 800));
    },
    /*logging.Level.WARNING*/get WARNING() {
      return dart.const(new logging.Level.new('WARNING', 900));
    },
    /*logging.Level.SEVERE*/get SEVERE() {
      return dart.const(new logging.Level.new('SEVERE', 1000));
    },
    /*logging.Level.SHOUT*/get SHOUT() {
      return dart.const(new logging.Level.new('SHOUT', 1200));
    },
    /*logging.Level.LEVELS*/get LEVELS() {
      return dart.constList([logging.Level.ALL, logging.Level.FINEST, logging.Level.FINER, logging.Level.FINE, logging.Level.CONFIG, logging.Level.INFO, logging.Level.WARNING, logging.Level.SEVERE, logging.Level.SHOUT, logging.Level.OFF], logging.Level);
    }
  });
  logging.LogRecord = class LogRecord extends core.Object {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get object() {
      return this[object$];
    }
    set object(value) {
      super.object = value;
    }
    get loggerName() {
      return this[loggerName$];
    }
    set loggerName(value) {
      super.loggerName = value;
    }
    get time() {
      return this[time];
    }
    set time(value) {
      super.time = value;
    }
    get sequenceNumber() {
      return this[sequenceNumber];
    }
    set sequenceNumber(value) {
      super.sequenceNumber = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stackTrace() {
      return this[stackTrace$];
    }
    set stackTrace(value) {
      super.stackTrace = value;
    }
    get zone() {
      return this[zone$];
    }
    set zone(value) {
      super.zone = value;
    }
    toString() {
      return dart.str`[${this.level.name}] ${this.loggerName}: ${this.message}`;
    }
  };
  (logging.LogRecord.new = function(level, message, loggerName, error, stackTrace, zone, object) {
    if (error === void 0) error = null;
    if (stackTrace === void 0) stackTrace = null;
    if (zone === void 0) zone = null;
    if (object === void 0) object = null;
    this[level$] = level;
    this[message$] = message;
    this[loggerName$] = loggerName;
    this[error$] = error;
    this[stackTrace$] = stackTrace;
    this[zone$] = zone;
    this[object$] = object;
    this[time] = new core.DateTime.now();
    let o = logging.LogRecord, x = logging.LogRecord._nextNumber;
    logging.LogRecord._nextNumber = dart.notNull(x) + 1;
    this[sequenceNumber] = x;
  }).prototype = logging.LogRecord.prototype;
  dart.addTypeTests(logging.LogRecord);
  const level$ = Symbol("LogRecord.level");
  const message$ = Symbol("LogRecord.message");
  const object$ = Symbol("LogRecord.object");
  const loggerName$ = Symbol("LogRecord.loggerName");
  const time = Symbol("LogRecord.time");
  const sequenceNumber = Symbol("LogRecord.sequenceNumber");
  const error$ = Symbol("LogRecord.error");
  const stackTrace$ = Symbol("LogRecord.stackTrace");
  const zone$ = Symbol("LogRecord.zone");
  dart.setFieldSignature(logging.LogRecord, () => ({
    __proto__: dart.getFields(logging.LogRecord.__proto__),
    level: dart.finalFieldType(logging.Level),
    message: dart.finalFieldType(core.String),
    object: dart.finalFieldType(core.Object),
    loggerName: dart.finalFieldType(core.String),
    time: dart.finalFieldType(core.DateTime),
    sequenceNumber: dart.finalFieldType(core.int),
    error: dart.finalFieldType(core.Object),
    stackTrace: dart.finalFieldType(core.StackTrace),
    zone: dart.finalFieldType(async.Zone)
  }));
  dart.defineExtensionMethods(logging.LogRecord, ['toString']);
  dart.defineLazy(logging.LogRecord, {
    /*logging.LogRecord._nextNumber*/get _nextNumber() {
      return 0;
    },
    set _nextNumber(_) {}
  });
  dart.trackLibraries("packages/logging/logging.ddc", {
    "package:logging/logging.dart": logging
  }, '{"version":3,"sourceRoot":"","sources":["logging.dart"],"names":[],"mappings":"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","file":"logging.ddc.js"}');
  // Exports:
  return {
    logging: logging
  };
});

//# sourceMappingURL=logging.ddc.js.map
