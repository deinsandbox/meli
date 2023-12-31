import { SERVER_API_URL, ITEM_ENDPOINT, ITEM_DESCRIPTION_ENDPOINT } from '../../config/config.js'

export const getItemById = async (id) => {
  const result = {
    data: {},
  }

  try {
    const urlItem = new URL(id, `${SERVER_API_URL}/${ITEM_ENDPOINT}`)
    const urlDescription = new URL(ITEM_DESCRIPTION_ENDPOINT, `${urlItem}/`)
    const promisesList = [urlItem, urlDescription].map(async (url) => await fetch(url.toString()))

    const [resItem, resDescription] = (await Promise.all(promisesList)) ?? []
    const item = await resItem.json()
    const description = await resDescription.json()

    const error = item?.error || description?.error
    if (error) {
      result.error = error
    } else {
      result.data.item = item
      result.data.description = description
    }
  } catch (error) {
    console.error('Service Error => Items: ', error)
    result.ok = false
  }

  return result
}
