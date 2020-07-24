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
    
  })
})