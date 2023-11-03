import React, { useState, useEffect } from "react";
import "./../css/profile.css";
import Navbar1 from "../components/Navbar1";
import shelfshare from "./../images/shelfshare.png";
import userImage from "./../images/user.png";

function Profile() {
  return (
    <div className="body8">
      <Navbar1 />

      <section className="home-section" id="section1">
        <div className="text">Dashboard</div>
        <div className="profile-container1">
          <div className="profile">
            <img className="profile-image" src={userImage} alt="Your Name" />
          </div>
          <div className="profile-description">
            <div className="profile-name">AP Shah</div>
            <h3>Book Category Preferences</h3>
            <p>Mystery, Science Fiction, Fantasy</p>
          </div>
          <div className="cards">
            <div className="card">
              <h3>Books Rented</h3>
              <p>25</p>
            </div>
            <div className="card">
              <h3>Books Put on Rent</h3>
              <p>15</p>
            </div>
            <div className="card">
              <h3>Credits Earned</h3>
              <p>50</p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section" id="section2">
        <div className="text">User</div>
        <div className="profile-container1">
          <div className="profile-description">
            <img className="profile-image" src={userImage} alt="User" />
            <div className="profile-name">AP Shah</div>
            <p>Email: apshah@gmail.com</p>
            <p>Contact Number: +91 9874563210</p>
            <h3>Address</h3>
            <p>
              A.P. Shah Institute Of Technology
              <br />
              Survey No. 12, 13 Opp. Hypercity Mall, Kasarvadavali, Ghodbunder
              Road, Thane West, Maharashtra 400615
            </p>
            <h3>Book Category Preferences</h3>
            <p>Mystery, Science Fiction, Fantasy</p>
          </div>
        </div>
      </section>
      <section className="home-section" id="section3">
        <div className="text">Rental Desk</div>
        <div className="profile-container1"></div>
      </section>
      <section className="home-section" id="section4">
        <div className="text">Shelf History</div>
        <div className="profile-container1"></div>
      </section>
      <section className="home-section" id="section5">
        <div className="text">Community Announcements</div>
        <div className="profile-container1"></div>
      </section>
      <section className="home-section" id="section6">
        <div className="text">Dashboard</div>
      </section>
    </div>
  );
}

export default Profile;
