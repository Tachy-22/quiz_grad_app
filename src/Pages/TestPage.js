import { useEffect, useState } from "react";
import { Button1 } from "../StyledComonents/Button.style";

function TestPage(props) {
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
      <div className="pt-20 min-h-screen">
        {questionArray.map((questionSet, index) => {
          return (
            <div key={index}>
              {currentIndex === index && (
                <div>
                  <h1>
                    Question{index + 1}: {questionSet.question}
                  </h1>
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
        <div>
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

export default TestPage;
