import React from "react";
import "./../css/styles.css";

function home2() {
  return (
    <>
        <main className="container" id="book-catalog">
          <section className="catalog">
            <h1>Newly Added</h1>
            <div className="book-container">
              {/* Book entries for Newly Added */}
              <div className="book" data-genre="Science Fiction">
                <img src="./books/book11.jpg" alt="Neuromancer" />
                <h2>Neuromancer</h2>
                <p>Author: William Gibson</p>
                <p>Genre: Science Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Science Fiction">
                <img src="./books/12.webp" alt="Ender's Game" />
                <h2>Ender's Game</h2>
                <p>Author: Orson Scott Card</p>
                <p>Genre: Science Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Science Fiction">
                <img src="./books/13.jpg" alt="Foundation" />
                <h2>Foundation</h2>
                <p>Author: Isaac Asimov</p>
                <p>Genre: Science Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Science Fiction">
                <img src="./books/14.jpg" alt="Brave New World" />
                <h2>Brave New World</h2>
                <p>Author: Aldous Huxley</p>
                <p>Genre: Science Fiction</p>
                <button>Add to Cart</button>
              </div>

              {/* Fantasy */}
              <div className="book" data-genre="Fantasy">
                <img src="./books/15.jpg" alt="The Lord of the Rings" />
                <h2>The Lord of the Rings</h2>
                <p>Author: J.R.R. Tolkien</p>
                <p>Genre: Fantasy</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Fantasy">
                <img src="./books/16.jpeg" alt="Harry Potter and the Sorcerer's Stone" />
                <h2>Harry Potter and the Sorcerer's Stone</h2>
                <p>Author: J.K. Rowling</p>
                <p>Genre: Fantasy</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Fantasy">
                <img src="./books/17.jpg" alt="A Song of Ice and Fire" />
                <h2>A Song of Ice and Fire</h2>
                <p>Author: George R.R. Martin</p>
                <p>Genre: Fantasy</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Fantasy">
                <img src="./books/18.webp" alt="The Hobbit" />
                <h2>The Hobbit</h2>
                <p>Author: J.R.R. Tolkien</p>
                <p>Genre: Fantasy</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </section>
        </main>

        <main className="container" id="book-catalog">
          <section className="catalog">
            <h1>Frequently Rented Books</h1>
            <div className="book-container">
              {/* Book entries for Frequently Rented Books */}
              <div className="book" data-genre="Non-Fiction">
                <img src="./images/book1.jpeg" alt="Book 1" />
                <h2>Einstein</h2>
                <p>Author: Walter Isaacson</p>
                <p>Genre: Non-Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Fiction">
                <img src="./images/book2.jpg" alt="Book 2" />
                <h2>Dust on the Mountain</h2>
                <p>Author: Ruskin Bond</p>
                <p>Genre: Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Fiction">
                <img src="./images/book3.jpeg" alt="Book 3" />
                <h2>The Great Gatsby</h2>
                <p>Author: F. Scott Fitzgerald</p>
                <p>Genre: Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Non-Fiction">
                <img src="./images/book4.jpg" alt="Book 4" />
                <h2>Wings of Fire</h2>
                <p>Author: A.P.J. Abdul Kalam</p>
                <p>Genre: Non-Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Fiction">
                <img src="./images/book5.jpeg" alt="Book 5" />
                <h2>Doglapan</h2>
                <p>Author: Ashneer Grover</p>
                <p>Genre: Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Fiction">
                <img src="./books/book6.jpeg" alt="To Kill a Mockingbird" />
                <h2>To Kill a Mockingbird</h2>
                <p>Author: Harper Lee</p>
                <p>Genre: Fiction</p>
                <button>Add to Cart</button>
              </div>

              <div className="book" data-genre="Fiction">
                <img src="./books/book7.jpeg" alt="1984" />
                <h2>1984</h2>
                <p>Author: George Orwell</p>
                <p>Genre: Fiction</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </section>
        </main>
      
      </>
    );
  }

export default home2;
