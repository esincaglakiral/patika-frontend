import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'


import EmojiResults from '../EmojiResults'

describe('Emoji result list tests', () => {
  beforeEach(() => {
    render(<EmojiResults />)
  })

  test('The list should be filtered emojis by input', () => {
    const inputNode = document.getElementsByTagName("input")[0]
    userEvent.type(inputNode, "Champagne")
    expect(screen.getByText("Champagne")).toBeInTheDocument()
  })
})