import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './Container/Container';
import Player from './Players/Player';
const allEqual = (arr: Array<PlayerType | ''>) => arr.every(v => v === arr[0]);
export const BoxSize = 9;
export type PlayerType = 'X' | 'O';
const Conditions = [
  [0, 1, 2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function App() {
  const [hasWon, setHasWon] = useState<boolean | 'NOONE'>(false);
  const [currentPlayer, setCurrentPlayer] = useState<PlayerType>('X');
  const [boxState, setBoxState] = useState<Array<PlayerType | ''>>(Array(BoxSize).fill(''));

  const onNewGame = () => {
    setHasWon(false);
    setCurrentPlayer('X');
    setBoxState(Array(BoxSize).fill(''));
  };

  const onIndexClick = (index: number) => {
    setCurrentPlayer((play) =>  play === 'X' ? 'O' : 'X');
    if (index <= BoxSize && boxState[index] === '') {
      setBoxState((lastBoxState) => ([...lastBoxState.slice(0, index), currentPlayer, ...lastBoxState.slice(index + 1)]));
    }
  };

  const spreadJoy = (playerType: PlayerType) => {
    setCurrentPlayer(playerType);
    setHasWon(true);
  };

  useEffect(() => {
      // TODO Tests
      const joyNotSpread = !Conditions.filter((condition) => {
        const mapping = condition.map((index) => boxState[index]).filter(each => !!each);
        if (mapping.length ===3 && allEqual(mapping)) {
          spreadJoy(mapping[0] as PlayerType);
          return true;
        }
        return false;
      }).length;
      if (boxState.filter(Boolean).length === BoxSize && joyNotSpread) {
        setHasWon('NOONE');
      }
      
 }, [boxState]);

  return (
    <div className="app">
      <h1 className="header">
        Tic-Tac-Toe
        <br />
      </h1>
      <Player onNewGame={onNewGame} hasWon={hasWon} playerNo={currentPlayer} />
      <div className="body">
        <Container hasWon={hasWon} boxState={boxState} onIndexClick={onIndexClick} />
      </div>
      <div className="footer">Copyright © 2023</div>
    </div>
  );
}

export default App;
