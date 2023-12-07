import { SERVER_API_URL, SEARCH_ENDPOINT } from '../../config/config.js'

export const getQuery = async (q, limit = 4) => {
  const result = {
    data: {},
  }

  try {
    const url = new URL(`${SERVER_API_URL}/${SEARCH_ENDPOINT}`)
    url.searchParams.set('q', q)
    url.searchParams.set('limit', limit)

    const response = await fetch(url.toString())
    if (!response?.ok) {
      throw new Error(response.statusText)
    }

    result.data = await response.json()
    return result
  } catch (error) {
    console.error('Service Error => Search: ', error)
    result.ok = false
  }

  return result
}
