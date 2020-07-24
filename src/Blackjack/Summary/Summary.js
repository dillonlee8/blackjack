import React from 'react'

function Summary({playerPoints, dealerPoints}) {
  const playerWins = (playerPoints <= 21 && playerPoints > dealerPoints) || dealerPoints > 21 


  return (
    <>
        {playerWins ? <p>YOU WIN!</p> : <p>DEALER WINS</p>}
        <p>player points {playerPoints}</p>
        <p>dealer points {dealerPoints}</p>
      </>
  )
}

export default Summary