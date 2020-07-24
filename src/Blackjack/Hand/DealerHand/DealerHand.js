import React from 'react'
import classnames from 'classnames'
import { suitMap } from '../constants'
import style from '../Hand.module.css'

function DealerHand({hand, points, gameFinished}) {
  return (
    <div className={style.hand} data-testid="dealer-hand">
      <h2 className={style.header}>Dealer</h2>
      <div className={style.handRow}>
      {hand.map(({suit, value}) => (
        <div 
          className={classnames(style.card, style.dealerCard)} 
          data-testid="card" 
          key={suit+value}>
            {gameFinished && <span>{suitMap[suit]} {value}</span>}
        </div>
      ))}
      {gameFinished && <p>Points:{points}</p>}
      </div>
    </div>
  )
}

export default DealerHand