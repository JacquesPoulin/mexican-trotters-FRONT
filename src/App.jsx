import "./App.scss";

import React from "react";
import { useRoutes } from "react-router-dom";
import routesConfig from "./routes";

function App() {
  // >> variable to store all the routes
  const routes = useRoutes(routesConfig);

  return <div className="App">{routes}</div>;
}

export default App;
