/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "ksugama.tictactoe.tictactoe";

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

const baseMsgCreateGame: object = { creator: "", opponent: "" };

export const MsgCreateGame = {
  encode(message: MsgCreateGame, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.opponent !== "") {
      writer.uint32(18).string(message.opponent);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGame {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGame } as MsgCreateGame;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.opponent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGame {
    const message = { ...baseMsgCreateGame } as MsgCreateGame;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.opponent !== undefined && object.opponent !== null) {
      message.opponent = String(object.opponent);
    } else {
      message.opponent = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGame): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.opponent !== undefined && (obj.opponent = message.opponent);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateGame>): MsgCreateGame {
    const message = { ...baseMsgCreateGame } as MsgCreateGame;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.opponent !== undefined && object.opponent !== null) {
      message.opponent = object.opponent;
    } else {
      message.opponent = "";
    }
    return message;
  },
};

const baseMsgCreateGameResponse: object = { gameId: "" };

export const MsgCreateGameResponse = {
  encode(
    message: MsgCreateGameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gameId !== "") {
      writer.uint32(10).string(message.gameId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateGameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateGameResponse } as MsgCreateGameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateGameResponse {
    const message = { ...baseMsgCreateGameResponse } as MsgCreateGameResponse;
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = String(object.gameId);
    } else {
      message.gameId = "";
    }
    return message;
  },

  toJSON(message: MsgCreateGameResponse): unknown {
    const obj: any = {};
    message.gameId !== undefined && (obj.gameId = message.gameId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateGameResponse>
  ): MsgCreateGameResponse {
    const message = { ...baseMsgCreateGameResponse } as MsgCreateGameResponse;
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = object.gameId;
    } else {
      message.gameId = "";
    }
    return message;
  },
};

const baseMsgAcceptGame: object = { creator: "", gameId: "" };

export const MsgAcceptGame = {
  encode(message: MsgAcceptGame, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.gameId !== "") {
      writer.uint32(18).string(message.gameId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptGame {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptGame } as MsgAcceptGame;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.gameId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptGame {
    const message = { ...baseMsgAcceptGame } as MsgAcceptGame;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = String(object.gameId);
    } else {
      message.gameId = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptGame): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAcceptGame>): MsgAcceptGame {
    const message = { ...baseMsgAcceptGame } as MsgAcceptGame;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = object.gameId;
    } else {
      message.gameId = "";
    }
    return message;
  },
};

const baseMsgAcceptGameResponse: object = { result: "" };

export const MsgAcceptGameResponse = {
  encode(
    message: MsgAcceptGameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptGameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAcceptGameResponse } as MsgAcceptGameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAcceptGameResponse {
    const message = { ...baseMsgAcceptGameResponse } as MsgAcceptGameResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = String(object.result);
    } else {
      message.result = "";
    }
    return message;
  },

  toJSON(message: MsgAcceptGameResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAcceptGameResponse>
  ): MsgAcceptGameResponse {
    const message = { ...baseMsgAcceptGameResponse } as MsgAcceptGameResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = "";
    }
    return message;
  },
};

const baseMsgMakeMove: object = { creator: "", gameId: "", posX: 0, posY: 0 };

export const MsgMakeMove = {
  encode(message: MsgMakeMove, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.gameId !== "") {
      writer.uint32(18).string(message.gameId);
    }
    if (message.posX !== 0) {
      writer.uint32(24).uint64(message.posX);
    }
    if (message.posY !== 0) {
      writer.uint32(32).uint64(message.posY);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMakeMove {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMakeMove } as MsgMakeMove;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.gameId = reader.string();
          break;
        case 3:
          message.posX = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.posY = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMakeMove {
    const message = { ...baseMsgMakeMove } as MsgMakeMove;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = String(object.gameId);
    } else {
      message.gameId = "";
    }
    if (object.posX !== undefined && object.posX !== null) {
      message.posX = Number(object.posX);
    } else {
      message.posX = 0;
    }
    if (object.posY !== undefined && object.posY !== null) {
      message.posY = Number(object.posY);
    } else {
      message.posY = 0;
    }
    return message;
  },

  toJSON(message: MsgMakeMove): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.posX !== undefined && (obj.posX = message.posX);
    message.posY !== undefined && (obj.posY = message.posY);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMakeMove>): MsgMakeMove {
    const message = { ...baseMsgMakeMove } as MsgMakeMove;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = object.gameId;
    } else {
      message.gameId = "";
    }
    if (object.posX !== undefined && object.posX !== null) {
      message.posX = object.posX;
    } else {
      message.posX = 0;
    }
    if (object.posY !== undefined && object.posY !== null) {
      message.posY = object.posY;
    } else {
      message.posY = 0;
    }
    return message;
  },
};

const baseMsgMakeMoveResponse: object = { result: "" };

