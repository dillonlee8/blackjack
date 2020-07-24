import React from 'react'
import { suitMap } from '../constants'
import style from '../Hand.module.css'

function PlayerHand({hand, points}) {
  return (
    <div className={style.hand} data-testid="player-hand">
      <h2 className={style.header}>Player</h2>
      <div className={style.handRow}>
      {hand.map(({suit, value}) => (
        <div 
          className={style.card} 
          data-testid="card" 
          key={suit+value}>
            {suitMap[suit]} <span>{value}</span>
        </div>
      ))}
      <p>Points:{points}</p>
      </div>
    </div>
  )
}

export default PlayerHand