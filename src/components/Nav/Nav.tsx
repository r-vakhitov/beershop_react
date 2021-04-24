import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import {MAIN_URL, CATALOG_URL, ABOUT_URL} from '../../router/paths';

function Nav() {
  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
  };

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <h2>BeerShop</h2>
        <ul className="nav__list">
          <Link style={linkStyle} to={MAIN_URL}>
            <li>Home</li>
          </Link>
          <Link style={linkStyle} to={CATALOG_URL}>
            <li>Catalog</li>
          </Link>
          <Link style={linkStyle} to={ABOUT_URL}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
