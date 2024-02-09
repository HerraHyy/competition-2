import React, { useState } from 'react';
import { diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6, } from '../img/index.js';

const Dice = () => {
  const diceImages = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
  ];
  const emptyDice = diceEmpty;
  const [dice, setDice] = useState(diceImages[Math.floor(Math.random() * diceImages.length)]);

  const handleClick = () => {
    setDice(emptyDice);
    setTimeout(() => {
      setDice(diceImages[Math.floor(Math.random() * diceImages.length)]);
    }, 1000);
  };

  return (
    <img 
      src={dice} 
      alt="dice" 
      onClick={handleClick} 
      style={{ cursor: 'pointer', width: '200px', height: '200px'}}
    />
  );
};

export default Dice;

// can be used like this: <Dice />