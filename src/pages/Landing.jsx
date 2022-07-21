import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to="/home">
        <button type="button" className="cursor-pointer">
          DISCOVER MEXICO
        </button>
      </Link>
    </div>
  );
};

export default Landing;
