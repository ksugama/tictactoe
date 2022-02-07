package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

// SetGameState set a specific gameState in the store from its index
func (k Keeper) SetGameState(ctx sdk.Context, gameState types.GameState) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameStateKeyPrefix))
	b := k.cdc.MustMarshal(&gameState)
	store.Set(types.GameStateKey(
		gameState.Index,
	), b)
}

// GetGameState returns a gameState from its index
func (k Keeper) GetGameState(
	ctx sdk.Context,
	index string,

) (val types.GameState, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameStateKeyPrefix))

	b := store.Get(types.GameStateKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGameState removes a gameState from the store
func (k Keeper) RemoveGameState(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameStateKeyPrefix))
	store.Delete(types.GameStateKey(
		index,
	))
}

// GetAllGameState returns all gameState
func (k Keeper) GetAllGameState(ctx sdk.Context) (list []types.GameState) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameStateKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.GameState
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
