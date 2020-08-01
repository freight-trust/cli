"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPProvider = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../utils");
const got_1 = tslib_1.__importDefault(require("got"));
class HTTPProvider {
  constructor(host = "http://0.0.0.0", port = 8545) {
    this.host = host;
    this.port = port;
  }
  async send(method, params = []) {
    try {
      const data = await got_1.default
        .post(`${this.host}:${this.port}`, {
          body: utils_1.rpc(method, params),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .json();
      return data;
    } catch (error) {
      return error.toString();
    }
  }
}
exports.HTTPProvider = HTTPProvider;
//# sourceMappingURL=http-provider.js.map
