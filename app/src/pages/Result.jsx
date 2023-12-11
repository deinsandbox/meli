import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import './Result.scss'
import List from '../components/items/List'

const params = {}

const Result = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  searchParams.forEach((value, key) => {
    params[key] = value
  })

  useEffect(() => {
    if (!('search' in params) || params['search'] === '') {
      return navigate('/error')
    }
  }, [navigate])

  return (
    <section className="result-container">
      <List query={params['search']} />
    </section>
  )
}

export default Result
