package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdMakeMove() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "make-move [game-id] [pos-x] [pos-y]",
		Short: "Broadcast message makeMove",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argGameId := args[0]
			argPosX, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argPosY, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMakeMove(
				clientCtx.GetFromAddress().String(),
				argGameId,
				argPosX,
				argPosY,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
