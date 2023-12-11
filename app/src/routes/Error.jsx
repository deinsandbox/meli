import { NavLink, useRouteError } from 'react-router-dom'
import NotFoundImage from '../assets/not-found.svg'

import './Error.scss'

const Error = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <section className="error-page">
      <img src={NotFoundImage} alt="Laptop buscando página con una lupa" />

      <p className="error-page-message">Parece que esta página no existe</p>

      <NavLink to="/">Ir a la página principal</NavLink>
    </section>
  )
}

export default Error
