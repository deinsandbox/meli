import { it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Search from './Search'

describe('Search', () => {
  it('should render the search', () => {
    render(<Search />)
    screen.getByPlaceholderText(/Nunca dejes de buscar/i)
  })
})
