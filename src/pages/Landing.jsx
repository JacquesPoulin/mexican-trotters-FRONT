import React from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: red[500],
    },
  },
});
const Landing = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="landingContainer">
        <video autoPlay muted loop>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/mexican-trotters.appspot.com/o/dia-de-muertos-heropage.mp4?alt=media&token=5560083c-9106-4d5b-a676-2c56c58a43a8"
            type="video/mp4"
          />
        </video>
        <div className="landingContainer__title">
          <Animated animationIn="fadeIn" animationInDelay={100}>
            <h1>MEXICAN-TROTTERS</h1>
          </Animated>
          <Animated animationIn="fadeIn" animationInDelay={500}>
            <h3>Pour les amoureux du Mexique</h3>
          </Animated>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button variant="contained">Découvrir</Button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Landing;
