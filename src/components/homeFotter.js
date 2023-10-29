import React from "react";
import "./../css/styles.css";
import shelfshare from "./../images/shelfshare.png";

function homeFotter() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
        <img src={shelfshare} alt="ShelfShare Logo" />

          <p className="footer-links">
            <a href="home.html" className="link-1">
              Home
            </a>

            <a href="rentabook.html">Put on Rent</a>

            <a href="browse.html">Browse</a>

            <a href="contact.html">Contact Us</a>

            <a href="profile.html">Profile</a>
          </p>

          <p className="footer-company-name">
            &copy; 2023 ShelfShare. All rights reserved.
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <a className="map" href="https://maps.app.goo.gl/JB6KdXZ7qr82hVav6">
              AP Shah Institute Of Technology, Kasarvadavli, Thane
            </a>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 9876543210</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@shelfshare.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About Us</span>
            Abhishek Thormothe - 169
            <br /> Aadit Suryawanshi - 165
            <br />
            Shravani Thokade - 168
          </p>
        </div>
      </footer>
    </>
  );
}

export default homeFotter;
