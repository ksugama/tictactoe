/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../tictactoe/params";
import { GameId } from "../tictactoe/game_id";
import { GameState } from "../tictactoe/game_state";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "ksugama.tictactoe.tictactoe";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetGameIdRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetGameIdRequest: object = {};

export const QueryGetGameIdRequest = {
  encode(_: QueryGetGameIdRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGameIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetGameIdRequest } as QueryGetGameIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetGameIdRequest {
    const message = { ...baseQueryGetGameIdRequest } as QueryGetGameIdRequest;
    return message;
  },

  toJSON(_: QueryGetGameIdRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGetGameIdRequest>): QueryGetGameIdRequest {
    const message = { ...baseQueryGetGameIdRequest } as QueryGetGameIdRequest;
    return message;
  },
};

const baseQueryGetGameIdResponse: object = {};

export const QueryGetGameIdResponse = {
  encode(
    message: QueryGetGameIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.GameId !== undefined) {
      GameId.encode(message.GameId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGameIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetGameIdResponse } as QueryGetGameIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.GameId = GameId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGameIdResponse {
    const message = { ...baseQueryGetGameIdResponse } as QueryGetGameIdResponse;
    if (object.GameId !== undefined && object.GameId !== null) {
      message.GameId = GameId.fromJSON(object.GameId);
    } else {
      message.GameId = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetGameIdResponse): unknown {
    const obj: any = {};
    message.GameId !== undefined &&
      (obj.GameId = message.GameId ? GameId.toJSON(message.GameId) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGameIdResponse>
  ): QueryGetGameIdResponse {
    const message = { ...baseQueryGetGameIdResponse } as QueryGetGameIdResponse;
    if (object.GameId !== undefined && object.GameId !== null) {
      message.GameId = GameId.fromPartial(object.GameId);
    } else {
      message.GameId = undefined;
    }
    return message;
  },
};

const baseQueryGetGameStateRequest: object = { index: "" };

export const QueryGetGameStateRequest = {
  encode(
    message: QueryGetGameStateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetGameStateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetGameStateRequest,
    } as QueryGetGameStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGameStateRequest {
    const message = {
      ...baseQueryGetGameStateRequest,
    } as QueryGetGameStateRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetGameStateRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGameStateRequest>
  ): QueryGetGameStateRequest {
    const message = {
      ...baseQueryGetGameStateRequest,
    } as QueryGetGameStateRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetGameStateResponse: object = {};

export const QueryGetGameStateResponse = {
  encode(
    message: QueryGetGameStateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gameState !== undefined) {
      GameState.encode(message.gameState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetGameStateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetGameStateResponse,
    } as QueryGetGameStateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameState = GameState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGameStateResponse {
    const message = {
      ...baseQueryGetGameStateResponse,
    } as QueryGetGameStateResponse;
    if (object.gameState !== undefined && object.gameState !== null) {
      message.gameState = GameState.fromJSON(object.gameState);
    } else {
      message.gameState = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetGameStateResponse): unknown {
    const obj: any = {};
    message.gameState !== undefined &&
      (obj.gameState = message.gameState
        ? GameState.toJSON(message.gameState)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetGameStateResponse>
  ): QueryGetGameStateResponse {
    const message = {
      ...baseQueryGetGameStateResponse,
    } as QueryGetGameStateResponse;
    if (object.gameState !== undefined && object.gameState !== null) {
      message.gameState = GameState.fromPartial(object.gameState);
    } else {
      message.gameState = undefined;
    }
    return message;
  },
};

const baseQueryAllGameStateRequest: object = {};

export const QueryAllGameStateRequest = {
  encode(
    message: QueryAllGameStateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllGameStateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllGameStateRequest,
    } as QueryAllGameStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGameStateRequest {
    const message = {
      ...baseQueryAllGameStateRequest,
    } as QueryAllGameStateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGameStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGameStateRequest>
  ): QueryAllGameStateRequest {
    const message = {
      ...baseQueryAllGameStateRequest,
    } as QueryAllGameStateRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllGameStateResponse: object = {};

export const QueryAllGameStateResponse = {
  encode(
    message: QueryAllGameStateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.gameState) {
      GameState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllGameStateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllGameStateResponse,
    } as QueryAllGameStateResponse;
    message.gameState = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameState.push(GameState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGameStateResponse {
    const message = {
      ...baseQueryAllGameStateResponse,
    } as QueryAllGameStateResponse;
    message.gameState = [];
    if (object.gameState !== undefined && object.gameState !== null) {
      for (const e of object.gameState) {
        message.gameState.push(GameState.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllGameStateResponse): unknown {
    const obj: any = {};
    if (message.gameState) {
      obj.gameState = message.gameState.map((e) =>
        e ? GameState.toJSON(e) : undefined
      );
    } else {
      obj.gameState = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllGameStateResponse>
  ): QueryAllGameStateResponse {
    const message = {
      ...baseQueryAllGameStateResponse,
    } as QueryAllGameStateResponse;
    message.gameState = [];
    if (object.gameState !== undefined && object.gameState !== null) {
      for (const e of object.gameState) {
        message.gameState.push(GameState.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a GameId by index. */
  GameId(request: QueryGetGameIdRequest): Promise<QueryGetGameIdResponse>;
  /** Queries a GameState by index. */
  GameState(
    request: QueryGetGameStateRequest
  ): Promise<QueryGetGameStateResponse>;
  /** Queries a list of GameState items. */
  GameStateAll(
    request: QueryAllGameStateRequest
  ): Promise<QueryAllGameStateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GameId(request: QueryGetGameIdRequest): Promise<QueryGetGameIdResponse> {
    const data = QueryGetGameIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Query",
      "GameId",
      data
    );
    return promise.then((data) =>
      QueryGetGameIdResponse.decode(new Reader(data))
    );
  }

  GameState(
    request: QueryGetGameStateRequest
  ): Promise<QueryGetGameStateResponse> {
    const data = QueryGetGameStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Query",
      "GameState",
      data
    );
    return promise.then((data) =>
      QueryGetGameStateResponse.decode(new Reader(data))
    );
  }

  GameStateAll(
    request: QueryAllGameStateRequest
  ): Promise<QueryAllGameStateResponse> {
    const data = QueryAllGameStateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ksugama.tictactoe.tictactoe.Query",
      "GameStateAll",
      data
    );
    return promise.then((data) =>
      QueryAllGameStateResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
