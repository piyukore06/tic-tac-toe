import React from 'react';
import { BoxSize, PlayerType } from '../App';

const Container = ({ hasWon, boxState, onIndexClick }: { hasWon: boolean, boxState: Array<PlayerType | ''>, onIndexClick: (index: number) => void}) => {

  return (
    <div className="container">
    {Array(BoxSize).fill(0).map((_, index) => (
      <button disabled={hasWon} key={index} onClick={() => onIndexClick(index)} className="box">{boxState[index]}</button>
    ))}
    </div>
  );
}

export default Container;
