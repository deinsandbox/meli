import NavLogo from '../assets/logo.svg'
import './Header.scss'

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="header-container">
        <a className="header-logo" href="/" tabIndex="1">
          <img className="header-logo-image" src={NavLogo} alt="Mercado Libre - Donde comprar y vender de todo" />
        </a>
        {children}
      </div>
    </header>
  )
}
export default Header
