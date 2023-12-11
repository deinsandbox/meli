import { getDecimalLength } from '../../helpers/currency.js'
import { getImage } from '../../helpers/images.js'

export const parseItemModel = (data) => {
  try {
    const {
      id,
      title,
      category_id,
      price,
      currency_id,
      thumbnail,
      secure_thumbnail,
      pictures,
      condition,
      shipping: { free_shipping = false } = {},
      sold_quantity,
    } = data?.item ?? {}

    const { plain_text } = data?.description ?? {}

    const item = {
      id,
      title,
      category_id,
      price: {
        currency: currency_id,
        amount: price,
        decimals: (Boolean(price) && getDecimalLength(price)) ?? 2,
      },
      picture: getImage(thumbnail, secure_thumbnail, pictures),
      condition,
      free_shipping: free_shipping ?? false,
      sold_quantity: sold_quantity ?? 0,
      description: plain_text,
    }

    return item
  } catch (error) {
    console.error('Model Error => Items: ', error)
    return {}
  }
}
