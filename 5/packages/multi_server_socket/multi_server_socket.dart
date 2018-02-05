// Copyright (c) 2017, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:async';
import 'dart:io';

import 'package:async/async.dart';

import 'src/utils.dart';

/// The error code for an error caused by a port already being in use.
final int _addressInUseErrno = () {
  if (Platform.isWindows) return 10048;
  if (Platform.isMacOS) return 48;
  assert(Platform.isLinux);
  return 98;
}();

/// An implementation of `dart:io`'s [ServerSocket] that wraps multiple servers
/// and forwards methods to all of them.
///
/// This is useful for listening on multiple network interfaces while still
/// having a unified way of controlling the servers. In particular, it supports
/// serving on both the IPv4 and IPv6 loopback addresses using
/// [MultiServerSocket.loopback].
class MultiServerSocket extends StreamView<Socket> implements ServerSocket {
  /// The wrapped servers.
  final Set<ServerSocket> _servers;

  /// Returns the port that one of the wrapped servers is listening on.
  ///
  /// If the wrapped servers are listening on different ports, it's not defined
  /// which port is returned.
  int get port => _servers.first.port;

  /// Returns the address that one of the wrapped servers is listening on.
  ///
  /// If the wrapped servers are listening on different addresses, it's not
  /// defined which address is returned.
  InternetAddress get address => _servers.first.address;

  /// Creates a [MultiServerSocket] wrapping [servers].
  ///
  /// None of the servers should be listened to when this is called.
  MultiServerSocket(Iterable<ServerSocket> servers)
      : _servers = servers.toSet(),
        super(StreamGroup.merge(servers));

  /// Creates a [ServerSocket] listening on all available loopback addresses for
  /// this computer.
  ///
  /// See [ServerSocket.bind].
  static Future<ServerSocket> loopback(int port,
      {int backlog, bool v6Only: false, bool shared: false}) {
    backlog ??= 0;

    return _loopback(port, 5, backlog, v6Only, shared);
  }

  /// A helper method for initializing loopback servers.
  static Future<ServerSocket> _loopback(int port, int remainingRetries,
      int backlog, bool v6Only, bool shared) async {
    if (!await supportsIPv4) {
      return await ServerSocket.bind(InternetAddress.LOOPBACK_IP_V6, port,
          backlog: backlog, v6Only: v6Only, shared: shared);
    }

    var v4Server = await ServerSocket.bind(InternetAddress.LOOPBACK_IP_V4, port,
        backlog: backlog, v6Only: v6Only, shared: shared);
    if (!await supportsIPv6) return v4Server;

    try {
      // Reuse the IPv4 server's port so that if [port] is 0, both servers use
      // the same ephemeral port.
      var v6Server = await ServerSocket.bind(
          InternetAddress.LOOPBACK_IP_V6, v4Server.port,
          backlog: backlog, v6Only: v6Only, shared: shared);
      return new MultiServerSocket([v4Server, v6Server]);
    } on SocketException catch (error) {
      if (error.osError.errorCode != _addressInUseErrno) rethrow;
      if (port != 0) rethrow;
      if (remainingRetries == 0) rethrow;

      // A port being available on IPv4 doesn't necessarily mean that the same
      // port is available on IPv6. If it's not (which is rare in practice),
      // we try again until we find one that's available on both.
      v4Server.close();
      return await _loopback(
          port, remainingRetries - 1, backlog, v6Only, shared);
    }
  }

  Future<ServerSocket> close() =>
      Future.wait(_servers.map((server) => server.close())).then((_) => this);
}
