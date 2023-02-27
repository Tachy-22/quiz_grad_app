import React from "react";
import { DesktopMenu } from "../StyledComonents/DesktopMenu.styles";
import { NavLink } from "react-router-dom";
import Logo from "../img/QuizLogo.JPG";

function Header() {
  return (
    <>
      <img src={Logo} alt="quizLogo"></img>
      <DesktopMenu>
        <NavLink to="/base">How it works?</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/about">About us</NavLink>
      </DesktopMenu>
    </>
  );
}

export default Header;
