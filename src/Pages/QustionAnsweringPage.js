import { useEffect, useState } from "react";
import HomeHeader from "../Components/HomeHeader";
import { Button1 } from "../StyledComonents/Button.style";
import { HeaderContainer } from "../StyledComonents/Header.styles";

function QuestionAnsweringPage(props) {
  const [questionArray, setQuestionArray] = useState([]);
  useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions?limit=5")
      .then((response) => response.json())

      .then((data) => setQuestionArray(data));
  }, []);
  console.log(questionArray);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickFoward = () => {
    setCurrentIndex(currentIndex + 1);
    console.log(currentIndex);
  };
  const handleClickBack = () => {
    setCurrentIndex(currentIndex - 1);
    console.log(currentIndex);
  };

  return (
    <>
      <HeaderContainer>
        <HomeHeader />
      </HeaderContainer>
      <div className="pt-24 mx-12 min-h-screen  bg-white">
        {questionArray.map((questionSet, index) => {
          return (
            <div key={index}>
              {currentIndex === index && (
                <div>
                  <div className="flex flex-col justify-center items-center  h-40 w-full bg-yellow-400">
                    <h1 className=" text-center text-white text-3xl font-semibold">
                      Question{index + 1}: {questionSet.question}
                    </h1>
                  </div>
                  <p>
                    Options:
                    {[...questionSet.incorrectAnswers]}
                    {questionSet.correctAnswer}
                  </p>
                  <p>Answer:{questionSet.correctAnswer}</p>
                </div>
              )}
            </div>
          );
        })}
        <div className="w-full px-10 flex justify-between">
          {currentIndex > 0 && (
            <Button1 onClick={handleClickBack}>Prev</Button1>
          )}

          {currentIndex < 4 && (
            <Button1 onClick={handleClickFoward}>Next</Button1>
          )}
        </div>
      </div>
    </>
  );
}

export default QuestionAnsweringPage;
