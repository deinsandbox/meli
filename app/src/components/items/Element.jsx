import { NavLink } from 'react-router-dom'
import { currencyFormat } from '../../helpers/currency'

import IconShipping from '../../assets/icon-shipping.png'
import DummyItem from '../../assets/dummy-item.svg'

import './Element.scss'

const Element = ({ id, title, price, picture, condition, free_shipping }) => {
  const { amount, currency, decimals } = price
  const currencyLocale = import.meta.env.VITE_CURRENCY_LOCALE ?? ''
  const value = currencyFormat(amount, currencyLocale, currency, decimals)
  const textCondition = condition ? 'Nuevo' : 'Usado'

  return (
    <>
      <article>
        <NavLink className="element-link" to={`/items/${id}`}>
          <div className="element-container">
            <div className="element-thumbnail">
              <img src={picture || DummyItem} alt={title} fetchpriority="high" />
            </div>
            <div className="element-info">
              <div className="element-pricing">
                <span className="element-price">{value}</span>{' '}
                <span className="element-shipping">
                  {Boolean(free_shipping) && <img src={IconShipping} alt="Envío gratis" />}
                </span>
              </div>
              <div>{title}</div>
              <div>{textCondition}!</div>
            </div>
            <div className="element-city">{ }</div>
          </div>
        </NavLink>
      </article>
    </>
  )
}
export default Element
