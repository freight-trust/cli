"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils");
class ETH {
  constructor(connection) {
    this.connection = connection;
  }
  async accounts() {
    return this.connection.rpc.send("eth_accounts");
  }
  async blockNumber() {
    return this.connection.rpc.send("eth_blockNumber");
  }
  async call(transaction, blockNumber) {
    return this.connection.rpc.send(
      "eth_call",
      transaction,
      utils_1.hexOrQuantifier(blockNumber)
    );
  }
  async coinbase() {
    return this.connection.rpc.send("eth_coinbase");
  }
  // 'eth_compileLLL' | DEPRECATED
  // 'eth_compileSerpent' | DEPRECATED
  // 'eth_compileSolidity' | DEPRECATED
  async estimateGas(transaction, blockNumber) {
    return this.connection.rpc.send(
      "eth_estimateGas",
      transaction,
      blockNumber
    );
  }
  async gasPrice() {
    return this.connection.rpc.send("eth_gasPrice");
  }
  async getBalance(address, blockNumberOrTag) {
    return this.connection.rpc.send(
      "eth_getBlockByHash",
      address,
      utils_1.hexOrQuantifier(blockNumberOrTag)
    );
  }
  async getBlockByHash(blockHash, includeTransactions = false) {
    return this.connection.rpc.send(
      "eth_getBlockByHash",
      utils_1.hexOrQuantifier(blockHash),
      includeTransactions
    );
  }
  async getBlockByNumber(blockNumber, includeTransactions = false) {
    return this.connection.rpc.send(
      "eth_getBlockByNumber",
      utils_1.hexOrQuantifier(blockNumber),
      includeTransactions
    );
  }
  async getBlockTransactionCountByHash(blockHash) {
    return this.connection.rpc.send(
      "eth_getBlockTransactionCountByHash",
      utils_1.hex(blockHash)
    );
  }
  async getBlockTransactionCountByNumber(blockNumber) {
    return this.connection.rpc.send(
      "eth_getBlockTransactionCountByNumber",
      utils_1.hexOrQuantifier(blockNumber)
    );
  }
  async getCode(address, tag) {
    return this.connection.rpc.send("eth_getCode", address, tag);
  }
  // 'eth_getCompilers' | DEPRECATED
  async getFilterChanges(filterId) {
    return this.connection.rpc.send(
      "eth_getFilterChanges",
      utils_1.hex(filterId)
    );
  }
  async getFilterLogs(filterId) {
    return this.connection.rpc.send("eth_getFilterLogs", utils_1.hex(filterId));
  }
  async getLogs(log) {
    return this.connection.rpc.send("eth_getLogs", log);
  }
  async getProof(address, storageKeys, blockNumber) {
    return this.connection.rpc.send(
      "eth_getProof",
      address,
      storageKeys,
      blockNumber
    );
  }
  async getStorageAt(address, index, blockNumber) {
    return this.connection.rpc.send(
      "eth_getStorageAt",
      address,
      index,
      blockNumber
    );
  }
  async getTransactionByBlockHashAndIndex(hash, transactionIndex) {
    return this.connection.rpc.send(
      "eth_getTransactionByBlockHashAndIndex",
      hash,
      utils_1.hex(transactionIndex)
    );
  }
  async getTransactionByBlockNumberAndIndex(blockNumber, transactionIndex) {
    return this.connection.rpc.send(
      "eth_getBlockTransactionCountByHash",
      utils_1.hexOrQuantifier(blockNumber),
      utils_1.hex(transactionIndex)
    );
  }
  async getTransactionByHash(hash) {
    return this.connection.rpc.send("eth_getTransactionByHash", hash);
  }
  async getTransactionCount(address, blockNumber) {
    return this.connection.rpc.send(
      "eth_getTransactionCount",
      address,
      blockNumber
    );
  }
  async getTransactionReceipt(hash) {
    return this.connection.rpc.send("eth_getTransactionReceipt", hash);
  }
  async getUncleByBlockHashAndIndex(hash, uncleIndex) {
    return this.connection.rpc.send(
      "eth_getUncleByBlockHashAndIndex",
      hash,
      utils_1.hex(uncleIndex)
    );
  }
  async getUncleByBlockNumberAndIndex(blockNumber, transactionIndex) {
    return this.connection.rpc.send(
      "eth_getUncleByBlockNumberAndIndex",
      utils_1.hexOrQuantifier(blockNumber),
      utils_1.hex(transactionIndex)
    );
  }
  async getUncleCountByBlockHash(hash) {
    return this.connection.rpc.send("eth_getUncleCountByBlockHash", hash);
  }
  async getUncleCountByBlockNumber(blockNumber) {
    return this.connection.rpc.send(
      "eth_getUncleCountByBlockNumber",
      utils_1.hexOrQuantifier(blockNumber)
    );
  }
  async getWork() {
    return this.connection.rpc.send("eth_getWork");
  }
  async hashrate() {
    return this.connection.rpc.send("eth_hashrate");
  }
  async mining() {
    return this.connection.rpc.send("eth_mining");
  }
  async newBlockFilter() {
    return this.connection.rpc.send("eth_newBlockFilter");
  }
  async newFilter(filter) {
    return this.connection.rpc.send("eth_newFilter", filter);
  }
  async newPendingTransactionFilter() {
    return this.connection.rpc.send("eth_newPendingTransactionFilter");
  }
  async pendingTransactions() {
    return this.connection.rpc.send("eth_pendingTransactions");
  }
  async protocolVersion() {
    return this.connection.rpc.send("eth_protocolVersion");
  }
  async sendRawTransaction(data) {
    return this.connection.rpc.send(
      "eth_sendRawTransaction",
      utils_1.hex(data)
    );
  }
  async sendTransaction(transaction) {
    return this.connection.rpc.send("eth_sendTransaction", transaction);
  }
  async sign(address, message) {
    return this.connection.rpc.send("eth_sign", address, message);
  }
  async submitHashrate(hashrate, clientID) {
    return this.connection.rpc.send("eth_submitHashrate", hashrate, clientID);
  }
  async submitWork(nonce, powHash, digest) {
    return this.connection.rpc.send(
      "eth_submitWork",
      utils_1.hex(nonce),
      utils_1.hex(powHash),
      utils_1.hex(digest)
    );
  }
  async uninstallFilter(filterId) {
    return this.connection.rpc.send(
      "eth_uninstallFilter",
      utils_1.hex(filterId)
    );
  }
  async syncing() {
    return this.connection.rpc.send("eth_syncing");
  }
}
exports.default = ETH;
//# sourceMappingURL=index.js.map
