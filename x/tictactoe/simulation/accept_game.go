package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/ksugama/tictactoe/x/tictactoe/keeper"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

func SimulateMsgAcceptGame(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgAcceptGame{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the AcceptGame simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "AcceptGame simulation not implemented"), nil, nil
	}
}
