package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

func (k msgServer) MakeMove(goCtx context.Context, msg *types.MsgMakeMove) (*types.MsgMakeMoveResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	game, found := k.Keeper.GetGameState(ctx, msg.GameId)

	if !found || game.State != "playing" || !(game.PlayerX == msg.Creator || game.PlayerO == msg.Creator) {
		panic("invalid make move message")
	}

	if msg.PosX < 0 || msg.PosX > 2 || msg.PosY < 0 || msg.PosY > 2 {
		panic("make move out of bounds")
	}

	if game.Board[msg.PosX][msg.PosY] != "" {
		panic("slot already filled on board")
	}

	if game.PlayerX == msg.Creator {
		game.Board[msg.PosX][msg.PosY] = "X"
	} else {
		game.Board[msg.PosX][msg.PosY] = "O"
	}

	winner, finished := checkBoard(game.Board)
	if finished {
		game.Winner = winner
		game.State = "finished"
	}

	k.Keeper.SetGameState(ctx, game)

	return &types.MsgMakeMoveResponse{}, nil
}
