import { it, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Breadcrumb from './Breadcrumb'

describe('Breadcrumb', () => {
  it('renders breadcrumb with multiple crumbs', () => {
    const path = [{ name: 'Home' }, { name: 'Products' }, { name: 'Shirts' }]
    render(<Breadcrumb path={path} />)
    screen.getByText(/Home/i)
    screen.getByText(/Products/i)
    screen.getByText(/Shirts/i)
  })

  it('renders breadcrumb with single crumb', () => {
    const path = [{ name: 'Home' }]
    render(<Breadcrumb path={path} />)
    screen.getByText(/Home/i)
  })
})
