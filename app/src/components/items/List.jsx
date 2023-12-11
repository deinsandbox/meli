import useItemList from '../../hooks/useItemList'
import Element from './Element'
import Loading from '../../routes/Loading'

import './List.scss'

const List = ({ query }) => {
  const { data, isLoading, isError } = useItemList(query) ?? {}

  if (isError) {
    // TODO: error component
    return <div>Error</div>
  }

  if (isLoading) {
    // TODO: loading styles (like error in middle)
    return <Loading />
  }

  if (data?.items?.length === 0) {
    return <div>No results</div>
  }

  return (
    <div className="list-container">
      {data?.items.map((item) => (
        <Element {...item} key={item.id} />
      ))}
    </div>
  )
}

export default List
