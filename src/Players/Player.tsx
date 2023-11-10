import React from 'react';
import { PlayerType } from '../App';

const Player = (props: { hasWon: boolean | 'NOONE', playerNo: PlayerType, onNewGame: () => void }) => {
  return (
    <div className="player">
        Player {props.playerNo} 
        <br />
        {props.hasWon === 'NOONE' ? "No one won, Try Again!!" : props.hasWon && "🎉🥳"}
        <br />
        {props.hasWon && <button onClick={props.onNewGame}>New Game</button>}

    </div>
  );
}

export default Player;
