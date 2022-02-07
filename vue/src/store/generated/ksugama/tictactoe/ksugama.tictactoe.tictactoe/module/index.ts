// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMyGames } from "./types/tictactoe/tx";
import { MsgMakeMove } from "./types/tictactoe/tx";
import { MsgCreateGame } from "./types/tictactoe/tx";
import { MsgCheckGame } from "./types/tictactoe/tx";
import { MsgAcceptGame } from "./types/tictactoe/tx";


const types = [
  ["/ksugama.tictactoe.tictactoe.MsgMyGames", MsgMyGames],
  ["/ksugama.tictactoe.tictactoe.MsgMakeMove", MsgMakeMove],
  ["/ksugama.tictactoe.tictactoe.MsgCreateGame", MsgCreateGame],
  ["/ksugama.tictactoe.tictactoe.MsgCheckGame", MsgCheckGame],
  ["/ksugama.tictactoe.tictactoe.MsgAcceptGame", MsgAcceptGame],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgMyGames: (data: MsgMyGames): EncodeObject => ({ typeUrl: "/ksugama.tictactoe.tictactoe.MsgMyGames", value: MsgMyGames.fromPartial( data ) }),
    msgMakeMove: (data: MsgMakeMove): EncodeObject => ({ typeUrl: "/ksugama.tictactoe.tictactoe.MsgMakeMove", value: MsgMakeMove.fromPartial( data ) }),
    msgCreateGame: (data: MsgCreateGame): EncodeObject => ({ typeUrl: "/ksugama.tictactoe.tictactoe.MsgCreateGame", value: MsgCreateGame.fromPartial( data ) }),
    msgCheckGame: (data: MsgCheckGame): EncodeObject => ({ typeUrl: "/ksugama.tictactoe.tictactoe.MsgCheckGame", value: MsgCheckGame.fromPartial( data ) }),
    msgAcceptGame: (data: MsgAcceptGame): EncodeObject => ({ typeUrl: "/ksugama.tictactoe.tictactoe.MsgAcceptGame", value: MsgAcceptGame.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
