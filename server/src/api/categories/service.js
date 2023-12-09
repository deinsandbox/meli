import { SERVER_API_URL, CATEGORIES_ENDPOINT } from '../../config/config.js'

export const getCategoryById = async (id) => {
  const result = {
    data: {},
  }

  try {
    const url = new URL(id, `${SERVER_API_URL}/${CATEGORIES_ENDPOINT}`)

    const response = await fetch(url.toString())
    const data = await response.json()
    if (data.error) {
      result.error = data.error
    } else {
      result.data = data
    }
    return result
  } catch (error) {
    console.error('Service Error => Categories: ', error)
    result.ok = false
  }

  return result
}
