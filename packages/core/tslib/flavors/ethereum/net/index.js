"use strict";
Object.defineProperty(exports, "__esModule", {value : true});
class NET {
  constructor(connection) { this.connection = connection; }
  async listening() { return this.connection.rpc.send('net_listening'); }
  async version() { return this.connection.rpc.send('net_version'); }
  async peerCount() { return this.connection.rpc.send('net_peerCount'); }
}
exports.default = NET;
//# sourceMappingURL=index.js.map