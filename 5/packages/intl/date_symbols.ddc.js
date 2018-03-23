define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const date_symbols = Object.create(_root);
  const $_get = dartx._get;
  const $_set = dartx._set;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let StringToListOfString = () => (StringToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.String])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  const _serializeToMap = Symbol('_serializeToMap');
  date_symbols.DateSymbols = class DateSymbols extends core.Object {
    get NAME() {
      return this[NAME$];
    }
    set NAME(value) {
      this[NAME$] = value;
    }
    get ERAS() {
      return this[ERAS$];
    }
    set ERAS(value) {
      this[ERAS$] = value;
    }
    get ERANAMES() {
      return this[ERANAMES$];
    }
    set ERANAMES(value) {
      this[ERANAMES$] = value;
    }
    get NARROWMONTHS() {
      return this[NARROWMONTHS$];
    }
    set NARROWMONTHS(value) {
      this[NARROWMONTHS$] = value;
    }
    get STANDALONENARROWMONTHS() {
      return this[STANDALONENARROWMONTHS$];
    }
    set STANDALONENARROWMONTHS(value) {
      this[STANDALONENARROWMONTHS$] = value;
    }
    get MONTHS() {
      return this[MONTHS$];
    }
    set MONTHS(value) {
      this[MONTHS$] = value;
    }
    get STANDALONEMONTHS() {
      return this[STANDALONEMONTHS$];
    }
    set STANDALONEMONTHS(value) {
      this[STANDALONEMONTHS$] = value;
    }
    get SHORTMONTHS() {
      return this[SHORTMONTHS$];
    }
    set SHORTMONTHS(value) {
      this[SHORTMONTHS$] = value;
    }
    get STANDALONESHORTMONTHS() {
      return this[STANDALONESHORTMONTHS$];
    }
    set STANDALONESHORTMONTHS(value) {
      this[STANDALONESHORTMONTHS$] = value;
    }
    get WEEKDAYS() {
      return this[WEEKDAYS$];
    }
    set WEEKDAYS(value) {
      this[WEEKDAYS$] = value;
    }
    get STANDALONEWEEKDAYS() {
      return this[STANDALONEWEEKDAYS$];
    }
    set STANDALONEWEEKDAYS(value) {
      this[STANDALONEWEEKDAYS$] = value;
    }
    get SHORTWEEKDAYS() {
      return this[SHORTWEEKDAYS$];
    }
    set SHORTWEEKDAYS(value) {
      this[SHORTWEEKDAYS$] = value;
    }
    get STANDALONESHORTWEEKDAYS() {
      return this[STANDALONESHORTWEEKDAYS$];
    }
    set STANDALONESHORTWEEKDAYS(value) {
      this[STANDALONESHORTWEEKDAYS$] = value;
    }
    get NARROWWEEKDAYS() {
      return this[NARROWWEEKDAYS$];
    }
    set NARROWWEEKDAYS(value) {
      this[NARROWWEEKDAYS$] = value;
    }
    get STANDALONENARROWWEEKDAYS() {
      return this[STANDALONENARROWWEEKDAYS$];
    }
    set STANDALONENARROWWEEKDAYS(value) {
      this[STANDALONENARROWWEEKDAYS$] = value;
    }
    get SHORTQUARTERS() {
      return this[SHORTQUARTERS$];
    }
    set SHORTQUARTERS(value) {
      this[SHORTQUARTERS$] = value;
    }
    get QUARTERS() {
      return this[QUARTERS$];
    }
    set QUARTERS(value) {
      this[QUARTERS$] = value;
    }
    get AMPMS() {
      return this[AMPMS$];
    }
    set AMPMS(value) {
      this[AMPMS$] = value;
    }
    get DATEFORMATS() {
      return this[DATEFORMATS$];
    }
    set DATEFORMATS(value) {
      this[DATEFORMATS$] = value;
    }
    get TIMEFORMATS() {
      return this[TIMEFORMATS$];
    }
    set TIMEFORMATS(value) {
      this[TIMEFORMATS$] = value;
    }
    get DATETIMEFORMATS() {
      return this[DATETIMEFORMATS$];
    }
    set DATETIMEFORMATS(value) {
      this[DATETIMEFORMATS$] = value;
    }
    get AVAILABLEFORMATS() {
      return this[AVAILABLEFORMATS$];
    }
    set AVAILABLEFORMATS(value) {
      this[AVAILABLEFORMATS$] = value;
    }
    get FIRSTDAYOFWEEK() {
      return this[FIRSTDAYOFWEEK$];
    }
    set FIRSTDAYOFWEEK(value) {
      this[FIRSTDAYOFWEEK$] = value;
    }
    get WEEKENDRANGE() {
      return this[WEEKENDRANGE$];
    }
    set WEEKENDRANGE(value) {
      this[WEEKENDRANGE$] = value;
    }
    get FIRSTWEEKCUTOFFDAY() {
      return this[FIRSTWEEKCUTOFFDAY$];
    }
    set FIRSTWEEKCUTOFFDAY(value) {
      this[FIRSTWEEKCUTOFFDAY$] = value;
    }
    get ZERODIGIT() {
      return this[ZERODIGIT$];
    }
    set ZERODIGIT(value) {
      this[ZERODIGIT$] = value;
    }
    serializeToMap() {
      let basicMap = this[_serializeToMap]();
      if (this.ZERODIGIT != null && this.ZERODIGIT !== '') {
        basicMap[$_set]("ZERODIGIT", this.ZERODIGIT);
      }
      return basicMap;
    }
    [_serializeToMap]() {
      return new _js_helper.LinkedMap.from(["NAME", this.NAME, "ERAS", this.ERAS, "ERANAMES", this.ERANAMES, "NARROWMONTHS", this.NARROWMONTHS, "STANDALONENARROWMONTHS", this.STANDALONENARROWMONTHS, "MONTHS", this.MONTHS, "STANDALONEMONTHS", this.STANDALONEMONTHS, "SHORTMONTHS", this.SHORTMONTHS, "STANDALONESHORTMONTHS", this.STANDALONESHORTMONTHS, "WEEKDAYS", this.WEEKDAYS, "STANDALONEWEEKDAYS", this.STANDALONEWEEKDAYS, "SHORTWEEKDAYS", this.SHORTWEEKDAYS, "STANDALONESHORTWEEKDAYS", this.STANDALONESHORTWEEKDAYS, "NARROWWEEKDAYS", this.NARROWWEEKDAYS, "STANDALONENARROWWEEKDAYS", this.STANDALONENARROWWEEKDAYS, "SHORTQUARTERS", this.SHORTQUARTERS, "QUARTERS", this.QUARTERS, "AMPMS", this.AMPMS, "DATEFORMATS", this.DATEFORMATS, "TIMEFORMATS", this.TIMEFORMATS, "AVAILABLEFORMATS", this.AVAILABLEFORMATS, "FIRSTDAYOFWEEK", this.FIRSTDAYOFWEEK, "WEEKENDRANGE", this.WEEKENDRANGE, "FIRSTWEEKCUTOFFDAY", this.FIRSTWEEKCUTOFFDAY, "DATETIMEFORMATS", this.DATETIMEFORMATS]);
    }
    toString() {
      return this.NAME;
    }
  };
  (date_symbols.DateSymbols.new = function(opts) {
    let NAME = opts && 'NAME' in opts ? opts.NAME : null;
    let ERAS = opts && 'ERAS' in opts ? opts.ERAS : null;
    let ERANAMES = opts && 'ERANAMES' in opts ? opts.ERANAMES : null;
    let NARROWMONTHS = opts && 'NARROWMONTHS' in opts ? opts.NARROWMONTHS : null;
    let STANDALONENARROWMONTHS = opts && 'STANDALONENARROWMONTHS' in opts ? opts.STANDALONENARROWMONTHS : null;
    let MONTHS = opts && 'MONTHS' in opts ? opts.MONTHS : null;
    let STANDALONEMONTHS = opts && 'STANDALONEMONTHS' in opts ? opts.STANDALONEMONTHS : null;
    let SHORTMONTHS = opts && 'SHORTMONTHS' in opts ? opts.SHORTMONTHS : null;
    let STANDALONESHORTMONTHS = opts && 'STANDALONESHORTMONTHS' in opts ? opts.STANDALONESHORTMONTHS : null;
    let WEEKDAYS = opts && 'WEEKDAYS' in opts ? opts.WEEKDAYS : null;
    let STANDALONEWEEKDAYS = opts && 'STANDALONEWEEKDAYS' in opts ? opts.STANDALONEWEEKDAYS : null;
    let SHORTWEEKDAYS = opts && 'SHORTWEEKDAYS' in opts ? opts.SHORTWEEKDAYS : null;
    let STANDALONESHORTWEEKDAYS = opts && 'STANDALONESHORTWEEKDAYS' in opts ? opts.STANDALONESHORTWEEKDAYS : null;
    let NARROWWEEKDAYS = opts && 'NARROWWEEKDAYS' in opts ? opts.NARROWWEEKDAYS : null;
    let STANDALONENARROWWEEKDAYS = opts && 'STANDALONENARROWWEEKDAYS' in opts ? opts.STANDALONENARROWWEEKDAYS : null;
    let SHORTQUARTERS = opts && 'SHORTQUARTERS' in opts ? opts.SHORTQUARTERS : null;
    let QUARTERS = opts && 'QUARTERS' in opts ? opts.QUARTERS : null;
    let AMPMS = opts && 'AMPMS' in opts ? opts.AMPMS : null;
    let ZERODIGIT = opts && 'ZERODIGIT' in opts ? opts.ZERODIGIT : null;
    let DATEFORMATS = opts && 'DATEFORMATS' in opts ? opts.DATEFORMATS : null;
    let TIMEFORMATS = opts && 'TIMEFORMATS' in opts ? opts.TIMEFORMATS : null;
    let AVAILABLEFORMATS = opts && 'AVAILABLEFORMATS' in opts ? opts.AVAILABLEFORMATS : null;
    let FIRSTDAYOFWEEK = opts && 'FIRSTDAYOFWEEK' in opts ? opts.FIRSTDAYOFWEEK : null;
    let WEEKENDRANGE = opts && 'WEEKENDRANGE' in opts ? opts.WEEKENDRANGE : null;
    let FIRSTWEEKCUTOFFDAY = opts && 'FIRSTWEEKCUTOFFDAY' in opts ? opts.FIRSTWEEKCUTOFFDAY : null;
    let DATETIMEFORMATS = opts && 'DATETIMEFORMATS' in opts ? opts.DATETIMEFORMATS : null;
    this[NAME$] = NAME;
    this[ERAS$] = ERAS;
    this[ERANAMES$] = ERANAMES;
    this[NARROWMONTHS$] = NARROWMONTHS;
    this[STANDALONENARROWMONTHS$] = STANDALONENARROWMONTHS;
    this[MONTHS$] = MONTHS;
    this[STANDALONEMONTHS$] = STANDALONEMONTHS;
    this[SHORTMONTHS$] = SHORTMONTHS;
    this[STANDALONESHORTMONTHS$] = STANDALONESHORTMONTHS;
    this[WEEKDAYS$] = WEEKDAYS;
    this[STANDALONEWEEKDAYS$] = STANDALONEWEEKDAYS;
    this[SHORTWEEKDAYS$] = SHORTWEEKDAYS;
    this[STANDALONESHORTWEEKDAYS$] = STANDALONESHORTWEEKDAYS;
    this[NARROWWEEKDAYS$] = NARROWWEEKDAYS;
    this[STANDALONENARROWWEEKDAYS$] = STANDALONENARROWWEEKDAYS;
    this[SHORTQUARTERS$] = SHORTQUARTERS;
    this[QUARTERS$] = QUARTERS;
    this[AMPMS$] = AMPMS;
    this[ZERODIGIT$] = ZERODIGIT;
    this[DATEFORMATS$] = DATEFORMATS;
    this[TIMEFORMATS$] = TIMEFORMATS;
    this[AVAILABLEFORMATS$] = AVAILABLEFORMATS;
    this[FIRSTDAYOFWEEK$] = FIRSTDAYOFWEEK;
    this[WEEKENDRANGE$] = WEEKENDRANGE;
    this[FIRSTWEEKCUTOFFDAY$] = FIRSTWEEKCUTOFFDAY;
    this[DATETIMEFORMATS$] = DATETIMEFORMATS;
  }).prototype = date_symbols.DateSymbols.prototype;
  (date_symbols.DateSymbols.deserializeFromMap = function(map) {
    this[NAME$] = null;
    this[ERAS$] = null;
    this[ERANAMES$] = null;
    this[NARROWMONTHS$] = null;
    this[STANDALONENARROWMONTHS$] = null;
    this[MONTHS$] = null;
    this[STANDALONEMONTHS$] = null;
    this[SHORTMONTHS$] = null;
    this[STANDALONESHORTMONTHS$] = null;
    this[WEEKDAYS$] = null;
    this[STANDALONEWEEKDAYS$] = null;
    this[SHORTWEEKDAYS$] = null;
    this[STANDALONESHORTWEEKDAYS$] = null;
    this[NARROWWEEKDAYS$] = null;
    this[STANDALONENARROWWEEKDAYS$] = null;
    this[SHORTQUARTERS$] = null;
    this[QUARTERS$] = null;
    this[AMPMS$] = null;
    this[DATEFORMATS$] = null;
    this[TIMEFORMATS$] = null;
    this[DATETIMEFORMATS$] = null;
    this[AVAILABLEFORMATS$] = null;
    this[FIRSTDAYOFWEEK$] = null;
    this[WEEKENDRANGE$] = null;
    this[FIRSTWEEKCUTOFFDAY$] = null;
    this[ZERODIGIT$] = null;
    function _getStringList(name) {
      return ListOfString().from(core.Iterable._check(map[$_get](name)));
    }
    dart.fn(_getStringList, StringToListOfString());
    this.NAME = core.String._check(map[$_get]("NAME"));
    this.ERAS = _getStringList("ERAS");
    this.ERANAMES = _getStringList("ERANAMES");
    this.NARROWMONTHS = _getStringList("NARROWMONTHS");
    this.STANDALONENARROWMONTHS = _getStringList("STANDALONENARROWMONTHS");
    this.MONTHS = _getStringList("MONTHS");
    this.STANDALONEMONTHS = _getStringList("STANDALONEMONTHS");
    this.SHORTMONTHS = _getStringList("SHORTMONTHS");
    this.STANDALONESHORTMONTHS = _getStringList("STANDALONESHORTMONTHS");
    this.WEEKDAYS = _getStringList("WEEKDAYS");
    this.STANDALONEWEEKDAYS = _getStringList("STANDALONEWEEKDAYS");
    this.SHORTWEEKDAYS = _getStringList("SHORTWEEKDAYS");
    this.STANDALONESHORTWEEKDAYS = _getStringList("STANDALONESHORTWEEKDAYS");
    this.NARROWWEEKDAYS = _getStringList("NARROWWEEKDAYS");
    this.STANDALONENARROWWEEKDAYS = _getStringList("STANDALONENARROWWEEKDAYS");
    this.SHORTQUARTERS = _getStringList("SHORTQUARTERS");
    this.QUARTERS = _getStringList("QUARTERS");
    this.AMPMS = _getStringList("AMPMS");
    this.ZERODIGIT = core.String._check(map[$_get]("ZERODIGIT"));
    this.DATEFORMATS = _getStringList("DATEFORMATS");
    this.TIMEFORMATS = _getStringList("TIMEFORMATS");
    this.AVAILABLEFORMATS = MapOfString$String().from(core.Map._check((() => {
      let l = map[$_get]("AVAILABLEFORMATS");
      return l != null ? l : new _js_helper.LinkedMap.new();
    })()));
    this.FIRSTDAYOFWEEK = core.int._check(map[$_get]("FIRSTDAYOFWEEK"));
    this.WEEKENDRANGE = ListOfint().from(core.Iterable._check(map[$_get]("WEEKENDRANGE")));
    this.FIRSTWEEKCUTOFFDAY = core.int._check(map[$_get]("FIRSTWEEKCUTOFFDAY"));
    this.DATETIMEFORMATS = _getStringList("DATETIMEFORMATS");
  }).prototype = date_symbols.DateSymbols.prototype;
  dart.addTypeTests(date_symbols.DateSymbols);
  const NAME$ = Symbol("DateSymbols.NAME");
  const ERAS$ = Symbol("DateSymbols.ERAS");
  const ERANAMES$ = Symbol("DateSymbols.ERANAMES");
  const NARROWMONTHS$ = Symbol("DateSymbols.NARROWMONTHS");
  const STANDALONENARROWMONTHS$ = Symbol("DateSymbols.STANDALONENARROWMONTHS");
  const MONTHS$ = Symbol("DateSymbols.MONTHS");
  const STANDALONEMONTHS$ = Symbol("DateSymbols.STANDALONEMONTHS");
  const SHORTMONTHS$ = Symbol("DateSymbols.SHORTMONTHS");
  const STANDALONESHORTMONTHS$ = Symbol("DateSymbols.STANDALONESHORTMONTHS");
  const WEEKDAYS$ = Symbol("DateSymbols.WEEKDAYS");
  const STANDALONEWEEKDAYS$ = Symbol("DateSymbols.STANDALONEWEEKDAYS");
  const SHORTWEEKDAYS$ = Symbol("DateSymbols.SHORTWEEKDAYS");
  const STANDALONESHORTWEEKDAYS$ = Symbol("DateSymbols.STANDALONESHORTWEEKDAYS");
  const NARROWWEEKDAYS$ = Symbol("DateSymbols.NARROWWEEKDAYS");
  const STANDALONENARROWWEEKDAYS$ = Symbol("DateSymbols.STANDALONENARROWWEEKDAYS");
  const SHORTQUARTERS$ = Symbol("DateSymbols.SHORTQUARTERS");
  const QUARTERS$ = Symbol("DateSymbols.QUARTERS");
  const AMPMS$ = Symbol("DateSymbols.AMPMS");
  const DATEFORMATS$ = Symbol("DateSymbols.DATEFORMATS");
  const TIMEFORMATS$ = Symbol("DateSymbols.TIMEFORMATS");
  const DATETIMEFORMATS$ = Symbol("DateSymbols.DATETIMEFORMATS");
  const AVAILABLEFORMATS$ = Symbol("DateSymbols.AVAILABLEFORMATS");
  const FIRSTDAYOFWEEK$ = Symbol("DateSymbols.FIRSTDAYOFWEEK");
  const WEEKENDRANGE$ = Symbol("DateSymbols.WEEKENDRANGE");
  const FIRSTWEEKCUTOFFDAY$ = Symbol("DateSymbols.FIRSTWEEKCUTOFFDAY");
  const ZERODIGIT$ = Symbol("DateSymbols.ZERODIGIT");
  dart.setMethodSignature(date_symbols.DateSymbols, () => ({
    __proto__: dart.getMethods(date_symbols.DateSymbols.__proto__),
    serializeToMap: dart.fnType(core.Map, []),
    [_serializeToMap]: dart.fnType(core.Map, [])
  }));
  dart.setFieldSignature(date_symbols.DateSymbols, () => ({
    __proto__: dart.getFields(date_symbols.DateSymbols.__proto__),
    NAME: dart.fieldType(core.String),
    ERAS: dart.fieldType(ListOfString()),
    ERANAMES: dart.fieldType(ListOfString()),
    NARROWMONTHS: dart.fieldType(ListOfString()),
    STANDALONENARROWMONTHS: dart.fieldType(ListOfString()),
    MONTHS: dart.fieldType(ListOfString()),
    STANDALONEMONTHS: dart.fieldType(ListOfString()),
    SHORTMONTHS: dart.fieldType(ListOfString()),
    STANDALONESHORTMONTHS: dart.fieldType(ListOfString()),
    WEEKDAYS: dart.fieldType(ListOfString()),
    STANDALONEWEEKDAYS: dart.fieldType(ListOfString()),
    SHORTWEEKDAYS: dart.fieldType(ListOfString()),
    STANDALONESHORTWEEKDAYS: dart.fieldType(ListOfString()),
    NARROWWEEKDAYS: dart.fieldType(ListOfString()),
    STANDALONENARROWWEEKDAYS: dart.fieldType(ListOfString()),
    SHORTQUARTERS: dart.fieldType(ListOfString()),
    QUARTERS: dart.fieldType(ListOfString()),
    AMPMS: dart.fieldType(ListOfString()),
    DATEFORMATS: dart.fieldType(ListOfString()),
    TIMEFORMATS: dart.fieldType(ListOfString()),
    DATETIMEFORMATS: dart.fieldType(ListOfString()),
    AVAILABLEFORMATS: dart.fieldType(MapOfString$String()),
    FIRSTDAYOFWEEK: dart.fieldType(core.int),
    WEEKENDRANGE: dart.fieldType(ListOfint()),
    FIRSTWEEKCUTOFFDAY: dart.fieldType(core.int),
    ZERODIGIT: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(date_symbols.DateSymbols, ['toString']);
  dart.defineLazy(date_symbols, {
    /*date_symbols.en_USSymbols*/get en_USSymbols() {
      return new date_symbols.DateSymbols.new({NAME: "en_US", ERAS: dart.constList(['BC', 'AD'], core.String), ERANAMES: dart.constList(['Before Christ', 'Anno Domini'], core.String), NARROWMONTHS: dart.constList(['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], core.String), STANDALONENARROWMONTHS: dart.constList(['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], core.String), MONTHS: dart.constList(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], core.String), STANDALONEMONTHS: dart.constList(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], core.String), SHORTMONTHS: dart.constList(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], core.String), STANDALONESHORTMONTHS: dart.constList(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], core.String), WEEKDAYS: dart.constList(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], core.String), STANDALONEWEEKDAYS: dart.constList(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], core.String), SHORTWEEKDAYS: dart.constList(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], core.String), STANDALONESHORTWEEKDAYS: dart.constList(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], core.String), NARROWWEEKDAYS: dart.constList(['S', 'M', 'T', 'W', 'T', 'F', 'S'], core.String), STANDALONENARROWWEEKDAYS: dart.constList(['S', 'M', 'T', 'W', 'T', 'F', 'S'], core.String), SHORTQUARTERS: dart.constList(['Q1', 'Q2', 'Q3', 'Q4'], core.String), QUARTERS: dart.constList(['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'], core.String), AMPMS: dart.constList(['AM', 'PM'], core.String), DATEFORMATS: dart.constList(['EEEE, MMMM d, y', 'MMMM d, y', 'MMM d, y', 'M/d/yy'], core.String), TIMEFORMATS: dart.constList(['h:mm:ss a zzzz', 'h:mm:ss a z', 'h:mm:ss a', 'h:mm a'], core.String), FIRSTDAYOFWEEK: 6, WEEKENDRANGE: dart.constList([5, 6], core.int), FIRSTWEEKCUTOFFDAY: 5, DATETIMEFORMATS: dart.constList(['{1} \'at\' {0}', '{1} \'at\' {0}', '{1}, {0}', '{1}, {0}'], core.String)});
    },
    set en_USSymbols(_) {},
    /*date_symbols.en_USPatterns*/get en_USPatterns() {
      return dart.constMap(core.String, core.String, ['d', 'd', 'E', 'EEE', 'EEEE', 'EEEE', 'LLL', 'LLL', 'LLLL', 'LLLL', 'M', 'L', 'Md', 'M/d', 'MEd', 'EEE, M/d', 'MMM', 'LLL', 'MMMd', 'MMM d', 'MMMEd', 'EEE, MMM d', 'MMMM', 'LLLL', 'MMMMd', 'MMMM d', 'MMMMEEEEd', 'EEEE, MMMM d', 'QQQ', 'QQQ', 'QQQQ', 'QQQQ', 'y', 'y', 'yM', 'M/y', 'yMd', 'M/d/y', 'yMEd', 'EEE, M/d/y', 'yMMM', 'MMM y', 'yMMMd', 'MMM d, y', 'yMMMEd', 'EEE, MMM d, y', 'yMMMM', 'MMMM y', 'yMMMMd', 'MMMM d, y', 'yMMMMEEEEd', 'EEEE, MMMM d, y', 'yQQQ', 'QQQ y', 'yQQQQ', 'QQQQ y', 'H', 'HH', 'Hm', 'HH:mm', 'Hms', 'HH:mm:ss', 'j', 'h a', 'jm', 'h:mm a', 'jms', 'h:mm:ss a', 'jmv', 'h:mm a v', 'jmz', 'h:mm a z', 'jz', 'h a z', 'm', 'm', 'ms', 'mm:ss', 's', 's', 'v', 'v', 'z', 'z', 'zzzz', 'zzzz', 'ZZZZ', 'ZZZZ']);
    },
    set en_USPatterns(_) {}
  });
  dart.trackLibraries("packages/intl/date_symbols.ddc", {
    "package:intl/date_symbols.dart": date_symbols
  }, '{"version":3,"sourceRoot":"","sources":["date_symbols.dart"],"names":[],"mappings":"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","file":"date_symbols.ddc.js"}');
  // Exports:
  return {
    date_symbols: date_symbols
  };
});

//# sourceMappingURL=date_symbols.ddc.js.map
