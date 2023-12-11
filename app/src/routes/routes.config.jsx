import Home from '../pages/Home.jsx'
import Result from '../pages/Result.jsx'
import Product from '../pages/Product.jsx'

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
    element: <Product />,
  },
]

export default routesConfig
