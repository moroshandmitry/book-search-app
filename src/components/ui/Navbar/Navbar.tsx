import { NavLink } from 'react-router-dom'

import { LINKS } from '../../../lib/constants'

import './styles/Navbar.scss'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <ul>
        {LINKS.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.url}>{link.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
