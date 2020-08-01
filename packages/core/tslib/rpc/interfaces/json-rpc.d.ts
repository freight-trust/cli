export interface BaseRpcResponse {
    id: number;
    jsonrpc: '2.0';
}
export interface RPCSuccess extends BaseRpcResponse {
    result: string | boolean;
}
export interface RPCError extends BaseRpcResponse {
    error: string;
}
export declare type RPCResponse = RPCSuccess | RPCError;
export declare type RPCTAG = 'latest' | 'earliest' | 'pending';
export interface Filter {
    fromBlock: number | RPCTAG;
    toBlock: number | RPCTAG;
    address: string | string[];
    topics: string[];
}
export interface Log extends Filter {
    blockhash: string;
}
export interface Call {
    from?: string;
    to?: string;
    gas?: string;
    gasPrice?: string;
    value?: string;
    data?: string;
}
export interface Transaction extends Call {
    nonce?: number;
}
export declare type JSON_RPC_METHOD = 'db_getHex' | 'db_getString' | 'db_putHex' | 'db_putString' | 'eth_accounts' | 'eth_blockNumber' | 'eth_call' | 'eth_coinbase' | 'eth_compileLLL' | 'eth_compileSerpent' | 'eth_compileSolidity' | 'eth_estimateGas' | 'eth_gasPrice' | 'eth_getBalance' | 'eth_getBlockByHash' | 'eth_getBlockByNumber' | 'eth_getBlockTransactionCountByHash' | 'eth_getBlockTransactionCountByNumber' | 'eth_getCode' | 'eth_getCompilers' | 'eth_getFilterChanges' | 'eth_getFilterLogs' | 'eth_getLogs' | 'eth_getProof' | 'eth_getStorageAt' | 'eth_getTransactionByBlockHashAndIndex' | 'eth_getTransactionByBlockNumberAndIndex' | 'eth_getTransactionByHash' | 'eth_getTransactionCount' | 'eth_getTransactionReceipt' | 'eth_getUncleByBlockHashAndIndex' | 'eth_getUncleByBlockNumberAndIndex' | 'eth_getUncleCountByBlockHash' | 'eth_getUncleCountByBlockNumber' | 'eth_getWork' | 'eth_hashrate' | 'eth_mining' | 'eth_newBlockFilter' | 'eth_newFilter' | 'eth_newPendingTransactionFilter' | 'eth_pendingTransactions' | 'eth_protocolVersion' | 'eth_sendRawTransaction' | 'eth_sendTransaction' | 'eth_sign' | 'eth_submitHashrate' | 'eth_submitWork' | 'eth_syncing' | 'eth_uninstallFilter' | 'net_listening' | 'net_peerCount' | 'net_version' | 'shh_addToGroup' | 'shh_getFilterChanges' | 'shh_getMessages' | 'shh_hasIdentity' | 'shh_newFilter' | 'shh_newGroup' | 'shh_newIdentity' | 'shh_post' | 'shh_uninstallFilter' | 'shh_version' | 'web3_clientVersion' | 'web3_sha3';
//# sourceMappingURL=json-rpc.d.ts.map
