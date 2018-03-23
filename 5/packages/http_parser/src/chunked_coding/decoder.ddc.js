define(['dart_sdk', 'packages/typed_data/typed_buffers'], function(dart_sdk, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const _root = Object.create(null);
  const src__chunked_coding__decoder = Object.create(_root);
  const $length = dartx.length;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $asUint8List = dartx.asUint8List;
  const $toUpperCase = dartx.toUpperCase;
  const $toRadixString = dartx.toRadixString;
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let intAndStringToNull = () => (intAndStringToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.String])))();
  dart.defineLazy(src__chunked_coding__decoder, {
    /*src__chunked_coding__decoder.chunkedCodingDecoder*/get chunkedCodingDecoder() {
      return dart.const(new src__chunked_coding__decoder.ChunkedCodingDecoder.__());
    }
  });
  const _decode = Symbol('_decode');
  const _state = Symbol('_state');
  src__chunked_coding__decoder.ChunkedCodingDecoder = class ChunkedCodingDecoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    convert(bytes) {
      ListOfint()._check(bytes);
      let sink = new src__chunked_coding__decoder._Sink.new(null);
      let output = sink[_decode](bytes, 0, bytes[$length]);
      if (dart.equals(sink[_state], src__chunked_coding__decoder._State.end)) return output;
      dart.throw(new core.FormatException.new("Input ended unexpectedly.", bytes, bytes[$length]));
    }
    startChunkedConversion(sink) {
      SinkOfListOfint()._check(sink);
      return new src__chunked_coding__decoder._Sink.new(sink);
    }
  };
  (src__chunked_coding__decoder.ChunkedCodingDecoder.__ = function() {
    src__chunked_coding__decoder.ChunkedCodingDecoder.__proto__.new.call(this);
  }).prototype = src__chunked_coding__decoder.ChunkedCodingDecoder.prototype;
  dart.addTypeTests(src__chunked_coding__decoder.ChunkedCodingDecoder);
  dart.setMethodSignature(src__chunked_coding__decoder.ChunkedCodingDecoder, () => ({
    __proto__: dart.getMethods(src__chunked_coding__decoder.ChunkedCodingDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [core.Object]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [core.Object])
  }));
  const _sink = Symbol('_sink');
  const _size = Symbol('_size');
  const _close = Symbol('_close');
  const _digitForByte = Symbol('_digitForByte');
  src__chunked_coding__decoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    add(chunk) {
      ListOfint()._check(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      let output = this[_decode](chunk, start, end);
      if (dart.test(output[$isNotEmpty])) this[_sink].add(output);
      if (dart.test(isLast)) this[_close](chunk, end);
    }
    close() {
      return this[_close]();
    }
    [_close](chunk, index) {
      if (chunk === void 0) chunk = null;
      if (index === void 0) index = null;
      if (!dart.equals(this[_state], src__chunked_coding__decoder._State.end)) {
        dart.throw(new core.FormatException.new("Input ended unexpectedly.", chunk, index));
      }
      this[_sink].close();
    }
    [_decode](bytes, start, end) {
      function assertCurrentChar(char, name) {
        if (bytes[$_get](start) != char) {
          dart.throw(new core.FormatException.new(dart.str`Expected ${name}.`, bytes, start));
        }
      }
      dart.fn(assertCurrentChar, intAndStringToNull());
      let buffer = new typed_buffers$.Uint8Buffer.new();
      while (start != end) {
        switch (this[_state]) {
          case src__chunked_coding__decoder._State.boundary:
          {
            this[_size] = this[_digitForByte](bytes, start);
            this[_state] = src__chunked_coding__decoder._State.size;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.size:
          {
            if (bytes[$_get](start) === 13) {
              this[_state] = src__chunked_coding__decoder._State.sizeBeforeLF;
            } else {
              this[_size] = (dart.notNull(this[_size]) << 4 >>> 0) + dart.notNull(this[_digitForByte](bytes, start));
            }
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.sizeBeforeLF:
          {
            assertCurrentChar(10, "LF");
            this[_state] = this[_size] === 0 ? src__chunked_coding__decoder._State.endBeforeCR : src__chunked_coding__decoder._State.body;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.body:
          {
            let chunkEnd = math.min(core.int, end, dart.notNull(start) + dart.notNull(this[_size]));
            buffer.addAll(bytes, start, chunkEnd);
            this[_size] = dart.notNull(this[_size]) - (chunkEnd - dart.notNull(start));
            start = chunkEnd;
            if (this[_size] === 0) this[_state] = src__chunked_coding__decoder._State.bodyBeforeCR;
            break;
          }
          case src__chunked_coding__decoder._State.bodyBeforeCR:
          {
            assertCurrentChar(13, "CR");
            this[_state] = src__chunked_coding__decoder._State.bodyBeforeLF;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.bodyBeforeLF:
          {
            assertCurrentChar(10, "LF");
            this[_state] = src__chunked_coding__decoder._State.boundary;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.endBeforeCR:
          {
            assertCurrentChar(13, "CR");
            this[_state] = src__chunked_coding__decoder._State.endBeforeLF;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.endBeforeLF:
          {
            assertCurrentChar(10, "LF");
            this[_state] = src__chunked_coding__decoder._State.end;
            start = dart.notNull(start) + 1;
            break;
          }
          case src__chunked_coding__decoder._State.end:
          {
            dart.throw(new core.FormatException.new("Expected no more data.", bytes, start));
          }
        }
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    [_digitForByte](bytes, index) {
      let byte = bytes[$_get](index);
      let digit = (48 ^ dart.notNull(byte)) >>> 0;
      if (digit <= 9) {
        if (digit >= 0) return digit;
      } else {
        let letter = (32 | dart.notNull(byte)) >>> 0;
        if (97 <= letter && letter <= 102) return letter - 97 + 10;
      }
      dart.throw(new core.FormatException.new(dart.str`Invalid hexadecimal byte 0x${byte[$toRadixString](16)[$toUpperCase]()}.`, bytes, index));
    }
  };
  (src__chunked_coding__decoder._Sink.new = function(sink) {
    this[_state] = src__chunked_coding__decoder._State.boundary;
    this[_size] = null;
    this[_sink] = sink;
    src__chunked_coding__decoder._Sink.__proto__.new.call(this);
  }).prototype = src__chunked_coding__decoder._Sink.prototype;
  dart.addTypeTests(src__chunked_coding__decoder._Sink);
  dart.setMethodSignature(src__chunked_coding__decoder._Sink, () => ({
    __proto__: dart.getMethods(src__chunked_coding__decoder._Sink.__proto__),
    add: dart.fnType(dart.void, [core.Object]),
    close: dart.fnType(dart.void, []),
    [_close]: dart.fnType(dart.void, [], [ListOfint(), core.int]),
    [_decode]: dart.fnType(typed_data.Uint8List, [ListOfint(), core.int, core.int]),
    [_digitForByte]: dart.fnType(core.int, [ListOfint(), core.int])
  }));
  dart.setFieldSignature(src__chunked_coding__decoder._Sink, () => ({
    __proto__: dart.getFields(src__chunked_coding__decoder._Sink.__proto__),
    [_sink]: dart.finalFieldType(SinkOfListOfint()),
    [_state]: dart.fieldType(src__chunked_coding__decoder._State),
    [_size]: dart.fieldType(core.int)
  }));
  const _name = Symbol('_name');
  src__chunked_coding__decoder._State = class _State extends core.Object {
    toString() {
      return this[_name];
    }
  };
  (src__chunked_coding__decoder._State.__ = function(name) {
    this[_name] = name;
  }).prototype = src__chunked_coding__decoder._State.prototype;
  dart.addTypeTests(src__chunked_coding__decoder._State);
  dart.setFieldSignature(src__chunked_coding__decoder._State, () => ({
    __proto__: dart.getFields(src__chunked_coding__decoder._State.__proto__),
    [_name]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__chunked_coding__decoder._State, ['toString']);
  dart.defineLazy(src__chunked_coding__decoder._State, {
    /*src__chunked_coding__decoder._State.boundary*/get boundary() {
      return dart.const(new src__chunked_coding__decoder._State.__("boundary"));
    },
    /*src__chunked_coding__decoder._State.size*/get size() {
      return dart.const(new src__chunked_coding__decoder._State.__("size"));
    },
    /*src__chunked_coding__decoder._State.sizeBeforeLF*/get sizeBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("size before LF"));
    },
    /*src__chunked_coding__decoder._State.body*/get body() {
      return dart.const(new src__chunked_coding__decoder._State.__("body"));
    },
    /*src__chunked_coding__decoder._State.bodyBeforeCR*/get bodyBeforeCR() {
      return dart.const(new src__chunked_coding__decoder._State.__("body before CR"));
    },
    /*src__chunked_coding__decoder._State.bodyBeforeLF*/get bodyBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("body before LF"));
    },
    /*src__chunked_coding__decoder._State.endBeforeCR*/get endBeforeCR() {
      return dart.const(new src__chunked_coding__decoder._State.__("end before CR"));
    },
    /*src__chunked_coding__decoder._State.endBeforeLF*/get endBeforeLF() {
      return dart.const(new src__chunked_coding__decoder._State.__("end before LF"));
    },
    /*src__chunked_coding__decoder._State.end*/get end() {
      return dart.const(new src__chunked_coding__decoder._State.__("end"));
    }
  });
  dart.trackLibraries("packages/http_parser/src/chunked_coding/decoder.ddc", {
    "package:http_parser/src/chunked_coding/decoder.dart": src__chunked_coding__decoder
  }, '{"version":3,"sourceRoot":"","sources":["decoder.dart"],"names":[],"mappings":"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","file":"decoder.ddc.js"}');
  // Exports:
  return {
    src__chunked_coding__decoder: src__chunked_coding__decoder
  };
});

//# sourceMappingURL=decoder.ddc.js.map
