package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCheckGame = "check_game"

var _ sdk.Msg = &MsgCheckGame{}

func NewMsgCheckGame(creator string, gameId string, board string) *MsgCheckGame {
	return &MsgCheckGame{
		Creator: creator,
		GameId:  gameId,
		Board:   board,
	}
}

func (msg *MsgCheckGame) Route() string {
	return RouterKey
}

func (msg *MsgCheckGame) Type() string {
	return TypeMsgCheckGame
}

func (msg *MsgCheckGame) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCheckGame) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCheckGame) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
