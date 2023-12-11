export const getItemService = async (id) => {
  try {
    const serverUrl = import.meta.env.VITE_API_SERVER_URL ?? ''
    if (!serverUrl) {
      throw new Error('Server URL not found')
    }

    const url = new URL(id, `${serverUrl}/api/items/`)

    const response = await fetch(url.toString())
    if (response.status === 200) {
      const result = await response.json()
      return result
    }
  } catch (error) {
    console.error('Service Item => Error', error)
    throw new Error('Service Item => Error')
  }
}
