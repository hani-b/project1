import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#account">Mon Compte</a>
        </li>
        <li className="navbar-item">
          <a href="#settings">Paramètres</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;