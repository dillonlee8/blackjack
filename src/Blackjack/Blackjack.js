import React, { useReducer } from 'react'
import Hand from './Hand/Hand'
import { 
  START_GAME, 
  DEAL_PLAYER_CARD, 
  DEAL_DEALER_CARD,
} from './actions'
import { initialState, reducer } from './reducer'
import Controls from './Controls/Controls'
import Summary from './Summary/Summary'


function Blackjack() {
  const [{gameFinished, playerFinished, gameStarted, playerPoints, dealerPoints, dealerHand, playerHand}, dispatch] = useReducer(reducer, initialState)


  function play() {
    dispatch({type: START_GAME})
    dispatch({type: DEAL_PLAYER_CARD})
    dispatch({type: DEAL_DEALER_CARD})
    dispatch({type: DEAL_PLAYER_CARD})
  }

  if(!gameFinished && playerFinished && dealerPoints < 21) {
    dispatch({type: DEAL_DEALER_CARD})
  }

  if(!gameStarted) {
    return <button onClick={play}>PLAY</button>
  }

  if(gameFinished) {
    return <Summary playerPoints={playerPoints} dealerPoints={dealerPoints}/>
  }

  return (
    <div>
      <Hand 
        holder="Dealer"
        hand={dealerHand}
        points={dealerPoints}
      />
        
      <Hand 
        holder="Player"
        hand={playerHand}
        points={playerPoints}
      />

      <Controls playerPoints={playerPoints} dispatch={dispatch}/>
    </div>
  )
}

export default Blackjack;