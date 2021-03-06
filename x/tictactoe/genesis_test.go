package tictactoe_test

import (
	"testing"

	keepertest "github.com/ksugama/tictactoe/testutil/keeper"
	"github.com/ksugama/tictactoe/testutil/nullify"
	"github.com/ksugama/tictactoe/x/tictactoe"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		GameId: &types.GameId{
			IdCounter: 81,
		},
		GameStateList: []types.GameState{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TictactoeKeeper(t)
	tictactoe.InitGenesis(ctx, *k, genesisState)
	got := tictactoe.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.GameId, got.GameId)
	require.ElementsMatch(t, genesisState.GameStateList, got.GameStateList)
	// this line is used by starport scaffolding # genesis/test/assert
}
