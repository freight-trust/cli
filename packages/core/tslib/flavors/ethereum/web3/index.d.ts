import { Provider } from '../../../rpc';
export default class WEB3 {
    connection: Provider;
    constructor(connection: Provider);
    clientVersion(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    sha3(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
}
//# sourceMappingURL=index.d.ts.map