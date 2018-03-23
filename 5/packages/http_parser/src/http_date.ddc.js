define(['dart_sdk', 'packages/http_parser/src/utils', 'packages/string_scanner/src/string_scanner'], function(dart_sdk, utils, string_scanner) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__utils = utils.src__utils;
  const src__string_scanner = string_scanner.src__string_scanner;
  const _root = Object.create(null);
  const src__http_date = Object.create(_root);
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $indexOf = dartx.indexOf;
  let DateTimeToString = () => (DateTimeToString = dart.constFn(dart.fnType(core.String, [core.DateTime])))();
  let VoidToDateTime = () => (VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))();
  let StringToDateTime = () => (StringToDateTime = dart.constFn(dart.fnType(core.DateTime, [core.String])))();
  let StringScannerToint = () => (StringScannerToint = dart.constFn(dart.fnType(core.int, [src__string_scanner.StringScanner])))();
  let StringScannerAndintToint = () => (StringScannerAndintToint = dart.constFn(dart.fnType(core.int, [src__string_scanner.StringScanner, core.int])))();
  let StringScannerToDateTime = () => (StringScannerToDateTime = dart.constFn(dart.fnType(core.DateTime, [src__string_scanner.StringScanner])))();
  let intAndintAndint__ToDateTime = () => (intAndintAndint__ToDateTime = dart.constFn(dart.fnType(core.DateTime, [core.int, core.int, core.int, core.DateTime])))();
  dart.defineLazy(src__http_date, {
    /*src__http_date._WEEKDAYS*/get _WEEKDAYS() {
      return dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    /*src__http_date._MONTHS*/get _MONTHS() {
      return dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    /*src__http_date._shortWeekdayRegExp*/get _shortWeekdayRegExp() {
      return core.RegExp.new("Mon|Tue|Wed|Thu|Fri|Sat|Sun");
    },
    /*src__http_date._longWeekdayRegExp*/get _longWeekdayRegExp() {
      return core.RegExp.new("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday");
    },
    /*src__http_date._monthRegExp*/get _monthRegExp() {
      return core.RegExp.new("Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec");
    },
    /*src__http_date._digitRegExp*/get _digitRegExp() {
      return core.RegExp.new("\\d+");
    }
  });
  src__http_date.formatHttpDate = function(date) {
    date = date.toUtc();
    let buffer = new core.StringBuffer.new();
    buffer.write(src__http_date._WEEKDAYS[$_get](dart.notNull(date.weekday) - 1));
    buffer.write(", ");
    buffer.write(dart.notNull(date.day) <= 9 ? "0" : "");
    buffer.write(dart.toString(date.day));
    buffer.write(" ");
    buffer.write(src__http_date._MONTHS[$_get](dart.notNull(date.month) - 1));
    buffer.write(" ");
    buffer.write(dart.toString(date.year));
    buffer.write(dart.notNull(date.hour) <= 9 ? " 0" : " ");
    buffer.write(dart.toString(date.hour));
    buffer.write(dart.notNull(date.minute) <= 9 ? ":0" : ":");
    buffer.write(dart.toString(date.minute));
    buffer.write(dart.notNull(date.second) <= 9 ? ":0" : ":");
    buffer.write(dart.toString(date.second));
    buffer.write(" GMT");
    return buffer.toString();
  };
  dart.fn(src__http_date.formatHttpDate, DateTimeToString());
  src__http_date.parseHttpDate = function(date) {
    return src__utils.wrapFormatException(core.DateTime, "HTTP date", date, dart.fn(() => {
      let scanner = new src__string_scanner.StringScanner.new(date);
      if (dart.test(scanner.scan(src__http_date._longWeekdayRegExp))) {
        scanner.expect(", ");
        let day = src__http_date._parseInt(scanner, 2);
        scanner.expect("-");
        let month = src__http_date._parseMonth(scanner);
        scanner.expect("-");
        let year = 1900 + dart.notNull(src__http_date._parseInt(scanner, 2));
        scanner.expect(" ");
        let time = src__http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return src__http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(src__http_date._shortWeekdayRegExp);
      if (dart.test(scanner.scan(", "))) {
        let day = src__http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let month = src__http_date._parseMonth(scanner);
        scanner.expect(" ");
        let year = src__http_date._parseInt(scanner, 4);
        scanner.expect(" ");
        let time = src__http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return src__http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(" ");
      let month = src__http_date._parseMonth(scanner);
      scanner.expect(" ");
      let day = dart.test(scanner.scan(" ")) ? src__http_date._parseInt(scanner, 1) : src__http_date._parseInt(scanner, 2);
      scanner.expect(" ");
      let time = src__http_date._parseTime(scanner);
      scanner.expect(" ");
      let year = src__http_date._parseInt(scanner, 4);
      scanner.expectDone();
      return src__http_date._makeDateTime(year, month, day, time);
    }, VoidToDateTime()));
  };
  dart.fn(src__http_date.parseHttpDate, StringToDateTime());
  src__http_date._parseMonth = function(scanner) {
    scanner.expect(src__http_date._monthRegExp);
    return dart.notNull(src__http_date._MONTHS[$indexOf](scanner.lastMatch._get(0))) + 1;
  };
  dart.fn(src__http_date._parseMonth, StringScannerToint());
  src__http_date._parseInt = function(scanner, digits) {
    scanner.expect(src__http_date._digitRegExp);
    if (scanner.lastMatch._get(0).length !== digits) {
      scanner.error(dart.str`expected a ${digits}-digit number.`);
    }
    return core.int.parse(scanner.lastMatch._get(0));
  };
  dart.fn(src__http_date._parseInt, StringScannerAndintToint());
  src__http_date._parseTime = function(scanner) {
    let hours = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(hours) >= 24) scanner.error("hours may not be greater than 24.");
    scanner.expect(':');
    let minutes = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(minutes) >= 60) scanner.error("minutes may not be greater than 60.");
    scanner.expect(':');
    let seconds = src__http_date._parseInt(scanner, 2);
    if (dart.notNull(seconds) >= 60) scanner.error("seconds may not be greater than 60.");
    return new core.DateTime.new(1, 1, 1, hours, minutes, seconds);
  };
  dart.fn(src__http_date._parseTime, StringScannerToDateTime());
  src__http_date._makeDateTime = function(year, month, day, time) {
    let dateTime = new core.DateTime.utc(year, month, day, time.hour, time.minute, time.second);
    if (dateTime.month != month) {
      dart.throw(new core.FormatException.new(dart.str`invalid day '${day}' for month '${month}'.`));
    }
    return dateTime;
  };
  dart.fn(src__http_date._makeDateTime, intAndintAndint__ToDateTime());
  dart.trackLibraries("packages/http_parser/src/http_date.ddc", {
    "package:http_parser/src/http_date.dart": src__http_date
  }, '{"version":3,"sourceRoot":"","sources":["http_date.dart"],"names":[],"mappings":"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","file":"http_date.ddc.js"}');
  // Exports:
  return {
    src__http_date: src__http_date
  };
});

//# sourceMappingURL=http_date.ddc.js.map
