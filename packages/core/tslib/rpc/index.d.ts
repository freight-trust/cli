import { HTTPProvider } from './http/http-provider';
import { JSON_RPC_METHOD } from './interfaces/json-rpc';
import { WSProvider } from './ws/ws-provider';
export interface Provider {
    rpc: RPC;
}
export default class RPC {
    host: string;
    port: number;
    provider: HTTPProvider | WSProvider;
    constructor(host?: string, port?: number);
    send(method: JSON_RPC_METHOD, ...params: any[]): Promise<import("./interfaces/json-rpc").RPCResponse>;
}
//# sourceMappingURL=index.d.ts.map