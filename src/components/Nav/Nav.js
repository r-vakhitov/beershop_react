import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
  };

  return (
    <nav className="nav">
      <h2>BeerShop</h2>
      <ul className="nav__list">
        <Link style={linkStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={linkStyle} to="/catalog">
          <li>Catalog</li>
        </Link>
        <Link style={linkStyle} to="about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
