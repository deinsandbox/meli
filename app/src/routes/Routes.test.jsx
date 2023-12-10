import { it, expect, describe } from 'vitest'
import { RouterProvider, createBrowserRouter, createMemoryRouter } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
      const message = screen.getByText('no existe', { exact: false, ignore: true })
      expect(message).toBeInTheDocument()
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
    const message = screen.getByText('no existe', { exact: false, ignore: true })
    expect(message).toBeInTheDocument()
  })

  it('should navigate from error to home', async () => {
    userEvent.setup()

    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/error'],
    })
    render(<RouterProvider router={router} />)
    const message = screen.getByText('no existe', { exact: false, ignore: true })
    expect(message).toBeInTheDocument()

    const link = screen.getByText('ir a', { exact: false, ignore: true })
    await userEvent.click(link)

    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })
})
