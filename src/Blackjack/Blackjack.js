import React, { useReducer } from 'react'
import cards from '../data/deck_of_cards.json'
import { shuffleCards, handValue } from '../utils';

const START_GAME = 'START_GAME'
const DEAL_PLAYER_CARD = 'DEAL_PLAYER_CARD'
const DEAL_DEALER_CARD = 'DEAL_DEALER_CARD'
const PLAYER_FINISHED = 'PLAYER_FINISHED'
const FINISH_GAME = 'FINISH_GAME'

function reducer(state, action) {
  switch(action.type) {
    case START_GAME:
      return {
        ...state,
        cards: shuffleCards(cards),
        gameStarted: true,
      }

    case DEAL_PLAYER_CARD:
      {
        const playerCard = state.cards[0]
        const cards = state.cards.slice(1)
        const playerHand = [playerCard, ...state.playerHand]
        const playerPoints = handValue(playerHand)
        const gameFinished = playerPoints >= 21
      
        return {
          ...state,
          playerHand,
          playerPoints,
          cards,
          gameFinished
        }
      }

    case DEAL_DEALER_CARD:
      {
        const dealerCard = state.cards[0]
        const cards = state.cards.slice(1)
        const dealerHand = [dealerCard, ...state.dealerHand]
        const dealerPoints = handValue(dealerHand)
        const gameFinished = dealerPoints >= 21
        
        return {
          ...state,
          dealerHand,
          dealerPoints,
          cards,
          gameFinished
        }
      }
    case PLAYER_FINISHED:
      return {
        ...state,
        playerFinished: true
      } 
    case FINISH_GAME:
      return {
        ...state,
        gameFinished: true
      }
      
    default:
      return state
      
  }
}

const initialState = {
  cards:[],
  playerHand: [],
  playerPoints: 0,
  dealerHand: [],
  dealerPoints: 0,
  gameStarted: false
}

function Blackjack() {
  const [{gameFinished, playerFinished, gameStarted, playerPoints, dealerPoints, dealerHand, playerHand}, dispatch] = useReducer(reducer, initialState)


  function play() {
    dispatch({type: START_GAME})
    dispatch({type: DEAL_PLAYER_CARD})
    dispatch({type: DEAL_DEALER_CARD})
    dispatch({type: DEAL_PLAYER_CARD})
  }

  function hit() {
    dispatch({type: DEAL_PLAYER_CARD})
  }
  
  function stick() {
    dispatch({type: PLAYER_FINISHED})
    dispatch({type: DEAL_DEALER_CARD})
  }

  if(!gameFinished && playerFinished && dealerPoints < 21) {
    dispatch({type: DEAL_DEALER_CARD})
  }

  if(!gameStarted) {
    return <button onClick={play}>PLAY</button>
  }

  if(gameFinished) {
    const playerWins = (playerPoints <= 21 && playerPoints > dealerPoints) || dealerPoints > 21 
    return (
      <>
        {playerWins ? <p>YOU WIN!</p> : <p>DEALER WINS</p>}
        <p>player points {playerPoints}</p>
        <p>dealer points {dealerPoints}</p>
      </>
    )
  }

  return (
    <div>
      <div className="dealerHand">
      <h2>Dealer</h2>
        {dealerHand.map(({suit, value}) => (
          <div key={suit+value} className="card">{suit} {value}</div>
        ))}
      </div>

      <div className="playerHand">
      <h2>Player</h2>
        {playerHand.map(({suit, value}) => (
          <div key={suit+value} className="card">{suit} {value}</div>
        ))}
        <p>Value: {playerPoints}</p>
      </div>

      <div>
        <button disabled={playerPoints === 21} onClick={hit}>Hit</button>
        <button onClick={stick}>Stick</button>
      </div>
    </div>
  )
}

export default Blackjack;