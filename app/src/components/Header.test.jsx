import { it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  it('should render the header', () => {
    render(<Header />)
    screen.getByAltText(/Mercado Libre/i)
  })
})
