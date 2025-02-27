import Exchange from './abstract/zonda.js';
import { Int, OrderSide, OrderType } from './base/types.js';
/**
 * @class zonda
 * @extends Exchange
 */
export default class zonda extends Exchange {
    describe(): any;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    parseOrder(order: any, market?: any): import("./base/types.js").Order;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTicker(symbol: any, params?: {}): Promise<import("./base/types.js").Ticker>;
    fetchTickers(symbols?: string[], params?: {}): Promise<import("./base/types.js").Dictionary<import("./base/types.js").Ticker>>;
    fetchLedger(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseLedgerEntry(item: any, currency?: any): {
        info: any;
        id: string;
        direction: string;
        account: any;
        referenceId: string;
        referenceAccount: any;
        type: string;
        currency: any;
        amount: number;
        before: number;
        after: number;
        status: string;
        timestamp: number;
        datetime: string;
        fee: any;
    };
    parseLedgerEntryType(type: any): string;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<import("./base/types.js").Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    isFiat(currency: any): any;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: string;
        network: any;
        info: any;
    };
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: string;
        network: any;
        info: any;
    }>;
    fetchDepositAddresses(codes?: any, params?: {}): Promise<{}>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        info: any;
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: string;
        toAccount: string;
        status: string;
    }>;
    parseTransfer(transfer: any, currency?: any): {
        info: any;
        id: any;
        timestamp: any;
        datetime: any;
        currency: any;
        amount: any;
        fromAccount: string;
        toAccount: string;
        status: string;
    };
    parseTransferStatus(status: any): string;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        id: string;
        txid: any;
        timestamp: any;
        datetime: any;
        network: any;
        addressFrom: any;
        address: any;
        addressTo: any;
        amount: any;
        type: any;
        currency: any;
        status: any;
        updated: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: any;
        fee: any;
        info: any;
    }>;
    parseTransaction(transaction: any, currency?: any): {
        id: string;
        txid: any;
        timestamp: any;
        datetime: any;
        network: any;
        addressFrom: any;
        address: any;
        addressTo: any;
        amount: any;
        type: any;
        currency: any;
        status: any;
        updated: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: any;
        fee: any;
        info: any;
    };
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
