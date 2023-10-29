import React from "react";
import Footer from "./../components/homeFotter";
import FrontPage from "./../components/home1";
import Container1 from "./../components/home2";
import Navbar from "../components/Navbar";
import './../css/styles.css';

function home() {
  return (
    <>
    <div className="body4">
      <Navbar />
      <FrontPage />
      <Container1 />
      <Footer />
      </div>
    </>
    
  );
}

export default home;
