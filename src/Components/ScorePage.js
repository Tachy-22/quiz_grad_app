import React from "react";
import { useNavigate } from "react-router";
import { Button1 } from "../StyledComonents/Button.style";

function ScorePage({ score }) {
  const navigate = useNavigate();
  const handleCompletion = () => {
    navigate("/home");
  };
  return (
    <div className="pt-20 text-white flex flex-col items-center  relative bg-white md:w-1/2 w-11/12 h-3/5 p-10 rounded-md">
      <div className="flex flex-col bg-yellow-300 w-72 h-72 justify-center items-center text-center rounded-full">
        <p className="text-2xl">Your score is</p>
        <p className=" text-9xl">{score}</p>
      </div>
      <form onSubmit={handleCompletion}>
        <div className="md:absolute bottom-5 right-5 pt-8">
          <Button1>Complete</Button1>
        </div>
      </form>
    </div>
  );
}

export default ScorePage;
