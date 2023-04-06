import React from "react";
import { useNavigate } from "react-router";
import { Button1 } from "../StyledComonents/Button.style";

function ScorePage({ score }) {
  const navigate = useNavigate();
  const handleCompletion = () => {
    navigate("/home");
  };
  return (
    <div
      className={`bg-scoreImage text-white flex flex-col items-center md:justify-center justify-start relative bg-white md:w-1/2 w-11/12 h-3/5 p-2 rounded-md `}
    >
      <div className="flex flex-col bg-yellow-300  w-48  md:h-72 justify-center items-center text-center   p-5 rounded-full">
        <p className="text-xl w-4/5">Your score is</p>
        <p className=" text-9xl">{score}</p>
      </div>
      <form className="h-full flex items-end" onSubmit={handleCompletion}>
        <div className="md:absolute bottom-5 right-5 ">
          <Button1>Complete</Button1>
        </div>
      </form>
    </div>
  );
}

export default ScorePage;
