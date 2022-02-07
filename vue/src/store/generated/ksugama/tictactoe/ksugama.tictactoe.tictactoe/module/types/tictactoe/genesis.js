/* eslint-disable */
import { Params } from "../tictactoe/params";
import { GameId } from "../tictactoe/game_id";
import { GameState } from "../tictactoe/game_state";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "ksugama.tictactoe.tictactoe";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.gameId !== undefined) {
            GameId.encode(message.gameId, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.gameStateList) {
            GameState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.gameStateList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameId = GameId.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gameStateList.push(GameState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.gameStateList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = GameId.fromJSON(object.gameId);
        }
        else {
            message.gameId = undefined;
        }
        if (object.gameStateList !== undefined && object.gameStateList !== null) {
            for (const e of object.gameStateList) {
                message.gameStateList.push(GameState.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.gameId !== undefined &&
            (obj.gameId = message.gameId ? GameId.toJSON(message.gameId) : undefined);
        if (message.gameStateList) {
            obj.gameStateList = message.gameStateList.map((e) => e ? GameState.toJSON(e) : undefined);
        }
        else {
            obj.gameStateList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.gameStateList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.gameId !== undefined && object.gameId !== null) {
            message.gameId = GameId.fromPartial(object.gameId);
        }
        else {
            message.gameId = undefined;
        }
        if (object.gameStateList !== undefined && object.gameStateList !== null) {
            for (const e of object.gameStateList) {
                message.gameStateList.push(GameState.fromPartial(e));
            }
        }
        return message;
    },
};
