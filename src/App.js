import "./App.css";
import React from "react";
import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { Container } from "@mui/material";
import Footer from "./components/Footer";

import backgroundImage from "./img/img.jpg";

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handlDataLoaded = () => {
    setIsDataLoaded(true);
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Main onDataLoaded={handlDataLoaded} />
      {isDataLoaded && <Footer />}
    </Container>
  );
}

export default App;
