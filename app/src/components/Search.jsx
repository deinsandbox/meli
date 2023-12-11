import './Search.scss'
import IconSearch from '../assets/icon-search.svg'

const Search = ({ query = '' }) => {
  return (
    <>
      <form className="search-form" action="/items" method="get">
        <input
          type="search"
          id="search"
          name="search"
          className="search-input"
          placeholder="Nunca dejes de buscar"
          autoFocus
          required
          defaultValue={query}
        />
        <button type="submit" className="search-button">
          <img src={IconSearch} alt="Buscar" className="search-button-icon" />
        </button>
      </form>
    </>
  )
}
export default Search
