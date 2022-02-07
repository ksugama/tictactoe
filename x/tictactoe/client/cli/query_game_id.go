package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/ksugama/tictactoe/x/tictactoe/types"
	"github.com/spf13/cobra"
)

func CmdShowGameId() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-game-id",
		Short: "shows gameId",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetGameIdRequest{}

			res, err := queryClient.GameId(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
