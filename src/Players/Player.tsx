import React from 'react';
import { PlayerType } from '../App';

const Player = (props: { hasWon: boolean, playerNo: PlayerType, onNewGame: () => void }) => {
  return (
    <div className="player">
        Player {props.playerNo} {props.hasWon && "🎉🥳"}
        {props.hasWon && <button onClick={props.onNewGame}>New Game</button>}

    </div>
  );
}

export default Player;
