import React, { useState, useEffect } from "react";
import "./../css/profile.css";
import Navbar1 from "../components/Navbar1";
import { getToken } from "./../utility/getToken";
import userImage from "./../images/user.png";
import { useBookContext } from "./../context/bookContext";

function Profile() {
  const [userData, setuserdata] = useState([]);
  useEffect(() => {
    document.title = "Profile";
    userDetails();
  }, []);
  console.log(userData);
  const { rentedBooksCount, booksRented } = useBookContext();
  console.log(rentedBooksCount);
  console.log(booksRented);
  const userDetails = async () => {
    try {
      const token = getToken();

      const Response = await fetch("http://localhost:5000/api/user/profile", {
        method: "GET",
        headers: {
          Content: "aplication/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (Response.status === 200) {
        const data = await Response.json();
        setuserdata(data.userData.candidate_details);
      } else {
        console.log("Does not recived the user data");
        const errorData = await Response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="body8">
      <Navbar1 />

      <section className="home-section" id="section1">
        <div className="text">Dashboard</div>
        <div className="profile-container1">
          <div className="profile">
            <img className="profile-image" src={userImage} alt="Your Name" />
          </div>
          <div className="profile-description">
            <div className="profile-name">{userData.name}</div>
          </div>
          <div className="cards">
            <div className="card">
              <h3>Books Rented</h3>
              <p>{rentedBooksCount}</p>
            </div>
            <div className="card">
              <h3>Books Put on Rent</h3>
              <p>{booksRented}</p>
            </div>
            <div className="card">
              <h3>Credits Earned</h3>
              <p>50</p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section" id="section2">
        <div className="text">User</div>
        <div className="profile-container1">
          <div className="profile-description">
            <img className="profile-image" src={userImage} alt="User" />
            <div className="profile-name">AP Shah</div>
            <p>Email: apshah@gmail.com</p>
            <p>Contact Number: +91 9874563210</p>
            <h3>Address</h3>
            <p>
              A.P. Shah Institute Of Technology
              <br />
              Survey No. 12, 13 Opp. Hypercity Mall, Kasarvadavali, Ghodbunder
              Road, Thane West, Maharashtra 400615
            </p>
            <h3>Book Category Preferences</h3>
            <p>Mystery, Science Fiction, Fantasy</p>
          </div>
        </div>
      </section>
      <section className="home-section" id="section3">
        <div className="text">Rental Desk</div>
        <div className="profile-container1"></div>
      </section>
      <section className="home-section" id="section4">
        <div className="text">Shelf History</div>
        <div className="profile-container1"></div>
      </section>
      <section className="home-section" id="section5">
        <div className="text">Community Announcements</div>
        <div className="profile-container1"></div>
      </section>
      <section className="home-section" id="section6">
        <div className="text">Dashboard</div>
      </section>
    </div>
  );
}

export default Profile;
