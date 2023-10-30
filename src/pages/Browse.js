import React, { useEffect } from "react";
import "./../css/browse.css";
import Footer from "./../components/footer2";
import Navbar from "../components/Navbar";
function Browse() {
  useEffect(() => {
    document.title = 'Browse Books';
  }, []);
  return (
    <>
      <body className="home">
        <Navbar />
        <div class="searchtab">
    <div class="search-bar">
        <input type="text" id="search-input" placeholder="Search books by title"></input>
    </div>
    <div class="genre-filter">
        <label for="genre-select">Filter by Genre:</label>
        <select id="genre-select">
            <option value="all">All Genres</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery/Thriller">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
        </select>
        
    </div>
</div>

        <div className="book-list">
          <div className="book" data-genre="Non-Fiction">
            <img src="./images/book1.jpeg" alt="Book 1" />
            <h2>Einstein</h2>
            <p>Author: Walter Isaacson</p>
            <p>Genre: Non-Fiction</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
}
export default Browse;