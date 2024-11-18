
import React from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">MyWebsite</div>
        <nav className="nav">
         <Link to="/"className="nav-link">Home</Link>
          <Link to="/" className="nav-link">About</Link>
          <Link to="/view3d"className="nav-link">View3d</Link>
          <Link to="/"className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

