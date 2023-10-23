import React from "react";
import Footer from "./../components/homeFotter";
import FrontPage from "./../components/home1";
import Container1 from "./../components/home2";
import Navbar from "../components/Navbar";

function home() {
  return (
    <>
      <Navbar />
      <FrontPage />
      <Container1 />
      <Footer />
    </>
  );
}

export default home;
