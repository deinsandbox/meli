import { useParams } from 'react-router-dom'
import Item from '../components/items/Item'

import './Product.scss'

const Product = () => {
  const { id } = useParams()

  return (
    <section className="product-container">
      <Item id={id} />
    </section>
  )
}

export default Product
