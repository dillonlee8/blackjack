export {
  shuffleCards
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