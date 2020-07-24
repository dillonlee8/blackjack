import React from 'react'

function Hand({hand, points, holder, testid}) {
  const isHolderPlayer = holder === 'Player'

  return (
    <div className="hand" data-testid={testid}>
      <h2>{holder}</h2>
        {hand.map(({suit, value}) => (
          <div key={suit+value} className="card">{suit} {value}</div>
        ))}
        {isHolderPlayer && <p>Points: {points}</p>}
      </div>
  )
}

export default Hand