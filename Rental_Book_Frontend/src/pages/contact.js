import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import "./../css/contact.css";
import Footer from "./../components/footer2";
import Navbar from "../components/Navbar";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    emailjs
      .sendForm("service_id", "template_id", new FormData(form), "user_id")
      .then(
        (result) => {
          console.log(result.text);
          alert("Your request is send");
        },
        (error) => {
          console.log(error.text);
          // Add any error handling here
        }
      );

    // Clear the form after submission if needed
    form.reset();
  };

  return (
    <>
      <Navbar />
      <div className="body6">
        <main className="container1">
          <section className="contact" id="con">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or feedback, feel free to get in touch
              with us.
            </p>
            <form id="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
