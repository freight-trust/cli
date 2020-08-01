import { Provider } from '../../../rpc';
export default class NET {
    connection: Provider;
    constructor(connection: Provider);
    listening(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    version(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    peerCount(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
}
//# sourceMappingURL=index.d.ts.map
