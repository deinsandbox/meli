import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

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

  return <div>Result {params['search']}</div>
}

export default Result
