"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ftcli = void 0;
const tslib_1 = require("tslib");
const ethereum_1 = require("./flavors/ethereum");
const rpc_1 = tslib_1.__importDefault(require("./rpc"));
class ftcli {
    constructor(host = 'http://0.0.0.0', port = 8545) {
        this.connection(host, port);
        this.enableEthereum();
    }
    connection(host, port) {
        this.provider = {
            rpc: new rpc_1.default(host, port),
        };
        return this.provider;
    }
    enableEthereum() {
        this.shh = new ethereum_1.SHH(this.provider);
        this.eth = new ethereum_1.ETH(this.provider);
        this.web3 = new ethereum_1.WEB3(this.provider);
        this.db = new ethereum_1.DB(this.provider);
        this.net = new ethereum_1.NET(this.provider);
    }
}
exports.ftcli = ftcli;
//# sourceMappingURL=index.js.map