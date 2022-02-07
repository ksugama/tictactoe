package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/ksugama/tictactoe/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgMyGames_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgMyGames
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgMyGames{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgMyGames{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
