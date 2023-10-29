import "./../css/styles.css";
import React from "react";
import { Link } from "react-router-dom";
import shelfshare from "./../images/shelfshare.png";

function Navbar() {
  return (
    <div>
      <header className="taskbar">
        <div className="logo">
          <img src={shelfshare} alt="ShelfShare Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/rent">Put on Rent</Link>
            </li>
            <li className="nav-item">
              <Link to="/browse">Browse</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact_us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
