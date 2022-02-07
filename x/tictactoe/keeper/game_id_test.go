package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/ksugama/tictactoe/testutil/keeper"
	"github.com/ksugama/tictactoe/testutil/nullify"
	"github.com/ksugama/tictactoe/x/tictactoe/keeper"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

func createTestGameId(keeper *keeper.Keeper, ctx sdk.Context) types.GameId {
	item := types.GameId{}
	keeper.SetGameId(ctx, item)
	return item
}

func TestGameIdGet(t *testing.T) {
	keeper, ctx := keepertest.TictactoeKeeper(t)
	item := createTestGameId(keeper, ctx)
	rst, found := keeper.GetGameId(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestGameIdRemove(t *testing.T) {
	keeper, ctx := keepertest.TictactoeKeeper(t)
	createTestGameId(keeper, ctx)
	keeper.RemoveGameId(ctx)
	_, found := keeper.GetGameId(ctx)
	require.False(t, found)
}
