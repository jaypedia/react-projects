import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar__home">
        My Movies
      </Link>
    </div>
  );
}

export default Navbar;
