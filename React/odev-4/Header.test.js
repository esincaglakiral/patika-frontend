import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../Header'

describe('Header Tests', () => {
  beforeEach(() => {
    render(<Header />)
  })

  test('The header should have two cat image', () => {
    const img = screen.getAllByRole('img')
    expect(img.length).toEqual(2)
  })

  test('The header should have Emoji Search title', () => {
    const title = 'Emoji Search'
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
