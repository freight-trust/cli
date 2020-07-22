import { RPCResponse, RPCError, JSON_RPC_METHOD } from '../interfaces/json-rpc';
export declare const isRPCError: (response: RPCResponse) => response is RPCError;
export declare const rpc: (method: JSON_RPC_METHOD, params: any[]) => string;
//# sourceMappingURL=index.d.ts.map