"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
class DB {
    constructor(connection) {
        this.connection = connection;
    }
    async putString(dbName, key, value) {
        return this.connection.rpc.send('db_putString', dbName, key, value);
    }
    async getString(dbName, key) {
        return this.connection.rpc.send('db_putString', dbName, key);
    }
    async putHex(dbName, key, value) {
        return this.connection.rpc.send('db_putString', dbName, key, utils_1.hex(value));
    }
    async getHex(dbName, key) {
        return this.connection.rpc.send('db_putString', dbName, key);
    }
}
exports.default = DB;
//# sourceMappingURL=index.js.map