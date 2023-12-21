import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
          <NavLink className="link" to="/search">Search</NavLink>
        </li>
      </menu>
    </nav>
  );
};

export default Navbar;
