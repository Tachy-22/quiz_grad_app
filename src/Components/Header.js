import React from "react";
import { Button2 } from "../StyledComonents/Button.style";
import { DesktopMenu } from "../StyledComonents/DesktopMenu.styles";
import { HeaderContainer } from "../StyledComonents/Header.styles";
import Logo from "./img/QuizLogo.JPG";
function Header(props) {
  return (
    <HeaderContainer>
      <img src={Logo} alt="quizLoo"></img>
      <DesktopMenu>
        <p>How it works?</p>
        <p>Features</p>
        <p>About us</p>
      </DesktopMenu>
      <div>
        <Button2>Login</Button2>
      </div>
    </HeaderContainer>
  );
}

export default Header;
