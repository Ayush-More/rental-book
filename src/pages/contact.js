import React, {  useEffect } from "react";
import "./../css/contact.css";
import Footer from "./../components/footer2";
import Navbar from "../components/Navbar";

function Contact() {
useEffect(() => {
  document.title = 'Contact Us';
}, []);

return (
    <>
    <Navbar/>
    <div className="body6">
    <main className="container1">
      <section className="contact" id="con">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to get in touch with us.</p>
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
    <Footer/>
    </div>
    </>
)
}
export default Contact;