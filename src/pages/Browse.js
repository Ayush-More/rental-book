import React, { useEffect, useState } from "react";
import "./../css/browse.css";
import { Link } from "react-router-dom";
import Footer from "./../components/footer2";
import Navbar from "../components/Navbar";

function Browse() {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    document.title = "Browse Books";
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenre]);
  console.log(booksData);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/book/${selectedGenre}`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setBooksData(data.books);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <body className="home">
        <Navbar />
        <div className="searchtab">
          <div className="search-bar">
            <input
              type="text"
              id="search-input"
              placeholder="Search books by title"
            ></input>
          </div>
          <div className="genre-filter">
            <label htmlFor="genre-select">Filter by Genre:</label>
            <select
              id="genre-select"
              onChange={handleGenreChange}
              value={selectedGenre}
            >
              <option value="all">All Genres</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="fantasy">Fantasy</option>
              <option value="romance">Romance</option>
            </select>
          </div>
        </div>

        <div className="book-list">
          {booksData && booksData.length > 0 ? (
            booksData.map((book) => (
              <Link
                to={`/browse/${book._id}`}
                key={book._id}
                data-genre={book.genre}
              >
                <div className="book">
                  <img src={book.image} alt={book.title} />
                  <h2>{book.title}</h2>
                  <p>Author: {book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <button>Add to Cart</button>
                </div>
              </Link>
            ))
          ) : (
            <p>No books available for the selected genre.</p>
          )}
        </div>
        <Footer />
      </body>
    </>
  );
}

export default Browse;
