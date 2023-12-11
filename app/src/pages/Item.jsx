import { useParams } from 'react-router-dom'
import './Item.scss'

const Item = () => {
  const { id } = useParams()

  return <section className="item-container">Item {id}</section>
}

export default Item
