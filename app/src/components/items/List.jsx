import useItemList from '../../hooks/useItemList'
import Element from './Element'
import Loading from '../shared/Loading'

import './List.scss'
import Breadcrumb from '../Breadcrumb'
import SEO from '../SEO'
import ErrorMessage from '../shared/ErrorMessage'
import NoResult from '../shared/NoResult'

const List = ({ query }) => {
  const { data, isLoading, isError } = useItemList(query) ?? {}

  if (isError) {
    return <ErrorMessage />
  }

  if (isLoading) {
    return <Loading />
  }

  if (data?.items?.length === 0) {
    return <NoResult />
  }

  return (
    <>
      <SEO title={query} keywords={data?.path || []} type="website" />

      {data?.path?.length > 0 && <Breadcrumb path={data?.path} />}

      <div className="list-container">
        {data?.items.map((item) => (
          <Element {...item} key={item.id} />
        ))}
      </div>
    </>
  )
}

export default List
