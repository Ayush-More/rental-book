import React from "react";
import "./../css/rent.css";
import shelfshare from "./../images/shelfshare.png";

function footer2() {
  return (
    <div>
      <div>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 ShelfShare. All rights reserved.</p>

            <img className="fitpicture" src={shelfshare} alt="ShelfShare Logo" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default footer2;
