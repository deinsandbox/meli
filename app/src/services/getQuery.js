export const getQueryService = async (query) => {
  try {
    const serverUrl = import.meta.env.VITE_API_SERVER_URL ?? ''
    if (!serverUrl) {
      throw new Error('Server URL not found')
    }

    const url = new URL(`${serverUrl}/api/items/`)
    url.searchParams.set('q', query)

    const response = await fetch(url.toString())
    if (response.status === 200) {
      const result = await response.json()
      return result
    }
  } catch (error) {
    console.error('Service Query => Error', error)
    throw new Error('Service Query => Error')
  }
}
