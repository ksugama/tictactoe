package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

// SetGameId set gameId in the store
func (k Keeper) SetGameId(ctx sdk.Context, gameId types.GameId) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameIdKey))
	b := k.cdc.MustMarshal(&gameId)
	store.Set([]byte{0}, b)
}

// GetGameId returns gameId
func (k Keeper) GetGameId(ctx sdk.Context) (val types.GameId, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameIdKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGameId removes gameId from the store
func (k Keeper) RemoveGameId(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GameIdKey))
	store.Delete([]byte{0})
}
