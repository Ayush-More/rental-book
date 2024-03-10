import React, { useState, useEffect } from "react";
import shelfshare from "./../images/shelfshare.png";
import userImage from "./../images/user.png";
import "./../css/profile.css";

function Navbar1() {
  const showContent = (id) => {
    const sections = document.querySelectorAll(".home-section");
    sections.forEach((section) => {
      section.style.display = "none"; // Hide all sections
    });

    const content = document.getElementById(id);
    content.style.display = "block"; // Show the selected section
  };

  useEffect(() => {
    showContent("section1");
  }, []);

  return (
    <div>
      <header className="taskbar">
        <div className="logo">
          <img src={shelfshare} alt="ShelfShare Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a onClick={() => showContent("section1")}>
                <span className=".nav-list">Dashboard</span>
              </a>
            </li>
            <li>
              <a onClick={() => showContent("section2")}>
                <span className=".nav-list">User</span>
              </a>
            </li>
            <li>
              <a onClick={() => showContent("section3")}>
                <span className=".nav-list">Rental Desk</span>
              </a>
            </li>
            <li>
              <a onClick={() => showContent("section4")}>
                <span className=".nav-list">Shelf History</span>
              </a>
            </li>
            <li>
              <a onClick={() => showContent("section5")}>
                <span className=".nav-list">Community</span>
              </a>
            </li>

            <li className="profile">
              <i className="bx bx-log-out" id="log_out"></i>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar1;
