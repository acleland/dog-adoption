import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { logout } from '../../services/users';

export default function Nav({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        {currentUser && (
          <li>
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </li>
        )}
      </ul>
      <ul>
        {!currentUser && (
          <>
            <li>
              <NavLink className="nav-link" to="/auth">
                Sign in
              </NavLink>
            </li>
          </>
        )}
        {currentUser && (
          <>
            <li id="login-email" className="login-email">
              {currentUser}
            </li>
            <li className="nav-link" onClick={handleLogout}>
              Logout
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
