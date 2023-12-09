import { useParams } from 'react-router-dom'

export const Item = () => {
  const { id } = useParams()

  return <div>Item {id}</div>
}
