import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Home</li>
        <li>Login</li>
      </ul>
      <button className="button">Code Part</button>
    </nav>
  );
};

export default Navbar;
