import { useEffect, useState } from 'react'
import { getQueryService } from '../services/getQuery'

const useItemList = (query) => {
  const initState = {
    data: [],
    isLoading: true,
    isError: false,
  }
  const [data, setData] = useState(initState)

  useEffect(() => {
    return () => {
      try {
        getQueryService(query).then((response) => {
          setData((prev) => ({ ...prev, isLoading: false, data: response }))
        })
      } catch {
        setData({ data: [], isLoading: false, isError: true })
      }
    }
  }, [query])

  return data
}

export default useItemList
