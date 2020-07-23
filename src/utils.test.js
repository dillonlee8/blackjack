import cards from './data/deck_of_cards.json'
import { shuffleCards, handValue } from './utils'

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

  describe('handValue', () => {
    it('should calculate the hand value', () => {
      const hand = [
        {suit: 'clubs', value: 4},
        {suit: 'hearts', value: 2},
        {suit: 'spades', value: 'K'},
      ]
      expect(handValue(hand)).toBe(16)
    })

    it('should count ace as 1 if the value is over 21', () => {
      const hand = [
        {suit: 'clubs', value: 8},
        {suit: 'hearts', value: 7},
        {suit: 'spades', value: 'A'},
      ]
      expect(handValue(hand)).toBe(16)
    })

    it('should count ace as 11 if the value is less that 21', () => {
      const hand = [
        {suit: 'clubs', value: 8},
        {suit: 'spades', value: 'A'},
      ]
      expect(handValue(hand)).toBe(19)
    })
  })
})