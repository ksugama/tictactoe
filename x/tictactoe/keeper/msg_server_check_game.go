package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

func (k msgServer) CheckGame(goCtx context.Context, msg *types.MsgCheckGame) (*types.MsgCheckGameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCheckGameResponse{}, nil
}
