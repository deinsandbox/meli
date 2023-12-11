import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import './App.scss'
import routesConfig from './routes/routes.config.jsx'

import Header from './components/Header.jsx'
import Search from './components/Search.jsx'

const router = createBrowserRouter(routesConfig)

function App() {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App
