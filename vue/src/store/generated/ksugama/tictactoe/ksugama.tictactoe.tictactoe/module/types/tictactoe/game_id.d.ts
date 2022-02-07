import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "ksugama.tictactoe.tictactoe";
export interface GameId {
    idCounter: number;
}
export declare const GameId: {
    encode(message: GameId, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GameId;
    fromJSON(object: any): GameId;
    toJSON(message: GameId): unknown;
    fromPartial(object: DeepPartial<GameId>): GameId;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
