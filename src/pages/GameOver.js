import React from 'react';
import {useScore} from '../contexts/ScoreContext'
import {StyledLinkButton} from '../styled/Navbar'
const GameOver = ({history}) => {
  
  const [score] = useScore();

  if(score === -1){
    history.push('/')
  }

  return (
    <div>
      <h1>Game Over</h1>
      <p>{score}</p>
      <StyledLinkButton to="/">Go Home</StyledLinkButton>
      <StyledLinkButton to="/game">Play Again</StyledLinkButton>
    </div>
  );
}

export default GameOver;
