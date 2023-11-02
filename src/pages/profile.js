import React, { useState } from 'react';
import './../css/profile.css';

function Profile() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    menuBtnChange();
  };

  function menuBtnChange() {
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
  }

  function showContent(id) {
    const sections = document.querySelectorAll('.home-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });

    const content = document.getElementById(id);
    content.style.display = 'block';
  }

  const [isAnimating, setAnimating] = useState(false);

const handleOrderClick = () => {
  if (!isAnimating) {
    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
    }, 10000);
  }
};
  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo-details">
          <div className="logo_name">
            <a href="home.html">
              <img src="./images/shelfshare.png" alt="logo" />
            </a>
          </div>
          <i className={`bx ${isSidebarOpen ? 'bx-menu-alt-right' : 'bx-menu'}`} onClick={toggleSidebar}></i>
        </div>
        <ul className="nav-list">
          <li>
            <form id="search-form" action="browse.html" method="get">
              <i className="bx bx-search"></i>
              <input type="text" name="search" placeholder="Search..." />
              <span className="tooltip">Search</span>
            </form>
          </li>
          <li>
            <a onClick={() => showContent('section1')}>
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a onClick={() => showContent('section2')}>
              <i className="bx bx-user"></i>
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
          <li>
            <a onClick={() => showContent('section3')}>
              <i className="bx bx-cart-alt"></i>
              <span className="links_name">Rental Desk</span>
            </a>
            <span className="tooltip">Rental Desk</span>
          </li>
          <li>
            <a onClick={() => showContent('section4')}>
              <i className="bx bx-history"></i>
              <span className="links_name">Shelf History</span>
            </a>
            <span className="tooltip">Shelf History</span>
          </li>
          <li>
            <a onClick={() => showContent('section5')}>
              <i className="bx bx-chat"></i>
              <span className="links_name">Community</span>
            </a>
            <span className="tooltip">Community</span>
          </li>
          <li>
            <a onClick={() => showContent('section6')}>
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img src="./images/user.png" alt="profileImg" />
              <div className="name_mail">
                <div className="name">AP Shah</div>
                <div className="mail">apshah@gmail.com</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>

      <section className="home-section" id="section1">
        <div className="text">Dashboard</div>
        <div className="profile-container1">
          <div className="profile">
            <img className="profile-image" src="./images/user.png" alt="Your Name" />
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
            <img className="profile-image" src="./images/user.png" alt="Your Name" />
            <div className="profile-name">AP Shah</div>
            <p>Email: apshah@gmail.com</p>
            <p>Contact Number: +91 9874563210</p>
            <h3>Address</h3>
            <p>
              A.P. Shah Institute Of Technology<br />
              Survey No. 12, 13 Opp. Hypercity Mall, Kasarvadavali, Ghodbunder Road, Thane West, Maharashtra 400615
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
      </>
  );
}

export default Profile;
