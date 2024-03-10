import React, { useEffect, useState } from "react";
import { getToken } from "./../utility/getToken";
import "./../css/styles.css";

function Home2() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    document.title = "Home";
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    try {
      const token = getToken();
      const response = await fetch(`http://localhost:5000/api/book/all`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBooksData(data.data.books);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const last10Books = booksData.slice(-10);

  return (
    <>
      <section className="catalog">
        <h1>Newly Added</h1>
        <div className="book-container">
          {last10Books.map((book, index) => (
            <div className="book" key={index} data-genre={book.genre}>
              <img src={`/images/${book.bookImage}`} alt={book.title} />
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="catalog">
        <h1>Frequently Rented Books</h1>
        <div className="book-container">
          {/* Book entries for Frequently Rented Books */}
          <div className="book" data-genre="Non-Fiction">
            <img src="/images/book1.jpeg" alt="Book 1" />
            <h2>Einstein</h2>
            <p>Author: Walter Isaacson</p>
            <p>Genre: Non-Fiction</p>
            <button>Add to Cart</button>
          </div>

          <div className="book" data-genre="Fiction">
            <img src="/images/book2.jpg" alt="Book 2" />
            <h2>Dust on the Mountain</h2>
            <p>Author: Ruskin Bond</p>
            <p>Genre: Fiction</p>
            <button>Add to Cart</button>
          </div>

          <div className="book" data-genre="Fiction">
            <img src="/images/book3.jpeg" alt="Book 3" />
            <h2>The Great Gatsby</h2>
            <p>Author: F. Scott Fitzgerald</p>
            <p>Genre: Fiction</p>
            <button>Add to Cart</button>
          </div>

          <div className="book" data-genre="Non-Fiction">
            <img src="/images/book4.jpg" alt="Book 4" />
            <h2>Wings of Fire</h2>
            <p>Author: A.P.J. Abdul Kalam</p>
            <p>Genre: Non-Fiction</p>
            <button>Add to Cart</button>
          </div>

          <div className="book" data-genre="Fiction">
            <img src="/images/book5.jpeg" alt="Book 5" />
            <h2>Doglapan</h2>
            <p>Author: Ashneer Grover</p>
            <p>Genre: Fiction</p>
            <button>Add to Cart</button>
          </div>

          <div className="book" data-genre="Fiction">
            <img src="/images/book6.jpeg" alt="To Kill a Mockingbird" />
            <h2>To Kill a Mockingbird</h2>
            <p>Author: Harper Lee</p>
            <p>Genre: Fiction</p>
            <button>Add to Cart</button>
          </div>

          <div className="book" data-genre="Fiction">
            <img src="/images/book7.jpeg" alt="1984" />
            <h2>1984</h2>
            <p>Author: George Orwell</p>
            <p>Genre: Fiction</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home2;
