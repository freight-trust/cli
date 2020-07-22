"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
class SHH {
    constructor(connection) {
        this.connection = connection;
    }
    async shh_addToGroup(identity) {
        return this.connection.rpc.send('shh_addToGroup', utils_1.hex(identity));
    }
    async shh_getFilterChanges(filterID) {
        return this.connection.rpc.send('shh_getFilterChanges', utils_1.hex(filterID));
    }
    async shh_getMessages(filterID) {
        return this.connection.rpc.send('shh_getMessages', utils_1.hex(filterID));
    }
    async hasIdentity(identity) {
        return this.connection.rpc.send('shh_hasIdentity', utils_1.hex(identity));
    }
    // async shh_newFilter() {
    //   return this.rpc.send('shh_newFilter');
    // }
    async newGroup() {
        return this.connection.rpc.send('shh_newGroup');
    }
    async newIdentity() {
        return this.connection.rpc.send('shh_newIdentity');
    }
    // async shh_post() {
    //   return this.rpc.send('shh_post');
    // }
    async uninstallFilter(filterID) {
        return this.connection.rpc.send('shh_uninstallFilter', utils_1.hex(filterID));
    }
    async version() {
        return this.connection.rpc.send('shh_version');
    }
}
exports.default = SHH;
//# sourceMappingURL=index.js.map