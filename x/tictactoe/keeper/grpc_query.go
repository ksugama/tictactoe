package keeper

import (
	"github.com/ksugama/tictactoe/x/tictactoe/types"
)

var _ types.QueryServer = Keeper{}
