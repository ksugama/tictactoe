import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../tictactoe/params";
import { GameId } from "../tictactoe/game_id";
import { GameState } from "../tictactoe/game_state";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "ksugama.tictactoe.tictactoe";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetGameIdRequest {
}
export interface QueryGetGameIdResponse {
    GameId: GameId | undefined;
}
export interface QueryGetGameStateRequest {
    index: string;
}
export interface QueryGetGameStateResponse {
    gameState: GameState | undefined;
}
export interface QueryAllGameStateRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllGameStateResponse {
    gameState: GameState[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetGameIdRequest: {
    encode(_: QueryGetGameIdRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetGameIdRequest;
    fromJSON(_: any): QueryGetGameIdRequest;
    toJSON(_: QueryGetGameIdRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetGameIdRequest>): QueryGetGameIdRequest;
};
export declare const QueryGetGameIdResponse: {
    encode(message: QueryGetGameIdResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetGameIdResponse;
    fromJSON(object: any): QueryGetGameIdResponse;
    toJSON(message: QueryGetGameIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetGameIdResponse>): QueryGetGameIdResponse;
};
export declare const QueryGetGameStateRequest: {
    encode(message: QueryGetGameStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetGameStateRequest;
    fromJSON(object: any): QueryGetGameStateRequest;
    toJSON(message: QueryGetGameStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetGameStateRequest>): QueryGetGameStateRequest;
};
export declare const QueryGetGameStateResponse: {
    encode(message: QueryGetGameStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetGameStateResponse;
    fromJSON(object: any): QueryGetGameStateResponse;
    toJSON(message: QueryGetGameStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetGameStateResponse>): QueryGetGameStateResponse;
};
export declare const QueryAllGameStateRequest: {
    encode(message: QueryAllGameStateRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllGameStateRequest;
    fromJSON(object: any): QueryAllGameStateRequest;
    toJSON(message: QueryAllGameStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllGameStateRequest>): QueryAllGameStateRequest;
};
export declare const QueryAllGameStateResponse: {
    encode(message: QueryAllGameStateResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllGameStateResponse;
    fromJSON(object: any): QueryAllGameStateResponse;
    toJSON(message: QueryAllGameStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllGameStateResponse>): QueryAllGameStateResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a GameId by index. */
    GameId(request: QueryGetGameIdRequest): Promise<QueryGetGameIdResponse>;
    /** Queries a GameState by index. */
    GameState(request: QueryGetGameStateRequest): Promise<QueryGetGameStateResponse>;
    /** Queries a list of GameState items. */
    GameStateAll(request: QueryAllGameStateRequest): Promise<QueryAllGameStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    GameId(request: QueryGetGameIdRequest): Promise<QueryGetGameIdResponse>;
    GameState(request: QueryGetGameStateRequest): Promise<QueryGetGameStateResponse>;
    GameStateAll(request: QueryAllGameStateRequest): Promise<QueryAllGameStateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