export const MsgMakeMoveResponse = {
  encode(
    message: MsgMakeMoveResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.result !== "") {
      writer.uint32(10).string(message.result);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMakeMoveResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMakeMoveResponse } as MsgMakeMoveResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMakeMoveResponse {
    const message = { ...baseMsgMakeMoveResponse } as MsgMakeMoveResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = String(object.result);
    } else {
      message.result = "";
    }
    return message;
  },

  toJSON(message: MsgMakeMoveResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMakeMoveResponse>): MsgMakeMoveResponse {
    const message = { ...baseMsgMakeMoveResponse } as MsgMakeMoveResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = "";
    }
    return message;
  },
};

const baseMsgCheckGame: object = { creator: "", gameId: "", board: "" };

export const MsgCheckGame = {
  encode(message: MsgCheckGame, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.gameId !== "") {
      writer.uint32(18).string(message.gameId);
    }
    if (message.board !== "") {
      writer.uint32(26).string(message.board);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCheckGame {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCheckGame } as MsgCheckGame;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.gameId = reader.string();
          break;
        case 3:
          message.board = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCheckGame {
    const message = { ...baseMsgCheckGame } as MsgCheckGame;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = String(object.gameId);
    } else {
      message.gameId = "";
    }
    if (object.board !== undefined && object.board !== null) {
      message.board = String(object.board);
    } else {
      message.board = "";
    }
    return message;
  },

  toJSON(message: MsgCheckGame): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.gameId !== undefined && (obj.gameId = message.gameId);
    message.board !== undefined && (obj.board = message.board);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCheckGame>): MsgCheckGame {
    const message = { ...baseMsgCheckGame } as MsgCheckGame;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.gameId !== undefined && object.gameId !== null) {
      message.gameId = object.gameId;
    } else {
      message.gameId = "";
    }
    if (object.board !== undefined && object.board !== null) {
      message.board = object.board;
    } else {
      message.board = "";
    }
    return message;
  },
};

const baseMsgCheckGameResponse: object = { winner: "" };

export const MsgCheckGameResponse = {
  encode(
    message: MsgCheckGameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.winner !== "") {
      writer.uint32(10).string(message.winner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCheckGameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCheckGameResponse } as MsgCheckGameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCheckGameResponse {
    const message = { ...baseMsgCheckGameResponse } as MsgCheckGameResponse;
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = String(object.winner);
    } else {
      message.winner = "";
    }
    return message;
  },

  toJSON(message: MsgCheckGameResponse): unknown {
    const obj: any = {};
    message.winner !== undefined && (obj.winner = message.winner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCheckGameResponse>): MsgCheckGameResponse {
    const message = { ...baseMsgCheckGameResponse } as MsgCheckGameResponse;
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    } else {
      message.winner = "";
    }
    return message;
  },
};

const baseMsgMyGames: object = { creator: "" };

export const MsgMyGames = {
  encode(message: MsgMyGames, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMyGames {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMyGames } as MsgMyGames;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMyGames {
    const message = { ...baseMsgMyGames } as MsgMyGames;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgMyGames): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMyGames>): MsgMyGames {
    const message = { ...baseMsgMyGames } as MsgMyGames;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgMyGamesResponse: object = { games: "" };

export const MsgMyGamesResponse = {
  encode(
    message: MsgMyGamesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.games) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMyGamesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMyGamesResponse } as MsgMyGamesResponse;
    message.games = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.games.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMyGamesResponse {
    const message = { ...baseMsgMyGamesResponse } as MsgMyGamesResponse;
    message.games = [];
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMyGamesResponse): unknown {
    const obj: any = {};
    if (message.games) {
      obj.games = message.games.map((e) => e);
    } else {
      obj.games = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMyGamesResponse>): MsgMyGamesResponse {
    const message = { ...baseMsgMyGamesResponse } as MsgMyGamesResponse;
    message.games = [];
    if (object.games !== undefined && object.games !== null) {
      for (const e of object.games) {
        message.games.push(e);
      }
    }
    return message;
  },
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

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse> {
    const data = MsgCreateGame.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Msg",
      "CreateGame",
      data
    );
    return promise.then((data) =>
      MsgCreateGameResponse.decode(new Reader(data))
    );
  }

  AcceptGame(request: MsgAcceptGame): Promise<MsgAcceptGameResponse> {
    const data = MsgAcceptGame.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Msg",
      "AcceptGame",
      data
    );
    return promise.then((data) =>
      MsgAcceptGameResponse.decode(new Reader(data))
    );
  }

  MakeMove(request: MsgMakeMove): Promise<MsgMakeMoveResponse> {
    const data = MsgMakeMove.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Msg",
      "MakeMove",
      data
    );
    return promise.then((data) => MsgMakeMoveResponse.decode(new Reader(data)));
  }

  CheckGame(request: MsgCheckGame): Promise<MsgCheckGameResponse> {
    const data = MsgCheckGame.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Msg",
      "CheckGame",
      data
    );
    return promise.then((data) =>
      MsgCheckGameResponse.decode(new Reader(data))
    );
  }

  MyGames(request: MsgMyGames): Promise<MsgMyGamesResponse> {
    const data = MsgMyGames.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Msg",
      "MyGames",
      data
    );
    return promise.then((data) => MsgMyGamesResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
