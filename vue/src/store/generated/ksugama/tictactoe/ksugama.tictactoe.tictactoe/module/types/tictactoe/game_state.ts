/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "ksugama.tictactoe.tictactoe";

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

const baseGameState: object = {
  index: "",
  gameId: "",
  state: "",
  turnX: false,
  playerX: "",
  playerO: "",
  board: "",
  winner: "",
};

export const GameState = {
  encode(message: GameState, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.gameId !== "") {
      writer.uint32(18).string(message.gameId);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    if (message.turnX === true) {
      writer.uint32(32).bool(message.turnX);
    }
    if (message.playerX !== "") {
      writer.uint32(42).string(message.playerX);
    }
    if (message.playerO !== "") {
      writer.uint32(50).string(message.playerO);
    }
    for (const v of message.board) {
      writer.uint32(58).string(v!);
    }
    if (message.winner !== "") {
      writer.uint32(66).string(message.winner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GameState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameState } as GameState;
    message.board = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.gameId = reader.string();
          break;
        case 3:
          message.state = reader.string();
          break;
        case 4:
          message.turnX = reader.bool();
          break;
        case 5:
          message.playerX = reader.string();
          break;
        case 6:
          message.playerO = reader.string();
          break;
        case 7:
          message.board.push(reader.string());
          break;
        case 8:
          message.winner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameState {
    const message = { ...baseGameState } as GameState;
    message.board = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = String(object.gameId);
    } else {
      message.gameId = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    if (object.turnX !== undefined && object.turnX !== null) {
      message.turnX = Boolean(object.turnX);
    } else {
      message.turnX = false;
    }
    if (object.playerX !== undefined && object.playerX !== null) {
      message.playerX = String(object.playerX);
    } else {
      message.playerX = "";
    }
    if (object.playerO !== undefined && object.playerO !== null) {
      message.playerO = String(object.playerO);
    } else {
      message.playerO = "";
    }
    if (object.board !== undefined && object.board !== null) {
      for (const e of object.board) {
        message.board.push(String(e));
      }
    }
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = String(object.winner);
    } else {
      message.winner = "";
    }
    return message;
  },

  toJSON(message: GameState): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.state !== undefined && (obj.state = message.state);
    message.turnX !== undefined && (obj.turnX = message.turnX);
    message.playerX !== undefined && (obj.playerX = message.playerX);
    message.playerO !== undefined && (obj.playerO = message.playerO);
    if (message.board) {
      obj.board = message.board.map((e) => e);
    } else {
      obj.board = [];
    }
    message.winner !== undefined && (obj.winner = message.winner);
    return obj;
  },

  fromPartial(object: DeepPartial<GameState>): GameState {
    const message = { ...baseGameState } as GameState;
    message.board = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = object.gameId;
    } else {
      message.gameId = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    if (object.turnX !== undefined && object.turnX !== null) {
      message.turnX = object.turnX;
    } else {
      message.turnX = false;
    }
    if (object.playerX !== undefined && object.playerX !== null) {
      message.playerX = object.playerX;
    } else {
      message.playerX = "";
    }
    if (object.playerO !== undefined && object.playerO !== null) {
      message.playerO = object.playerO;
    } else {
      message.playerO = "";
    }
    if (object.board !== undefined && object.board !== null) {
      for (const e of object.board) {
        message.board.push(e);
      }
    }
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    } else {
      message.winner = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
