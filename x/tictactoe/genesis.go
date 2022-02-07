package tictactoe

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ksugama/tictactoe/x/tictactoe/keeper"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.GameId != nil {
		k.SetGameId(ctx, *genState.GameId)
	}
	// Set all the gameState
	for _, elem := range genState.GameStateList {
		k.SetGameState(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all gameId
	gameId, found := k.GetGameId(ctx)
	if found {
		genesis.GameId = &gameId
	}
	genesis.GameStateList = k.GetAllGameState(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
