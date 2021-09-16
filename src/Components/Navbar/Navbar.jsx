import React from 'react';
import "./Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Sheuh Xiong</h1>
      <a href="/about">
        <span>About</span>
      </a>
    </nav>
  );
}

export default Navbar;