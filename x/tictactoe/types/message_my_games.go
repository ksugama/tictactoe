package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMyGames = "my_games"

var _ sdk.Msg = &MsgMyGames{}

func NewMsgMyGames(creator string) *MsgMyGames {
	return &MsgMyGames{
		Creator: creator,
	}
}

func (msg *MsgMyGames) Route() string {
	return RouterKey
}

func (msg *MsgMyGames) Type() string {
	return TypeMsgMyGames
}

func (msg *MsgMyGames) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMyGames) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMyGames) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
