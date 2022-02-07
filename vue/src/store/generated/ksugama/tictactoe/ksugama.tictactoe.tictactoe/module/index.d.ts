import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMyGames } from "./types/tictactoe/tx";
import { MsgMakeMove } from "./types/tictactoe/tx";
import { MsgCreateGame } from "./types/tictactoe/tx";
import { MsgCheckGame } from "./types/tictactoe/tx";
import { MsgAcceptGame } from "./types/tictactoe/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgMyGames: (data: MsgMyGames) => EncodeObject;
    msgMakeMove: (data: MsgMakeMove) => EncodeObject;
    msgCreateGame: (data: MsgCreateGame) => EncodeObject;
    msgCheckGame: (data: MsgCheckGame) => EncodeObject;
    msgAcceptGame: (data: MsgAcceptGame) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
