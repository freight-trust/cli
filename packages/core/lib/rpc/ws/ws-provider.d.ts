import { JSON_RPC_METHOD, RPCResponse } from '../interfaces/json-rpc';
import WebSocket from 'ws';
export declare class WSProvider {
    host: string;
    port: number;
    ws?: WebSocket;
    connected: Promise<void>;
    keepAlive: boolean;
    constructor(host?: string, port?: number, keepAlive?: boolean);
    connect(host: string, port: number, keepAlive: boolean): void;
    close(): void;
    private cleanUp;
    send(method: JSON_RPC_METHOD, params?: any[]): Promise<RPCResponse>;
}
//# sourceMappingURL=ws-provider.d.ts.map
