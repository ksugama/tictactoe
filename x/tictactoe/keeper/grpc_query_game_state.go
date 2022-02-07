package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GameStateAll(c context.Context, req *types.QueryAllGameStateRequest) (*types.QueryAllGameStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var gameStates []types.GameState
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	gameStateStore := prefix.NewStore(store, types.KeyPrefix(types.GameStateKeyPrefix))

	pageRes, err := query.Paginate(gameStateStore, req.Pagination, func(key []byte, value []byte) error {
		var gameState types.GameState
		if err := k.cdc.Unmarshal(value, &gameState); err != nil {
			return err
		}

		gameStates = append(gameStates, gameState)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllGameStateResponse{GameState: gameStates, Pagination: pageRes}, nil
}

func (k Keeper) GameState(c context.Context, req *types.QueryGetGameStateRequest) (*types.QueryGetGameStateResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetGameState(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetGameStateResponse{GameState: val}, nil
}
