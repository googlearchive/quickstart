define(['dart_sdk', 'packages/stream_channel/src/close_guarantee_channel'], function(dart_sdk, close_guarantee_channel) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const js_util = dart_sdk.js_util;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stream_channel_controller = close_guarantee_channel.src__stream_channel_controller;
  const stream_channel = close_guarantee_channel.stream_channel;
  const _root = Object.create(null);
  const src__runner__browser__post_message_channel = Object.create(_root);
  const $origin = dartx.origin;
  const $location = dartx.location;
  const $data = dartx.data;
  const $onMessage = dartx.onMessage;
  let MessageEventToNull = () => (MessageEventToNull = dart.constFn(dart.fnType(core.Null, [html.MessageEvent])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let VoidToStreamChannel = () => (VoidToStreamChannel = dart.constFn(dart.fnType(stream_channel.StreamChannel, [])))();
  src__runner__browser__post_message_channel.postMessageChannel = function() {
    let controller = new src__stream_channel_controller.StreamChannelController.new({sync: true});
    html.window[$onMessage].listen(dart.fn(message => {
      if (message.origin != html.window[$location][$origin]) return;
      message.stopPropagation();
      controller.local.sink.add(message[$data]);
    }, MessageEventToNull()));
    controller.local.stream.listen(dart.fn(data => {
      dart.global.window.parent.postMessage(js_util.jsify(new (IdentityMapOfString$dynamic()).from(["href", html.window[$location].href, "data", data])), html.window[$location][$origin]);
    }, dynamicToNull()));
    dart.global.window.parent.postMessage(js_util.jsify(new (IdentityMapOfString$Object()).from(["href", html.window[$location].href, "ready", true])), html.window[$location][$origin]);
    return controller.foreign;
  };
  dart.fn(src__runner__browser__post_message_channel.postMessageChannel, VoidToStreamChannel());
  dart.trackLibraries("packages/test/src/runner/browser/post_message_channel.ddc", {
    "package:test/src/runner/browser/post_message_channel.dart": src__runner__browser__post_message_channel
  }, '{"version":3,"sourceRoot":"","sources":["post_message_channel.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAoBE,QAAI,aAAa,IAAI,0DAAuB,QAAO;AAEnD,eAAM,YAAU,OAAO,CAAC,QAAC,OAAO;AAK9B,UAAI,OAAO,OAAO,IAAI,WAAM,WAAS,SAAO,EAAE;AAC9C,aAAO,gBAAgB;AAEvB,gBAAU,MAAM,KAAK,IAAI,CAAC,OAAO,OAAK;;AAGxC,cAAU,MAAM,OAAO,OAAO,CAAC,QAAC,IAAI;AAGlC,2CAAkB,CAAC,aAAK,CAAC,0CAAC,QAAQ,WAAM,WAAS,KAAK,EAAE,QAAQ,IAAI,KAChE,WAAM,WAAS,SAAO;;AAK5B,yCAAkB,CAAC,aAAK,CAAC,yCAAC,QAAQ,WAAM,WAAS,KAAK,EAAE,SAAS,SAC7D,WAAM,WAAS,SAAO;AAE1B,UAAO,WAAU,QAAQ;EAC3B","file":"post_message_channel.ddc.js"}');
  // Exports:
  return {
    src__runner__browser__post_message_channel: src__runner__browser__post_message_channel
  };
});

//# sourceMappingURL=post_message_channel.ddc.js.map
