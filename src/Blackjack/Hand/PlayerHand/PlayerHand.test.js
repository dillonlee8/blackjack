import React from 'react'
import PlayerHand from './PlayerHand'
import { render } from '@testing-library/react'

describe('PlayerHand', () => {
  let app

  describe('when the game is in play', () => {
    beforeEach(() => {
      const props = {
        hand: [
          {suit: 'hearts', value: 2},
          {suit: 'diamonds', value: 'A'},
        ],
        points: 19,
        gameFinished: false
      }
      app = render(<PlayerHand {...props} />)
    })

    it('should display the holder', () => {
      expect(app.getByText('Player')).toBeInTheDocument()
    })

    it('should display the points', () => {
      expect(app.queryByText(/Points/)).toBeInTheDocument()
    })

    it('should display one card', () => {
      const cards =  app.getAllByTestId('card')
      expect(cards.length).toEqual(2)
    })
  })
})