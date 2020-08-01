import { Provider } from '../../../rpc';
export default class DB {
    connection: Provider;
    constructor(connection: Provider);
    putString(dbName: string, key: string, value: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getString(dbName: string, key: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    putHex(dbName: string, key: string, value: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getHex(dbName: string, key: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
}
//# sourceMappingURL=index.d.ts.map
