import React from "react";
import { Button2 } from "../StyledComonents/Button.style";
import { DesktopMenu } from "../StyledComonents/DesktopMenu.styles";
import { HeaderContainer } from "../StyledComonents/Header.styles";
import { Link } from "react-router-dom";
import Logo from "./img/QuizLogo.JPG";
function Header(props) {
  return (
    <HeaderContainer>
      <img src={Logo} alt="quizLogo"></img>
      <DesktopMenu>
        <Link to="home">How it works?</Link>
        <Link to="features">Features</Link>
        <Link to="about">About us</Link>
      </DesktopMenu>
      <div>
        <Button2>Login</Button2>
      </div>
    </HeaderContainer>
  );
}

export default Header;
