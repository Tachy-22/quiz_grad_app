import React from "react";
import { Button1 } from "../StyledComonents/Button.style";
import { LandingPageMain } from "../StyledComonents/Background.style";
import LandingSvg from "./imgB/LandingPageSvg.svg";

function LandingPage(props) {
  return (
    <>
      <LandingPageMain>
        <div>
          <div>
            <h1>Learn new consepts for each question</h1>
          </div>
          <div>
            <p>We help you prepare for tets and quizes</p>
          </div>
          <div>
            <Button1>Start Solving</Button1> know more
          </div>
        </div>

        <img src={LandingSvg} alt="svg" />
      </LandingPageMain>
    </>
  );
}

export default LandingPage;
