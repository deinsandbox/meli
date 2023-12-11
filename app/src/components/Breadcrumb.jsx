import './Breadcrumb.scss'

const Breadcrumb = ({ path }) => {
  const route = path.map((item) => item.name)
  const crumbs = route.slice(0, -1)
  const bread = route.slice(-1)
  return (
    <nav className="breadcrumb">
      {crumbs.length > 0 && crumbs.join(' > ') + ' > '}
      <span className="breadcrumb-current">{bread}</span>{' '}
    </nav>
  )
}

export default Breadcrumb
