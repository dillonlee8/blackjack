import cards from './data/deck_of_cards.json'
import { shuffleCards } from './utils'

describe('utils', () => {

  describe('shuffleCards', () => {
    let shuffledCards
    beforeEach(() => {
      shuffledCards = shuffleCards(cards)
    })

    it('should return the same amount of cards', () => {
      expect(shuffledCards.length).toEqual(cards.length)
    })

    it('should randomize the cards', () => {
      expect(JSON.stringify(shuffledCards)).not.toEqual(JSON.stringify(cards))
    })
  })
})