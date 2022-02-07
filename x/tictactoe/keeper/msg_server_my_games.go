package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

func (k msgServer) MyGames(goCtx context.Context, msg *types.MsgMyGames) (*types.MsgMyGamesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMyGamesResponse{}, nil
}
