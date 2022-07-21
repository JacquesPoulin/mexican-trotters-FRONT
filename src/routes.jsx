import React from "react";
import Landing from "./pages/Landing";
import Homepage from "./pages/Homepage";
import Places from "./pages/Places";
import Dishes from "./pages/Dishes";
import Suggest from "./pages/Suggest";
import Newsletter from "./pages/Newsletter";

// >> ALL THE APP ROUTES CONFIG

const routesConfig = [
  {
    // ! Route : LANDINGPAGE
    path: "*",
    element: <Landing />,
  },
  {
    // ! Route : LANDINGPAGE
    path: "/",
    element: <Landing />,
  },
  {
    // ! Route : HOMEPAGE
    path: "/home",
    element: <Homepage />,
  },
  {
    // ! Route : PLACES
    path: "/places",
    element: <Places />,
  },
  {
    // ! Route : DISHES
    path: "/dishes",
    element: <Dishes />,
  },
  {
    // ! Route : SUGGEST
    path: "/suggest",
    element: <Suggest />,
  },
  {
    // ! Route : NEWSLETTER
    path: "/newsletter",
    element: <Newsletter />,
  },
];

export default routesConfig;
