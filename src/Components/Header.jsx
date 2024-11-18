
import React from 'react';
import '../style/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">MyWebsite</div>
        <nav className="nav">
        <NavLink to="/view3d"className="nav-link">Home</NavLink>
        <NavLink to="/view3d" className="nav-link">About</NavLink>
          <NavLink to="/view3d"className="nav-link">View3d</NavLink>
          <NavLink to="/view3d"className="nav-link">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

