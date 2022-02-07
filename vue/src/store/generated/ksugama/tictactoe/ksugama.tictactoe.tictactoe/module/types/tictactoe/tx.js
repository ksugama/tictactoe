/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "ksugama.tictactoe.tictactoe";
const baseMsgCreateGame = { creator: "", opponent: "" };
export const MsgCreateGame = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.opponent !== "") {
            writer.uint32(18).string(message.opponent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateGame };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.opponent !== undefined && object.opponent !== null) {
            message.opponent = String(object.opponent);
        }
        else {
            message.opponent = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.opponent !== undefined && (obj.opponent = message.opponent);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.opponent !== undefined && object.opponent !== null) {
            message.opponent = object.opponent;
        }
        else {
            message.opponent = "";
        }
        return message;
    },
};
const baseMsgCreateGameResponse = { gameId: "" };
export const MsgCreateGameResponse = {
    encode(message, writer = Writer.create()) {
        if (message.gameId !== "") {
            writer.uint32(10).string(message.gameId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateGameResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateGameResponse };
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = String(object.gameId);
        }
        else {
            message.gameId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.gameId !== undefined && (obj.gameId = message.gameId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateGameResponse };
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = object.gameId;
        }
        else {
            message.gameId = "";
        }
        return message;
    },
};
const baseMsgAcceptGame = { creator: "", gameId: "" };
export const MsgAcceptGame = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.gameId !== "") {
            writer.uint32(18).string(message.gameId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAcceptGame };
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
    fromJSON(object) {
        const message = { ...baseMsgAcceptGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = String(object.gameId);
        }
        else {
            message.gameId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.gameId !== undefined && (obj.gameId = message.gameId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAcceptGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = object.gameId;
        }
        else {
            message.gameId = "";
        }
        return message;
    },
};
const baseMsgAcceptGameResponse = { result: "" };
export const MsgAcceptGameResponse = {
    encode(message, writer = Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAcceptGameResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgAcceptGameResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = String(object.result);
        }
        else {
            message.result = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAcceptGameResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = "";
        }
        return message;
    },
};
const baseMsgMakeMove = { creator: "", gameId: "", posX: 0, posY: 0 };
export const MsgMakeMove = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMakeMove };
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
                    message.posX = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.posY = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMakeMove };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = String(object.gameId);
        }
        else {
            message.gameId = "";
        }
        if (object.posX !== undefined && object.posX !== null) {
            message.posX = Number(object.posX);
        }
        else {
            message.posX = 0;
        }
        if (object.posY !== undefined && object.posY !== null) {
            message.posY = Number(object.posY);
        }
        else {
            message.posY = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.gameId !== undefined && (obj.gameId = message.gameId);
        message.posX !== undefined && (obj.posX = message.posX);
        message.posY !== undefined && (obj.posY = message.posY);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMakeMove };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = object.gameId;
        }
        else {
            message.gameId = "";
        }
        if (object.posX !== undefined && object.posX !== null) {
            message.posX = object.posX;
        }
        else {
            message.posX = 0;
        }
        if (object.posY !== undefined && object.posY !== null) {
            message.posY = object.posY;
        }
        else {
            message.posY = 0;
        }
        return message;
    },
};
const baseMsgMakeMoveResponse = { result: "" };
export const MsgMakeMoveResponse = {
    encode(message, writer = Writer.create()) {
        if (message.result !== "") {
            writer.uint32(10).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMakeMoveResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgMakeMoveResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = String(object.result);
        }
        else {
            message.result = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMakeMoveResponse };
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = "";
        }
        return message;
    },
};
const baseMsgCheckGame = { creator: "", gameId: "", board: "" };
export const MsgCheckGame = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCheckGame };
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
    fromJSON(object) {
        const message = { ...baseMsgCheckGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = String(object.gameId);
        }
        else {
            message.gameId = "";
        }
        if (object.board !== undefined && object.board !== null) {
            message.board = String(object.board);
        }
        else {
            message.board = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.gameId !== undefined && (obj.gameId = message.gameId);
        message.board !== undefined && (obj.board = message.board);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCheckGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = object.gameId;
        }
        else {
            message.gameId = "";
        }
        if (object.board !== undefined && object.board !== null) {
            message.board = object.board;
        }
        else {
            message.board = "";
        }
        return message;
    },
};
const baseMsgCheckGameResponse = { winner: "" };
export const MsgCheckGameResponse = {
    encode(message, writer = Writer.create()) {
        if (message.winner !== "") {
            writer.uint32(10).string(message.winner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCheckGameResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgCheckGameResponse };
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = String(object.winner);
        }
        else {
            message.winner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.winner !== undefined && (obj.winner = message.winner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCheckGameResponse };
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = object.winner;
        }
        else {
            message.winner = "";
        }
        return message;
    },
};
const baseMsgMyGames = { creator: "" };
export const MsgMyGames = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMyGames };
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
    fromJSON(object) {
        const message = { ...baseMsgMyGames };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMyGames };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgMyGamesResponse = { games: "" };
export const MsgMyGamesResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.games) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMyGamesResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgMyGamesResponse };
        message.games = [];
        if (object.games !== undefined && object.games !== null) {
            for (const e of object.games) {
                message.games.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.games) {
            obj.games = message.games.map((e) => e);
        }
        else {
            obj.games = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMyGamesResponse };
        message.games = [];
        if (object.games !== undefined && object.games !== null) {
            for (const e of object.games) {
                message.games.push(e);
            }
        }
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateGame(request) {
        const data = MsgCreateGame.encode(request).finish();
        const promise = this.rpc.request("ksugama.tictactoe.tictactoe.Msg", "CreateGame", data);
        return promise.then((data) => MsgCreateGameResponse.decode(new Reader(data)));
    }
    AcceptGame(request) {
        const data = MsgAcceptGame.encode(request).finish();
        const promise = this.rpc.request("ksugama.tictactoe.tictactoe.Msg", "AcceptGame", data);
        return promise.then((data) => MsgAcceptGameResponse.decode(new Reader(data)));
    }
    MakeMove(request) {
        const data = MsgMakeMove.encode(request).finish();
        const promise = this.rpc.request("ksugama.tictactoe.tictactoe.Msg", "MakeMove", data);
        return promise.then((data) => MsgMakeMoveResponse.decode(new Reader(data)));
    }
    CheckGame(request) {
        const data = MsgCheckGame.encode(request).finish();
        const promise = this.rpc.request("ksugama.tictactoe.tictactoe.Msg", "CheckGame", data);
        return promise.then((data) => MsgCheckGameResponse.decode(new Reader(data)));
    }
    MyGames(request) {
        const data = MsgMyGames.encode(request).finish();
        const promise = this.rpc.request("ksugama.tictactoe.tictactoe.Msg", "MyGames", data);
        return promise.then((data) => MsgMyGamesResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
