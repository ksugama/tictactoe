package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMakeMove = "make_move"

var _ sdk.Msg = &MsgMakeMove{}

func NewMsgMakeMove(creator string, gameId string, posX uint64, posY uint64) *MsgMakeMove {
	return &MsgMakeMove{
		Creator: creator,
		GameId:  gameId,
		PosX:    posX,
		PosY:    posY,
	}
}

func (msg *MsgMakeMove) Route() string {
	return RouterKey
}

func (msg *MsgMakeMove) Type() string {
	return TypeMsgMakeMove
}

func (msg *MsgMakeMove) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMakeMove) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMakeMove) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
