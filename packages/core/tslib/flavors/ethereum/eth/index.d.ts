import { RPCTAG, Call, Log, Filter, Transaction } from '../../../rpc/interfaces/json-rpc';
import { Provider } from '../../../rpc';
export default class ETH {
    connection: Provider;
    constructor(connection: Provider);
    accounts(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    blockNumber(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    call(transaction: Call, blockNumber: number | RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    coinbase(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    estimateGas(transaction: Call, blockNumber: number | RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    gasPrice(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getBalance(address: string, blockNumberOrTag: number | RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getBlockByHash(blockHash: string, includeTransactions?: boolean): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getBlockByNumber(blockNumber: string | number | RPCTAG, includeTransactions?: boolean): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getBlockTransactionCountByHash(blockHash: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getBlockTransactionCountByNumber(blockNumber: string | number | RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getCode(address: string, tag: RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getFilterChanges(filterId: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getFilterLogs(filterId: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getLogs(log: Log): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getProof(address: string, storageKeys: string[], blockNumber: number | RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getStorageAt(address: string, index: number, blockNumber: number | RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getTransactionByBlockHashAndIndex(hash: string, transactionIndex: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getTransactionByBlockNumberAndIndex(blockNumber: string | number | RPCTAG, transactionIndex: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getTransactionByHash(hash: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getTransactionCount(address: string, blockNumber: number | RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getTransactionReceipt(hash: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getUncleByBlockHashAndIndex(hash: string, uncleIndex: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getUncleByBlockNumberAndIndex(blockNumber: string | number | RPCTAG, transactionIndex: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getUncleCountByBlockHash(hash: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getUncleCountByBlockNumber(blockNumber: string | number | RPCTAG): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    getWork(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    hashrate(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    mining(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    newBlockFilter(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    newFilter(filter: Filter): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    newPendingTransactionFilter(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    pendingTransactions(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    protocolVersion(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    sendRawTransaction(data: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    sendTransaction(transaction: Transaction): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    sign(address: string, message: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    submitHashrate(hashrate: string, clientID: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    submitWork(nonce: string, powHash: string, digest: string): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    uninstallFilter(filterId: number): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
    syncing(): Promise<import("../../../rpc/interfaces/json-rpc").RPCResponse>;
}
//# sourceMappingURL=index.d.ts.map