import React from "react";
import { Button1 } from "../StyledComonents/Button.style";
import { LandingPageMain } from "../StyledComonents/Background.style";
import LandingSvg from "./imgB/LandingPageSvg.svg";
import { H1 } from "../StyledComonents/Typography";
function LandingPage(props) {
  return (
    <>
      <LandingPageMain>
        <div className="w-1/2 ">
          <div>
            <H1 className="font-bold">Learn new concepts for each question</H1>
          </div>
          <div>
            <p>We help you prepare for tets and quizes</p>
          </div>
          <div>
            <Button1>Start Solving</Button1> know more
          </div>
        </div>

        <img className="w-1/2" src={LandingSvg} alt="svg" />
      </LandingPageMain>
    </>
  );
}

export default LandingPage;
