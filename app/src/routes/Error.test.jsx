import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import routesConfig from './routes.config'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

describe('Error', () => {
  it('should render the Error component', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/error'],
    })
    render(<RouterProvider router={router} />)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    const altTextImage = screen.getByAltText('Laptop', { exact: false, ignore: true })
    expect(altTextImage).toBeInTheDocument()

    const message = screen.getByText('no existe', { exact: false, ignore: true })
    expect(message).toBeInTheDocument()

    const link = screen.getByText('ir a', { exact: false, ignore: true })
    expect(link).toBeInTheDocument()
  })
})
