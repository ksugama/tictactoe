package tictactoe

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/ksugama/tictactoe/testutil/sample"
	tictactoesimulation "github.com/ksugama/tictactoe/x/tictactoe/simulation"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = tictactoesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateGame = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateGame int = 100

	opWeightMsgAcceptGame = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAcceptGame int = 100

	opWeightMsgMakeMove = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMakeMove int = 100

	opWeightMsgCheckGame = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCheckGame int = 100

	opWeightMsgMyGames = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMyGames int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	tictactoeGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&tictactoeGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateGame int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateGame, &weightMsgCreateGame, nil,
		func(_ *rand.Rand) {
			weightMsgCreateGame = defaultWeightMsgCreateGame
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateGame,
		tictactoesimulation.SimulateMsgCreateGame(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAcceptGame int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAcceptGame, &weightMsgAcceptGame, nil,
		func(_ *rand.Rand) {
			weightMsgAcceptGame = defaultWeightMsgAcceptGame
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAcceptGame,
		tictactoesimulation.SimulateMsgAcceptGame(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMakeMove int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMakeMove, &weightMsgMakeMove, nil,
		func(_ *rand.Rand) {
			weightMsgMakeMove = defaultWeightMsgMakeMove
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMakeMove,
		tictactoesimulation.SimulateMsgMakeMove(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCheckGame int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCheckGame, &weightMsgCheckGame, nil,
		func(_ *rand.Rand) {
			weightMsgCheckGame = defaultWeightMsgCheckGame
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCheckGame,
		tictactoesimulation.SimulateMsgCheckGame(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgMyGames int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMyGames, &weightMsgMyGames, nil,
		func(_ *rand.Rand) {
			weightMsgMyGames = defaultWeightMsgMyGames
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMyGames,
		tictactoesimulation.SimulateMsgMyGames(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
