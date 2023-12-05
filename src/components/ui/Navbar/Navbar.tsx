import { Link, useLocation } from 'react-router-dom'

import { LINKS } from '../../../lib/constants'

import './styles/Navbar.scss'

const Navbar: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <nav className="navbar-container">
      <ul>
        {LINKS.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url} className={pathname === link.url ? 'active' : ''}>
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
