import { ETH, SHH, WEB3, DB, NET } from './flavors/ethereum';
import { Provider } from './rpc';
export declare class ftcli {
    provider: Provider;
    eth: ETH;
    shh: SHH;
    web3: WEB3;
    db: DB;
    net: NET;
    constructor(host?: string, port?: number);
    connection(host: string, port: number): Provider;
    enableEthereum(): void;
}
//# sourceMappingURL=index.d.ts.map
