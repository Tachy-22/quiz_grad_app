import React from "react";
import { Background } from "./StyledComonents/Background.style";
import { Routes, Route } from "react-router";
import LandingPage from "./Pages/LandingPage";
import ErrorPage from "./Components/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import TestPage from "./Pages/TestPage";
import QustionAnsweringPage from "./Pages/QustionAnsweringPage";

function App(props) {
  return (
    <Background>
      <Routes>
        <Route path="/quiz_grad_app" element={<LandingPage />}></Route>
        <Route path="/quiz_grad_app/login" element={<LoginPage />}></Route>
        <Route path="/quiz_grad_app/home" element={<Home />}></Route>
        <Route
          path="/quiz_grad_app/home/questionAnsweringPage"
          element={<QustionAnsweringPage />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/quiz_grad_app/test" element={<TestPage />}></Route>
      </Routes>
    </Background>
  );
}

export default App;
