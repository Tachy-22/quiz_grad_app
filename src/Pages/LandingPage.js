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
          <div className="lg:w-3/5  w-full   lg:space-y-20 space-y-10 md:pb-32  px-12   md:pt-40 ">
            <div className=" w-full  ">
              <H1>Learn </H1>
              <H1>new concepts</H1>
              <H1>for each question</H1>
            </div>
            <div>
              <p className="border-l-4 solid border-gray-500 pl-3 md:text-3xl text-2xl  text-gray-400 font-semibold ">
                We help you prepare for tests and quizes
              </p>
            </div>
            <div className="space-x-6">
              <Button1 onClick={() => navigate("login")}>Start Solving</Button1>
              <p1>know more</p1>
            </div>
          </div>

          <img
            className="w-full   md:pt-0 pt-10 rounded-xl"
            src={LandingSvg}
            alt="svg"
          />
        </LandingPageMain>
      </Background>
    </>
  );
}

export default LandingPage;
