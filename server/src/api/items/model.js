import { getDecimalLength } from '../../helpers/currency.js'
import { getImage } from '../../helpers/images.js'

export const parceItemModel = (data) => {
  try {
    const {
      id,
      title,
      price,
      currency_id,
      thumbnail,
      secure_thumbnail,
      pictures,
      condition,
      shipping: { free_shipping },
      sold_quantity,
    } = data?.item ?? {}

    const { plain_text } = data?.description ?? {}

    const item = {
      id,
      title: title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: getDecimalLength(price) ?? 2,
      },
      picture: getImage(thumbnail, secure_thumbnail, pictures),
      condition: condition,
      free_shipping: free_shipping,
      sold_quantity: sold_quantity ?? 0,
      description: plain_text,
    }

    return item
  } catch (error) {
    console.error('Model Error => Items: ', error)
    return {}
  }
}
