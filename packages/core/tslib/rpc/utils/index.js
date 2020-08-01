"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rpc = exports.isRPCError = void 0;
exports.isRPCError = (response) =>
  Object.prototype.hasOwnProperty.call(response, "error");
let id = 0;
exports.rpc = (method, params) =>
  JSON.stringify({
    id: id++,
    jsonrpc: "2.0",
    method,
    params,
  });
//# sourceMappingURL=index.js.map
