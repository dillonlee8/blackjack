import React from 'react'
import { render, fireEvent, within } from '@testing-library/react';
import Blackjack from './Blackjack';

describe('Blackjack', () => {
  let app
  
  describe('when the game is loaded', () => {
    beforeEach(() => {
      app = render(<Blackjack />)
    })

    it('should display the play button', () => {
      expect(app.getByText('PLAY')).toBeInTheDocument()
    })

    describe('when a user clicks on play', () => {
      beforeEach(() => {
        fireEvent.click(app.getByText('PLAY'))
      })
      
      it('should display two cards for the player', () => {
        const hand = app.getByTestId('player-hand')
        const cards = hand.querySelectorAll('.card')
        expect(cards.length).toEqual(2)
      })

      it('should display one card for the dealer', () => {
        const hand = app.getByTestId('dealer-hand')
        const cards = hand.querySelectorAll('.card')
        expect(cards.length).toEqual(1)
      })

      it('should display the total points for the player', () => {
        expect(app.getByText(/Points/)).toHaveTextContent(/Points: \d+/)
      })

    })
  })
})