import React, { useState } from "react";

function ProgressBar({ currentIndex }) {
  const [clicked, setClicked] = useState(false);
  const progressArray = [1, 2, 3, 4, 5];
  const currentQuestion =
    "flex justify-center items-center w-12 h-12 rounded-full border-8  border-yellow-300";
  const otherQuestions =
    "flex justify-center  items-center w-12 h-12 rounded-full border-8  ";

  const handleClick = (index) => {
    setClicked(true);
    alert("yes");
  };

  return (
    <div className="flex justify-around w-2/5 m-10">
      {progressArray.map((questionNumber, index) => {
        return (
          <div className="flex justify-center items-center ">
            <div
              oncClick={() => {
                handleClick(index);
              }}
              className={
                clicked || index <= currentIndex
                  ? currentQuestion
                  : otherQuestions
              }
            >
              <div> {questionNumber}</div>
            </div>
            {index < 4 && (
              <progress
                value={index > currentIndex - 1 ? "0" : "20"}
                className=" h-3 "
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;
