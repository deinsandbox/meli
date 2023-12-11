import { useEffect, useState } from 'react'
import { getItemService } from '../services/getItem'

const useItem = (id) => {
  const initState = {
    data: [],
    isLoading: true,
    isError: false,
  }
  const [data, setData] = useState(initState)

  useEffect(() => {
    return () => {
      try {
        getItemService(id).then((response) => {
          setData((prev) => ({ ...prev, isLoading: false, data: response }))
        })
      } catch {
        setData({ data: [], isLoading: false, isError: true })
      }
    }
  }, [id])

  return data
}

export default useItem
