export {
  shuffleCards,
  handValue
}

function shuffleCards(cards) {
  const shuffledCards = cards
  .map(card => ({sort: Math.random(), value: card}))
  .sort((a, b) => a.sort - b.sort)
  .map(card => card.value)
  
  if(JSON.stringify(shuffledCards) === JSON.stringify(cards)){
    return shuffledCards(cards)
  }

  return shuffledCards
}

function handValue(hand) {

  let hasAce = false

  let value = hand.reduce((acc, curr) => {
    if(typeof curr.value === 'number'){
      return acc + curr.value
    }

    if(curr.value === 'A') {
      hasAce = true
      return acc + 11
    }
    
    return acc + 10
  }, 0)

  if(value > 21 && hasAce) {
    return value - 10
  }

  return value
}