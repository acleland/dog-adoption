import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/admin">
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
