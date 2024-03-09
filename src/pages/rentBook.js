import React, { useState, useEffect } from "react";
import "./../css/rent.css";
import Footer from "./../components/footer2";
import Navbar from "../components/Navbar";
import { getToken } from "./../utility/getToken";
import ProtectedRoute from "./../components/ProtectedRoute";
import { useBookContext } from "./../context/bookContext";

function RentBook() {
  const { BooksPutOnRent } = useBookContext();
  useEffect(() => {
    document.title = "Rent A Book";
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    expectingRent: 50,
    bookImage: null, // Use null for a single file
    type: "fiction",
  });

  const onChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "bookImage") {
      // Use the first file from the FileList
      const file = files[0];
      setFormData({ ...formData, [name]: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("title", formData.title);
    formDataToSend.append("author", formData.author);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("expectingRent", formData.expectingRent);
    formDataToSend.append("bookImage", formData.bookImage); // Use the single file
    formDataToSend.append("type", formData.type);

    try {
      const token = getToken();
      const response = await fetch("http://127.0.0.1:5000/api/book/addbooks", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // Set the Authorization header properly
        },
        body: formDataToSend,
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        BooksPutOnRent();
        alert("Book Uploaded Successfully");
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
      <ProtectedRoute>
        <body className="body10">
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
                    &#9755; Usual rental price lies between Rs.50-80 <br />{" "}
                    &#9755; Your suggestion will be considered on the book's
                    condition{" "}
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
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="mystery">Mystery</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="romance">Romance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <label htmlFor="book-image">Book Image:</label>
                <input
                  type="file"
                  id="book-image"
                  name="bookImage"
                  accept=".jpg, .jpeg, .png"
                  required
                  onChange={onChange}
                />

                <button type="submit" id="upload">
                  Upload <i className="fa-solid fa-upload "></i>
                </button>
              </form>
            </section>
          </main>
          <Footer />
        </body>
      </ProtectedRoute>
    </>
  );
}

export default RentBook;
