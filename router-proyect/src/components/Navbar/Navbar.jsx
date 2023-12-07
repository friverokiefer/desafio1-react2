import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-brand" to="/" end>
        Happy Cake
      </NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-link" to="/" end>
          Home
        </NavLink>
        <NavLink className="nav-link" to="/contacto">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};
