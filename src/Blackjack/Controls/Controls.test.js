import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Controls from './Controls'

describe('Controls', () => {
  let app

  describe('when the component is mounted', () => {
    beforeEach(() => {
      app = render(<Controls />)
    })
  
    it('should display the hit button', () => {
      expect(app.getByText('Hit')).toBeInTheDocument()
    })
  
    it('should display the stick button', () => {
      expect(app.getByText('Stick')).toBeInTheDocument()
    })
  })

  describe('when hit is clicked', () => {
    let dispatch

    beforeEach(() => {
      dispatch = jest.fn()
      app = render(<Controls dispatch={dispatch} />)
      fireEvent.click(app.getByText('Hit'))
    })

    it('should call dispatch', () => {
      expect(dispatch).toHaveBeenCalledTimes(1)
    })
  })

  describe('when stick is clicked', () => {
    let dispatch

    beforeEach(() => {
      dispatch = jest.fn()
      app = render(<Controls dispatch={dispatch} />)
      fireEvent.click(app.getByText('Stick'))
    })

    it('should call dispatch twice', () => {
      expect(dispatch).toHaveBeenCalledTimes(2)
    })
  })
})