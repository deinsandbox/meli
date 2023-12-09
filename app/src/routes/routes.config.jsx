import Home from '../pages/Home.jsx'
import Result from '../pages/Result.jsx'
import Item from '../pages/Item.jsx'

import Error from './Error.jsx'

const routesConfig = [
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

export default routesConfig
