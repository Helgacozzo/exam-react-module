import { NavLink } from 'react-router-dom';
import './NavBar.scss'

export default function () {
  return (
    <nav>
      <menu>
        <li>
          <NavLink className="link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/search">Cerca</NavLink>
        </li>
      </menu>
    </nav>
  );
};
