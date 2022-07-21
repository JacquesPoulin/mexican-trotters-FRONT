import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import GoToTop from "../components/global/GoToTop";
import PlaceCard from "../components/places/PlaceCard";

const Places = () => {
  const [allPlaces, setAllPlaces] = useState([]);

  // >> Axios to get all Places
  useEffect(() => {
    const getAllPlaces = async () => {
      const url = `${import.meta.env.VITE_API_URL}/api/places`;

      const { data } = await axios.get(url, {
        withCredentials: true,
      });
      setAllPlaces(data);
      console.log(data);
      console.log(allPlaces);
    };

    getAllPlaces();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Les plus beaux endroits du Mexique</h1>
      <PlaceCard />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Places;
