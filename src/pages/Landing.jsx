import React from "react";
// import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <video autoPlay muted loop>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/mexican-trotters.appspot.com/o/tulum-homepage.mp4?alt=media&token=dd8b1d71-51c6-44d3-89ad-fa3bbb6167ac"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Landing;
