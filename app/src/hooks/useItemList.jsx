import { useEffect, useState } from 'react'
import { getQueryService } from '../services/getQuery'
import { selectCategory } from '../helpers/categories'
import { getCategories } from '../services/getCategories'

const useItemList = (query) => {
  const initState = {
    data: {},
    isLoading: true,
    isError: false,
  }
  const [data, setData] = useState(initState)

  useEffect(() => {
    return () => {
      getQueryService(query)
        .then((response) => {
          setData((prev) => ({ ...prev, data: response }))

          if ('categories' in response) {
            const category = selectCategory(response?.categories)
            getCategories(category).then((response) => {
              setData((prev) => ({ ...prev, data: { ...prev.data, path: response.path } }))
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
  }, [query])

  return data
}

export default useItemList
