import { getDecimalLength } from '../../helpers/currency.js'

const parseItem = (data) => {
  try {
    const {
      id,
      title,
      currency_id,
      price,
      thumbnail,
      condition,
      shipping: { free_shipping },
    } = data ?? {}

    const item = {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: getDecimalLength(price) ?? 2,
      },
      picture: thumbnail,
      condition,
      free_shipping,
    }
    return item
  } catch (error) {
    console.error('Model Error => Item: ', error)
    return
  }
}

export const parseQueryModel = (data) => {
  const result = {
    categories: [],
    items: [],
  }

  try {
    if (data?.results?.length === 0) {
      return result
    }

    data?.results?.forEach((res) => {
      const category = res.category_id
      if (category) {
        result.categories.push(category)
      }

      const item = parseItem(res) ?? {}
      if (item) {
        result.items.push(item)
      }
    })
  } catch (error) {
    console.error('Model Error => Search: ', error)
  }

  return result
}
