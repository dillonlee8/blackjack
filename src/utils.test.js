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

    it('should have the same structure in the items returned', () => {
      expect(shuffledCards[0]).toEqual(expect.objectContaining({
        suit: expect.any(String),
        value: expect.anything(),
      }))
    })

    it('should randomize the cards', () => {
      expect(JSON.stringify(shuffledCards)).not.toEqual(JSON.stringify(cards))
    })
  })
})