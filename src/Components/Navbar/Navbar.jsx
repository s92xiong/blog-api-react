import React from 'react';
import "./Styles/Navbar.css";

function Navbar({ name }) {
  return (
    <nav className="navbar">
      <a href="/">
        <h1>{name}</h1>
      </a>
      <a href="/about">
        <span>About</span>
      </a>
    </nav>
  );
}

export default Navbar;