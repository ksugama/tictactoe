import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "ksugama.tictactoe.tictactoe";
export interface MsgCreateGame {
    creator: string;
    opponent: string;
}
export interface MsgCreateGameResponse {
    gameId: string;
}
export interface MsgAcceptGame {
    creator: string;
    gameId: string;
}
export interface MsgAcceptGameResponse {
    result: string;
}
export interface MsgMakeMove {
    creator: string;
    gameId: string;
    posX: number;
    posY: number;
}
export interface MsgMakeMoveResponse {
    result: string;
}
export interface MsgCheckGame {
    creator: string;
    gameId: string;
    board: string;
}
export interface MsgCheckGameResponse {
    winner: string;
}
export interface MsgMyGames {
    creator: string;
}
export interface MsgMyGamesResponse {
    games: string[];
}
export declare const MsgCreateGame: {
    encode(message: MsgCreateGame, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateGame;
    fromJSON(object: any): MsgCreateGame;
    toJSON(message: MsgCreateGame): unknown;
    fromPartial(object: DeepPartial<MsgCreateGame>): MsgCreateGame;
};
export declare const MsgCreateGameResponse: {
    encode(message: MsgCreateGameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateGameResponse;
    fromJSON(object: any): MsgCreateGameResponse;
    toJSON(message: MsgCreateGameResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateGameResponse>): MsgCreateGameResponse;
};
export declare const MsgAcceptGame: {
    encode(message: MsgAcceptGame, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAcceptGame;
    fromJSON(object: any): MsgAcceptGame;
    toJSON(message: MsgAcceptGame): unknown;
    fromPartial(object: DeepPartial<MsgAcceptGame>): MsgAcceptGame;
};
export declare const MsgAcceptGameResponse: {
    encode(message: MsgAcceptGameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAcceptGameResponse;
    fromJSON(object: any): MsgAcceptGameResponse;
    toJSON(message: MsgAcceptGameResponse): unknown;
    fromPartial(object: DeepPartial<MsgAcceptGameResponse>): MsgAcceptGameResponse;
};
export declare const MsgMakeMove: {
    encode(message: MsgMakeMove, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMakeMove;
    fromJSON(object: any): MsgMakeMove;
    toJSON(message: MsgMakeMove): unknown;
    fromPartial(object: DeepPartial<MsgMakeMove>): MsgMakeMove;
};
export declare const MsgMakeMoveResponse: {
    encode(message: MsgMakeMoveResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMakeMoveResponse;
    fromJSON(object: any): MsgMakeMoveResponse;
    toJSON(message: MsgMakeMoveResponse): unknown;
    fromPartial(object: DeepPartial<MsgMakeMoveResponse>): MsgMakeMoveResponse;
};
export declare const MsgCheckGame: {
    encode(message: MsgCheckGame, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCheckGame;
    fromJSON(object: any): MsgCheckGame;
    toJSON(message: MsgCheckGame): unknown;
    fromPartial(object: DeepPartial<MsgCheckGame>): MsgCheckGame;
};
export declare const MsgCheckGameResponse: {
    encode(message: MsgCheckGameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCheckGameResponse;
    fromJSON(object: any): MsgCheckGameResponse;
    toJSON(message: MsgCheckGameResponse): unknown;
    fromPartial(object: DeepPartial<MsgCheckGameResponse>): MsgCheckGameResponse;
};
export declare const MsgMyGames: {
    encode(message: MsgMyGames, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMyGames;
    fromJSON(object: any): MsgMyGames;
    toJSON(message: MsgMyGames): unknown;
    fromPartial(object: DeepPartial<MsgMyGames>): MsgMyGames;
};
export declare const MsgMyGamesResponse: {
    encode(message: MsgMyGamesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMyGamesResponse;
    fromJSON(object: any): MsgMyGamesResponse;
    toJSON(message: MsgMyGamesResponse): unknown;
    fromPartial(object: DeepPartial<MsgMyGamesResponse>): MsgMyGamesResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse>;
    AcceptGame(request: MsgAcceptGame): Promise<MsgAcceptGameResponse>;
    MakeMove(request: MsgMakeMove): Promise<MsgMakeMoveResponse>;
    CheckGame(request: MsgCheckGame): Promise<MsgCheckGameResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    MyGames(request: MsgMyGames): Promise<MsgMyGamesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse>;
    AcceptGame(request: MsgAcceptGame): Promise<MsgAcceptGameResponse>;
    MakeMove(request: MsgMakeMove): Promise<MsgMakeMoveResponse>;
    CheckGame(request: MsgCheckGame): Promise<MsgCheckGameResponse>;
    MyGames(request: MsgMyGames): Promise<MsgMyGamesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
