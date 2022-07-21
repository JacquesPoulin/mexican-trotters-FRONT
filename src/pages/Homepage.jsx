import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import GoToTop from "../components/global/GoToTop";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <GoToTop />
      <Footer />
    </div>
  );
};

export default Homepage;
