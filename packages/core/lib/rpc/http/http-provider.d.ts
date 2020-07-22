import { JSON_RPC_METHOD, RPCResponse } from '../interfaces/json-rpc';
export declare class HTTPProvider {
    host: string;
    port: number;
    constructor(host?: string, port?: number);
    send(method: JSON_RPC_METHOD, params?: any[]): Promise<RPCResponse>;
}
//# sourceMappingURL=http-provider.d.ts.map