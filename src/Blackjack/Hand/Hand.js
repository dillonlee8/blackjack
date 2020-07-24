import React from 'react'

function Hand({hand, points, holder, testid}) {
  const isPlayer = holder === 'Player'

  return (
    <div className="hand" data-testid={testid}>
      <h2>{holder}</h2>
        {hand.map(({suit, value}) => (
          <div data-testid="card" key={suit+value} className="card">{suit} {value}</div>
        ))}
        {isPlayer && <p>Points: {points}</p>}
      </div>
  )
}

export default Hand