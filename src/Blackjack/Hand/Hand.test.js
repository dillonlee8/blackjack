import React from 'react'
import { render } from '@testing-library/react';
import Hand from './Hand';

describe('Hand', (() => {
  let app

  describe('when the component is mounted for the player', () => {
    beforeEach(() => {
      const props = {
        holder: 'Player',
        hand: [
          {suit: 'diamoinds', value: 8},
          {suit: 'spades', value: 'A' },
        ],
        points: 12
      }
      app = render(<Hand {...props} />)
    })

    it('should display the holder', () => {
      expect(app.getByText('Player')).toBeInTheDocument()
    })

    it('should display the points', () => {
      expect(app.getByText(/Points/)).toBeInTheDocument()
    })

    it('should display two cards', () => {
      const cards = app.getAllByTestId('card')
      expect(cards.length).toEqual(2)
    })
  })

  describe('when the component is mounted for the dealer', () => {
    beforeEach(() => {
      const props = {
        holder: 'Dealer',
        hand: [
          {suit: 'clubs', value: 2},
        ],
        points: 19
      }
      app = render(<Hand {...props} />)
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

}))