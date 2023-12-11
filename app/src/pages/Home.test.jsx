import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Home from './Home'

describe('Home', () => {
  it('renders headline', () => {
    render(<Home />)
    const homeContainer = screen.getByTestId('home-container')
    expect(homeContainer).toBeInTheDocument()
  })
})
