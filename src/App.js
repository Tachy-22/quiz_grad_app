import React from "react";
import { Background } from "./StyledComonents/Background.style";
import { Routes, Route } from "react-router";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App(props) {
  return (
    <Background>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route></Route>
      </Routes>
    </Background>
  );
}

export default App;
