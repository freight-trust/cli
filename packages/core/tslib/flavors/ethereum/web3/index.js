"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WEB3 {
    constructor(connection) {
        this.connection = connection;
    }
    async clientVersion() {
        return this.connection.rpc.send('web3_clientVersion');
    }
    async sha3() {
        return this.connection.rpc.send('web3_sha3');
    }
}
exports.default = WEB3;
//# sourceMappingURL=index.js.map