import React from 'react'
import DealerHand from './DealerHand'
import { render } from '@testing-library/react'

describe('DealerHand', () => {
  let app

  describe('when the game is in play', () => {
    beforeEach(() => {
      const props = {
        hand: [
          {suit: 'clubs', value: 2},
        ],
        points: 19,
        gameFinished: false
      }
      app = render(<DealerHand {...props} />)
    })

    it('should display the holder', () => {
      expect(app.getByText('Dealer')).toBeInTheDocument()
    })

    it('should not display the points', () => {
      expect(app.queryByText(/Points/)).not.toBeInTheDocument()
    })

    it('should display one card', () => {
      const cards =  app.getAllByTestId('card')
      expect(cards.length).toEqual(1)
    })
  })

  describe('when the game is finished', () => {
    beforeEach(() => {
      const props = {
        hand: [
          {suit: 'clubs', value: 2},
        ],
        points: 19,
        gameFinished: true
      }
      app = render(<DealerHand {...props} />)
    })

    it('should display the points', () => {
      expect(app.queryByText(/Points/)).toBeInTheDocument()
    })

  })
})