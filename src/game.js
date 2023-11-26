import React, { useState, useEffect } from 'react';
import './App.css'; 
const Game = () => {
  const [player1Number, setPlayer1Number] = useState(0);
  const [player2Number, setPlayer2Number] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState('');
  const [turn, setTurn] = useState('player1');

  const handlePlayer1Action = (action) => {
    if (turn === 'player1') {
      const newValue = calculateNewValue(player1Number, action);
      setPlayer1Number(newValue);
      checkWinner('player1', newValue);
      setTurn('player2');
    }
  };

  const handlePlayer2Action = (action) => {
    if (turn === 'player2') {
      const newValue = calculateNewValue(player2Number, action);
      setPlayer2Number(newValue);
      checkWinner('player2', newValue);
      setTurn('player1');
    }
  };

  const calculateNewValue = (number, action) => {
    switch (action) {
      case '+':
        return number + 1;
      case '-':
        return number - 1;
      case '*':
        return number * 2;
      case '/':
        return number / 2;
      default:
        return number;
    }
  };

  const checkWinner = (player, number) => {
    if (number === 100) {
      setWinner(`Player ${player === 'player1' ? '1' : '2'} Wins!`);
      player === 'player1'
        ? setPlayer1Score(player1Score + 1)
        : setPlayer2Score(player2Score + 1);
      setPlayer1Number(0);
      setPlayer2Number(0);
    }
  };

  const startNewGame = () => {
    setWinner('');
    setTurn('player1');
    setPlayer1Number(Math.floor(Math.random() * 99) + 1);
    setPlayer2Number(Math.floor(Math.random() * 99) + 1);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div>
      <div>
        <span>Player 1 Score: {player1Score}</span>
        <input
          type="text"
          value={player1Number}
          onChange={(e) => setPlayer1Number(Number(e.target.value))}
        />
        <button onClick={() => handlePlayer1Action('+')}>+</button>
        <button onClick={() => handlePlayer1Action('-')}>-</button>
        <button onClick={() => handlePlayer1Action('*')}>*</button>
        <button onClick={() => handlePlayer1Action('/')}>/</button>
      </div>
      <div>
        <span>Player 2 Score: {player2Score}</span>
        <input
          type="text"
          value={player2Number}
          onChange={(e) => setPlayer2Number(Number(e.target.value))}
        />
        <button onClick={() => handlePlayer2Action('+')}>+</button>
        <button onClick={() => handlePlayer2Action('-')}>-</button>
        <button onClick={() => handlePlayer2Action('*')}>*</button>
        <button onClick={() => handlePlayer2Action('/')}>/</button>
      </div>
      <div>
        <span className='winner'>Winner: {winner}</span>
        <button className='newGameButton' onClick={startNewGame}>Start New Game</button>
      </div>
    </div>
  );
};

export default Game;
