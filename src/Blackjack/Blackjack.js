import React, { useState } from 'react'
import cards from '../data/deck_of_cards.json'
import { shuffleCards } from '../utils';

function Blackjack() {
  const [shuffledCards, setShuffledCards] = useState(shuffleCards(cards)) 
  const [playerHand, setPlayerHand] = useState([])
  const [dealerHand, setDealerHand] = useState([])
  const [gameStarted, setGameStarted] = useState(false)
  
  function play(){
    const pHand = shuffledCards.slice(0,2);
    const newCards = shuffledCards.slice(2);
    const dHand = newCards.slice(0, 1);
    
    setPlayerHand(pHand)
    setShuffledCards(newCards)
    setDealerHand(dHand)
    setGameStarted(true)

  }

  if(!gameStarted) {
    return  <button onClick={play}>PLAY</button>
  }

  return (
    <div>
      <div className="dealerHand">
        {playerHand.map(({suit, value}) => (
          <div key={suit+value} className="card">{suit} {value}</div>
        ))}
      </div>
      <div className="playerHand">
        {dealerHand.map(({suit, value}) => (
          <div key={suit+value} className="card">{suit} {value}</div>
        ))}
      </div>
    </div>
  )
}

export default Blackjack;