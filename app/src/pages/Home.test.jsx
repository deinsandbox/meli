import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('App', () => {
  it('renders headline', () => {
    render(<Home />)

    screen.debug()

    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })
})
