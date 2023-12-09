import { it, expect, describe } from 'vitest'
import { RouterProvider, createBrowserRouter, createMemoryRouter } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'

import routesConfig from './routes.config.jsx'

describe('Router', () => {
  it('should render the home', async () => {
    const router = createBrowserRouter(routesConfig)
    render(<RouterProvider router={router} />)
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })

  it('should render the error page when not use search as query parameter', async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/items?q=bar'],
    })
    render(<RouterProvider router={router} />)
    await waitFor(() => {
      expect(screen.getByText(/Oops!/i)).toBeInTheDocument()
    })
  })

  it('should render the query result page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/items?search=foo'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText(/Result/i)).toBeInTheDocument()
    expect(screen.getByText(/foo/i)).toBeInTheDocument()
  })

  it('should render the item page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/items/foo'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText(/Item/i)).toBeInTheDocument()
    expect(screen.getByText(/foo/i)).toBeInTheDocument()
  })

  it('should show an error when path not exist', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/foo'],
    })
    render(<RouterProvider router={router} />)
    expect(screen.getByText(/Oops!/i)).toBeInTheDocument()
  })
})
