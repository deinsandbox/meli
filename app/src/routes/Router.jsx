import { createBrowserRouter } from 'react-router-dom'

import { Home } from './Pages/Home.jsx'
import { Result } from './Pages/Result.jsx'
import { Item } from './Pages/Item.jsx'

import { Error } from './Error.jsx'

const routerConfig = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/items',
    element: <Result />,
  },
  {
    path: '/items/:id',
    element: <Item />,
  },
]

export const Router = createBrowserRouter(routerConfig)
