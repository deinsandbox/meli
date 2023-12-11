export const getCategories = async (id) => {
  try {
    const serverUrl = import.meta.env.VITE_API_SERVER_URL ?? ''
    if (!serverUrl) {
      throw new Error('Server URL not found')
    }

    const url = new URL(id, `${serverUrl}/api/categories/`)

    const response = await fetch(url.toString())
    if (response.status === 200) {
      const result = await response.json()
      return result
    }
  } catch (error) {
    console.error('Service Categories => Error', error)
    throw new Error('Service Categories => Error')
  }
}
