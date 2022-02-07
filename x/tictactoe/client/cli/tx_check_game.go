package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCheckGame() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "check-game [game-id] [board]",
		Short: "Broadcast message checkGame",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argGameId := args[0]
			argBoard := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCheckGame(
				clientCtx.GetFromAddress().String(),
				argGameId,
				argBoard,
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
