import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "ksugama.tictactoe.tictactoe";
export interface GameState {
    index: string;
    gameId: string;
    state: string;
    turnX: boolean;
    playerX: string;
    playerO: string;
    board: string[];
    winner: string;
}
export declare const GameState: {
    encode(message: GameState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GameState;
    fromJSON(object: any): GameState;
    toJSON(message: GameState): unknown;
    fromPartial(object: DeepPartial<GameState>): GameState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
