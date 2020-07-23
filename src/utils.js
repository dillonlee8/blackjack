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

  let value = hand.reduce((acc, curr) => {
    if(typeof curr.value === 'number'){
      return {value: acc.value + curr.value}
    }
    
    return acc.value + 10
  })

  if(value > 21 && hand.some(card => card.value === 'A')) {
    return value - 9
  }

  return value
}