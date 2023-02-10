import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/" className="navbar-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="navbar-link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="navbar-link">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
