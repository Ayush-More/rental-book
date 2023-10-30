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
              <Link to="/" className="link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/rent"className="link">Put on Rent</Link>
            </li>
            <li className="nav-item">
              <Link to="/browse" className="link">Browse</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="link">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          <Link to="/login" className="btn btn-primary">
            Login/Signup
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
