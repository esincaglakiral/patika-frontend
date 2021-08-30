import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import EmojiResultRow from '../EmojiResultRow'

test("The emoji should be copied when onClick", () => {
  render(<EmojiResultRow symbol={'💯'} />)
  const copy = screen.getByText(/Click to copy emoji/i)
  userEvent.click(copy)
  expect(copy).toBeInTheDocument()
})
