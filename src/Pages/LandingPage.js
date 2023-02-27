import React from "react";
import { Button1 } from "../StyledComonents/Button.style";
import {
  Background,
  LandingPageMain,
} from "../StyledComonents/Background.style";
import LandingSvg from "../img/LandingPageSvg.svg";
import { H1 } from "../StyledComonents/Typography";
import { useNavigate } from "react-router";
import Header from "../Components/Header";
import { Button2 } from "../StyledComonents/Button.style";
import { HeaderContainer } from "../StyledComonents/Header.styles";

function LandingPage(props) {
  const navigate = useNavigate();

  return (
    <>
      <Background>
        <HeaderContainer>
          <Header />
          <div>
            <Button2
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button2>
          </div>
        </HeaderContainer>

        <LandingPageMain>
          <div className="w-1/2 space-y-20 pb-32 pl-40">
            <div className="w-4/5">
              <H1>Learn </H1>
              <H1>new concepts</H1>
              <H1>for each question</H1>
            </div>
            <div>
              <p className="border-l-4 solid border-gray-500 pl-3 text-3xl text-gray-400 font-semibold ">
                We help you prepare for tests and quizes
              </p>
            </div>
            <div className="space-x-6">
              <Button1 onClick={() => navigate("login")}>Start Solving</Button1>
              <p1>know more</p1>
            </div>
          </div>

          <img className="w-1/2 rounded-xl" src={LandingSvg} alt="svg" />
        </LandingPageMain>
      </Background>
    </>
  );
}

export default LandingPage;
