import { useEffect, useState } from "react";
import HomeHeader from "../Components/HomeHeader";
import ProgressBar from "../Components/ProgressBar";
import ScorePage from "../Components/ScorePage";
import { Button1 } from "../StyledComonents/Button.style";
import { HeaderContainer } from "../StyledComonents/Header.styles";

function QuestionAnsweringPage({ userEmail }) {
  const [index, setIndex] = useState();
  const [optionObject, setOptionObject] = useState();
  const [count, setCount] = useState(0);
  const [questionArray, setQuestionArray] = useState([]);
  //const [shuffledOptions, setShuffledOptions]=useState()
  const options = questionArray.map((questionArray) => {
    return [questionArray.correctAnswer, ...questionArray.incorrectAnswers];
  });

  console.log("options", options);

  const answer = questionArray.map((answers) => {
    return [answers.correctAnswer];
  });

  useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions?limit=5")
      .then((response) => response.json())

      .then((data) => setQuestionArray(data));
  }, []);
  console.log(questionArray);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickFoward = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const handleClickBack = () => {
    setCurrentIndex(currentIndex - 1);
  };
  console.log("email:", userEmail);

  const handleAnswerSelection = (index, indexChosen, option) => {
    setIndex(indexChosen);
    const optionObject = options[indexChosen].map((choices) => {
      return { optionVal: choices, clicked: false };
    });

    optionObject[index].clicked = !optionObject[index].clicked;
    setOptionObject(optionObject);
    console.log(
      "the option selected has clicked value",
      optionObject[index].clicked
    );
    console.log("answer", answer);
  };
  const handleQuestionChange = (event) => {
    event.preventDefault();

    const AnswerObj = optionObject.map((optionObj) => {
      if (optionObj.clicked) {
        return optionObj.optionVal;
      } else {
        return null;
      }
    });

    const chosen = AnswerObj.filter((selected) => selected !== null);
    console.log(
      "answer",
      chosen[0],
      AnswerObj,
      AnswerObj.indexOf(answer[index]),
      answer[index][0]
    );
    if (chosen[0] === answer[index][0]) {
      setCount(count + 1);
      console.log(count);
    } else {
      console.log(count);
      return count;
    }
  };
  console.log(count);
  console.log("This is the optionObject", optionObject);

  return (
    <div className="flex justify-center">
      <HeaderContainer>
        <HomeHeader userEmail={userEmail} />
      </HeaderContainer>
      <div className="pt-32 w-4/5 h-screen  flex flex-col items-center   bg-white ">
        <ProgressBar currentIndex={currentIndex} />
        {questionArray.map((questionSet, index1) => {
          return (
            <div className="min-w-full  " key={index1}>
              {currentIndex === index1 && (
                <div>
                  <div className="flex flex-col justify-center items-center p-10  h-96 w-full bg-yellow-400 ">
                    <h1 className=" text-center text-white text-3xl font-semibold">
                      {questionSet.question}
                    </h1>
                  </div>
                  <div className="flex ">
                    {options[index1].map((option, index) => {
                      return (
                        <div
                          onClick={() => {
                            handleAnswerSelection(index, index1, option);
                          }}
                          key={index}
                          className={`flex justify-center items-center  border-4 border-gray-400 rounded-lg p-5 mx-5 my-10  h-32 w-full cursor-pointer`}
                        >
                          <p>{option}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <form
          onSubmit={handleQuestionChange}
          className="  w-full mt-10  flex justify-around  align-bottom"
        >
          <Button1
            disabled={currentIndex > 0 ? false : true}
            onClick={handleClickBack}
          >
            Prev
          </Button1>

          <Button1
            className={
              currentIndex === 4 && "border-4 border-red-500 text-red-500"
            }
            disabled={currentIndex < 5 ? false : true}
            onClick={handleClickFoward}
          >
            {currentIndex > 3 ? "Submit" : " Next"}
          </Button1>
        </form>
      </div>
      {currentIndex === 5 && (
        <div className=" absolute backdrop-brightness-50  w-screen h-screen flex flex-col justify-center items-center">
          <ScorePage score={count} />
        </div>
      )}
    </div>
  );
}

export default QuestionAnsweringPage;
