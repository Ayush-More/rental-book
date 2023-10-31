import React, { useEffect } from "react";
import './../css/bookdetails.css';
import Footer from "./../components/footer2";
import Navbar from "../components/Navbar"; // Import your CSS file

function BookDetails() {
    useEffect(() => {
        document.title = 'Browse Books';
      }, []);
  return (
    <>
      <Navbar/>
      <div className="book-details">
        <i className="fa-regular fa-circle-chevron-left" />
        <div className="bookimage">
          <img src="./images/book1.jpeg" alt="Book 1" draggable="false" />
        </div>
        <div className="bookdetails">
          <div className="book-info">
            <h2>Einstein</h2>
            <p>Author: Walter Issacson</p>
            <p>Publication Year: 2023</p>
          </div>
          <div className="rent-terms">
            <h3>Rental Terms</h3>
            <ul>
              <li>Return within 30 days</li>
              <li>No damage allowed</li>
              <li>Late fees may apply</li>
            </ul>
          </div>
          <br />
          <div className="description">
            <h4>Description</h4>
            <br />
            <p>
              The book delves into Einstein's personal life, scientific
              discoveries, and the impact of his work on the world of physics.
              Walter Isaacson's writing style is accessible and engaging,
              making complex scientific concepts more understandable for a
              general audience. If you're interested in learning about the life
              of Albert Einstein and his contributions to science, "Einstein:
              His Life and Universe" by Walter Isaacson is a great choice.
            </p>
          </div>
          <div className="crtbtn">
            <button>
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookDetails;
