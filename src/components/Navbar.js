import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getToken } from "./../utility/getToken";
import shelfshare from "./../images/shelfshare.png";
import userImage from "./../images/user.png";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [profileImage, setProfileImage] = useState(null);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setProfileImage(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
      setProfileImage(userImage);
    }
  }, []);

  return (
    <div>
      <header className="taskbar">
        <div className="logo">
          <img src={shelfshare} alt="ShelfShare Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li className="nav-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rent" className="link">
                Put on Rent
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/browse" className="link">
                Browse
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="user-profile">
          {isLoggedIn ? (
            <div class="dropdown">
              <a href="profile.html">
                {profileImage ? (
                  <img src={profileImage} alt="User" />
                ) : (
                  <img src={userImage} alt="User" />
                )}
                v
              </a>
              <div class="dropdown-content">
                <a href="profile.html">Dashboard</a>
                <br />
                <a>-------------</a>
                <br />
                <a href="#">My Shelf</a>
                <br />
                <a>-------------</a>
                <br />
                <a href="#">Wishlist</a>
                <br />
                <a>-------------</a>
                <br />
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login/Signup
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
