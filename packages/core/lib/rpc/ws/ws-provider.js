"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WSProvider = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("../utils");
const ws_1 = tslib_1.__importDefault(require("ws"));
class WSProvider {
    constructor(host = 'ws://0.0.0.0', port = 8545, keepAlive = false) {
        this.connect(host, port, keepAlive);
    }
    connect(host, port, keepAlive) {
        this.close();
        this.host = host;
        this.port = port;
        this.keepAlive = keepAlive;
        this.connected = new Promise((resolve, reject) => {
            this.ws = new ws_1.default(`${host}:${port}`);
            this.ws
                .on('error', e => reject(e.toString()))
                .on('close', () => console.log('WebSocket connection closed.'))
                .on('open', resolve);
        });
    }
    close() {
        var _a;
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.close();
        this.ws = undefined;
    }
    cleanUp() {
        if (!this.keepAlive) {
            this.close();
        }
    }
    async send(method, params = []) {
        await this.connected;
        return new Promise((resolve, reject) => {
            var _a;
            (_a = this.ws) === null || _a === void 0 ? void 0 : _a.once('message', data => {
                resolve(data);
                this.cleanUp();
            }).once('error', data => {
                reject(data);
                this.cleanUp();
            }).send(utils_1.rpc(method, params));
        });
    }
}
exports.WSProvider = WSProvider;
//# sourceMappingURL=ws-provider.js.map