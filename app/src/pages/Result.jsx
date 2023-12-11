import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import './Result.scss'

const params = {}

const Result = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  searchParams.forEach((value, key) => {
    params[key] = value
  })

  useEffect(() => {
    if (!('search' in params)) {
      return navigate('/error')
    }
  }, [navigate])

  return <section className="result-container">Result {params['search']}</section>
}

export default Result
