package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ksugama/tictactoe/x/tictactoe/types"

	"crypto/sha256"
)

func (k msgServer) AcceptGame(goCtx context.Context, msg *types.MsgAcceptGame) (*types.MsgAcceptGameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	game, found = k.Keeper.GetGameState(ctx, msg.GameId)
	if !found || game.PlayerO != msg.Creator || game.State != "open" {
		panic("invalid game accept message")
	}

	hash := sha256.Sum256([]byte(game.PlayerO + game.PlayerX))
	if hash[255] == 0b0 {
		game.PlayerO = game.PlayerX
		game.PlayerX = msg.Creator
	}

	game.State = "playing"

	k.Keeper.SetGameState(ctx, game)
	_ = ctx

	return &types.MsgAcceptGameResponse{}, nil
}
