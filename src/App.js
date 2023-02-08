import React from "react";
import { Button1, Button2 } from "./StyledComonents/Button.style";
import { Textbox, TextBoxContainer } from "./StyledComonents/TextBox.style";
import Logo from "./img/QuizLogo.JPG";
import { Background } from "./StyledComonents/Background.style";
import Header from "./Components/Header";

function App(props) {
  return (
    <Background>
      <Header></Header>
      <Button1>Type 1</Button1>
      <Button2>Type 2</Button2>
      <TextBoxContainer>
        <label for="textbox">Email Address:</label>
        <Textbox id="textbox" placeholder="example@quiz.com" />
      </TextBoxContainer>
      <img src={Logo} alt="app logo" />
    </Background>
  );
}

export default App;
