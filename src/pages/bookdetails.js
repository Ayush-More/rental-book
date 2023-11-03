import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../css/bookdetails.css";
import Footer from "./../components/footer2";
import Navbar from "../components/Navbar";
import { getToken } from "./../utility/getToken";
import ProtectedRoute from "../components/ProtectedRoute";

function BookDetails({ match }) {
  const { id } = useParams(); // Use the useParams hook to get the book ID
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    fetchBookDetails(id); // Use the ID from useParams
  }, [id]);

  const fetchBookDetails = async (bookId) => {
    try {
      const token = getToken();
      console.log(bookId);
      const response = await fetch(
        `http://localhost:5000/api/book/detail/${bookId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setBookDetails(data.data.Book);
        console.log(data.data.Book); // Update the state with book details
      } else {
        console.error("Failed to fetch book details");
      }
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  return (
    <>
      <ProtectedRoute>
        <Navbar />
        <div className="book-details">
          <i className="fa-regular fa-circle-chevron-left" />
          {bookDetails ? (
            <div className="bookimage">
              <img
                src={bookDetails.bookImage}
                alt={bookDetails.title}
                draggable="false"
              />
            </div>
          ) : (
            <div>Loading...</div>
          )}
          {bookDetails ? (
            <div className="bookdetails">
              <div className="book-info">
                <h2>{bookDetails.title}</h2>
                <p>Author: {bookDetails.author}</p>
                <p>Publication Year: {bookDetails.publicationYear}</p>
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
                <p>{bookDetails.description}</p>
              </div>
              <div className="crtbtn">
                <button>
                  <p>Rent a Book</p>
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <Footer />
      </ProtectedRoute>
    </>
  );
}

export default BookDetails;
