import React from 'react'
import Summary from './Summary'
import { render } from '@testing-library/react';

describe('Summary', () => {
  let app

  describe('when the player has more points than the dealer', () => {
    beforeEach(() => {
      const props = {
        playerPoints: 18,
        dealerPoints: 17
      }
      app = render(<Summary {...props}/>)
    })

    it('should display the player won', () => {
      expect(app.getByText('YOU WIN!')).toBeInTheDocument()
    })

    it('should display the player points', () => {
      expect(app.getByText('Player points: 18'))
    })

    it('should display the dealer points', () => {
      expect(app.getByText('Dealer points: 17'))
    })
  })

  describe('when the dealer has more points than the player', () => {
    beforeEach(() => {
      const props = {
        playerPoints: 17,
        dealerPoints: 18
      }
      app = render(<Summary {...props}/>)
    })

    it('should display the player won', () => {
      expect(app.getByText('DEALER WINS!')).toBeInTheDocument()
    })

    it('should display the player points', () => {
      expect(app.getByText('Player points: 17'))
    })

    it('should display the dealer points', () => {
      expect(app.getByText('Dealer points: 18'))
    })
  })

  describe('when the player has more points than the dealer but more than 21', () => {
    beforeEach(() => {
      const props = {
        playerPoints: 24,
        dealerPoints: 10
      }
      app = render(<Summary {...props}/>)
    })

    it('should diplay the dealer won', () => {
      expect(app.getByText('DEALER WINS!')).toBeInTheDocument()
    })
  })

  describe('when the dealer has more points than the player but more than 21', () => {
    beforeEach(() => {
      const props = {
        playerPoints: 20,
        dealerPoints: 25
      }
      app = render(<Summary {...props}/>)
    })

    it('should diplay the dealer won', () => {
      expect(app.getByText('YOU WIN!')).toBeInTheDocument()
    })
  })
})