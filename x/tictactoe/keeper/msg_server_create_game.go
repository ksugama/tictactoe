package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

func (k msgServer) CreateGame(goCtx context.Context, msg *types.MsgCreateGame) (*types.MsgCreateGameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	nextGame, found := k.Keeper.GetNextGame(ctx)
	if !found {
		panic("NextGame not found")
	}

	newIndex := strconv.FormatUint(nextGame.IdCounter, 10)
	newGame := types.gameState{
		Index:   newIndex,
		GameId:  newIndex,
		State:   "Open",
		TurnX:   true, // X goes first
		PlayerX: msg.Creator,
		PlayerO: msg.Opponent,
		Board:   make([]string, 9),
		Winner:  "",
	}
	// add new game object to mapping
	k.Keeper.SetGameState(ctx, newGame)

	// increment next game id
	nextGame.IdCounter++
	k.Keeper.SetNextGame(ctx, nextGame)

	_ = ctx

	return &types.MsgCreateGameResponse{
		GameId: newIndex,
	}, nil

}
