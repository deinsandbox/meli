import { useEffect, useState } from 'react'
import { getItemService } from '../services/getItem'
import { getCategories } from '../services/getCategories'

const useItem = (id) => {
  const initState = {
    data: {},
    isLoading: true,
    isError: false,
  }
  const [data, setData] = useState(initState)

  useEffect(() => {
    return () => {
      getItemService(id)
        .then((response) => {
          setData((prev) => ({ ...prev, data: response }))

          if ('category_id' in response.item) {
            getCategories(response?.item?.category_id).then((response) => {
              setData((prev) => ({ ...prev, data: { ...prev.data, path: response?.path ?? [] } }))
            })
          }
        })
        .catch(() => {
          setData((prev) => ({ ...prev, isError: true }))
        })
        .finally(() => {
          setData((prev) => ({ ...prev, isLoading: false }))
        })
    }
  }, [id])

  return data
}

export default useItem
