import React from 'react'

function Hand({hand, points, holder}) {
  return (
    <div className="hand">
      <h2>{holder}</h2>
        {hand.map(({suit, value}) => (
          <div key={suit+value} className="card">{suit} {value}</div>
        ))}
        <p>Value: {points}</p>
      </div>
  )
}

export default Hand