package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/ksugama/tictactoe/testutil/keeper"
	"github.com/ksugama/tictactoe/testutil/nullify"
	"github.com/ksugama/tictactoe/x/tictactoe/keeper"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNGameState(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.GameState {
	items := make([]types.GameState, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetGameState(ctx, items[i])
	}
	return items
}

func TestGameStateGet(t *testing.T) {
	keeper, ctx := keepertest.TictactoeKeeper(t)
	items := createNGameState(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetGameState(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestGameStateRemove(t *testing.T) {
	keeper, ctx := keepertest.TictactoeKeeper(t)
	items := createNGameState(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveGameState(ctx,
			item.Index,
		)
		_, found := keeper.GetGameState(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestGameStateGetAll(t *testing.T) {
	keeper, ctx := keepertest.TictactoeKeeper(t)
	items := createNGameState(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllGameState(ctx)),
	)
}
