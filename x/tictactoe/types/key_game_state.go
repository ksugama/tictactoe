package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// GameStateKeyPrefix is the prefix to retrieve all GameState
	GameStateKeyPrefix = "GameState/value/"
)

// GameStateKey returns the store key to retrieve a GameState from the index fields
func GameStateKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
