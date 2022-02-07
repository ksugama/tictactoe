package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/ksugama/tictactoe/testutil/keeper"
	"github.com/ksugama/tictactoe/x/tictactoe/keeper"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TictactoeKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
