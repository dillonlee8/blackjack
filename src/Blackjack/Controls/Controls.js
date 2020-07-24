import React from 'react'
import {DEAL_PLAYER_CARD, DEAL_DEALER_CARD, PLAYER_FINISHED } from '../actions'

function Controls({dispatch}) {
  function hit() {
    dispatch({type: DEAL_PLAYER_CARD})
  }
  
  function stick() {
    dispatch({type: PLAYER_FINISHED})
    dispatch({type: DEAL_DEALER_CARD})
  }
  return (
    <div>
        <button onClick={hit}>Hit</button>
        <button onClick={stick}>Stick</button>
    </div>
  )
}

export default Controls