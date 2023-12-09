import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import './App.scss'
import routesConfig from './routes/routes.config.jsx'

const router = createBrowserRouter(routesConfig)

function App() {
  return <RouterProvider router={router} />
}

export default App
