import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="header">
      <img src="images/logo.jpeg" alt="logo" />
      <ul className="main-nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
        <Link to="/Cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
