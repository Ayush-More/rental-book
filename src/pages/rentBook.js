import React, { useState } from "react";
import "./../css/rent.css";
import Footer from "./../components/footer2";
import Navbar from "../components/Navbar";

export default function RentBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    expectingRent: 50,
    genre: "Fiction",
    bookImage: null,
  });

  const onChange = (e) => {
    if (e.target.name === "bookImage") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("author", formData.author);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("expectingRent", formData.expectingRent);
    formDataToSend.append("genre", formData.genre);
    formDataToSend.append("bookImage", formData.bookImage);

    try {
      const response = await fetch("http://127.0.0.1:6000/api/book/addbooks", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.status === 201) {
        const data = await response.json();

        console.log(data);
      } else {
        const errorData = await response.json();

        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="book-upload">
          <h2>Upload Your Book</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={onChange}
            />

            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              required
              value={formData.author}
              onChange={onChange}
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={onChange}
            ></textarea>

            <label htmlFor="expectingRent">
              Expecting Rental Price (per week):
            </label>
            <input
              type="number"
              id="expectingRent"
              name="expectingRent"
              required
              value={formData.expectingRent}
              onChange={onChange}
            />
            <div id="note">
              <p>
                &#9755; Usual rental price lies between Rs.50-80 <br /> &#9755;
                Your suggestion will be considered on the book's condition{" "}
              </p>
            </div>

            <div className="genre-filter">
              <label htmlFor="genre-select">Select the genre:</label>
              <select
                id="genre-select"
                name="genre"
                value={formData.genre}
                onChange={onChange}
              >
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Mystery/Thriller">Mystery</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <label htmlFor="book-image">Book Image:</label>
            <input
              type="file"
              id="book-image"
              name="bookImage"
              accept="image/*"
              required
              onChange={onChange}
            />

            <button type="submit">
              Upload <i className="fa-solid fa-upload "></i>
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
