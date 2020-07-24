import React, { useReducer } from 'react'
import { 
  START_GAME, 
  DEAL_PLAYER_CARD, 
  DEAL_DEALER_CARD,
} from './actions'
import { initialState, reducer } from './reducer'
import Controls from './Controls/Controls'
import Summary from './Summary/Summary'
import style from './Blackjack.module.css'
import DealerHand from './Hand/DealerHand/DealerHand'
import PlayerHand from './Hand/PlayerHand/PlayerHand'


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
    return <button className={style.playButton} onClick={play}>PLAY</button>
  }

  return (
    <div className={style.container}>
      <DealerHand
        hand={dealerHand}
        points={dealerPoints}
        gameFinished={gameFinished}
       />

      <PlayerHand 
        hand={playerHand}
        points={playerPoints}
      />
      
      {!gameFinished 
      ? <Controls playerPoints={playerPoints} dispatch={dispatch}/> 
      : <Summary playerPoints={playerPoints} dealerPoints={dealerPoints}/>}
      
    </div>
  )
}


export default Blackjack;