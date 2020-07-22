import { Provider } from '../../../rpc';
export default class SHH {
    connection: Provider;
    constructor(connection: Provider);
    shh_addToGroup(identity: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    shh_getFilterChanges(filterID: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    shh_getMessages(filterID: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    hasIdentity(identity: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    newGroup(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    newIdentity(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    uninstallFilter(filterID: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    version(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
}
//# sourceMappingURL=index.d.ts.map