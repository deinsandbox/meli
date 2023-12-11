import Loading from '../../routes/Loading'

import useItem from '../../hooks/useItem'

import { currencyFormat, getDecimalPart } from '../../helpers/currency'

import IconShipping from '../../assets/icon-shipping.png'
import DummyItem from '../../assets/dummy-item.svg'

import './Item.scss'

const Item = ({ id }) => {
  const { data, isLoading, isError } = useItem(id) ?? {}

  if (isError) {
    // TODO: error component
    return <div>Error</div>
  }

  if (isLoading) {
    // TODO: loading styles (like error in middle)
    return <Loading />
  }

  const { title, price, picture, condition, free_shipping, sold_quantity, description } = data?.item ?? {}

  const { amount, currency } = price ?? {}
  const currencyLocale = import.meta.env.VITE_CURRENCY_LOCALE ?? ''
  const value = currencyFormat(amount, currencyLocale, currency, 0)
  const decimals = getDecimalPart(amount, 2)

  const textCondition = condition ? 'Nuevo' : 'Usado'


  return (
    <>
      <div className="item-container">
        <article className="item-product">
          <div className="item-image">
            <img src={picture || DummyItem} alt={title} />
          </div>
          <div className="item-description">
            {Boolean(description) && description !== '.' && (
              <>
                <h2 className="item-description-title">Descripción del producto:</h2>
                <div>{description}</div>
              </>
            )}
          </div>
        </article>
        <aside className="item-info">
          <div className="item-condition">
            {textCondition} - Vendidos {sold_quantity}
          </div>
          <div className="item-title">{title}</div>
          <div className="item-pricing">
            <span className="item-price">{value}</span>
            <span className="item-decimals">{decimals}</span>
            <span className="item-shipping">
              {Boolean(free_shipping) && <img src={IconShipping} alt="Envío gratis" />}
            </span>
          </div>
          <form className="item-form">
            <button className="item-button">Comprar</button>
          </form>
        </aside>
      </div>
    </>
  )
}
export default Item
