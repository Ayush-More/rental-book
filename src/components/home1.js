import React from "react";
import "./../css/styles.css";
import shelfshare from "./../images/shelfshare.png";
import coin from "./../images/coin.png";
import options from "./../images/options.svg";
import colstack from "./../images/colstack.png";
import share from "./../images/share.svg";
import profile from "./../images/profile.png";

function Browse() {
  return (
    <div>
      <header className="header1">
        <nav className="navbar">
          <div className="container">
            <img className="fit-picture" src={shelfshare} alt="ShelfShare" />
          </div>
          <div className="credits1">
            <i className="coin">
              <img src={coin} alt="coin" />
              CREDITS
            </i>
          </div>
        </nav>
        <div className="container">
          <div className="hero">
            <h1 className="hero-title">Explore and Share Amazing Books</h1>
            <p className="hero-text">
              Join ShelfShare and embark on a journey through the world of
              literature.
            </p>
            <section className="features">
              <div className="feature">
                <img src={colstack} alt="Feature 1 Icon" />
                <h3>Wide Book Selection</h3>
                <p>
                  Choose from a vast collection of books across different
                  genres.
                </p>
              </div>

              <div className="feature">
                <img src={options} alt="Feature 2 Icon" />
                <h3>Flexible Rental Options</h3>
                <p>Rent books on a weekly basis with affordable pricing.</p>
              </div>

              <div className="feature">
                <img src={share} alt="Feature 3 Icon" />
                <h3>Easy Sharing</h3>
                <p>
                  Share your own books with other book enthusiasts effortlessly.
                </p>
              </div>

              <div className="feature">
                <img src={profile} alt="Feature 4 Icon" />
                <h3>User Profiles</h3>
                <p>
                  Create and manage your profile, keep track of your rentals,
                  and more.
                </p>
              </div>
            </section>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Browse;
