"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const http_provider_1 = require("./http/http-provider");
const ws_provider_1 = require("./ws/ws-provider");
const provider = (host, port) => {
  return new (host.startsWith("http")
    ? http_provider_1.HTTPProvider
    : ws_provider_1.WSProvider)(host, port);
};
class RPC {
  constructor(host = "http://0.0.0.0", port = 8545) {
    this.host = host;
    this.port = port;
    try {
      this.provider = provider(host, port);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async send(method, ...params) {
    var _a;
    return (_a = this.provider) === null || _a === void 0
      ? void 0
      : _a.send(method, params);
  }
}
exports.default = RPC;
//# sourceMappingURL=index.js.map
