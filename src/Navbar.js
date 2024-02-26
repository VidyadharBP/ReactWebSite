import React from 'react';
import { Link } from 'react-router-dom'; // Import for routing

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Brand */}
      <Link to="/" className="navbar-brand">
        My Website
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;