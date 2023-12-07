import { NavLink } from 'react-router-dom'

import { LINKS } from '../../../lib/constants'

import './styles/Navbar.scss'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <ul>
        {LINKS.map((link) => {
          const { id, url, title } = link

          return (
            <li key={id}>
              <NavLink to={url}>{title}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
