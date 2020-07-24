import cards from '../data/deck_of_cards.json'
import { START_GAME, DEAL_PLAYER_CARD, DEAL_DEALER_CARD, PLAYER_FINISHED, FINISH_GAME } from './actions'
import {shuffleCards, handValue} from '../utils'

export const initialState = {
  cards,
  playerHand: [],
  playerPoints: 0,
  dealerHand: [],
  dealerPoints: 0,
  gameStarted: false
}

export function reducer(state, action) {
  switch(action.type) {
    case START_GAME:
      return {
        ...state,
        cards: shuffleCards(state.cards),
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